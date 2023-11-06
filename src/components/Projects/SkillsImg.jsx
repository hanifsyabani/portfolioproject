import React from "react";
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import js from '../../assets/javascript.svg'


const SkillsImg = () => {
  return (
    <section class="flex md:gap-4 my-4 mx-2 gap-1">
      <div class="flex-skill">
        <img src={html} alt="html" className="w-[30px] xl:w-[30px]" />
        <p class="text-white text-xs xl:text-sm">HTML</p>
      </div>
      <div class="flex-skill">
        <img src={css} alt="css" className="w-[30px] xl:w-[30px]"/>
        <p class="text-white text-xs xl:text-sm">CSS</p>
      </div>
      <div class="flex-skill">
        <img src={js} alt="js" className="w-[30px] xl:w-[30px]" />
        <p class="text-white text-xs xl:text-sm">Javascript</p>
      </div>
    </section>
  );
};

export default SkillsImg;
