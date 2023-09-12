import React from 'react'
 
  interface codingclass{
     mentor:number,
     weekschedule:string,
     duration:number
  }
 
const CodingClassCard = ({obj}:codingclass|any) => {
  return (
    <div>
      <img src='/classimg1.svg' className='w-[100px] h-[100px] m-auto'/>
      <div className='text-center text-[#000] opacity-[0.6] text-[21px] mt-[35px]'>
      Group classes or 1:1 — Choose what's the best for you
      </div>
    </div>
  )
}

export default CodingClassCard
