"use client";

import Container from "@/components/layout/Container";
import InfoCard from "@/components/ui/InfoCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faMusic,
  faVideo,
  faLayerGroup,
} from "@fortawesome/free-solid-svg-icons";

export default function ContentTypesSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16">
      <Container className="space-y-10">
        <SectionTitle
          title={t.home.contentTypesTitle}
          text={t.home.contentTypesText}
          center
        />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <InfoCard
            icon={<FontAwesomeIcon icon={faImage} />}
            title={t.home.imageCardTitle}
            text={t.home.imageCardText}
          />
          <InfoCard
            icon={<FontAwesomeIcon icon={faMusic} />}
            title={t.home.audioCardTitle}
            text={t.home.audioCardText}
          />
          <InfoCard
            icon={<FontAwesomeIcon icon={faVideo} />}
            title={t.home.videoCardTitle}
            text={t.home.videoCardText}
          />
          <InfoCard
            icon={<FontAwesomeIcon icon={faLayerGroup} />}
            title={t.home.multimediaCardTitle}
            text={t.home.multimediaCardText}
          />
        </div>
      </Container>
    </section>
  );
}
