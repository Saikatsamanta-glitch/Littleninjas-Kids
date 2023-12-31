"use client"
import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import axios from "axios"
import OffcanvasDrawer from "./OffcanvasDrawer"
export default function CourseTab({ data = {} }) {
        const color = data.color.toString();
        const [sessions, setSessions] = useState([]);
        const [show, setShow] = useState(false);
        
        useEffect(() => {
                (async function () {
                        const res = await axios(`https://littleninjas-backend.onrender.com/level/${data.level_id}`);
                        // console.log(res.data);s
                        setSessions(res.data)
                })()

        }, [data.level_id])
        console.log(data.character_logo);
        return (

                <div className="h-[450px] w-80 hover:scale-105 transition-all duration-200  p-2 bg-[#FFF6DE] rounded-lg relative md:scale-95 scale-90 flex-shrink-0 flex flex-col justify-between ">
                        <div className="w-32 h-9 center_absolute md:flex hidden bg-[#FF847E] rounded-xl absolute -top-6 center_all text-white font-bold text-xl"> Level {data.steps} </div>

                        <div style={{
                                backgroundColor: color,
                        }} className={`flex justify-evenly items-center w-full h-28 md:mt-4 mt-2 rounded-lg `}>

                                <img src={data.character_logo} alt="" className="w-[30%] scale-[1.6]" />

                                <div className="pr-2 h-full w-auto flex flex-col  justify-center text-center ">
                                        <h1 className="text-center text-xl text-black/75 font-bold">Become <br /> {data[" title"]} </h1>
                                        <p>{data[" ages"]}</p>
                                </div>
                        </div>
                        <h1 className="text-xl font-bold text-center">{data.subtitle}</h1>
                        <div className="h-10 rounded-lg bg-[#FFE7A9] flex justify-evenly items-center text-xl mx-2">
                                <span>{data.sessions_end - data.sessions_start} classes</span>
                                <span><i className="fi fi-sr-tally-1 text-2xl  text-slate-600"></i></span>
                                <span>{data.prices}$ per class</span>
                        </div>
                        <h3 className="text-center text-lg text-gray-600">Course overview 🚀</h3>
                        <ul className="list-disc h-28 overflow-y-scroll rounded-md bg-white">
                               {
                                sessions.map(v=>{
                                        console.log(v);
                                        return <li key={v.title}>{v.title}</li>
                                })
                               }
                        </ul>
                        <div className="flex justify-evenly">

                                <a target="_blank" href={data.pdf_link}> <Button size="sm" variant="outline" className='text-sm font-normal hover:bg-[#FFDF8C] '  >  View curriculum</Button></a>

                                <Button size="sm" onClick={() => setShow(!show)} className='bg-[#FFDF8C] text-sm font-normal border-2  text-[#545454] hover:text-white hover:bg-[#FF847E]'>  Get Demo!</Button>

                        </div>
                        <img src={data.weapon_logo} alt="" className="h-20 absolute -top-6 right-0" />
                        <OffcanvasDrawer show={show} setShow={setShow} />
                </div>
        )
}
