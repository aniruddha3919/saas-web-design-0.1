import Image from "next/image";
import ArrowWIcon from "../assets/icons/arrow-w.svg";
import cursorImage from "../assets/images/cursor.png";
import messageImage from "../assets/images/message.png";

export const Hero = () => {
  return (
    <div className=" bg-black bg-gradient-to-b from-black via-[#200D42] to-[#B48CDE] text-white py-[72px] sm:py-24 relative overflow-hidden">
      {/* Radial Background Effect */}
      <div className="absolute h-[375px] w-[750px]  sm:h-[768px] sm:w-[1536px] lg:w-[2400px] lg:h-[1200px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_82%,#9560EB)] top-[calc(100%-96px)] sm:top-[calc(100%-120px)]"></div>

      <div className="container relative mx-auto flex flex-col items-center px-4 sm:px-8">
        {/* Version Announcement */}
        <div className="flex justify-center">
          <a href="#" className="inline-flex items-center gap-3 border px-3 rounded-lg border-white/30">
            <span className="bg-[linear-gradient(to_right,#FCD6FF,#29D8FF,#FFFD80,#F89ABF,#FCD6FF)] text-transparent bg-clip-text">
              Version 2.0 is here
            </span>
            <span className="flex items-center gap-1">
              <span>Read More</span>
              <ArrowWIcon />
            </span>
          </a>
        </div>

        {/* Hero Title */}
        <div className="relative mt-6 flex flex-col items-center text-center">
          <div className="relative inline-block">
            <h1 className="text-5xl sm:text-9xl font-bold tracking-tight leading-[1.1]">
             Your Memory <br /> Our Work
            </h1>

            {/* Floating Images */}
            <Image
              src={cursorImage}
              height={160}
              width={160}
              alt="Cursor"
              className="absolute -left-28 sm:-left-36 top-10 sm:top-16 hidden sm:inline"
            />
            <Image
              src={messageImage}
              height={160}
              width={160}
              alt="Message"
              className="absolute -right-28 sm:-right-36 top-0 sm:top-8 hidden sm:inline"
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-lg sm:text-xl mt-6 max-w-lg">
          Store Your Daily Memory and Access It in Future, Message anyone and get answer from a  Offline person 
        </p>

        {/* CTA Button */}
        <button className="bg-white text-black py-3 px-6 rounded-lg font-medium mt-8">
          Get for free
        </button>
      </div>
    </div>
  );
};
