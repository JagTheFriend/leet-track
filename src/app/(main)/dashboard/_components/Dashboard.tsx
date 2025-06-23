"use client";

import DashboardCalendarToggle from "@components/Essentials/DashboardCalendarToggle";
import { AddReminderModal } from "@components/Essentials/ReminderDialog";
import Reminders from "@components/Essentials/Reminders";
import ReminderTable from "@components/Essentials/ReminderTable";
import SearchFilter from "@components/Essentials/SearchFilter";
import WelcomeBanner from "@components/Essentials/WelcomeBanner";
import { Reminder } from "@prisma-client";
import { useEffect, useState } from "react";

export default function Dashboard({ reminders }: { reminders: Reminder[] }) {
  const [filteredReminders, setFilteredReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    setFilteredReminders(reminders);
  }, [reminders]);

  return (
    <main className="flex flex-col pt-0 mt-0 bg-white dark:bg-[#e2e8f0] min-h-screen">
      {/* Header with responsive padding and stacking */}
      <div className="flex flex-wrap items-center justify-between mb-8 px-4 sm:px-8">
        <WelcomeBanner />
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4 items-center mt-2 sm:mt-0">
          <AddReminderModal />
          <DashboardCalendarToggle />
        </div>
      </div>

      {/* Main content with responsive padding */}
      <div className="flex flex-col sm:flex-row items-start gap-4 mb-4 px-4 sm:px-8">
        <div className="flex-1">
          <Reminders reminders={reminders} />
        </div>
      </div>

      {/* SearchFilter with responsive padding */}
      <div className="mb-3.5 px-4 sm:px-8">
        <SearchFilter
          reminders={reminders}
          onFilterChange={setFilteredReminders}
        />
      </div>

      {/* ReminderTable with responsive padding */}
      <div className="mb-5 px-4 sm:px-8">
        <ReminderTable reminders={filteredReminders} />
      </div>
    </main>
  );
}
