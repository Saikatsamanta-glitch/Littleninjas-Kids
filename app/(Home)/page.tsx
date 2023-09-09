'use client';
import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from '@/Components/herosec';
import CountUp, { useCountUp } from 'react-countup';
import StudentSection from '@/Components/StudentSection';
import FAQ from '@/Components/FAQ';
export default function Home() {
  useCountUp({
    ref: 'counter',
    end: 15000,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div className='w-full mx-auto relative overflow-x-hidden h-full'>
    
        <HeroSection/>
        <StudentSection/>
        <FAQ/>
    </div>
  )
}
