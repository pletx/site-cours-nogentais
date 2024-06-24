import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Gallery.css';

const Gallery = ({ isHomePage }) => {
  const [images, setImages] = useState([]);
  const [expandedImage, setExpandedImage] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newImageFile, setNewImageFile] = useState(null);

  useEffect(() => {
    fetchImages();
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get('http://localhost:3001/images');
      setImages(response.data);
    } catch (error) {
      console.error('Erreur lors de la récupération des images:', error);
    }
  };

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

  const openAddModal = () => {
    setIsAddModalOpen(true);
  };

  const closeAddModal = () => {
    setIsAddModalOpen(false);
  };

  const handleAddImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', newImageFile);
    try {
      const token = localStorage.getItem('token');
      await axios.post('http://localhost:3001/images', formData, {
        headers: { 
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}` 
        }
      });
      setNewImageFile(null);
      setIsAddModalOpen(false);
      fetchImages();
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'image:', error);
      alert('Erreur lors de l\'ajout de l\'image.');
    }
  };

  const handleDeleteImage = async (index) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:3001/images/${images[index]._id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchImages();
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'image:', error);
      alert('Erreur lors de la suppression de l\'image.');
    }
  };

  return (
    <section className="gallery-section">
      <div className="gallery">
        {images.slice(0, isHomePage ? 6 : images.length).map((image, index) => (
          <div key={index} className="gallery-item" onClick={() => openImage(index)}>
            <img src={image.url} alt={`Image ${index + 1}`} className="gallery-image" />
            {isAuthenticated && (
              <button onClick={(e) => { e.stopPropagation(); handleDeleteImage(index); }} className="delete-button">
                Supprimer
              </button>
            )}
          </div>
        ))}
        {isHomePage && (
          <Link to="/galerie-photo" className="view-more-link">Voir plus...</Link>
        )}
        {isAuthenticated && (
          <button onClick={openAddModal} className="add-button">Ajouter une Image</button>
        )}
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
        {isAddModalOpen && (
          <div className="modal-overlay" onClick={closeAddModal}>
            <div className="modal-upload" onClick={handleModalClick}>
              <form onSubmit={handleAddImage}>
                <input type="file" onChange={(e) => setNewImageFile(e.target.files[0])} required />
                <button type="submit">Upload Image</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
