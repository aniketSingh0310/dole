import React from "react";
import Form from "../ui/form";
import Image from "next/image";

const Sec6 = () => {
  return (
    <div className="max-w-7xl flex flex-col  justify-between items-center mx-auto py-20">
     <div className="w-[90%] md:w-full flex justify-start md:justify-between flex-col md:flex-row items-center space-y-5">
     <p className="w-full text-4xl md:text-6xl text-black tracking-tighter font-bold">Get instant<br/> freight quote.</p>
     <p className="text-black/50 text-xl max-w-lg">Looking for partnership? Thanks to our advanced technological infrastructure and expert staff, such as supply chain management, warehousing, distribution, transportation.</p>
     </div>
     
     <Form/>
    </div>
  );
};

export default Sec6;
