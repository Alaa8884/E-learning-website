import Benefits from "@/components/benefitsSection/Benefits";
import FaqSection from "@/components/faqSection/FaqSection";
import HeroSection from "@/components/heroSection/HeroSection";
import OurCourses from "@/components/ourCoursesSection/OurCourses";
// import { OurPricingSection } from "@/components/ourpricingSection/OurPricingSection";
import OurTestimonialsSection from "@/components/ourTestiSection/OurTestimonialsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Benefits />
      <OurCourses />
      <OurTestimonialsSection />
      {/* <OurPricingSection /> */ }
      <FaqSection/>
    </>
  );
}
