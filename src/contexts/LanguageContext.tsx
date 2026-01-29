import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from '../i18n/en.json';
import es from '../i18n/es.json';

type Language = 'en' | 'es';
type Translations = typeof en;

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Translations> = {
  en,
  es,
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first, default to English
    const stored = localStorage.getItem('language');
    return (stored as Language) || 'en';
  });

  useEffect(() => {
    // Persist to localStorage
    localStorage.setItem('language', language);

    // Update HTML lang attribute
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
