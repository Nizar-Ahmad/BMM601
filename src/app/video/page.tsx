"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import HighlightBlock from "@/components/ui/HighlightBlock";
import InfoCard from "@/components/ui/InfoCard";
import VideoSampleCard from "@/components/ui/VideoSampleCard";
import { useLanguage } from "@/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faWandMagicSparkles,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";

export default function VideoPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="py-16 sm:py-20">
        <Container className="space-y-6">
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl">
            {t.videoPage.heroTitle}
          </h1>

          <p className="max-w-4xl text-base leading-8 opacity-85 sm:text-lg">
            {t.videoPage.heroText}
          </p>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <HighlightBlock
            title={t.videoPage.usesTitle}
            text={t.videoPage.usesText}
          />
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-10">
          <SectionTitle
            title={t.videoPage.usesTitle}
            text={t.videoPage.usesText}
            center
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <InfoCard
              title={t.videoPage.card1Title}
              text={t.videoPage.card1Text}
              icon={<FontAwesomeIcon icon={faGraduationCap} />}
            />
            <InfoCard
              title={t.videoPage.card2Title}
              text={t.videoPage.card2Text}
              icon={<FontAwesomeIcon icon={faWandMagicSparkles} />}
            />
            <InfoCard
              title={t.videoPage.card3Title}
              text={t.videoPage.card3Text}
              icon={<FontAwesomeIcon icon={faFilm} />}
            />
          </div>
        </Container>
      </section>

      <section className="py-16 pb-24">
        <Container className="space-y-10">
          <SectionTitle
            title={t.videoPage.sampleTitle}
            text={t.videoPage.sampleText}
            center
          />

          <VideoSampleCard
            label={t.mediaLabels.sampleVideo}
            title={t.videoPage.sampleTitle}
            text={t.videoPage.sampleText}
            src="/video/sample-video.mp4"
          />
        </Container>
      </section>
    </>
  );
}
