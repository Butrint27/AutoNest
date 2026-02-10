import Footer from "../home_page_components/Footer";

export default function AboutComponents() {
  return (
    <div className="bg-[#0D0D0D] text-white">

      {/* Hero Section */}
      <section className="relative bg-black bg-opacity-70 text-center py-32 px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-[#D4AF37] mb-6">
          Welcome to AutoNest
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
          The Premier Destination for Luxury & Exotic Cars — Where Style Meets Performance.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-semibold text-[#D4AF37]">
            Our Mission
          </h2>
          <p className="text-gray-300 text-lg">
            AutoNest was founded to elevate the way enthusiasts experience luxury automobiles. We connect drivers with exceptional vehicles that transcend expectations.
          </p>
          <h2 className="text-4xl font-semibold text-[#D4AF37]">
            Our Vision
          </h2>
          <p className="text-gray-300 text-lg">
            To be recognized as a global leader in premium automotive curation, unmatched client experiences, and automotive excellence — not just a dealership, but a community of enthusiasts.
          </p>
        </div>
      </section>

      {/* Premium Showroom Gallery */}
      <section className="py-20 px-4 md:px-16">
        <h2 className="text-center text-4xl font-bold text-[#D4AF37] mb-10">
          Our Showroom
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <img
            src="https://images.pexels.com/photos/4141954/pexels-photo-4141954.jpeg"
            alt="Luxury Car in Showroom"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          />
          <img
            src="https://images.pexels.com/photos/29566880/pexels-photo-29566880.jpeg"
            alt="Multiple Luxury Cars"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          />
          <img
            src="https://images.pexels.com/photos/35113551/pexels-photo-35113551.jpeg"
            alt="Luxury Sports Car"
            className="w-full h-64 object-cover rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* History / Timeline */}
      <section className="bg-[#111] py-20 px-6 md:px-12">
        <h2 className="text-center text-4xl font-bold text-[#D4AF37] mb-12">
          Our Journey
        </h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Timeline Entry */}
          <div className="flex items-start gap-6">
            <div className="text-[#D4AF37] font-bold text-xl">2012</div>
            <p className="text-gray-300 text-lg">
              AutoNest was born out of a passion for performance — starting with just 5 exceptional vehicles and a dream to offer something greater.
            </p>
          </div>

          <div className="flex items-start gap-6">
            <div className="text-[#D4AF37] font-bold text-xl">2016</div>
            <p className="text-gray-300 text-lg">
              Expanded into our first premium showroom, introducing curated luxury, exotic and sports cars to a growing community of collectors and enthusiasts.
            </p>
          </div>

          <div className="flex items-start gap-6">
            <div className="text-[#D4AF37] font-bold text-xl">2021</div>
            <p className="text-gray-300 text-lg">
              Worldwide shipping and VIP concierge services launched — bringing AutoNest experiences to international clients.
            </p>
          </div>

          <div className="flex items-start gap-6">
            <div className="text-[#D4AF37] font-bold text-xl">2025</div>
            <p className="text-gray-300 text-lg">
              Reinvented our brand identity with enhanced digital experiences, stronger community outreach, and industry partnerships.
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-6 md:px-12">
        <h2 className="text-center text-4xl font-bold text-[#D4AF37] mb-12">
          Meet the AutoNest Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div>
            <img
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
              alt="Team Member"
              className="rounded-full w-40 h-40 mx-auto mb-4 object-cover shadow-xl"
            />
            <h3 className="text-xl font-semibold text-[#D4AF37]">Alex Thompson</h3>
            <p className="text-gray-300">Founder & Lead Consultant</p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
              alt="Team Member"
              className="rounded-full w-40 h-40 mx-auto mb-4 object-cover shadow-xl"
            />
            <h3 className="text-xl font-semibold text-[#D4AF37]">Sophie Lin</h3>
            <p className="text-gray-300">Sales Director</p>
          </div>
          <div>
            <img
              src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
              alt="Team Member"
              className="rounded-full w-40 h-40 mx-auto mb-4 object-cover shadow-xl"
            />
            <h3 className="text-xl font-semibold text-[#D4AF37]">Jordan Miles</h3>
            <p className="text-gray-300">Vehicle Specialist</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#111] py-20 px-6 md:px-12">
        <h2 className="text-center text-4xl font-bold text-[#D4AF37] mb-12">
          What Our Clients Say
        </h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
            <p className="text-gray-300 italic">
              “AutoNest transformed my car-buying experience — professional, honest, and truly premium. I found my dream car with confidence.”
            </p>
            <h3 className="text-[#D4AF37] font-semibold mt-4">— Michael R.</h3>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
            <p className="text-gray-300 italic">
              “Expert guidance, beautiful showroom, and world-class service — AutoNest is unmatched.”
            </p>
            <h3 className="text-[#D4AF37] font-semibold mt-4">— Emily S.</h3>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 md:px-12">
        <h2 className="text-center text-4xl font-bold text-[#D4AF37] mb-10">
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto text-center">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#D4AF37]">Exclusive Selection</h3>
            <p className="text-gray-300">
              The finest luxury and exotic vehicles curated with passion and expertise.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#D4AF37]">VIP Customer Experience</h3>
            <p className="text-gray-300">
              Personalized buying journeys tailored just for you.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-[#D4AF37]">Worldwide Concierge</h3>
            <p className="text-gray-300">
              International shipping and premium door-to-door service.
            </p>
          </div>
        </div>
      </section>

      {/* Showroom Video Section */}
      <section className="bg-black bg-opacity-70 text-center py-16 px-6">
        <h2 className="text-4xl font-bold text-[#D4AF37] mb-6">
          Experience AutoNest Live
        </h2>
        <iframe
          className="w-full md:w-3/4 aspect-video mx-auto rounded-xl shadow-xl"
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="AutoNest Showroom Experience"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </section>

      {/* Footer CTA */}
      <section className="text-center py-16 px-6">
        <h2 className="text-4xl font-bold text-[#D4AF37] mb-4">
          Ready To Explore Your Dream Car?
        </h2>
        <p className="text-gray-300 mb-6">
          Browse our hand‑picked inventory or visit us in person for a VIP experience.
        </p>
        <a
          href="/inventory"
          className="inline-block bg-[#D4AF37] text-black font-semibold px-8 py-3 rounded-xl hover:bg-yellow-500 transition"
        >
          View Inventory
        </a>
      </section>

      <Footer />

    </div>
  );
}

