'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Bell, CheckCircle, Code2, Play, Users } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function HeroSection() {
  const { push, prefetch } = useRouter()

  useEffect(() => {
    prefetch("/signup")
  }, [])

  return (
    <section className="relative pt-24 pb-32 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-purple-50/60 -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.05)_0%,transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(147,51,234,0.05)_0%,transparent_50%)] -z-10" />
      <div className="absolute inset-0 bg-grid-slate-200/30 bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,black,transparent)] -z-10" />

      <div className="container max-w-7xl px-4 md:px-8 mx-auto relative">
        <div className="flex flex-col items-center text-center space-y-10 max-w-4xl mx-auto">

          {/* Trust Indicator */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 border border-blue-200/50 rounded-full text-sm text-slate-700 backdrop-blur-sm animate-fade-in">
            <div className="flex -space-x-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
                  {String.fromCharCode(65 + i)}
                </div>
              ))}
            </div>
            <span className="font-medium">Join 100+ developers already using LeetTrack</span>
          </div>

          {/* Main Heading */}
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="text-slate-900">Build </span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
                consistent
              </span>
              <br />
              <span className="text-slate-900">coding habits</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Never miss your LeetCode practice again. Get smart daily reminders at
              <span className="font-semibold text-blue-600"> 20:15 IST</span> and track your
              progress like a pro.
            </p>
          </div>

          {/* Feature Highlights */}
          <div className="flex flex-wrap gap-4 justify-center animate-fade-up delay-200">
            <div className="inline-flex items-center rounded-2xl border border-blue-200/60 px-5 py-3 bg-white/80 backdrop-blur-sm hover:border-blue-300/60 transition-all duration-300 hover:scale-105">
              <Bell className="h-5 w-5 text-blue-600 mr-3" />
              <span className="text-slate-700 font-medium">Smart Daily Reminders</span>
            </div>
            <div className="inline-flex items-center rounded-2xl border border-purple-200/60 px-5 py-3 bg-white/80 backdrop-blur-sm hover:border-purple-300/60 transition-all duration-300 hover:scale-105">
              <Code2 className="h-5 w-5 text-purple-600 mr-3" />
              <span className="text-slate-700 font-medium">Progress Tracking</span>
            </div>
            <div className="inline-flex items-center rounded-2xl border border-green-200/60 px-5 py-3 bg-white/80 backdrop-blur-sm hover:border-green-300/60 transition-all duration-300 hover:scale-105">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <span className="text-slate-700 font-medium">95% Success Rate</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center animate-fade-up delay-300">
            <Button
              size="lg"
              className="text-lg px-8 py-4 h-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-xl cursor-pointer"
              onClick={() => push("/signup")}
            >
              Start Free Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 h-auto border-slate-300 hover:border-slate-400 text-slate-700 hover:bg-slate-50 font-semibold rounded-xl cursor-pointer"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-slate-600 animate-fade-up delay-400">
            <div className="flex items-center space-x-1">
              <span>⭐⭐⭐⭐⭐</span>
              <span className="font-medium">4.9/5 rating</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-300" />
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>100+ active users</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-300" />
            <div>
              <span>✅ Free forever • No credit card required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
