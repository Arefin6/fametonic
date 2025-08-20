"use client";

import Image from "next/image";
import FeatureList from "./FeatureList";
import Footer from "./Footer";
import brand from "../../../public/images/brand_image.png";

const MainSection = () => {
  const features = [
    "Start growing your influence right away—-no waiting required!",
    "Create viral TikToks and Reels step by step with easy-to-follow lessons",
    "Use a Personal AI Worker to boost your content ",
    "Learn from expert-led courses designed for aspiring influencers",
  ];
  return (
    <div
      className="w-full mx-auto max-w-7xl px-8 
  flex flex-col-reverse lg:flex-row 
  items-center justify-between"
    >
      {/* Left Section */}
      <div className="flex-1 flex flex-col">
        <h2
          className="lg:text-[35px] md:text-[25px]
         text-[20px]
        md:text-left text-center
        font-urbanist font-bold mb-2"
        >
          Want to Turn Social Media Into a <br />
          Profitable Career?
        </h2>
        <h2
          className="
       lg:text-[35px] md:text-[25px]
         text-[20px]
        text-center md:text-left
        font-urbanist font-bold 
        leading-[100%] 
        tracking-[0] 
      text-[#00E7F9] [text-shadow:0px_4px_4px_#FC004E] mb-2"
        >
          Discover your way to success
          <span className="block my-2">with Fametonic:</span>
        </h2>

        {/* Features */}
        <FeatureList items={features} />

        {/* Mobile Footer above button */}
        <div className="block lg:hidden text-primaryText mt-4">
          <Footer />
        </div>

        {/* Buttons */}
        <button
          className="w-[313px] h-[40px] 
                    px-10 py-2 
                    rounded-[10px] 
                    bg-[#FC004E] 
                    text-white font-semibold
                    shadow-[2px_2px_10px_0px_#00E7F9]
                    hover:opacity-90 
                    transition 
                    my-4 pb-4"
        >
          Get Started
          <span className="inline-block ml-2 text-white text-[16px]">&gt;</span>
        </button>

        <p className="pl-10 text-[14px] font-normal whitespace-nowrap pb-8 md:pb-0">
          1-minute quiz for personalized Insights
        </p>

        {/* Desktop Footer */}
        <div className="hidden lg:block text-primaryText mt-4">
          <Footer />
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-165 flex-1 lg:flex-shrink justify-center lg:justify-start">
        <Image
          src={brand}
          alt="brandimage"
          className="lg:w-[65%] w-full h-auto overflow-hidden  object-contain"
        />
      </div>
    </div>
  );
};

export default MainSection;
