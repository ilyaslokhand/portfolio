import React, { useRef } from "react";
import HoverCard from "../Card/HoverCard";
import frame1 from "../Images/frame1.jpg";
import frame2 from "../Images/frame2.webp";
import frame3 from "../Images/frame3.jpeg";
import frame4 from "../Images/frame4.webp";
import { motion, useInView } from "framer-motion";

const Work = () => {
  const featuredTitleRef = useRef(null);
  const firstCardRef = useRef(null);
  const secondCardRef = useRef(null);
  const thirdCardRef = useRef(null);
  const fourthCardRef = useRef(null);

  const isFeaturedTitleInView = useInView(featuredTitleRef, {
    once: true,
    amount: 0.3,
  });
  const isFirstCardInView = useInView(firstCardRef, {
    once: true,
    amount: 0.3,
  });
  const isSecondCardInView = useInView(secondCardRef, {
    once: true,
    amount: 0.3,
  });
  const isThirdCardInView = useInView(thirdCardRef, {
    once: true,
    amount: 0.3,
  });
  const isFourthCardInView = useInView(fourthCardRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <section className="px-4 md:px-6 lg:px-8 max-w-[1800px] mx-auto my-6">
      <div className="flex flex-wrap justify-center gap-4 w-full">
        {/* First Project Card */}
        <div className="flex lg:flex-row flex-col md:flex-row gap-4 w-full lg:w-auto">
          <div className="lg:w-[390px] lg:h-[440px] w-full md:w-[48%] bg-black inherit flex gap-4 flex-col">
            <motion.div
              ref={featuredTitleRef}
              className="h-[100px] flex items-center justify-center inherit border background-secondary"
              initial={{ y: 50, opacity: 0 }}
              animate={
                isFeaturedTitleInView
                  ? { y: 0, opacity: 1 }
                  : { y: 50, opacity: 0 }
              }
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
              <h2 className="text-white text-3xl font-semibold instrument-font italic">
                FEATURED WORK
              </h2>
            </motion.div>
            <motion.div
              ref={firstCardRef}
              className="h-[340px]"
              initial={{ y: 50, opacity: 0 }}
              animate={
                isFirstCardInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
              }
              transition={{
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1.0],
                delay: 0.1,
              }}
            >
              <HoverCard
                imageUrl={frame4}
                title="Apple Navigation"
                subtitle="UI/UX Design"
                className="h-full"
                link="https://olive-centre-674634.framer.app/work/apple-navigation"
              />
            </motion.div>
          </div>

          {/* Second Project Card */}
          <motion.div
            ref={secondCardRef}
            className="lg:w-[390px] lg:h-[440px] h-[440px] w-full md:w-[48%] rounded-lg overflow-hidden"
            initial={{ y: 50, opacity: 0 }}
            animate={
              isSecondCardInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
            }
            transition={{
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1.0],
              delay: 0.15,
            }}
          >
            <HoverCard
              imageUrl={frame3}
              title="Online Store"
              subtitle="Web Dev"
              className="h-full"
            />
          </motion.div>
        </div>

        {/* Side Images - Bottom Row */}
        <div className="flex flex-col lg:w-[390px] w-full md:flex md:flex-row stack-at-1266 md:gap-4">
          {/* First bottom card */}
          <motion.div
            ref={thirdCardRef}
            className="w-full md:w-[48%] full-width-at-1266 h-[212px] mb-4 md:mb-0"
            initial={{ y: 50, opacity: 0 }}
            animate={
              isThirdCardInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
            }
            transition={{
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1.0],
              delay: 0.2,
            }}
          >
            <HoverCard
              imageUrl={frame2}
              title="Marketing Poster"
              subtitle="Print Design"
              className="h-full w-full"
            />
          </motion.div>

          {/* Second bottom card */}
          <motion.div
            ref={fourthCardRef}
            className="w-full md:w-[48%] full-width-at-1266 h-[212px]"
            initial={{ y: 50, opacity: 0 }}
            animate={
              isFourthCardInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
            }
            transition={{
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1.0],
              delay: 0.25,
            }}
          >
            <HoverCard
              imageUrl={frame1}
              title="Brand Identity"
              subtitle="Branding"
              className="h-full w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Work;
