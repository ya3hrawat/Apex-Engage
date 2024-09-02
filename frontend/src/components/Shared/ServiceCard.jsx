import React from "react";
import { IoIosCall } from "react-icons/io";
import { delay, motion } from "framer-motion";

function ServiceCard({ data, index }) {
  const cardsVars = {
    initial: {
      opacity: 0,
      scale: 0,
    },
    animate: (index) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5 * (index+1),
      },
    }),
  };

  return (
    <motion.div
      className="bg-[#4b0082] w-full xl:w-1/4 rounded-lg shadow-3xl p-6 origin-center"
      key={index}
      variants={cardsVars}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
    >
      <div className="flex items-center justify-between mb-4 md:mb-7 gap-10">
        <div className="flex flex-col gap-0 font-bold scale-75 md:scale-110">
          <p className="text-[#f0f0f5] text-4xl">
            {data.headlineFirst}
          </p>
          <p className="text-[#f0f0f5] text-3xl self-end">
            {data.headlineSecond}
          </p>
        </div>
        <a href="https://calendly.com/apexengageofficial/30min">
          <button className="btn bg-[#f0f0f5] hover:scale-125 text-[#4b0082] hover:text-[#fff] hover:bg-[#4b0082] transition duration-200">
            <IoIosCall className="text-3xl" />
          </button>
        </a>
      </div>
      <div className="border-t-2 border-[#f0f0f5] text-[#f0f0f5] text-[14px] md:text-[16px] font-semibold mt-4 pt-4">
        <p class="mt-2">➔ {data.infolineFirst}</p>
        <p class="mt-2">➔ {data.infolineSecond}</p>
        <p class="mt-2">➔ {data.infolineThird}</p>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
