import HeroVideoDialog from "@/components/ui/magicui/hero-video-dialog";

export function SocialVideo() {
  return (
    <div className="relative my-10">
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/bjFvcFjJpE0?si=hNp4Uf2D8S1wb32R"
        thumbnailSrc="/assets/video_img01.png"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/bjFvcFjJpE0?si=hNp4Uf2D8S1wb32R"
        thumbnailSrc="/assets/video_img01.png"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
