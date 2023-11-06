import React from "react";
import imgMain from '../assets/foto.jpg'

const Main = () => {
  return (
    <section id="main" className="container-set pt-14">
      <div className="w-[10rem] h-[10rem] mx-auto">
        <img
          src={imgMain}
          alt="/"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="mt-10 mx-auto text-center w-full xl:max-w-[50%]">
        <h1 className="title">
          Hello<span className="text-white">🙌</span>, I'm Hanif,{" "}
          <span className="text-white text-sm xl:text-2xl">
            frontend interested, student at Sriwijaya University
          </span>
        </h1>
        <p className="text-[#aaaaaa] mt-5 m-auto text-sm">
          I specialize in building fast, responsive, and user-friendly websites.
          Additionally, I have knowledge in the field of machine learning, which
          can help you develop more advanced and engaging solutions.
        </p>
        <div className="flex justify-center gap-5 mt-8">
          <button className="bg-white text-black py-1 px-2 rounded-full text-sm hover:scale-105 ease-in duration-150">
            Get in My CV
          </button>
          <a href="#project">
            <button className="bg-[#1C1C22] text-[#aaaaaa] text-sm border border-[#aaaaaa] py-3 px-4 rounded-full hover:scale-105 ease-in duration-150">
              View My Project
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Main;
