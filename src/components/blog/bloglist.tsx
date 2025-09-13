"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Bloglist = () => {
  const router = useRouter();
  const blogs = [
    {
      id: 1,
      title: "Getting Started with Python for Data Science",
      desc: "Learn how Python powers data science with easy-to-follow examples, libraries, and best practices for beginners.",
      author: "Priya Sharma",
      authorImg: "/bloglist/bloglistbg.png",
      date: "August 18, 2025",
      tag: "Data Science",
      src: "/bloglist/bloglist1.png",
    },
    {
      id: 2,
      title: "Top 10 Frameworks Every Backend Developer Should Know",
      desc: "Explore the most in-demand backend frameworks to scale and secure web applications efficiently.",
      author: "Sneha Verma",
      authorImg: "/bloglist/bloglistbg.png",
      date: "August 18, 2025",
      tag: "Frameworks",
      src: "/bloglist/bloglist2.png",
    },
    {
      id: 3,
      title: "Introduction to Neural Networks: A Beginner’s Guide",
      desc: "Understand the basics of neural networks, how they work, and where they are applied in real-world AI systems.",
      author: "Arjun Nair",
      authorImg: "/bloglist/bloglistbg.png",
      date: "August 18, 2025",
      tag: "AI",
      src: "/bloglist/bloglist2.png",
    },
    {
      id: 4,
      title: "Introduction to Neural Networks: A Beginner’s Guide",
      desc: "Understand the basics of neural networks, how they work, and where they are applied in real-world AI systems.",
      author: "Arjun Nair",
      authorImg: "/bloglist/bloglistbg.png",
      date: "August 18, 2025",
      tag: "AI",
      src: "/bloglist/bloglist2.png",
    },
    {
      id: 5,
      title: "Introduction to Neural Networks: A Beginner’s Guide",
      desc: "Understand the basics of neural networks, how they work, and where they are applied in real-world AI systems.",
      author: "Arjun Nair",
      authorImg: "/bloglist/bloglistbg.png",
      date: "August 18, 2025",
      tag: "AI",
      src: "/bloglist/bloglist2.png",
    },
    {
      id: 6,
      title: "Introduction to Neural Networks: A Beginner’s Guide",
      desc: "Understand the basics of neural networks, how they work, and where they are applied in real-world AI systems.",
      author: "Arjun Nair",
      authorImg: "/bloglist/bloglistbg.png",
      date: "August 18, 2025",
      tag: "AI",
      src: "/bloglist/bloglist2.png",
    },
    {
      id: 7,
      title: "Introduction to Neural Networks: A Beginner’s Guide",
      desc: "Understand the basics of neural networks, how they work, and where they are applied in real-world AI systems.",
      author: "Arjun Nair",
      authorImg: "/bloglist/bloglistbg.png",
      date: "August 18, 2025",
      tag: "AI",
      src: "/bloglist/bloglist2.png",
    },
    {
      id: 8,
      title: "Introduction to Neural Networks: A Beginner’s Guide",
      desc: "Understand the basics of neural networks, how they work, and where they are applied in real-world AI systems.",
      author: "Arjun Nair",
      authorImg: "/bloglist/bloglistbg.png",
      date: "August 18, 2025",
      tag: "AI",
      src: "/bloglist/bloglist2.png",
    },
    {
      id: 9,
      title: "Introduction to Neural Networks: A Beginner’s Guide",
      desc: "Understand the basics of neural networks, how they work, and where they are applied in real-world AI systems.",
      author: "Arjun Nair",
      authorImg: "/bloglist/bloglistbg.png",
      date: "August 18, 2025",
      tag: "AI",
      src: "/bloglist/bloglist2.png",
    },
    {
      id: 10,
      title: "Introduction to Neural Networks: A Beginner’s Guide",
      desc: "Understand the basics of neural networks, how they work, and where they are applied in real-world AI systems.",
      author: "Arjun Nair",
      authorImg: "/bloglist/bloglistbg.png",
      date: "August 18, 2025",
      tag: "AI",
      src: "/bloglist/bloglist2.png",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(6);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, blogs.length));
  };

  const handleShowLess = () => {
    setVisibleCount(6);
  };

  return (
    <div
      className="relative w-full px-4 sm:px-6 md:px-10 lg:px-16 py-10"
      style={{ backgroundImage: "url('/homepage/blogs/Blogbg.png')" }}
    >
      <div className="relative z-10 w-full space-y-6">
        {/* ✅ Title + Sort + Search in one row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold">
            All <span className="text-purple-600">Blogs</span>
          </h2>

          {/* Sort + Search aligned */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            {/* Sort By */}
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white w-full sm:w-40">
              <option>Sort By</option>
              <option>Aarav Menon</option>
              <option>Priya Sharma</option>
            </select>

            {/* Search */}
            <input
              type="text"
              placeholder="Search by keyword, category, title"
              className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white w-full sm:w-64"
            />
          </div>
        </div>

        {/* ✅ Categories + Sort By */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 w-full">
          {/* Sort By Dropdown FIRST */}

          {/* Categories Scrollable */}
          <div className="flex overflow-x-auto md:flex-nowrap gap-3 pb-2 w-full md:w-auto scrollbar-hide">
            {[
              "All",
              "Science",
              "Frontend",
              "Backend",
              "AI",

              "Data Science",
              "Frontend",
              "Backend",
              "AI",
              "Design",
              "Machine Learning",
              "Digital Marketing",
              "Cloud",
            ].map((cat) => (
              <button
                key={cat}
                className={`flex-shrink-0 px-4 py-2 text-sm rounded-full border transition ${
                  cat === "All"
                    ? "bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-white shadow"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ✅ Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full cursor-pointer">
          {blogs.slice(0, visibleCount).map((blog) => (
            <div
              key={blog.id}
              onClick={() => router.push("/blogs/blogdetails")}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden group w-full"
            >
              {/* Blog Image */}
              <div className="relative w-full h-48 overflow-hidden">
                <Image
                  src={blog.src}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                  {blog.tag}
                </span>
              </div>

              {/* Blog Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold transition-colors duration-300 group-hover:text-purple-600">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {blog.desc}
                </p>

                {/* Author */}
                <div className="flex items-center mt-4 text-xs text-gray-500">
                  <Image
                    src={blog.authorImg}
                    alt={blog.author}
                    className="w-7 h-7 rounded-full mr-2 object-cover"
                  />
                  <span>{blog.author}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Load More + Show Less */}
        <div className="flex justify-center mt-10 gap-4 w-full">
          {visibleCount < blogs.length && (
            <button
              onClick={handleLoadMore}
              className="group relative bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-white px-6 py-3 rounded-lg shadow-md w-fit text-sm sm:text-base overflow-hidden"
            >
              <span className="flex items-center transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                Load More
                <span className="ml-2 font-bold text-xl transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:opacity-0">
                  →
                </span>
              </span>
              <span className="flex items-center absolute left-6 top-3 translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                Load More
                <span className="ml-2 text-xl font-bold -translate-x-10 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                  →
                </span>
              </span>
            </button>
          )}

          {visibleCount > 6 && (
            <button
              onClick={handleShowLess}
              className="group relative bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-white px-6 py-3 rounded-lg shadow-md w-fit text-sm sm:text-base overflow-hidden"
            >
              <span className="flex items-center transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
                Show Less
                <span className="ml-2 font-bold text-xl transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:opacity-0">
                  ↑
                </span>
              </span>
              <span className="flex items-center absolute left-6 top-3 translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
                Show Less
                <span className="ml-2 text-xl font-bold -translate-x-10 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                  ↑
                </span>
              </span>
            </button>
          )}
        </div>
      </div>

      {/* ✅ Hide scrollbar utility */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Bloglist;
