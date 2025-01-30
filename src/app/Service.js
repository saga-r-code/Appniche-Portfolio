"use client";
import React from "react";
import Image from "next/image";

const Service = () => {
  const services = [
    {
      id: 1,
      imgSrc: "/landing.png",
      alt: "Landing Page Development",
      title: "Landing Page Development",
      description:
        "We create stunning, conversion-focused landing pages that capture attention and drive results. Our pages are optimized for both desktop and mobile devices.",
      icon: "🚀",
    },
    {
      id: 2,
      imgSrc: "/web-app.png",
      alt: "Web App Development",
      title: "Web App Development",
      description:
        "From simple websites to complex web applications, we build scalable solutions using cutting-edge technologies and best practices.",
      icon: "💻",
    },
    {
      id: 3,
      imgSrc: "/app-design.png",
      alt: "App Development",
      title: "App Development",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices and platforms.",
      icon: "📱",
    },
    {
      id: 4,
      imgSrc: "/pos.png",
      alt: "POS Software",
      title: "Custom POS",
      description:
        "Tailored point-of-sale solutions that streamline your business operations and enhance customer service efficiency.",
      icon: "🏪",
    },
    {
      id: 5,
      imgSrc: "/software.png",
      alt: "UI/UX Design",
      title: "UI/UX Design",
      description:
        "User-centered design solutions that combine aesthetics with functionality to create engaging and intuitive digital experiences.",
      icon: "🎨",
    },
    {
      id: 6,
      imgSrc: "/marketing.png",
      alt: "Digital Marketing",
      title: "Digital Marketing",
      description:
        "Strategic digital marketing campaigns that boost your online presence and drive meaningful engagement with your target audience.",
      icon: "📈",
    },
  ];
  return (
    <div id="services" className="px-5 min-h-screen py-32 overflow-hidden">
      <div className="flex justify-center items-center flex-col gap-5">
        <div className="flex justify-center items-center flex-col gap-3">
          <span className="text-blue-500 text-lg font-medium">
            What We Offer
          </span>
          <h1 className="text-4xl md:text-5xl text-center font-bold">
            Our Services
          </h1>
          <div className="flex items-center gap-2">
            <span className="bg-blue-500 w-8 h-1 rounded-full"></span>
            <span className="bg-blue-500 w-3 h-1 rounded-full"></span>
            <span className="bg-blue-500 w-1 h-1 rounded-full"></span>
          </div>
        </div>
        <p className="text-center text-slate-400 max-w-[800px] text-lg leading-relaxed mb-10">
          Elevate your digital presence with our comprehensive suite of
          professional services. We combine innovation with expertise to deliver
          solutions that drive your business forward.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 relative">
        {services.map((service, index) => (
          <div key={service.id} className="group relative z-10">
            <div className="flex flex-col h-full p-6 rounded-xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/5">
              <div className="mb-6 relative overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10"></div>
                <Image
                  src={service.imgSrc}
                  alt={service.alt}
                  width={640}
                  height={256}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-4 right-4 text-3xl z-20">
                  {service.icon}
                </span>
              </div>
              <div className="flex-1 flex flex-col">
                <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h2>
                <p className="text-slate-400 leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
