import React from "react";
import ToolboxMarquee from "../Card/ToolboxMarquee";
import Expertises from "../Json/Expertises.json";

const Expertise = () => {
  return (
    <section className="px-4 md:px-6 lg:px-8 max-w-[1800px] mx-auto my-6">
      <div className="flex flex-wrap justify-center gap-4 content-container lg:w-auto">
        <div className="flex flex-col gap-4">
          <ToolboxMarquee />
          <div className="flex flex-row gap-4">
            <div className="w-[389px] h-[636px] border inherit background-secondary p-7">
              <h3 className="text-white text-3xl font-bold mb-3">EXPERTISE</h3>
              <div className="h-[1px] bg-[#1d1d1d] w-full mb-2 md:mb-4"></div>
              <div className="flex flex-col gap-6">
                {Expertises.map((expertise) => (
                  <div key={expertise.id} className="text-white">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="inline-flex items-center justify-center w-5 h-5 rounded-full font-bold text-sm"
                        style={{ border: "1px solid white" }}
                      >
                        {expertise.id}
                      </span>
                      <h4 className="text-[20px] instrument-font font-semibold">
                        {expertise.title}
                      </h4>
                    </div>
                    <p className="text-[#999999] inter-font text-[14px] ml-2 mb-2">
                      {expertise.description}
                    </p>
                    <div className="h-[1px] bg-[#1d1d1d] w-full"></div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-[389px] h-[636px] gap-4 flex flex-col ">
              <div className="h-[84px] border inherit background-secondary p-7 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <h4 className="text-white text-[20px] font-medium instrument-font ">
                  AVAILABLE FOR FREELANCE
                </h4>
              </div>
              <div className="h-[536px] border inherit background-secondary p-7"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
