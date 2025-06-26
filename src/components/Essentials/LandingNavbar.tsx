"use client";

import { Button } from '@/components/ui/button';
import { useUser } from '@clerk/nextjs';
import { Code2, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { user } = useUser()
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
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container flex h-20 items-center justify-between px-4 md:px-8 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
            <Code2 className="h-6 w-6 text-white" />
          </div>
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-700">
            LeetTrack
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(({ tab, href }) => (
            <a
              key={tab}
              href={href}
              className="text-slate-700 hover:text-blue-600 font-medium transition-all duration-200 hover:scale-105 relative group"
            >
              {tab}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-200 group-hover:w-full"></span>
            </a>
          ))}

          {!user ? (
            <div className="flex items-center space-x-3">
              <Button
                variant="ghost"
                className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 font-medium cursor-pointer"
              >
                Log In
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer">
                Start Free
              </Button>
            </div>
          ) : (
            <Button
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-50 font-medium cursor-pointer"
            >
              Logout
            </Button>
          )}
        </div>

        {/* Mobile Buttons */}
        <div className="md:hidden flex items-center space-x-2">
          {/* <Button
            variant="ghost"
            size="icon"
            onClick={toggleDarkMode}
            className="hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-slate-600 dark:text-slate-400" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-slate-600 dark:text-slate-400" />
          </Button> */}

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
                  className="flex-1 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 cursor-pointer"
                >
                  Log In
                </Button>
                <Button className="flex-1 bg-slate-900 hover:bg-slate-800 dark:bg-slate-100 dark:hover:bg-slate-200 dark:text-slate-900 cursor-pointer">
                  Sign Up
                </Button>
              </div>
            ) : (
              <Button
                variant="outline"
                className="w-full mt-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 cursor-pointer"
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
