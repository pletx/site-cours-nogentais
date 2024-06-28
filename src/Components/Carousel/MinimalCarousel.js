
import React, { useState, useEffect } from 'react';
import './MinimalCarousel.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image_interieur_1 from "../../Assets/Interieur_face.jpg"
import Image_exterieur from "../../Assets/exterieur.jpg"
import Image_classe from "../../Assets/classe 2.jpg"
import Image_classe_2 from "../../Assets/classe_3.jpg"

const images = [
  Image_interieur_1,
  Image_exterieur,
  Image_classe,
  Image_classe_2
];

const MinimalCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousSlide = () => {
    const newIndex = (currentImageIndex === 0) ? images.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(newIndex);
  };

  const nextSlide = () => {
    const newIndex = (currentImageIndex === images.length - 1) ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <div className="minimal-carousel">
      <div className="carousel-images">
        <img className="carousel-image" src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
        <div className="carousel-text">
          <h1>Cours Nogentais</h1>
        </div>
      </div>
      <button className="carousel-arrow prev" onClick={previousSlide}><FaArrowLeft /></button>
      <button className="carousel-arrow next" onClick={nextSlide}><FaArrowRight /></button>
    </div>
  );
};

export default MinimalCarousel;
