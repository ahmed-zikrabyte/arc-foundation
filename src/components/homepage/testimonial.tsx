"use client";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";

const testimonials = [
  {
    id: 1,
    img: "/homepage/teams/teamsimage.jpg",
    text: "The code reviews and feedback from instructors were incredibly helpful. I learned industry best practices quickly.",
    name: "Lisa Taylor",
    role: "Backend Developer",
  },
  {
    id: 2,
    img: "/homepage/teams/teamsimage.jpg",
    text: "This platform helped me build real-world projects that boosted my confidence.",
    name: "James Carter",
    role: "Frontend Engineer",
  },
  {
    id: 3,
    img: "/homepage/teams/teamsimage.jpg",
    text: "A supportive community and amazing mentors. Highly recommend it to anyone starting their tech career.",
    name: "Amelia Brown",
    role: "UI/UX Designer",
  },
  {
    id: 4,
    img: "/homepage/teams/teamsimage.jpg",
    text: "A supportive community and amazing mentors. Highly recommend it to anyone starting their tech career.",
    name: "Amelia Brown",
    role: "UI/UX Designer",
  },
  {
    id: 5,
    img: "/homepage/teams/teamsimage.jpg",
    text: "A supportive community and amazing mentors. Highly recommend it to anyone starting their tech career.",
    name: "Amelia Brown",
    role: "UI/UX Designer",
  },
  {
    id: 6,
    img: "/homepage/teams/teamsimage.jpg",
    text: "A supportive community and amazing mentors. Highly recommend it to anyone starting their tech career.",
    name: "Amelia Brown",
    role: "UI/UX Designer",
  },
];

const Testimonial = () => {
  const swiperRef = useRef<any>(null);

  return (
    <section className="w-full py-14 bg-white relative overflow-hidden px-4 sm:px-6 md:px-10 lg:px-16">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold">
          What Our{" "}
          <span className="bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-transparent bg-clip-text">
            Students
          </span>{" "}
          Say
        </h2>
        <p className="mt-3 text-sm md:text-base text-gray-600 px-4 sm:px-12 md:px-28 lg:px-40">
          Discover why thousands of students choose our platform for their
          learning journey.
        </p>
      </div>

      {/* Swiper Container */}
      <div className="relative">
        {/* Left Fade */}
        <div className="absolute -left-4 sm:-left-8 lg:-left-12 top-0 h-full w-12 sm:w-16 lg:w-20 z-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        {/* Right Fade */}
        <div className="absolute -right-4 sm:-right-8 lg:-right-12 top-0 h-full w-12 sm:w-16 lg:w-20 z-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        <Swiper
          modules={[Autoplay, Navigation]}
          spaceBetween={20}
          slidesPerView="auto"
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="px-2 sm:px-6 md:px-10 lg:px-20"
        >
          {testimonials.map((t) => (
            <SwiperSlide
              key={t.id}
              className="!w-[90%] sm:!w-[500px] md:!w-[600px] lg:!w-[650px]" // responsive slide widths
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-4 sm:gap-6 justify-center">
                {/* Image */}
                <Image
                  src={t.img}
                  alt={t.name}
                  width={160} // fallback width
                  height={210} // fallback height
                  className="w-28 h-36 sm:w-40 sm:h-52 rounded-2xl object-cover transition-transform duration-500 hover:scale-105"
                />

                {/* Text Card */}
                <div className="flex-1 w-full sm:w-[350px] md:w-[400px] border border-gray-300 shadow-sm rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col justify-between h-44 sm:h-52">
                  <p className="text-gray-900 text-sm sm:text-base md:text-lg font-medium leading-relaxed line-clamp-3">
                    “{t.text}”
                  </p>

                  <hr className="my-2 sm:my-3 md:my-4 border-gray-200" />

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{t.name}</p>
                      <p className="text-xs sm:text-sm text-gray-500">
                        {t.role}
                      </p>
                    </div>
                    {/* Stars */}
                    <div className="flex text-yellow-400">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-4 h-4 sm:w-5 sm:h-5"
                          >
                            <path d="M12 .587l3.668 7.435 8.2 1.193-5.934 5.783 1.402 8.168L12 18.896l-7.336 3.87 1.402-8.168L.132 9.215l8.2-1.193z" />
                          </svg>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Prev/Next Buttons */}
        <div className="flex justify-center gap-6 mt-10">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-white shadow-lg hover:scale-110 transition"
          >
            <span className="text-lg">‹</span>
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-white shadow-lg hover:scale-110 transition"
          >
            <span className="text-lg">›</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
