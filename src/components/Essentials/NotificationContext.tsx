// src/components/Essentials/NotificationContext.tsx
"use client";
import { getQOTD, getReminders } from "@/app/(main)/dashboard/dashboard-action";
import { useUser } from "@clerk/nextjs";
import React, { createContext, useContext, useEffect, useState } from "react";
import { toast } from "sonner";

type Notification = { id: number; message: string; read: boolean };
type NotificationContextType = {
  notifications: Notification[];
  addNotification: (message: string) => void;
  markAsRead: (id: number) => void;
  unreadCount: number;
};

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined,
);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isSignedIn } = useUser();
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    if (!isSignedIn) return;

    const getData = async () => {
      const QOTD = await getQOTD();

      if (QOTD?.serverError) {
        toast.error("Failed to fetch QOTD");
      }

      const data = {
        problemTitle: QOTD?.data?.questionTitle,
      };
      addNotification(data.problemTitle ? `QOTD: ${data.problemTitle}` : "Check QOTD");

      const reminders = await getReminders();
      if (reminders?.serverError) {
        toast.error("Failed to fetch notifications");
      }
      reminders?.data?.forEach(
        (r) =>
          r.reminderStatus === "PENDING" && addNotification(r.problemTitle),
      );
    };
    getData();
  }, [isSignedIn]);

  const addNotification = (message: string) => {
    // check if the message is already in the notifications array
    if (notifications.some((n) => n.message === message)) return;

    setNotifications((prev) => [
      ...prev,
      { id: Date.now(), message, read: false },
    ]);
  };

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  };

  const unreadCount = notifications.filter((n) => !n.read).length;

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
