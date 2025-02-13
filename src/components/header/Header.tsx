import React from "react";
import { ArrowRight } from "lucide-react";
import NavBar from "./NavBar";

function Header() {
  return (
    <header className="container mx-auto px-4 pt-10 sm:py-6">
      <div className="flex h-[41px] items-center justify-center gap-[15px] rounded-md bg-primary px-4 py-[10px] md:gap-[23px] lg:h-[55px] lg:rounded-lg lg:py-[14px]">
        <p className="animate-bounce text-xs text-white md:text-sm lg:text-lg">
          Free Courses 🌟 Sale Ends Soon, Get It Now
        </p>
        <div className="flex items-center justify-center text-sm text-white lg:h-6 lg:w-6 lg:text-lg">
          <ArrowRight size={16} className="animate-pulse cursor-pointer hover:animate-none" />
        </div>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
