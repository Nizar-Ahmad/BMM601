"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import HighlightBlock from "@/components/ui/HighlightBlock";
import InfoCard from "@/components/ui/InfoCard";
import AudioSampleCard from "@/components/ui/AudioSampleCard";
import { useLanguage } from "@/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMicrophoneLines,
  faMusic,
  faVolumeHigh,
} from "@fortawesome/free-solid-svg-icons";

export default function AudioPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="py-16 sm:py-20">
        <Container className="space-y-6">
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl">
            {t.audioPage.heroTitle}
          </h1>

          <p className="max-w-4xl text-base leading-8 opacity-85 sm:text-lg">
            {t.audioPage.heroText}
          </p>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <HighlightBlock
            title={t.audioPage.useCasesTitle}
            text={t.audioPage.useCasesText}
          />
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-10">
          <SectionTitle
            title={t.audioPage.useCasesTitle}
            text={t.audioPage.useCasesText}
            center
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <InfoCard
              title={t.audioPage.card1Title}
              text={t.audioPage.card1Text}
              icon={<FontAwesomeIcon icon={faMicrophoneLines} />}
            />
            <InfoCard
              title={t.audioPage.card2Title}
              text={t.audioPage.card2Text}
              icon={<FontAwesomeIcon icon={faMusic} />}
            />
            <InfoCard
              title={t.audioPage.card3Title}
              text={t.audioPage.card3Text}
              icon={<FontAwesomeIcon icon={faVolumeHigh} />}
            />
          </div>
        </Container>
      </section>

      <section className="py-16 pb-24">
        <Container className="space-y-10">
          <SectionTitle
            title={t.audioPage.sampleTitle}
            text={t.audioPage.sampleText}
            center
          />

          <AudioSampleCard
            label={t.mediaLabels.sampleAudio}
            title={t.audioPage.sampleTitle}
            text={t.audioPage.sampleText}
            src="/audio/sample2.mp3"
          />
        </Container>
      </section>
    </>
  );
}
