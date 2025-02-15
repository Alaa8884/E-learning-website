import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import Image from "next/image";

const reviews = [
  {
    altText: "social icon",
    img: "/assets/hero_logo_1.png",
  },
  {
    altText: "social icon",
    img: "/assets/hero_logo_2.png",
  },
  {
    altText: "social icon",
    img: "/assets/hero_logo_3.png",
  },
  {
    altText: "social icon",
    img: "/assets/hero_logo_4.png",
  },
  {
    altText: "social icon",
    img: "/assets/hero_logo_5.png",
  },
  {
    altText: "social icon",
    img: "/assets/hero_logo_6.png",
  },
  {
    altText: "social icon",
    img: "/assets/hero_logo_7.png",
  },
];

export function SocialSiteCard() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="bg-white [--duration:20s]">
        {reviews.map((review) => (
          <div
            key={review.img}
            className="flex h-16 items-center justify-center border-r-2 border-slate-300 px-[30px] py-5 md:h-[68px] lg:h-[94px] lg:px-10 lg:py-[30px]"
          >
            <Image
              src={review.img}
              alt={review.altText}
              width={100}
              height={34}
              className="object-fill"
            />
          </div>
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}
