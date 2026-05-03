"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import GalleryGridCard from "@/components/ui/GalleryGridCard";
import AudioSampleCard from "@/components/ui/AudioSampleCard";
import VideoSampleCard from "@/components/ui/VideoSampleCard";
import { useLanguage } from "@/context/LanguageContext";

export default function GalleryPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="py-16 sm:py-20">
        <Container className="space-y-6">


          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl">
            {t.galleryPage.heroTitle}
          </h1>

          <p className="max-w-4xl text-base leading-8 opacity-85 sm:text-lg">
            {t.galleryPage.heroText}
          </p>
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-10">
          <SectionTitle
            title={t.galleryPage.imagesTitle}
            text={t.galleryPage.imagesText}
            center
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <GalleryGridCard
              label={t.mediaLabels.generated}
              title={t.galleryPage.item1Title}
              text={t.galleryPage.item1Text}
              src="/images/gallery-1.webp"
              alt={t.galleryPage.item1Title}
            />
            <GalleryGridCard
              label={t.mediaLabels.enhanced}
              title={t.galleryPage.item2Title}
              text={t.galleryPage.item2Text}
              src="/images/gallery-2.webp"
              alt={t.galleryPage.item2Title}
            />
            <GalleryGridCard
              label={t.mediaLabels.assisted}
              title={t.galleryPage.item6Title}
              text={t.galleryPage.item6Text}
              src="/images/gallery-3.webp"
              alt={t.galleryPage.item6Title}
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-10">
          <SectionTitle
            title={t.galleryPage.audioTitle}
            text={t.galleryPage.audioText}
            center
          />

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <AudioSampleCard
              label={t.mediaLabels.sampleAudio}
              title={t.galleryPage.item3Title}
              text={t.galleryPage.item3Text}
              src="/audio/sample3.mp3"
            />
            <AudioSampleCard
              label={t.mediaLabels.assisted}
              title={t.galleryPage.item4Title}
              text={t.galleryPage.item4Text}
              src="/audio/sample4.mp3"
            />
          </div>
        </Container>
      </section>

      <section className="py-16 pb-24">
        <Container className="space-y-10">
          <SectionTitle
            title={t.galleryPage.videoTitle}
            text={t.galleryPage.videoText}
            center
          />

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
            <VideoSampleCard
              label={t.mediaLabels.sampleVideo}
              title={t.galleryPage.item5Title}
              text={t.galleryPage.item5Text}
              src="/video/sample-video.mp4"
            />
            <VideoSampleCard
              label={t.mediaLabels.enhanced}
              title={t.galleryPage.item6Title}
              text={t.galleryPage.item6Text}
              src="/video/sample-video.mp4"
            />
          </div>
        </Container>
      </section>
    </>
  );
}
