// // components/Banner.tsx
// "use client";
// import Image from "next/image";

// const Banner = () => {
//   return (
//     <section
//       className="w-full  relative overflow-hidden bg-cover bg-center text-white"
//       style={{ backgroundImage: "url('/homepage/banner/bannerbg.png')" }}
//     >
//       <div className="w-full flex flex-col md:flex-col lg:flex-row  items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-16 mt-16">
//         {/* Left Content */}
//         <div className="w-full md:w-3/3 lg:w-3/3 flex flex-col space-y-4 text-center md:text-left ">
//           <span className="bg-white text-[#2563EB] px-4 py-1 rounded-full text-sm font-medium w-fit mx-auto md:mx-0">
//             Learn from top experts
//           </span>

//           <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
//             Learn, Grow, and Succeed with Arch Federation – Access Free &
//             Premium Courses for Every Learner.
//           </h1>

//           <p className="text-sm sm:text-base md:text-lg text-gray-200">
//             Unlock quality education tailored to your goals. Choose from a wide
//             range of free and premium courses. Empowering learners at every step
//             of their journey.
//           </p>

// <button className="group relative bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-white px-6 py-3 rounded-lg shadow-md w-fit mx-auto md:mx-0 text-sm sm:text-base overflow-hidden">
//   {/* Default State */}
//   <span className="flex items-center transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
//     Learn More
//     <span className="ml-2 font-bold text-xl transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:opacity-0">
//       →
//     </span>
//   </span>

//   {/* Hover State */}
//   <span className="flex items-center absolute left-6 top-3 translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
//     Learn More
//     <span className="ml-2 text-xl font-bold -translate-x-10 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
//       →
//     </span>
//   </span>
// </button>
//         </div>

//         {/* Right Image */}
//         <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end relative">
//           <Image
//             src="/homepage/banner/bannergirl.png"
//             alt="Student"
//             width={400}
//             height={400}
//             className="z-10"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Banner;

"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

interface BannerItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const banners: BannerItem[] = [
  {
    title:
      "Learn, Grow, and Succeed with Arch Federation – Access Free & Premium Courses for Every Learner.",
    subtitle: "Learn from top experts",
    description:
      "Unlock quality education tailored to your goals. Choose from a wide range of free and premium courses.",

    image: "/homepage/banner/bannergirl.png",
  },
  {
    title:
      "Upgrade Your Skills with Arch Federation – Explore Advanced Courses Today.",
    subtitle: "Expert-led Courses",
    description:
      "Join thousands of learners improving their career prospects with our premium and free courses.",

    image: "/homepage/banner/bannergirl.png",
  },
];

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentBanner = banners[currentIndex];

  return (
    <section
      className="w-full relative overflow-hidden bg-cover bg-center text-white transition-all duration-700"
      style={{ backgroundImage: "url('/homepage/banner/homebanner.png')" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col md:flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 py-12 md:py-16 mt-16"
        >
          {/* Left Content */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-3/3 lg:w-3/3 flex flex-col space-y-4 text-center md:text-left"
          >
            <span className="bg-white text-[#2563EB] px-4 py-1 rounded-full text-sm font-medium w-fit mx-auto md:mx-0">
              {currentBanner.subtitle}
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              {currentBanner.title}
            </h1>

            <p className="text-sm sm:text-md md:text-xl text-gray-200">
              {currentBanner.description}
            </p>

            <button className="group cursor-pointer relative bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-white px-6 py-3 rounded-lg shadow-md w-fit mx-auto md:mx-0 text-sm sm:text-base overflow-hidden">
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
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 200, opacity: 0 }}
            transition={{ duration: 1 }}
            className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end relative"
          >
            <Image
              src={currentBanner.image}
              alt="Banner Image"
              width={400}
              height={400}
              className="z-10 transition-all duration-700"
            />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {banners.map((_, idx) => (
          <span
            key={idx}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              idx === currentIndex ? "bg-white" : "bg-gray-400/50"
            }`}
            onClick={() => setCurrentIndex(idx)}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
