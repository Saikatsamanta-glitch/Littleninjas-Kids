'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from '@/Components/herosec';
import StudentSection from '@/Components/StudentSection';
import FAQ from '@/Components/FAQ';
import Footer from '@/Components/Footer';
import Courses from '@/Components/Courses';
import CodingClassProcess from '@/Components/CodingClassProcess';

export default function Home() {

  return (
    <div className='w-full mx-auto relative overflow-x-hidden h-full'>
    
        <HeroSection/>
        <StudentSection/>

        <Courses/>
        <CodingClassProcess/>
        <FAQ/>
       
    </div>
  )
}
