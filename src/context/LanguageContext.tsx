"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
} from "react";
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

const DEFAULT_LANGUAGE: Language = "ar";
const LANGUAGE_STORAGE_KEY = "language";
const LANGUAGE_CHANGE_EVENT = "taskflow-language-change";

function getSavedLanguage(): Language {
  try {
    const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    return saved === "ar" || saved === "en" ? saved : DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

function subscribeToLanguageChange(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);
  };
}

function saveLanguage(lang: Language) {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, lang);
  } catch {
    // Preference storage can be blocked by private browsing or strict policies.
  }

  window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
}

export function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const language = useSyncExternalStore(
    subscribeToLanguageChange,
    getSavedLanguage,
    () => DEFAULT_LANGUAGE
  );

  const setLanguage = useCallback((lang: Language) => {
    saveLanguage(lang);
  }, []);

  const dir: Direction = language === "ar" ? "rtl" : "ltr";

  useEffect(() => {
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
    [language, setLanguage, dir]
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
