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

type NewsItem = {
  id: number
  title: string
  image: string
  description: string
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: 'New Luxury Car Release',
    image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Check out our newest luxury model hitting the streets soon. Advanced engineering meets timeless elegance. With a powerful engine, sleek design, and high-end interiors, this car is designed for those who value performance and style. The attention to detail in every curve and finish is remarkable, making it a true masterpiece on wheels.',
  },
  {
    id: 2,
    title: 'Company Milestone Achieved',
    image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'We are proud to announce an incredible company milestone. Over the past decade, we have expanded globally, reached record sales, and built a loyal customer base. This success reflects our dedication to quality, innovation, and exceptional service, setting new standards in the automotive industry.',
  },
  {
    id: 3,
    title: 'Electric Cars Trends',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Electric vehicles are reshaping the future of transportation. With advancements in battery technology, faster charging, and increased range, EVs are becoming more accessible and practical for everyday use. Consumers are embracing sustainability without compromising on performance or luxury.',
  },
  {
    id: 4,
    title: 'Top 5 Performance Upgrades',
    image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Discover the top five performance upgrades to enhance your car’s speed, handling, and efficiency. From turbo kits to suspension tuning, these modifications are perfect for enthusiasts looking to push their vehicles to the next level while maintaining reliability and style.',
  },
  {
    id: 5,
    title: 'Auto Salon Awards',
    image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Our auto salon has won multiple awards this year for innovation, design, and customer satisfaction. These accolades reflect our commitment to excellence and passion for automotive perfection, celebrating both our team and our valued clients.',
  },
  {
    id: 6,
    title: 'Classic Cars Exhibition',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Join us for a breathtaking exhibition of classic cars. Featuring vintage models, restored masterpieces, and rare collectibles, this event is a paradise for car enthusiasts. Each car tells a story, capturing the evolution of automotive design over decades.',
  },
  {
    id: 7,
    title: 'Winter Car Care Tips',
    image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Prepare your car for winter with our essential care tips. From tire maintenance to battery checks, these recommendations will ensure your vehicle runs safely and efficiently even in harsh weather conditions. Protect your investment and enjoy peace of mind during the cold months.',
  },
  {
    id: 8,
    title: 'SUVs on the Rise',
    image: 'https://images.pexels.com/photos/358070/pexels-photo-358070.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'SUVs continue to dominate the automotive market. With versatile designs, off-road capabilities, and advanced safety features, they appeal to families and adventurers alike. Explore why these vehicles are gaining popularity and which models are leading the pack.',
  },
  {
    id: 9,
    title: 'Sustainable Automotive Materials',
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Learn about sustainable materials used in modern cars. From recycled plastics to eco-friendly fabrics, the automotive industry is embracing environmentally responsible alternatives without compromising on quality, comfort, or luxury.',
  },
  {
    id: 10,
    title: 'Future of Autonomous Vehicles',
    image: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Autonomous vehicles are no longer science fiction. Explore how self-driving technology is evolving, the challenges it faces, and the potential to transform urban mobility. Safety, efficiency, and convenience are at the forefront of this automotive revolution.',
  },
]

export default function NewsComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)

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

      {/* News Section */}
      <div className="max-w-6xl mx-auto py-12 px-4 space-y-8">
        <h1 className="text-4xl font-bold text-[#D4AF37] text-center">Latest News</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 overflow-y-auto">
          {newsData.map((news) => (
            <div
              key={news.id}
              onClick={() => setSelectedNews(news)}
              className="bg-[#1a1a1a] rounded-lg shadow-lg cursor-pointer hover:shadow-2xl transition overflow-hidden"
            >
              <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-white">{news.title}</h2>
                <p className="mt-2 text-gray-300">{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black/70 flex justify-center items-center z-50">
          <div className="bg-[#0D0D0D] rounded-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 text-[#D4AF37] text-xl font-bold cursor-pointer"
            >
              ×
            </button>
            <img src={selectedNews.image} alt={selectedNews.title} className="w-full h-64 object-cover rounded" />
            <h2 className="text-2xl font-bold text-[#D4AF37] mt-4">{selectedNews.title}</h2>
            <p className="mt-2 text-gray-300">{selectedNews.description}</p>
          </div>
        </div>
        
      )}
      <Footer />
    </div>
  )
}

