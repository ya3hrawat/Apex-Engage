import React from "react";
import { animate, motion } from "framer-motion";

function TestimonialCard({ testimonial, index }) {

  return (
    <div
      className="flex flex-col bg-[#A7D489] w-full sm:w-1/3 xl:w-1/6 rounded-lg shadow-3xl p-6 origin-center">
      <div className="flex w-full justify-start items-center gap-3 pb-3">
        <div className="w-[4rem] rounded-full">
          <img src={testimonial.img} className="rounded-full" />
        </div>
        <div>
          <p className="font-bold text-lg">{testimonial.name}</p>
          <p className="text-sm font-normal italic">{testimonial.work}</p>
        </div>
      </div>
      <div className="border-t border-black pt-3">
        <p className="font-medium text-sm">{testimonial.message}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
