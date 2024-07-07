import Image from "next/image";
import React from "react";

const data = [
  {
    id: 1,
    title: "Pickup and Delivery",
    img: "/sec4/img1.svg",
  },
  {
    id: 2,
    title: "Container Shipping",
    img: "/sec4/img2.svg",
  },
  {
    id: 3,
    title: "Ocean Freight",
    img: "/sec4/img3.svg",
  },
  {
    id: 4,
    title: "Air Freight",
    img: "/sec4/img4.svg",
  },
];
const Sec4 = () => {
  return (
    <div className='w-full px-6 md:px-20 py-28 bg-[url("/bg/orange3.svg")] bg-cover flex flex-col space-y-7'>
      <h3 className="text-6xl font-bold text-white tracking-tight text-center md:text-start">
        Flexibility in <br />
        logistics.
      </h3>
      
    <div className="w-full flex flex-col md:flex-row md:justify-between flex-wrap space-y-4 md:space-y-0 ">
        
        {data.map((data) => (
          <div key={data.id}>
            <div className="flex flex-col space-y-6 text-white hover:scale-105 duration-200 transition-all ease-in justify-center items-center">
              <Image
                src={data.img}
                alt="icon"
                width={70}
                height={70}
                className="text-white flex justify-center"
              />
              <p className="text-[24px] font-semibold">{data.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sec4;
