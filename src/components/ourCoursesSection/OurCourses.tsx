import React from "react";
import HeadingSection from "../ui/HeadingSection";
import OurCoursesCard from "./OurCoursesCard";

function OurCourses() {
  return (
    <section className="mx-auto flex flex-col gap-10 md:gap-[60px] xl:gap-20">
      <HeadingSection
        title={"Our Courses"}
        description={
          "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        }
        buttonLink={"/courses"}
        headingStyle={"default"}
      />
      <OurCoursesCard />
    </section>
  );
}

export default OurCourses;
