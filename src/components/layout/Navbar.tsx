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
      className="sticky top-0 z-50 border-b backdrop-blur-xl"
      style={{
        borderColor: "var(--border)",
        background: "color-mix(in srgb, var(--background) 82%, transparent)",
        boxShadow: "0 10px 32px rgba(15, 23, 42, 0.06)",
      }}
    >
      <Container className="py-3">
        <div className="flex items-center justify-between gap-4">
          <Logo />

          <div className="hidden items-center gap-3 lg:flex">
            <nav
              className="flex flex-wrap items-center gap-1 rounded-full border p-1 text-sm"
              style={{
                borderColor: "var(--border)",
                background: "color-mix(in srgb, var(--card) 86%, transparent)",
              }}
            >
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`rounded-full px-3 py-2 font-medium transition ${
                      isActive ? "nav-link-active" : "nav-link"
                    }`}
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
              className="surface-card flex h-10 w-10 items-center justify-center rounded-full text-sm"
              aria-label="Toggle navigation"
            >
              <FontAwesomeIcon icon={isOpen ? faXmark : faBars} />
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className="surface-card mt-4 rounded-2xl p-3 lg:hidden"
          >
            <nav className="grid grid-cols-1 gap-2">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                      isActive ? "nav-link-active" : "nav-link"
                    }`}
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
