"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import InfoCard from "@/components/ui/InfoCard";
import HighlightBlock from "@/components/ui/HighlightBlock";
import { useLanguage } from "@/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faMicrophoneLines,
  faClapperboard,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <>
      <section className="py-16 sm:py-20">
        <Container className="space-y-6">

          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl">
            {t.about.heroTitle}
          </h1>

          <p className="max-w-4xl text-base leading-8 opacity-85 sm:text-lg">
            {t.about.heroText}
          </p>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <HighlightBlock
            title={t.about.definitionTitle}
            text={t.about.definitionText}
          />
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-10">
          <SectionTitle
            title={t.about.differenceTitle}
            text={t.about.differenceText}
            center
          />
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-10">
          <SectionTitle
            title={t.about.examplesTitle}
            text={t.about.examplesText}
            center
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <InfoCard
              icon={<FontAwesomeIcon icon={faPalette} />}
              title={t.about.examplesCard1Title}
              text={t.about.examplesCard1Text}
            />
            <InfoCard
              icon={<FontAwesomeIcon icon={faMicrophoneLines} />}
              title={t.about.examplesCard2Title}
              text={t.about.examplesCard2Text}
            />
            <InfoCard
              icon={<FontAwesomeIcon icon={faClapperboard} />}
              title={t.about.examplesCard3Title}
              text={t.about.examplesCard3Text}
            />
          </div>
        </Container>
      </section>

      <section className="py-16 pb-24">
        <Container>
          <HighlightBlock
            title={t.about.importanceTitle}
            text={t.about.importanceText}
          />
        </Container>
      </section>
    </>
  );
}
