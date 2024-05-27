import React from 'react';
import './404.css';

const Error404 = () => {
  return (
    <div className="error-container">
      <h1>Erreur 404</h1>
      <p>La page que vous recherchez est introuvable.</p>
      <a href="/">Retour à la page d'accueil</a>
    </div>
  );
}

export default Error404;
