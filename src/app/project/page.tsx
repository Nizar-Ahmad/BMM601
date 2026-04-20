"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import HighlightBlock from "@/components/ui/HighlightBlock";
import InfoCard from "@/components/ui/InfoCard";
import ReferenceList from "@/components/ui/ReferenceList";
import { useLanguage } from "@/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faPaintbrush, faRobot } from "@fortawesome/free-solid-svg-icons";

export default function ProjectPage() {
  const { t, language } = useLanguage();

  const references =
    language === "ar"
      ? [
          {
            title: "Artificial Intelligence Overview",
            source: "IBM / Educational Technology Resources",
            note: "مرجع عام لفهم الذكاء الصنعي ومجالات استخدامه الأساسية.",
          },
          {
            title: "Generative AI Concepts",
            source:
              "Introductory educational articles and technical explainers",
            note: "مرجع مساعد لفهم مفهوم التوليد وآلية عمل النماذج الحديثة.",
          },
          {
            title: "Multimedia Design Principles",
            source: "Academic multimedia learning materials",
            note: "مرجع يفيد في ربط الذكاء الصنعي بمجال التصميم والوسائط المتعددة.",
          },
        ]
      : [
          {
            title: "Artificial Intelligence Overview",
            source: "IBM / Educational Technology Resources",
            note: "A general reference for understanding artificial intelligence and its core applications.",
          },
          {
            title: "Generative AI Concepts",
            source:
              "Introductory educational articles and technical explainers",
            note: "A supporting reference for understanding generation concepts and modern model workflows.",
          },
          {
            title: "Multimedia Design Principles",
            source: "Academic multimedia learning materials",
            note: "A useful reference linking AI with design and multimedia production.",
          },
        ];

  return (
    <>
      <section className="py-16 sm:py-20">
        <Container className="space-y-6">
          <h1 className="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl">
            {t.projectPage.heroTitle}
          </h1>

          <p className="max-w-4xl text-base leading-8 opacity-85 sm:text-lg">
            {t.projectPage.heroText}
          </p>
        </Container>
      </section>

      <section className="py-10">
        <Container>
          <HighlightBlock
            title={t.projectPage.goalsTitle}
            text={t.projectPage.goalsText}
          />
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-10">
          <SectionTitle
            title={t.projectPage.toolsTitle}
            text={t.projectPage.toolsText}
            center
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <InfoCard
              title={t.projectPage.toolsCard1Title}
              text={t.projectPage.toolsCard1Text}
              icon={<FontAwesomeIcon icon={faReact} />}
            />
            <InfoCard
              title={t.projectPage.toolsCard2Title}
              text={t.projectPage.toolsCard2Text}
              icon={<FontAwesomeIcon icon={faPaintbrush} />}
            />
            <InfoCard
              title={t.projectPage.toolsCard3Title}
              text={t.projectPage.toolsCard3Text}
              icon={<FontAwesomeIcon icon={faRobot} />}
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <HighlightBlock
            title={t.projectPage.aiContentTitle}
            text={t.projectPage.aiContentText}
          />
        </Container>
      </section>

      <section className="py-16 pb-24">
        <Container className="space-y-10">
          <SectionTitle
            title={t.projectPage.referencesTitle}
            text={t.projectPage.referencesText}
            center
          />

          <ReferenceList items={references} />
        </Container>
      </section>
    </>
  );
}
