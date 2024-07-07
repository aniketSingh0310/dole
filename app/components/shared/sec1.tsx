"use client"
import { MoveRight } from 'lucide-react';
import { motion } from 'framer-motion';
import React from 'react';
import { AccordionDemo } from '../ui/accordion';

const Sec1 = () => {
  return (
    <div className='w-full flex flex-col  bg-[url("/bg/lines.svg")]'>
      <div className='w-full  grid grid-cols-1 md:grid-cols-3 font-semibold text-[20px] border-b border-black/50'>
        <motion.div
          className='group flex justify-between px-6 py-6 border-r border-black/50 transition-all duration-300'
          whileHover={{  backgroundColor: '#E8792E',transition:{duration:0.2}}}
        >
          <p>Schedule Booking</p>
          <MoveRight className='size-8 text-black transform -rotate-45 group-hover:rotate-45 transition-transform duration-300' />
        </motion.div>
        <motion.div
          className='group flex justify-between px-6 py-6 border-r border-black/50 transition-all duration-300'
          whileHover={{backgroundColor: '#E8792E',transition:{duration:0.2} }}
        >
          <p>Track Shipment</p>
          <MoveRight className='size-8 text-black transform -rotate-45 group-hover:rotate-45 transition-transform duration-300' />
        </motion.div>
        <motion.div
          className='group flex justify-between px-6 py-6 transition-all duration-500'
          whileHover={{  backgroundColor: '#E8792E',transition:{duration:0.2} }}
        >
          <p>Schedule Booking</p>
          <MoveRight className='size-8 text-black transform -rotate-45 group-hover:rotate-45 transition-transform duration-300' />
        </motion.div>
      </div>
      <div className='w-full p-6 md:p-20 flex flex-col md:flex-row justify-between'>
        <div className='flex flex-col space-y-5'>
      <h2 className='text-6xl font-semibold tracking-tight'>Worlwide<br/> Shipping.</h2>
      <p className='text-[18px] font-light max-w-md'>Thanks to our advanced technological infrastructure and expert staff, such as supply chain<span className='font-semibold'> management, warehousing, distribution,</span> transportation.</p>
        </div>
<div className='w-[90%] md:w-[50%]'>
  <AccordionDemo/>
</div>
      </div>
    </div>
  );
};

export default Sec1;
