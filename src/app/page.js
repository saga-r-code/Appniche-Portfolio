"use client";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./Home";
import Footer from "./footer";
import About from "./About";
import Service from "./Service";
import Projects from "./Projects";
import Contact from "./Contact";
import { FaArrowUp } from "react-icons/fa";
const page = () => {
  return (
    <div className=" text-white overflow-hidden relative">
      <Navbar />
      <Home />
      <About />
      <Service />
      <Projects />
      <Contact />
      <Footer />
      <a
        href="#"
        className="z-50 fixed h-12 text-lg backdrop-blur-xl shadow-md shadow-slate-400 w-12 bottom-10 right-10 flex justify-center items-center bg-white/20 text-white  rounded-full text-center"
      >
        <FaArrowUp />
      </a>
    </div>
  );
};

export default page;
