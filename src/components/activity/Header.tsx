import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="relative w-full h-[600px] md:h-[800px] lg:h-[800px] 2xl:h-[900px] overflow-hidden">
      <Image
        src="/header/hero.png"
        alt="Key Realty"
        fill
        priority
        className="object-cover object-bottom"
      />
      
    </div>
  );
}

export default Header;
