// MemberCard.js
import React from 'react';
import './MemberCard.css';

const MemberCard = ({ name, role, photo }) => {
  return (
    <div className="member-card">
      <div className="card-background" style={{ backgroundImage: `url(${photo})` }}>
        <div className="card-overlay">
          <h3>{name}</h3>
          <p>{role}</p>
        </div>
      </div>
    </div>
  );
};

export default MemberCard;
