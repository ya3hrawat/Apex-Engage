import React from "react";
import TestimonialCard from "./Shared/TestimonialCard";
import { MdRateReview } from "react-icons/md";
import { testimonialsData } from "../constants/data";

function Testimonials() {
  return (
    <section
      id="Testimonials"
      className="relative flex justify-center" //Removed min-h-screen from here for better ui/ux
      style={{background: 'linear-gradient(to bottom, rgba(232, 223, 252, 1), rgba(232, 223, 252, 1))'}}
    >
      <div className="flex flex-col w-full h-full items-center px-5 pb-5 mt-[70px] md:mt-[150px] gap-[50px] md:gap-[150px] justify-start">
        <div className="flex font-bold scale-75 md:scale-110">
          <p className="flex items-center text-[#ff8c00] text-5xl gap-2 md:text-6xl text-shadow shadow-[#ff8c00]">
            Testimonials <MdRateReview className="text-[#378200]"/>
          </p>
        </div>
        <div className="flex w-full justify-center md:gap-20 gap-10 flex-wrap">
          {testimonialsData.map((testimonial, index) => {
            return (
              <TestimonialCard index={index} testimonial={testimonial}/>
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
