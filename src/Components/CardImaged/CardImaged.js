import React from 'react';
import './CardImaged.css';

const CardImaged = ({ title, description, image }) => {
  return (
    <div className="CardImaged">
        <img src={image} alt={title} />
        <div className="CardImaged-content">
        <h3 className="CardImaged-title">{title}</h3>
        <p className="CardImaged-description">{description}</p>
      </div>
      </div>
      

  );
};

export default CardImaged;
