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
        <SuccessRateComponent successRate={92} date="2020" mentions={{ tresBien: 30, bien: 40, assezBien: 22 }} />
        <SuccessRateComponent successRate={75} date="2019" mentions={{ tresBien: 0, bien: 27, assezBien: 64 }} />
        <SuccessRateComponent successRate={50} date="2018" mentions={{ tresBien: 0, bien: 25, assezBien: 50 }} />
        <SuccessRateComponent successRate={100} date="2017" mentions={{ tresBien: 10, bien: 10, assezBien: 40 }} />
        <SuccessRateComponent successRate={100} date="2016" mentions={{ tresBien: 0, bien: 13, assezBien: 20 }} />
      </div>
    </div>
  );
};

export default ResultatBrevet;
