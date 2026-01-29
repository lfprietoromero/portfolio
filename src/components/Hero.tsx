import { useLanguage } from '../contexts/LanguageContext';

export const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <div className="mb-6">
          <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark mb-2">
            {t.hero.greeting}
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
            Luis Fernando Prieto Romero
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-light dark:text-primary-dark mb-6">
            {t.hero.title}
          </h2>
        </div>

        <p className="text-xl text-text-secondary-light dark:text-text-secondary-dark mb-12 max-w-2xl mx-auto">
          {t.hero.subtitle}
        </p>

        <button
          onClick={scrollToContact}
          className="px-8 py-4 bg-primary-light dark:bg-primary-dark text-white rounded-lg font-medium hover:opacity-90 transition-all duration-300 transform hover:scale-105 shadow-lg"
        >
          {t.hero.cta}
        </button>
      </div>
    </section>
  );
};
