import React from "react";
import Image from "next/image";
import BtnPrimary from '../ui/common/BtnPrimary';
import { FaArrowRight } from "react-icons/fa6";


function Header() {
  return (
    <div className="relative w-full h-[600px] md:h-[800px] lg:h-[800px] xl:h-[900px] 2xl:h-[900px]  overflow-hidden flex items-center justify-center">
      <Image
        src="/header/hero.png"
        alt="Key Realty"
        fill
        priority
        className="object-cover object-bottom"
      />
      <div className="absolute flex flex-col items-center gap-8">
        <h1 className="text-white text-4xl md:text-6xl font-semibold italic flex flex-col items-center gap-4 font-dm-serif-display">
          Buy, Sell, Rent
          <span className="font-poppins not-italic">Real State Done Right</span>
        </h1>
        <BtnPrimary 
          label="Explore Properties"
          className="py-5 flex items-center gap-2 group"
        >
          Explore Properties <FaArrowRight className="transition-transform duration-300 group-hover:rotate-90" />
        </BtnPrimary>

      </div>
    </div>
  );
}

export default Header;
