"use client";
import Image from "next/image";
import { useState } from "react";
import { FaInstagram, FaLinkedin, FaMedium } from "react-icons/fa";

const Teams = () => {
  const team = [
    {
      id: 1,
      name: "David Kim",
      role: "Backend Engineer",
      description:
        "David builds the core engine that powers Arch Federation’s learning platform. He is experienced in building scalable APIs and optimizing server performance.",
      img: "/homepage/teams/teamsimage.jpg",
      socials: {
        linkedin: "#",
        medium: "#",
        instagram: "#",
      },
      email: "david@example.com",
      phone: "123456789",
    },
    {
      id: 2,
      name: "Emma Rodriguez",
      role: "Product Engineer",
      description:
        "Emma bridges product vision, engineering, and design to deliver impactful solutions. She works closely with teams to turn ideas into practical features that learners find valuable and intuitive.",
      img: "/homepage/teams/teamsimage.jpg",
      socials: {
        linkedin: "#",
        medium: "#",
        instagram: "#",
      },
      email: "emma@example.com",
      phone: "987654321",
    },
    {
      id: 3,
      name: "James Wilson",
      role: "DevOps Engineer",
      description:
        "James automates deployments and ensures the system runs reliably 24/7. He’s passionate about CI/CD pipelines and cloud infrastructure.",
      img: "/homepage/teams/teamsimage.jpg",
      socials: {
        linkedin: "#",
        medium: "#",
        instagram: "#",
      },
      email: "james@example.com",
      phone: "456789123",
    },
    {
      id: 3,
      name: "James Wilson",
      role: "DevOps Engineer",
      description:
        "James automates deployments and ensures the system runs reliably 24/7. He’s passionate about CI/CD pipelines and cloud infrastructure.",
      img: "/homepage/teams/teamsimage.jpg",
      socials: {
        linkedin: "#",
        medium: "#",
        instagram: "#",
      },
      email: "james@example.com",
      phone: "456789123",
    },
    {
      id: 3,
      name: "James Wilson",
      role: "DevOps Engineer",
      description:
        "James automates deployments and ensures the system runs reliably 24/7. He’s passionate about CI/CD pipelines and cloud infrastructure.",
      img: "/homepage/teams/teamsimage.jpg",
      socials: {
        linkedin: "#",
        medium: "#",
        instagram: "#",
      },
      email: "james@example.com",
      phone: "456789123",
    },
    {
      id: 3,
      name: "James Wilson",
      role: "DevOps Engineer",
      description:
        "James automates deployments and ensures the system runs reliably 24/7. He’s passionate about CI/CD pipelines and cloud infrastructure.",
      img: "/homepage/teams/teamsimage.jpg",
      socials: {
        linkedin: "#",
        medium: "#",
        instagram: "#",
      },
      email: "james@example.com",
      phone: "456789123",
    },
    {
      id: 3,
      name: "James Wilson",
      role: "DevOps Engineer",
      description:
        "James automates deployments and ensures the system runs reliably 24/7. He’s passionate about CI/CD pipelines and cloud infrastructure.",
      img: "/homepage/teams/teamsimage.jpg",
      socials: {
        linkedin: "#",
        medium: "#",
        instagram: "#",
      },
      email: "james@example.com",
      phone: "456789123",
    },
    {
      id: 3,
      name: "James Wilson",
      role: "DevOps Engineer",
      description:
        "James automates deployments and ensures the system runs reliably 24/7. He’s passionate about CI/CD pipelines and cloud infrastructure.",
      img: "/homepage/teams/teamsimage.jpg",
      socials: {
        linkedin: "#",
        medium: "#",
        instagram: "#",
      },
      email: "james@example.com",
      phone: "456789123",
    },
    {
      id: 3,
      name: "James Wilson",
      role: "DevOps Engineer",
      description:
        "James automates deployments and ensures the system runs reliably 24/7. He’s passionate about CI/CD pipelines and cloud infrastructure.",
      img: "/homepage/teams/teamsimage.jpg",
      socials: {
        linkedin: "#",
        medium: "#",
        instagram: "#",
      },
      email: "james@example.com",
      phone: "456789123",
    },
    {
      id: 3,
      name: "James Wilson",
      role: "DevOps Engineer",
      description:
        "James automates deployments and ensures the system runs reliably 24/7. He’s passionate about CI/CD pipelines and cloud infrastructure.",
      img: "/homepage/teams/teamsimage.jpg",
      socials: {
        linkedin: "#",
        medium: "#",
        instagram: "#",
      },
      email: "james@example.com",
      phone: "456789123",
    },
    {
      id: 3,
      name: "James Wilson",
      role: "DevOps Engineer",
      description:
        "James automates deployments and ensures the system runs reliably 24/7. He’s passionate about CI/CD pipelines and cloud infrastructure.",
      img: "/homepage/teams/teamsimage.jpg",
      socials: {
        linkedin: "#",
        medium: "#",
        instagram: "#",
      },
      email: "james@example.com",
      phone: "456789123",
    },
    {
      id: 3,
      name: "James Wilson",
      role: "DevOps Engineer",
      description:
        "James automates deployments and ensures the system runs reliably 24/7. He’s passionate about CI/CD pipelines and cloud infrastructure.",
      img: "/homepage/teams/teamsimage.jpg",
      socials: {
        linkedin: "#",
        medium: "#",
        instagram: "#",
      },
      email: "james@example.com",
      phone: "456789123",
    },
  ];

  const [selectedMember, setSelectedMember] = useState<any>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleMembers = showAll ? team : team.slice(0, 8);

  return (
    <section
      className="w-full bg-cover bg-center py-16  px-4 sm:px-6 md:px-10 lg:px-16  text-white"
      style={{ backgroundImage: "url('/homepage/teams/teambg.png')" }}
    >
      {/* Section Title */}
      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Let’s Meet Our Creative Team
        </h2>
        <p className="text-sm sm:text-base md:text-lg mt-3 max-w-3xl mx-auto text-gray-200">
          Meet the talented professionals who make our vision a reality with
          their expertise and dedication.
        </p>
      </div>

      {/* Team Grid */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {visibleMembers.map((member) => (
          <div
            key={member.id}
            className="cursor-pointer"
            onClick={() => setSelectedMember(member)}
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg hover:scale-105 transition-transform">
              <div className="relative w-full h-64">
                <Image
                  src={member.img}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-200">{member.role}</p>
                </div>
              </div>
            </div>
            <p className="mt-3 text-sm text-gray-300 text-center line-clamp-2">
              {member.description}
            </p>
          </div>
        ))}
      </div>

      {/* Load More / Show Less */}
      {team.length > 6 && (
        <div className="flex justify-center mt-10 gap-4 w-full">
          <button
            onClick={() => setShowAll(!showAll)}
            className="cursor-pointer group relative bg-gradient-to-r from-[#5E3BEE] to-[#A855F7] text-white px-6 py-3 rounded-lg shadow-md w-fit text-sm sm:text-base overflow-hidden"
          >
            <span className="flex items-center transition-all duration-500 ease-in-out group-hover:-translate-y-full group-hover:opacity-0">
              {showAll ? "Show Less" : "Load More"}
              <span className="ml-2 font-bold text-xl transition-all duration-500 ease-in-out group-hover:translate-x-10 group-hover:opacity-0">
                {showAll ? "↑" : "→"}
              </span>
            </span>
            <span className="flex items-center absolute left-6 top-3 translate-y-full opacity-0 transition-all duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100">
              {showAll ? "Show Less" : "Load More"}
              <span className="ml-2 text-xl font-bold -translate-x-10 opacity-0 transition-all duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100">
                {showAll ? "↑" : "→"}
              </span>
            </span>
          </button>
        </div>
      )}

      {/* Custom Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="relative w-full max-w-7xl h-[90vh] bg-white rounded-2xl overflow-hidden shadow-xl">
            {/* Close Button */}
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-4 right-4 text-2xl text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <div
              className="w-full h-full bg-cover bg-center p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start lg:items-center"
              style={{
                backgroundImage: "url('/homepage/teams/teammodel.png')",
              }}
            >
              {/* Left - Image */}
              <div className="relative w-full h-80 md:h-[22rem] lg:h-[28rem] rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={selectedMember.img}
                  alt={selectedMember.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right - Info */}
              <div className="text-black overflow-y-auto max-h-[60vh] lg:max-h-[70vh] pr-2 lg:pr-4">
                <h3 className="text-3xl font-bold">{selectedMember.name}</h3>
                <p className="text-xl text-gray-600 mb-4">
                  {selectedMember.role}
                </p>
                <p className="text-base text-gray-700 mb-6">
                  {selectedMember.description}
                </p>

                {/* Socials */}
                <div className="flex gap-4 text-2xl mb-6">
                  <a href={selectedMember.socials.linkedin} target="_blank">
                    <FaLinkedin className="hover:text-blue-600" />
                  </a>
                  <a href={selectedMember.socials.medium} target="_blank">
                    <FaMedium className="hover:text-gray-800" />
                  </a>
                  <a href={selectedMember.socials.instagram} target="_blank">
                    <FaInstagram className="hover:text-pink-600" />
                  </a>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col gap-2 text-base text-gray-700">
                  <p>📞 {selectedMember.phone}</p>
                  <p>📧 {selectedMember.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Teams;
