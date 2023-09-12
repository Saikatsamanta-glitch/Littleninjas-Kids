import React from 'react'
import CodingClassCard from './CodingClassCard'

const CodingClassProcess = () => {
    const obj={
        "mentor":500,
        'weekschedule':'2-3',
        'duration':60
    }
  return (
    <div className='w-full h-full mx-auto  text-center mt-16'>
      <p className='md:text-4xl text-2xl font-semibold md:px-0 px-2'>How Coding Classes For Kids Work At LittleNinjas</p>
      <div className='w-full h-full  flex flex-wrap justify-center gap-5 mt-20 md:px-0 px-2'>
      <div>
      <img src='/classimg1.svg' className='w-[100px] h-[100px] m-auto'/>
      <div className='text-center text-[#000] opacity-[0.6] md:text-[21px] text-base mt-[35px]'>
      Group classes or 1:1 — Choose what's the best for you
      </div>
    </div>
    <div>
      <img src='/classimg1.svg' className='w-[100px] h-[100px] m-auto'/>
      <div className='text-center text-[#000] opacity-[0.6] md:text-[21px] text-base mt-[35px]'>
      {
        `Choose your personal Guru from ${obj.mentor}+ available mentors`
      }
      </div>
    </div>
    <div>
      <img src='/classimg1.svg' className='w-[100px] h-[100px] m-auto'/>
      <div className='text-center text-[#000] opacity-[0.6] md:text-[21px] text-base mt-[35px]'>
      Classes are live and take place virtually; attend from anywhere
      </div>
    </div>
    <div>
      <img src='/classimg1.svg' className='w-[100px] h-[100px] m-auto'/>
      <div className='text-center text-[#000] opacity-[0.6] md:text-[21px] text-base mt-[35px]'>
      {
        `Classes happen ${obj.weekschedule} times per week, class duration is ${obj.duration} min`
      }
      </div>
    </div>
    <div>
      <img src='/classimg1.svg' className='w-[100px] h-[100px] m-auto'/>
      <div className='text-center text-[#000] opacity-[0.6] md:text-[21px] text-base mt-[35px]'>
      Classes are hosted on our proprietary SandboxTM platform
      </div>
    </div>
    <div>
      <img src='/classimg1.svg' className='w-[100px] h-[100px] m-auto'/>
      <div className='text-center text-[#000] opacity-[0.6] md:text-[21px] text-base mt-[35px]'>
      Take part in our hosted events to skill up and earn rewards
      </div>
    </div>
      </div>
    </div>
  )
}

export default CodingClassProcess
