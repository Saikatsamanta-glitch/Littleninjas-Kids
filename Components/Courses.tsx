import CourseTab from "./couseTab";
import {useContext} from 'react';
import { Course_context } from "@/context/course_context";
export default function Courses() {
        const res = useContext(Course_context);
        
  return (
    <div className="h-auto mt-10 md:px-16">
        <h1 className="text-center mb-10"> Courses 🔥</h1>
        <div className="flex md:flex-row flex-col">
                <div className="md:w-1/4 h-auto w-screen flex flex-wrap md:flex-nowrap flex-col items-center justify-center mr-5">
                        {
                                res?.data?.map((v)=>{
                                        return (
                                                <div className="w-[95%] h-14 border-l-8 mb-3 border-[#FF847E] overflow-hidden rounded-lg flex items-center justify-between text-2xl hover:bg-[#ffeec2] hover:scale-110 cursor-pointer px-2"> <span>{v.title}</span> <h1 className="text-gray-600">{">"}</h1> </div>
                                        )
                                })
                        }
                        
                        
                </div>
                <div className="md:w-3/4 w-screen h-[500px] gap-x-0 md:space-x-5 flex items-center overflow-x-auto ">
                     <CourseTab/>   
                     <CourseTab/>  
                     <CourseTab/>   
                     <CourseTab/> 
                     <CourseTab/>   
                     <CourseTab/> 
                
                </div>
               
               
        </div>
        
    </div>
  )
}
