"use client"
import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const LandingNavbar = () => {
  const Links=[
    {tab:"Home",href:"#"},
    {tab:"Feature",href:"#feature"},
    {tab:"About",href:"#about"},
    {tab:"Contact",href:"#contact"},
  ];
  const { isSignedIn, user, isLoaded } = useUser();
  return (
    <nav className="flex justify-between items-center px-4 py-3  max-w-7xl mx-auto mt-2">

      <h2 className="text-2xl font-bold text-black">
        Leet<span className="text-blue-500">Track</span>
      </h2>

      <ul className="flex gap-4  px-2 py-1 rounded-xl ">
        {Links.map((item, idx) => (
          <li key={idx}>
            <Link
              href={item.href}
              className="px-3 py-1 rounded-full hover:bg-blue-300 hover:text-blue-700 duration-400 transition font-medium text-gray-700"
            >
              {item.tab}
            </Link>
          </li>
        ))}
        {(isSignedIn) && <li>
          <Link
            href="/dashboard"
            className="px-3 py-1 rounded-full hover:bg-blue-300 hover:text-blue-700 duration-400 transition font-medium text-gray-700"
          >
            Dashboard
          </Link>
        </li>}
      </ul>

      {(!isSignedIn) &&   <button className="bg-blue-500 text-white px-4 py-1 rounded-full font-semibold hover:shadow-lg transition hover:cursor-pointer">
        <Link href="/signup">Sign Up</Link>
      </button>}
    </nav>
  )
}

export default LandingNavbar
