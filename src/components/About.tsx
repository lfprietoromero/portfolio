import { useLanguage } from '../contexts/LanguageContext';
import { Reveal } from './ui/Reveal';
import { Card } from './ui/Card';
import { SectionGlow } from './ui/SectionGlow';
import { SectionHeading } from './ui/SectionHeading';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-20 px-6 bg-surface border-y border-border overflow-hidden">
      <SectionGlow accent="primary" position="top-right" />
      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading number="01" title={t.about.title} accent="primary" />
        </Reveal>

        <div className="grid md:grid-cols-[2fr_1fr] gap-10">
          <Reveal delayMs={80} className="space-y-6 text-lg font-body text-muted">
            <p className="leading-relaxed">
              {t.about.description}
            </p>

            <p className="leading-relaxed">
              {t.about.mission}
            </p>
          </Reveal>

          <Reveal delayMs={160}>
            <Card accent="primary" className="bg-background p-5 h-fit">
              <p className="font-mono text-xs text-muted mb-3">
                <span className="text-primary mr-1.5">#</span>
                {t.about.focusLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {t.about.focusTags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/20 text-primary rounded-full font-mono text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
