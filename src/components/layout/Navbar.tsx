"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "@/components/layout/Container";
import ThemeToggle from "@/components/layout/ThemeToggle";
import LanguageToggle from "@/components/layout/LanguageToggle";
import { useLanguage } from "@/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import Logo from "@/components/layout/Logo";

export default function Navbar() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: t.nav.home },
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
    <header
      className="sticky top-0 z-50 border-b backdrop-blur"
      style={{
        borderColor: "var(--border)",
        background: "color-mix(in srgb, var(--background) 88%, transparent)",
      }}
    >
      <Container className="py-4">
        <div className="flex items-center justify-between gap-4">
          <Logo />

          <div className="hidden items-center gap-3 lg:flex">
            <nav className="flex flex-wrap items-center gap-4 text-sm">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-3 py-2 transition ${
                      isActive ? "text-cyan-400" : "hover:text-cyan-400"
                    }`}
                    style={{
                      background: isActive ? "rgba(34,211,238,0.08)" : "transparent",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <LanguageToggle />
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <LanguageToggle />
            <ThemeToggle />
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="rounded-full border px-4 py-2 text-sm"
              style={{
                borderColor: "var(--border)",
                background: "var(--card)",
              }}
            >
              <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className="mt-4 rounded-3xl border p-4 lg:hidden"
            style={{
              borderColor: "var(--border)",
              background: "var(--card)",
            }}
          >
            <nav className="grid grid-cols-1 gap-2">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive ? "text-cyan-400" : "hover:text-cyan-400"
                    }`}
                    style={{
                      background: isActive ? "rgba(34,211,238,0.08)" : "transparent",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}