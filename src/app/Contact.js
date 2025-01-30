"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaGithub,
  FaWhatsapp,
} from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";

const Contact = () => {
  const contact = [
    {
      id: 1,
      username: "Sagar Shah",
      number: "+91 9820938124",
      spaciality: "Frontend Developer",
      instagram:
        "https://www.instagram.com/_sagar__1108/profilecard/?igsh=MXAwOXpzaHR3ZW44dg==",
      whatsapp: "https://wa.me/+919820938124",
      github: "https://github.com/saga-r-code",
    },
    {
      id: 2,
      username: "Devanshu Umbre",
      number: "+91 7030761682",
      spaciality: "UI / UX Designer",
      instagram:
        "https://www.instagram.com/devanshu_trek/profilecard/?igsh=cnR3bjgwZGlpaHMw",
      whatsapp: "https://wa.me/+917030761682",
    },
    {
      id: 3,
      username: "Sahas Kamble",
      number: "+91 9987299482",
      spaciality: "Full Stack Developer",
      instagram:
        "https://www.instagram.com/bash_writer/profilecard/?igsh=MTlwZzhpODVwdG9pZg==",
      whatsapp: "https://wa.me/+919987299482",
      github: "https://github.com/sahaskamble",
    },
    {
      id: 4,
      username: "Shashank Sangawar",
      number: "+91 7977528656",
      spaciality: "Full Stack Developer",
      instagram:
        "https://www.instagram.com/appnichetechnology?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
      whatsapp: "https://wa.me/+917977528656",
      github: "https://github.com/Redhood-Schizophrenic",
    },
  ];

  return (
    <div id="contact" className="py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-20">
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-lg font-bold uppercase tracking-wider mb-3">
            Meet Our Team
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            The Experts Behind Our Success
          </h1>
          <div className="flex justify-center gap-2 mb-8">
            <span className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
            <span className="w-4 h-1 bg-blue-500/50 rounded-full"></span>
            <span className="w-2 h-1 bg-purple-500/50 rounded-full"></span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contact.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative p-6 bg-gradient-to-b from-slate-900 to-slate-950 rounded-xl border border-slate-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/5">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                      {member.username}
                    </h3>
                    <p className="text-blue-400 font-medium mb-1">{member.spaciality}</p>
                    <p className="text-slate-400 flex items-center justify-center gap-2">
                      <IoIosCall className="text-blue-400" />
                      {member.number}
                    </p>
                  </div>

                  <div className="flex justify-center items-center gap-4">
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noreferrer"
                      className="transform hover:scale-110 transition-transform duration-300"
                    >
                      <FaInstagram className="text-3xl bg-gradient-to-br from-red-400 to-pink-500 rounded-full p-1 hover:bg-gradient-to-br hover:from-red-500 hover:to-pink-600 transition-all duration-300" />
                    </a>
                    <a
                      href={member.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="transform hover:scale-110  transition-transform duration-300"
                    >
                      <FaWhatsapp className="text-[28px] text-green-400 hover:text-green-500" />
                    </a>
                    {member.github && (
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noreferrer"
                        className="transform hover:scale-110  transition-transform duration-300 "
                      >
                        <FaGithub className="text-[28px] text-slate-400 hover:text-slate-500" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
