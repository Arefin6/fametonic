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
    <section className="w-full max-w-7xl mx-auto flex items-center justify-between p-8">
      {/* Left Section */}
      <div className="flex-1 flex flex-col items-start justify-center">
        <h2 className="text-[35px] font-urbanist font-bold mb-2">
          Want to Turn Social Media Into a <br />
          Profitable Career?
        </h2>
        <h2 className="font-urbanist font-bold text-[35px] leading-[100%] tracking-[0] align-middle text-[#00E7F9] [text-shadow:0px_4px_4px_#FC004E] mb-2">
          Discover your way to success
          <span className="block my-2">with Fametonic:</span>
        </h2>
        {/* Features */}
        <FeatureList items={features} />
        {/* Mobile Footer above button */}
        <div className="block lg:hidden">
          <Footer />
        </div>
        {/* Buttons */}
        <button
          className="
           w-[313px] h-[40px] 
           px-10 py-2 
           rounded-[10px] 
           bg-[#FC004E] 
           text-white font-semibold
           shadow-[2px_2px_10px_0px_#00E7F9]
           hover:opacity-90 
           transition 
           my-4
           "
        >
          Get Started
          <span className="inline-block ml-2 w-[11px] h-[6px] opacity-400 text-white text-[16px]">
            &gt;
          </span>
        </button>
        <p
          className="block
            ml-14
            text-[14px]
            font-normal
            whitespace-nowrap
            "
        >
          1-minute quiz for personalized Insights
        </p>
        {/* Desktop Footer at bottom */}
        <div className="hidden lg:block text-primaryText mt-4 ">
          <Footer />
        </div>
      </div>

      {/* Right Section */}
      <div className="overflow-hidden">
        <Image
          src={brand}
          alt="brandimage"
          className="absolute w-[666px] lg:h-[70%] top-[126px] lg:left-[55%] opacity-100"
        />
      </div>
    </section>
  );
};

export default MainSection;
