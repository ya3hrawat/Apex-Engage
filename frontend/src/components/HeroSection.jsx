import React from "react";
import { animate, easeIn, easeInOut, motion } from "framer-motion";

function HeroSection() {
  const headVars = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    final: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        easeInOut
      },
    },
  };
  return (
    <div>
      <section
        id="Hero"
        className="relative h-screen flex justify-center items-center customBgTop"
      >
        <motion.div
          variants={headVars}
          initial="initial"
          whileInView="final"
          viewport={{
            once: true,
          }}
          className="flex flex-col justify-center h-full w-full items-center px-5 origin-center"
        >
          <p className="text-3xl sm:text-4xl md:text-7xl font-bold text-[#4b0082] text-center text-shadow shadow-[#4b0082]  mb-7">
            Accelerating{" "}
            <span className="text-[#4b0082] text-shadow shadow-[#4b0082]">
              Engagement
            </span>
            <br /> by Tailoring Content
          </p>
          <p className='w-[350px] md:w-[600px] sm:text-lg md:text-xl text-[#2f4f4f] font-["lato"] font-semibold tracking-normal text-center'>
            Our strategic approach ensures measurable growth and enhanced
            interaction within a streamlined 60-90 day period.
          </p>
          <a href="https://calendly.com/apexengageofficial/30min">
            <button
              id="heroBtn"
              className="btn text-[#fff] rounded-full mt-8 border-none hover:scale-110 md:scale-100 scale-90"
              style={{
                backgroundColor: "#ff7d59",
                backgroundImage:
                  "linear-gradient(319deg, #4b0082 0%, #ff583a 37%, #4b0082 100%)",
              }}
            >
              Accelerate Now!
            </button>
          </a>
        </motion.div>
      </section>
    </div>
  );
}

export default HeroSection;
