
import { createContext, useContext, useState, ReactNode } from "react";
import { translations, TranslationKeys } from "../lib/i18n";
import { Language } from "../lib/types";

interface LanguageContextType {
  language: Language;
  t: (category: keyof typeof translations.fr, key: string) => string;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("fr");

  // Translate function
  const t = (category: keyof typeof translations.fr, key: string): string => {
    try {
      return translations[language][category][key as keyof typeof translations.fr[keyof typeof translations.fr]];
    } catch (error) {
      console.error(`Translation not found for ${category}.${key} in language ${language}`);
      return key;
    }
  };

  // Check if current language is RTL
  const isRTL = language === "ar";

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage, isRTL }}>
      <div className={isRTL ? "ar" : ""}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  
  return context;
};
