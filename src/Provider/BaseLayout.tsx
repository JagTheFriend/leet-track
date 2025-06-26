"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@components/Essentials/Navbar";
import { SSidebar } from "@components/Essentials/SSidebar";

export default function BaseLayout({
  children,
  children,
}: {
  children: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <div className="relative flex h-screen overflow-hidden w-full">
        {/* Sidebar handles visibility (desktop + mobile) */}
        <SSidebar />

        {/* Main content area */}
        <div className="flex-1 flex flex-col min-w-0 h-full">
          <div className="flex-shrink-0 h-16">
            <Navbar />
          </div>
          <main className="flex-1 pt-14 px-6 pb-6 overflow-y-auto bg-white dark:bg-[#e2e8f0]">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}

