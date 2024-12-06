"use client";
import React from "react";

const Home = () => {
  return (
    <div className="home-container  relative">
      <div className="bg-[linear-gradient(to_right_top,_#151533,_#151530,_#16162d,_#16162a,_#161627)] h-[40vh] w-[40vw] blur-3xl  rounded-full absolute top-1/4 -left-1/4 "></div>
      <div className="bg-[linear-gradient(to_right_top,_#201823,_#1f1822,_#1e1821,_#1d1820,_#1c181f)] h-[40vh] w-[40vw] blur-2xl  rounded-full absolute  -right-1/4 bottom-10"></div>
      <div className="flex justify-center items-center gap-5  flex-col h-dvh xl:min-h-screen px-5 relative z-20">
        <h1 className="text-4xl md:text-6xl text-center  font-extrabold text-wrap tracking-wide">
          Make Your Business Grow Online With <br />
          <span className="gradient-text bg-gradient-to-r   from-blue-500 to-blue-800 animate-pulse ">
            Appniche Technology
          </span>
        </h1>

        <p className="text-base text-slate-400 md:text-xl text-center ">
          Help you to build website company that is modern, user friendly, good
          SEO, and Clean design
        </p>
        <div className="contact mt-5">
          <button className="bg py-2 px-5  duration-300 rounded-lg text-xl hover:scale-95 hover:shadow-inner hover:shadow-black font-bold bg-blue-500 text-white ">
            <a href="#contact"> Contact Us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
