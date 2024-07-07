"use client";
import Image from "next/image";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const data = [
  {
    id: 1,
    icon: "/components/compass.svg",
    title: "Flexible Shipment",
    desc: "Thanks to our advanced technological infrastructure and expert staff, such as supply chain management.",
  },
  {
    id: 2,
    icon: "/components/globe.svg",
    title: "Ship Your Product",
    desc: "Thanks to our advanced technological infrastructure and expert staff, such as supply chain management.",
  },
  {
    id: 3,
    icon: "/components/ticker.svg",
    title: "Track Shipment",
    desc: "Thanks to our advanced technological infrastructure and expert staff, such as supply chain management.",
  },
];
const Sec3 = () => {
  return (
    <div className='w-full p-10 bg-[url("/bg/dots.svg")] bg-repeat flex flex-col space-y-12'>
      <div className="text-4xl md:text-6xl font-bold tracking-tight">
        Comprehensive <br />
        Solutions.
      </div>
      <div className="w-full flex gap-2  items-center">
        <p className="uppercase font-semibold text-sm whitespace-nowrap">
          Explore services
        </p>
        <div className="w-full border-t border-black/60 mt-5">`</div>
      </div>
      <div className="w-full md:px-10 flex flex-col md:flex-row justify-start">
        {data.map((data) => (
          <div key={data.id} className="flex flex-col space-y-6">
            <p className="text-[40px] font-bold text-black">{data.id}</p>
            <Image src={data.icon} width={70} height={70} alt="icon" />
            <h3 className="text-2xl font-semibold">{data.title}</h3>
            <p className="text-lg text-black/50">{data.desc}</p>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        <div className="px-3 py-3 border border-gray-500/50 rounded-full text-center text-xs md:text-base bg-[#FFFFFF]">
          Have a project in mind? You&apos;re welcome to send a {" "}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="text-orange-400 hover:underline">message</TooltipTrigger>
              <TooltipContent>
                <p>india@dolelogistics.com</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
          {" "}or give us a{" "}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="text-orange-400 hover:underline">call</TooltipTrigger>
              <TooltipContent>
                <p>+91 98989899</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default Sec3;
