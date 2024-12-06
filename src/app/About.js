import React from "react";

const About = () => {
  return (
    <div id="about" className="max-h-screen relative mb-32">
      <div className="bg-[linear-gradient(to_right_top,_#151533,_#151530,_#16162d,_#16162a,_#161627)] h-[35vh] w-[35vw] blur-2xl  rounded-full absolute top-1/4 -left-1/4 "></div>
      <div className="bg-[radial-gradient(circle,_#201823,_#1f1822,_#1e1821,_#1d1820,_#1c181f)] h-[35vh] w-[35vw] blur-2xl  rounded-full absolute  -right-1/4 bottom-10"></div>
      <div className="flex justify-center items-center flex-col gap-1 z-10">
        <h1 className="text-3xl tracking-widest md:text-4xl font-bold ">
          About Us
        </h1>
        <span className="bg-blue-500 w-14 h-[5px] rounded-full"></span>
      </div>
      <div className="flex justify-center items-center my-5 px-3 z-10">
        <div className="flex tracking-wide font-semibold overflow-hidden relative justify-center items-start gap-5 flex-col rounded-2xl bg-opacity-50  xl:w-1/2 p-10 text-slate-500 mt-5 md:text-lg lg:text-xl  backdrop-blur-md shadow-lg shadow-slate-500/50 bg-[#10100d] ">
          <div className="w-[20vw] h-[20vh] md:w-[14vw] md:h-[14vh] xl:w-[14vw] xl:h-[14vh] -top-20 lg:-top-24 -left-5 absolute -z-50 bg-blue-600 blur-2xl rounded-full"></div>
          <div className="w-[20vw] h-[20vh] md:w-[14vw] md:h-[14vh] xl:w-[14vw]  -bottom-20 -right-16 absolute -z-50 bg-blue-600 blur-2xl rounded-full"></div>
          <p>
            Appniche Technology is a web development company offering a wide
            range of services, such as landing page development, web app
            development, UI/UX design, mobile app development, custom POS
            software development, digital marketing, and more.
          </p>
          <p>
            We are a team of passionate developers, designers and project
            managers who are always ready to take on new challenges and deliver
            the best results.
          </p>
          <p>
            We believe in delivering high quality products and services to our
            clients and we are always open to new ideas and feedback.
          </p>
          <p>
            We are also very proud of our transparency and honesty with our
            clients. We believe that our clients are our partners and we always
            try to give them the best possible experience.
          </p>
          <p>
            We are always available to answer any questions or concerns that you
            may have, so don't hesitate to reach out to us.
          </p>
          <button className="bg py-2 px-5  mt-3 duration-300 rounded-lg text-xl hover:scale-95 hover:shadow-inner hover:shadow- hover:translate-x-1 font-bold bg-blue-500 text-white ">
            <a href="#contact"> Contact Us</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
