import React from "react";
import demo from "../Images/demo.avif";
import arrow from "../Images/arrow.svg";
import Experience from "../Json/Experience.json";

const Hero = () => {
  return (
    <section className="px-4 md:px-6 lg:px-8 max-w-[1800px] mx-auto">
      <div className="flex layout-break justify-center mt-5 gap-4 ">
        {/* Left Column */}
        <div className="flex flex-col gap-4 w-full content-container lg:w-auto">
          {/* Top Row */}
          <div className="flex flex-col md:flex-row gap-4 full-width-item">
            {/* Sam Creates Box */}
            <div className="w-full md:w-[490px] h-[300px] contact-box md:h-[375px] border border-[1px] flex items-end px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[30px] md:pb-[40px] bg-[linear-gradient(180deg,_#000,_#050505)] rounded-xl">
              <p className="text-[#fff7ff] font-bold text-6xl md:text-8xl uppercase instrument-font tracking-[-2px] leading-[0.85]">
                Sam <br /> Creates
              </p>
            </div>

            {/* Image Box */}
            <div className="w-full md:w-[288px] h-[250px] md:h-[375px] rounded-xl overflow-hidden">
              <img
                src={demo}
                alt="Profile"
                className="w-full h-full object-cover object-center rounded-inherit"
              />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="flex flex-col md:flex-row gap-4 bio-contact-row full-width-item">
            {/* Bio Box */}
            <div className="bio-box w-full md:w-[389px] h-auto md:h-[281px] text-[#ffffff] px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[30px] md:pb-[40px] flex items-center border border-solid rounded-xl bg-[#121212]">
              <p className="text-xs sm:text-sm inter-font">
                I'm Samkeet Mehta, a 3D artist, AR creator, and graphic designer
                with a background in computer engineering. I specialize in brand
                identity, CGI marketing, and augmented reality, with experience
                in social media management, packaging design, and product
                animation. I've worked on rebranding projects, XR presentations,
                and AR healthcare concepts using Unity. Passionate about
                blending creativity with technology, I strive to craft immersive
                digital experiences that push the boundaries of design and
                storytelling.
              </p>
            </div>

            {/* Contact Box */}
            <div className="contact-box w-full md:w-[390px] h-auto md:h-[281px] bg-[#1a1a1a] px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] pb-[30px] md:pb-[40px] flex flex-col justify-between rounded-xl">
              <div className="flex justify-between items-start">
                <p className="text-[14px] md:text-[16px] font-medium text-[#cccccc] inter-font">
                  Wanna Get
                  <br /> In Touch
                </p>
                <img
                  src={arrow}
                  alt="Arrow"
                  className="h-5 w-5 md:h-6 md:w-6"
                />
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-2xl md:text-3xl font-bold uppercase instrument-font text-white">
                  Email Me
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Experience */}
        <div className="experience-card  w-full lg:w-[389px] h-auto lg:h-[673px] border rounded-xl bg-[#121212] mt-4 lg:mt-0">
          <div className="px-[20px] md:px-[30px] pt-[20px] md:pt-[30px] h-full flex flex-col">
            <h2 className="text-[#fff7ff] font-bold text-3xl md:text-4xl uppercase mb-2">
              EXPERIENCE
            </h2>
            <div className="h-[1px] bg-[#1d1d1d] w-full mb-6 md:mb-10"></div>
            <div className="overflow-y-auto pr-2 flex-grow max-h-[500px] lg:max-h-none">
              <div className="flex flex-col">
                {Experience.map((exp, index) => (
                  <div key={index} className="text-[#ffffff] mb-4 lg:mb-0">
                    <h3 className="text-[18px] md:text-[20px] font-bold instrument-font">
                      {exp.role}
                    </h3>
                    <p className="text-base md:text-lg inter-font italic text-[#cccccc]">
                      {exp.company}, {exp.location}
                    </p>
                    <p className="text-xs md:text-sm text-[#aaaaaa] inter-font">
                      {exp.duration}
                    </p>
                    <ul className="list-disc pl-5 inter-font">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="text-xs md:text-sm mb-2 text-[#aaaaaa]"
                        >
                          {resp}
                        </li>
                      ))}
                    </ul>
                    {index !== Experience.length - 1 && (
                      <div className="h-[1px] bg-[#1d1d1d] w-full mt-4 md:mt-6 mb-4 md:mb-6"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
