import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import testimonialsData from "../../../public/data/testimonialsData";
import { TTestimonail } from "@/types/testimonial";
import Image from "next/image";

function OurTestimonialsCard() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:gap-[30px]">
      {testimonialsData.map((item: TTestimonail) => (
        <div
          key={item.userId}
          className="flex flex-col gap-0 rounded-[10px] bg-btnWhite xl:rounded-xl"
        >
          <p className="p-[30px] text-sm lg:p-10 lg:text-base xl:p-[50px] xl:text-lg">
            {item.userReview}
          </p>
          <div className="flex items-center justify-between p-5 lg:px-10 lg:py-6 xl:px-[50px] xl:py-[30px]">
            <div className="flex flex-grow items-center gap-[10px] xl:gap-[15px]">
              {" "}
              <div className="h-[50px] xl:h-[60px]">
                <Image
                  src={item.userImage}
                  alt={`${item.userName} photo`}
                  width={50}
                  height={50}
                />
              </div>
              <h2 className="text-base font-semibold xl:text-lg">
                {item.userName.slice(0, item.userName.indexOf(" ") + 2)}
              </h2>
            </div>
            <Link
              href={`${item.userTestiLink}/:${item.userId}`}
              className={cn(
                buttonVariants({
                  variant: "outline",
                }),
                "flex h-[49px] items-center justify-center rounded-md px-4 py-[14px] xl:h-[63px] xl:rounded-lg xl:px-6 xl:py-[18px] xl:text-lg font-medium",
              )}
            >
              Read Full Story
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OurTestimonialsCard;
