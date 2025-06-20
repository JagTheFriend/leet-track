import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Bell, Clock, Code2, Github, Linkedin, Mail, Twitter } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    product: [
      { name: 'Dashboard', href: '#dashboard' },
      { name: 'Problem Tracking', href: '#tracking' },
      { name: 'Reminders', href: '#reminders' },
      { name: 'Notifications', href: '#notifications' }
    ],
    account: [
      { name: 'Sign Up', href: '#signup' },
      { name: 'Log In', href: '#login' },
      { name: 'Profile', href: '#profile' },
      { name: 'Settings', href: '#settings' }
    ],
    support: [
      { name: 'Help Center', href: '#help' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Setup Guide', href: '#guide' },
      { name: 'FAQ', href: '#faq' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' },
      { name: 'Cookie Policy', href: '#cookies' },
      { name: 'Data Protection', href: '#data' }
    ]
  }

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-slate-700 dark:text-slate-300" />
              <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">LeetTrack</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-sm">
              Build consistent coding habits with daily reminders at 19:55 IST.
              Track problems, manage your practice, and never miss a session.
            </p>

            {/* Key Features Highlight */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                <Clock className="h-4 w-4" />
                <span>Daily reminders at 19:55 IST</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                <Bell className="h-4 w-4" />
                <span>Email & Push notifications</span>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button variant="outline" size="icon" className="border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800">
                <Github className="h-4 w-4 text-slate-600 dark:text-slate-400" />
              </Button>
              <Button variant="outline" size="icon" className="border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800">
                <Twitter className="h-4 w-4 text-slate-600 dark:text-slate-400" />
              </Button>
              <Button variant="outline" size="icon" className="border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800">
                <Linkedin className="h-4 w-4 text-slate-600 dark:text-slate-400" />
              </Button>
              <Button variant="outline" size="icon" className="border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800">
                <Mail className="h-4 w-4 text-slate-600 dark:text-slate-400" />
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">Features</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Account Links */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">Account</h3>
            <ul className="space-y-3">
              {footerLinks.account.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-slate-200 dark:bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-slate-600 dark:text-slate-400 text-sm">
            © 2025 LeetTrack. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-slate-600 dark:text-slate-400">
            <span>Made with ❤️ for consistent coders</span>
            <span>•</span>
            <span>Daily at 19:55 IST</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
