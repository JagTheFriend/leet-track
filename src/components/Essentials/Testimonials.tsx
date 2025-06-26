"use client"

import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Software Engineer at Google",
    avatar: "SC",
    rating: 5,
    text: "LeetTrack's daily reminders at 20:15 IST have been a game-changer. I've maintained a 90-day streak and landed my dream job at Google!"
  },
  {
    name: "Rajesh Kumar",
    role: "Full Stack Developer",
    avatar: "RK",
    rating: 5,
    text: "The smart notification system is perfect. It reminds me exactly when I need it, and the dashboard helps me track my progress effectively."
  },
  {
    name: "Emily Rodriguez",
    role: "CS Student at MIT",
    avatar: "ER",
    rating: 5,
    text: "As a student preparing for tech interviews, LeetTrack keeps me accountable. The consistent practice has improved my problem-solving skills significantly."
  },
  {
    name: "David Kim",
    role: "Senior Developer at Microsoft",
    avatar: "DK",
    rating: 5,
    text: "Simple, effective, and reliable. LeetTrack has helped me maintain coding practice even during busy work schedules. Highly recommended!"
  },
  {
    name: "Priya Sharma",
    role: "DevOps Engineer",
    avatar: "PS",
    rating: 5,
    text: "The 20:15 IST timing is perfect for Indian developers. I've solved over 500 problems since using LeetTrack. The consistency is incredible!"
  },
  {
    name: "Alex Thompson",
    role: "Startup Founder",
    avatar: "AT",
    rating: 5,
    text: "Even as a busy founder, LeetTrack helps me stay sharp with coding. The daily reminders ensure I never skip my practice sessions."
  }
]

export default function Testimonials() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What developers are saying
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Join thousands of developers who have transformed their coding journey with LeetTrack
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-slate-200" />

              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-slate-700 leading-relaxed">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Join the community of successful developers</p>
          <div className="flex items-center justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
            ))}
            <span className="ml-2 text-slate-700 font-semibold">4.9/5</span>
            <span className="text-slate-500 ml-1">(2,847 reviews)</span>
          </div>
        </div>
      </div>
    </section>
  )
}
