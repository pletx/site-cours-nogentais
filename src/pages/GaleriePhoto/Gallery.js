// src/components/Gallery/Gallery.js
import React, { useState, useEffect, useContext } from 'react';
import './Gallery.css';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState(null);
  const [expandedImage, setExpandedImage] = useState(null);
  const { isAuthenticated } = useContext(AuthContext);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await axios.get('/api/images');
      setImages(response.data);
    };
    fetchImages();
  }, []);

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

  const handleImageUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', newImage);

    const response = await axios.post('/api/images', formData);
    setImages([...images, response.data]);
  };

  const handleImageDelete = async (id) => {
    await axios.delete(`/api/images/${id}`);
    setImages(images.filter((image) => image._id !== id));
  };

  return (
    <div className="gallery">
      {images.map((image, index) => (
        <div key={image._id} className="gallery-item" onClick={() => openImage(index)}>
          <img src={image.url} alt={`Image ${index + 1}`} className="gallery-image" />
          {isAuthenticated && (
            <button onClick={() => handleImageDelete(image._id)} className="delete-button">Delete</button>
          )}
        </div>
      ))}
      {expandedImage !== null && (
        <div className="modal-overlay" onClick={closeImage}>
          <div className="modal" onClick={handleModalClick}>
            <img src={images[expandedImage].url} alt={`Image ${expandedImage + 1}`} className="modal-image" />
            <button className="close-button" onClick={closeImage}>&times;</button>
            <button className="prev-button" onClick={goToPreviousImage}>&#10094;</button>
            <button className="next-button" onClick={goToNextImage}>&#10095;</button>
          </div>
        </div>
      )}
      {isAuthenticated && (
        <div className="upload-section">
          <form onSubmit={handleImageUpload}>
            <input type="file" onChange={(e) => setNewImage(e.target.files[0])} />
            <button type="submit">Upload Image</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Gallery;
