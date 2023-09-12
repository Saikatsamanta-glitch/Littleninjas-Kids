import CourseTab from "./couseTab";

export default function Courses() {
  return (
    <div className="h-auto mt-10 md:px-16">
        <h1 className="text-center mb-10"> Courses 🔥</h1>
        <div className="flex md:flex-row flex-col">
                <div className="md:w-1/4 h-auto w-screen flex flex-col items-center justify-center">
                        <div className="w-[95%] h-14 border-l-8 mb-3 border-[#FF847E] overflow-hidden rounded-sm flex items-center justify-between text-3xl hover:bg-[#ffeec2] hover:scale-110 cursor-pointer px-2"> <span>🔥Popular Courses</span> <h1 className="text-gray-600">{">"}</h1> </div>
                        <div className="w-[95%] h-14 border-l-8 mb-3 border-[#FF847E] overflow-hidden rounded-sm flex items-center justify-between text-3xl hover:bg-[#ffeec2] hover:scale-110 cursor-pointer px-2"> <span>🔥Popular Courses</span> <h1 className="text-gray-600">{">"}</h1> </div>
                        <div className="w-[95%] h-14 border-l-8 mb-3 border-[#FF847E] overflow-hidden rounded-sm flex items-center justify-between text-3xl hover:bg-[#ffeec2] hover:scale-110 cursor-pointer px-2"> <span>🔥Popular Courses</span> <h1 className="text-gray-600">{">"}</h1> </div>
                </div>
                <div className="md:w-3/4 w-screen h-[500px] gap-x-0 md:gap-x-2 flex items-center overflow-x-auto ">
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
