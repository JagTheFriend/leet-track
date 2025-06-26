// src/components/Essentials/NotificationContext.tsx
"use client";
import { getReminders, markNotifAsRead } from "@/app/(main)/dashboard/dashboard-action";
import { useUser } from "@clerk/nextjs";
import { Reminder } from "@prisma-client";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

type NotificationContextType = {
  notifications: Reminder[];
  addNotification: (message: Reminder) => void;
  markAsRead: (id: string) => void;
  unreadCount: number;
};

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined,
);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isSignedIn } = useUser();
  const [notifications, setNotifications] = useState<Reminder[]>([]);

  useEffect(() => {
    if (!isSignedIn) return;

    const getData = async () => {
      const reminders = await getReminders();
      if (reminders?.serverError) {
        toast.error("Failed to fetch notifications");
      }
      reminders?.data?.forEach(
        (r) => !r.hasRead && r.reminderStatus === "PENDING" && addNotification(r),
      );
    };
    getData();
  }, [isSignedIn]);

  const addNotification = (reminder: Reminder) => {
    if (notifications.some((n) => n.problemSlug === reminder.problemSlug)) return;
    setNotifications((prev) => [...prev, reminder])
  };

  const markAsRead = async (id: string) => {
    setNotifications((prev) => prev.filter((r) => r.id != id))
    await markNotifAsRead({ reminderId: id })
  };

  const unreadCount = notifications.length

  return (
    <NotificationContext.Provider
      value={{ notifications, addNotification, markAsRead, unreadCount }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context)
    throw new Error("useNotification must be used within NotificationProvider");
  return context;
};
