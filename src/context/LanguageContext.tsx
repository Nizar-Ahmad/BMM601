"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import ar from "@/translations/ar";
import en from "@/translations/en";
import type { Translation } from "@/types/translation";

type Language = "ar" | "en";
type Direction = "rtl" | "ltr";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translation;
  dir: Direction;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === "undefined") return "ar";

  const saved = localStorage.getItem("language");
  return saved === "ar" || saved === "en" ? saved : "ar";
}

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const dir: Direction = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  const value: LanguageContextType = useMemo(
    () => ({
      language,
      setLanguage,
      t: language === "ar" ? ar : en,
      dir,
    }),
    [language, dir]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}