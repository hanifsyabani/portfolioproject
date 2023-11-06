import React from "react";
import imgMain from "../assets/foto2.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="container-set pt-20 ">
        <h1 className=" text-3xl font-bold bg-gradient-to-r from-pink-500 from-4% to-yellow-500 to-90% bg-clip-text text-transparent">
          About <span className="text-white">Me</span>
        </h1>
        <div className="mt-10 xl:flex xl:gap-8">
          <div className=" xl:w-1/2 xl:max-w-lg mt-4">
            <p className="text-[#aaaaaa]">
              I am a computer systems student with a deep interest in Frontend
              development and Machine Learning. Although I am still in the early
              stages of my journey in the tech world, my passion for programming
              and machine learning has driven me to continue learning and
              growing.
            </p>
            <button className="bg-gradient-to-r from-pink-500 from-4% to-yellow-500 to-90% font-semibold p-2 rounded-full w-32 text-white mt-8 hover:scale-105 ease-in duration-150">More</button>
          </div>
          <div className="pt-14 xl:pt-0  xl:w-1/2 xl:pl-40">
            <div className="w-[10rem] xl:w-[14rem] mx-auto bg-gradient-to-r from-pink-500 from-4% to-yellow-500 to-90% group">
              <img
                src={imgMain}
                alt=""
                className="rounded-xl rotate-12 w-full object-contain cursor-move group-hover:rotate-0 ease-in duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
