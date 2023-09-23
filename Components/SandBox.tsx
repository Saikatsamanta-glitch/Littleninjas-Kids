import React from "react";
import Link from "next/link";
const SandBox = () => {
  return (
    <div className="w-full h-auto md:p-10 flex justify-between items-center mt-[50px] md:flex-row flex-col-reverse">
      <div className="w-full h-full">
        <div className="float-right">
          <img src="/pattern_2.png" className="max-w-full h-auto" />
        </div>
        <center>
                <iframe src="http://localhost:3000/" className="w-[95%] h-80" ></iframe>
        </center>
        <div className="float-left">
          <img src="/pattern_1.png" className="max-w-full h-auto" />
        </div>
      </div>
      <div className=" px-[10px] text-[16px] text-[#525252] leading-5">
        <div className="float-right">
          <img src="/pattern_3.png" className="max-w-full h-auto" />
        </div>
        <div>
          <center>
           <h1 className="text-5xl">Genius</h1>  Your uniqueness is what makes you shine
          </center>
        </div>
        <div className="text-center mt-[20px] mb-[10px]">
        Genius is an interactive learning platform by LittleNinjas for coding
          and maths where students and teachers can collaborate and learn in a
          meaningful way.
        </div>
        <div className="flex mt-[20px]">
          <div className="mr-3">
          <img src="/arrow.png" className="max-w-full h-auto w-[20px] md:w-auto" />
          </div>
          <div>Live coding interface for all coding languages with no need for any additional installations or setups</div>
        </div>
        <div className="flex mt-[20px]">
          <div className="mr-3">
          <img src="/arrow.png" className="max-w-full h-auto w-[20px] md:w-auto" />
          </div>
          <div>Live coding interface for all coding languages with no need for any additional installations or setups</div>
        </div>
        <div className="flex mt-[20px]">
          <div className="mr-3">
          <img src="/arrow.png" className="max-w-full h-auto w-[20px] md:w-auto" />
          </div>
          <div>Live coding interface for all coding languages with no need for any additional installations or setups</div>
        </div>
        <Link href='/sandbox' className="no-underline">
          <div className="flex justify-center mt-[40px]  text-white">
            <div className="bg-[#ff712d] text-[16px] rounded-md shadow-md py-[14px] px-[40px]">Explore Sandbox</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SandBox;
