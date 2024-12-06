"use client";
import { RiMenuFold3Line } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { useState } from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="fixed w-full backdrop-blur-xl shadow-md shadow-slate-400 z-50">
      <div className="flex justify-between items-center px-5 md:px-6 lg:px-14 py-5 text-white">
        <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl tracking-tighter font-bold gradient-text bg-gradient-to-r from-blue-500 to-blue-800">
          <a href="#">Appniche Technology</a>
        </h1>

        {/* Toggle Button for Mobile */}
        <div className="md:hidden cursor-pointer" onClick={handleToggle}>
          {toggle ? <ImCross className="text-xl" /> : <RiMenuFold3Line className="text-2xl" />}
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:gap-8 text-slate-400 tracking-wider font-semibold text-base">
          <ul className="flex justify-center items-center gap-8">
            <li className="hover:text-blue-400 cursor-pointer">
              <a href="#about">About Us</a>
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              <a href="#services">Services</a>
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-blue-400 cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {toggle && (
          <div className="absolute top-[70px] h-dvh left-0 w-full bg-black z-50 text-slate-400 tracking-wider font-semibold text-lg flex flex-col gap-6 py-4 px-5">
            <ul className="flex flex-col items-start gap-20 py-20">
              <li className="hover:text-blue-400 cursor-pointer border-b-2 w-full">
                <a href="#about" onClick={handleToggle}>About Us</a>
              </li>
              <li className="hover:text-blue-400 cursor-pointer border-b-2 w-full">
                <a href="#services" onClick={handleToggle}>Services</a>
              </li>
              <li className="hover:text-blue-400 cursor-pointer border-b-2 w-full">
                <a href="#projects" onClick={handleToggle}>Projects</a>
              </li>
              <li className="hover:text-blue-400 cursor-pointer border-b-2 w-full">
                <a href="#contact" onClick={handleToggle}>Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
