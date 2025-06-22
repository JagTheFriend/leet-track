"use client";

import { NotificationBell } from "@/components/Essentials/NotificationBell";
import { NotificationDropdown } from "@/components/Essentials/NotificationDropdown";
import { UserButton } from "@clerk/nextjs";
import { Menu, Moon, Sun, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type NavbarProps = {
  onHamburgerClick?: () => void;
  sidebarOpen?: boolean;
};

const Navbar = ({ onHamburgerClick, sidebarOpen }: NavbarProps) => {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const html = document.documentElement;
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      html.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    const newTheme = isDark ? "light" : "dark";
    html.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return (
    <div className="bg-[#E5E5E5] dark:bg-[#374151] text-white py-1.5 flex items-center justify-between border-b border-[#CCCCCC] dark:border-[#374151] w-full h-16 flex-shrink-0 fixed top-0 right-0 z-50 shadow-md dark:shadow-md px-4">
      {/* Hamburger for mobile */}
      <div className="flex items-center gap-3">
        <button
          className="md:hidden p-2 rounded bg-white dark:bg-[#1e293b] shadow"
          onClick={onHamburgerClick}
          aria-label="Open sidebar"
        >
          {sidebarOpen ? (
            <X className="h-6 w-6 text-black dark:text-white" />
          ) : (
            <Menu className="h-6 w-6 text-black dark:text-white" />
          )}
        </button>

        {/* App Title */}
        <h1 className="text-xl font-semibold ml-2">
          <span className="text-[#6366f1] font-bold">Leet</span>
          <span className="text-black dark:text-white font-bold">Track</span>
        </h1>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Moon className="h-5 w-5 text-gray-300" />
          ) : (
            <Sun className="h-5 w-5 text-yellow-600" />
          )}
        </button>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
            aria-label="Notifications"
          >
            <NotificationBell />
          </button>
          {dropdownOpen && (
            <NotificationDropdown
              open={dropdownOpen}
              onClose={() => setDropdownOpen(false)}
            />
          )}
        </div>

        <UserButton />
      </div>
    </div >
  );
};

export default Navbar;
