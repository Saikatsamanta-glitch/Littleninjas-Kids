import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
const FAQ = () => {
  const FaqQueryObj=[
    {
      query:'What is coding for kids?',
      ans:"Lorem ipsum dolor sit amet, consectetur adipiscing eli Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nullapariatur.sunt inculpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      query:"How do I start my child coding?",
      ans:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    },{
      query: "What is the right age to start coding?",
      ans:"  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in",
    },{
     query: "What is LittleNinjas?",
     ans:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    },{
      query: "How do I register my child with LittleNinjas?",
      ans:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    },{
      query: "How are the classes conducted?",
      ans:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    },{
      query: "What happens if my child misses a session?",
      ans:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    },{
      query: "How long is the coding program for?",
      ans:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    },{
      query: "Who are the trainers at LittleNinjas?",
      ans:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    },{
      query: "Will this interfere with my child’s schooling?",
      ans:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do"
    }
    
  ]
  return (
    <div className='w-full h-full mx-auto md:p-10 my-4'>
      <div className='w-full h-full flex justify-center items-center md:p-10  mx-auto '>
       <div className='w-full md:w-[90%] h-full md:p-10  flex flex-col items-center justify-start gap-y-10 '>
         <h3 className='text-5xl font-bold leading-[54px] w-full text-center'>
         FAQs
         </h3>
         <Accordion  className=' w-full flex flex-col gap-10 md:scale-110'>
          {
          FaqQueryObj.map((obj,i)=>(
              <Accordion.Item eventKey={`${i}`} key={obj.query}>
              <Accordion.Header >{obj.query}</Accordion.Header>
              <Accordion.Body>
                {
                obj.ans
                }
              </Accordion.Body>
            </Accordion.Item>
            ))
          }
     
     
    </Accordion>
  
       </div>
      </div>
    </div>
  )
}

export default FAQ
