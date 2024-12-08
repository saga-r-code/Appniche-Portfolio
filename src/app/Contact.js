"use client";
import React from "react";
import {
  FaSquareInstagram,
  FaSquareGithub,
  FaSquareWhatsapp,
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
    {
      id: 5,
      username: "Sahil Jaiswal",
      number: "+91 8419999929",
      spaciality: "Digital Marketer",
      whatsapp: "https://wa.me/+918419999929",
    },
  ];
  return (
    <div id="contact" className="  my-32">
      <div className="flex justify-center items-center flex-col gap-1 ">
        <h1 className="text-3xl md:text-4xl tracking-widest uppercase  font-bold ">
          Our Team
        </h1>
        <span className="bg-blue-500 w-24 h-[5px] rounded-full"></span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-7 mt-10 px-5 bg-slate-950 py-10 border-t border-b border-slate-700 border-gradient-to-r from-slate-700 to-slate-900">
        {contact.map((item) => (
          <div
            key={item.id}
            className="bg-slate-500/20 p-5 rounded-lg shadow-md shadow-slate-500 hover:scale-105 duration-300"
          >
            <h1 className="text-2xl font-bold ">{item.username}</h1>
            <p className="text-slate-400">{item.spaciality}</p>
            <p className="text-slate-400">{item.number}</p>
            <div className="flex justify-center items-center gap-3 mt-5">
              {item.instagram && (
                <a href={item.instagram} target="_blank" rel="noreferrer">
                  <FaSquareInstagram className="text-3xl bg-gradient-to-r from-blue-500 to-blue-800 text-black rounded-md shadow-sm shadow-white/40" />
                </a>
              )}

              {item.whatsapp && (
                <a href={item.whatsapp} target="_blank" rel="noreferrer">
                  <FaSquareWhatsapp className="text-3xl bg-gradient-to-r from-blue-500 to-blue-800 text-black rounded-md shadow-sm shadow-white/40 " />
                </a>
              )}
              {item.github && (
                <a href={item.github} target="_blank" rel="noreferrer">
                  <FaSquareGithub className="text-3xl bg-gradient-to-r from-blue-500 to-blue-800 text-black rounded-md shadow-sm shadow-white/40 " />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
