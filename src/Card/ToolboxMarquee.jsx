import Marquee from "react-fast-marquee";
import React from "react";

const ToolboxMarquee = () => {
  const icons = [
    "../src/Images/icon1.avif",
    "../src/Images/icon2.avif",
    "../src/Images/icon3.avif",
    "../src/Images/icon4.avif",
    "../src/Images/icon5.avif",
    "../src/Images/icon6.avif",
  ];

  return (
    <div className="bg-black rounded-xl p-7 border inherit w-[794px] h-[188px] bg-dark-gradient">
      <h2 className="text-white font-semibold text-3xl mb-4 instrument-font">
        TOOLBOX
      </h2>
      <div className="w-full overflow-hidden">
        <Marquee speed={40} className="w-full" gap={0}>
          {/* Duplicate the icons array to create a continuous appearance */}
          {[...icons, ...icons, ...icons].map((icon, i) => (
            <div
              key={i}
              className="w-[80px] h-[80px] mx-4 p-2 rounded-md border border-[#222] background-secondary flex items-center justify-center"
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
