import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme doit être utilisé à l\'intérieur d\'un ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // On vérifie d'abord dans les cookies
    const cookieTheme = Cookies.get('theme');
    if (cookieTheme) {
      return cookieTheme;
    }
    
    // Ensuite on vérifie dans localStorage (pour la rétrocompatibilité)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme;
    }
    
    // Sinon, utilise les préférences système
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    // Met à jour la classe sur le document
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    // Sauvegarde la préférence dans le cookie et localStorage
    const cookieOptions = {
      expires: 365, // 1 an
      path: '/',
      sameSite: process.env.NODE_ENV === 'development' ? 'lax' : 'strict',
      secure: process.env.NODE_ENV !== 'development'
    };
    
    Cookies.set('theme', theme, cookieOptions);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}; 