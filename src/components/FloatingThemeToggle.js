import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from './ThemeProvider';

const FloatingThemeToggle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const toggleRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('nav');
      if (header) {
        const headerRect = header.getBoundingClientRect();
        const isHeaderVisible = headerRect.bottom > 0;
        setIsVisible(!isHeaderVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Vérification initiale

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={toggleRef}
      className="fixed top-4 right-4 z-50 transition-all duration-300"
    >
      <button
        onClick={toggleTheme}
        className="bg-brand-gray-100 dark:bg-brand-gray-800 p-3 rounded-full shadow-lg 
                 hover:bg-brand-gray-200 dark:hover:bg-brand-gray-700 
                 transition-all duration-300 focus:outline-none focus:ring-2 
                 focus:ring-brand-accent focus:ring-offset-2"
        aria-label={`Basculer vers le thème ${theme === 'light' ? 'sombre' : 'clair'}`}
      >
        {theme === 'light' ? (
          <svg
            className="w-5 h-5 text-brand-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        ) : (
          <svg
            className="w-5 h-5 text-brand-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"
            />
          </svg>
        )}
      </button>
    </div>
  );
};

export default FloatingThemeToggle; 