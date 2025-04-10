import React from 'react';
import { trackError } from './analytics';

/**
 * Gestionnaire d'erreurs global pour l'application
 * Capture les erreurs non gérées et les envoie à Google Analytics
 */
export const setupGlobalErrorHandler = () => {
  // Gestionnaire d'erreurs non capturées
  window.onerror = (message, source, lineno, colno, error) => {
    trackError(error || message, {
      source,
      lineno,
      colno
    });
    
    // Retourner false pour permettre à l'erreur de se propager normalement
    return false;
  };
  
  // Gestionnaire d'erreurs de promesses non gérées
  window.addEventListener('unhandledrejection', (event) => {
    trackError(event.reason, {
      type: 'unhandledrejection'
    });
  });
  
  // Gestionnaire d'erreurs React
  window.addEventListener('error', (event) => {
    // Vérifier si l'erreur provient d'un composant React
    if (event.error && event.error.stack && event.error.stack.includes('React')) {
      trackError(event.error, {
        type: 'react_error',
        componentStack: event.error.componentStack
      });
    }
  });
};

/**
 * HOC pour capturer les erreurs dans les composants React
 * @param {React.Component} WrappedComponent - Le composant à envelopper
 * @returns {React.Component} - Le composant avec gestion d'erreurs
 */
export const withErrorBoundary = (WrappedComponent) => {
  return class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null, errorInfo: null };
    }
    
    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }
    
    componentDidCatch(error, errorInfo) {
      trackError(error, errorInfo);
      this.setState({ errorInfo });
    }
    
    render() {
      if (this.state.hasError) {
        // Vous pouvez personnaliser l'UI d'erreur ici
        return (
          <div className="error-boundary p-4 bg-red-50 dark:bg-red-900 text-red-800 dark:text-red-100 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Une erreur est survenue</h2>
            <p>Nous avons été informés de ce problème et nous travaillons à le résoudre.</p>
            <button 
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              onClick={() => window.location.reload()}
            >
              Rafraîchir la page
            </button>
          </div>
        );
      }
      
      return <WrappedComponent {...this.props} />;
    }
  };
}; 