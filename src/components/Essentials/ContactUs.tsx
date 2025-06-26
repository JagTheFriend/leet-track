"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />

      <div className="container px-4 md:px-6 max-w-6xl mx-auto relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
            <span>💬</span>
            <span className="ml-2">Get Support</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
            Need help getting started?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our team is here to help you set up your perfect coding routine.
            Get personalized support and answers to all your questions.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="p-8 md:p-12 shadow-xl border border-slate-200/50 bg-white/80 backdrop-blur-sm rounded-3xl">
            <CardHeader className="pb-8 text-center">
              <CardTitle className="text-2xl md:text-3xl text-slate-900 font-bold">Send us a Message</CardTitle>
              <CardDescription className="text-lg text-slate-600 mt-2">
                Get personalized help from our team. We typically respond within 2 hours.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <Label htmlFor="name" className="text-slate-800 font-semibold text-sm">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl bg-slate-50/50 focus:bg-white transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-3">
                    <Label htmlFor="email" className="text-slate-800 font-semibold text-sm">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="h-12 border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl bg-slate-50/50 focus:bg-white transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="subject" className="text-slate-800 font-semibold text-sm">How can we help?</Label>
                  <Select onValueChange={(value) => handleInputChange('subject', value)}>
                    <SelectTrigger className="h-12 border-slate-200 focus:border-blue-500 rounded-xl bg-slate-50/50">
                      <SelectValue placeholder="Choose a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Question</SelectItem>
                      <SelectItem value="reminders">Setting up Reminders</SelectItem>
                      <SelectItem value="notifications">Notification Issues</SelectItem>
                      <SelectItem value="dashboard">Dashboard Help</SelectItem>
                      <SelectItem value="account">Account Support</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label htmlFor="message" className="text-slate-800 font-semibold text-sm">Your Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your question or how we can help you get the most out of LeetTrack..."
                    className="min-h-[140px] border-slate-200 focus:border-blue-500 focus:ring-blue-500/20 rounded-xl bg-slate-50/50 focus:bg-white transition-all resize-none"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02]"
                >
                  Send Message
                </Button>

                <p className="text-center text-sm text-slate-500 mt-4">
                  🚀 We typically respond within 2 hours during business hours
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
