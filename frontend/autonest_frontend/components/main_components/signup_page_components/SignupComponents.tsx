import Link from "next/link";

export default function SignupComponents() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0D0D0D] px-4 py-12">

      {/* Fancy Back Link */}
      <div className="absolute top-6 left-6 z-50">

        <Link href="/">
          <span className="flex items-center bg-[#1a1a1a] hover:bg-[#2c2c2c] text-[#D4AF37] hover:text-yellow-400 font-semibold px-4 py-2 rounded-lg shadow-md cursor-pointer transition duration-200">
             ← Back
          </span>
        </Link>
      </div>
      
      <div className="w-full max-w-md bg-white/5 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-gray-800">
    
        {/* Heading */}
        <h2 className="text-3xl font-bold text-[#D4AF37] text-center mb-8 tracking-wide">
          Create Your Account
        </h2>

        {/* Form */}
        <form className="space-y-6">
          
          {/* Full Name */}
          <div>
            <label htmlFor="fullname" className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              id="fullname"
              name="fullname"
              type="text"
              required
              placeholder="John Doe"
              className="mt-2 block w-full rounded-xl bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-1 transition"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              className="mt-2 block w-full rounded-xl bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-1 transition"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              placeholder="••••••••"
              className="mt-2 block w-full rounded-xl bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-1 transition"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              placeholder="+1 234 567 890"
              className="mt-2 block w-full rounded-xl bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:ring-offset-1 transition"
            />
          </div>

          {/* Sign Up Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center rounded-xl bg-[#D4AF37] px-4 py-3 font-semibold text-black hover:bg-yellow-500 hover:scale-105 transition transform shadow-md"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Already Registered */}
        <p className="mt-6 text-center text-gray-400">
          Already have an account?{' '}
          <Link href="/signin">
            <span className="font-semibold text-[#D4AF37] hover:text-yellow-400 cursor-pointer">
              Sign In
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}





