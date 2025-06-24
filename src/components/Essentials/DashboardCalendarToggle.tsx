"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardCalendarToggle() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="relative w-full sm:w-auto">
      <Button
        className="bg-[#f3f4f6] text-gray-800 cursor-pointer flex items-center gap-2 shadow-md border border-[#e5e7eb] dark:border-[#e5e7eb] hover:bg-[#e0e7ff]"
        onClick={() => setShowCalendar((prev) => !prev)}
        type="button"
      >
        <CalendarIcon className="w-4 h-4" />
        {showCalendar ? "Hide Calendar" : "Show Calendar"}
      </Button>

      {showCalendar && (
        <div
          className="absolute mt-2 z-50 bg-white text-gray-800 dark:bg-[#f3f4f6] dark:text-gray-800 
          border border-[#e5e7eb] dark:border-[#e5e7eb] rounded-lg shadow-lg p-4 
          w-[90vw] sm:w-auto left-0 sm:right-0"
        >
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            className="rounded-md border border-[#e5e7eb] dark:border-[#e5e7eb] 
            bg-[#f3f4f6] text-gray-800 dark:bg-[#f3f4f6] dark:text-gray-800"
          />
        </div>
      )}
    </div>
  );
}
