import Link from "next/link"; // Use this if you are in Next.js
// import { Link } from "react-router-dom"; // Use this if using React Router

export default function ErrorPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0D0D0D] px-4 text-center">
      
      {/* Big 404 */}
      <h1 className="text-[8rem] font-extrabold text-[#D4AF37] mb-6 sm:text-[10rem]">
        404
      </h1>

      {/* Message */}
      <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-300 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      {/* Back Home Button */}
      <Link href="/">
        <span className="inline-block bg-[#D4AF37] text-black font-bold px-8 py-4 rounded-md hover:bg-yellow-600 hover:scale-105 transition transform cursor-pointer">
          Go Back Home
        </span>
      </Link>

    </div>
  );
}

