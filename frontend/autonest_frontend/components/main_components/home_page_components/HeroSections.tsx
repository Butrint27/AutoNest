'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Inventory', href: '#' },
  { name: 'Services', href: '#' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '#' },
]

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-white overflow-hidden">
      {/* Background Image */}
      <Image
        src="/auto_salon_header.jpg"
        alt="Luxury Auto Salon"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* HEADER */}
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          {/* Left spacer (keeps center nav truly centered) */}
          <div className="flex lg:flex-1" />

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="rounded-md p-2 text-white"
            >
              <Bars3Icon className="size-6" />
            </button>
          </div>

          {/* Centered Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-14">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="
                  text-sm
                  font-medium
                  tracking-wide
                  uppercase
                  text-white
                  hover:text-[#D4AF37]
                  transition
                "
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Login (right side) */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="/signin"
              className="
                text-sm
                font-semibold
                tracking-wide
                text-white
                hover:text-[#D4AF37]
                transition
              "
            >
              Log in <span aria-hidden="true">→</span>
            </a>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-black/70" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-[#0D0D0D] p-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-[#D4AF37] tracking-wide">
                AutoNest
              </span>
              <button onClick={() => setMobileMenuOpen(false)}>
                <XMarkIcon className="size-6 text-white" />
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="
                    block
                    text-lg
                    uppercase
                    tracking-wide
                    text-white
                    hover:text-[#D4AF37]
                  "
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#"
                className="block text-lg font-semibold text-[#D4AF37]"
              >
                Log in →
              </a>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* HERO CONTENT */}
      <main className="relative z-10 flex min-h-screen items-center justify-center px-6">
        <div className="max-w-3xl text-center">
          <span className="inline-block uppercase tracking-[0.25em] text-sm text-[#D4AF37]">
            Premium Auto Collection
          </span>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-7xl">
            Drive the{' '}
            <span className="text-[#D4AF37]">Extraordinary</span>
          </h1>

          <p className="mt-6 text-lg text-gray-300 sm:text-xl">
            Discover hand-selected luxury vehicles where performance,
            craftsmanship, and prestige meet.
          </p>

          <div className="mt-10 flex justify-center">
            <a
              href="#"
              className="
                rounded-md
                bg-[#D4AF37]
                px-8
                py-3
                text-sm
                font-semibold
                text-black
                hover:opacity-90
                transition
              "
            >
              Explore Inventory
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}



