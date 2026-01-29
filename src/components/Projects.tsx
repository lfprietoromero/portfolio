import { useLanguage } from '../contexts/LanguageContext';

export const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-12 text-center">
          {t.projects.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-md mx-auto lg:max-w-6xl">
          {t.projects.items.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-surface-light dark:bg-surface-dark rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary-light dark:hover:border-primary-dark transition-all duration-300 hover:transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-3">
                {project.name}
              </h3>

              <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
                {project.description}
              </p>

              {project.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-light dark:text-primary-dark hover:underline"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
