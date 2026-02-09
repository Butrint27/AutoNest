import Image from 'next/image'
import { FaHorse, FaTachometerAlt, FaGasPump } from 'react-icons/fa'

const cars = [
  {
    id: 1,
    image: '/picture_1.jpg',
    title: 'Mercedes-Benz S-Class',
    details: 'Luxury sedan with high-end interior, smooth ride, and advanced technology.',
    performance: { horsepower: 496, topSpeed: 250, fuel: 9.5 },
    price: 120000,
  },
  {
    id: 2,
    image: '/picture_2.jpg',
    title: 'Porsche 911 Carrera',
    details: 'Sporty coupe with exceptional handling, iconic design, and powerful engine.',
    performance: { horsepower: 379, topSpeed: 293, fuel: 11.0 },
    price: 95000,
  },
  {
    id: 3,
    image: '/picture_3.jpg',
    title: 'Tesla Model S Plaid',
    details: 'All-electric sedan with insane acceleration, futuristic tech, and long range.',
    performance: { horsepower: 1020, topSpeed: 322, fuel: 0 },
    price: 135000,
  },
  {
    id: 4,
    image: '/picture_4.jpg',
    title: 'BMW M5 Competition',
    details: 'High-performance sports sedan with aggressive styling, powerful engine, and luxury interior.',
    performance: { horsepower: 617, topSpeed: 305, fuel: 12.0 },
    price: 125000,
  },
  {
    id: 5,
    image: '/picture_5.jpg',
    title: 'Audi e-tron GT',
    details: 'All-electric grand tourer with sleek design, fast acceleration, and cutting-edge technology.',
    performance: { horsepower: 469, topSpeed: 245, fuel: 0 },
    price: 99000,
  },
  {
    id: 6,
    image: '/picture_6.jpg',
    title: 'Range Rover Sport',
    details: 'Luxury SUV with off-road capability, premium interior, and powerful engine.',
    performance: { horsepower: 518, topSpeed: 250, fuel: 13.0 },
    price: 110000,
  },
]

export default function FeaturedCollection() {
  return (
    <div className="bg-[#0D0D0D] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-2xl lg:mx-0 mb-10">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-[#FFFFFF] sm:text-5xl">
              Featured Collection
            </h2>
            <p className="mt-2 text-lg text-gray-300">
              Handpicked vehicles for discerning drivers
            </p>
          </div>
          <a href="#" className="mt-4 sm:mt-0 text-[#D4AF37] font-semibold hover:underline">
            View All
          </a>
        </div>

        {/* Cards */}
        <div
          className="mt-10 grid gap-x-12 gap-y-10 justify-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}
        >
          {cars.map((car) => (
            <div
              key={car.id}
              className="flex flex-col bg-[#1A1A1A] rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="relative h-64 w-full">
                <Image src={car.image} alt={car.title} fill className="object-cover" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-semibold text-[#FFFFFF]">{car.title}</h3>
                <p className="mt-2 text-gray-300 text-sm">{car.details}</p>

                {/* Performance icons */}
                <div className="mt-4 flex gap-6 text-gray-300">
                  <div className="flex items-center gap-1">
                    <FaHorse className="text-[#D4AF37]" />
                    <span>{car.performance.horsepower} hp</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaTachometerAlt className="text-[#D4AF37]" />
                    <span>{car.performance.topSpeed} km/h</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <FaGasPump className="text-[#D4AF37]" />
                    <span>{car.performance.fuel} L/100km</span>
                  </div>
                </div>

                {/* Price and Details button */}
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-lg font-bold text-[#FFFFFF]">
                    €{car.price.toLocaleString()}
                  </span>
                 <button className="bg-[#D4AF37] text-[#0D0D0D] px-4 py-2 rounded hover:bg-yellow-500 transition cursor-pointer">
                   Details
                 </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}





