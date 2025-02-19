import React from "react";
import HeadingSection from "../ui/HeadingSection";
import OurTestimonialsCard from "./OurTestimonialsCard";

function OurTestimonialsSection() {
  return (
    <section className="mx-auto">
      <HeadingSection
        title={"Our Testimonials"}
        description={
          "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        }
        buttonLink={"/testimonials"}
          />
          <OurTestimonialsCard/>
    </section>
  );
}

export default OurTestimonialsSection;
