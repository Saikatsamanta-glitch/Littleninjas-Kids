'use client';

import Link from 'next/link'
import React from 'react'
import { useState } from 'react';

import EventCard from '@/Components/EventCard';

const Events = () => {
     const [index,setindex]=useState(0)
   
   
   const Courses=[
      {
        title:'Upcoming',
        events:[
        {
            title:'Get Hands-on with Microservices',
             start_time:'September 23, 2023  2:00 PM (IST)',
             end_time:' September 24, 2023  1:00 PM (IST)',
             count:827,
             image:'/Scaler_workshop_event.webp'
        },
        {
            title:'Roadmap to Data Engineering',
            start_time:'September 23, 2023  5:00 PM (IST)',
            end_time:'September 23, 2023  8:00 PM (IST)',
            count:2187,
            image:'/Scaler_workshop_event.webp'  
        },
        

        ]
      },
      {
        title:'past',
        events:[
        {
            title:'Get Hands-on with Micro',
             start_time:'September 23, 2023  2:00 PM (IST)',
             end_time:' September 24, 2023  1:00 PM (IST)',
             count:827,
             image:'/Scaler_workshop_event.webp'
        },
        {
            title:'Roadmap to web developement',
            start_time:'September 23, 2023  5:00 PM (IST)',
            end_time:'September 23, 2023  8:00 PM (IST)',
            count:2187,
            image:'/Scaler_workshop_event.webp'
        },
        

        ]
      }
   ]
  
   
     
  return (
    <div className='w-full h-full mt-10 mb-20 flex flex-col items-center gap-y-10 md:px-10 px-0 '>
      <h1 className='w-full  text-3xl font-bold text-center'>
       Events on LittleNinjas 
      </h1>
      <div className='w-full h-full flex flex-col items-center gap-y-7 '>
       <div className='md:w-[90%] w-full h-[50px] flex rounded-sm text-black bg-slate-50 shadow-lg items-center md:px-5 px-0 cursor-pointer justify-evenly'>
        {
            Courses.map((obj,i)=>(
                <Link key={obj.title} href='' className={`text-center ${i==index && 'active_class'}`} onClick={(e)=>{
                   setindex(i)           
                }}>
                {obj.title}
              </Link>
            ))
        }
        
         <Link href='' className={`text-center ${index==2 && 'active_class'}`}
         onClick={()=>{
            setindex(2) 
         }}
         >
         All
         </Link>
       </div>
       <div className='flex flex-wrap md:px-5 px-0 gap-6 w-full  justify-center '>
        {
            Courses[index]?.events?.map((obj,i)=>{
                return(
                 <EventCard  obj={obj} key={obj.title}/>
                )
            })
        }
       </div>
      </div>
    </div>
  )
}

export default Events
