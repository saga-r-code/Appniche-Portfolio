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
    <div className="fixed w-full backdrop-blur-lg  shadow-lg shadow-neutral-800  z-50 transition-all duration-300">
      <div className="flex justify-between items-center px-5 md:px-8 lg:px-16 py-5 text-white  mx-auto">
        <h1 className="text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl font-bold">
          <a href="#" className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent hover:from-purple-500 hover:to-indigo-500 transition-all duration-300">
            Appniche Technology
          </a>
        </h1>

        {/* Toggle Button for Mobile */}
        <div className="md:hidden cursor-pointer p-2 hover:bg-white/10 rounded-lg transition-all duration-300" onClick={handleToggle}>
          {toggle ? 
            <ImCross className="text-xl text-indigo-400" /> : 
            <RiMenuFold3Line className="text-2xl text-indigo-400" />
          }
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex md:items-center md:gap-8">
          <ul className="flex justify-center items-center gap-8">
            {['About Us', 'Services', 'Projects', 'Contact'].map((item) => (
              <li key={item} className="relative group">
                <a 
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  className="text-gray-300 hover:text-white font-medium tracking-wide transition-colors duration-300"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-full left-0 w-full bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-xl transform transition-all duration-300 ease-in-out ${
          toggle ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'
        }`}>
          <ul className="flex flex-col items-start gap-8 py-8 px-6">
            {['About Us', 'Services', 'Projects', 'Contact'].map((item) => (
              <li key={item} className="w-full">
                <a
                  href={`#${item.toLowerCase().replace(' ', '')}`}
                  onClick={handleToggle}
                  className="block w-full py-2 text-gray-300 hover:text-white font-medium tracking-wide border-b border-gray-800 hover:border-indigo-500 transition-all duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
