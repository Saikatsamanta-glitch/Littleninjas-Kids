import Image from 'next/image'
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Home() {
  return (
    <>
    <div className='h-96 bg-[#FBEDC9] w-full rounded-b-[50px]'>
        <div className="pattern h-48 w-72 absolute top-30 rotate-12 -left-14 rounded-sm bg-[#FFF6DE]"></div>
        <div className="pattern h-48 w-72 absolute top-40 -rotate-12 left-[60%] rounded-sm bg-[#FFE7A9]"></div>
        <div className="pattern h-48 w-72 absolute top-44 -rotate-12 -left-[50%] rounded-sm bg-[#f7f7f7]"></div>
        <div className="pattern h-48 w-72 absolute top-30 rotate-12 -left-14 rounded-sm bg-[#FFF6DE]"></div>
    </div>
    </>
  )
}
