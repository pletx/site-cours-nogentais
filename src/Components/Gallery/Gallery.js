// Gallery.js
import React, { useState } from 'react';
import './Gallery.css';
import Image1 from '../../Assets/Banc.jpg';
import Image2 from '../../Assets/batiment droite.jpg';
import Image3 from '../../Assets/cuisine.jpg';
import Image4 from '../../Assets/Interieur_face_2.jpg'
import Image5 from'../../Assets/batiment droite.jpg'
import Image6 from '../../Assets/batiment guche.jpg'
import Image7 from '../../Assets/batimentdroitface.jpg'
import Image8 from '../../Assets/classe 2.jpg'
import Image9 from '../../Assets/decente escalier.jpg';
import Image10 from '../../Assets/escalierinterieur.jpg';
import Image12 from '../../Assets/sortie.jpg';
import Image15 from '../../Assets/Cantine.jpg'
import Image16 from '../../Assets/Cantine_2.jpg'
import Image17 from '../../Assets/Classe 1_2.jpg'
import Image18 from '../../Assets/Classe1_3.jpg'
import Image19 from '../../Assets/Classe_1.jpg'
import Image20 from '../../Assets/Interieur_face.jpg'
import Image21 from '../../Assets/classe_3.jpg'
import Image22 from '../../Assets/couloir.jpg'
import Image23 from '../../Assets/cuisine.jpg'
import Image24 from '../../Assets/cuisine_2.jpg'
import Image26 from '../../Assets/entrée_biblio.jpg'
import Image28 from '../../Assets/escalier (2).jpg'
import Image29 from '../../Assets/escalier.jpg'
import Image30 from '../../Assets/escalierinterieur.jpg'
import Image31 from '../../Assets/exterieur.jpg'
import Image32 from '../../Assets/interieur_haut.jpg'
import Image34 from '../../Assets/livre_1.jpg'
import Image35 from '../../Assets/livre_2.jpg'
import Image36 from '../../Assets/povbanc.jpg'
const initialImages = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image12,
  Image15,
  Image16,
  Image17,
  Image18,
  Image19,
  Image20,
  Image21,
  Image22,
  Image23,
  Image24,
  Image26,
  Image28,
  Image29,
  Image30,
  Image31,
  Image32,
  Image34,
  Image35,
  Image36
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
