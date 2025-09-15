"use client";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/blogs", label: "Blogs" },
    { href: "/teams", label: "Our Team" },
    { href: "/contact", label: "Contact Us" },
  ];

  // Function to check if link is active
  const isLinkActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="w-full fixed top-0 left-0 bg-gray-100/20 backdrop-blur-md z-50 p-2">
      <div className="w-full flex justify-between items-center px-4 sm:px-6 md:px-10 lg:px-16 py-2">
        {/* Logo */}
        <Link href="/" className="text-white text-xl sm:text-2xl font-bold">
          Arch Foundation
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex space-x-6 text-white text-base">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`hover:underline ${
                  isLinkActive(link.href) ? "underline font-semibold" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Link
            href="/signup"
            className="relative inline-block group overflow-hidden rounded-lg bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-white shadow-md"
          >
            <span className="block px-6 py-1 text-sm sm:text-base text-center transition-all duration-300 ease-in-out transform group-hover:-translate-y-full">
              <span className="inline-flex items-center justify-center">
                Sign Up
                <span className="ml-2 font-bold text-xl transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                  →
                </span>
              </span>
            </span>

            <span className="absolute inset-0 flex items-center justify-center px-6 py-2 text-sm sm:text-base transform translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
              <span className="inline-flex items-center">
                Sign Up
                <span className="ml-2 font-bold text-xl transform -translate-x-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                  →
                </span>
              </span>
            </span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">
            {isOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden w-full bg-gray-300/55 backdrop-blur-md text-white flex flex-col items-center space-y-6 py-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`hover:underline ${
                isLinkActive(link.href) ? "underline font-semibold" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Sign Up Button */}
          <Link
            href="/signup"
            onClick={() => setIsOpen(false)}
            className="relative inline-block group overflow-hidden rounded-lg bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-white shadow-md"
          >
            <span className="block px-6 py-3 text-sm sm:text-base text-center transition-all duration-300 ease-in-out transform group-hover:-translate-y-full">
              <span className="inline-flex items-center justify-center">
                Sign Up
                <span className="ml-2 font-bold text-xl transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                  →
                </span>
              </span>
            </span>

            <span className="absolute inset-0 flex items-center justify-center px-6 py-3 text-sm sm:text-base transform translate-y-full opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
              <span className="inline-flex items-center">
                Sign Up
                <span className="ml-2 font-bold text-xl transform -translate-x-2 transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                  →
                </span>
              </span>
            </span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
