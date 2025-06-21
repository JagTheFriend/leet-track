"use client";

import { deleteReminder } from "@/app/(main)/dashboard/dashboard-action";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@components/ui/badge";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@components/ui/context-menu";
import { cn } from "@lib/utils";
import { PROBLEM_DIFFICULTY, Reminder, REMINDER_STATUS } from "@prisma-client";
import { LoaderIcon, SquareArrowOutUpRight } from "lucide-react";
import { useAction } from "next-safe-action/hooks";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { toast } from "sonner";
import { EditReminderModal } from "./ReminderDialog";

export default function RemainderTable({
  reminders,
}: {
  reminders: Reminder[];
}) {
  return (
    <div className="border border-[#e5e7eb] dark:border-[#6366f1]  p-4 rounded-lg shadow-md ">
      <h2 className="text-xl text-gray-800 font-semibold">Your Reminders</h2>
      <p className="text-sm text-muted-foreground mb-2 ">
        Manage your scheduled LeetCode problem reminders
      </p>
      <Card className="dark:bg-[#d1d5db] text-black ">
        <CardContent className="p-1">
          <Table>
            <TableHeader className="text-base">
              <TableRow className="border-b border-[#e5e7eb] dark:border-[#6366f1] bg-[#f3f4f6] ">
                <TableHead className="dark:text-black">Question</TableHead>
                <TableHead className="dark:text-black">Difficulty</TableHead>
                <TableHead className="dark:text-black">Scheduled Date</TableHead>
                <TableHead className="dark:text-black">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className="text-base cursor-default">
              {reminders.map((reminder, index) => (
                <CustomContextMenu
                  key={index + Math.random()}
                  reminder={reminder}
                >
                  <TableRow
  className={cn(
    "cursor-pointer",
    "dark:border-b dark:border-b-[#6366f1] last:border-b-0", // <-- add this!
    reminder.reminderStatus === "COMPLETED"
      ? "opacity-50"
      : reminder.reminderStatus === "UPCOMING"
      ? "opacity-75"
      : ""
  )}
  onClick={() => {
    window.open(
      `https://leetcode.com/problems/${reminder.problemSlug}`,
      "_blank"
    );
  }}
>
  <TableRowContent reminder={reminder} />
</TableRow>

                </CustomContextMenu>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function TableRowContent({ reminder }: { reminder: Reminder }) {
  const getDifficultyBadge = useCallback((level: PROBLEM_DIFFICULTY) => {
    const variant = {
      EASY: "bg-green-100 text-green-600",
      MEDIUM: "bg-yellow-100 text-yellow-600",
      HARD: "bg-red-100 text-red-600",
    } as Record<PROBLEM_DIFFICULTY, string>;
    return (
      <span
        className={`px-2 py-1 rounded-md text-xs font-medium ${variant[level]}`}
      >
        {level}
      </span>
    );
  }, []);

  const getStatusBadge = useCallback((status: keyof typeof REMINDER_STATUS) => {
    const bgStyle =
      status === "COMPLETED"
        ? "bg-green-500"
        : status === "PENDING"
        ? "bg-red-500"
        : "bg-gray-600";
    return (
      <Badge variant={"secondary"} className={cn("text-white", bgStyle)}>
        {status}
      </Badge>
    );
  }, []);

  return (
    <>
      <TableCell>
        <Link
          className="flex flex-row gap-2  hover:underline"
          href={`https://leetcode.com/problems/${reminder.problemSlug}`}
          target="_blank"
          prefetch
        >
          {reminder.problemTitle}
          <SquareArrowOutUpRight size={10} className="mt-2" />
        </Link>
      </TableCell>
      <TableCell>{getDifficultyBadge(reminder.problemDifficulty)}</TableCell>
      <TableCell>
        {reminder.scheduledDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </TableCell>
      <TableCell>{getStatusBadge(reminder.reminderStatus)}</TableCell>
    </>
  );
}

function CustomContextMenu({
  children,
  reminder,
}: {
  children: React.ReactNode;
  reminder: Reminder;
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const {
    execute: executeDeleteReminder,
    hasErrored: deleteReminderError,
    hasSucceeded: deleteReminderSuccess,
    isExecuting: isDeletingReminder,
  } = useAction(deleteReminder);

  useEffect(() => {
    if (deleteReminderSuccess) {
      toast.success("Successfully deleted reminder");
    }
    if (deleteReminderError) {
      toast.error("An error occurred while deleting reminder");
    }
  }, [deleteReminderError, deleteReminderSuccess]);

  return (
    <>
      <ContextMenu>
        <ContextMenuTrigger asChild>{children}</ContextMenuTrigger>
        <ContextMenuContent className="max-w-fit">
          <ContextMenuItem inset onClick={() => setIsDialogOpen(true)}>
            Edit
          </ContextMenuItem>
          <ContextMenuSeparator />
          <ContextMenuItem
            inset
            onClick={() => {
              executeDeleteReminder({ reminderId: reminder.id });
            }}
          >
            {!isDeletingReminder ? (
              "Delete"
            ) : (
              <LoaderIcon className="animate-spin" />
            )}
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
      <EditReminderModal
        reminder={reminder}
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </>
  );
}
