import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import courseData from "../../../public/data/courseData";
import { TCourse } from "@/types/course";

function OurCoursesCard() {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-[30px]">
      {courseData.map((course: TCourse) => (
        <div
          key={course.id}
          className="flex flex-col items-center gap-6 rounded-md bg-btnWhite p-6 md:justify-between md:rounded-[10px] md:p-2 lg:p-10 xl:gap-[30px] xl:p-[50px]"
        >
          <div className="w-full">
            <Image
              src={course.image01}
              alt={course.name}
              width={310}
              height={172}
              className="w-full md:rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-6 xl:gap-[30px]">
            <div className="flex h-[68px] flex-col gap-[14px] md:gap-2 lg:h-10 lg:flex-row lg:items-center lg:justify-between xl:h-[43px]">
              <div className="flex items-center gap-[10px]">
                <div className="rounded-md border-2 border-gray-300 px-[14px] py-2 text-sm lg:text-base xl:text-lg">
                  {course.duration}
                </div>
                <div className="rounded-md border-2 border-gray-300 px-[14px] py-2 text-sm lg:text-base xl:text-lg">
                  {course.level}
                </div>
              </div>
              <h2 className="text-sm font-medium lg:text-base xl:text-lg">
                By {course.author}
              </h2>
            </div>
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-xl font-semibold xl:text-2xl">
                {course.name}
              </h3>
              <p className="text-sm lg:text-base xl:text-lg">
                {course.description}
              </p>
            </div>
          </div>
          <Link
            href={`${course.courseLink}/:${course.id}`}
            className={cn(
              buttonVariants({
                variant: "outline",
              }),
              "flex h-[49px] w-full items-center justify-center rounded-md px-6 py-[14px] xl:h-[63px] xl:py-[18px] xl:text-lg",
            )}
          >
            Get it Now
          </Link>
        </div>
      ))}
    </div>
  );
}

export default OurCoursesCard;
