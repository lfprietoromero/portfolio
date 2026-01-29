import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background-light dark:bg-background-dark transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <footer className="py-8 text-center text-text-secondary-light dark:text-text-secondary-dark border-t border-gray-200 dark:border-gray-800">
          <p>&copy; {new Date().getFullYear()} Luis Fernando Prieto Romero. Built with React, Vite & Tailwind CSS.</p>
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;
