"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import HighlightBlock from "@/components/ui/HighlightBlock";
import InfoCard from "@/components/ui/InfoCard";
import PageHero from "@/components/ui/PageHero";
import { useLanguage } from "@/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBolt,
  faLightbulb,
  faCoins,
  faTriangleExclamation,
  faScaleBalanced,
  faBrain,
} from "@fortawesome/free-solid-svg-icons";

export default function ChallengesPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero
        title={t.challengesPage.heroTitle}
        text={t.challengesPage.heroText}
      />

      <section className="py-16">
        <Container className="space-y-10">
          <SectionTitle
            title={t.challengesPage.prosTitle}
            text={t.challengesPage.prosText}
            center
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <InfoCard
              title={t.challengesPage.pro1Title}
              text={t.challengesPage.pro1Text}
              icon={<FontAwesomeIcon icon={faBolt} />}
            />
            <InfoCard
              title={t.challengesPage.pro2Title}
              text={t.challengesPage.pro2Text}
              icon={<FontAwesomeIcon icon={faLightbulb} />}
            />
            <InfoCard
              title={t.challengesPage.pro3Title}
              text={t.challengesPage.pro3Text}
              icon={<FontAwesomeIcon icon={faCoins} />}
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-10">
          <SectionTitle
            title={t.challengesPage.consTitle}
            text={t.challengesPage.consText}
            center
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            <InfoCard
              title={t.challengesPage.con1Title}
              text={t.challengesPage.con1Text}
              icon={<FontAwesomeIcon icon={faTriangleExclamation} />}
            />
            <InfoCard
              title={t.challengesPage.con2Title}
              text={t.challengesPage.con2Text}
              icon={<FontAwesomeIcon icon={faScaleBalanced} />}
            />
            <InfoCard
              title={t.challengesPage.con3Title}
              text={t.challengesPage.con3Text}
              icon={<FontAwesomeIcon icon={faBrain} />}
            />
          </div>
        </Container>
      </section>

      <section className="py-16 pb-24">
        <Container>
          <HighlightBlock
            title={t.challengesPage.ethicsTitle}
            text={t.challengesPage.ethicsText}
          />
        </Container>
      </section>
    </>
  );
}
