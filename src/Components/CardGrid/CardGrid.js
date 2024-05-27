// src/components/CardGrid/CardGrid.js
import React from 'react';
import './CardGrid.css';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';
import { FiBookOpen, FiSettings, FiClipboard } from 'react-icons/fi';

const CardGrid = () => {
  return (
    <div className="card-grid">
      <Link to="/pedagogie" className="card-link">
        <Card
          title="Pédagogie"
          description="Découvrez notre approche pédagogique et notre méthode d'enseignement."
          icon={<FiBookOpen />}
        />
      </Link>
      <Link to="/fonctionnement" className="card-link">
        <Card
          title="Fonctionnement"
          description="Explorez le fonctionnement de notre établissement, nos horaires et nos services."
          icon={<FiSettings />}
        />
      </Link>
      <Link to="/inscription" className="card-link">
        <Card
          title="Inscription"
          description="Consultez les informations sur le processus d'inscription et prenez rendez-vous."
          icon={<FiClipboard />}
        />
      </Link>
    </div>
  );
};

export default CardGrid;
