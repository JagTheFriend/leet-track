"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  User,
  MessageSquareText,
  Send,
} from "lucide-react";

export default function ContactUs() {
  return (
    <section className="flex flex-col bg-[#f3f4f6]">

      <div className="bg-white px-6 py-16 text-center rounded-b-3xl shadow-sm">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block bg-indigo-100 text-indigo-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl font-bold text-[#1e293b] mb-4">Get in Touch</h1>
          <p className="text-lg text-[#4b5563]">
            Have questions or need more information? We're here to help.<br />
            Reach out to our team for assistance anytime.
          </p>
        </div>
      </div>
      <div className="py-12 px-4 md:px-20">
        <div className="grid md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          <div>
            <h2 className="text-2xl font-bold text-[#6366f1] mb-4">Contact Information</h2>
            <p className="text-[#6b7280] mb-6">
              Feel free to reach out to us through any of the following channels.
            </p>
            <div className="space-y-4 text-sm text-[#1e293b]">
              <p className="flex items-start gap-2">
                <MapPin className="h-5 w-5 text-[#6366f1]" />
                Address
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-[#6366f1]" />
                083412 43888
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-[#6366f1]" />
                contact@leettrack.com
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-[#6366f1]" />
                Opens 9:30 AM Monday
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-[#6366f1] mb-4">Send us a message</h2>
            <form className="bg-[#ffffff] p-6 rounded-xl shadow-md space-y-4 text-[#1e293b]">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#6b7280]" />
                  <Input
                    placeholder="First name"
                    className="pl-10 bg-[#ffffff] text-[#1e293b] border-[#d1d5db]"
                  />
                </div>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#6b7280]" />
                  <Input
                    placeholder="Last name"
                    className="pl-10 bg-[#ffffff] text-[#1e293b] border-[#d1d5db]"
                  />
                </div>
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#6b7280]" />
                <Input
                  placeholder="Email"
                  className="pl-10 bg-[#ffffff] text-[#1e293b] border-[#d1d5db]"
                />
              </div>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#6b7280]" />
                <Input
                  placeholder="Phone (optional)"
                  className="pl-10 bg-[#ffffff] text-[#1e293b] border-[#d1d5db]"
                />
              </div>
              <div className="relative">
                <MessageSquareText className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#6b7280]" />
                <Input
                  placeholder="Subject"
                  className="pl-10 bg-[#ffffff] text-[#1e293b] border-[#d1d5db]"
                />
              </div>
              <Textarea
                placeholder="Message"
                className="bg-[#ffffff] text-[#1e293b] border-[#d1d5db]"
                rows={5}
              />
              <Button
                type="submit"
                className="w-full flex items-center gap-2 bg-[#6366f1] text-white hover:bg-[#4f46e5]"
              >
                <Send className="h-4 w-4" /> Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
