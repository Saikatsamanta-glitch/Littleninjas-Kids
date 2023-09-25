'use client';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from '@/Components/herosec';
import StudentSection from '@/Components/StudentSection';
import FAQ from '@/Components/FAQ';
import Courses from '@/Components/Courses';
import CodingClassProcess from '@/Components/CodingClassProcess';
import ProcesstoEnroll from '@/Components/ProcesstoEnroll';
import SandBox from '@/Components/SandBox';
import Reviews from '@/Components/Reviews';


export default function Home() {
      return (
                <div className='w-full mx-auto relative overflow-x-hidden h-full'>
                        <HeroSection />
                        <StudentSection />
                        <Courses />
                        <CodingClassProcess />
                        <ProcesstoEnroll/>
                        <SandBox/>
                        <Reviews/>
                        <FAQ />
                </div>
        )
}
