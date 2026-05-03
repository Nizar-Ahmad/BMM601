"use client";

import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import HighlightBlock from "@/components/ui/HighlightBlock";
import ImageCard from "@/components/ui/ImageCard";
import BeforeAfterCard from "@/components/ui/BeforeAfterCard";
import PageHero from "@/components/ui/PageHero";
import { useLanguage } from "@/context/LanguageContext";

export default function ImagesPage() {
  const { t } = useLanguage();

  return (
    <>
      <PageHero title={t.imagesPage.heroTitle} text={t.imagesPage.heroText} />

      <section className="py-10">
        <Container>
          <HighlightBlock
            title={t.imagesPage.generatedTitle}
            text={t.imagesPage.generatedText}
          />
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-10">
          <SectionTitle
            title={t.imagesPage.generatedTitle}
            text={t.imagesPage.generatedText}
            center
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <ImageCard
              label={t.mediaLabels.generated}
              title={t.imagesPage.generatedCard1Title}
              text={t.imagesPage.generatedCard1Text}
              src="/images/ai-image-1.webp"
              alt={t.imagesPage.generatedCard1Title}
            />
            <ImageCard
              label={t.mediaLabels.assisted}
              title={t.imagesPage.generatedCard2Title}
              text={t.imagesPage.generatedCard2Text}
              src="/images/ai-image-2.webp"
              alt={t.imagesPage.generatedCard2Title}
            />
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="space-y-10">
          <SectionTitle
            title={t.imagesPage.beforeAfterTitle}
            text={t.imagesPage.beforeAfterText}
            center
          />

          <BeforeAfterCard
            beforeLabel={t.mediaLabels.before}
            afterLabel={t.mediaLabels.after}
            title={t.imagesPage.beforeAfterTitle}
            text={t.imagesPage.beforeAfterText}
            beforeSrc="/images/ai-before.webp"
            afterSrc="/images/ai-after.webp"
          />
        </Container>
      </section>

      <section className="py-16 pb-24">
        <Container>
          <HighlightBlock
            title={t.imagesPage.enhancementTitle}
            text={t.imagesPage.enhancementText}
          />
        </Container>
      </section>
    </>
  );
}
