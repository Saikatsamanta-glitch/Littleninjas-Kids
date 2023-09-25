'use client';
import React from 'react'
import { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import {ShareSocial} from 'react-share-social' 
import Link from 'next/link'
const EventCard = ({obj}:any) => {
    const [showshare,setshowshare]=useState(false)
    const copyURL = () => {
        const currentURL = window.location.href;
    
        // Create a temporary input element to copy the URL
        const tempInput = document.createElement('input');
        tempInput.value = currentURL;
    
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
     
    <Link href='' className='no-underline flex flex-col items-center justify-center bg-slate-50 rounded-sm shadow-md md:w-[800px] w-full'>
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
                    <div className='w-full md:p-6 p-3 flex justify-between items-center border-t-[0.1rem] border-[#e2e2e2]'>
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
                     
                    </div>
                    {
                      showshare && <ShareSocial 
                      url ={window.location.href}
                      socialTypes={['facebook','linkedin','whatsapp','twitter']}
                 
                    />
                    }
                    
                  </Link>
                
  )
}

export default EventCard