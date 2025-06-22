"use client"

import { Button } from '@/components/ui/button'
import { useClerk, useUser } from '@clerk/nextjs'
import { Code2, Menu, Moon, Sun, X } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const { user } = useUser()
  const { signOut } = useClerk()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    setIsDark(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)

    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const baseLinks = [
    { tab: 'Home', href: '#' },
    { tab: 'Features', href: '#features' },
    { tab: 'Contact', href: '#contact' }
  ]

  const dashboardLink = user ? [{ tab: 'Dashboard', href: '/dashboard' }] : []

  const navLinks = [...baseLinks, ...dashboardLink]

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-slate-900/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Code2 className="h-8 w-8 text-slate-700 dark:text-slate-300" />
          <span className="text-2xl font-bold text-slate-900 dark:text-slate-100">LeetTrack</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ tab, href }) => (
            <a
              key={tab}
              href={href}
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              {tab}
            </a>
          ))}

          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-slate-600 dark:text-slate-400" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-slate-600 dark:text-slate-400" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {!user ? (
            <>
              <Button
                variant="outline"
                className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                onClick={() => window.location.href = '/sign-in'}
              >
                Log In
              </Button>
              <Button className="bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900" onClick={() => window.location.href = '/signup'}>
                Sign Up
              </Button>
            </>
          ) : (
            <Button
              variant="outline"
              className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"
              onClick={() => signOut()}
            >
              Log Out
            </Button>
          )}
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center space-x-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-slate-600 dark:text-slate-400" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-slate-600 dark:text-slate-400" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            ) : (
              <Menu className="h-5 w-5 text-slate-600 dark:text-slate-400" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-slate-200 dark:border-slate-700 bg-white/95 dark:bg-slate-900/95 backdrop-blur">
          <div className="container px-4 py-4 space-y-4">
            {navLinks.map(({ tab, href }) => (
              <a
                key={tab}
                href={href}
                className="block text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {tab}
              </a>
            ))}

            {!user ? (
              <div className="flex space-x-2 pt-2">
                <Button
                  variant="outline"
                  className="flex-1 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"
                  onClick={() => window.location.href = '/sign-in'}
                >
                  Log In
                </Button>
                <Button className="flex-1 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900" onClick={() => window.location.href = '/signup'}>
                  Sign Up
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                className="w-full mt-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"
                onClick={() => signOut()}
              >
                Log Out
              </Button>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
