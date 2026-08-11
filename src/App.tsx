import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background font-body">
        <Header />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Contact />
        </main>
        <footer className="py-8 text-center font-mono text-xs text-muted border-t border-border">
          <p>&copy; {new Date().getFullYear()} Luis Fernando Prieto Romero. Built with React, Vite &amp; Tailwind CSS.</p>
        </footer>
      </div>
    </LanguageProvider>
  );
}

export default App;
