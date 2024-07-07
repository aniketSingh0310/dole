"use client";
import Image from "next/image";
import React from "react";
import CountUp from "react-countup";
import List from "../ui/list";

const Sec2 = () => {
  return (
    <div className="w-full px-6 md:px-24 flex flex-col md:flex-row  py-10 bg-[#FFFFFF]  justify-between gap-10">
      <div className="w-full md:w-[35%] relative">
        <div id="count" className="">
          <p className="text-[16px] font-light text-black/60 -mb-10">
            Years Of Experience
          </p>
          <CountUp
            start={0}
            end={24}
            duration={4}
            className="text-[160px] font-bold"
          />
        </div>
        <Image src={"/components/truck.png"} width={450} height={170} alt="truck" className="relative grayscale"/>
      </div>
      <div className="w-full md:w-[65%] flex flex-col  space-y-4">
        <p className="p-2 bg-[#F2F2F2] text-[14px] font-semibold w-fit text-end">LEADING EXPERIENCE</p>
        <p className="text-6xl font-bold md:whitespace-nowrap tracking-tight">Why Choose Dole Logistics? </p>
        <List/>
      </div>
      
    </div>
  );
};

export default Sec2;
