// components/Banner.tsx
"use client";
import Image from "next/image";

const Banner = () => {
  return (
    <section
      className="w-full  relative overflow-hidden bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/homepage/banner/bannerbg.png')" }}
    >
      <div className="w-full flex flex-col md:flex-row  items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-12 mt-16">
        {/* Left Content */}
        <div className="w-full md:w-1/2 flex flex-col space-y-4 text-center md:text-left">
          <span className="bg-white text-[#2563EB] px-4 py-1 rounded-full text-sm font-medium w-fit mx-auto md:mx-0">
            Learn from top experts
          </span>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Learn, Grow, and Succeed with Arch Federation – Access Free &
            Premium Courses for Every Learner.
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-gray-200">
            Unlock quality education tailored to your goals. Choose from a wide
            range of free and premium courses. Empowering learners at every step
            of their journey.
          </p>

          <button className="group relative bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-white px-6 py-3 rounded-lg shadow-md w-fit mx-auto md:mx-0 text-sm sm:text-base overflow-hidden">
            {/* Default State */}
            <span className="flex items-center transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
              Learn More
              <span className="ml-2 font-bold text-xl transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:opacity-0">
                →
              </span>
            </span>

            {/* Hover State */}
            <span className="flex items-center absolute left-6 top-3 translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
              Learn More
              <span className="ml-2 text-xl font-bold -translate-x-10 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
            </span>
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end relative">
          <Image
            src="/homepage/banner/bannergirl.png"
            alt="Student"
            width={400}
            height={400}
            className="z-10"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
