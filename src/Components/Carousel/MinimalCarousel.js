// MinimalCarousel.js
import React, { useState, useEffect } from 'react';
import './MinimalCarousel.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Image1 from '../../Assets/povbanc.jpg'
import Image2 from '../../Assets/batimentdroitface.jpg'
import Image3 from '../../Assets/escalierinterieur.jpg'

const images = [
    Image1,
    Image2,
    Image3
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
