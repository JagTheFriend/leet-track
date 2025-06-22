"use client";
import { CalendarCog, CalendarRange, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useRef } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface SSidebarProps {
  children?: ReactNode;
  open: boolean;
  setOpen: (val: boolean) => void;
}

const elements = [
  { title: "Dashboard", url: "dashboard", icon: LayoutDashboard },
  { title: "Calendar", url: "calendar", icon: CalendarRange },
  { title: "Settings", url: "settings", icon: CalendarCog },
];

export function SSidebar({ children, open, setOpen }: SSidebarProps) {
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [open]);

  const SidebarLinks = (
    <SidebarContent className="flex-1 flex flex-col px-2">
      <SidebarGroup>
        <SidebarGroupLabel className="mb-1" />
        <SidebarGroupContent>
          <SidebarMenu className="space-y-2">
            {elements.map((ele) => {
              const isActive =
                (ele.url === "dashboard" && pathname === "/") ||
                pathname.startsWith(`/${ele.url}`);
              return (
                <SidebarMenuItem key={ele.title}>
                  <SidebarMenuButton
                    asChild
                    className={`flex items-center gap-3 text-[#374151] dark:text-white hover:bg-[#e0e7ff] dark:hover:bg-[#4b5563]
                      ${isActive ? "bg-[#6366f1] text-white dark:text-[#0f172a] shadow-md" : ""}
                    `}
                  >
                    <Link href={`/${ele.url}`} prefetch>
                      <ele.icon size={20} className="shrink-0" />
                      <span className="text-base">{ele.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </SidebarContent>
  );

  return (
    <div className="flex h-screen">
      {/* Desktop sidebar */}
      <Sidebar className="hidden md:flex md:w-64 h-full flex-col justify-between pt-10 [&>div]:bg-[#f3f4f6] [&>div]:dark:bg-[#1e293b] text-black dark:text-white hover:bg-[#e0e7ff] shadow-md">
        {SidebarLinks}
      </Sidebar>

      {/* Main content area */}
      <main className="flex-1 bg-white dark:bg-[#0f172a] overflow-y-auto mt-16">
        {children}
      </main>

      {/* Mobile sidebar */}
      {open && (
        <div className="fixed inset-0 z-40 flex md:hidden " role="dialog">
          {/* Clickable overlay */}
          <div
            className="fixed inset-0 bg-black/20  "
            onClick={() => setOpen(false)}
          />

          {/* Sidebar panel */}
          <Sidebar className="relative w-64 h-full flex flex-col justify-between pt-10 bg-[#f3f4f6] dark:bg-[#1e293b] shadow-md z-50 left-0">
            {/* Close button */}
            <button
              ref={closeButtonRef}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 focus:outline-none"
              onClick={() => setOpen(false)}
              aria-label="Close sidebar"
            >
              <span aria-hidden="true">&times;</span>
            </button>
            {SidebarLinks}
          </Sidebar>
        </div>
      )}
    </div>
  );
}
