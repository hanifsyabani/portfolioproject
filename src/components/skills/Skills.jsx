import React, { useState } from "react";
import DataSkill from "./DataSkills";

const Skills = () => {
  const [items, setItems] = useState(DataSkill);

  const filterItem =(categoryItem)=>{
    const updatedItems = DataSkill.filter((newItem) => newItem.category===categoryItem);
    setItems(updatedItems);
  }

  return (
    <section id="skills">
      <div className="container-set bg-black py-[6rem]">
        <h1 className="text-white font-semibold xl:text-3xl">What I Do.</h1>
        <div className="flex text-[#aaaaaa] gap-10 mt-4">
          <h4 className="hover:text-white cursor-pointer" onClick={() => setItems(DataSkill)}>All</h4>
          <h4 className="hover:text-white cursor-pointer" onClick={() => filterItem('skill')} >Skill</h4>
          <h4 className="hover:text-white cursor-pointer" onClick={()=> filterItem('tool')}> Tools</h4>
        </div>
        <div className="mt-6 flex gap-10 flex-wrap justify-center">
          {items.map((item) => {
            // const { id, image, title} = item;
            return (
              <div key={item.id} className="w-[8rem] h-[8rem] xl:w-[10rem] xl:h-[10rem] bg-[#1C1C22] flex flex-col justify-center items-center cursor-pointer group">
                <img src={item.image} alt="" className="w-14 xl:w-20 group-hover:scale-105 ease-in duration-200"/>
                <h4 className="text-white text-center font-semibold mt-4">{item.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
