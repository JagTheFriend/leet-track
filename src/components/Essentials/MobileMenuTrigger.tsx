'use client';

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { Menu } from "lucide-react";

export default function MobileMenuTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden p-2 rounded bg-white dark:bg-[#1e293b] shadow"
      onClick={toggleSidebar}
      aria-label="Open sidebar"
    >
      <Menu className="h-6 w-6 text-black dark:text-white" />
    </Button>
  );
}