"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const nextLanguage = language === "ar" ? "en" : "ar";

  return (
    <button
      onClick={() => setLanguage(nextLanguage)}
      className="rounded-full border px-4 py-2 text-sm transition hover:opacity-90"
      style={{
        borderColor: "var(--border)",
        background: "var(--card)",
      }}
    >
      {nextLanguage === "ar" ? "العربية" : "English"}
    </button>
  );
}