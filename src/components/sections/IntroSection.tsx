"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";

export default function IntroSection() {
  const { t } = useLanguage();

  return (
    <section className="section-band py-16 sm:py-20">
      <Container>
        <SectionTitle
          title={t.home.introTitle}
          text={t.home.introText}
          center
        />
      </Container>
    </section>
  );
}
