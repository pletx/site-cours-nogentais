import React, { useState } from 'react';
import './SuccessRateComponent.css';

const SuccessRateComponent = ({ successRate, date, mentions }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="success-rate">
      <div className="additional-info">
        <p>Date du brevet : {date}</p>
      </div>
      <div className="success-rate-info">
        <p className="success-rate-percent">{successRate}%</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${successRate}%` }}></div>
        </div>
        <button onClick={toggleCollapse} className="collapse-button">
          {isOpen ? 'Cacher les détails' : 'Afficher les détails'}
        </button>
      </div>
      {isOpen && (
        <div className="collapse-content">
          <p>Détails des mentions obtenues :</p>
          <ul>
            <li>Mention Très Bien: {mentions.tresBien}%</li>
            <li>Mention Bien: {mentions.bien}%</li>
            <li>Mention Assez Bien: {mentions.assezBien}%</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SuccessRateComponent;
