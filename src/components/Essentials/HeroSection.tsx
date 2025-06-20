'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Bell } from 'lucide-react'
import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="pt-10 pb-20 md:pt-20 md:pb-32 bg-gradient-to-b from-background to-slate-50/50 dark:to-slate-900/20">
      <div className="container max-w-screen-xl px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center text-center space-y-8 max-w-2xl mx-auto">
          {/* Reminder Badge */}
          <div className="inline-flex items-center rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm bg-slate-50/80 dark:bg-slate-800/50 backdrop-blur-sm">
            <Bell className="h-4 w-4 text-slate-600 dark:text-slate-400 mr-2" />
            <span className="text-slate-700 dark:text-slate-300 font-medium">Daily reminders at 19:55 IST</span>
          </div>

          {/* Heading */}
          <h1 className="text-balance text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Never Miss Your
            <span className="text-slate-700 dark:text-slate-300 block mt-1">LeetCode Practice</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed text-balance">
            Get notified daily and stay on track with your coding journey. <br />
            Build habits that lead to consistent LeetCode success.
          </p>

          {/* CTA Button */}
          <div className="w-full sm:w-auto">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="text-lg px-8 py-6 h-auto bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900"
              >
                Start Tracking Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
