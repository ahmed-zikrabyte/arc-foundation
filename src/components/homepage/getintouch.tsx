"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import * as React from "react";

const GetInTouch = () => {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <section className="w-full flex flex-col items-center justify-center px-4 py-12 bg-white sm:px-6 md:px-10 lg:px-16">
      {/* Header */}
      <div className="text-center max-w-2xl mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get In <span className="text-purple-500">Touch</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Have questions or want to learn more about our courses? Reach out to
          our team and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* Main Card */}
      <div className="relative w-full bg-gradient-to-br from-[#3071A9] via-[#3493E5] to-[#3493E5] rounded-3xl overflow-hidden shadow-lg flex flex-col lg:flex-row items-center">
        {/* Floating Circles (inside the card background) */}
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

        {/* Left Side - Student Image */}
        <div className="relative z-10 lg:w-1/2 w-full flex items-center justify-center">
          <Image
            src="/homepage/banner/bannergirl.png"
            alt="Smiling student with books and backpack"
            width={480}
            height={520}
            className="w-120 h-130 object-cover"
          />
        </div>

        {/* Right Side - Contact Form */}
        <div className="relative z-10 lg:w-1/2 w-full flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Us Message
            </h3>

            <div className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-lg bg-white/20 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
              />

              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-lg bg-white/20 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-lg bg-white/20 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 resize-none"
              />

              <button
                onClick={handleSubmit}
                className="group cursor-pointer relative bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-white px-6 py-4 rounded-lg shadow-md w-fit mx-auto md:mx-0 text-base sm:text-lg overflow-hidden"
              >
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
