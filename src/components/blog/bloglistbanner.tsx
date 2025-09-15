"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";

const Bloglistbanner = () => {
  const router = useRouter();
  const blogs = [
    {
      id: 1,
      title: "5 Effective Study Techniques for Online Learners",
      desc: "Discover proven strategies to improve focus, retention, and productivity while learning online.",
      author: "Sarah Johnson",
      date: "August 18, 2025",
      src: "/bloglist/bloglist1.png",
    },
    {
      id: 2,
      title: "Mastering Responsive Web Design with CSS Grid & Flexbox",
      desc: "A complete guide to building adaptive, mobile-first web layouts using modern CSS.",
      author: "Rahul Mehta",
      date: "August 25, 2025",
      src: "/bloglist/bloglist2.png",
    },
  ];

  return (
    <div className="w-full">
      {/* ✅ Hero Section with Next Image */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] flex flex-col justify-center items-center text-white">
        <Image
          src="/bloglist/blogbanner.png"
          alt="Blogs background"
          fill
          priority
          className="object-cover"
        />

        <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 max-w-4xl">
          <span className="px-3 py-1 bg-white/60 rounded-full text-xs sm:text-sm md:text-base mb-4 inline-block">
            Blogs
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
            Read Articles That Enhance your Knowledge
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-white/90 text-xs sm:text-sm md:text-base">
            Get latest insights and trends of latest technologies, all in one
            place
          </p>
        </div>
      </div>

      {/* ✅ Latest Blogs Section */}
      {/* ✅ Latest Blogs Section */}
      {/* ✅ Latest Blogs Section */}
      <div className="w-full mx-auto cursor-pointer  px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-12 md:py-12">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">
          Latest <span className="text-purple-600">Blogs</span>
        </h2>

        {/* Always 2 cards in a row on md+ */}
        <div
          onClick={() => router.push("/blogs/blogdetails")}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {blogs.map((blog) => (
            <Card
              key={blog.id}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-0"
            >
              {/* Blog Image fills the entire card */}
              <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden">
                <Image
                  src={blog.src}
                  alt={blog.title}
                  fill
                  className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  priority
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                {/* Blog Content Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg sm:text-xl font-semibold leading-snug">
                    {blog.title}
                  </h3>
                  <p className="hidden sm:block text-sm text-gray-200 mt-1 line-clamp-2">
                    {blog.desc}
                  </p>

                  {/* Author + Date */}
                  <div className="flex items-center mt-3 text-xs sm:text-sm text-gray-300">
                    <Avatar className="w-6 h-6 mr-2 bg-white text-black flex items-center justify-center">
                      {blog.author.charAt(0)}
                    </Avatar>
                    <span>{blog.author}</span>
                    <span className="mx-2">•</span>
                    <span>{blog.date}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Bloglistbanner;
