import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

const NAV_ITEMS = [
  { id: 'about', labelKey: 'about' },
  { id: 'experience', labelKey: 'experience' },
  { id: 'projects', labelKey: 'projects' },
  { id: 'contact', labelKey: 'contact' },
] as const;

export const Header = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-display text-lg md:text-xl font-semibold text-paper">
            Luis Fernando Prieto Romero
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6 font-mono text-xs uppercase tracking-wider">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-label={t.nav[item.labelKey]}
                  className="text-muted hover:text-primary transition-colors"
                >
                  {item.id}/
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
