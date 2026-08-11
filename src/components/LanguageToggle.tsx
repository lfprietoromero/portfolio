import { useLanguage } from '../contexts/LanguageContext';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1.5 rounded-md border border-border font-mono text-xs uppercase tracking-wider text-muted hover:text-primary hover:border-primary transition-colors"
      aria-label="Toggle language"
    >
      {language === 'en' ? 'EN' : 'ES'}
    </button>
  );
};
