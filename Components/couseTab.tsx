import { Button } from "./ui/button"
export default function CourseTab() {
        return (
                <div className="h-[450px] w-80  p-2 bg-[#FFF6DE] rounded-lg relative md:scale-95 scale-90 flex-shrink-0 flex flex-col justify-between ">
                        <div className="w-32 h-9 center_absolute md:flex hidden bg-[#FF847E] rounded-xl absolute -top-6 center_all text-white font-bold text-xl"> Level 1 </div>

                        <div className="flex justify-between items-center w-full h-28 bg-[#ABF3FF]  md:mt-4 mt-2 rounded-lg p-2">

                                <img src="/level4.png" alt="" className="w-[30%] scale-[1.6]" />

                                <div className="h-full w-auto flex flex-col justify-evenly text-center ">
                                        <h1 className="text-center text-xl font-bold">Become <br /> Website builder </h1>
                                        <p>Age: 11 and above</p>
                                </div>
                        </div>
                        <h1 className="text-xl font-bold text-center">Learn Front-End Development Of Websites</h1>
                        <div className="h-10 rounded-lg bg-[#FFE7A9] flex justify-evenly items-center text-xl mx-2">
                                <span>48 classes</span>
                                <span><i className="fi fi-sr-tally-1 text-2xl  text-slate-600"></i></span>
                                <span>30$ per class</span>
                        </div>
                        <h3 className="text-center text-lg text-gray-600">Course overview 🚀</h3>
                        <ul className="list-disc h-28 overflow-y-scroll rounded-md bg-white">
                                <li >Basic of HTML</li>
                                <li>Basics of CSS</li>
                                <li>Advance HTML</li>
                                <li>Basics of JavaScript</li>
                                <li>Launching A Website</li>
                        </ul>
                        <div className="flex justify-evenly">
                                <Button size="sm" variant="outline" className='text-xl font-normal hover:bg-[#FFDF8C] '>View curriculum</Button>
                                <Button size="sm" className='bg-[#FFDF8C] text-xl font-normal border-2  text-[#545454] hover:text-white hover:bg-[#FF847E]'>  Book now</Button>
                        </div>
                        <img src="/level1blade.png" alt="" className="h-20 absolute -top-6 right-0" />
                </div>
        )
}
