"use client";

import { Reminder } from "@prisma-client";
import {
  addDays,
  endOfMonth,
  endOfWeek,
  isSameDay,
  isSameMonth,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import React from "react";

type CalendarProps = {
  currentMonth: Date;
  reminders: Reminder[];
  completedDates: Record<string, boolean>;
  onToggleCompletion: (dateStr: string) => void;
};

export default function CalendarMonth({
  currentMonth,
  reminders,
}: CalendarProps) {
  const startDate = startOfWeek(startOfMonth(currentMonth));
  const endDate = endOfWeek(endOfMonth(currentMonth));
  const today = new Date();
  const days: React.JSX.Element[] = [];

  let day = startDate;

  while (day <= endDate) {
    const dayReminders = reminders.filter((r) =>
      isSameDay(new Date(r.scheduledDate), day),
    );
    const isToday = isSameDay(day, today);

    // Tick/cross logic
    let statusIcon = null;
    if (dayReminders.length > 0) {
      const allCompleted = dayReminders.every(
        (r) => r.reminderStatus === "COMPLETED",
      );
      statusIcon = (
        <span className={`ml-2 text-lg`}>
          {allCompleted ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <XCircle className="w-5 h-5 text-red-400" />
          )}
        </span>
      );
    } 

    const dayBg = !isSameMonth(day , currentMonth)
      ? "bg-gray-100 text-gray-400" 
      : "bg-white text-black";

    days.push(
      <div
        key={day.toDateString()}
        className={`border min-h-[80px] sm:min-h-[100px] text-xs sm:text-sm relative rounded-xl p-2 sm:p-3 shadow-sm hover:bg-gray-50 transition-colors duration-100 ${dayBg}`}
      >
        <div className="flex justify-between items-start mb-1">
          <div
            className={`w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-xs sm:text-sm font-semibold rounded-full ${
              isToday ? "bg-[#6366f1] text-white " : ""
            }`}
          >
            {day.getDate()}
          </div>
          {statusIcon}
        </div>

        <div className="flex flex-col gap-1">
          {dayReminders.map((reminder, idx) => (
            <Link
              href={`https://leetcode.com/problems/${reminder.problemSlug}`}
              target="_blank"
              key={idx}
              className={`text-xs truncate cursor-pointer ${
                reminder.reminderStatus === "PENDING"
                  ? "text-red-600"
                  : reminder.reminderStatus === "COMPLETED"
                    ? "text-green-600"
                    : "text-yellow-600"
              }`}
              prefetch
            >
              <div className="flex flex-row gap-1 items-center">
                ⦿ {reminder.problemTitle}
              </div>
            </Link>
          ))}
        </div>
      </div>,
    );

    day = addDays(day, 1);
  }

  return (
    <div className="bg-white rounded-xl shadow-md overflow-x-auto border">
      {/* Days of week header - FIXED */}
      <div className="grid grid-cols-7 text-center bg-gray-100 dark:bg-[#d1d5db] dark:text-gray-700 text-xs sm:text-sm font-medium p-2 rounded-t-xl min-w-[700px]">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </div>
      
      {/* Calendar grid - FIXED */}
      <div className="grid grid-cols-7 gap-px min-w-[700px]">
        {days}
      </div>
    </div>
  );
}
