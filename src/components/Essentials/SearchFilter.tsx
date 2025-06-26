"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Reminder } from "@prisma-client";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

interface SearchFilterProps {
  reminders: Reminder[];
  onFilterChange: (filtered: Reminder[]) => void;
}

const selectItemStyles =
  "data-[highlighted]:bg-[#e0e7ff] data-[highlighted]:text-black data-[state=checked]:bg-[#6366f1] data-[state=checked]:text-white ";

export default function SearchFilter({
  reminders,
  onFilterChange,
}: SearchFilterProps) {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("all");
  const [level, setLevel] = useState("all");

  // Debounce search input
  useEffect(() => {
    const handler = setTimeout(() => {
      applyFilters();
    }, 300);

    return () => clearTimeout(handler);
  }, [search, status, level]);

  const applyFilters = () => {
    let filtered = [...reminders];

    if (search) {
      filtered = filtered.filter((reminder) =>
        reminder.problemTitle.toLowerCase().includes(search.toLowerCase()),
      );
    }

    if (status !== "all") {
      filtered = filtered.filter(
        (reminder) => reminder.reminderStatus === status,
      );
    }

    if (level !== "all") {
      filtered = filtered.filter(
        (reminder) => reminder.problemDifficulty === level,
      );
    }

    onFilterChange(filtered);
  };

  return (
    <div className="p-4 rounded-lg shadow-md border border-[#e5e7eb] dark:border-[#6366f1]">
      <div>
        <h2 className="text-xl text-gray-800 font-semibold ">Search & Filter</h2>
        <p className="text-sm text-muted-foreground ">
          Find and filter your reminders
        </p>
      </div>

      <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
        <div className="relative w-full sm:flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search problems..."
            className="  pl-8
    border
    border-[#e5e7eb]
    bg-white
    text-gray-900
    dark:border-[#d1d5db]
    dark:bg-[#e2e8f0]
    dark:text-gray-600
    dark:focus:border-[#6366f1]
    focus:ring-0
    focus:outline-none
    transition-colors"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-36  border border-[#e5e7eb] dark:border-[#d1d5db] bg-white dark:bg-[#e0e7ff] text-gray-700 dark:text-gray-600 focus:border-[#6366f1] focus:ring-0 focus:outline-none cursor-pointer">
            <SelectValue 
            placeholder="All Status"
              className="text-gray-700 dark:text-gray-200"
             />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" className={selectItemStyles}>All Status</SelectItem>
            <SelectItem value="PENDING" className={selectItemStyles}>Pending</SelectItem>
            <SelectItem value="COMPLETED" className={selectItemStyles}>Completed</SelectItem>
            <SelectItem value="UPCOMING" className={selectItemStyles}>Upcoming</SelectItem>
          </SelectContent>
        </Select>

        <Select value={level} onValueChange={setLevel}>
          <SelectTrigger className="w-36  border border-[#e5e7eb] dark:border-[#d1d5db] bg-white dark:bg-[#e0e7ff] text-gray-700 dark:text-gray-600 focus:border-[#6366f1] focus:ring-0 focus:outline-none cursor-pointer">
            <SelectValue placeholder="All Levels" 
                className="text-gray-700 dark:text-gray-900"
                />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all" className={selectItemStyles}>All Levels</SelectItem>
            <SelectItem value="EASY" className={selectItemStyles}>Easy</SelectItem>
            <SelectItem value="MEDIUM" className={selectItemStyles}>Medium</SelectItem>
            <SelectItem value="HARD" className={selectItemStyles}>Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
