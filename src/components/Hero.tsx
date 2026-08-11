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
    <section className="min-h-screen flex items-center px-6 pt-32 pb-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-12 items-center animate-fade-in">
        <div>
          <p className="font-mono text-sm text-secondary mb-4 tracking-wide">
            {'//'} {t.hero.eyebrow}
          </p>

          <h1 className="font-display text-4xl md:text-6xl font-semibold text-ink mb-4 leading-tight">
            Luis Fernando Prieto Romero
          </h1>

          <p className="font-mono text-sm text-muted mb-6">
            {t.hero.role}
          </p>

          <p className="font-body text-lg text-muted mb-8 max-w-xl leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToContact}
              className="px-6 py-3 bg-primary text-background font-mono text-sm uppercase tracking-wider rounded-md font-medium hover:opacity-90 transition-opacity"
            >
              {t.hero.cta}
            </button>
            <a
              href="/cv.pdf"
              download
              className="px-6 py-3 border border-border text-ink font-mono text-sm uppercase tracking-wider rounded-md font-medium hover:border-primary hover:text-primary transition-colors"
            >
              {t.hero.resume}
            </a>
          </div>
        </div>

        <div className="bg-surface border border-border rounded-lg p-5">
          <p className="font-mono text-[11px] uppercase tracking-widest text-muted mb-4">
            {t.hero.stackPanel.title}
          </p>
          <ul className="space-y-3">
            {t.hero.stackPanel.items.map((item, index) => (
              <li key={index} className="flex items-center justify-between font-mono text-xs">
                <span className="text-ink">{item}</span>
                <span className="flex items-center gap-1.5 text-primary">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-pulse-dot rounded-full bg-primary"></span>
                  </span>
                  {t.hero.stackPanel.status}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
