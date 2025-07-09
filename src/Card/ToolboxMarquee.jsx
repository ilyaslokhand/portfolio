import Marquee from "react-fast-marquee";
import React from "react";
import icon1 from "../Images/icon1.avif";
import icon2 from "../Images/icon2.avif";
import icon3 from "../Images/icon3.avif";
import icon4 from "../Images/icon4.avif";
import icon5 from "../Images/icon5.avif";
import icon6 from "../Images/icon6.avif";

const ToolboxMarquee = () => {
  const icons = [icon1, icon2, icon3, icon4, icon5, icon6];

  return (
    <div className="bg-black rounded-xl p-7 border inherit w-full max-w-[794px] h-auto min-h-[188px] bg-dark-gradient">
      <h2 className="text-white font-semibold text-3xl mb-4 instrument-font text-center lg:text-left md:text-left">
        TOOLBOX
      </h2>
      <div className="w-full overflow-x-hidden max-w-full">
        <Marquee speed={40} className="w-full" gap={0}>
          {/* Duplicate the icons array to create a continuous appearance */}
          {[...icons, ...icons, ...icons].map((icon, i) => (
            <div
              key={i}
              className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] mx-1 sm:mx-3 p-2 rounded-md border border-[#222] background-secondary flex items-center justify-center"
            >
              <img
                src={icon}
                alt="icon"
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default ToolboxMarquee;
