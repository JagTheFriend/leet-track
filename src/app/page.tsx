"use client";

import ContactUs from "@/components/Essentials/ContactUs";
import Footer from "@/components/Essentials/Footer";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen overflow-auto">
      <div className="flex-grow">
        <ContactUs />
      </div>
      <Footer />
    </main>
  );
}
