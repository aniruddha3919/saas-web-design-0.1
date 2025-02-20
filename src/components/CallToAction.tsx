import Image from "next/image";
import emojiStarImage from "../assets/images/emojistar.png";
import helixImage from "../assets/images/helix2.png";
export const CallToAction = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 text-center">
      <div className="container max-w-xl relative">
        <Image src={helixImage} alt="Helix" className="absolute top-6 left-[calc(100%+36px)] hidden sm:inline"/>
        <Image src={emojiStarImage} alt="Helix" className="absolute top--[120px] right-[calc(100%+24px)] hidden sm:inline"/>
        <h1 className="font-bold text-5xl tracking-tighter sm:text-6xl">Get instant access</h1>
        <p className=" text-xl text-white/70 mt-5">Celebreate the joy of acomplishment with an app design to track your progress and motivate your efforts.</p>
        <form className="mt-10 flex flex-col gap-2.5 max-w-sm mx-auto sm:flex-row">
          <input type="email" placeholder="your@email.com" className="h-12 bg-white/20 rounded-lg px-5 font-medium placeholder:text-white/50 " />
          <button className="bg-white text-black h-12 rounded-lg px-5">Get Access</button>
        </form>
      </div>

    </div>
  );
};
