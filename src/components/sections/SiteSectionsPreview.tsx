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
    <section className="py-16 pb-24">
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
              className="rounded-2xl border p-5 text-center font-semibold transition duration-300 hover:-translate-y-1 hover:text-cyan-400"
              style={{
                borderColor: "var(--border)",
                background: "var(--card)",
              }}
            >
              {section.label}
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}