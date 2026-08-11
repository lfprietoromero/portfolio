import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '../contexts/LanguageContext';

const NAV_ITEMS = [
  { id: 'about', labelKey: 'about' },
  { id: 'experience', labelKey: 'experience' },
  { id: 'skills', labelKey: 'skills' },
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-1.5 flex items-center justify-between font-mono text-[11px] text-muted">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-primary"></span>
            </span>
            <span>
              {t.status.available} · {t.status.location} · {t.status.mode}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-display text-lg font-semibold text-ink">
            LFPR
          </div>

          <div className="hidden md:flex items-center gap-6 font-body text-sm">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-muted hover:text-ink transition-colors"
              >
                {t.nav[item.labelKey]}
              </button>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-4 py-2 bg-primary text-background font-mono text-xs uppercase tracking-wider rounded-md font-medium hover:opacity-90 transition-opacity"
          >
            {t.hero.cta}
          </button>
        </div>
      </nav>
    </header>
  );
};
