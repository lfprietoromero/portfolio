import { useLanguage } from '../contexts/LanguageContext';

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
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-ink mb-12">
          <span className="font-mono text-secondary mr-3">03</span>
          {t.skills.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-surface rounded-lg border border-border hover:border-secondary transition-all duration-300"
            >
              <h3 className="font-display text-lg font-semibold text-ink mb-4">
                <span className="text-ember">// </span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-secondary/10 text-secondary rounded-full font-mono text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
