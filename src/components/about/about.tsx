"use client";

import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="w-full">
      {/* ✅ Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] flex items-center justify-center text-white">
        <Image
          src="/homepage/about/aboutusbg.png"
          alt="About background"
          fill
          priority
          className="object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 text-center w-full px-4 sm:px-6 md:px-10 lg:px-20">
          <span className="px-4 py-1 bg-white/80 text-black text-xs sm:text-sm md:text-base rounded-full inline-block mb-4">
            About
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-snug">
            Empowering Learners to Build a Future-Ready Career
          </h1>
          <p className="mt-4 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 mx-auto text-white/90 text-sm sm:text-base md:text-lg lg:text-xl">
            We believe knowledge is the key to transformation, and we’re here to
            make world-class learning accessible to everyone.
          </p>
        </div>
      </div>

      {/* ✅ About Content + Stats */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-16 bg-white">
        {/* Description */}
        <p className="w-full mx-auto text-center text-gray-700 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          Our platform is designed to help students, professionals, and lifelong
          learners acquire in-demand tech and design skills through engaging,
          practical, and industry-relevant courses. With a focus on interactive
          learning, real-world projects, and expert mentorship, we ensure that
          every learner not only understands concepts but also gains the
          confidence to apply them.
        </p>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition w-full text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5E3BEE]">
              50K+
            </h3>
            <p className="mt-2 text-gray-600 text-sm sm:text-base md:text-lg">
              Students
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition w-full text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5E3BEE]">
              200+
            </h3>
            <p className="mt-2 text-gray-600 text-sm sm:text-base md:text-lg">
              Courses
            </p>
          </div>

          <div className="p-6 border rounded-xl shadow-sm hover:shadow-md transition w-full text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#5E3BEE]">
              95%
            </h3>
            <p className="mt-2 text-gray-600 text-sm sm:text-base md:text-lg">
              Satisfaction
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Our Story */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20  py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className=" h-[400px]">
          <Image
            src="/homepage/about/about1.png"
            alt="Our Story"
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Our <span className="text-[#5E3BEE]">Story</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            The journey began with a simple vision: to bridge the gap between
            education and industry needs. While traditional education provides a
            foundation, many learners struggle to adapt to evolving technologies
            and real-world challenges.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            To solve this, we built an e-learning ecosystem that blends
            mentorship, practical projects, and job-focused skills. Today,
            thousands of learners are advancing their careers, switching fields,
            and achieving their goals through our platform.
          </p>
        </div>
      </div>

      {/* ✅ Mission & Vision */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">
            Our <span className="text-[#5E3BEE]">Mission & Vision</span>
          </h2>

          <div className="mb-6">
            <span className="px-3 py-1 bg-[#5E3BEE]/10 text-[#5E3BEE] text-sm font-medium rounded-md">
              Mission
            </span>
            <p className="mt-2 text-gray-700 leading-relaxed">
              To empower learners worldwide by providing accessible,
              high-quality education that fosters innovation, creativity, and
              professional growth.
            </p>
          </div>

          <div>
            <span className="px-3 py-1 bg-[#5E3BEE]/10 text-[#5E3BEE] text-sm font-medium rounded-md">
              Vision
            </span>
            <p className="mt-2 text-gray-700 leading-relaxed">
              To become the most trusted platform for tech and design learning,
              shaping the workforce of tomorrow and enabling opportunities for
              everyone, everywhere.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className=" h-[400px]">
          <Image
            src="/homepage/about/about2.png"
            alt="Mission & Vision"
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
      </div>

      {/* ✅ Core Values */}
      <div className="w-full px-4 sm:px-6 md:px-10 lg:px-20 py-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <div className=" h-[400px]">
          <Image
            src="/homepage/about/about3.png"
            alt="Core Values"
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>

        {/* Text */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">
            Our <span className="text-[#5E3BEE]">Core Values</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At the heart of our platform lies a commitment to creating an
            impactful and accessible learning experience. True education goes
            beyond textbooks — it’s about equipping learners with skills,
            confidence, and opportunities to succeed.
          </p>

          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#5E3BEE]" />
              Innovation in Learning
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#5E3BEE]" />
              Learner First
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#5E3BEE]" />
              Practical Focus
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#5E3BEE]" />
              Collaboration
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#5E3BEE]" />
              Excellence
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
