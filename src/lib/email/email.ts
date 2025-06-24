import { db } from "@/lib/db";
import { getQuestionOfTheDay } from "@lib/leetcode";
import { PROBLEM_DIFFICULTY, Reminder } from "@prisma-client";
import { reminderEmailTemplate, weeklyReportTemplate } from "./email-templates";
import { transporter } from "./mail";

interface SendEmailOptions {
  to: string;
  subject: string;
  html: string;
  text: string;
}

export async function sendEmail({ to, subject, html, text }: SendEmailOptions) {
  try {
    const msg = await transporter.sendMail({
      from: `"Leet Track" <${process.env.EMAIL_USER!}>`,
      to,
      subject,
      html,
      text,
    });
    console.log(msg);
    return msg;
  } catch (err) {
    console.error("Resend sendEmail error:", err);
    throw err;
  }
}

// Send individual reminder email
export async function sendReminderEmails() {
  try {
    const users = await db.user.findMany({
      where: {
        sendUpcomingReminder: true,
      },
      include: {
        reminder: {
          where: {
            reminderStatus: "UPCOMING",
            scheduledDate: {
              // Get Reminders Due Today
              equals: new Date(new Date().toISOString().split("T")[0]),
              // Get reminders due yesterday/in the past
              lte: new Date(new Date().toISOString().split("T")[0]),
            },
          },
          orderBy: {
            scheduledDate: "desc",
          },
        },
      },
    });

    const QOTD = await getQuestionOfTheDay();

    const sentEmails = Promise.allSettled(
      users.map((user) => {
        user.reminder.push({
          id: `${user.externalUserId}-${QOTD.titleSlug}`,
          createdAt: new Date(),
          updatedAt: new Date(),
          problemTitle: `QOTD: ${QOTD.questionTitle}`,
          problemSlug: QOTD.titleSlug,
          problemDifficulty:
            QOTD.difficulty.toUpperCase() as PROBLEM_DIFFICULTY,
          reminderStatus: "PENDING",
          scheduledDate: new Date(),
          userId: user.externalUserId,
        } satisfies Reminder);

        const template = reminderEmailTemplate({
          userName: user.email.split("@")[0],
          reminders: user.reminder,
        });
        return sendEmail({
          to: user.email,
          subject: template.subject,
          html: template.html,
          text: template.text,
        });
      }),
    );
    sentEmails.catch((error) => {
      console.error("Error sending reminder email:", error);
      throw error;
    });
    await db.reminder.updateMany({
      data: {
        reminderStatus: "PENDING",
      },
      where: {
        id: {
          in: users.flatMap((u) => u.reminder.map((reminder) => reminder.id)),
        },
      },
    });
  } catch (error) {
    console.error("Error sending reminder email:", error);
    throw error;
  }
}

// Send weekly report email
export async function sendWeeklyReportEmail() {
  // Calculate week start and end dates
  const now = new Date(new Date().toISOString().split("T")[0]);
  const weekStart = new Date(now.setDate(now.getDate() - now.getDay()));
  weekStart.setHours(0, 0, 0, 0);
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekStart.getDate() + 6);
  weekEnd.setHours(23, 59, 59, 999);

  try {
    const users = await db.user.findMany({
      where: { sendWeeklyReport: true },
      include: {
        reminder: {
          where: {
            scheduledDate: {
              // get all completed reminders for the week
              gte: weekStart,
              lte: weekEnd,
            },
          },
          orderBy: {
            scheduledDate: "desc",
          },
        },
      },
    });

    if (!users) {
      throw new Error("User not found");
    }

    const sentEmails = Promise.allSettled(
      users.map(async (user) => {
        if (user.reminder.length === 0) return;

        // Get completed reminders for this week
        const { reminder: completedReminders } = user;
        var [easyCompleted, mediumCompleted, hardCompleted] = [0, 0, 0];
        completedReminders.forEach((r) => {
          if (r.reminderStatus !== "COMPLETED") return;
          if (r.problemDifficulty === "EASY") {
            easyCompleted++;
          } else if (r.problemDifficulty === "MEDIUM") {
            mediumCompleted++;
          } else if (r.problemDifficulty === "HARD") {
            hardCompleted++;
          }
        });
        const emailData = {
          userName: user.email.split("@")[0],
          completedProblems: easyCompleted + mediumCompleted + hardCompleted,
          totalReminders: user.reminder.length,
          easyCompleted,
          mediumCompleted,
          hardCompleted,
          weekStartDate: weekStart.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
          weekEndDate: weekEnd.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          }),
        };

        const template = weeklyReportTemplate(emailData);
        return await sendEmail({
          to: user.email,
          subject: template.subject,
          html: template.html,
          text: template.text,
        });
      }),
    );
    sentEmails.catch((error) => {
      console.error("Error sending weekly report:", error);
      throw error;
    });
  } catch (error) {
    console.error("Error sending weekly report:", error);
    throw error;
  }
}
