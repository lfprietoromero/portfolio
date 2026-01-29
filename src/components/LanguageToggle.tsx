import { useLanguage } from '../contexts/LanguageContext';

export const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-surface-light dark:hover:bg-surface-dark text-text-primary-light dark:text-text-primary-dark"
      aria-label="Toggle language"
    >
      {language === 'en' ? 'EN' : 'ES'}
    </button>
  );
};
