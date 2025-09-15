"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="w-full">
      {/* ✅ Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center text-white">
        <Image
          src="/contact/contact.png"
          alt="Contact us background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 max-w-4xl">
          <span className="px-4 py-1 bg-white/80 text-black text-xs sm:text-sm md:text-base rounded-full inline-block mb-4">
            Contact us
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
            Let’s Connect & Build Your Learning Journey
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/90 text-sm sm:text-base md:text-lg">
            Whether you’re a learner exploring our courses, an educator wanting
            to collaborate, or a partner looking for opportunities — we’d love
            to hear from you.
          </p>
        </div>
      </div>

      {/* ✅ Contact Form Section */}
      <div className=" relative w-full  px-4 sm:px-6 md:px-10 lg:px-16  py-16 bg-white">
        <div className="w-full mx-auto bg-gradient-to-br from-[#3071A9] via-[#3493E5] to-[#3493E5] rounded-2xl p-6 sm:p-10 lg:p-14 shadow-lg text-white grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            className="absolute w-34 h-34 rounded-full border-20 border-blue-300/30"
            style={{ top: "12%", left: "15%" }}
            animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-32 h-32 rounded-full border-20 border-blue-200/40"
            style={{ bottom: "18%", left: "10%" }}
            animate={{ x: [0, -50, 50, 0], y: [0, 40, -40, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-40 h-40 rounded-full border-20  border-blue-300/30"
            style={{ top: "20%", right: "12%" }}
            animate={{ x: [0, 60, -60, 0], y: [0, -50, 50, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute w-20 h-20 rounded-full border-10  border-blue-300/30"
            style={{ bottom: "20%", right: "18%" }}
            animate={{ x: [0, -40, 40, 0], y: [0, 30, -30, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* New thick circle */}
          <motion.div
            className="absolute w-28 h-28 rounded-full border-20  border-blue-300/30"
            style={{ top: "40%", left: "45%" }}
            animate={{ x: [0, 30, -30, 0], y: [0, -20, 20, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Left - Image + Contact Info */}
          <div className="space-y-6">
            {/* Image */}
            <div className="relative w-full h-64 sm:h-72 md:h-80 rounded-2xl overflow-hidden">
              <Image
                src="/contact/contactimage.png"
                alt="Customer support"
                fill
                className="object-cover"
              />
            </div>

            {/* Contact Info */}
            {/* Contact Info */}
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 space-y-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-white/30 rounded-md text-[#5E3BEE] shadow">
                  📞
                </div>
                <span>+91 1234567890</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-white/30 rounded-md text-[#5E3BEE] shadow">
                  ✉️
                </div>
                <span>info@example.com</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center bg-white/30 rounded-md text-[#5E3BEE] shadow">
                  📱
                </div>
                <span>+91 1234567890</span>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Send Us Message
            </h2>
            <p className="text-sm sm:text-base text-white/90 mb-6">
              Our friendly team would love to hear from you
            </p>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
              />
              <input
                type="email"
                placeholder="Email ID"
                className="w-full px-4 py-3 rounded-lg  bg-white/20 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
              />
              <input
                type="tel"
                placeholder="Mobile number"
                className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
              />
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full px-4 py-3 rounded-lg  bg-white/20 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
              />

              {/* Terms */}
              <label className="flex items-center gap-2 text-xs sm:text-sm">
                <input type="checkbox" className="w-4 h-4" />I agree with the
                terms & conditions by checking the box
              </label>

              {/* Button */}
              <button className="group cursor-pointer relative bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-white px-6 py-3 rounded-lg shadow-md w-fit mx-auto md:mx-0 text-sm sm:text-base overflow-hidden">
                {/* Default State */}
                <span className="flex items-center transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                  Send
                  <span className="ml-2 font-bold text-xl transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:opacity-0">
                    →
                  </span>
                </span>

                {/* Hover State */}
                <span className="flex items-center absolute left-6 top-3 translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                  Send
                  <span className="ml-2 text-xl font-bold -translate-x-10 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                    →
                  </span>
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
