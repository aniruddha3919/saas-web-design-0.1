import Image from "next/image";
import appScreen from "../assets/images/app-screen.png";

export const ProductShowcase = () => {
  return (
    <div className="bg-black text-white bg-gradient-to-b from-black to-[#5D2CA8] py-[72px]">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-5xl sm:text-6xl font-bold tracking-tighter">
          Intuitive interface
        </h2>

        {/* Subtitle */}
        <div className="max-w-xl mx-auto">
          <p className="text-xl mt-5 text-white/70">
            Celebrate the joy of accomplishment with an app designed to track your progress.
          </p>
        </div>

        {/* Centered Image */}
        <div className="mt-14 flex justify-center">
          <Image 
            src={appScreen} 
            alt="Product screenshot" 
            className="max-w-full h-auto" 
          />
        </div>
      </div>
    </div>
  );
};
