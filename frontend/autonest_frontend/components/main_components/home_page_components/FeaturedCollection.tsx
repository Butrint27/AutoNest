'use client'

import Image from 'next/image'
import { FaHorse, FaTachometerAlt, FaGasPump } from 'react-icons/fa'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import Link from 'next/link'

const cars = [
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
    details:
      'Sporty coupe with exceptional handling, iconic design, and powerful engine.',
    performance: { horsepower: 379, topSpeed: 293, fuel: 11.0 },
    price: 95000,
  },
  {
    id: 3,
    image: '/picture_3.jpg',
    title: 'Tesla Model S Plaid',
    details:
      'All-electric sedan with insane acceleration, futuristic tech, and long range.',
    performance: { horsepower: 1020, topSpeed: 322, fuel: 0 },
    price: 135000,
  },
  {
    id: 4,
    image: '/picture_4.jpg',
    title: 'BMW M5 Competition',
    details:
      'High-performance sports sedan with aggressive styling and luxury interior.',
    performance: { horsepower: 617, topSpeed: 305, fuel: 12.0 },
    price: 125000,
  },
  {
    id: 5,
    image: '/picture_5.jpg',
    title: 'Audi e-tron GT',
    details:
      'All-electric grand tourer with sleek design and cutting-edge technology.',
    performance: { horsepower: 469, topSpeed: 245, fuel: 0 },
    price: 99000,
  },
  {
    id: 6,
    image: '/picture_6.jpg',
    title: 'Range Rover Sport',
    details:
      'Luxury SUV with off-road capability, premium interior, and powerful engine.',
    performance: { horsepower: 518, topSpeed: 250, fuel: 13.0 },
    price: 110000,
  },
]

export default function FeaturedCollection() {
  return (
    <div className="bg-[#0D0D0D] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-2xl lg:mx-0 mb-16">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Featured Collection
            </h2>
            <p className="mt-2 text-lg text-gray-300">
              Handpicked vehicles for discerning drivers
            </p>
          </div>

          <a
            href="/inventory"
            className="mt-4 sm:mt-0 text-[#D4AF37] font-semibold hover:underline"
          >
            View All
          </a>
        </div>

        {/* Custom Arrows */}
        <div className="absolute top-1/2 -left-10 z-20 -translate-y-1/2 cursor-pointer text-white text-4xl swiper-button-prev-custom hover:scale-110 transition">
          <FaChevronLeft />
        </div>

        <div className="absolute top-1/2 -right-10 z-20 -translate-y-1/2 cursor-pointer text-white text-4xl swiper-button-next-custom hover:scale-110 transition">
          <FaChevronRight />
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cars.map((car) => (
            <SwiperSlide key={car.id}>
              <div className="flex flex-col bg-[#1A1A1A] rounded-xl shadow-lg overflow-hidden transition duration-300 hover:scale-105 hover:shadow-2xl">
                
                {/* Image */}
                <div className="relative h-64 w-full">
                  <Image
                    src={car.image}
                    alt={car.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col grow">
                  <h3 className="text-xl font-semibold text-white">
                    {car.title}
                  </h3>

                  <p className="mt-2 text-gray-300 text-sm">
                    {car.details}
                  </p>

                  <div className="mt-4 flex gap-6 text-gray-300 text-sm">
                    <div className="flex items-center gap-1">
                      <FaHorse className="text-[#D4AF37]" />
                      {car.performance.horsepower} hp
                    </div>
                    <div className="flex items-center gap-1">
                      <FaTachometerAlt className="text-[#D4AF37]" />
                      {car.performance.topSpeed} km/h
                    </div>
                    <div className="flex items-center gap-1">
                      <FaGasPump className="text-[#D4AF37]" />
                      {car.performance.fuel} L/100km
                    </div>
                  </div>

                  <div className="mt-6 flex justify-between items-center">
                    <span className="text-white font-bold text-lg">
                      €{car.price.toLocaleString()}
                    </span>
                    <Link
                   href={`/inventory/${car.id}`}
                   className="mt-4 inline-block px-6 py-2 bg-[#D4AF37] text-black font-semibold rounded-lg hover:bg-[#b38f2d] transition cursor-pointer"
                 >
                   Detailed
                  </Link>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  )
}








