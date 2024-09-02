import React from "react";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

function WhyUs() {
  return (
    <section
      id="WhyUs"
      className="relative flex justify-center"
      style={{
        background:
          "linear-gradient(to bottom, rgba(232, 223, 252, 1), rgba(232, 223, 252, 1))",
      }}
    >
      <div className="w-full h-full px-5 pb-20 flex flex-col items-center mt-[70px] md:mt-[150px] gap-[40px] md:gap-[100px]">
        <div className="flex flex-col gap-0 font-bold scale-90 md:scale-125">
          <p className="relative text-[#4b0082] text-5xl text-shadow shadow-[#4b0082]">
            Why Work{" "}
          </p>
          <p className="text-[#ff8c00] text-4xl text-shadow shadow-[#ff8c00] self-end">
            With Us? 🤔
          </p>
          <p className="font-medium text-sm md:text-xs pt-3 italic text-[#2f4f4f]">
            "If you're not fast, you're dead." - Jeff Bezos
          </p>
        </div>

        <div className="w-full flex flex-wrap justify-center items-center gap-16">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.5 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{
              once: true,
            }}
            className="bg-[#0D0D0D] w-full md:w-1/3 lg:w-1/5 xl:w-1/6 rounded-xl shadow-3xl p-6 origin-center flex flex-col gap-4 border-[4px] border-[#F3F3F3] hover:scale-110 transition duration-200"
          >
            <p className="text-nowrap text-xl text-center pb-2 font-bold text-[#A6A6A6]">Other Agencies</p>
            <p className="text-nowrap font-bold text-[#A6A6A6]">
              ✖️ Expensive <br />
            </p>
            <p className="text-nowrap font-bold text-[#A6A6A6]">
              ✖️ Slow Onboarding <br />
            </p>
            <p className="text-nowrap font-bold text-[#A6A6A6]">
              ✖️ No Transparency <br />
            </p>
            <p className="text-nowrap font-bold text-[#A6A6A6]">
              ✖️ Irregular Updates <br />
            </p>
          </motion.div>
          <motion.div 
            initial={{x: -300}}
            transition={{ duration: 0.5 }}
            whileInView={{x: 0}}
            viewport={{
              once: true,
            }}
            className="bg-[#0D0D0D] w-full md:w-1/3 lg:w-1/5 xl:w-1/6 rounded-xl shadow-3xl p-6 pr-5 origin-center flex flex-col gap-4 border-[4px] border-[#ff8c00] hover:scale-110 transition duration-200">
            <p className="text-nowrap text-xl text-center pb-2 font-bold text-[#ff8c00]">Apex Engage</p>
            <p className="flex items-center gap-2 ml-[3px] font-bold text-[#A6A6A6]">
              <FaCheck className="text-[#ff8c00]" /> Inexpensive <br />
            </p>
            <p className="flex items-center gap-2 ml-[3px] font-bold text-[#A6A6A6]">
              <FaCheck className="text-[#ff8c00]" /> Fast Onboarding <br />
            </p>
            <p className="flex items-center gap-2 ml-[3px] font-bold text-[#A6A6A6]">
              <FaCheck className="text-[#ff8c00]" /> Transparent Workspace <br />
            </p>
            <p className="flex items-center gap-2 ml-[3px] font-bold text-[#A6A6A6]">
              <FaCheck className="text-[#ff8c00]" /> Instant Updates <br />
            </p>
            <p className="flex items-center gap-2 ml-[3px] font-bold text-[#A6A6A6]">
              <FaCheck className="text-[#ff8c00]" /> Quick Support <br />
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
