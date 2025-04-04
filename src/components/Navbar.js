import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeProvider';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav 
      className="bg-white dark:bg-gray-900 shadow-md"
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-4"
            aria-label="Accueil LegalHaze"
          >
            <div className="w-20 h-20">
              <img
                src="/images/logo.png"
                alt="Logo LegalHaze"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-3xl font-bold text-gray-900 dark:text-white">
              LegalHaze
            </span>
          </Link>

          {/* Navigation desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/guide" 
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors py-2 px-4 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Guide
            </Link>
            <Link 
              to="/etude" 
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors py-2 px-4 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Étude
            </Link>
            <Link 
              to="/composes-cannabis" 
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors py-2 px-4 rounded-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Composés
            </Link>
            <button
              onClick={toggleTheme}
              className="p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre'}
            >
              <span className="text-xl">{theme === 'dark' ? '☀️' : '🌙'}</span>
            </button>
          </div>

          {/* Bouton menu mobile */}
          <button
            className="md:hidden p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Menu principal"
          >
            <svg 
              className="w-8 h-8" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu mobile */}
        <div 
          id="mobile-menu"
          className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pb-6`}
        >
          <div className="flex flex-col space-y-4">
            <Link 
              to="/guide" 
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Guide
            </Link>
            <Link 
              to="/etude" 
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Étude
            </Link>
            <Link 
              to="/composes-cannabis" 
              className="text-lg text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Composés
            </Link>
            <button
              onClick={toggleTheme}
              className="text-left text-lg text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors py-3 px-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label={theme === 'dark' ? 'Passer au mode clair' : 'Passer au mode sombre'}
            >
              <div className="flex items-center space-x-2">
                <span className="text-xl">{theme === 'dark' ? '☀️' : '🌙'}</span>
                <span>{theme === 'dark' ? 'Mode clair' : 'Mode sombre'}</span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 