"use client";
import Image from "next/image";

const TeamGallery = () => {
  const images = [
    "/homepage/teams/team3.png",
    "/homepage/teams/team2.png",
    "/homepage/teams/team2.png",
    "/homepage/teams/team3.png",
  ];

  return (
    <section className="w-full py-10  px-4 sm:px-6 md:px-10 lg:px-16  bg-white">
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Team{" "}
          <span className="bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] bg-clip-text text-transparent">
            Gallery
          </span>
        </h2>
        <p className="text-sm sm:text-base md:text-lg mt-3 max-w-2xl mx-auto text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Viverra tellus ut vitae sem
          dictum dui.
        </p>
      </div>

      {/* Gallery */}
      <div className="space-y-4 lg:space-y-6">
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* 30% (on lg+) / full (on md-) */}
          <div className="relative w-full lg:flex-[3] h-56 sm:h-72 md:h-80 lg:h-96">
            <Image
              src={images[0]}
              alt="Team gallery 1"
              fill
              className="object-cover rounded-2xl shadow-md"
            />
          </div>
          {/* 70% (on lg+) / full (on md-) */}
          <div className="relative w-full lg:flex-[7] h-56 sm:h-72 md:h-80 lg:h-96">
            <Image
              src={images[1]}
              alt="Team gallery 2"
              fill
              className="object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-6">
          {/* 70% (on lg+) / full (on md-) */}
          <div className="relative w-full lg:flex-[7] h-56 sm:h-72 md:h-80 lg:h-96">
            <Image
              src={images[2]}
              alt="Team gallery 3"
              fill
              className="object-cover rounded-2xl shadow-md"
            />
          </div>
          {/* 30% (on lg+) / full (on md-) */}
          <div className="relative w-full lg:flex-[3] h-56 sm:h-72 md:h-80 lg:h-96">
            <Image
              src={images[3]}
              alt="Team gallery 4"
              fill
              className="object-cover rounded-2xl shadow-md"
            />
          </div>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center mt-12">
        <button className="group relative bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-white px-8 py-3 rounded-lg shadow-md text-sm sm:text-base overflow-hidden">
          <span className="flex items-center transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
            View all
            <span className="ml-2 font-bold text-xl transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:opacity-0">
              →
            </span>
          </span>
          <span className="flex items-center absolute left-8 top-3 translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
            View all
            <span className="ml-2 text-xl font-bold -translate-x-10 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
              →
            </span>
          </span>
        </button>
      </div>
    </section>
  );
};

export default TeamGallery;
