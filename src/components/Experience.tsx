import { useLanguage } from '../contexts/LanguageContext';
import { Reveal } from './ui/Reveal';
import { SectionGlow } from './ui/SectionGlow';
import { SectionHeading } from './ui/SectionHeading';

export const Experience = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="relative py-20 px-6 bg-background border-y border-border overflow-hidden">
      <SectionGlow accent="secondary" position="bottom-left" />
      <div className="relative max-w-4xl mx-auto">
        <Reveal>
          <SectionHeading number="02" title={t.experience.title} accent="secondary" />
        </Reveal>

        <div className="space-y-12">
          {t.experience.jobs.map((job, index) => (
            <Reveal key={index} delayMs={index * 90} className="relative pl-8 border-l-2 border-secondary/40">
              <div className="absolute -left-[7px] top-0 w-3 h-3 rounded-full bg-secondary">
                {index === 0 && (
                  <span className="absolute inset-0 rounded-full bg-secondary animate-ping" />
                )}
              </div>

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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
