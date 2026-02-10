import Link from "next/link";

export default function SigninComponent() {
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
          Sign In
        </h2>

        {/* Form */}
        <form className="space-y-6">
          
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

          {/* Sign In Button */}
          <div>
            <button
              type="submit"
              className="w-full flex justify-center rounded-xl bg-[#D4AF37] px-4 py-3 font-semibold text-black hover:bg-yellow-500 hover:scale-105 transition transform shadow-md cursor-pointer" 
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Sign Up Link */}
        <p className="mt-6 text-center text-gray-400">
           Dont have an account?{" "}
        <Link href="/signup">
          <span className="font-semibold text-[#D4AF37] hover:text-yellow-400 cursor-pointer">
           Sign Up
          </span>
        </Link>
        </p>
      </div>
    </div>
  );
}
