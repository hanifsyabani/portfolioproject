import React from "react";
import { FaPhone } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import FormContact from "./FormContact";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container-set bg-black xl:flex pt-20 py-[2rem]">
        <div className="w-full xl:flex">
          <div className="xl:w-1/2">
            <h1 className="title">Get in Touch</h1>
            <p className="text-[#aaaaaa] text-sm">Feel free to contact me</p>
            <div className="mt-8">
              <div className="flex gap-2 mb-5">
                <AiOutlineMail size={20} color="white" />
                <p className="text-white">mh070940@gmail.com</p>
              </div>
              <div className="flex gap-2">
                <FaPhone size={20} color="white" />
                <p className="text-white">083192453815</p>
              </div>
            </div>
          </div>
          <div className="xl:w-1/2 mt-10 xl:mt-0">
            <FormContact />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
