'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Footer from '../../../components/main_components/home_page_components/Footer'
import { cars } from '../../../components/main_components/inventory_page_components/InventoryComponents'

type AppointmentData = {
  name: string
  email: string
  phone: string
  date: string
  time: string
}

const navigation = [
  { name: 'Inventory', href: '/inventory' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Detailed() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalStep, setModalStep] = useState<'form' | 'calendar' | 'confirmation'>('form')
  const [appointment, setAppointment] = useState<AppointmentData>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
  })

  // Example available dates & times (can be dynamically loaded later)
  const availableDates = ['2026-02-14', '2026-02-15', '2026-02-18', '2026-02-20']
  const availableTimes = ['10:00', '11:00', '14:00', '15:00']

  // Get car ID from the URL
  const pathname = usePathname()
  const id = Number(pathname.split('/').pop())
  const car = cars.find((c) => c.id === id)

  if (!car) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center">
        <h1 className="text-3xl font-light">Car Not Found</h1>
      </div>
    )
  }

  // Extra images for gallery (example Pexels links)
  const galleryImages = [
    car.image,
    'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
    'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg',
    'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg',
    'https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg',
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setAppointment({ ...appointment, [name]: value })
  }

  const goToCalendar = () => {
    if (!appointment.name || !appointment.email || !appointment.phone) return
    setModalStep('calendar')
  }

  const handleDateSelect = (date: string) => {
    setAppointment({ ...appointment, date, time: '' })
  }

  const handleTimeSelect = (time: string) => {
    setAppointment({ ...appointment, time })
  }

  const confirmAppointment = () => {
    if (!appointment.date || !appointment.time) return
    console.log('Appointment Confirmed:', appointment)
    setModalStep('confirmation')
  }

  const resetModal = () => {
    setModalOpen(false)
    setModalStep('form')
    setAppointment({ name: '', email: '', phone: '', date: '', time: '' })
  }

  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen">
      {/* ================= HEADER ================= */}
      <header className="border-b border-white/10">
        <nav className="flex items-center justify-between p-6 lg:px-8 relative">
          <Link href="/inventory">
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

      {/* ================= HERO ================= */}
      <section className="px-6 py-16 text-center border-b border-white/10">
        <h1 className="text-5xl font-light">
          {car.title.split(' ')[0]}{' '}
          <span className="text-[#D4AF37]">{car.title.split(' ').slice(1).join(' ')}</span>
        </h1>
      </section>

      {/* ================= IMAGE GALLERY ================= */}
      <section className="px-6 py-16 border-b border-white/10">
        <h2 className="text-3xl font-semibold mb-8 text-center">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {galleryImages.map((img, idx) => (
            <div key={idx} className="overflow-hidden rounded-2xl shadow-xl group">
              <img
                src={img}
                alt={`${car.title} image ${idx + 1}`}
                className="w-full h-64 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* ================= DESCRIPTION ================= */}
      <section className="px-6 py-16 border-b border-white/10 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-6">Description</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          {car.details} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Experience ultimate
          luxury and performance with this high-end vehicle.
        </p>
      </section>

      {/* ================= PERFORMANCE & SPECS ================= */}
      <section className="px-6 py-16 border-b border-white/10 max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 text-center">Performance & Specs</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm uppercase tracking-wide">
          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 text-center">
            <p className="text-gray-400">Horsepower</p>
            <p className="text-2xl font-semibold text-[#D4AF37] mt-2">{car.performance.horsepower} HP</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 text-center">
            <p className="text-gray-400">Top Speed</p>
            <p className="text-2xl font-semibold text-[#D4AF37] mt-2">{car.performance.topSpeed} km/h</p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 text-center">
            <p className="text-gray-400">Fuel</p>
            <p className="text-2xl font-semibold text-[#D4AF37] mt-2">
              {car.performance.fuel === 0 ? 'Electric' : `${car.performance.fuel}L / 100km`}
            </p>
          </div>
          <div className="bg-[#1a1a1a] p-6 rounded-2xl border border-white/10 text-center">
            <p className="text-gray-400">Price</p>
            <p className="text-2xl font-semibold text-[#D4AF37] mt-2">${car.price.toLocaleString()}</p>
          </div>
        </div>
      </section>

      {/* ================= EXTRA DETAILS ================= */}
      <section className="px-6 py-16 max-w-5xl mx-auto border-b border-white/10">
        <h2 className="text-3xl font-semibold mb-6">Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-400">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Engine & Performance</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Engine Type: V8 Twin Turbo / Electric Motor</li>
              <li>Drivetrain: AWD</li>
              <li>Torque: 650 Nm</li>
              <li>0-100 km/h: 3.2 seconds</li>
              <li>Top Speed: {car.performance.topSpeed} km/h</li>
              <li>Transmission: 8-Speed Automatic</li>
              <li>Suspension: Adaptive Sport Suspension</li>
              <li>Brakes: Carbon Ceramic with ABS</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Fuel & Efficiency</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Fuel Type: {car.performance.fuel === 0 ? 'Electric' : 'Petrol'}</li>
              <li>Consumption: {car.performance.fuel === 0 ? 'N/A (Electric)' : `${car.performance.fuel}L / 100km`}</li>
              <li>EV Range: 450 km (if electric)</li>
              <li>Charging: Fast Charge 0-80% in 30 min (if electric)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Interior & Comfort</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Seats: Leather, heated & ventilated</li>
              <li>Climate Control: Tri-zone automatic</li>
              <li>Cabin Materials: Leather, Carbon Fiber, Aluminum accents</li>
              <li>Infotainment: 12-inch touchscreen, Apple CarPlay, Android Auto</li>
              <li>Sound System: Premium 16-speaker audio</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2 text-white">Safety & Driver Assistance</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>Airbags: 6 strategically placed</li>
              <li>Lane Assist & Blind Spot Monitoring</li>
              <li>Adaptive Cruise Control</li>
              <li>Collision Avoidance / Emergency Braking</li>
              <li>Parking Sensors & 360° Camera</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="px-6 py-16 text-center">
        <button
          className="px-10 py-4 bg-[#D4AF37] text-black font-semibold rounded-xl hover:bg-[#b38f2d] transition duration-300 shadow-lg cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          Contact Dealer
        </button>
      </section>

      {/* ================= MODAL ================= */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-[#1a1a1a] rounded-2xl p-8 w-full max-w-lg relative">
            <button
              className="absolute top-4 right-4 text-white hover:text-[#D4AF37] cursor-pointer"
              onClick={resetModal}
            >
              ✕
            </button>

            {modalStep === 'form' && (
              <>
                <h2 className="text-2xl font-semibold mb-4 text-white">Your Contact Info</h2>
                <div className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={appointment.name}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-[#0D0D0D] border border-white/20 text-white placeholder-gray-400"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={appointment.email}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-[#0D0D0D] border border-white/20 text-white placeholder-gray-400"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={appointment.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 rounded-lg bg-[#0D0D0D] border border-white/20 text-white placeholder-gray-400"
                  />
                  <button
                    className="w-full bg-[#D4AF37] text-black font-semibold py-3 rounded-xl hover:bg-[#b38f2d] transition duration-300 cursor-pointer"
                    onClick={goToCalendar}
                  >
                    Next → Select Date
                  </button>
                </div>
              </>
            )}

            {modalStep === 'calendar' && (
              <>
                <h2 className="text-2xl font-semibold mb-4 text-white">Select a Date</h2>
                <div className="grid grid-cols-4 gap-2 mb-4">
                  {availableDates.map((date) => (
                    <button
                      key={date}
                      className={`p-2 rounded-lg border border-white/20 ${
                        appointment.date === date ? 'bg-[#D4AF37] text-black' : 'text-white'
                      }`}
                      onClick={() => handleDateSelect(date)}
                    >
                      {new Date(date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                      })}
                    </button>
                  ))}
                </div>

                {appointment.date && (
                  <>
                    <h3 className="text-white mb-2">Select Time</h3>
                    <div className="flex gap-2 flex-wrap mb-4">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          className={`px-3 py-2 rounded-lg border border-white/20 ${
                            appointment.time === time ? 'bg-[#D4AF37] text-black' : 'text-white'
                          }`}
                          onClick={() => handleTimeSelect(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </>
                )}

                <div className="flex justify-between">
                  <button
                    className="bg-gray-600 px-4 py-2 rounded-lg hover:bg-gray-700 transition cursor-pointer"
                    onClick={() => setModalStep('form')}
                  >
                    ← Back
                  </button>
                  <button
                    className="bg-[#D4AF37] text-black font-semibold py-3 rounded-xl hover:bg-[#b38f2d] transition duration-300 cursor-pointer"
                    onClick={confirmAppointment}
                  >
                    Confirm Appointment
                  </button>
                </div>
              </>
            )}

            {modalStep === 'confirmation' && (
              <div className="text-center">
                <h2 className="text-2xl font-semibold mb-4 text-white">Thank You!</h2>
                <p className="text-gray-400">
                  Your appointment for {appointment.date} at {appointment.time} has been
                  received. The dealer will contact you shortly.
                </p>
                <button
                  onClick={resetModal}
                  className="mt-6 bg-[#D4AF37] text-black font-semibold py-3 px-6 rounded-xl hover:bg-[#b38f2d] transition duration-300 cursor-pointer"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}










