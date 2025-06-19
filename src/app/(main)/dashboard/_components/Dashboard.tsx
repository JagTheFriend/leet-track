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
    <main className="  flex flex-col pt-2 mt-0">
      <div className="flex items-center justify-between mb-8">
        <WelcomeBanner />
        <div className="flex flex-row gap-2 items-center">
          <AddReminderModal />
          <DashboardCalendarToggle />
        </div>
      </div>

      <div className="flex flex-row items-start gap-4 mb-4">
        <div className="flex flex-1 gap-4">
          <Reminders reminders={reminders} />
        </div>
      </div>

      <div className="mb-3.5">
        <SearchFilter
          reminders={reminders}
          onFilterChange={setFilteredReminders}
        />
      </div>

      <div className="mb-5">
        <ReminderTable reminders={filteredReminders} />
      </div>
    </main>
  );
}
