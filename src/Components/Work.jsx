import React from "react";
import HoverCard from "../Card/HoverCard";
import frame1 from "../Images/frame1.jpg";
import frame2 from "../Images/frame2.webp";
import frame3 from "../Images/frame3.jpeg";
import frame4 from "../Images/frame4.webp";

const Work = () => {
  return (
    <section className="px-4 md:px-6 lg:px-8 max-w-[1800px] mx-auto my-6">
      <div className="flex flex-wrap justify-center gap-4 w-full">
        {/* First Project Card */}
        <div className="flex lg:flex-row flex-col md:flex-row gap-4 w-full lg:w-auto">
          <div className="lg:w-[390px] lg:h-[440px] w-full md:w-[48%] bg-black inherit flex gap-4 flex-col">
            <div className="h-[100px] flex items-center justify-center inherit border background-secondary ">
              <h2 className="text-white text-3xl font-semibold instrument-font italic">
                FEATURED WORK
              </h2>
            </div>
            <div className="h-[340px]">
              <HoverCard
                imageUrl={frame4}
                title="Apple Navigation"
                subtitle="UI/UX Design"
                className="h-full"
                link="https://olive-centre-674634.framer.app/work/apple-navigation"
              />
            </div>
          </div>

          {/* Second Project Card */}
          <div className="lg:w-[390px] lg:h-[440px] h-[440px] w-full md:w-[48%] rounded-lg overflow-hidden">
            <HoverCard
              imageUrl={frame3}
              title="Online Store"
              subtitle="Web Dev"
              className="h-full"
            />
          </div>
        </div>

        {/* Side Images - Bottom Row */}
        <div className="flex flex-col lg:w-[390px] w-full md:flex md:flex-row stack-at-1266 md:gap-4">
          {/* First bottom card */}
          <div className="w-full md:w-[48%] full-width-at-1266 h-[212px] mb-4 md:mb-0 ">
            <HoverCard
              imageUrl={frame2}
              title="Marketing Poster"
              subtitle="Print Design"
              className="h-full w-full"
            />
          </div>

          {/* Second bottom card */}
          <div className="w-full md:w-[48%] full-width-at-1266 h-[212px]">
            <HoverCard
              imageUrl={frame1}
              title="Brand Identity"
              subtitle="Branding"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
