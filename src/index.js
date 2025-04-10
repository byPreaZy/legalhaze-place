import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './styles/index.css';
import './styles/ads.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// Si vous souhaitez mesurer les performances de votre application, vous pouvez utiliser
// des outils comme Google Analytics ou d'autres services d'analyse.
