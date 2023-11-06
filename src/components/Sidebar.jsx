import React, { useState } from "react";
import {
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlinePhone,
  AiOutlineReconciliation
} from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import {MdPermIdentity, MdSchool} from 'react-icons/md'

const Sidebar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden text-white" size={20}
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white flex flex-col justify-center items-center z-20">
          <a
            href="#main"
            className="navbar-links-sm"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            href="#about"
            className="navbar-links-sm"
          >
            <MdPermIdentity size={20} />
            <span className="pl-4">About</span>
          </a>
          <a
            href="#education"
            className="navbar-links-sm"
          >
            <MdSchool size={20} />
            <span className="pl-4">Education</span>
          </a>
          <a
            href="#main"
            className="navbar-links-sm"
          >
            <BiCategoryAlt size={20} />
            <span className="pl-4">Project</span>
          </a>
          <a
            href="#main"
            className="navbar-links-sm"
          >
            <AiOutlinePhone size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </div>
      ) : (
        <div></div>
      )}
      <nav className="hidden lg:block relative z-[99]">
        <div className="fixed top-32 left-4">
          <a href="#main">
            <div className="nav-link-xl">
              <AiOutlineHome size={20} color="white" />
            </div>
          </a>
          <a href="#about">
            <div className="nav-link-xl">
              <MdPermIdentity size={20} color="white" />
            </div>
          </a>
          <a href="#education">
            <div className="nav-link-xl">
              <MdSchool size={20} color="white" />
            </div>
          </a>
          <a href="#project">
            <div className="nav-link-xl">
              <BiCategoryAlt size={20} color="white" />
            </div>
          </a>
          <a href="#skills">
            <div className="nav-link-xl">
              <AiOutlineReconciliation size={20} color="white" />
            </div>
          </a>
          <a href="#contact">
            <div className="nav-link-xl">
              <AiOutlinePhone size={20} color="white" />
            </div>       
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
