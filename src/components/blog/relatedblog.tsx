"use client";

import Image from "next/image";

const Bloglist = () => {
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
  ];

  return (
    <div className="w-full bg-[#eaf2fb] px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
        <div className="w-full">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
            All Related <span className="text-purple-600">Stories Post</span>
          </h2>
          <p className="text-gray-600 text-xs sm:text-sm md:text-base mt-1">
            Subscribe for the latest marketing trends, marketing tools, and
            exclusive interview with leaders
          </p>
        </div>
        <button className="group relative bg-gradient-to-r w-[120px] sm:w-[200px] md:w[200px] lg:w-[200px] from-[#5E3BEE] to-[#A855F7] text-white px-5  sm:px-6 py-2 sm:py-3 rounded-lg shadow-md  mx-auto md:mx-0 text-xs sm:text-sm md:text-base overflow-hidden">
          {/* Default State */}
          <span className="flex items-center transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
            Explore all
            <span className="ml-2 font-bold text-lg md:text-xl transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:opacity-0">
              →
            </span>
          </span>

          {/* Hover State */}
          <span className="flex items-center absolute left-5 top-2 sm:top-3 translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
            Explore all
            <span className="ml-2 text-lg md:text-xl font-bold -translate-x-10 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
              →
            </span>
          </span>
        </button>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden group w-full"
          >
            {/* Image */}
            <div className="relative w-full h-40 sm:h-48 md:h-52 lg:h-56 xl:h-60 overflow-hidden">
              <Image
                src={blog.src}
                alt={blog.title}
                width={200}
                height={300}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute bottom-3 right-3 bg-white text-black text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full shadow">
                {blog.tag}
              </span>
            </div>

            {/* Content */}
            <div className="p-4 sm:p-5">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold transition-colors duration-300 group-hover:text-purple-600">
                {blog.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2 line-clamp-2">
                {blog.desc}
              </p>

              {/* Author */}
              <div className="flex items-center mt-4 text-[10px] sm:text-xs md:text-sm text-gray-500">
                <Image
                  src={blog.authorImg}
                  alt={blog.author}
                  width={40}
                  height={40}
                  className="w-6 h-6 sm:w-7 sm:h-7 rounded-full mr-2 object-cover"
                />
                <span>{blog.author}</span>
                <span className="mx-1 sm:mx-2">•</span>
                <span>{blog.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bloglist;
