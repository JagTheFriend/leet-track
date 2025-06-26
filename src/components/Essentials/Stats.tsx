"use client"

import { Clock, Target, TrendingUp, Users } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "10K+",
    label: "Active Users",
    description: "Developers trust LeetTrack"
  },
  {
    icon: Target,
    number: "1M+",
    label: "Problems Tracked",
    description: "Coding challenges managed"
  },
  {
    icon: TrendingUp,
    number: "95%",
    label: "Success Rate",
    description: "Users improve consistency"
  },
  {
    icon: Clock,
    number: "Daily",
    label: "20:15 IST",
    description: "Perfect reminder timing"
  }
]

export default function Stats() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by developers worldwide
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join thousands of developers who have improved their coding consistency with LeetTrack
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-slate-200/50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl mb-4">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-1">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-slate-800 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-slate-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
