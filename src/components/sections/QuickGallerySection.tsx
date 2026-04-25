"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import MediaPreviewCard from "@/components/ui/MediaPreviewCard";
import { useLanguage } from "@/context/LanguageContext";

export default function QuickGallerySection() {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <Container className="space-y-10">
        <SectionTitle
          title={t.home.quickGalleryTitle}
          text={t.home.quickGalleryText}
          center
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <MediaPreviewCard
            label={t.home.quickGalleryCard1Label}
            title={t.home.quickGalleryCard1Title}
            description={t.home.quickGalleryCard1Description}
            type="image"
            src="/images/space-cat.webp"
          />

          <MediaPreviewCard
            label={t.home.quickGalleryCard2Label}
            title={t.home.quickGalleryCard2Title}
            description={t.home.quickGalleryCard2Description}
            type="audio"
            src="/media/audio1.mp3"
          />

          <MediaPreviewCard
            label={t.home.quickGalleryCard3Label}
            title={t.home.quickGalleryCard3Title}
            description={t.home.quickGalleryCard3Description}
            type="video"
            src="/media/video1.mp4"
          />
        </div>
      </Container>
    </section>
  );
}
