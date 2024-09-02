import React from "react";
import Timeline from "./Shared/Timeline";

function Process() {
  return (
    <section
      id="Process"
      className="relative min-h-screen flex justify-center items-center"
      style={{
        background:
          "linear-gradient(to bottom, rgba(232, 223, 252, 1), rgba(232, 223, 252, 1))",
      }}
    >
      <div className="flex flex-col w-full px-5 gap-5 items-center mt-[70px] md:mt-28">
        <div className="flex flex-col gap-0 font-bold scale-75 md:scale-110">
          <p className="text-[#4b0082] text-7xl text-shadow shadow-[#4b0082]">
            Growth
          </p>
          <p className="text-[#ff8c00] text-4xl text-shadow shadow-[#ff8c00] self-end">
            Formula
          </p>
        </div>
        <Timeline />
      </div>
    </section>
  );
}

export default Process;
