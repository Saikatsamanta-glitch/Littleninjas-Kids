import CourseTab from "./couseTab";

export default function Courses() {
  return (
    <div className="h-auto mt-10 ">
        <h1 className="text-center mb-10"> Courses 🔥</h1>
        <div className="flex l">
                <div className="md:w-1/3 bg-red-300"></div>
                <div className="md:w-2/3 h-[550px] gap-x-6 flex items-center bg-cyan-300 overflow-x-scroll">
                     <CourseTab/>   
                     <CourseTab/>  
                     <CourseTab/>   
                     <CourseTab/>  
                      
                </div>
               
               
        </div>
        
    </div>
  )
}
