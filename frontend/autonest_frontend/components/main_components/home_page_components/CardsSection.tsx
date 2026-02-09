export default function CardsSection() {
  return (
    <div className="bg-[#0D0D0D] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-[#FFFFFF] sm:text-5xl">
            Why Choose AutoNest
          </h2>
          <p className="mt-4 text-lg text-[#D4AF37]">
            We don’t just sell cars — we deliver experiences that redefine automotive excellence.
          </p>
        </div>

        {/* Cards */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* Card 1 */}
          <div className="flex flex-col items-center rounded-2xl bg-[#1A1A1A] p-8 text-center shadow-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105">
            <img
              src="/certificate.png"
              alt="Certified Quality"
              className="mb-6 h-20 w-20 object-contain"
            />
            <h3 className="text-xl font-semibold text-white">
              Certified Quality
            </h3>
            <p className="mt-4 text-sm text-gray-300">
              Every vehicle at AutoNest undergoes strict inspections to ensure top-tier quality,
              safety, and reliability for complete peace of mind.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center rounded-2xl bg-[#1A1A1A] p-8 text-center shadow-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105">
            <img
              src="/stock.png"
              alt="Premium Selection"
              className="mb-6 h-20 w-20 object-contain"
            />
            <h3 className="text-xl font-semibold text-white">
              Premium Selection
            </h3>
            <p className="mt-4 text-sm text-gray-300">
              From luxury sedans to powerful SUVs, our curated inventory offers only the finest
              vehicles to match your lifestyle.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center rounded-2xl bg-[#1A1A1A] p-8 text-center shadow-lg transform transition duration-300 hover:-translate-y-2 hover:scale-105">
            <img
              src="/team.png"
              alt="Expert Team"
              className="mb-6 h-20 w-20 object-contain"
            />
            <h3 className="text-xl font-semibold text-white">
              Expert Team
            </h3>
            <p className="mt-4 text-sm text-gray-300">
              Our experienced automotive specialists are dedicated to helping you find the perfect
              car with confidence and transparency.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}


