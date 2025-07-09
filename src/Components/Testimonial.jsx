import React, { useRef } from "react";
import testimonials from "../Json/testimonials.js";
import Marquee from "react-fast-marquee";
import { motion, useInView } from "framer-motion";

const Testimonial = () => {
  const testimonialRef = useRef(null);
  const isTestimonialInView = useInView(testimonialRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <section className="px-4 md:px-6 lg:px-8 max-w-[1800px] mx-auto my-6">
      <div className="flex justify-center">
        <motion.div
          ref={testimonialRef}
          className="border inherit w-full max-w-[1200px] h-[343px] background-secondary p-6"
          initial={{ x: 50, opacity: 0 }}
          animate={
            isTestimonialInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }
          }
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
        >
          <h2 className="text-white font-bold text-3xl mb-6 instrument-font text-left instrument-font ">
            TESTIMONIALS
          </h2>
          <div className="">
            <Marquee speed={30} className="w-full" gap={0}>
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className=" max-w-[300px] h-[235px] mx-4 p-5 rounded-md border border-[#222] background-secondary flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between ">
                    <div>
                      <h4 className="text-white font-bold instrument-font text-[20px]">
                        {testimonial.name}
                      </h4>
                      <p className="text-[#999] text-xs">{testimonial.title}</p>
                    </div>
                    <div className="w-[45px] h-[45px]">
                      <testimonial.Logo />
                    </div>
                  </div>
                  <div className="h-[1px] bg-[#1d1d1d] w-full "></div>
                  <div>
                    <p className="text-[#999]  font-inter text-sm">
                      "{testimonial.quote}"
                    </p>
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
