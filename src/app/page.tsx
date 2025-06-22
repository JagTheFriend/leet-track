"use client";

import ContactUs from "@/components/Essentials/ContactUs";
import Footer from "@/components/Essentials/Footer";
import Features from "@components/Essentials/Features";
import HeroSection from "@components/Essentials/HeroSection";
import LandingNavbar from "@components/Essentials/LandingNavbar";

export default function Page() {
  return (
    <>
      <LandingNavbar />
      <HeroSection />
      <div className="flex justify-center">
        <Features />
      </div>
     
      <main className="flex flex-col min-h-screen overflow-auto">
        <div className="flex-grow flex items-center justify-center">
          <ContactUs />
        </div>
        <div className="w-full flex justify-center">
          <Footer />
        </div>
       
      </main>
    </>
  );
}
