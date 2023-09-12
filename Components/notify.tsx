"use client"
import { useState } from "react"
export default function Notify() {
        const [show, setShow] = useState(true);


        return (<>
                {

                        show && <div className="sticky top-0 h-16 w-screen bg-[#FF847E] items-center flex justify-between md:px-10 z-40  overflow-hidden transition-all duration-300 "> 
                        <img src="/design.png" alt="" className="md:h-[130%] h-[0%] " />
                        <div className="flex h-full items-center">
                                 < img src="/star.png" alt="" className="h-[90%]" />

                                <h2 className="md:text-2xl text-sm font-semibold text-white font-canvasans">LittleNinjas is now starting Math classes for all grades! <a href="" className="no-underline text-white">Click here for enquiry</a>
                                </h2>
                        </div>
                       

                                <h1 onClick={()=>{setShow(!show)}} className=" text-4xl cursor-pointer rounded-full hover:bg-slate-100/20 p-2 hover:text-white transition-all  duration-500 text-gray-600 " >X</h1>
                        </div > 

                }
        </>
        )
}
