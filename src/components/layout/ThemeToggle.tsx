"use client";

import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const { language } = useLanguage();

  const isDark = theme === "dark";

  const label =
    language === "ar"
      ? isDark
        ? "الوضع الفاتح"
        : "الوضع الداكن"
      : isDark
        ? "Light Mode"
        : "Dark Mode";

  return (
    <div className="group relative">
      <button
        onClick={toggleTheme}
        aria-label={label}
        className="surface-card interactive-accent flex h-10 w-10 items-center justify-center rounded-full transition hover:scale-105"
      >
        <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="text-sm" />
      </button>

      <div
        className="pointer-events-none absolute top-full mt-2 whitespace-nowrap rounded-md px-3 py-1 text-xs opacity-0 transition group-hover:opacity-100"
        style={{
          background: "var(--foreground)",
          color: "var(--background)",
        }}
      >
        {label}
      </div>
    </div>
  );
}
