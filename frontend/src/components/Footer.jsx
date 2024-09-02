import React from "react";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";


function Footer() {
  return (
    <section
      id="FAQ's"
      className="flex justify-center items-center"
      style={{
        background:
          "linear-gradient(to bottom, rgba(232, 223, 252, 1), rgba(232, 223, 252, 1))",
      }}
    >
      <div className="w-full bg-[#4b0082] flex flex-col justify-center items-center text-white p-5 ml-5 mr-5 mb-5 md:mt-5 rounded-lg gap-5">
        <div className="flex text-3xl gap-5">
          <a href="https://www.instagram.com/apexengage/?utm_source=ig_web_button_share_sheet" className="hover:text-[#ff8c00] hover:scale-110 transition duration-200"><AiFillInstagram  /></a>
          <a href="mailto: apexengageofficial@gmail.com" className="hover:text-[#ff8c00] hover:scale-110 transition duration-200"><IoIosMail /></a>
        </div>
        <p className="font-semibold text-sm">Copyright © 2024 | Apex Engage</p>
      </div>
    </section>
  );
}

export default Footer;
