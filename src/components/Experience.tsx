import { useLanguage } from '../contexts/LanguageContext';

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 px-6 bg-surface border-y border-border">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-primary mb-3 text-center">
          experience/
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-semibold text-paper mb-12 text-center">
          {t.experience.title}
        </h2>

        <div className="space-y-12">
          {t.experience.jobs.map((job, index) => (
            <div
              key={index}
              className="relative pl-8 border-l-2 border-primary"
            >
              <div className="absolute -left-[7px] top-0 w-3 h-3 bg-primary rounded-full"></div>

              <div className="mb-2">
                <h3 className="font-display text-xl md:text-2xl font-semibold text-paper">
                  {job.title}
                </h3>
                <p className="font-mono text-sm text-primary font-medium">
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
