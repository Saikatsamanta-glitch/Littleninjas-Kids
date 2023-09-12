import React from 'react'

const process_data = [
        {
                title: "Group classes or 1:1 — Choose what's the best for you",
                img: "https://www.codeyoung.com/_ipx/w_1280/online-meeting.svg"
        },
        {
                title: "Choose your personal Guru from 500+ available mentors",
                img: "https://www.codeyoung.com/_ipx/w_1280/teacher.svg"
        },
        {
                title: "Classes are live and take place virtually; attend from anywhere",
                img: "https://www.codeyoung.com/_ipx/w_1280/online-class.svg"
        },
        {
                title: "Classes happen 2-3 times per week, class duration is 60 min",
                img: "https://www.codeyoung.com/_ipx/w_1280/schedule.svg"
        },
        {
                title: "Classes are hosted on our proprietary SandboxTM platform",
                img: "https://www.codeyoung.com/_ipx/w_1280/Sandbox.svg"
        },
        {
                title: "Take part in our hosted events to skill up and earn rewards",
                img: "https://www.codeyoung.com/_ipx/w_1280/competition.svg"
        }
]

const CodingClassProcess = () => {
        return (
                <div className='h-auto mt-28'>
                        <h2 className='text-center mt-14 md:text-5xl text-black/80 text-2xl md:px-16 px-4'>How Coding Classes For Kids Work At LittleNinjas 🙌</h2>
                        <div className="h-auto w-full flex flex-wrap justify-center md:px-28  mt-10" >
                                {
                                        process_data.map((val) => {
                                                return (
                                                        <div key={val.title} className='md:w-80 w-48 flex justify-center flex-col md:m-5  md:scale-100 scale-75'>
                                                                <img src={val.img} className='h-20' alt="" />
                                                                <h3 className='mt-9 text-center text-secondary text-lg'> {val.title} </h3>
                                                        </div>
                                                )
                                        })
                                }


                        </div>
                </div>
        )
}

export default CodingClassProcess
