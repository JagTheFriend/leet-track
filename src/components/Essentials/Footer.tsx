import { Separator } from '@/components/ui/separator'
import { Button } from '@components/ui/button'
import { Bell, Clock, Code2, Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    product: [
      { name: 'Dashboard', href: "/dashboard" },
      { name: 'Problem Tracking', href: "/" },
      { name: 'Reminders', href: "/" },
      { name: 'Notifications', href: "/" }
    ],
    account: [
      { name: 'Sign Up', href: '/signup' },
      { name: 'Log In', href: '/login' },
      { name: 'Settings', href: '/settings' }
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
    ],

  }

  return (
    <footer className="bg-white border-t border-slate-200/50 w-full">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
                LeetTrack
              </span>
            </div>
            <p className="text-slate-600 mb-8 max-w-sm leading-relaxed text-lg">
              Build consistent coding habits with smart daily reminders and comprehensive
              progress tracking. Join 100+ developers who never miss their practice.
            </p>

            {/* Key Features Highlight */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3 text-slate-700">
                <div className="w-6 h-6 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Clock className="h-4 w-4 text-blue-600" />
                </div>
                <span className="font-medium">Daily reminders at 20:15 IST</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-700">
                <div className="w-6 h-6 bg-green-100 rounded-lg flex items-center justify-center">
                  <Bell className="h-4 w-4 text-green-600" />
                </div>
                <span className="font-medium">Smart email & push notifications</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button variant="outline" size="icon" className="border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all">
                <Github className="h-5 w-5 text-slate-600 hover:text-blue-600" />
              </Button>
              <Button variant="outline" size="icon" className="border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all">
                <Twitter className="h-5 w-5 text-slate-600 hover:text-blue-600" />
              </Button>
              <Button variant="outline" size="icon" className="border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all">
                <Linkedin className="h-5 w-5 text-slate-600 hover:text-blue-600" />
              </Button>
              <Button variant="outline" size="icon" className="border-slate-200 hover:border-blue-300 hover:bg-blue-50 transition-all">
                <Mail className="h-5 w-5 text-slate-600 hover:text-blue-600" />
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-bold mb-6 text-slate-900 text-lg">Features</h3>
            <ul className="space-y-4">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={`${link.href}`}
                    className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h3 className="font-bold mb-6 text-slate-900 text-lg">Account</h3>
            <ul className="space-y-4">
              {footerLinks.account.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-bold mb-6 text-slate-900 text-lg">Support</h3>
            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-bold mb-6 text-slate-900 text-lg">Legal</h3>
            <ul className="space-y-4">
              {/* {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 hover:text-blue-600 transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))} */}
            </ul>
          </div>
        </div>

        <Separator className="my-12 bg-slate-200" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

          <div className="flex items-center space-x-8 text-sm text-slate-600">
            <div className="flex items-center space-x-2">
              <span>🚀</span>
              <span className="font-medium">Made with ❤️ by USC KIIT Developers</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-300" />
            <div className="flex items-center space-x-2">
              <span>⏰</span>
              <span className="font-medium">Daily at 20:15 IST</span>
            </div>
            <div className=" text-slate-600 text-sm font-medium">
              © 2025 LeetTrack. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
