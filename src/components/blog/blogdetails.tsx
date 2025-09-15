"use client";

import Image from "next/image";
import Link from "next/link";
import { Avatar } from "@/components/ui/avatar";

const Blogdetails = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="relative w-full h-[60vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] flex flex-col justify-center items-center text-white">
        <Image
          src="/bloglist/blogdetailbg.png"
          alt="Blog hero background"
          fill
          priority
          className="object-cover"
        />

        <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 max-w-3xl transform -translate-y-4 sm:-translate-y-6 md:-translate-y-8">
          <span className="px-3 py-1 bg-white/60 rounded-full text-xs sm:text-sm md:text-base mb-4 inline-block">
            Design
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-snug">
            UI/UX Design Principles That Enhance User Experience
          </h1>

          {/* Author + Date */}
          <div className="flex flex-wrap sm:flex-nowrap justify-center items-center gap-3 mt-4 text-xs sm:text-sm md:text-base text-white/90">
            <Avatar className="w-7 h-7 bg-white text-black flex items-center justify-center">
              D
            </Avatar>
            <div className="flex flex-wrap sm:flex-nowrap items-center gap-2">
              <span>David Kim</span>
              <span className="mx-2 hidden sm:inline">•</span>
              <span>September 10, 2025</span>
              <span className="mx-2 hidden sm:inline">•</span>
              <span>8 min read</span>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Featured Image (Responsive, Centered, Rounded) */}
      <div className="w-full relative z-20 -mt-32 sm:-mt-32 md:-mt-64 lg:-mt-40 px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] xl:h-[500px]">
          <Image
            src="/bloglist/blogdetails.png"
            alt="Blog cover"
            fill
            priority
            className="object-cover w-full rounded-2xl sm:rounded-3xl shadow-lg"
          />
        </div>
      </div>

      {/* ✅ Blog Content */}
      <div className="w-full  px-4 sm:px-6 md:px-10 lg:px-16 py-10 space-y-10 text-gray-700 leading-relaxed  mx-auto">
        <p>
          In today’s digital-first world, design is more than just aesthetics —
          it’s about creating meaningful experiences. A well-designed interface
          can make the difference between a product that delights users and one
          that frustrates them. UI (User Interface) and UX (User Experience)
          design principles serve as the foundation for building intuitive,
          accessible, and engaging digital products. Let’s explore the key
          principles that can significantly enhance user experience.
        </p>

        {/* Section 1 */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold">
            1. Visual Hierarchy and Information Architecture
          </h3>
          <p>
            Effective visual hierarchy guides users through content naturally,
            making complex information digestible and easy to navigate. This
            involves careful consideration of:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Typography scaling and contrast</li>
            <li>Strategic use of white space</li>
            <li>Color psychology and accessibility</li>
            <li>Content grouping and organization</li>
          </ul>
        </div>

        {/* Section 2 */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold">
            2. Consistency and Pattern Recognition
          </h3>
          <p>
            Users feel more confident when interfaces behave predictably.
            Maintaining consistency across your design system helps reduce
            cognitive load and improves user efficiency.
          </p>
          <div className="bg-gray-300 border-l-4 border-blue-500 p-4 rounded-lg text-sm">
            <strong>Key Takeaway:</strong> Consistency in design elements
            creates familiarity and trust, leading to better user engagement and
            satisfaction.
          </div>
        </div>

        {/* Section 3 */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold">
            3. Feedback and Response Time
          </h3>
          <p>
            Immediate feedback on user actions is crucial for maintaining
            engagement. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Visual feedback on interactions</li>
            <li>Loading states and progress indicators</li>
            <li>Success and error messages</li>
            <li>Micro-animations and transitions</li>
          </ul>
          <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600">
            “Good design is obvious. Great design is transparent.” — Joe Sparano
          </blockquote>
        </div>

        {/* Section 4 */}
        <div className="space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold">
            4. Mobile-First and Responsive Design
          </h3>
          <p>
            With mobile devices accounting for over 50% of web traffic,
            designing for smaller screens first ensures a solid foundation for
            responsive layouts.
          </p>
        </div>

        {/* ✅ Engagement Section */}
        <div className="flex flex-wrap items-center gap-6 text-gray-600 pt-6 border-t">
          <span>👍 100 Likes</span>
          <span>❤️ 10 Likes</span>
          <span>💬 10 Comments</span>
        </div>

        {/* ✅ Author Bio */}
        <div className="flex items-center gap-4 p-6 bg-gray-200 rounded-xl border">
          <Avatar className="w-12 h-12">
            <Image
              src="/bloglist/blogdetailbg.png"
              alt="David Kim"
              fill
              className="object-cover rounded-full"
            />
          </Avatar>
          <div>
            <h4 className="font-semibold">David Kim</h4>
            <p className="text-sm text-gray-600">
              He is a passionate UI/UX Designer and content creator who focuses
              on building intuitive digital experiences. She loves sharing
              design insights to help learners and professionals grow in the
              field.
            </p>
            <Link
              href="#"
              className="text-blue-600 text-sm font-medium hover:underline"
            >
              More articles
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogdetails;
