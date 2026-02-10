"use client";

import Image from "next/image";

export default function LogoClouds() {
  const carBrands = [
    "/brands/audi_logo.png",
    "/brands/bmw_logo.png",
    "/brands/ford_logo.png",
    "/brands/honda_logo.png",
    "/brands/mercedes_logo.png",
    "/brands/mitsubishi_logo.png",
    "/brands/porsche_logo.png",
    "/brands/suzuki_logo.png",
    "/brands/toyota_logo.png",
    "/brands/volkswagen_logo.png",
    "/brands/yamaha_logo.png",
  ];

  // Duplicate for infinite scroll
  const logos = [...carBrands, ...carBrands];

  return (
    <div className="bg-[#111] py-20 overflow-hidden">
      <h2 className="text-center text-xl font-semibold text-gray-400 mb-12 tracking-wide">
        Trusted by Top Car Brands
      </h2>

      <div className="relative w-full group overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap items-center group-hover:[animation-play-state:paused]">
          {logos.map((src, idx) => (
            <div
              key={idx}
              className="mx-10 flex-shrink-0 flex items-center justify-center h-24 w-44 transition-transform duration-300 hover:scale-110"
            >
              {/* Relative parent required for next/image fill */}
              <div className="relative h-16 w-36">
                <Image
                  src={src}
                  alt="Car Brand Logo"
                  fill
                  className="object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                  priority={idx < carBrands.length} // preload first set
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          display: flex;
          animation: marquee 24s linear infinite;
        }
      `}</style>
    </div>
  );
}










