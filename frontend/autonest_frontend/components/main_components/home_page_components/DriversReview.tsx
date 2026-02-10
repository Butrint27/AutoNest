import { StarIcon } from '@heroicons/react/24/solid'

const posts = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    description:
      'Experience top-notch service and unmatched performance in our auto salon. We treat every car like royalty, ensuring your vehicle shines inside and out.',
    rating: 5,
    author: {
      name: 'Michael Foster',
      role: 'Co-Founder / CTO',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: 'How to use search engine optimization to drive sales',
    href: '#',
    description:
      'Our expert team ensures your car receives the ultimate care, from polishing to detailing. Satisfaction and elegance guaranteed.',
    rating: 4,
    author: {
      name: 'Lindsay Walton',
      role: 'Front-end Developer',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: 'Improve your customer experience',
    href: '#',
    description:
      'Join our happy clients who enjoy professional service, premium car care, and a sparkling finish every time they visit.',
    rating: 5,
    author: {
      name: 'Tom Cook',
      role: 'Director of Product',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

interface StarRatingProps {
  rating: number
}

function StarRating({ rating }: StarRatingProps) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <StarIcon
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-[#D4AF37]' : 'text-gray-700'}`}
        />
      ))}
    </div>
  )
}

export default function DriversReviews() {
  return (
    <div className="bg-[#0D0D0D] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mx-auto max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">What Drivers Say</h2>
          <p className="mt-2 text-lg text-gray-300">
            Real experiences from our satisfied customers at our premium auto salon
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col rounded-xl bg-[#1A1A1A] p-6 shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <StarRating rating={post.rating} />
              <h3 className="mt-4 text-lg font-semibold text-white">
                <a href={post.href}>{post.title}</a>
              </h3>
              <p className="mt-2 text-gray-300 text-sm">{post.description}</p>
              <div className="mt-4 flex items-center gap-x-4">
                <img
                  src={post.author.imageUrl}
                  alt={post.author.name}
                  className="h-10 w-10 rounded-full bg-gray-800"
                />
                <div className="text-sm">
                  <p className="font-semibold text-white">{post.author.name}</p>
                  <p className="text-gray-400">{post.author.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


