import React, { useState } from "react";
import { AiFillCloseCircle, AiFillGithub } from "react-icons/ai";
import SkillsImg from "./SkillsImg";

const Modal = ({onHandleModal,  selectedModal }) => {
  const [modal, setModal] = useState(false);
  return (
    <>
      <button
        className="text-sm font-semibold"
        onClick={() => {
          setModal(true);
          onHandleModal(selectedModal.id);
        }}
      >
        Detail
      </button>

      <div className={`${modal ? "block" : "hidden"} fixed top-0 left-0 w-full h-full backdrop-blur-sm bg-black/50 z-[99] flex justify-center items-center font-[poppins]`}>
        <div className="absolute w-[80%] xl:w-[50%] bg-white rounded-md p-2">
          <div className="flex justify-between">
            <h1 className="font-bold">{selectedModal.title}</h1>
            <AiFillCloseCircle
              size={30}
              color="red"
              onClick={() => {
                setModal(false);
              }}
              className="cursor-pointer"
            />
          </div>
          <div className="p-5">
            <img src={selectedModal.image} alt="" className="w-full" />
            <SkillsImg />
            <div className="mt-6">
              <h5 className="font-bold ">Description</h5>
              <p>{selectedModal.detail}</p>
              <div className="mt-6">
                <a href={selectedModal.repo}>
                  <button className="flex item-center gap-2 bg-black text-white p-2 rounded-md text-sm">
                    <AiFillGithub size={20} />
                    <p>Project Repository</p>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
