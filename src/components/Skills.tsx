import { useLanguage } from '../contexts/LanguageContext';
import { Reveal } from './ui/Reveal';
import { Card } from './ui/Card';
import { SectionGlow } from './ui/SectionGlow';
import { SectionHeading } from './ui/SectionHeading';

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t.skills.categories.cloud,
      skills: ['Linux (Debian)', 'Tomcat', 'Servidores', 'Redes'],
    },
    {
      title: t.skills.categories.containers,
      skills: ['Docker', 'Docker Compose', 'Contenedores'],
    },
    {
      title: t.skills.categories.cicd,
      skills: ['Git', 'CI/CD Pipelines', 'Jira', 'Despliegues'],
    },
    {
      title: t.skills.categories.iac,
      skills: ['Automatización', 'Bash Scripting', 'Configuración'],
    },
    {
      title: t.skills.categories.monitoring,
      skills: ['Monitoreo', 'Logs', 'Incidencias', 'Trazabilidad'],
    },
    {
      title: t.skills.categories.tools,
      skills: ['Flutter', 'Dart', 'PL/SQL', 'Git'],
    },
  ];

  return (
    <section id="skills" className="relative py-20 px-6 bg-surface border-y border-border overflow-hidden">
      <SectionGlow accent="primary" position="top-left" />
      <div className="relative max-w-6xl mx-auto">
        <Reveal>
          <SectionHeading number="03" title={t.skills.title} accent="primary" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Reveal key={index} delayMs={index * 60}>
              <Card accent="primary" className="bg-background p-6 h-full">
                <h3 className="font-display text-lg font-semibold text-ink mb-4">
                  <span className="text-ember">// </span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full font-mono text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
