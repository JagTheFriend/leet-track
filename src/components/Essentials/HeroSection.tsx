"use client";

import Link from "next/link";

const HeroSection = () => {
  return (
    <>
      <div className="absolute inset-0 -z-10 bg-background transition-colors duration-700 overflow-hidden">
        <div className="absolute top-0 left-1/3 h-full w-full -translate-x-1/7 -translate-y-1/4 rounded-full bg-purple-500 opacity-30 blur-[120px]" />
      </div>

      <div className="flex my-7 mx-5 flex-col md:flex-row items-center justify-between gap-10 px-6 pt-24 animate-fade-in">
        <div className="max-w-xl opacity-0 animate-slide-in-left">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500 dark:text-primary">
            Where coders crush deadlines, <br />
            <span className="text-foreground">one alert at a time.</span>
          </h2>
          <h5 className="text-lg text-muted-foreground mt-4">
            Stay sharp. Solve smart. Never miss a challenge.
          </h5>

          <div className="flex gap-4 mt-6">
            <Link href="/signup">
              <button className="hover:cursor-pointer bg-blue-500 text-primary-foreground px-6 py-2 rounded-full font-semibold hover:shadow-lg transition hover:scale-105">
                Sign Up
              </button>
            </Link>
            <Link href="/login">
              <button className="hover:cursor-pointer  border-1 border-blue-500 text-primary px-6 py-2 rounded-full font-semibold hover:shadow-lg transition hover:scale-105">
                Log In
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-sm w-full opacity-0 animate-slide-in-up">
          <img
            src="./close-up-programer.jpg"
            alt="Developer working"
            className="w-full h-auto rounded-xl shadow-xl shadow-primary/20 border border-border"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
