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
  { name: 'News', href: '/news' },
]

// ORIGINAL USER CARS (PAGINATION PRESERVED)
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
    image:
      'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
    title: 'Tesla Model S Plaid',
    details: 'All-electric sedan with insane acceleration.',
    performance: { horsepower: 1020, topSpeed: 322, fuel: 0 },
    price: 135000,
  },
  {
    id: 4,
    image:
      'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg',
    title: 'BMW M5 Competition',
    details: 'High-performance sports sedan.',
    performance: { horsepower: 617, topSpeed: 305, fuel: 12.0 },
    price: 125000,
  },
  {
    id: 5,
    image:
      'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg',
    title: 'Audi e-tron GT',
    details: 'All-electric grand tourer.',
    performance: { horsepower: 469, topSpeed: 245, fuel: 0 },
    price: 99000,
  },
  {
    id: 6,
    image:
      'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg',
    title: 'Range Rover Sport',
    details: 'Luxury SUV with off-road capability.',
    performance: { horsepower: 518, topSpeed: 250, fuel: 13.0 },
    price: 110000,
  },

  // NEW ONES START HERE

  {
    id: 7,
    image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg',
    title: 'Ferrari F8 Tributo',
    details: 'Twin-turbo V8 supercar with track-level performance.',
    performance: { horsepower: 710, topSpeed: 340, fuel: 15.5 },
    price: 280000,
  },
  {
    id: 8,
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
    title: 'Lamborghini Huracan EVO',
    details: 'Naturally aspirated V10 masterpiece.',
    performance: { horsepower: 631, topSpeed: 325, fuel: 14.0 },
    price: 260000,
  },
  {
    id: 9,
    image: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg',
    title: 'McLaren 720S',
    details: 'Lightweight carbon fiber supercar.',
    performance: { horsepower: 710, topSpeed: 341, fuel: 14.5 },
    price: 300000,
  },
  {
    id: 10,
    image: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg',
    title: 'Bentley Continental GT',
    details: 'Luxury grand tourer with W12 power.',
    performance: { horsepower: 650, topSpeed: 333, fuel: 16.0 },
    price: 220000,
  },
  {
    id: 11,
    image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg',
    title: 'Aston Martin DB11',
    details: 'Elegant British V8 performance.',
    performance: { horsepower: 528, topSpeed: 309, fuel: 12.5 },
    price: 205000,
  },
  {
    id: 12,
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
    title: 'Chevrolet Corvette C8',
    details: 'Mid-engine American sports car.',
    performance: { horsepower: 495, topSpeed: 312, fuel: 11.5 },
    price: 85000,
  },
  {
    id: 13,
    image: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg',
    title: 'Nissan GT-R Nismo',
    details: 'Legendary Japanese performance machine.',
    performance: { horsepower: 600, topSpeed: 315, fuel: 14.0 },
    price: 210000,
  },
  {
    id: 14,
    image: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg',
    title: 'Rolls-Royce Ghost',
    details: 'Ultimate ultra-luxury sedan.',
    performance: { horsepower: 563, topSpeed: 250, fuel: 15.0 },
    price: 330000,
  },
  {
    id: 15,
    image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg',
    title: 'Bugatti Chiron',
    details: 'Quad-turbo W16 hypercar.',
    performance: { horsepower: 1500, topSpeed: 420, fuel: 22.0 },
    price: 3000000,
  },
  {
    id: 16,
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg',
    title: 'Toyota Supra GR',
    details: 'Modern revival of the JDM icon.',
    performance: { horsepower: 382, topSpeed: 250, fuel: 9.8 },
    price: 58000,
  },
  {
    id: 17,
    image: 'https://images.pexels.com/photos/1149831/pexels-photo-1149831.jpeg',
    title: 'Ford Mustang GT',
    details: '5.0L V8 American muscle.',
    performance: { horsepower: 450, topSpeed: 250, fuel: 12.0 },
    price: 55000,
  },
  {
    id: 18,
    image: 'https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg',
    title: 'Alfa Romeo Giulia Quadrifoglio',
    details: 'Ferrari-derived twin-turbo V6.',
    performance: { horsepower: 505, topSpeed: 307, fuel: 11.5 },
    price: 82000,
  },
]


export default function ServicesComponents() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [step, setStep] = useState(1)
  const totalSteps = 5

  const [carData, setCarData] = useState({
    title: '',
    details: '',
    horsepower: '',
    topSpeed: '',
    fuel: '',
    price: '',
    image: null as File | null,

    engineType: '',
    drivetrain: '',
    torque: '',
    acceleration: '',
    transmission: '',
    suspension: '',
    brakes: '',

    fuelType: '',
    consumption: '',
    evRange: '',
    charging: '',

    seats: '',
    climate: '',
    materials: '',
    infotainment: '',
    soundSystem: '',

    safety: '',
  })

  const [currentPage, setCurrentPage] = useState(1)
  const carsPerPage = 6
  const totalPages = Math.ceil(userCars.length / carsPerPage)
  const paginatedCars = userCars.slice(
    (currentPage - 1) * carsPerPage,
    currentPage * carsPerPage
  )

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setCarData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCarData((prev) => ({
      ...prev,
      image: e.target.files ? e.target.files[0] : null,
    }))
  }

  const nextStep = () =>
    setStep((prev) => Math.min(prev + 1, totalSteps))
  const prevStep = () =>
    setStep((prev) => Math.max(prev - 1, 1))

  const progressPercentage = (step / totalSteps) * 100

  const inputStyle =
    'px-4 py-3 rounded-lg bg-[#0D0D0D] border border-white/10 focus:border-[#D4AF37] outline-none transition w-full'

  return (
    <div className="bg-[#0D0D0D] text-white min-h-screen flex flex-col">
      {/* HEADER */}
      <header className="border-b border-white/10">
  <nav className="flex items-center justify-between p-6 lg:px-16 relative">
    
    {/* LEFT: Back Button */}
    <Link href="/">
      <span className="flex items-center bg-[#1a1a1a] hover:bg-[#2c2c2c] text-[#D4AF37] font-semibold px-4 py-2 rounded-lg shadow-md cursor-pointer transition">
        ← Back
      </span>
    </Link>

    {/* CENTER: Navigation */}
    <ul className="hidden lg:flex gap-8 mx-auto">
      {navigation.map((nav) => (
        <li key={nav.name}>
          <Link
            href={nav.href}
            className="text-sm uppercase text-white hover:text-[#D4AF37] transition"
          >
            {nav.name}
          </Link>
        </li>
      ))}
    </ul>

    {/* RIGHT: Login/Logout */}
    <button
      onClick={() => setIsLoggedIn(!isLoggedIn)}
      className="text-sm font-semibold hover:text-[#D4AF37] transition"
    >
      {isLoggedIn ? 'Logout →' : 'Login →'}
    </button>

    {/* MOBILE MENU BUTTON */}
    <button
      className="lg:hidden ml-4"
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
    >
      {mobileMenuOpen ? (
        <XMarkIcon className="h-6 w-6 text-white" />
      ) : (
        <Bars3Icon className="h-6 w-6 text-white" />
      )}
    </button>
  </nav>

  {/* MOBILE MENU */}
  {mobileMenuOpen && (
    <div className="lg:hidden bg-[#1a1a1a] p-4">
      <ul className="flex flex-col gap-4">
        {navigation.map((nav) => (
          <li key={nav.name}>
            <Link
              href={nav.href}
              className="text-white text-base hover:text-[#D4AF37] transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {nav.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )}
</header>

      {/* FORM */}
      <div className="flex justify-center px-6 py-16">
        {isLoggedIn ? (
          <div className="bg-[#1a1a1a] p-8 rounded-xl w-full max-w-3xl">

            {/* PROGRESS BAR */}
            <div className="mb-8">
              <div className="w-full bg-gray-800 h-2 rounded-full">
                <div
                  className="bg-[#D4AF37] h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
              <p className="text-gray-400 mt-2 text-sm">
                Step {step} of {totalSteps}
              </p>
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <div className="flex flex-col gap-4">
                <input name="title" placeholder="Car Model / Title" onChange={handleInputChange} className={inputStyle} />
                <textarea name="details" placeholder="Details" onChange={handleInputChange} className={`${inputStyle} resize-none`} />
                <div className="grid grid-cols-3 gap-3">
                  <input name="horsepower" placeholder="Horsepower" onChange={handleInputChange} className={inputStyle} />
                  <input name="topSpeed" placeholder="Top Speed" onChange={handleInputChange} className={inputStyle} />
                  <input name="fuel" placeholder="Fuel" onChange={handleInputChange} className={inputStyle} />
                </div>
                <input name="price" placeholder="Price" onChange={handleInputChange} className={inputStyle} />
                <input type="file" onChange={handleImageChange} className={inputStyle} />
              </div>
            )}

            {/* STEP 2-5 SAME AS BEFORE (Engine, Fuel, Interior, Safety) */}
            {/* Keeping clean structure for length control */}

            {step === 2 && (
              <div className="flex flex-col gap-4">
                <input name="engineType" placeholder="Engine Type" onChange={handleInputChange} className={inputStyle} />
                <input name="drivetrain" placeholder="Drivetrain" onChange={handleInputChange} className={inputStyle} />
                <input name="torque" placeholder="Torque" onChange={handleInputChange} className={inputStyle} />
                <input name="acceleration" placeholder="0-100 km/h" onChange={handleInputChange} className={inputStyle} />
                <input name="transmission" placeholder="Transmission" onChange={handleInputChange} className={inputStyle} />
                <input name="suspension" placeholder="Suspension" onChange={handleInputChange} className={inputStyle} />
                <input name="brakes" placeholder="Brakes" onChange={handleInputChange} className={inputStyle} />
              </div>
            )}

            {step === 3 && (
              <div className="flex flex-col gap-4">
                <input name="fuelType" placeholder="Fuel Type" onChange={handleInputChange} className={inputStyle} />
                <input name="consumption" placeholder="Consumption" onChange={handleInputChange} className={inputStyle} />
                <input name="evRange" placeholder="EV Range" onChange={handleInputChange} className={inputStyle} />
                <input name="charging" placeholder="Charging" onChange={handleInputChange} className={inputStyle} />
              </div>
            )}

            {step === 4 && (
              <div className="flex flex-col gap-4">
                <input name="seats" placeholder="Seats" onChange={handleInputChange} className={inputStyle} />
                <input name="climate" placeholder="Climate Control" onChange={handleInputChange} className={inputStyle} />
                <input name="materials" placeholder="Cabin Materials" onChange={handleInputChange} className={inputStyle} />
                <input name="infotainment" placeholder="Infotainment" onChange={handleInputChange} className={inputStyle} />
                <input name="soundSystem" placeholder="Sound System" onChange={handleInputChange} className={inputStyle} />
              </div>
            )}

            {step === 5 && (
              <div className="flex flex-col gap-4">
                <input name="airbags" placeholder="Airbags" onChange={handleInputChange} className={inputStyle} />
                <input name="lane" placeholder="Lane Assist & Blind Spot Monitoring" onChange={handleInputChange} className={inputStyle} />
                <input name="adaptive" placeholder="Adaptive Cruise Control" onChange={handleInputChange} className={inputStyle} />
                <input name="collusion" placeholder="Collision" onChange={handleInputChange} className={inputStyle} />
                <input name="parking" placeholder="Parking Sensors" onChange={handleInputChange} className={inputStyle} />
              </div>
            )}

            {/* NAVIGATION */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button onClick={prevStep} className="bg-gray-700 px-6 py-2 rounded-lg cursor-pointer">
                  Back
                </button>
              )}
              {step < totalSteps ? (
                <button onClick={nextStep} className="bg-[#D4AF37] text-black px-6 py-2 rounded-lg cursor-pointer">
                  Next
                </button>
              ) : (
                <button className="bg-[#D4AF37] text-black px-6 py-2 rounded-lg cursor-pointer">
                  Submit
                </button>
              )}
            </div>
          </div>
        ) : (
          <button
            onClick={() => setIsLoggedIn(true)}
            className="bg-[#D4AF37] text-black px-6 py-3 rounded-lg"
          >
            Login to Start
          </button>
        )}
      </div>

      {/* USER CAR HISTORY WITH ORIGINAL PAGINATION DESIGN */}
{isLoggedIn && (
  <div className="px-6 mb-16">
    <h2 className="text-3xl font-semibold mb-6 text-center">
      Your Listed Cars
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {paginatedCars.map((car) => (
        <div
          key={car.id}
          className="bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
        >
          <img
            src={car.image}
            alt={car.title}
            className="w-full h-48 object-cover"
          />

          <div className="p-4 flex flex-col gap-2">
            <h3 className="text-lg font-semibold">
              {car.title}
            </h3>

            <p className="text-gray-300 text-sm">
              {car.details}
            </p>

            {/* PERFORMANCE ROW (Original Style) */}
            <div className="text-sm flex justify-between text-gray-400 mt-2">
              <span>HP: {car.performance.horsepower}</span>
              <span>Top: {car.performance.topSpeed} km/h</span>
              <span>Fuel: {car.performance.fuel} L/100km</span>
            </div>

            {/* PRICE */}
            <p className="text-[#D4AF37] font-bold mt-2">
              ${car.price.toLocaleString()}
            </p>
          </div>
        </div>
      ))}
    </div>

    {/* PAGINATION CONTROLS (Original Logic + Disabled State) */}
    <div className="flex justify-center gap-4 mt-8">
      <button
        onClick={() =>
          setCurrentPage((prev) => Math.max(prev - 1, 1))
        }
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
        onClick={() =>
          setCurrentPage((prev) =>
            Math.min(prev + 1, totalPages)
          )
        }
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




