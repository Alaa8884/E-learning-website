import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

function HeroSection() {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-[50px] flex h-[311px] flex-col items-center justify-center gap-[50px] lg:my-[60px] lg:h-[290px] lg:gap-[60px]">
        <div className="flex h-[212px] w-auto flex-col items-center justify-center gap-4 lg:h-[175px] lg:gap-5">
          {" "}
          <div className="relative flex h-[76px] items-center justify-center gap-[10px] rounded-xl bg-white p-[14px] lg:h-[90px] lg:py-[14px] lg:pl-[20px] lg:pr-[30px]">
            {" "}
            <Image
              src={"/assets/hero_shine.png"}
              width={39}
              height={43}
              alt="hero_shine logo"
              className="absolute -left-[10px] -top-5 lg:-left-6 lg:-top-[30px]"
            />
            <div className="flex size-12 items-center justify-center rounded-lg bg-logo p-3 lg:size-[62px]">
              <Image
                src={"/assets/logo_container.png"}
                width={34}
                height={34}
                alt="hero section logo"
                className="object-fill sm:size-6 lg:size-[34px]"
              />{" "}
            </div>
            <h1 className="flex h-auto items-center justify-center text-base font-semibold lg:text-5xl">
              <span className="text-primary">Unlock </span> Your Creative
              Potential
            </h1>
          </div>
          <div className="flex h-[120px] flex-col items-center justify-center gap-[6px] p-[30px] text-center lg:h-[65px] lg:gap-[10px]">
            <h2 className="text-center text-2xl font-medium lg:text-[38px]">
              With Online Design and Development Courses.
            </h2>
            <p className="text-sm text-gray-500 lg:text-base">
              Learn from Industry Experts and Enhance Your Skills
            </p>
          </div>
        </div>
        <div className="flex h-[49px] items-center gap-3 lg:h-[55px]">
          <Link
            href="/courses"
            className={cn(
              buttonVariants({
                variant: "default",
              }),
              "h-[49px] px-5 py-[14px] text-sm md:w-auto md:py-3 lg:h-[55px] lg:text-lg",
            )}
          >
            Explore Courses
          </Link>

          <Link
            href="/pricing"
            className={cn(
              buttonVariants({
                variant: "ghost",
              }),
              "h-[45px] w-auto bg-white px-6 md:py-3 md:text-sm lg:h-[55px] lg:py-[14px] lg:text-lg",
            )}
          >
            View Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
