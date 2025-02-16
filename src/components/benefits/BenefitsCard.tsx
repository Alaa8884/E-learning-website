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
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {benefitsInfo.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-[30px] rounded-lg bg-btnWhite p-[30px]"
          >
            <h2 className="text-end text-[50px] font-bold">0{item.id}</h2>
            <div className="h-[82px] md:h-[112px]">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray text-sm">{item.desc}</p>
            </div>
            <Link
              href={item.beneFitLink}
              className={cn(
                buttonVariants({
                  variant: "outline",
                }),
                "flex size-[45px] items-center justify-center self-end rounded-md p-[14px]",
              )}
            >
              <ArrowUpRight className="text-primary" size={30} />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default BenefitsCard;
