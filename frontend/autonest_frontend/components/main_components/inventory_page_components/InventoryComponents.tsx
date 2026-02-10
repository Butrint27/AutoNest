'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Footer from '../home_page_components/Footer'

const navigation = [
  { name: 'Inventory', href: '/inventory' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

const cars = [
  {
    id: 1,
    image: '/picture_1.jpg',
    title: 'Mercedes-Benz S-Class',
    details: 'Luxury sedan with high-end interior and advanced technology.',
    performance: { horsepower: 496, topSpeed: 250, fuel: 9.5 },
    price: 120000,
  },
  {
    id: 2,
    image: '/picture_2.jpg',
    title: 'Porsche 911 Carrera',
    details: 'Sporty coupe with exceptional handling.',
    performance: { horsepower: 379, topSpeed: 293, fuel: 11.0 },
    price: 95000,
  },
  {
    id: 3,
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
    title: 'Tesla Model S Plaid',
    details: 'All-electric sedan with insane acceleration.',
    performance: { horsepower: 1020, topSpeed: 322, fuel: 0 },
    price: 135000,
  },
  {
    id: 4,
    image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg',
    title: 'BMW M5 Competition',
    details: 'High-performance sports sedan.',
    performance: { horsepower: 617, topSpeed: 305, fuel: 12.0 },
    price: 125000,
  },
  {
    id: 5,
    image: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg',
    title: 'Audi e-tron GT',
    details: 'All-electric grand tourer.',
    performance: { horsepower: 469, topSpeed: 245, fuel: 0 },
    price: 99000,
  },
  {
    id: 6,
    image: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg',
    title: 'Range Rover Sport',
    details: 'Luxury SUV with off-road capability.',
    performance: { horsepower: 518, topSpeed: 250, fuel: 13.0 },
    price: 110000,
  },
  {
    id: 7,
    image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
    title: 'Lamborghini Huracán',
    details: 'Exotic supercar built for speed.',
    performance: { horsepower: 631, topSpeed: 325, fuel: 15 },
    price: 240000,
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg',
    title: 'Ferrari F8',
    details: 'Precision-engineered Italian masterpiece.',
    performance: { horsepower: 710, topSpeed: 340, fuel: 14 },
    price: 280000,
  },
  {
    id: 9,
    image: 'https://images.pexels.com/photos/3752169/pexels-photo-3752169.jpeg',
    title: 'Rolls Royce Ghost',
    details: 'Ultra luxury flagship sedan.',
    performance: { horsepower: 563, topSpeed: 250, fuel: 12 },
    price: 315000,
  },
  {
    id: 10,
    image: 'https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg',
    title: 'McLaren 720S',
    details: 'Track-focused British supercar.',
    performance: { horsepower: 710, topSpeed: 341, fuel: 14 },
    price: 299000,
  },
  {
    id: 11,
    image: 'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg',
    title: 'Bentley Continental GT',
    details: 'Grand touring luxury coupe.',
    performance: { horsepower: 542, topSpeed: 318, fuel: 12 },
    price: 220000,
  },
  {
    id: 12,
    image: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg',
    title: 'Mercedes AMG GT',
    details: 'Aggressive performance coupe.',
    performance: { horsepower: 523, topSpeed: 310, fuel: 13 },
    price: 165000,
  },
]

export default function InventoryComponents() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [filters, setFilters] = useState<string[]>([])
  const [search, setSearch] = useState('')
  const [currentPage, setCurrentPage] = useState(1)

  const carsPerPage = 6

  const toggleFilter = (filter: string) => {
    setCurrentPage(1)
    setFilters((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    )
  }

  const filteredCars = cars.filter((car) => {
    const matchesSearch = car.title.toLowerCase().includes(search.toLowerCase())
    const matchesFilters = filters.every((filter) => {
      if (filter === 'electric') return car.performance.fuel === 0
      if (filter === 'highPerformance') return car.performance.horsepower >= 600
      if (filter === 'luxury') return car.price > 200000
      if (filter === 'priceUnder100k') return car.price <= 100000
      if (filter === 'price100kto200k') return car.price > 100000 && car.price <= 200000
      return true
    })
    return matchesSearch && matchesFilters
  })

  const totalPages = Math.ceil(filteredCars.length / carsPerPage)
  const startIndex = (currentPage - 1) * carsPerPage
  const paginatedCars = filteredCars.slice(startIndex, startIndex + carsPerPage)

  return (
    <div className="relative bg-[#0D0D0D] text-white min-h-screen">
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
              Log in →
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
                Log in →
              </Link>
            </div>
          )}
        </nav>
      </header>

      {/* HERO */}
      <div className="px-6 py-16 text-center">
        <h1 className="text-5xl font-light">
          Premium <span className="text-[#D4AF37]">Inventory</span>
        </h1>

        <div className="mt-8 max-w-2xl mx-auto">
          <input
            type="text"
            placeholder="Search vehicles..."
            className="w-full px-6 py-4 rounded-xl bg-[#1a1a1a] border border-white/10 focus:border-[#D4AF37] outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* MAIN */}
      <section className="bg-white text-black px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* FILTER */}
          <aside className="space-y-6">
            <h3 className="font-semibold uppercase tracking-wider">Filters</h3>
            <label className="flex gap-3 cursor-pointer">
              <input type="checkbox" onChange={() => toggleFilter('electric')} />
              Electric
            </label>
            <label className="flex gap-3 cursor-pointer">
              <input type="checkbox" onChange={() => toggleFilter('highPerformance')} />
              600+ HP
            </label>
            <label className="flex gap-3 cursor-pointer">
              <input type="checkbox" onChange={() => toggleFilter('luxury')} />
              $200k+ Luxury
            </label>
            <label className="flex gap-3 cursor-pointer">
              <input type="checkbox" onChange={() => toggleFilter('priceUnder100k')} />
              Price ≤ $100k
            </label>
            <label className="flex gap-3 cursor-pointer">
              <input type="checkbox" onChange={() => toggleFilter('price100kto200k')} />
              $100k - $200k
            </label>
          </aside>

          {/* CAR GRID */}
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-10">
            {paginatedCars.map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-500"
              >
                <div className="relative h-80">
                  <img
                    src={car.image}
                    alt={car.title}
                    className="w-full h-full object-cover hover:scale-105 transition duration-700"
                  />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold">{car.title}</h3>
                  <p className="text-gray-600 mt-3">{car.details}</p>

                  <div className="mt-6 text-sm text-gray-500 space-y-1">
                    <p>Horsepower: {car.performance.horsepower} HP</p>
                    <p>Top Speed: {car.performance.topSpeed} km/h</p>
                    <p>
                      Fuel: {car.performance.fuel === 0 ? 'Electric' : `${car.performance.fuel}L / 100km`}
                    </p>
                  </div>

                  <p className="mt-6 text-xl font-semibold text-[#D4AF37]">
                    ${car.price.toLocaleString()}
                  </p>

                  {/* Detailed Button */}
                  <button className="mt-4 px-6 py-2 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#b38f2d] transition cursor-pointer">
                    Detailed
                  </button>
                </div>
              </div>
            ))}

            {/* PAGINATION */}
            <div className="col-span-full flex justify-center mt-12 gap-4">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-4 py-2 rounded-lg cursor-pointer ${
                    currentPage === i + 1 ? 'bg-black text-white' : 'bg-gray-200'
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}






