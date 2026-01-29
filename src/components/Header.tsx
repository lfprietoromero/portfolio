import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

export const Header = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
            Luis Fernando Prieto Romero
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('about')}
                className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                {t.nav.experience}
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                {t.nav.projects}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors"
              >
                {t.nav.contact}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
