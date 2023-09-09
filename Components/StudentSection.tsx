import React from 'react'

const StudentSection = () => {
  return (
    <div className=' h-auto flex justify-center items-center bg-[rgb(255,246,222)] md:p-10 p-0 mx-auto relative mt-20  md:flex-nowrap flex-wrap  md:gap-0 gap-10'
>
       <div className=' max-w-full h-[108px] font-[500] md:text-3xl text-base leading-[36px] text-center '>
      <span className='text-[rgb(105,105,105)]' id='counter'> 15,000+ </span>
       <br></br>
       <span className='text-[rgb(255,132,126)]'>students taught </span> 
       </div>
        <div className=' w-[100px] border-2 border-[rgb(148,148,148)] rotate-[-89.48deg] h-auto md:block hidden'></div>
       <div className=' h-[108px] font-[500] md:text-3xl text-base leading-[36px] text-center text-white '>
       <span className='text-[rgb(105,105,105)]'> 50,000+ </span>
       <br></br>
       <span className='text-[rgb(255,132,126)]'>classes Taken </span> 
       </div>
       <div className=' w-[100px] border-2 border-[rgb(148,148,148)] rotate-[-89.48deg] h-auto md:block hidden'></div>
       <div className=' h-[108px] font-[500] md:text-3xl text-base leading-[36px] text-center text-white '>
       <span className='text-[rgb(105,105,105)]'> 500+ </span>
       <br></br>
       <p className='text-[rgb(255,132,126)] w-full  px-0'>registered mentors </p> 
       </div>
       <div className=' w-[100px] border-2 border-[rgb(148,148,148)] rotate-[-89.48deg] h-auto md:block hidden'></div>
       <div className=' h-[108px] font-[500] md:text-3xl text-base leading-[36px] text-center text-white'>
       <span className='text-[rgb(105,105,105)]'> 7500+ </span>
       <br></br>
       <span className='text-[rgb(255,132,126)]'>projects created </span> 
       </div>
       <div className=' w-[100px] border-2 border-[rgb(148,148,148)] rotate-[-89.48deg] h-auto md:block hidden'></div>
       <div className=' h-[108px] font-[500] md:text-3xl text-base leading-[36px] text-center text-white '>
       <span className='text-[rgb(105,105,105)]'> 15+ </span>  
       <br></br>
       <span className='text-[rgb(255,132,126)]'>country presence</span> 
       </div>
      </div>
  )
}

export default StudentSection
