"use client";

import { useUser } from "@clerk/nextjs";

export default function WelcomeBanner() {
  const { user } = useUser();

  return (
    <div className="py-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-left sm:text-left font-bold text-black">
        Welcome Back,{" "}
        {user?.username ?? user?.firstName ?? user?.lastName ?? "Guest"}!
      </h1>
    </div>
  );
}
