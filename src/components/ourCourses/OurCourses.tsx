import React from 'react'
import HeadingSection from '../ui/HeadingSection';

function OurCourses() {
  return (
    <section className="mx-auto">
      <HeadingSection
        title={"Our Courses"}
        description={
          "Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        }
        buttonLink={"/courses"}
      />
    </section>
  );
}

export default OurCourses