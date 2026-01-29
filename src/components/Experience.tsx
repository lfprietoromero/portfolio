import { useLanguage } from '../contexts/LanguageContext';

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 px-6 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-12 text-center">
          {t.experience.title}
        </h2>

        <div className="space-y-12">
          {t.experience.jobs.map((job, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-primary-light dark:border-primary-dark"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-light dark:bg-primary-dark rounded-full"></div>

              <div className="mb-2">
                <h3 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark">
                  {job.title}
                </h3>
                <p className="text-lg text-primary-light dark:text-primary-dark font-medium">
                  {job.company}
                </p>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  {job.period}
                </p>
              </div>

              <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                {job.description}
              </p>

              <ul className="space-y-2">
                {job.highlights.map((highlight, highlightIndex) => (
                  <li
                    key={highlightIndex}
                    className="flex items-start text-text-secondary-light dark:text-text-secondary-dark"
                  >
                    <span className="text-primary-light dark:text-primary-dark mr-2">▸</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
