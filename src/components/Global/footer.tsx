import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-12 px-4  sm:px-6 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-12">
        {/* Left Section - ARCH FOUNDATION */}
        <div>
          <h2 className="text-2xl font-bold mb-4">ARCH FOUNDATION</h2>
          <p className="mb-6 text-base leading-relaxed">
            Empowering learners worldwide with quality education and
            cutting-edge technology.
          </p>

          {/* Subscription Box */}
          <div className="flex items-center w-full max-w-md rounded-2xl overflow-hidden mb-6 bg-white/20">
            <input
              type="email"
              placeholder="Your Email"
              className="flex-1 px-4 py-3 text-white placeholder-white bg-transparent outline-none"
            />
            <button className="bg-purple-700 hover:bg-purple-800 px-6 py-3 font-medium rounded-none">
              Subscribe
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-5 text-3xl">
            <Link
              href="#"
              className="hover:scale-110 transition-transform text-pink-500"
            >
              <FaInstagram />
            </Link>
            <Link
              href="#"
              className="hover:scale-110 transition-transform text-blue-500"
            >
              <FaFacebookF />
            </Link>
            <Link
              href="#"
              className="hover:scale-110 transition-transform text-red-600"
            >
              <FaYoutube />
            </Link>
            <Link
              href="#"
              className="hover:scale-110 transition-transform text-green-500"
            >
              <FaWhatsapp />
            </Link>
          </div>
        </div>

        {/* Right Section - Quick Links + Address */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:ml-0 xl:ml-18 lg:ml-18 sm:ml-0 ml-0 md:px-0 px-0 ">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
            <div className="border-t border-white/50 mb-4"></div>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Blogs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Address */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Address</h3>
            <div className="border-t border-white/50 mb-4"></div>
            <p className="mb-3">
              123 Education Street,
              <br />
              Tech City, TC 12345
            </p>
            <p className="mb-3">+1 (555) 123-4567</p>
            <Link
              href="mailto:info@archfederation.com"
              className="hover:underline"
            >
              info@archfederation.com
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
