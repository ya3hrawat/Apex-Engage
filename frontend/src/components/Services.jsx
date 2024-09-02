import React from "react";
import { SlGraph } from "react-icons/sl";
import ServiceCard from "./Shared/ServiceCard";
import { ServicesData } from "../constants/data";

function Services() {
  return (
    <section
      id="Services"
      className="relative min-h-screen flex justify-center items-center customBgMid"
    >
      <div className="flex flex-col w-full h-full px-5 pb-5 gap-[50px] md:gap-[120px] items-center justify-start mt-[75px] md:mt-[15px]">
        <div className="flex flex-col gap-0 font-bold scale-90 md:scale-125">
          <p className="relative text-[#4b0082] text-7xl text-shadow shadow-[#4b0082]">
            Start <SlGraph className="absolute top-0 right-2 text-[#378200]" />
          </p>
          <p className="text-[#ff8c00] text-4xl text-shadow shadow-[#ff8c00] self-end">
            Growing Today
          </p>
        </div>
        <div className="flex flex-wrap justify-evenly gap-10">
          {ServicesData.map((service, index) => {
            return <ServiceCard index={index} data={service} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;
