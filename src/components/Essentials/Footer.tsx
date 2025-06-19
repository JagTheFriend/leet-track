import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Copyright,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#3730a3] text-[#f8fafc] pt-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="text-lg font-semibold mb-2">LeetTrack</h3>
          <p className="text-[#e5e7eb]">
            Helping you stay consistent with your coding journey.
          </p>
          <div className="flex gap-3 mt-4 text-[#e0e7ff]">
            <a href="#" target="_blank"><Facebook className="w-5 h-5 cursor-pointer hover:text-white" /></a>
            <a href="#" target="_blank"><Twitter className="w-5 h-5 cursor-pointer hover:text-white" /></a>
            <a href="#" target="_blank"><Instagram className="w-5 h-5 cursor-pointer hover:text-white" /></a>
            <a href="#" target="_blank"><Linkedin className="w-5 h-5 cursor-pointer hover:text-white" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-white">Quick Links</h4>
          <ul className="space-y-1 text-[#e0e7ff]">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/features">Features</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-white">Resources</h4>
          <ul className="space-y-1 text-[#e0e7ff]">
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/faq">FAQs</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2 text-white">Contact Us</h4>
          <p className="flex items-start gap-2 text-[#e0e7ff]">
            <MapPin className="w-4 h-4 mt-1 text-white" />
            Address
          </p>
          <p className="flex items-center gap-2 text-[#e0e7ff]">
            <Phone className="w-4 h-4 text-white" />
            083412 43888
          </p>
          <p className="flex items-center gap-2 text-[#e0e7ff]">
            <Mail className="w-4 h-4 text-white" />
            contact@leettrack.com
          </p>
        </div>
      </div>
      <div className="text-center text-xs text-[#c7d2fe] mt-8 pt-4 border-t border-[#4f46e5]">
        <div className="inline-flex items-center justify-center gap-1">
          <Copyright className="w-4 h-4" />
          {new Date().getFullYear()} LeetTrack. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
