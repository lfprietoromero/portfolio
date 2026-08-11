import { useLanguage } from '../contexts/LanguageContext';

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 px-6 bg-surface border-y border-border">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-12">
          <span className="font-mono text-secondary mr-3">02</span>
          {t.experience.title}
        </h2>

        <div className="space-y-12">
          {t.experience.jobs.map((job, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-secondary"
            >
              <div className="absolute -left-[7px] top-0 w-3 h-3 bg-secondary rounded-full"></div>

              <div className="mb-2">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-ink">
                  {job.title}
                </h3>
                <p className="font-mono text-sm text-secondary font-medium">
                  {job.company}
                </p>
                <p className="font-mono text-xs text-muted mt-1">
                  {job.period}
                </p>
              </div>

              <p className="font-body text-muted mb-4 leading-relaxed">
                {job.description}
              </p>

              <ul className="space-y-2">
                {job.highlights.map((highlight, highlightIndex) => (
                  <li
                    key={highlightIndex}
                    className="flex items-start font-body text-muted"
                  >
                    <span className="text-ember mr-2">▸</span>
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
