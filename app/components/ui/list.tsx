import React from 'react'
import Tick from './tick'

const row1=[
    {
    id:1,
    name:"Cost-effective Solutions"
},
{   id:2,
    name:"Transshipment Hubs"
},
{
    id:3,
    name:"High Cargo Capacity"
},
{
    id:4,
    name:"Reliable Schedules"
},
]
const row2=[
    {
        id:1,
    name:"Environmental Friendliness"
},
{
    id:2,
    name:"Access to Remote Destinations"
},
{
    id:3,
    name:"Suitable for Heavy Goods"
},
{
    id:4,
    name:"Flexibility in Packaging"
},
]
const row3=[
    {
        id:1,
    name:"Trade Routes Optimization"
},
{
    id:2,
    name:"Cost-effective Solutions"
},
{
    id:3,
    name:"Long-term Contracts"
},
{
    id:4,
    name:"Suitable for Heavy Goods"
},
]
const List = () => {
  return (
    <div className=' w-full  group pt-10'>
      <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-5 hover:bg-[#F2F2F2] p-4 cursor-pointer my-3'>
        {row1.map((list)=>(
            <div key={list.id} className=''>
               <div className='flex gap-2 items-center hover:scale-105 transition-all ease-in duration-200'>
               <Tick/>
               <p className=''>{list.name}</p>
               </div>
                
            </div>

        ))}
        </div>
        <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-5 hover:bg-[#F2F2F2] p-4 cursor-pointer my-3'>
        {row2.map((list)=>(
            <div key={list.id} className=''>
               <div className='flex gap-2 items-center hover:scale-105 transition-all ease-in duration-200'>
               <Tick/>
               <p className=''>{list.name}</p>
               </div>
                
            </div>

        ))}
        </div>
        <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-5 hover:bg-[#F2F2F2] p-4 cursor-pointer my-3'>
        {row3.map((list)=>(
            <div key={list.id} className=''>
               <div className='flex gap-2 items-center hover:scale-105 transition-all ease-in duration-200'>
               <Tick/>
               <p className=''>{list.name}</p>
               </div>
                
            </div>

        ))}
        </div>
    </div>
  )
}

export default List;
