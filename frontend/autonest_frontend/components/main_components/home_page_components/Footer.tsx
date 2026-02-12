export default function Footer() {
  return (
    <footer className="bg-[#0D0D0D] text-white py-24 px-8">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-4xl font-bold text-[#D4AF37] mb-6">AutoNest</h2>
          <p className="text-gray-300">
            Premium auto salon providing top-notch car detailing, styling, and maintenance services.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-2xl font-semibold text-[#D4AF37] mb-6">Services</h3>
          <ul className="space-y-3 text-gray-300">
            <li>Car Detailing</li>
            <li>Paint Protection</li>
            <li>Interior Cleaning</li>
            <li>Custom Styling</li>
            <li>Maintenance & Repairs</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-2xl font-semibold text-[#D4AF37] mb-6">Contact Us</h3>
          <ul className="space-y-3 text-gray-300">
            <li>📍 123 Luxury Ave, City</li>
            <li>📞 +1 234 567 890</li>
            <li>✉️ info@autosalon.com</li>
            <li>⏰ Mon - Sat: 9AM - 7PM</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-semibold text-[#D4AF37] mb-6">Subscribe</h3>
          <p className="text-gray-300 mb-4">Get the latest updates and offers directly in your inbox.</p>
         <form className="flex flex-col gap-3">
  <input 
    type="email" 
    placeholder="Your email" 
    className="p-3 rounded-md w-full max-w-[220px] text-gray-800 bg-gray-200 placeholder-gray-500"
  />
  <button 
    type="submit" 
    className="bg-[#D4AF37] text-black font-bold px-6 py-3 rounded-md hover:bg-yellow-600 hover:scale-105 transition transform cursor-pointer w-full max-w-[220px]"
  >
    Subscribe
  </button>
</form>
        </div>

      </div>

      {/* Bottom Footer */}
      <div className="mt-16 border-t border-gray-700 pt-6 text-gray-400 text-sm text-center">
        © {new Date().getFullYear()} AutoNest. All rights reserved.
      </div>
    </footer>
  );
}


