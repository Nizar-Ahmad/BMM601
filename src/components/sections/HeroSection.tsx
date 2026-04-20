"use client";

import Link from "next/link";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.18),transparent_25%),radial-gradient(circle_at_left,rgba(139,92,246,0.18),transparent_30%)]" />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="space-y-6">

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              {t.home.heroTitle}
            </h1>

            <p className="max-w-2xl text-base leading-8 opacity-85 sm:text-lg">
              {t.home.heroSubtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                {t.home.heroPrimaryBtn}
              </Link>

              <Link
                href="/gallery"
                className="rounded-full border px-6 py-3 text-sm font-semibold transition hover:opacity-90"
                style={{ borderColor: "var(--border)" }}
              >
                {t.home.heroSecondaryBtn}
              </Link>
            </div>
          </div>

          <div
            className="rounded-3xl border p-6 shadow-2xl"
            style={{
              borderColor: "var(--border)",
              background:
                "linear-gradient(135deg, rgba(34,211,238,0.14), rgba(139,92,246,0.14))",
            }}
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <h3 className="mb-2 font-bold">{t.home.imageCardTitle}</h3>
                <p className="text-sm opacity-80">{t.home.imageCardText}</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <h3 className="mb-2 font-bold">{t.home.audioCardTitle}</h3>
                <p className="text-sm opacity-80">{t.home.audioCardText}</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <h3 className="mb-2 font-bold">{t.home.videoCardTitle}</h3>
                <p className="text-sm opacity-80">{t.home.videoCardText}</p>
              </div>

              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <h3 className="mb-2 font-bold">{t.home.multimediaCardTitle}</h3>
                <p className="text-sm opacity-80">{t.home.multimediaCardText}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}