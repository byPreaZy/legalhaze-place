/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Activation du mode sombre basé sur les classes
  theme: {
    extend: {
      colors: {
        'brand': {
          'background': 'var(--color-background)',
          'text': 'var(--color-text)',
          'primary': 'var(--color-primary)',
          'secondary': 'var(--color-secondary)',
          'accent': 'var(--color-accent)',
          'success': 'var(--color-success)',
          'warning': 'var(--color-warning)',
          'error': 'var(--color-error)',
          'info': 'var(--color-info)',
          'text-primary': 'var(--color-text-primary)',
          'text-secondary': 'var(--color-text-secondary)',
          'text-muted': 'var(--color-text-muted)',
          'background-primary': 'var(--color-background-primary)',
          'background-secondary': 'var(--color-background-secondary)',
          'background-tertiary': 'var(--color-background-tertiary)',
          'border': 'var(--color-border)',
          'border-focus': 'var(--color-border-focus)',
        },
        brand: {
          primary: {
            DEFAULT: '#2E7D32', // Vert principal
            light: '#4CAF50', // Version claire
            dark: '#1B5E20', // Version foncée
          },
          secondary: {
            DEFAULT: '#7D2E79', // Violet complémentaire
            light: '#9C27B0', // Version claire
            dark: '#4A148C', // Version foncée
          },
          background: {
            light: '#FFFFFF', // Fond clair
            dark: '#121212', // Fond sombre
          },
          text: {
            light: '#1B1B1B', // Texte sur fond clair
            dark: '#FFFFFF', // Texte sur fond sombre
            muted: {
              light: '#666666', // Texte secondaire sur fond clair
              dark: '#A0A0A0', // Texte secondaire sur fond sombre
            }
          },
          gray: {
            50: '#FAFAFA',
            100: '#F5F5F5',
            200: '#EEEEEE',
            300: '#E0E0E0',
            400: '#BDBDBD',
            500: '#9E9E9E',
            600: '#757575',
            700: '#616161',
            800: '#424242',
            900: '#212121',
          }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-in': 'slideIn 0.5s ease-in-out',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      spacing: {
        'xs': 'var(--spacing-xs)',
        'sm': 'var(--spacing-sm)',
        'md': 'var(--spacing-md)',
        'lg': 'var(--spacing-lg)',
        'xl': 'var(--spacing-xl)',
      },
      fontSize: {
        'xs': 'var(--font-size-xs)',
        'sm': 'var(--font-size-sm)',
        'md': 'var(--font-size-md)',
        'lg': 'var(--font-size-lg)',
        'xl': 'var(--font-size-xl)',
      },
      fontWeight: {
        'normal': 'var(--font-weight-normal)',
        'medium': 'var(--font-weight-medium)',
        'bold': 'var(--font-weight-bold)',
      },
      borderRadius: {
        'sm': 'var(--border-radius-sm)',
        'md': 'var(--border-radius-md)',
        'lg': 'var(--border-radius-lg)',
      },
      transitionDuration: {
        'fast': 'var(--transition-fast)',
        'normal': 'var(--transition-normal)',
        'slow': 'var(--transition-slow)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
} 