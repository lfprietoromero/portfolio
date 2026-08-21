import { useLanguage } from '../contexts/LanguageContext';
import { Button } from './ui/Button';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-32 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black_10%,transparent_75%)]" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-primary/10 blur-[120px] animate-float-slow" />

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-[1.3fr_1fr] gap-12 items-center animate-fade-in">
        <div>
          <p className="font-mono text-sm text-secondary mb-4 tracking-wide">
            {'//'} {t.hero.eyebrow}
          </p>

          <h1 className="font-display italic text-4xl md:text-6xl font-medium text-ink mb-4 leading-tight text-glow">
            Luis Fernando Prieto Romero
          </h1>

          <p className="font-mono text-sm text-muted mb-6">
            {t.hero.role}
          </p>

          <p className="font-body text-lg text-muted mb-8 max-w-xl leading-relaxed">
            {t.hero.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" onClick={scrollToContact}>
              {t.hero.cta}
            </Button>
            <Button variant="ghost" href="/cv.pdf" download>
              {t.hero.resume}
            </Button>
          </div>
        </div>

        <div className="glow-border bg-surface border border-border rounded-lg overflow-hidden">
          <div className="flex items-center gap-1.5 px-4 py-2.5 border-b border-border bg-background/40">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
            <span className="ml-2 font-mono text-[10px] text-muted">
              {t.hero.stackPanel.title}
            </span>
          </div>
          <ul className="p-5 space-y-3">
            {t.hero.stackPanel.items.map((item, index) => (
              <li key={index} className="flex items-center justify-between font-mono text-xs">
                <span className="text-ink">
                  <span className="text-primary mr-1.5">$</span>
                  {item}
                </span>
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
