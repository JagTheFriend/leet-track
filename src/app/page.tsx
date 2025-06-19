"use client";
import HeroSection from "@components/Essentials/HeroSection";
import LandingNavbar from "@components/Essentials/LandingNavbar";
import Features from "@components/Essentials/Features";
import ContactUs from "@/components/Essentials/ContactUs";
import Footer from "@/components/Essentials/Footer";

export default function Page() {
  return (
    <>
      <LandingNavbar />
      <HeroSection />
      <Features />
      <main className="flex flex-col min-h-screen overflow-auto">
        <div className="flex-grow">
          <ContactUs />
        </div>
        <Footer />
      </main>
    </>
  );
}