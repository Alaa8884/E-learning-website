import React from "react";
import HeadingSection from "../ui/HeadingSection";
import BenefitsCard from "./BenefitsCard";

export default function Benefits() {
  return (
    <section className="mx-auto">
      <HeadingSection
        title={"Benefits"}
        description={
          "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        }
        buttonLink={"/benefits"}
      />
      <BenefitsCard />
    </section>
  );
}
