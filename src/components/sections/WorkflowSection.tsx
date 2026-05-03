"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import StepCard from "@/components/ui/StepCard";
import { useLanguage } from "@/context/LanguageContext";

export default function WorkflowSection() {
  const { t } = useLanguage();

  return (
    <section className="section-band py-16 sm:py-20">
      <Container className="space-y-10">
        <SectionTitle
          title={t.home.workflowTitle}
          text={t.home.workflowText}
          center
        />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          <StepCard
            number="1"
            title={t.home.workflowStep1Title}
            text={t.home.workflowStep1Text}
          />
          <StepCard
            number="2"
            title={t.home.workflowStep2Title}
            text={t.home.workflowStep2Text}
          />
          <StepCard
            number="3"
            title={t.home.workflowStep3Title}
            text={t.home.workflowStep3Text}
          />
          <StepCard
            number="4"
            title={t.home.workflowStep4Title}
            text={t.home.workflowStep4Text}
          />
        </div>
      </Container>
    </section>
  );
}
