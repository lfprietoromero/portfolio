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
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-12 text-center">
          {t.skills.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary-light dark:hover:border-primary-dark transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-text-primary-light dark:text-text-primary-dark mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded-full text-sm font-medium"
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
