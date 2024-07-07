"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";

export function Hero() {
  const images = [
    "/components/ship.jpg",
    "/components/truck.jpg",
    "/components/flight.jpg",
  ];
  return (
    <ImagesSlider className="h-[100vh]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="z-50 flex flex-col justify-start items-center"
      >
        <motion.p className="font-bold text-[3.25rem] leading-none md:text-7xl text-start bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-400 py-4 px-10">
          International<br /> Freight Forwarding <br/>& Ports Services
        </motion.p>
        {/* <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Join now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button> */}
      </motion.div>
    </ImagesSlider>
  );
}
