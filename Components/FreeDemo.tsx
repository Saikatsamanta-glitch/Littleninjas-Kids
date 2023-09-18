"use client"

import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import { Button } from './ui/button';
interface btninterface {
        title?:string;
        variant?:"default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | null | undefined;
        size?:"lg" | "default" | "sm" | "icon" | null | undefined;
        className?: any | "";
      }
const FreeDemoBtn = (props:btninterface) => {
        const [show,setShow]=useState(false);
        const handleClose = () =>{ setShow(false) }
  return (
<>
    <Button
    onClick={()=>{ setShow(true) }}

     variant={props.variant}
     className= {  `${!props.className.includes("relative","absolute","sticky","fixed","static")?"relative":""}   ${props.className}  bg-[rgb(255,132,126)] rounded-md py-4  z-10  hover:bg-[rgb(255,132,126)] `}
     size={props.size}
     
    >
      <span className=' font-bold text-white text-2xl '>
      {props.title}
        </span>  
        <img src='/btndesign.png' className='w-[68px] h-[58px] absolute top-[-40px] right-[-35px]' />
    
    </Button>
    <Offcanvas show={show} onHide={handleClose} placement='end' >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
   </>
  )
}

export default FreeDemoBtn