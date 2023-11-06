import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="container-set py-[2rem] ">
      <div className="mb-3 text-center">
        <h1 className="title text-xl">Muhammad Hanif Sya'bani</h1>
        <p className="text-[#aaaaaa] text-lg">Frontend Interested</p>
      </div>
      <div className="my-7">
        <ul className="flex flex-wrap justify-center text-sm text-white gap-4">
          <li>
            <a href="#main">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#project">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center gap-4 my-6">
        <a href="https://www.instagram.com/mhanifs_/">
          <FaInstagram size={25} color="white" />
        </a>
        <a href="www.linkedin.com/in/muhammad-hanif-sya-bani-7325a7275">
          <FaLinkedin size={25} color="white" />
        </a>
        <a href="https://web.facebook.com/muhammadhanif.hanif.167189">
          <FaFacebook size={25} color="white" />
        </a>
        <a href="https://github.com/hanifsyabani">
          <FaGithub size={25} color="white" />
        </a>
      </div>
      <p className="text-center text-xs xl:text-sm text-[#aaaaaa]">
        Copyright © 2023 created by{" "}
        <a href="https://github.com/hanifsyabani " className="hover:text-white">Muhammad Hanif Sya'bani</a>.
        All right reserved
      </p>
    </footer>
  );
}
