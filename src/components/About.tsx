import { useLanguage } from '../contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-6 bg-surface border-y border-border">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3 text-center">
          about/
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper mb-12 text-center">
          {t.about.title}
        </h2>

        <div className="space-y-6 text-lg font-body text-muted">
          <p className="leading-relaxed">
            {t.about.description}
          </p>

          <p className="leading-relaxed">
            {t.about.mission}
          </p>
        </div>
      </div>
    </section>
  );
};
