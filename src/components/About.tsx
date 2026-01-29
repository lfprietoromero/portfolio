import { useLanguage } from '../contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-6 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-12 text-center">
          {t.about.title}
        </h2>

        <div className="space-y-6 text-lg text-text-secondary-light dark:text-text-secondary-dark">
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
