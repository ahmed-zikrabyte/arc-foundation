"use client";

import Image from "next/image";

const OurTeamPage = () => {
  return (
    <div className="w-full">
      {/* ✅ Hero Banner */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] flex flex-col justify-center items-center text-white">
        <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] flex flex-col justify-center items-center text-white">
          <Image
            src="/homepage/teams/teambanner.png"
            alt="Our Team"
            fill
            priority
            className="object-cover"
          />

          <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 max-w-5xl">
            <span className="px-3 py-1 bg-white text-black rounded-full text-xs sm:text-sm md:text-base mb-4 inline-block">
              Our Team
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
              Meet our Team Passionate Proactive. Expert.
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-white/90 text-xs sm:text-sm md:text-base">
              We lead with care, our core value, and a shared passion for
              connecting the world.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ About Section */}
      <div className="w-full bg-[#E1ECF5] py-10 sm:py-12 md:py-12 lg:py-12 xl:py-12 px-4 sm:px-6 md:px-10 lg:px-16 ">
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20 xl:gap-24 items-center w-full">
          {/* Text Left */}
          <div className="w-full">
            <p className="w-full text-gray-800 text-sm sm:text-base md:text-md lg:text-md leading-relaxed mb-6">
              At Arch Federation, our team is the driving force behind our
              mission to make quality education accessible to every learner. We
              bring together passionate leaders, educators, designers,
              technologists, and community builders who share a common vision of
              creating meaningful learning experiences. Each member contributes
              unique expertise, ensuring innovation, creativity, and excellence
              in everything we do.
            </p>
            <p className="w-full text-gray-800 text-sm sm:text-base md:text-md lg:text-md leading-relaxed">
              Together, we combine technology, design, and education to empower
              learners across diverse backgrounds. From building scalable
              platforms and designing intuitive interfaces to curating engaging
              courses and fostering communities, our team works collaboratively
              to shape the future of learning. United by purpose and guided by
              impact, we’re not just building a platform — we’re building
              opportunities for growth and success.
            </p>
          </div>

          {/* Image Right */}
          <div className="relative w-full h-64 sm:h-80 md:h-[24rem] lg:h-[22rem] xl:h-[22rem] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/homepage/teams/team1.png"
              alt="Our team"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeamPage;
