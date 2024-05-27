import React from 'react';
import './Fonctionnement.css'; // Importer le fichier CSS pour le style
import { FiClock, FiMail, FiUsers, } from 'react-icons/fi'; // Importer des icônes de Feather Icons
import { FaGraduationCap } from 'react-icons/fa';
const Fonctionnement = () => {
  return (
    <div className="fonctionnement">
      <div className="section">
        <h1>Fonctionnement</h1>
      </div>
      <div className="section">
        <h2>Effectifs et Accompagnement</h2>
        
        <FiUsers className="icon" />
        <div className="icon-text">
          <p>Des effectifs réduits (de 8 à 16 élèves par classe) qui permettent un accompagnement individualisé et une réelle prise en considération de chaque enfant et de ses spécificités.</p>
        </div>
      </div>
      <div className="section">
        <h2>Horaires</h2>
        <FiClock className="icon" />
        <div className="icon-text">
          <div>
            <ul>
              <li>9h – 16h30 lundi, mardi, jeudi et vendredi en 6e et en 5e</li>
              <li>8h45 – 16h30 lundi, mardi, jeudi et vendredi et 8h45 – 11h45 le mercredi en 4e et en 3e</li>
            </ul>
            <p>
              La pause déjeuner a lieu de 11h45 (4e et 3e) ou 12h (6e et 5e) à 13h30. Les enfants peuvent déjeuner à la cantine de l’établissement. Le collège est ouvert de 8h à 17h30.
            </p>
          </div>
        </div>
      </div>
      <div className="section">
        <h2>Communication avec les Familles</h2>
        
        <FiMail className="icon" />
        <div className="icon-text">
          <p>En cas d’absence d’un élève, les familles reçoivent systématiquement les cours de la journée par email. Cela permet de s'assurer que l'élève ne prenne pas de retard dans son apprentissage et reste à jour avec le programme.</p>
        </div>
      </div>
      <div className="section">
     
        <h2>Étude Dirigée</h2>
        <FaGraduationCap className="icon"  />
        <p>Nous proposons une étude dirigée facultative de 16h30 à 17h30 les lundis et jeudis. Il s’agit d’une véritable étude encadrée par des enseignants afin d’aider les élèves à réaliser mais aussi à organiser leur travail personnel.</p>
      </div>
    </div>
  );
};

export default Fonctionnement;
