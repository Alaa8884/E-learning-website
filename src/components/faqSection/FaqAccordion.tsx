import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function FaqAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="flex w-full flex-col gap-5 md:gap-[30px] lg:gap-[50px]"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>
          Can I enroll in multiple courses at once?
        </AccordionTrigger>
        <AccordionContent>
          <div className="text-sm text-gray-500">
            Absolutely! You can enroll in multiple courses simultaneously and
            access them at your convenience.
          </div>{" "}
          <Link
            href={"/"}
            className="flex items-center justify-between bg-background px-5 py-[12px] lg:p-[12px] font-medium"
          >
            {" "}
            <span> Enrollment Process for Different Courses</span>
            <ArrowRight size={16} />
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>
          What kind of support can I expect from instructors?
        </AccordionTrigger>
        <AccordionContent>
          <div className="text-sm text-gray-500">
            You can recieve support from instructors and get help at any time
            you want.
          </div>{" "}
          <Link
            href={"/"}
            className="flex items-center justify-between bg-background px-5 py-[12px] font-medium"
          >
            {" "}
            <span> Go to support page</span>
            <ArrowRight size={16} />
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>
          Are the courses self-paced or do they have specific start and end
          dates?
        </AccordionTrigger>
        <AccordionContent>
          <div className="text-sm text-gray-500">
            Our courses are online learning course, so they doesn't have
            specific start and end dates.
          </div>{" "}
          <Link
            href={"/"}
            className="flex items-center justify-between bg-background px-5 py-[12px] font-medium"
          >
            {" "}
            <span>For more details about our courses</span>
            <ArrowRight size={16} />
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>
          Are there any prerequisites for the courses?
        </AccordionTrigger>
        <AccordionContent>
          <div className="text-sm text-gray-500">
            we have courses from beginner to expert level you don't have to know
            any thing about programing.
          </div>{" "}
          <Link
            href={"/"}
            className="flex items-center justify-between bg-background px-5 py-[12px] font-medium"
          >
            {" "}
            <span> Enrollment Process for Different Courses</span>
            <ArrowRight size={16} />
          </Link>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>
          Can I download the course materials for offline access?
        </AccordionTrigger>
        <AccordionContent>
          <div className="text-sm text-gray-500">
            yeso, you can download courses materials such as Pdf files and
            books.
          </div>{" "}
          <Link
            href={"/"}
            className="flex items-center justify-between bg-background px-5 py-[12px] font-medium"
          >
            {" "}
            <span>Go to privcy policy of our company</span>
            <ArrowRight size={16} />
          </Link>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
