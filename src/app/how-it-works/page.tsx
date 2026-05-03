"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import HighlightBlock from "@/components/ui/HighlightBlock";
import InfographicFlow from "@/components/ui/InfographicFlow";
import PageHero from "@/components/ui/PageHero";
import { useLanguage } from "@/context/LanguageContext";

export default function HowItWorksPage() {
  const { t } = useLanguage();

  const steps = [
    {
      number: "1",
      title: t.howItWorksPage.step1Title,
      text: t.howItWorksPage.step1Text,
    },
    {
      number: "2",
      title: t.howItWorksPage.step2Title,
      text: t.howItWorksPage.step2Text,
    },
    {
      number: "3",
      title: t.howItWorksPage.step3Title,
      text: t.howItWorksPage.step3Text,
    },
    {
      number: "4",
      title: t.howItWorksPage.step4Title,
      text: t.howItWorksPage.step4Text,
    },
  ];

  return (
    <>
      <PageHero
        title={t.howItWorksPage.heroTitle}
        text={t.howItWorksPage.heroText}
      />

      <section className="py-10">
        <Container>
          <HighlightBlock
            title={t.howItWorksPage.trainingTitle}
            text={t.howItWorksPage.trainingText}
          />
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-10">
          <SectionTitle
            title={t.howItWorksPage.processTitle}
            text={t.howItWorksPage.processText}
            center
          />

          <InfographicFlow items={steps} />
        </Container>
      </section>

      <section className="py-16 pb-24">
        <Container>
          <HighlightBlock
            title={t.howItWorksPage.infographicTitle}
            text={t.howItWorksPage.infographicText}
          />
        </Container>
      </section>
    </>
  );
}
