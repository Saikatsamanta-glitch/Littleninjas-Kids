import React from 'react'

const process_data = [
        {
                title: "Group classes or 1:1 — Choose what's the best for you",
                img: "/group-communication.svg"
        },
        {
                title: "Choose your personal Guru from 500+ available mentors",
                img: "/classprocess/education.png"
        },
        {
                title: "Classes are live and take place virtually; attend from anywhere",
                img: "/classprocess/streaming.png"
        },
        {
                title: "Classes happen 2-3 times per week, class duration is 60 min",
                img: "/calender.svg"
        },
        {
                title: "Classes are hosted on our proprietary SandboxTM platform",
                img: "/atom.svg"
        },
        {
                title: "Take part in our hosted events to skill up and earn rewards",
                img: "/podium.svg"
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
                                                        <div key={val.title} className='md:w-80 w-48 flex justify-center flex-col md:m-5  md:scale-100 scale-75 items-center'>
                                                                <img src={val.img} className='h-20 w-20' alt="" />
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
