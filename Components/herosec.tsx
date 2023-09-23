import FreeDemoBtn from "./FreeDemo";
import { Button } from "./ui/button";

const HeroSection = () => {
  return (
    <div className="relative">
      <div className="w-full flex-col-reverse md:flex-row bg-[#FBEDC9] h-auto md:pb-0 pb-10 rounded-b-[50px] flex md:justify-between md:items-center relative overflow-hidden">
        <div className="pattern  h-48 w-72 absolute top-30 rotate-12 -left-14 rounded-sm bg-[#FFF6DE]"></div>
        <div className="pattern h-48 w-72 absolute top-14 -rotate-12 left-[45%] rounded-md bg-[#FFF6DF]"></div>
        <div className="pattern h-48 w-72 absolute top-1 -rotate-12 left-[50%] rounded-md bg-[#FFE7A9]"></div>
        <div className="pattern h-48 w-72 absolute top-30 rotate-12 -right-14 rounded-sm bg-[#FFF6DE]"></div>

        {/* left column */}
        <div className="md:pl-24 p-7 flex-1 relative flex flex-col md:h-full gap-y-7  justify-evenly pb-14">
          <h2 className="text-5xl md:text-7xl text-[rgb(64,64,64)] font-bold">
            Kids learning
            <br />
            platform
          </h2>
          <span className="text-xl text-[rgb(64,64,64)] font-medium">
            Introduce your kids to the world of coding and mathematics!
          </span>

          <div className="flex items-center gap-x-7 ">
            <Button
              size="lg"
              className="text-2xl  bg-[#FFE47E] h-14 border-black/75 border-2 text-[rgb(84,84,84)] font-bold hover:bg-white"
            >
              <img src="/calculator.png" alt="" className="h-4/6 me-3 " />
              <h2> Maths</h2>
            </Button>

            <Button
              size="lg"
              className="bg-white hover:bg-[#FFE47E] h-14 hover:text-black text-2xl font-bold outline-2  flex  text-[rgb(84,84,84)]"
            >
              <h2>
                {" "}
                <span className="hidden lg:inline">{`${"</>"}`}</span> Coding
              </h2>
            </Button>
            <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="80px"
            height="80px"
            viewBox="0 0 213.7 213.7"
            enableBackground="new 0 0 213.7 213.7"
            xmlSpace="preserve"
        >
            <polygon
                className="triangle"
                fill="none"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                points="73.5,62.5 148.5,105.8 73.5,149.1 "
            ></polygon>
            <circle
                className="circle"
                fill="none"
                strokeWidth="7"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit="10"
                cx="106.8"
                cy="106.8"
                r="103.3"
            ></circle>
        </svg>
          </div>
        </div>
        {/* right column */}
        <div className="flex-1 relative flex justify-center items-center h-full">
          <img src="/level4.png" alt="" className="h-80" />
        </div>
      </div>
      <img
        src="/blade.png"
        className="h-20 absolute right-24 top-16"
        alt="blade"
      />
      <img
        src="/level1blade.png"
        className="h-24 absolute md:left-24 md:-bottom-12 bottom:30 left-8 "
        alt=""
      />
      <FreeDemoBtn
        title="Free Demo"
        className="absolute -bottom-5 left-0 ml-auto mr-auto right-0 w-48  hover:scale-[1.2] transition-all duration-200"
        size="lg"
      />
    </div>
  );
};

export default HeroSection;
