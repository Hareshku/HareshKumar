import React from 'react'
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full height object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Haresh Kumar</h3>
        <p className="text-base text-gray-400 tracking-wide">
        I am a Software Engineer specializing in MERN Stack Development, with six months of experience as a React Developer. I create responsive, user-friendly applications and continuously enhance my web development skills.</p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+92-3065805656</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">hareesh7737@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
          <a href="https://www.facebook.com/share/1E6w8NiGtU/" target="blank">
            <FaFacebookF />
            </a>
          </span>
          <span className="bannerIcon">
          <a href="https://github.com/Hareshku" target="blank">
            <FaGithub />
            </a>
          </span>
          <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/haresh-kumar-9bb353251/" target="blank">
            <FaLinkedinIn />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft