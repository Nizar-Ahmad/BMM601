"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const nextLanguage = language === "ar" ? "en" : "ar";

  return (
    <button
      onClick={() => setLanguage(nextLanguage)}
      className="surface-card interactive-accent rounded-full px-4 py-2 text-sm font-medium transition"
    >
      {nextLanguage === "ar" ? "العربية" : "English"}
    </button>
  );
}
