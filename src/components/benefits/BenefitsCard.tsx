import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { InformationType } from "types/information";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";

const benefitsInfo: InformationType[] = [
  {
    id: "1",
    title: "Flexible Learning Schedule",
    desc: "Fit your coursework around your existing commitments and obligations.",
    beneFitLink: "/",
  },
  {
    id: "2",
    title: "Expert Instruction",
    desc: "Learn from industry experts who have hands-on experience in design and development.",
    beneFitLink: "/",
  },
  {
    id: "3",
    title: "Diverse Course Offerings",
    desc: "Explore a wide range of design and development courses covering various topics.",
    beneFitLink: "/",
  },
  {
    id: "4",
    title: "Updated Curriculum",
    desc: "Access courses with up-to-date content reflecting the latest trends and industry practices.",
    beneFitLink: "/",
  },
  {
    id: "5",
    title: "Practical Projects and Assignments",
    desc: "Develop a portfolio showcasing your skills and abilities to potential employers.",
    beneFitLink: "/",
  },
  {
    id: "6",
    title: "Interactive Learning Environment",
    desc: "Collaborate with fellow learners, exchanging ideas and feedback to enhance your understanding.",
    beneFitLink: "/",
  },
];

function BenefitsCard() {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 md:h-[370px] md:flex-row">
        { benefitsInfo.slice(0, 3).map((item) => 
          <div
            key={ item.id }
            className="flex h-[293px] flex-col gap-[30px] rounded-lg bg-btnWhite p-[30px] md:h-[370px] md:w-[420px]"
          >
          <h2 className="text-end text-[50px] font-bold">0{ item.id }</h2>
          <div>
            <h3 className="text-xl font-semibold">{ item.title }</h3>
            <p className="text-gray text-sm">{ item.desc }</p>
          </div>
          <Link
            href={ item.beneFitLink }
            className={ cn(
              buttonVariants({
                variant: "outline",
              }),
              "flex size-[54px] items-center justify-center self-end rounded-md p-[14px]",
            ) }
          >
            <ArrowUpRight className="text-primary" size={ 26 } />
          </Link>
        </div>
        ) }
      </div>
      <div className="mt-5 flex flex-col items-center justify-center gap-5 md:h-[370px] md:flex-row">
        {benefitsInfo.slice(3, 6).map((item) => (
          <div
            key={item.id}
            className="flex h-[293px] flex-col gap-[30px] rounded-lg bg-btnWhite p-[30px] md:h-[370px] md:w-[400px]"
          >
            <h2 className="text-end text-[50px] font-bold">0{item.id}</h2>
            <div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray text-sm">{item.desc}</p>
            </div>
            <Link
              href={item.beneFitLink}
              className={cn(
                buttonVariants({
                  variant: "outline",
                }),
                "block size-[54px] self-end rounded-md p-[14px]",
              )}
            >
              <ArrowUpRight className="text-primary" size={26} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default BenefitsCard;
