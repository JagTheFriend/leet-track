"use client";

import ContactUs from "@/components/Essentials/ContactUs";
import CTA from "@/components/Essentials/CTA";
import Footer from "@/components/Essentials/Footer";
import Stats from "@/components/Essentials/Stats";
import Testimonials from "@/components/Essentials/Testimonials";
import Features from "@components/Essentials/Features";
import HeroSection from "@components/Essentials/HeroSection";
import LandingNavbar from "@components/Essentials/LandingNavbar";

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <LandingNavbar />
      <main className="relative">
        <HeroSection />
        <Stats />
        <Features />
        <Testimonials />
        <CTA />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
}
