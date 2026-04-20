"use client";

import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

export default function Logo({
  withText = true,
  href = "/",
}: {
  withText?: boolean;
  href?: string;
}) {
  const { theme } = useTheme();
  const { language } = useLanguage();

  const isDark = theme === "dark";

  const shell = isDark ? "#081120" : "#F8FAFC";
  const panel = isDark ? "#0F172A" : "#FFFFFF";
  const border = isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)";
  const textMain = isDark ? "#E6EEF8" : "#0F172A";
  const textSub = isDark ? "rgba(230,238,248,0.64)" : "rgba(15,23,42,0.58)";

  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-3.5 transition-opacity hover:opacity-95"
      aria-label="GenMedia AI"
    >
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl">
        <svg viewBox="0 0 64 64" className="h-12 w-12" aria-hidden="true">
          <defs>
            <linearGradient id="gm-frame" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22D3EE" />
              <stop offset="55%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>

            <linearGradient id="gm-fill" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#67E8F9" />
              <stop offset="50%" stopColor="#22D3EE" />
              <stop offset="100%" stopColor="#8B5CF6" />
            </linearGradient>

            <filter id="gm-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2.8" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* outer shell */}
          <rect
            x="4"
            y="4"
            width="56"
            height="56"
            rx="18"
            fill={shell}
            stroke="url(#gm-frame)"
            strokeWidth="1.4"
          />

          {/* inner panel */}
          <rect
            x="10"
            y="10"
            width="44"
            height="44"
            rx="14"
            fill={panel}
            stroke={border}
            strokeWidth="1"
          />

          {/* futuristic GM monogram */}
          {/* G */}
          <path
            d="M24 22H35"
            stroke="url(#gm-fill)"
            strokeWidth="3.8"
            strokeLinecap="round"
          />
          <path
            d="M24 22L20 26V38L24 42H35"
            fill="none"
            stroke="url(#gm-fill)"
            strokeWidth="3.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M35 32H28.5"
            stroke="url(#gm-fill)"
            strokeWidth="3.8"
            strokeLinecap="round"
          />

          {/* M */}
          <path
            d="M29 42V24L35 31L41 24V42"
            fill="none"
            stroke={textMain}
            strokeWidth="3.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* AI accent */}
          <circle cx="45.5" cy="18.5" r="2.4" fill="#22D3EE" filter="url(#gm-glow)" />
          <path
            d="M40.8 21.4L43.4 19.6"
            stroke="#22D3EE"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.9"
          />
        </svg>
      </div>

      {withText && (
        <div className="flex flex-col leading-none">
          <span className="text-[1.05rem] font-black tracking-[-0.02em] sm:text-lg">
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent">
              GenMedia AI
            </span>
          </span>

          <span
            className="mt-1 text-[11px] font-medium sm:text-xs"
            style={{ color: textSub }}
          >
            {language === "ar"
              ? "منصة SaaS للوسائط التوليدية"
              : "Generative media SaaS platform"}
          </span>
        </div>
      )}
    </Link>
  );
}