"use client";

import MobileMenuTrigger from "@/components/Essentials/MobileMenuTrigger";
import { NotificationBell } from "@/components/Essentials/NotificationBell";
import { NotificationDropdown } from "@/components/Essentials/NotificationDropdown";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
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
  useEffect(() => {
    const html = document.documentElement;
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      html.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  // const toggleTheme = () => {
  //   const html = document.documentElement;
  //   const newTheme = isDark ? "light" : "dark";
  //   html.classList.toggle("dark");
  //   localStorage.setItem("theme", newTheme);
  //   setIsDark(!isDark);
  // };

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
  if (pathname === "/login" || pathname === "/signup") {
    return null;
  }

  return (
    <div className="bg-[#E5E5E5] dark:bg-[#374151] text-white py-1.5 flex items-center justify-between border-b border-[#CCCCCC] dark:border-[#374151] w-full h-16 flex-shrink-0 fixed top-0 right-0 z-[999] shadow-md dark:shadow-md px-4">
      {/* Hamburger for mobile */}
      <div className="flex items-center gap-3">
        <MobileMenuTrigger />

        {/* App Title */}
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-br from-blue-600 w-10 h-10 to-purple-600 rounded-xl flex items-center justify-center">
            <Image src="/leettrack-logo.png" className="object-contain" height={1000} width={1000} alt="LeetTrack Logo" />
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
            LeetTrack
          </span>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-4">
        {/* <button
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:bg-gray-800 transition-colors"
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Moon className="h-5 w-5 text-gray-300" />
          ) : (
            <Sun className="h-5 w-5 text-yellow-600" />
          )}
        </button> */}

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
    </div>
  );
};

export default Navbar;
