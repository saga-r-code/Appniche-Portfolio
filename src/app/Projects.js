"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      id: 1,
      imgSrc: "/watch-website.png",
      title: "Watches",
      description:
        "Get the best watches for men and women at affordable prices. Our watches are stylish, durable, and come with a variety of features such as chronograph, date display, and water resistance. We have a wide range of watches to choose from, including leather strap, metal strap, and NATO strap. Our watches are suitable for all occasions, whether you're looking for a casual watch or a formal watch.",
      site: "https://shashanksangawar.github.io/Watches/",
    },
    {
      id: 2,
      imgSrc: "/Furniture-website.png",
      title: "Wooden Furniture",
      description:
        "Get the best wooden furniture for your home at affordable prices. Our furniture is made of high-quality wood and is durable. We have a wide range of furniture to choose from, including beds, sofas, dining tables, chairs, and more. Our furniture is suitable for all types of homes, whether you're looking for modern, traditional, or rustic furniture.",
      site: "https://shashanksangawar.github.io/Furnitures/",
    },
    {
      id: 3,
      imgSrc: "/Ecommerce-website.png",
      title: "eCommerce Website",
      description:
        "Get the best shopping experience with our eCommerce website. Our website is user-friendly and offers a wide range of products, including clothing, electronics, home appliances, and more. We have a variety of payment options, including credit card, PayPal, and bank transfer. Our website is also mobile-friendly, so you can shop on the go.",
      site: " https://shashanksangawar.github.io/Daily_wear/",
    },
    {
      id: 4,
      imgSrc: "/Gym-website.png",
      title: "Gym Nation",
      description:
        "Get fit with our gym. Our gym is fully equipped with all the latest equipment, including treadmills, elliptical machines, free weights, and more. We have a variety of exercise classes, including yoga, Pilates, spinning, and more. Our trainers are experienced and can help you achieve your fitness goals. We also have a nutrition plan to help you stay healthy and fit.",
      site: "https://shashanksangawar.github.io/Gym-Nation/",
    },
    {
      id: 5,
      imgSrc: "/Beauty-website.png",
      title: "Reveal The Beauty Of Skin",
      description:
        "Get the best beauty products for your skin at affordable prices. Our products are made of natural ingredients and are suitable for all skin types. We have a wide range of products, including skincare, haircare, makeup, and more. Our products are free of harsh chemicals and are cruelty-free. We also have a blog section where we share tips and tricks on how to take care of your skin.",
      site: "https://shashanksangawar.github.io/Cosmetics/",
    },
  ];
  return (
    <div id="projects" className="min-h-screen py-32 relative overflow-hidden bg-gradient-to-b from-slate-950 to-[#0c0c1d]">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-purple-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 relative z-10"
      >
        <div className="text-center mb-20">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-500 text-lg font-medium tracking-wider uppercase">Our Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Featured Projects
            </h1>
            <div className="flex justify-center gap-2 mb-8">
              <span className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
              <span className="w-4 h-1 bg-blue-500/50 rounded-full"></span>
              <span className="w-2 h-1 bg-purple-500/50 rounded-full"></span>
            </div>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              Explore our portfolio of successful projects that showcase our expertise
              in creating innovative digital solutions.
            </p>
          </motion.div>
        </div>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-gradient-to-b from-slate-900 to-slate-950 rounded-2xl overflow-hidden"
            >
              <div className="grid md:grid-cols-2 gap-8 p-8">
                <div className="relative overflow-hidden rounded-xl group-hover:shadow-2xl transition-all duration-500">
                  <Image
                    src={project.imgSrc}
                    alt={project.title}
                    width={640}
                    height={384}
                    className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent"></div>
                </div>

                <div className="flex flex-col justify-center space-y-6">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 leading-relaxed line-clamp-4">
                    {project.description}
                  </p>
                  <div className="flex gap-4">
                    <a
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-white bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                    >
                      View Live Demo
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </motion.div>
    </div >
  );
};

export default Projects;
