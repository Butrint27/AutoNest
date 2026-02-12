'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Inventory', href: '/inventory' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'News', href: '/news' },
]

export default function ContactComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen w-full bg-[#0D0D0D] text-white relative">

      {/* HEADER */}
      <header className="border-b border-white/10">
        <nav className="flex items-center justify-between p-6 lg:px-8 relative">
          {/* Back */}
          <Link href="/">
            <span className="flex items-center bg-[#1a1a1a] hover:bg-[#2c2c2c] text-[#D4AF37] hover:text-yellow-400 font-semibold px-4 py-2 rounded-lg shadow-md cursor-pointer transition duration-200">
              ← Back
            </span>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 gap-6">
            {navigation.map((nav) => (
              <li key={nav.name}>
                <Link
                  href={nav.href}
                  className="text-sm font-medium tracking-wide uppercase text-white hover:text-[#D4AF37] transition"
                >
                  {nav.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: Login + Hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="/signin"
              className="hidden lg:inline text-sm font-semibold tracking-wide text-white hover:text-[#D4AF37] transition"
            >
              Login →
            </Link>

            <button
              className="lg:hidden p-2 rounded-md text-white hover:text-[#D4AF37] hover:bg-gray-800 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 w-full bg-[#0D0D0D] flex flex-col items-center gap-4 py-6 lg:hidden border-t border-white/10 z-20">
              {navigation.map((nav) => (
                <Link
                  key={nav.name}
                  href={nav.href}
                  className="text-white hover:text-[#D4AF37] font-medium uppercase"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {nav.name}
                </Link>
              ))}
              <Link
                href="/signin"
                className="text-white hover:text-[#D4AF37] font-semibold mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login →
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 flex justify-center overflow-hidden"
      >
        <div
          className="w-[72rem] aspect-[1155/678] -translate-x-1/2 rotate-12 bg-gradient-to-tr from-[#D4AF37]/20 to-[#FFFFFF]/10 opacity-20 blur-3xl"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Form Container */}
      <div className="w-full max-w-xl mx-auto py-24 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white sm:text-5xl">Contact Sales</h2>
          <p className="mt-4 text-lg text-gray-300">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>

        {/* Form */}
        <form action="#" method="POST" className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold text-white">
                First Name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                placeholder="John"
                className="mt-2 block w-full rounded-md bg-[#0D0D0D] border-none px-4 py-2 text-white placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold text-white">
                Last Name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                placeholder="Doe"
                className="mt-2 block w-full rounded-md bg-[#0D0D0D] border-none px-4 py-2 text-white placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-white">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="john.doe@example.com"
              className="mt-2 block w-full rounded-md bg-[#0D0D0D] border-none px-4 py-2 text-white placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
          </div>

          <div>
            <label htmlFor="phone-number" className="block text-sm font-semibold text-white">
              Phone Number
            </label>
            <input
              type="text"
              name="phone-number"
              id="phone-number"
              placeholder="123-456-7890"
              className="mt-2 block w-full rounded-md bg-[#0D0D0D] border-none px-4 py-2 text-white placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-white">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Your message..."
              className="mt-2 block w-full rounded-md bg-[#0D0D0D] border-none px-4 py-2 text-white placeholder-gray-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              id="agree-to-policies"
              name="agree-to-policies"
              type="checkbox"
              className="h-4 w-4 rounded border-none text-[#D4AF37] shadow-sm focus:ring-2 focus:ring-[#D4AF37]"
            />
            <label htmlFor="agree-to-policies" className="text-sm text-gray-300">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-[#D4AF37]">privacy policy</a>.
            </label>
          </div>

          <button type="submit" className="mt-6 w-full rounded-md bg-[#D4AF37] px-4 py-2 text-[#0D0D0D] font-semibold shadow hover:bg-[#c39b30] cursor-pointer">
            Let us talk
          </button>
        </form>
      </div>
    </div>
  )
}







