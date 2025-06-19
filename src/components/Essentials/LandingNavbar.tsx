"use client"
import { useUser } from "@clerk/nextjs";
import Link from "next/link";
import { useEffect, useState } from "react";

const LandingNavbar = () => {
  const Links = [
    { tab: "Home", href: "#" },
    { tab: "Feature", href: "#feature" },
    { tab: "About", href: "#about" },
    { tab: "Contact", href: "#contact" },
  ];
  const { isSignedIn, user, isLoaded } = useUser();
  const [isDark, setIsDark] = useState(false);

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

  return (
    <nav className="flex justify-between items-center px-4 py-3  max-w-7xl mx-auto mt-1">

      <h2 className="text-2xl font-bold text-black">
        Leet<span className="text-blue-600">Track</span>
      </h2>

      <ul className="flex md:gap-1 lg:gap-4 px-2 py-1 rounded-xl ">
        {Links.map((item, idx) => (
          <li key={idx}>
            <Link
              href={item.href}
              className="px-3 py-1 rounded-full hover:bg-white hover:text-blue-700 duration-400 transition font-medium text-gray-700"
            >
              {item.tab}
            </Link>
          </li>
        ))}
        {(isSignedIn) && <li>
          <Link
            href="/dashboard"
            className="px-3 py-1 rounded-full hover:bg-white hover:text-blue-700 duration-400 transition font-medium text-gray-700"
          >
            Dashboard
          </Link>
        </li>}
      </ul>
      <div className="flex gap-2 ">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 text-sm rounded-full bg-slate-300 hover:cursor-pointer "
      >
        {isDark ? "☀ Light" : "🌙 Dark"}
      </button>

      {(!isSignedIn) && (
        <>
          <div className="flex items-center gap-2">
            <button className="bg-blue-500 text-white px-4 py-1 rounded-full font-semibold hover:shadow-lg transition hover:cursor-pointer">
              <Link href="/signup">Sign Up</Link>
            </button>
            <button className="border border-blue-500 text-black px-2 py-1 rounded font-semibold hover:shadow-lg transition hover:cursor-pointer">
              <Link href="/login">Log In</Link>
            </button>
          </div>
        </>)
      }
      </div>
    </nav>
  )
}

export default LandingNavbar;
