import { useLanguage } from '../contexts/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-8 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-primary"></span>
            </span>
            {t.hero.title}
          </span>
        </div>

        <div className="mb-6">
          <p className="font-mono text-sm md:text-base text-primary mb-3 tracking-wide">
            {'>'} {t.hero.greeting}
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-semibold text-paper mb-4">
            Luis Fernando Prieto Romero
          </h1>
        </div>

        <p className="font-body text-lg md:text-xl text-muted mb-12 max-w-2xl mx-auto leading-relaxed">
          {t.hero.subtitle}
        </p>

        <button
          onClick={scrollToContact}
          className="px-8 py-4 bg-primary text-background font-mono text-sm uppercase tracking-wider rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-primary/10"
        >
          {t.hero.cta}
        </button>
      </div>
    </section>
  );
};
