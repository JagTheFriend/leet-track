'use client';

// SSidebar.tsx
import { CalendarCog, CalendarRange, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

interface SSidebarProps {
  // No props needed here anymore for open/setOpen, as Sidebar component and useSidebar handle it
}

const elements = [
  { title: "Dashboard", url: "dashboard", icon: LayoutDashboard },
  { title: "Calendar", url: "calendar", icon: CalendarRange },
  { title: "Settings", url: "settings", icon: CalendarCog },
];

export function SSidebar({ /* No props needed here anymore */ }: SSidebarProps) {
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const { openMobile, setOpenMobile } = useSidebar();

  useEffect(() => {
    if (openMobile && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [openMobile]);

  const SidebarLinks = (
    <SidebarContent className="flex-1 flex flex-col px-2">
      <SidebarGroup>
        <SidebarGroupLabel className="mb-1" />
        <SidebarGroupContent>
          <SidebarMenu className="space-y-2">
            {elements.map((ele) => {
              const isActive =
                (ele.url === "dashboard" && pathname === "/") ||
                (ele.url === "calendar" && pathname === "/") ||
                pathname.startsWith(`/${ele.url}`);
              return (
                <SidebarMenuItem key={ele.title}>
                  <SidebarMenuButton
                    asChild
                    className={`flex items-center gap-3 text-[#374151] dark:text-white hover:bg-[#e0e7ff] dark:hover:bg-[#4b5563]
                      ${isActive ? "bg-[#6366f1] text-white dark:text-[#0f172a] shadow-md" : ""}
                    `}
                  >
                    <Link href={`/${ele.url}`} prefetch onClick={() => setOpenMobile(false)}>
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
    <>
      <Sidebar
        className="hidden md:flex md:w-64 h-full flex-col justify-between pt-10 [&>div]:bg-[#f3f4f6] [&>div]:dark:bg-[#1e293b] text-black dark:text-white hover:bg-[#e0e7ff] shadow-md"
      >
        {SidebarLinks}
      </Sidebar>
    </>
  );
}
