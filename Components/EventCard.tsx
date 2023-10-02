'use client';
import React, { useEffect } from 'react'
import { useState } from 'react';
import { toast } from "react-toastify";
import Link from 'next/link'
import ShareModal from './ShareModal';
import {usePathname} from 'next/navigation'

const EventCard = ({obj}:any) => {
  const [showshare,setshowshare]=useState(false)
  const [url,setUrl]=useState('')
  const currentPage = usePathname();

     useEffect(()=>{
        setUrl(window.location.href)
     },[])
  
 
    const copyURL = () => {
       
    
        // Create a temporary input element to copy the URL
        const tempInput = document.createElement('input');
        tempInput.value = url;
    
        // Append the input element to the DOM
        document.body.appendChild(tempInput);
    
        // Select and copy the URL text
        tempInput.select();
        document.execCommand('copy');
    
        // Remove the temporary input element
        document.body.removeChild(tempInput);
        toast.info('link copied to clickboard')
       
      };
  return (
   
    
    <div className='no-underline flex flex-col items-center justify-center bg-slate-50 rounded-sm shadow-md md:w-[800px] w-full relative'>
                    <img src={obj.image} alt="" className='w-full h-[200px]' />
                    <div className=' w-full p-6'>
                     <h3 className='font-bold text-xl'>{obj.title}</h3>
                     <div>
                        start time:{obj.start_time}
                     </div>
                     <div>
                        end time:{obj.end_time}
                     </div>
                    </div>
                    <div className='w-full md:p-6 p-3 flex justify-between items-center border-t-[0.1rem] border-[#e2e2e2] relative'>
                     <p className='flex-1'>{obj.count} people have registered</p>
                     <div className='flex md:gap-x-4  items-center flex-1 justify-end'>
                      <img src="/copy-link.png" alt="" className='w-[30px]' 
                      onClick={copyURL}
                      />
                      <img src="/share.png" alt="" className='w-[30px]' 
                       onClick={()=>{
                        setshowshare(!showshare)
                       }}
                      />
                     <button className='bg-[#0041c9] text-white md:p-3 custom'>Register Now</button>
                     </div>
                     {
                   showshare &&  <ShareModal url={url}/>
                   }
                    </div>
                   
                    
                  </div>
                 
                
  )
}

export default EventCard
