import React from 'react'

const ProcesstoEnroll = () => {
    const enrollarr=[
        {
            title:'Select A Course',
            desc:"Choose a course of your choice based on the child's age/grade",
            img:'/courses.svg'
        },
        {
            title:'Book a FREE trial class',
            desc:'Choose your mentor of choice from 200+ mentors as well as your preferred time slot',
            img:'/successful-booking.svg'
        },
        {
            title:'Enroll for the course',
            desc:"If you liked the demo session, enroll for the course & begin your child's exciting journey!",
            img:'/success.svg'
        }
    ]
  return (
    <div className='w-full h-auto flex justify-center items-center md:p-[100px] flex-col md:gap-y-32 mt-32 bg-[#fffbf2] p-10 gap-y-10'>
      <h3 className='lg:text-4xl md:text-2xl text-[16px]'>A Simple 3-Step Process To Enroll Your Kid To Any Coding Course</h3>
      <div className='w-full h-full flex md:justify-between items-center md:flex-row flex-col gap-y-10'>
          {
            enrollarr.map((obj,i)=>(
             <div key={obj.title} className='flex flex-col items-center gap-y-10'>
               <img src={obj.img} className='w-[80px] h-[80px] m-auto'/>
                <div className='flex mx-auto justify-center md:w-[70%]'>
                 <div className='text-[#ffe299] md:text-[82px] text-[52px] self-center mr-[10px]'>{i+1}</div>
                 <div className='text-center'>
                    <div className='md:text-[20px] text-[16px] font-medium'>{obj.title}</div>
                    <div className='md:text-[18px] text-[16px] opacity-[0.6] mt-[15px]'>{obj.desc}</div>
                 </div>
                </div>
             </div>

            ))
          }
      </div>
    </div>
  )
}

export default ProcesstoEnroll
