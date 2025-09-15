"use client";
import Image from "next/image";
import { useState } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";

const Teams = () => {
  const team = [
    {
      id: 1,
      name: "David Kim",
      role: "Backend Engineer",
      description:
        "Experienced in building scalable APIs and optimizing server performance.",
      img: "/homepage/teams/teamsimage.jpg",
      socials: {
        linkedin: "#",
        medium: "#",
        instagram: "#",
      },
    },
    {
      id: 2,
      name: "Emma Rodriguez",
      role: "Product Manager",
      description:
        "Certified Scrum Master with a talent for delivering projects on time and within budget.",
      img: "/homepage/teams/teamsimage.jpg",
      socials: {
        linkedin: "#",
        medium: "#",
        instagram: "#",
      },
    },
    {
      id: 3,
      name: "James Wilson",
      role: "DevOps Engineer",
      description:
        "Passionate about CI/CD pipelines, cloud infrastructure, and automation.",
      img: "/homepage/teams/teamsimage.jpg",
      socials: {
        linkedin: "#",
        medium: "#",
        instagram: "#",
      },
    },
    {
      id: 4,
      name: "Emma Rodriguez",
      role: "Product Manager",
      description:
        "Certified Scrum Master with a talent for delivering projects on time and within budget.",
      img: "/homepage/teams/teamsimage.jpg",
      socials: {
        linkedin: "#",
        medium: "#",
        instagram: "#",
      },
    },
    {
      id: 5,
      name: "Emma Rodriguez",
      role: "Product Manager",
      description:
        "Certified Scrum Master with a talent for delivering projects on time and within budget.",
      img: "/homepage/teams/teamsimage.jpg",
      socials: {
        linkedin: "#",
        medium: "#",
        instagram: "#",
      },
    },
    {
      id: 6,
      name: "Emma Rodriguez",
      role: "Product Manager",
      description:
        "Certified Scrum Master with a talent for delivering projects on time and within budget.",
      img: "/homepage/teams/teamsimage.jpg",
      socials: {
        linkedin: "#",
        medium: "#",
        instagram: "#",
      },
    },
  ];

  // Track flipped cards
  const [flipped, setFlipped] = useState<Record<number, boolean>>({});

  const toggleFlip = (id: number) => {
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      className="w-full bg-cover bg-center py-10 sm:py-14 md:py-14 text-white"
      style={{ backgroundImage: "url('/homepage/teams/teambg.png')" }}
    >
      {/* Section Title */}
      <div className="text-center px-4 sm:px-6 md:px-10 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Let’s Meet Our Creative Team
        </h2>
        <p className="text-sm sm:text-base md:text-lg mt-3 max-w-3xl mx-auto text-gray-200">
          Meet the talented professionals who make our vision a reality with
          their expertise and dedication.
        </p>
      </div>

      {/* Swiper Carousel */}
      <div className="mt-10 px-6 sm:px-10 md:px-16 lg:px-20 relative">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {team.map((member) => (
            <SwiperSlide key={member.id}>
              <div
                className="perspective w-full h-[350px] cursor-pointer group"
                onClick={() => toggleFlip(member.id)}
              >
                <div
                  className={`relative preserve-3d w-full h-full duration-700 ${
                    flipped[member.id] ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src={member.img}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="object-cover w-full h-[350px] transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent transition-colors duration-500 group-hover:from-blue-600/70 group-hover:to-transparent">
                      <h3 className="text-lg font-semibold text-white">
                        {member.name}
                      </h3>
                      <p className="text-sm text-gray-200">{member.role}</p>
                    </div>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-b from-[#5E3BEE] to-[#A855F7] p-6 flex flex-col justify-center items-center text-center shadow-lg">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm font-medium text-gray-200 mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-100 mb-4">
                      {member.description}
                    </p>
                    <div className="flex gap-4 text-xl">
                      <a href={member.socials.linkedin} target="_blank">
                        <FaLinkedin className="hover:text-gray-300" />
                      </a>
                      <a href={member.socials.medium} target="_blank">
                        <FaMedium className="hover:text-gray-300" />
                      </a>
                      <a href={member.socials.instagram} target="_blank">
                        <FaInstagram className="hover:text-gray-300" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Button */}
      <div className="w-full flex justify-center mt-10">
        <button className="cursor-pointer group relative bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-white px-6 py-3 rounded-lg shadow-md w-fit mx-auto md:mx-0 text-sm sm:text-base overflow-hidden">
          {/* Default State */}
          <span className="flex items-center transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
            View Team
            <span className="ml-2 font-bold text-xl transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:opacity-0">
              →
            </span>
          </span>

          {/* Hover State */}
          <span className="flex items-center absolute left-6 top-3 translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
            View Team
            <span className="ml-2 text-xl font-bold -translate-x-10 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
              →
            </span>
          </span>
        </button>
      </div>

      {/* Flip Card + Swiper Button Styles */}
      <style jsx global>{`
        .perspective {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }

        .swiper-button-next,
        .swiper-button-prev {
          padding: 12;
          width: 40px;
          height: 40px;
          border-radius: 9999px; /* Fully rounded */
          background: linear-gradient(
            to right,
            #5e3bee,
            #a855f7
          ); /* Gradient */
          color: white; /* Arrow color */
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          font-weight: bold;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          opacity: 0.9;
          transform: scale(1.1);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 14px !important;
          color: white;
        }

        /* Position them nicely */
        .swiper-button-next {
          right: 10px;
        }

        .swiper-button-prev {
          left: 10px;
        }
      `}</style>
    </section>
  );
};

export default Teams;
