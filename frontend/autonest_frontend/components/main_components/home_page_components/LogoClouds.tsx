"use client";

export default function LogoClouds() {
  const carBrands = [
    "https://static.cdnlogo.com/logos/c/41/bmw.svg",
    "https://static.cdnlogo.com/logos/a/12/audi.svg",
    "https://static.cdnlogo.com/logos/m/36/mercedes-benz.svg",
    "https://static.cdnlogo.com/logos/t/03/toyota.svg",
    "https://static.cdnlogo.com/logos/h/29/honda.svg",
    "https://static.cdnlogo.com/logos/f/16/ford.svg",
    "https://static.cdnlogo.com/logos/c/18/chevrolet.svg",
    "https://static.cdnlogo.com/logos/v/42/volkswagen.svg",
    "https://static.cdnlogo.com/logos/l/51/lexus.svg",
    "https://static.cdnlogo.com/logos/p/47/porsche.svg",
  ];

  const logos = [...carBrands, ...carBrands];

  return (
    <div className="bg-[#1a1a1a] py-16 overflow-hidden">
      <h2 className="text-center text-lg font-semibold text-gray-300 mb-8">
        Trusted by top car brands
      </h2>

      <div className="relative w-full">
        <div className="flex animate-marquee whitespace-nowrap items-center">
          {logos.map((src, idx) => (
            <div key={idx} className="mx-8 flex-shrink-0 relative h-16 min-w-[112px]">
              <img
                src={src}
                alt="car brand logo"
                className="h-16 w-full object-contain grayscale brightness-70"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </div>
  );
}








