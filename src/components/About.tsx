import { useLanguage } from '../contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-6 bg-surface border-y border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-12">
          <span className="font-mono text-secondary mr-3">01</span>
          {t.about.title}
        </h2>

        <div className="grid md:grid-cols-[2fr_1fr] gap-10">
          <div className="space-y-6 text-lg font-body text-muted">
            <p className="leading-relaxed">
              {t.about.description}
            </p>

            <p className="leading-relaxed">
              {t.about.mission}
            </p>
          </div>

          <div className="bg-background border border-border rounded-lg p-5 h-fit">
            <p className="font-mono text-xs text-muted mb-3">{t.about.focusLabel}</p>
            <div className="flex flex-wrap gap-2">
              {t.about.focusTags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full font-mono text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
