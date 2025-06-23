
"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import Navbar from "@components/Essentials/Navbar";
import { SSidebar } from "@components/Essentials/SSidebar";
import { useState } from "react";

export default function BaseLayout({
children,
}: {
children: React.ReactNode;
}) {
const [sidebarOpen, setSidebarOpen] = useState(false);

return (
<SidebarProvider>
<div className="relative flex h-screen overflow-hidden w-full">
{/* Sidebar handles visibility (desktop + mobile) */}
<SSidebar open={sidebarOpen} setOpen={setSidebarOpen} />

{/* Main content area */}
<div className="flex-1 flex flex-col min-w-0 h-full">
<div className="flex-shrink-0 h-16">
<Navbar onHamburgerClick={() => setSidebarOpen(true)} />
</div>
<main className="flex-1 pt-2 px-3 pb-6 overflow-y-auto bg-white dark:bg-[#e2e8f0]">
{children}
</main>
</div>
</div>
</SidebarProvider>
);
}