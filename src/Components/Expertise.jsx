import React, { useRef } from "react";
import ToolboxMarquee from "../Card/ToolboxMarquee";
import Expertises from "../Json/Expertises.json";
import sign from "../Images/sign.avif";
import { motion, useInView } from "framer-motion";

const Expertise = () => {
  const expertiseRef = useRef(null);
  const availableRef = useRef(null);
  const contactRef = useRef(null);
  const motivationRef = useRef(null);
  const certificationsRef = useRef(null);

  const isExpertiseInView = useInView(expertiseRef, {
    once: true,
    amount: 0.3,
  });
  const isAvailableInView = useInView(availableRef, {
    once: true,
    amount: 0.3,
  });
  const isContactInView = useInView(contactRef, { once: true, amount: 0.3 });
  const isMotivationInView = useInView(motivationRef, {
    once: true,
    amount: 0.3,
  });
  const isCertificationsInView = useInView(certificationsRef, {
    once: true,
    amount: 0.3,
  });

  return (
    <section className="px-4 md:px-6 lg:px-8 max-w-[1800px] mx-auto my-6">
      <div className="flex flex-wrap justify-center gap-4 w-full">
        <div className="flex flex-col gap-4 w-full lg:w-auto">
          <div className=" sm:p-0">
            <ToolboxMarquee />
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <motion.div
              ref={expertiseRef}
              className="w-full md:w-[48%] lg:w-[389px] h-[636px] border inherit background-secondary p-7"
              initial={{ x: -50, opacity: 0 }}
              animate={
                isExpertiseInView
                  ? { x: 0, opacity: 1 }
                  : { x: -50, opacity: 0 }
              }
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
            >
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
                    <p className="text-[#999999] inter-font text-[12px] lg:text-[14px] md:text-[12px] ml-2 mb-2">
                      {expertise.description}
                    </p>
                    <div className="h-[1px] bg-[#1d1d1d] w-full"></div>
                  </div>
                ))}
              </div>
            </motion.div>
            <div className="w-full md:w-[48%] lg:w-[389px] h-[636px] gap-4 flex flex-col">
              <motion.div
                ref={availableRef}
                className="h-[84px] border inherit background-secondary p-7 flex items-center gap-3"
                initial={{ y: 50, opacity: 0 }}
                animate={
                  isAvailableInView
                    ? { y: 0, opacity: 1 }
                    : { y: 50, opacity: 0 }
                }
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
              >
                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                <h4 className="text-white text-[16px] lg:text-[20px] md:text-[20px] font-medium instrument-font ">
                  AVAILABLE FOR FREELANCE
                </h4>
              </motion.div>
              <motion.div
                ref={contactRef}
                className="h-[536px] border inherit background-secondary p-7"
                initial={{ y: 50, opacity: 0 }}
                animate={
                  isContactInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }
                }
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1.0],
                  delay: 0.1,
                }}
              >
                <h3
                  className="text-white text-3xl  instrument-font mb-4"
                  style={{ fontWeight: "600" }}
                >
                  CONTACT
                </h3>
                <form className="flex flex-col gap-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-[#999] font-medium text-[10px] inter-font"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Samkeet Mehta"
                      className="w-full h-[40px] p-3 rounded bg-[#222] text-white custom-input"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-[#999] font-medium text-[10px] inter-font"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      placeholder="samkeetm@gmail.com"
                      className="w-full h-[40px] p-3 rounded bg-[#222] text-[#999] custom-input"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-[#999] font-medium text-[10px] inter-font"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows="4"
                      placeholder="Tell me more about your project..."
                      className="w-full h-[100px] p-3 rounded bg-[#222] text-[#999] custom-input resize-none"
                    ></textarea>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="budget"
                      className="text-[#999] font-medium text-[10px] inter-font"
                    >
                      Project Budget (optional)
                    </label>
                    <select
                      id="budget"
                      className="w-full h-[45px] p-3 rounded bg-[#222] text-[#999] custom-input appearance-none"
                    >
                      <option>₹10,000-15,000</option>
                      <option>₹15,000-25,000</option>
                      <option>₹25,000-50,000</option>
                      <option>₹50,000+</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full p-3 mt-2 bg-white text-black inter-font  font-medium cursor-pointer"
                    style={{ borderRadius: "10px", fontWeight: "600" }}
                  >
                    Submit
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-col flex-col md:flex-row gap-4 w-full lg:w-auto">
          <motion.div
            ref={motivationRef}
            className="w-full md:w-[48%] lg:w-[389px] h-[428px] border inherit p-7 background-secondary"
            initial={{ x: 50, opacity: 0 }}
            animate={
              isMotivationInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }
            }
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] }}
          >
            <h3
              className="text-3xl instrument-font  text-white "
              style={{ fontWeight: "600" }}
            >
              Motivation
            </h3>
            <p className="text-[#999] lg:text-[14px]  text-[13px] md:text-[12px] font-inter mt-0.5 font-normal">
              Driven by a passion for innovative design and a commitment to
              delivering high-quality work, I find motivation in the challenges
              each project presents. Every pixel, every interaction, every piece
              of code tells a story, and I am fueled by the opportunity to craft
              experiences that not only captivate but also solve real-world
              problems. For me, it's about pushing boundaries, embracing
              creativity, and continuously evolving to stay ahead in an
              ever-changing digital landscape. Each project is a new canvas, and
              my goal is always the same—to inspire, engage, and make a lasting
              impact.
            </p>
            <img
              src={sign}
              className="w-[190px] h-[60px] bg-cover bg-no-repeat mt-6"
            />
          </motion.div>
          <motion.div
            ref={certificationsRef}
            className="w-full md:w-[48%] lg:w-[389px] lg:h-[397px] md:h-[428px] border inherit p-7 background-secondary"
            initial={{ x: 50, opacity: 0 }}
            animate={
              isCertificationsInView
                ? { x: 0, opacity: 1 }
                : { x: 50, opacity: 0 }
            }
            transition={{
              duration: 0.4,
              ease: [0.25, 0.1, 0.25, 1.0],
              delay: 0.1,
            }}
          >
            <h3
              className="text-3xl instrument-font  text-white "
              style={{ fontWeight: "600" }}
            >
              CERTIFICATIONS
            </h3>
            <div className="h-[1px] bg-[#1d1d1d] w-full mt-2 md:mb-4"></div>
            <div>
              <h4 className="instrument-font text-white mt-2 text-[20px] font-bold">
                Awwwards - Site of the Day
              </h4>
              <p className="text-[#999] text-[14px] md:text-[12px] lg:text-[14px] font-inter mt-0.5 font-normal">
                Recognized for outstanding creativity, design, and user
                experience for a cutting-edge website created for a major brand,
                showcasing excellence in digital design.
              </p>
              <div className="h-[1px] bg-[#1d1d1d] w-full mt-3 md:mb-4"></div>
            </div>
            <div>
              <h4 className="instrument-font text-white mt-2 text-[20px] font-bold">
                Webby Awards - Best Portfolio
              </h4>
              <p className="text-[#999] text-[14px] md:text-[12px] lg:text-[14px] font-inter mt-0.5 font-normal">
                Awarded for innovation and exceptional design in crafting a
                personal portfolio website that demonstrates both technical
                skill and aesthetic vision.
              </p>
              <div className="h-[1px] bg-[#1d1d1d] w-full mt-3 md:mb-4"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
