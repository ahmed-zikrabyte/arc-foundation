"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section
      className="w-full bg-cover bg-center text-white py-12 sm:py-14 md:py-16 lg:py-16 overflow-x-hidden overflow-y-hidden"
      style={{ backgroundImage: "url('/homepage/about/aboutbg.png')" }}
    >
      <div className="w-full flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 gap-10">
        {/* Left Side Images */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
          {/* Big Image */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Image
              src="/homepage/about/about1st.png"
              alt="Team Meeting"
              width={500}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </motion.div>

          {/* Small Overlay Card */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}
            className="absolute bottom-[-20px] right-0 translate-x-4 w-[320px] sm:w-[360px] bg-white rounded-xl shadow-lg p-6"
          >
            {/* Card Content */}
            <div className="space-y-4">
              {/* Item 1 */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-yellow-100 text-yellow-600">
                  📘
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Comprehensive Curriculum
                  </h4>
                  <p className="text-sm text-gray-600">
                    Courses designed by industry experts with real-world
                    applications
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-purple-100 text-purple-600">
                  👥
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Community Learning
                  </h4>
                  <p className="text-sm text-gray-600">
                    Join a global community of learners and mentors
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-100 text-blue-600">
                  💡
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">
                    Innovative Technology
                  </h4>
                  <p className="text-sm text-gray-600">
                    AI-powered learning paths and interactive content
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Side Content */}
        <div className="w-full lg:w-1/2 flex flex-col space-y-6">
          {/* Heading */}
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold 
             bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] 
             bg-clip-text text-transparent"
          >
            About Us
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-black">
            At <span className="font-semibold">Arch Federation</span>, we’re
            revolutionizing education through technology. Our platform bridges
            the gap between quality education and accessibility, creating
            learning experiences that inspire and transform.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-4 w-full">
            <div className="bg-white/90 text-gray-900 px-6 py-4 rounded-lg text-center shadow-[0_4px_12px_rgba(94,59,238,0.15)] transition w-full sm:w-[48%] lg:w-auto">
              <h3 className="text-xl font-bold text-[#2563EB]">50K+</h3>
              <p className="text-sm">Students</p>
            </div>
            <div className="bg-white/90 text-gray-900 px-6 py-4 rounded-lg text-center shadow-[0_4px_12px_rgba(94,59,238,0.15)] transition w-full sm:w-[48%] lg:w-auto">
              <h3 className="text-xl font-bold text-[#2563EB]">200+</h3>
              <p className="text-sm">Courses</p>
            </div>
            <div className="bg-white/90 text-gray-900 px-6 py-4 rounded-lg text-center shadow-[0_4px_12px_rgba(94,59,238,0.15)] transition w-full sm:w-full lg:w-auto">
              <h3 className="text-xl font-bold text-[#2563EB]">95%</h3>
              <p className="text-sm">Satisfaction</p>
            </div>
          </div>

          {/* Buttons with Animation */}
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            className="flex gap-6 mt-6"
          >
            <button className="cursor-pointer group relative bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-white px-6 py-3 rounded-lg shadow-md w-fit mx-auto md:mx-0 text-sm sm:text-base overflow-hidden">
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

            <button
              className="bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] bg-clip-text text-transparent cursor-pointer
             lg:text-[20px] md:text-[20px] sm:text-md text-md font-bold"
            >
              Watch Video
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
