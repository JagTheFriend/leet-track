import { Button } from "@components/ui/button"
import { ArrowRight, Bell, Clock, Target } from "lucide-react"
import Link from "next/link"

const ShowUp = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-white bg-[#4447ee] px-4 py-16">
      <div className="max-w-3xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          Ready to build consistent <br className="hidden sm:block" />
          coding habits?
        </h1>
        <p className="text-base sm:text-lg mb-8">
          Join thousands of developers who never miss their daily LeetCode practice. <br className="hidden sm:block" />
          Get started for free and transform your coding journey today.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
          <Link href="/dashboard">
            <Button size="lg" className="bg-white text-[#6366f1] font-semibold px-8 py-1.5 rounded-lg hover:scale-105 transition flex cursor-pointer hover:bg-white/90">
              Start Tracking Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 text-sm sm:text-base">
          <div className="flex flex-col items-center">
            <div className="bg-white/10 p-3 rounded-2xl mb-2">
              <Clock className="text-white w-6 h-6" />
            </div>
            <p className="font-semibold text-lg">Daily Reminders</p>
            <p className="text-sm text-white/80">Perfect timing at 20:15 IST</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/10 p-3 rounded-2xl mb-2">
              <Bell className="text-white w-7 h-6" />
            </div>
            <p className="font-semibold text-lg">Smart Notifications</p>
            <p className="text-sm text-white/80">Email & push notifications</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="bg-white/10 p-3 rounded-2xl mb-2">
              <Target className="text-white w-6 h-6" />
            </div>
            <p className="font-semibold text-lg">Progress Tracking</p>
            <p className="text-sm text-white/80">Visualize your growth</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShowUp
