import React from "react";

const Service = () => {
  const services = [
    {
      id: 1,
      imgSrc: "./landing.png",
      alt: "Landing Page Development",
      title: "Landing Page Development",
      description:
        "We are providing the best landing page development services to our customers. Our team of experts is always ready to help you in creating a website that is both visually appealing and functional.",
    },
    {
      id: 2,
      imgSrc: "./web-app.png",
      alt: "Web App Development",
      title: "Web App Development",
      description:
        "We are providing the best web app development services to our customers. Our team of experts is always ready to help you in creating a website that is both visually appealing and functional.",
    },
    {
      id: 3,
      imgSrc: "./app-design.png",
      alt: "App Development",
      title: "App Development",
      description:
        "We are providing the best app development services to our customers. Our team of experts is always ready to help you in creating an app that is both functional and visually appealing.",
    },
    {
      id: 4,
      imgSrc: "./pos.png",
      alt: "POS Software",
      title: "Custom POS",
      description:
        "We are providing the best custom point of sale(POS) services to our customers. Our team of experts is always ready to help you in creating a custom POS that is both functional and visually appealing.",
    },
    {
      id: 5,
      imgSrc: "./software.png",
      alt: "UI/UX Design",
      title: "UI/UX Design",
      description:
        "We are providing the best UI/UX design services to our customers. Our team of experts is always ready to help you in creating a UI/UX design that is both functional and visually appealing.",
    },
    {
      id: 6,
      imgSrc: "./marketing.png",
      alt: "Digital Marketing",
      title: "Digital Marketing",
      description:
        "We are providing the best digital marketing services to our customers. Our team of experts is always ready to help you in creating a digital marketing campaign that is both functional and visually appealing.",
    },
  ];
  return (
    <div id="services" className=" px-5 min-h-screen my-32">
      <div className="flex justify-center items-center flex-col gap-5">
        <div className="flex justify-center items-center flex-col gap-1 ">
          <h1 className="text-3xl md:text-4xl tracking-widest  font-bold ">Our Services</h1>
          <span className="bg-blue-500 w-24 h-[5px] rounded-full"></span>
        </div>
        <p className="text-center text-slate-400 max-w-[650px] mb-10">
          We provide a wide range of services to our customers, including
          Landing Page Development, Web App Development, Mobile App Development,
          Custom Point of Sale (POS) Software,UI/UX Design, Digital Marketing
          and more.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 relative">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-[30vh] w-[30vw] blur-3xl  rounded-full absolute top-10 -left-20 "></div>
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-[30vh] w-[30vw] blur-3xl  rounded-full absolute  -right-20 bottom-10 "></div>
        {services.map((service, index) => {
          return (
            <div
              key={service.id}
              className="flex flex-col z-10 items-center gap-6 p-4 border border-slate-600 rounded-lg shadow-lg bg-slate-950 hover:scale-105 duration-300"
            >
              <img
                src={service.imgSrc}
                alt={service.alt}
                className={`w-full h-64 bg-black overflow-hidden rounded-xl object-cover  ${
                  index % 2 === 0 ? "object-center" : "object-center"
                }`}
              />
              <div className="px-4 py-1 flex justify-center items-center flex-col gap-3 text-center">
                <h2 className="text-3xl font-semibold text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-lg text-slate-300">{service.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Service;
