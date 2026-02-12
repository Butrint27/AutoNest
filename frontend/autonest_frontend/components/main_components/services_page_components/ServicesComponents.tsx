'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Footer from '../home_page_components/Footer'

// Navigation
const navigation = [
  { name: 'Inventory', href: '/inventory' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'News', href: '/news' },
]

// Sample user cars data (simulate multiple cars)
const userCars = [
  {
    id: 1,
    image: '/picture_1.jpg',
    title: 'Mercedes-Benz S-Class',
    details:
      'Luxury sedan with high-end interior, smooth ride, and advanced technology.',
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
]

export default function ServicesComponents() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false) // Simulated login
  const [carData, setCarData] = useState({
    title: '',
    details: '',
    horsepower: '',
    topSpeed: '',
    fuel: '',
    price: '',
    image: null as File | null,
  })

  const [currentPage, setCurrentPage] = useState(1)
  const carsPerPage = 6

  // Pagination
  const totalPages = Math.ceil(userCars.length / carsPerPage)
  const paginatedCars = userCars.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage
  )

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setCarData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCarData((prev) => ({ ...prev, image: e.target.files ? e.target.files[0] : null }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(carData)
    alert('Car submitted! (Design simulation only)')
    setCarData({
      title: '',
      details: '',
      horsepower: '',
      topSpeed: '',
      fuel: '',
      price: '',
      image: null,
    })
  }

  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="border-b border-white/10">
        <nav className="flex items-center justify-between p-6 lg:px-8 relative">
          <Link href="/">
            <span className="flex items-center bg-[#1a1a1a] hover:bg-[#2c2c2c] text-[#D4AF37] hover:text-yellow-400 font-semibold px-4 py-2 rounded-lg shadow-md cursor-pointer transition duration-200">
              ← Back
            </span>
          </Link>

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

          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="hidden lg:inline text-sm font-semibold tracking-wide text-white hover:text-[#D4AF37] transition cursor-pointer"
            >
              {isLoggedIn ? 'Logout →' : 'Login →'}
            </button>

            <button
              className="lg:hidden p-2 rounded-md text-white hover:text-[#D4AF37] hover:bg-gray-800 transition"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>

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
              <button
                onClick={() => { setIsLoggedIn(!isLoggedIn); setMobileMenuOpen(false) }}
                className="text-white hover:text-[#D4AF37] font-semibold mt-2"
              >
                {isLoggedIn ? 'Logout →' : 'Login →'}
              </button>
            </div>
          )}
        </nav>
      </header>

      {/* HERO */}
      <div className="px-6 py-16 text-center">
        <h1 className="text-5xl font-light">
          {isLoggedIn ? 'Sell Your Car' : 'Login to Sell Your Car'}
        </h1>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          {isLoggedIn
            ? 'Fill in the car details below and manage your listings.'
            : 'Please log in to list your car for sale.'}
        </p>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex justify-center px-6 mb-16">
        {isLoggedIn ? (
          <form
            onSubmit={handleSubmit}
            className="bg-[#1a1a1a] p-8 rounded-xl w-full max-w-lg flex flex-col gap-4"
          >
            <input
              type="text"
              placeholder="Car Model / Title"
              name="title"
              value={carData.title}
              onChange={handleInputChange}
              className="px-4 py-3 rounded-lg bg-[#0D0D0D] border border-white/10 focus:border-[#D4AF37] outline-none"
            />
            <textarea
              placeholder="Details"
              name="details"
              value={carData.details}
              onChange={handleInputChange}
              className="px-4 py-3 rounded-lg bg-[#0D0D0D] border border-white/10 focus:border-[#D4AF37] outline-none resize-none"
            />
            <div className="grid grid-cols-3 gap-3">
              <input
                type="number"
                placeholder="Horsepower"
                name="horsepower"
                value={carData.horsepower}
                onChange={handleInputChange}
                className="px-4 py-3 rounded-lg bg-[#0D0D0D] border border-white/10 focus:border-[#D4AF37] outline-none"
              />
              <input
                type="number"
                placeholder="Top Speed"
                name="topSpeed"
                value={carData.topSpeed}
                onChange={handleInputChange}
                className="px-4 py-3 rounded-lg bg-[#0D0D0D] border border-white/10 focus:border-[#D4AF37] outline-none"
              />
              <input
                type="number"
                placeholder="Fuel"
                name="fuel"
                value={carData.fuel}
                onChange={handleInputChange}
                className="px-4 py-3 rounded-lg bg-[#0D0D0D] border border-white/10 focus:border-[#D4AF37] outline-none"
              />
            </div>
            <input
              type="number"
              placeholder="Price"
              name="price"
              value={carData.price}
              onChange={handleInputChange}
              className="px-4 py-3 rounded-lg bg-[#0D0D0D] border border-white/10 focus:border-[#D4AF37] outline-none"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="px-4 py-3 rounded-lg bg-[#0D0D0D] border border-white/10 focus:border-[#D4AF37] outline-none text-gray-300"
            />
            <button
              type="submit"
              className="mt-2 bg-[#D4AF37] text-[#0D0D0D] font-semibold py-3 rounded-lg hover:bg-yellow-400 transition cursor-pointer"
            >
              Submit Car
            </button>
          </form>
        ) : (
          <div className="bg-[#1a1a1a] p-8 rounded-xl w-full max-w-md flex flex-col gap-4 items-center">
            <p className="text-gray-300 text-center">
              You need to be logged in to submit a car.
            </p>
            <button
              onClick={() => setIsLoggedIn(true)}
              className="bg-[#D4AF37] text-[#0D0D0D] font-semibold py-3 px-6 rounded-lg hover:bg-yellow-400 transition cursor-pointer"
            >
              Login
            </button>
          </div>
        )}
      </div>

      {/* USER CAR HISTORY WITH PAGINATION */}
      {isLoggedIn && (
        <div className="px-6 mb-16">
          <h2 className="text-3xl font-semibold mb-6 text-center">Your Listed Cars</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedCars.map((car) => (
              <div
                key={car.id}
                className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <img src={car.image} alt={car.title} className="w-full h-48 object-cover" />
                <div className="p-4 flex flex-col gap-2">
                  <h3 className="text-lg font-semibold">{car.title}</h3>
                  <p className="text-gray-300 text-sm">{car.details}</p>
                  <div className="text-sm flex justify-between text-gray-400 mt-2">
                    <span>HP: {car.performance.horsepower}</span>
                    <span>Top: {car.performance.topSpeed} km/h</span>
                    <span>Fuel: {car.performance.fuel} L/100km</span>
                  </div>
                  <p className="text-[#D4AF37] font-bold mt-2">${car.price.toLocaleString()}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-lg ${
                currentPage === 1
                  ? 'bg-gray-700 cursor-not-allowed'
                  : 'bg-[#D4AF37] text-[#0D0D0D] hover:bg-yellow-400 transition cursor-pointer'
              }`}
            >
              Prev
            </button>
            <span className="flex items-center text-gray-300 font-semibold">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-lg ${
                currentPage === totalPages
                  ? 'bg-gray-700 cursor-not-allowed'
                  : 'bg-[#D4AF37] text-[#0D0D0D] hover:bg-yellow-400 transition cursor-pointer'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}


