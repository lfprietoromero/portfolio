import { useLanguage } from '../contexts/LanguageContext';

export const Contact = () => {
  const { t } = useLanguage();

  const contacts = [
    {
      name: t.contact.email,
      value: 'lfprietoromero@gmail.com',
      link: 'mailto:lfprietoromero@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      name: t.contact.github,
      value: 'github.com/lfprietoromero',
      link: 'https://github.com/lfprietoromero',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
          />
        </svg>
      ),
    },
    {
      name: t.contact.linkedin,
      value: 'linkedin.com/in/lfprietoromero',
      link: 'https://www.linkedin.com/in/luis-fernando-prieto-romero-b65072227/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-surface-light dark:bg-surface-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
          {t.contact.title}
        </h2>

        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark mb-12">
          {t.contact.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-background-light dark:bg-background-dark rounded-lg border border-gray-200 dark:border-gray-800 hover:border-primary-light dark:hover:border-primary-dark transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex justify-center mb-4 text-primary-light dark:text-primary-dark">
                {contact.icon}
              </div>
              <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
                {contact.name}
              </h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
