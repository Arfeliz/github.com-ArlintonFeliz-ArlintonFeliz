import { useState, useEffect } from 'react';

export const themes = ['dark', 'light', 'ocean', 'purple'];

export function useTheme() {
  const [theme, setThemeState] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Set initial theme on mount
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, []);

  function setTheme(newTheme) {
    if (themes.includes(newTheme)) {
      setThemeState(newTheme);
    }
  }

  return { theme, setTheme, themes };
}
