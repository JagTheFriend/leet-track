"use client";

import React, { useEffect, useState } from "react";
import DashboardCalendarToggle from "@components/Essentials/DashboardCalendarToggle";
import { AddReminderModal } from "@components/Essentials/ReminderDialog";
import Reminders from "@components/Essentials/Reminders";
import ReminderTable from "@components/Essentials/ReminderTable";
import SearchFilter from "@components/Essentials/SearchFilter";
import WelcomeBanner from "@components/Essentials/WelcomeBanner";
import { getReminders } from "./dashboard-action";

// Define the Reminder type according to your data model
interface Reminder {
  id: string;
  question: string;
  status: "pending" | "completed";
  level: "easy" | "medium" | "hard";
  // Add other properties as needed
}

export default function Dashboard() {
  const [reminders, setReminders] = useState<Reminder[]>([]);
  const [filteredReminders, setFilteredReminders] = useState<Reminder[]>([]);
  const [loading, setLoading] = useState(true);
  const [serverError, setServerError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch reminders on mount
    const fetchReminders = async () => {
      setLoading(true);
      setServerError(null);
      try {
        const receivedData = await getReminders();
        if (receivedData?.serverError) {
          setServerError("An error occurred while fetching reminders.");
          setReminders([]);
          setFilteredReminders([]);
        } else {
          setReminders(receivedData?.data || []);
          setFilteredReminders(receivedData?.data || []);
        }
      } catch (err) {
        setServerError("An error occurred while fetching reminders.");
        setReminders([]);
        setFilteredReminders([]);
      } finally {
        setLoading(false);
      }
    };
    fetchReminders();
  }, []);

  if (loading) {
    return <div className="p-8 text-center">Loading reminders...</div>;
  }

  if (serverError) {
    return <div className="p-8 text-center text-red-600">{serverError}</div>;
  }

  return (
    <main className="flex flex-col pt-2 mt-0">
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
