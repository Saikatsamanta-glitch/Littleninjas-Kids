'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from '@/Components/herosec';
import StudentSection from '@/Components/StudentSection';
import FAQ from '@/Components/FAQ';
import Footer from '@/Components/Footer';
import Courses from '@/Components/Courses';
import CodingClassProcess from '@/Components/CodingClassProcess';
import { useEffect } from 'react'

export default function Home() {
  async function getResponse(){
     const res=await fetch('http://localhost:3000/api/course')
    let {data}=await res.json()
    console.log(data)
  }
   useEffect(()=>{
    getResponse()
   },[])
        return (
                <div className='w-full mx-auto relative overflow-x-hidden h-full'>

                        <HeroSection />
                        <StudentSection />
                       

        <Courses/>
        <CodingClassProcess/>
        <FAQ/>
       
    </div>
  )
}
