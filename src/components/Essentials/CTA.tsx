"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Bell, Clock, Target } from "lucide-react"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700" />
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to build consistent
            <span className="block">coding habits?</span>
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Join thousands of developers who never miss their daily LeetCode practice.
            Get started for free and transform your coding journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="text-lg px-8 py-4 h-auto bg-white text-blue-600 hover:bg-gray-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Start Tracking Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 h-auto border-white/30 text-white hover:bg-white/10 font-semibold backdrop-blur-sm"
            >
              View Demo
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">Daily Reminders</h4>
              <p className="text-blue-100 text-sm">Perfect timing at 20:15 IST</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                <Bell className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">Smart Notifications</h4>
              <p className="text-blue-100 text-sm">Email & push notifications</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-3">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-1">Progress Tracking</h4>
              <p className="text-blue-100 text-sm">Visualize your growth</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/20">
            <p className="text-blue-100 text-sm">
              ✓ Free forever • ✓ No credit card required • ✓ Setup in 30 seconds
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
