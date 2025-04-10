import React from 'react';

/**
 * Composant de gestion des erreurs pour les annonces
 * @param {Object} props - Propriétés du composant
 * @param {React.ReactNode} props.children - Composants enfants
 * @param {Function} props.fallback - Composant de remplacement en cas d'erreur
 */
class AdErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // Enregistrer l'erreur dans un service d'analyse
    console.error('Erreur dans le composant d\'annonce:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Afficher le composant de remplacement personnalisé ou un message d'erreur par défaut
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div 
          className="ad-error-container" 
          role="alert" 
          aria-live="polite"
        >
          <p className="ad-error-message">
            Une erreur est survenue lors du chargement de la publicité.
          </p>
          <button 
            className="ad-retry-button"
            onClick={() => this.setState({ hasError: false })}
            aria-label="Réessayer de charger la publicité"
          >
            Réessayer
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default AdErrorBoundary; 