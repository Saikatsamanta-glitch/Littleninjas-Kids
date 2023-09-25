import Link from 'next/link'
import React from 'react'
import ReviewCard from './ReviewCard'

const Reviews = () => {
    const reviewobj={
        rating:'4.7/5',
        desc:`Numbers don't lie — We are currently rated 4.7/5 on Google Reviews and going strong!`
    }
  return (
    <div className='w-full h-auto md:p-20 flex justify-between bg-[#fffbf2] p-5 overflow-hidden md:flex-row flex-col gap-y-20'>
      <div className=' flex justify-center px-6  flex-1'>
       <div className='w-[10%] h-auto mr-1'>
        <img src='/star_1.svg' className='max-w-[52px] max-h-[52px]'/>
       </div>
       <div>
       <div className='flex justify-between'>
        <div className='opacity-100 text-[26px] md:ml-3 ml-10'>{reviewobj.rating}</div>
        <img src='/google.svg' className='max-h-[32px] max-w-[32px]'/>
       </div>
       <div className='my-[40px] text-[20px] font-medium'>
        {reviewobj.desc}
       </div>
       <Link href='' className="no-underline">
          <div className="flex justify-center mt-[40px]  text-white">
            <div className="bg-[#ff712d] text-[16px] rounded-md shadow-md py-[14px] px-[14px] w-[300px] text-center">Book a Free Trial Class</div>
          </div>
        </Link>
       </div>
      </div>
      <div className=' flex-1 flex justify-center lg:ml-20'>
        <ReviewCard/>
      </div>
    </div>
  )
}

export default Reviews
