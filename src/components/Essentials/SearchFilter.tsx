"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";

interface Reminder {
  id: string;
  question: string;
  status: "pending" | "completed";
  level: "easy" | "medium" | "hard";
  // Add other properties as needed
}

interface SearchFilterProps {
  reminders: Reminder[];
  onFilterChange: (filtered: Reminder[]) => void;
}

export default function SearchFilter({ 
  reminders,
  onFilterChange 
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
      filtered = filtered.filter(reminder =>
        reminder.question.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (status !== "all") {
      filtered = filtered.filter(reminder => reminder.status === status);
    }

    if (level !== "all") {
      filtered = filtered.filter(reminder => reminder.level === level);
    }

    onFilterChange(filtered);
  };

  return (
    <div className="p-4 bg-white border rounded">
      <div>
        <h2 className="text-xl font-bold">Search & Filter</h2>
        <p className="text-sm text-muted-foreground font-semibold">
          Find and filter your reminders
        </p>
      </div>

      <div className="mt-2 flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
        <div className="relative w-full sm:flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search problems..."
            className="pl-8"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="w-36">
            <SelectValue placeholder="All Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
          </SelectContent>
        </Select>

        <Select value={level} onValueChange={setLevel}>
          <SelectTrigger className="w-36">
            <SelectValue placeholder="All Levels" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="medium">Medium</SelectItem>
            <SelectItem value="hard">Hard</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
