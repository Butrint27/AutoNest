'use client' // Needed for React hooks in Next.js app directory

import { useEffect, useState } from 'react'

const stats = [
  { id: 1, name: 'Transactions every 24 hours', value: 44000000 },
  { id: 2, name: 'Assets under holding', value: 119000000000000, isCurrency: true },
  { id: 3, name: 'New users annually', value: 46000 },
  { id: 4, name: 'Countries served', value: 120 },
  { id: 5, name: 'API requests per second', value: 8500 },
  { id: 6, name: 'Partners worldwide', value: 250 },
]

// Utility to format numbers automatically
const formatValue = (value: number, isCurrency = false) => {
  if (value >= 1e12) return isCurrency ? `$${(value / 1e12).toFixed(0)}T` : `${(value / 1e12).toFixed(0)}T`
  if (value >= 1e9) return isCurrency ? `$${(value / 1e9).toFixed(0)}B` : `${(value / 1e9).toFixed(0)}B`
  if (value >= 1e6) return isCurrency ? `$${(value / 1e6).toFixed(0)}M` : `${(value / 1e6).toFixed(0)}M`
  if (value >= 1e3) return value.toLocaleString()
  return value
}

export default function Stats() {
  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    const duration = 2000 // animation duration in ms
    const start = Date.now()

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - start) / duration, 1)

      const updatedCounts = stats.map((stat) => Math.floor(stat.value * progress))
      setCounts(updatedCounts)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    animate()
  }, [])

  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white sm:text-5xl">
          Our Global Impact
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
          We are transforming the way people and businesses interact with
          financial services worldwide. Here’s a snapshot of our achievements:
        </p>

        <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3 text-center">
          {stats.map((stat, i) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base/7 text-gray-400">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {formatValue(counts[i], stat.isCurrency)}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}


