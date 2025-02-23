import React from "react";
import HeadingSection from "../ui/HeadingSection";
import { FaqAccordion } from "./FaqAccordion";

function FaqSection() {
  return (
    <section className="mx-auto my-10 grid grid-cols-1 gap-10 p-6 md:my-[50px] md:grid-cols-2 md:gap-7 lg:my-[60px] xl:my-[80px] bg-btnWhite lg:gap-20 xl:gap-30">
      <HeadingSection
        title={"Frequently Asked Questions"}
        description={
          "Still you have any questions? Contact our Team via support@skillbridge.com"
        }
        buttonLink={"/faq"}
        headingStyle={"inverted"}
      />
      <FaqAccordion />
    </section>
  );
}

export default FaqSection;
