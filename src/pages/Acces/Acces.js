import React from 'react';
import './Acces.css';
import MapComponent from '../../Components/MapComponent/MapComponent';

function Acces() {
  return (
    <div className="acces">
      <h1>Accès</h1>
      <p>
        <strong>Adresse :</strong> 7, rue Auguste Péchinez - 94130 Nogent sur Marne<br />
        (Dans le quartier du Port de plaisance et de la piscine de Nogent)
      </p>
      <h2>Transports :</h2>
      <ul>
        <li>RER E Nogent Le Perreux</li>
        <li>RER A Nogent sur Marne</li>
        <li>Bus : 210 arrêt Rue du Port</li>
        <li>Bus : 114, 120 arrêt Marché de Nogent sur Marne</li>
        <li>Bus : 116, 317 arrêt Gare de Nogent Le Perreux ou Viaduc</li>
      </ul>
      <div className="map-container">
        <MapComponent />
      </div>
    </div>
  );
}

export default Acces;
