"use client";
import { Reminder } from "@prisma-client";
import { AlertTriangle, CalendarDays, CheckCircle, Clock } from "lucide-react";
import * as React from "react";

type ReminderStats = {
  "Total Reminders": number;
  "Upcoming Reminders": number;
  "Completed Questions": number;
  "Missed Reminders": number;
};

const iconMap: Record<
  keyof ReminderStats,
  { icon: React.ReactNode; color: string }
> = {
  "Total Reminders": {
    icon: <CalendarDays className="text-blue-500 mt-1.5" size={12} />,
    color: "text-blue-500",
  },
  "Upcoming Reminders": {
    icon: <Clock className="text-orange-500 mt-1.5" size={12} />,
    color: "text-orange-500",
  },
  "Completed Questions": {
    icon: <CheckCircle className="text-green-500 mt-1.5" size={12} />,
    color: "text-green-500",
  },
  "Missed Reminders": {
    icon: <AlertTriangle className="text-red-500 mt-1.5" size={12} />,
    color: "text-red-500",
  },
};

const Reminders = ({ reminders }: { reminders: Reminder[] }) => {
  const reminderData: ReminderStats = {
    "Total Reminders": reminders.length,
    "Upcoming Reminders": reminders.filter(
      (r) => r.reminderStatus === "UPCOMING",
    ).length,
    "Completed Questions": reminders.filter(
      (r) => r.reminderStatus === "COMPLETED",
    ).length,
    "Missed Reminders": reminders.filter(
      // Missed reminders are those that are pending
      (r) => r.reminderStatus === "PENDING",
    ).length,
  };

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <div className="w-full gap-3 grid grid-cols-4">
      {/* Stat Cards */}
      {Object.entries(reminderData).map(([label, value]) => {
        const { icon } = iconMap[label as keyof ReminderStats];
        return (
          <div key={label} className="border w-full h-24 p-4 rounded-lg border-[#e5e7eb] shadow-md">
            <div className="flex items-center justify-between">
              <h3 className="text-sm text-[#6b7280] whitespace-nowrap">
                {label}
              </h3>
              {icon}
            </div>
            <p className="text-2xl font-semibold text-gray-800">{value}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Reminders;
