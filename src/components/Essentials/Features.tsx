"use client"

import { Badge } from "@/components/ui/badge"
import {
  Bell,
  Clock,
  Code2,
  LayoutDashboard,
  LogIn,
  Plus,
  UserPlus
} from "lucide-react"

const features = [
  {
    icon: UserPlus,
    title: "User Registration",
    description:
      "Create your account in seconds and start tracking your LeetCode journey immediately.",
    badge: "Essential",
    color: "bg-[#6366f1] text-white"
  },
  {
    icon: LogIn,
    title: "Secure Login",
    description:
      "Access your personalized dashboard with secure authentication and session management.",
    badge: "Secure",
    color: "bg-[#6366f1] text-white"
  },
  {
    icon: Plus,
    title: "Add LeetCode Problems",
    description:
      "Easily add and categorize LeetCode problems you want to revisit and practice regularly.",
    badge: "Core",
    color: "bg-[#6366f1] text-white"
  },
  {
    icon: Clock,
    title: "Daily Reminders",
    description:
      "Get notified daily at 20:15 IST to ensure you're consistent with your coding practice.",
    badge: "Scheduled",
    color: "bg-[#6366f1] text-white"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Receive email and push notifications to keep your practice routine on track.",
    badge: "Alert",
    color: "bg-[#6366f1] text-white"
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Overview",
    description:
      "Track your progress, problems, and reminders in one centralized place.",
    badge: "Hub",
    color: "bg-[#6366f1] text-white"
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)] -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative max-w-7xl">

        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
            <Code2 className="h-4 w-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900 leading-tight">
            Everything you need to build
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
              consistent coding habits
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From smart reminders to progress tracking, LeetTrack provides all the tools
            you need to maintain your daily coding practice and achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white border border-slate-200/60 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-blue-200"
            >
              {/* Icon Background */}
              <div className="relative mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-7 w-7 text-white" />
                </div>
                <Badge
                  variant="secondary"
                  className="absolute -top-2 -right-2 text-xs font-medium px-2 py-1 bg-white border border-slate-200 text-slate-600 shadow-sm"
                >
                  {feature.badge}
                </Badge>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Hover Effect Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 to-purple-50/0 group-hover:from-blue-50/50 group-hover:to-purple-50/50 rounded-2xl transition-all duration-300 -z-10" />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-8 text-sm bg-white border border-slate-200 rounded-2xl px-8 py-4 shadow-sm">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Clock className="h-4 w-4 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900">Daily at 20:15 IST</div>
                <div className="text-slate-600">Perfect reminder timing</div>
              </div>
            </div>
            <div className="h-10 w-px bg-slate-200" />
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <Bell className="h-4 w-4 text-white" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-900">Smart Notifications</div>
                <div className="text-slate-600">Email & push alerts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
