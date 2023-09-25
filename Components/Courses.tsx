"use client"
import CourseTab from "./couseTab";
import axios from "axios";
import {useContext, useState,useEffect} from 'react';
import { Course_context } from "@/context/course_context";
export default function Courses() {
        const res = useContext(Course_context);
        const [level_data,setLevel_Data] = useState<any[]>([]);
        const [level,setLevel]= useState<Number>(1);
        useEffect(() => {
         (async()=>{
               const res= await axios(`https://littleninjas-backend.onrender.com/courses/${level}`);
        //        console.log(res.data);
               setLevel_Data(res.data)
         })()
        }, [level])   
  return (
    <div className="h-auto mt-10 md:px-16">
        <h1 className="text-center mb-10"> Courses 🔥</h1>
        <div className="flex md:flex-row flex-col">
                <div className="md:w-1/4 h-auto w-screen flex flex-wrap md:flex-nowrap md:flex-col items-center justify-center md:mr-5  sm:mb-4 sm:mr-0">
                        {
                                res?.map((v,i)=>{
                                        return (
                                                <div key={v.title}  onClick={()=>{setLevel(v.course_id)}} className={`md:w-[95%] course_tab  sm:w-auto  md:h-14 md:border-l-8 m-2 md:mb-3 md:border-[#FF847E] overflow-hidden rounded-lg  flex items-center justify-between md:text-2xl hover:bg-[#ffeec2] hover:scale-110 cursor-pointer px-2 transition-all duration-150
                                                 ${ i+1==level && "scale-110 bg-[#ffeec2]"  }`  }> <span className="text-lg">{v.title}</span> <h1 className="text-gray-600 md:block hidden">{">"}</h1> </div>
                                        )
                                })
                                
                        }    
                </div>
                <div className="md:w-3/4 w-screen h-[600px] gap-x-0 md:space-x-5 flex items-center overflow-x-auto ">
                     {
                        level_data.map(v=>{
                                return v.level_id &&  <  CourseTab key={v?.character_logo} data={v} />
                        })
                     } 
                
                </div>
               
               
        </div>
        
    </div>
  )
}
