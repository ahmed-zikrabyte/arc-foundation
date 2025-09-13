// components/Navbar.tsx
"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-gray-300/55 backdrop-blur-md z-50">
      <div className="w-full flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16 py-2">
        {/* Logo */}
        <div className="text-white text-xl sm:text-2xl font-bold">
          Arch Federation
        </div>

        {/* Desktop Links - visible only lg+ */}
        <ul className="hidden lg:flex space-x-6 text-white text-base">
          <li className="cursor-pointer hover:underline">Home</li>
          <li className="cursor-pointer hover:underline">About Us</li>
          <li className="cursor-pointer hover:underline">Blogs</li>
          <li className="cursor-pointer hover:underline">Our Team</li>
          <li className="cursor-pointer hover:underline">Contact Us</li>
        </ul>

        {/* Desktop Button - visible only lg+ */}
        <div className="hidden lg:block">
          <button className="bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-white px-5 py-2 rounded-lg shadow-md hover:opacity-90 text-sm sm:text-base">
            Sign Up →
          </button>
        </div>

        {/* Mobile + Tablet Toggle (sm + md) */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile + Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden w-full bg-gray-300/55 backdrop-blur-md bg-transparent text-white flex flex-col items-center space-y-6 py-6">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/blogs" className="hover:underline">
            Blogs
          </Link>
          <Link href="/team" className="hover:underline">
            Our Team
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
          <button className="bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-white px-6 py-2 rounded-lg shadow-md hover:opacity-90">
            Sign Up →
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
