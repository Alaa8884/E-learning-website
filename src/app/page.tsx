import Benefits from "@/components/benefitsSection/Benefits";
import HeroSection from "@/components/heroSection/HeroSection";
import OurCourses from "@/components/ourCoursesSection/OurCourses";
import OurTestimonialsSection from "@/components/ourTestiSection/OurTestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Benefits />
      <OurCourses />
      <OurTestimonialsSection />
    </>
  );
}
