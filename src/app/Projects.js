"use client";
import React from "react";
import Image from "next/image";

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
    <div id="projects" className="projects-section  min-h-screen my-32">
      <div className="flex justify-center items-center flex-col gap-5 px-5">
        <div className="flex justify-center items-center flex-col gap-1 ">
          <h1 className="text-3xl md:text-4xl tracking-widest  font-bold ">
            Our Projects
          </h1>
          <span className="bg-blue-500 w-24 h-[5px] rounded-full"></span>
        </div>
        <p className="text-center text-slate-400 max-w-[650px] mb-10">
          Below are some of our recent projects, showcasing our expertise in web
          development, mobile app development, UI/UX design, and digital
          marketing.
        </p>
      </div>
      <div className="flex justify-center items-center w-full flex-col gap-5  relative">
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-[40vh] w-[40vw] blur-3xl  rounded-full absolute top-10 right-0 "></div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-[40vh] w-[40vw] blur-3xl  rounded-full absolute top-30 left-0 "></div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-700 h-[40vh] w-[40vw] blur-3xl  rounded-full absolute  right-0 bottom-10 "></div>
        {projects.map((project) => {
  return (
    <div
      key={project.id}
      className="bg-black w-full h-auto py-5 overflow-hidden px-5 z-10"
    >
      <div className="xl:w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2">
        <Image
          src={project.imgSrc} // Ensure this is a valid path or imported image
          alt={project.title}
          width={640} // Set the width of the image
          height={384} // Set the height of the image
          className="rounded-xl md:object-left border object-cover hover:scale-105 duration-300"
        />
        <div className="flex justify-center items-center lg:items-start flex-col gap-5 lg:gap-7 py-10 lg:pl-24 text-center md:text-start">
          <h1 className="text-3xl md:text-4xl font-bold underline underline-offset-8 bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent decoration-2 decoration-sky-200">
            {project.title}
          </h1>
          <p className="text-xl text-slate-300 font-medium">{project.description}</p>
          <a href={project.site} target="_blank" rel="noopener noreferrer">
            <button className="bg-blue-500 px-5 py-2 rounded-md font-bold tracking-wider text-lg hover:bg-blue-600 transition duration-300">
              Live Demo
            </button>
          </a>
        </div>
      </div>
    </div>
  );
})}
      </div>
    </div>
  );
};

export default Projects;
