// Gallery.js
import React, { useState } from 'react';
import './Gallery.css';
import Image1 from '../../Assets/Banc.jpg';
import Image2 from '../../Assets/batiment droite.jpg';
import Image3 from '../../Assets/cuisine.jpg';
import Image9 from '../../Assets/decente escalier.jpg';
import Image10 from '../../Assets/escalierinterieur.jpg';
import Image11 from '../../Assets/povbanc.jpg';
import Image12 from '../../Assets/sortie.jpg';

const initialImages = [
  Image1,
  Image2,
  Image3,
  Image9,
  Image10,
  Image11,
  Image12,
];

const Gallery = () => {
  const [images, setImages] = useState(initialImages);
  const [expandedImage, setExpandedImage] = useState(null);

  const openImage = (index) => {
    setExpandedImage(index);
  };

  const closeImage = () => {
    setExpandedImage(null);
  };

  const handleModalClick = (event) => {
    event.stopPropagation();
  };

  const goToPreviousImage = () => {
    setExpandedImage((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
  };

  const goToNextImage = () => {
    setExpandedImage((prevIndex) => (prevIndex < images.length - 1 ? prevIndex + 1 : 0));
  };

  return (
    <div className="gallery">
      {images.map((imageUrl, index) => (
        <div key={index} className="gallery-item" onClick={() => openImage(index)}>
          <img src={imageUrl} alt={`Image ${index + 1}`} className="gallery-image" />
        </div>
      ))}
      {expandedImage !== null && (
        <div className="modal-overlay" onClick={closeImage}>
          <div className="modal" onClick={handleModalClick}>
            <img src={images[expandedImage]} alt={`Image ${expandedImage + 1}`} className="modal-image" />
            <button className="close-button" onClick={closeImage}>&times;</button>
            <button className="prev-button" onClick={goToPreviousImage}>&#10094;</button>
            <button className="next-button" onClick={goToNextImage}>&#10095;</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
