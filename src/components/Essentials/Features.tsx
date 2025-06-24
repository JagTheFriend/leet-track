"use client"

import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Bell,
  Clock,
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
    color:
      "bg-[#6366f1] text-white"
  },
  {
    icon: LogIn,
    title: "Secure Login",
    description:
      "Access your personalized dashboard with secure authentication and session management.",
    badge: "Secure",
    color:
      "bg-[#6366f1] text-white"
  },
  {
    icon: Plus,
    title: "Add LeetCode Problems",
    description:
      "Easily add and categorize LeetCode problems you want to revisit and practice regularly.",
    badge: "Core",
    color:
      "bg-[#6366f1] text-white"
  },
  {
    icon: Clock,
    title: "Daily Reminders",
    description:
      "Get notified daily at 20:15 IST to ensure you're consistent with your coding practice.",
    badge: "Scheduled",
    color:
      "bg-[#6366f1] text-white"
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Receive email and push notifications to keep your practice routine on track.",
    badge: "Alert",
    color:
      "bg-[#6366f1] text-white"
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard Overview",
    description:
      "Track your progress, problems, and reminders in one centralized place.",
    badge: "Hub",
    color:
      "bg-[#6366f1] text-white"
  }
]

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24 bg-slate-50/50 dark:bg-slate-900/20"
    >
      <div className="w-full px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-slate-100">
            Everything you need to stay consistent
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            LeetTrack equips you with tools like smart reminders, dashboards, and tracking to boost your daily coding habit.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="relative overflow-hidden border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-md dark:hover:shadow-slate-900/20 transition-all duration-300 group"
            >
              <div className="p-6">
                <CardHeader className="pb-4 px-0">
                  <div className="flex items-start justify-between mb-6">
                    <div className={`relative mb-4 h-12 w-12 rounded-br-2xl p-2.5 ${feature.color}`}>
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-semibold group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors text-slate-900 dark:text-slate-100">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-0 pt-2">
                  <CardDescription className="text-base leading-relaxed text-slate-600 dark:text-slate-400">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-20">
          <div className="inline-flex items-center space-x-6 text-sm text-slate-500  border border-[#6366f1] backdrop-blur-md rounded-full px-6 py-3">
            <div className="flex items-center space-x-2 text-slate-700">
              <Clock className="h-4 w-4 text-slate-700" />
              <span>Daily reminders at 20:15 IST</span>
            </div>
            <div className="h-4 w-px bg-slate-300 dark:bg-slate-600" />
            <div className="flex items-center space-x-2 text-slate-700">
              <Bell className="h-4 w-4 text-slate-700" />
              <span>Email & Push notifications</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
