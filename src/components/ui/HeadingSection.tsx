import React from "react";
import { Button, buttonVariants } from "./button";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface HeadingSectionProps {
  title: string;
  description: string;
  buttonLink: string;
  buttonType?: boolean;
  headingStyle: string;
}

function HeadingSection({
  title,
  description,
  buttonLink,
  buttonType = true,
  headingStyle = "default",
}: HeadingSectionProps) {
  if (headingStyle === "inverted")
    return (
      <div className="flex flex-col gap-5 lg:gap-10 xl:gap-[50px]">
        <div className="flex flex-col gap-2 lg:gap-3">
          <h1 className="text-[28px] font-semibold md:text-[38px] lg:text-5xl">
            {title.slice(0, title.indexOf(" "))}
            <br />
            {title.slice(title.indexOf(" ") + 1)}
          </h1>
          <p className="text-sm text-gray-500 md:text-base lg:text-lg">
            {description}
          </p>
        </div>

        <Link
          href={buttonLink}
          className={cn(
            buttonVariants({
              variant: "ghost",
            }),
            "h-[49px] rounded-md border-2 px-5 py-[14px] text-sm lg:h-[63px] lg:w-[120px] lg:text-lg",
          )}
        >
          See All FAQ's
        </Link>
      </div>
    );
  return (
    <div className="my-10 flex flex-col gap-5 px-6 md:flex-row md:gap-[250px] lg:my-[60px] lg:gap-[300px] xl:my-[80px]">
      <div className="flex flex-col gap-1 lg:gap-[6px]">
        <h1 className="text-[28px] font-semibold md:text-[38px] lg:text-5xl">
          {title}
        </h1>
        <p className="text-sm text-gray-500 md:text-base lg:text-lg">
          {description}
        </p>
      </div>
      {buttonType ? (
        <Link
          href={buttonLink}
          className={cn(
            buttonVariants({
              variant: "ghost",
            }),
            "h-[49px] w-[96px] rounded-md px-5 py-[14px] text-sm md:self-end lg:h-[63px] lg:w-[120px] lg:text-lg",
          )}
        >
          View All
        </Link>
      ) : (
        ""
      )}
    </div>
  );
}

export default HeadingSection;
