import React from "react";
import Link from "next/link";
const SandBox = () => {
  return (
    <div className="w-full h-auto md:p-20 flex justify-between mt-[100px] md:flex-row flex-col">
      <div className="w-full">
        <div className="float-right">
          <img src="/pattern_2.png" className="max-w-full h-auto" />
        </div>
        <center>
          <img src="/sandbox.png" className="w-[90%] max-w-full" />
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
            <img
              src="/sandbox_logo_vector.svg"
              className=" max-w-full"
            />
          </center>
        </div>
        <div className="text-center mt-[20px] mb-[10px]">
          Sandbox is an interactive learning platform by Codeyoung for coding
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
