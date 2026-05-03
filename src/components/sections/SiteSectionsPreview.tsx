"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import { useLanguage } from "@/context/LanguageContext";

export default function SiteSectionsPreview() {
  const { t } = useLanguage();

  const sections = [
    { href: "/about", label: t.nav.about },
    { href: "/how-it-works", label: t.nav.howItWorks },
    { href: "/images", label: t.nav.images },
    { href: "/audio", label: t.nav.audio },
    { href: "/video", label: t.nav.video },
    { href: "/challenges", label: t.nav.challenges },
    { href: "/gallery", label: t.nav.gallery },
    { href: "/project", label: t.nav.project },
  ];

  return (
    <section className="section-band py-16 pb-24 sm:py-20">
      <Container className="space-y-10">
        <SectionTitle
          title={t.home.sectionsTitle}
          text={t.home.sectionsText}
          center
        />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sections.map((section) => (
            <Link
              key={section.href}
              href={section.href}
              className="surface-card surface-card-hover interactive-accent rounded-2xl p-5 text-center font-semibold"
            >
              {section.label}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
