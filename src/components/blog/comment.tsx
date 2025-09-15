"use client";

import Image from "next/image";

const CommentsAndStayUpdated = () => {
  return (
    <div className="w-full">
      {/* ✅ Comments Section */}
      <div className="w-full px-4 sm:px-6 lg:px-16 py-10">
        <h3 className="text-base sm:text-lg font-semibold mb-3">
          Comments (10)
        </h3>
        <textarea
          placeholder="Add your comment"
          className="w-full h-28 sm:h-32 border border-gray-300 rounded-lg p-3 sm:p-4 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
        />
        <div className="flex justify-end mt-3">
          <button className="cursor-pointer group relative bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-white px-6 py-3 rounded-lg shadow-md w-fit mx-auto md:mx-0 text-sm sm:text-base overflow-hidden">
            {/* Default State */}
            <span className="flex items-center transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
              Post
              <span className="ml-2 font-bold text-xl transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:opacity-0">
                →
              </span>
            </span>

            {/* Hover State */}
            <span className="flex items-center absolute left-6 top-3 translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
              Post
              <span className="ml-2 text-xl font-bold -translate-x-10 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
            </span>
          </button>
        </div>
      </div>

      {/* ✅ Stay Updated Section */}
      <div className="relative w-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/homepage/about/aboutbg.png" // replace with your actual image
          alt="Background pattern with email theme"
          fill
          className="object-cover z-0"
          priority
        />

        {/* Overlay Content */}
        <div className="relative z-10 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-3">
            Stay Updated
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
            Get the latest articles and insights about UI/UX design delivered to
            your inbox.
          </p>

          {/* Input + Button */}
          <div className="flex w-full max-w-lg mx-auto rounded-lg overflow-hidden border  bg-gray-200">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 text-white placeholder-white bg-transparent outline-none"
            />
            <button className="cursor-pointer bg-purple-700 hover:bg-purple-800 px-6 py-3 font-medium text-white">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsAndStayUpdated;
