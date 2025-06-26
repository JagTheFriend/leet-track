import { Separator } from '@/components/ui/separator'
import { Bell, Clock, Code2 } from 'lucide-react'

export default function Footer() {
  const footerLinks = {
    product: [
      { name: 'Dashboard' },
      { name: 'Problem Tracking' },
      { name: 'Reminders' },
      { name: 'Notifications' }
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
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700 w-full">
      <div className="mx-auto w-full max-w-none px-4 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-slate-700 dark:text-slate-300" />
              <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">LeetTrack</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-sm">
              Build consistent coding habits with daily reminders at 20:15 IST.
              Track problems, manage your practice, and never miss a session.
            </p>

            {/* Key Features Highlight */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                <Clock className="h-4 w-4" />
                <span>Daily reminders at 20:15 IST</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                <Bell className="h-4 w-4" />
                <span>Email & Push notifications</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className='ml-4'>
            <h3 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">Features</h3>
            <ul className="space-y-3 ">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <div className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                  >
                    {link.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Account Links */}
          <div className='ml-4'>
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
          <div className='ml-4'>
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
        </div>

        <Separator className="my-8 bg-slate-200 dark:bg-slate-700" />

        <div className="flex flex-col md:flex-row justify-between items-center md:space-y-0">
          <div className="flex items-center space-x-6 text-sm text-slate-600 dark:text-slate-400">
            <span>Made with ❤️ by USC KIIT Developers</span>
          </div>
          <div className="text-slate-600 dark:text-slate-400 text-sm">
            © 2025 LeetTrack. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
