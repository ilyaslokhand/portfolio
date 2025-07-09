import React from "react";
import facebook from "../Svg/facebook.svg";
import x from "../Svg/x.svg";
import insta from "../Svg/insta.svg";
import linkdin from "../Svg/linkdin.svg";

const Footer = () => {
  return (
    <footer className="px-4 md:px-6 lg:px-8 max-w-[1800px] mx-auto mb-4">
      <div className="flex justify-center flex-col gap-4 md:flex-col lg:flex-row items-center">
        <div className="w-full max-w-[794px] h-[79px] border inherit background-secondary flex justify-center items-center">
          <p className="text-[#999] font-inter text-[12px] sm:text-[14px] lg:text-[16px] text-center w-full px-2">
            © 2025. All Rights Reserved. Designed & Built by -
            <span className="text-[#fff]">Ilyas Lokhand</span>
          </p>
        </div>
        <div className="max-w-[389px] h-[79px] w-full gap-2 sm:gap-4 flex justify-center">
          <a
            href="#"
            className="w-full max-w-[70px] sm:max-w-[85px] h-[79px] border inherit background-secondary flex items-center justify-center transition-all duration-300 hover:bg-blue-600"
          >
            <img
              src={facebook}
              alt="Facebook"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </a>
          <a
            href="#"
            className="w-full max-w-[70px] sm:max-w-[85px] h-[79px] border inherit background-secondary flex items-center justify-center transition-all duration-300 hover:bg-[#0077b5]"
          >
            <img
              src={linkdin}
              alt="LinkedIn"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </a>
          <a
            href="#"
            className="w-full max-w-[70px] sm:max-w-[85px] h-[79px] border inherit background-secondary flex items-center justify-center transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500"
          >
            <img
              src={insta}
              alt="Instagram"
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
          </a>
          <a
            href="#"
            className="w-full max-w-[70px] sm:max-w-[85px] h-[79px] border inherit background-secondary flex items-center justify-center transition-all duration-300 hover:bg-black"
          >
            <img src={x} alt="X" className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
