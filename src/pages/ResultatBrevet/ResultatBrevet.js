import React from 'react';
import SuccessRateComponent from '../../Components/SuccessRate/SuccessRateComponent';
import './ResultatBrevet.css';

const ResultatBrevet = () => {
  return (
    <div className="resultat-brevet">
      <h1>Résultats au Brevet</h1>
      <p>Consultez les résultats au brevet du collège.</p>
      <div className="success-rate-list">
        <SuccessRateComponent successRate={100} date="2023" mentions={{ tresBien: 25, bien: 50, assezBien: 16.5 }} />
        <SuccessRateComponent successRate={100} date="2022" mentions={{ tresBien: 37.5, bien: 18.75, assezBien: 37.5 }} />
        <SuccessRateComponent successRate={100} date="2021" mentions={{ tresBien: 14, bien: 29, assezBien: 29 }} />
        <SuccessRateComponent successRate={92}  date="2020" mentions={{ tresBien: 30, bien: 40, assezBien: 22 }} />
      </div>
    </div>
  );
};

export default ResultatBrevet;
