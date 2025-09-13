"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import { Card, CardContent, CardFooter } from "@/components/ui/card";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      date: "June 15, 2023",
      read: "5 min read",
      title: "Web Development Trends 2023",
      desc: "Explore the latest frameworks and technologies shaping the future of web...",
      author: "Alex Johnson",
      role: "Senior Developer",
      img: "/homepage/blogs/blog1st.png",
    },
    {
      id: 2,
      date: "June 15, 2023",
      read: "6 min read",
      title: "UI/UX Design Principles",
      desc: "Learn how to create intuitive user experiences that keep visitors engaged...",
      author: "Sarah Williams",
      role: "Lead Designer",
      img: "/homepage/blogs/blog1st.png",
    },
    {
      id: 3,
      date: "June 15, 2023",
      read: "6 min read",
      title: "Digital Marketing Strategies",
      desc: "Discover how to maximize your online presence and reach your target audience...",
      author: "Michael Chen",
      role: "Marketing Director",
      img: "/homepage/blogs/blog1st.png",
    },
  ];

  // Animation variants
  const cardVariants = {
    left: { hidden: { x: -200, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    center: {
      hidden: { scale: 0.5, opacity: 0 },
      visible: { scale: 1, opacity: 1 },
    },
    right: { hidden: { x: 200, opacity: 0 }, visible: { x: 0, opacity: 1 } },
  };

  return (
    <section className="w-full overflow-x-hidden">
      {/* Top Gradient Background */}
      <div
        className="relative w-full text-white py-10 text-center bg-cover bg-center"
        style={{ backgroundImage: "url('/homepage/blogs/Bllog.png')" }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gray-300/50"></div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Our Latest Blogs
          </h2>
          <p className="text-sm sm:text-base md:text-lg mt-3 px-4 sm:px-10 md:px-20 lg:px-40">
            Discover insightful articles and stay updated with the latest trends
            and news in our industry.
          </p>
        </div>
      </div>

      {/* Bottom Background Image */}
      <div
        className="w-full bg-cover bg-center py-12"
        style={{ backgroundImage: "url('/homepage/blogs/Blogbg.png')" }}
      >
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-6 md:px-10 lg:px-14">
          {blogs.map((blog, index) => {
            const position =
              index === 0 ? "left" : index === 1 ? "center" : "right";

            return (
              <motion.div
                key={blog.id}
                variants={cardVariants[position]}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Card className="group relative w-full bg-[#ECECEC] rounded-xl overflow-hidden px-4 pt-6 pb-6 transition-all duration-500 hover:shadow-xl">
                  {/* Image */}
                  <div className="relative -mt-2 mb-2 overflow-hidden rounded-xl">
                    <Image
                      src={blog.img}
                      alt={blog.title}
                      width={600}
                      height={500}
                      className="w-full rounded-xl shadow-md transform transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Top-right Hover Icon */}
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] shadow-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="white"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7 17L17 7M7 7h10v10"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-0 flex flex-col space-y-2">
                    <p className="text-xs text-gray-500">
                      {blog.date} • {blog.read}
                    </p>
                    <h3 className="text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                      {blog.title}
                    </h3>
                    <p className="text-sm text-gray-600">{blog.desc}</p>
                  </CardContent>
                  <div className="w-full h-[1px] bg-gray-300 "></div>

                  <CardFooter className=" p-0 flex flex-col items-start relative">
                    <p className="text-sm font-semibold text-gray-700">
                      {blog.author}
                    </p>
                    <p className="text-xs text-gray-500">{blog.role}</p>

                    {/* Read More (hidden until hover) */}
                    <span className="absolute right-0 bottom-0 opacity-0 translate-y-2 text-sm font-medium text-blue-600 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                      Read More →
                    </span>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="w-full flex justify-center mt-10">
          <button className="group relative bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-white px-6 py-3 rounded-lg shadow-md w-fit mx-auto md:mx-0 text-sm sm:text-base overflow-hidden">
            {/* Default State */}
            <span className="flex items-center transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
              View all
              <span className="ml-2 font-bold text-xl transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:opacity-0">
                →
              </span>
            </span>

            {/* Hover State */}
            <span className="flex items-center absolute left-6 top-3 translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
              View all
              <span className="ml-2 text-xl font-bold -translate-x-10 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                →
              </span>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
