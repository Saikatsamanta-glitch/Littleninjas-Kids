import React from 'react'
import { Button } from './ui/button'
const Footer = () => {
    const FooterArr=[
        {
            "Our Courses For Kids":["Grade 1-2","Grade 3-5","Grade 6-8","Grade 9+"],
            
           
          

        },{
            "Quick Links":["About Us","Trainers","View Courses","Student Projects"],
        },{
            "Get In Touch":[{
                id:1,
                support:"support@littleninjas.com",
                icon:'/emailicon.svg'
            }],
        },{
            "Registered Office Address":["India","The Pearl, 1537, 5th Main Rd, Rajiv Gandhi Nagar, Sector 7, HSR Layout, Bengaluru, Karnataka 560102"]
        }
        
    ]

  return (
    
<footer className="bg-white dark:bg-gray-900  text-center">
      <h3>LittleNinjas</h3>
    <div className="mx-auto w-full max-w-screen-xl pb-10">
      <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
        {
            FooterArr.map((obj)=>{
                let keyval=Object.keys(obj)[0]
                return(
                <div className='text-center 'key={keyval}>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{keyval}</h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium  w-full px-0">
                    {  keyval!="Get In Touch"?
                        obj[keyval].map((val:any)=>(
                            
                            
                                <li className="mb-4" key={val}>
                                <a href="#" className="no-underline text-[rgb(85,85,85)]">{val}</a>
                            </li>
                            
                        
                        )):obj[keyval].map((val:any)=>(
                            
                            
                            <li className=" space-x-1 mb-4 flex  md:gap-3" key={val.id}>
                               
                                    <img src={val.icon}/>
                               
                            <a href="#" className="no-underline text-[rgb(85,85,85)]">{val.support}</a>
                        </li>
                        
                    
                    ))
                    }
                   
                </ul>
            </div>
                )
})
        }
       
    </div>
    <div className="px-4 py-6  dark:bg-gray-700 md:flex md:items-center md:justify-between">
         <div className='flex flex-col items-center justify-center'>
        <h4 className="text-[1rem] font-medium sm:text-center"> Interested in coding?</h4>
         <Button size='lg' className='bg-[#ff712d] px-[10px] py-[14px] md:text-[1.125rem] rounded-lg'>Book a Free Trial Class</Button>
       

        </div>
        <div className='flex flex-col items-center justify-center md:mt-0  mt-4 md:gap-y-5'>
        <h4 className="text-[1rem] font-medium sm:text-center"> Follow us for more!</h4>
        <div className="flex  space-x-5 sm:justify-center  justify-center">
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
                  <img src='/fb-icon.svg' className='w-8 h-8'/>
                
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <img src='/insta-icon.svg' className='w-8 h-8'/>
                 
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <img src='/linked-icon.svg' className='w-8 h-8'/>
                 
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white">
              <img src='/youtube-icon.svg' className='w-8 h-8'/>
                 
              </a>
             
        </div>

        </div>
       
      </div>
    </div>
</footer>

  )
}

export default Footer
