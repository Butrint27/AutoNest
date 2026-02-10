"use client";

import { useEffect, useState } from "react";

export default function Testimonials() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-black px-6 py-24 sm:py-32 lg:px-8">
      {/* Background gradient and angled shadow */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,white/10,transparent)] opacity-10" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-black shadow-xl ring-1 ring-white/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />

      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className={`mt-10 transition-all duration-1000 ${animate ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
          <blockquote className="text-center text-xl/8 font-semibold text-white sm:text-2xl/9 tracking-wide">
            <p>
              “Drive beyond limits. Every car here isn’t just a vehicle—it’s a dream, a statement, a journey. Elevate your ride, elevate yourself.”
            </p>
          </blockquote>

          <figcaption className="mt-10">
            <div className="mx-auto w-24 h-24 relative rounded-full overflow-hidden border-2 border-white shadow-lg hover:scale-105 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="CEO Filan Fisteku"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-white">Filan Fisteku</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-white">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-400">CEO of AutoNest</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}




