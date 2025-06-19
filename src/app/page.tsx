"use client";
import HeroSection from "@components/Essentials/HeroSection";
import LandingNavbar from "@components/Essentials/LandingNavbar";
import Features from "@components/Essentials/Features";

export default function Page() {
  return (
    <>
      <main>
        <LandingNavbar />
        <HeroSection />
      </main>
      <Features />
    </>
  );
}
