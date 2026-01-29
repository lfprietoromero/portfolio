import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Check localStorage first, default to dark
    const stored = localStorage.getItem('theme');
    return (stored as Theme) || 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Remove both classes
    root.classList.remove('light', 'dark');

    // Add current theme
    root.classList.add(theme);

    // Persist to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};
