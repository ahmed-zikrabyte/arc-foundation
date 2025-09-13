import Image from "next/image";
import { useState } from "react";

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
  };

  return (
    <section className="w-full  flex flex-col items-center justify-center px-4 py-12  bg-white  sm:px-6 md:px-10 lg:px-16">
      {/* Header */}
      <div className="text-center max-w-2xl mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Get In <span className="text-purple-500">Touch</span>
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Have questions or want to learn more about our courses? Reach out to
          our team and we'll get back to you as soon as possible.
        </p>
      </div>

      {/* Main Card */}
      <div className="  w-full   bg-gradient-to-br from-[#3071A9] via-[#3493E5] to-[#3493E5] rounded-3xl  overflow-hidden shadow-lg flex flex-col lg:flex-row items-center">
        {/* Left Side - Student Image */}
        <div className="  lg:w-1/2 w-full flex items-center justify-center ">
          <Image
            src="/homepage/banner/bannergirl.png"
            alt="Smiling student with books and backpack"
            width={480} // fallback width in px
            height={520} // fallback height in px
            className="w-120 h-130 object-cover"
          />
        </div>

        {/* Right Side - Contact Form */}
        <div className="lg:w-1/2 w-full flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <h3 className="text-2xl font-bold text-white mb-6">
              Send Us Message
            </h3>

            <div className="space-y-5">
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-lg bg-white/20 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
              />

              <input
                type="email"
                name="email"
                placeholder="Email ID"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-lg bg-white/20 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300"
              />

              <textarea
                name="message"
                rows={4}
                placeholder="Message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-5 py-4 rounded-lg bg-white/20 border border-white/30 placeholder-white/80 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all duration-300 resize-none"
              />

              <button
                onClick={handleSubmit}
                className="w-[40%] bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-lg"
              >
                Send
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
