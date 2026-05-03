"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/Container";
import { useLanguage } from "@/context/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden py-14 sm:py-18 lg:py-20">
      <div className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="space-y-6">
            <span className="inline-flex rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em]" style={{ borderColor: "var(--border)", background: "var(--card)", color: "var(--accent)" }}>
              GenMedia AI
            </span>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              {t.home.heroTitle}
            </h1>

            <p className="max-w-2xl text-base leading-8 sm:text-lg" style={{ color: "var(--muted)" }}>
              {t.home.heroSubtitle}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about"
                className="primary-action rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5 hover:opacity-95"
              >
                {t.home.heroPrimaryBtn}
              </Link>

              <Link
                href="/gallery"
                className="surface-card interactive-accent rounded-full px-6 py-3 text-sm font-semibold transition hover:-translate-y-0.5"
              >
                {t.home.heroSecondaryBtn}
              </Link>
            </div>
          </div>

          <div>
            <div className="media-frame overflow-hidden rounded-[2rem] p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.45rem]">
                <Image
                  src="/images/space-cat.webp"
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/82 via-slate-950/16 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 grid gap-3 p-4 sm:grid-cols-2 sm:p-5">
                  <div className="rounded-2xl border border-white/15 bg-white/12 p-4 text-white backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                      {t.home.imageCardTitle}
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/82">
                      {t.home.imageCardText}
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/15 bg-white/12 p-4 text-white backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
                      {t.home.videoCardTitle}
                    </p>
                    <p className="mt-2 line-clamp-2 text-sm leading-6 text-white/82">
                      {t.home.videoCardText}
                    </p>
                  </div>
                </div>
              </div>

              <div className="audio-panel mt-3 rounded-2xl p-4">
                <p className="text-sm font-bold">{t.home.audioCardTitle}</p>
                <p className="mt-1 line-clamp-2 text-xs leading-6" style={{ color: "var(--muted)" }}>
                  {t.home.audioCardText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
