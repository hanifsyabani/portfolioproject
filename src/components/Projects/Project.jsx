import React, { useState } from "react";
import CardProject from "./DataProject";
import SkillsImg from "./SkillsImg";
import Modal from "./Modal";

const Project = () => {
  const [cardsProject, setCardProject] = useState(CardProject);
 
  const[selectedModal, setSelectedModal] = useState(cardsProject[0]);

  function handleModal(id) {
    const newModals = cardsProject.filter((card) => card.id === id);
    setSelectedModal(newModals[0]);
  }

  // const toggleModal = () => {
  //   setModal(!modal);
  // };

  return (
    <section id="project">
      <div className="container-set py-10 bg-black">
        <div className="w-full xl:flex gap-[13rem]">
          <h1 className="text-white text-4xl w-full max-w-xs">
            Look at My <span className="title text-4xl">Projects.</span>
          </h1>
          <p className="text-[#aaaaaa] text-sm max-w-lg mt-4">
            Welcome to the My Projects section! Here, you will find a list of
            projects that I have worked on and those that are still in
            development. These projects reflect my interest and dedication in
            the world of technology, especially in the field of Frontend
            Development.
          </p>
        </div>
        <div className="mt-10 w-full flex flex-wrap justify-center gap-10">
          {cardsProject.map((card) => {
            return (
              <div className="project-card" key={card.id}>
                <div className="bg-slate-500 p-1.5 mb-4 w-full">
                  <img src={card.image} alt="" className="w-full" />
                </div>
                <h1 className="text-white text-lg font-bold">{card.title}</h1>
                <SkillsImg />
                <p className="text-sm text-slate-300">{card.detail}</p>
                <div className="flex gap-4 mt-7">
                  <div className=" bg-white p-2 rounded-lg cursor-pointer flex items-center gap-1 group hover:bg-cyan-500 transition" >
                    <Modal onHandleModal={() => handleModal(card.id)} selectedModal={selectedModal}/>
                    <i className="bx bxs-right-arrow-circle"></i>
                  </div>
                  <a href={card.link}>
                    <div className=" bg-cyan-500 p-2 rounded-lg cursor-pointer flex items-center gap-1 group hover:bg-white transition">
                      <p className="text-sm font-semibold text-white group-hover:text-cyan-900">
                        Demo
                      </p>
                      <i className="bx bx-slideshow text-xl text-white group-hover:text-cyan-900"></i>
                    </div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* {modal&&(
        <Modal onToggle={toggleModal} selectedModal = {selectedModal} />
      )
      }:<></> */}
    </section>
  );
};

export default Project;
