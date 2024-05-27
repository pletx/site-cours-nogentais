// ImageManagement.js
import React, { useState } from 'react';
import './ImageManagement.css';

const ImageManagement = ({ onClose }) => {
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState(null);

  const handleNewImageChange = (e) => {
    setNewImage(e.target.files[0]);
  };

  const addImage = () => {
    if (newImage) {
      // Simuler l'appel API pour ajouter une image
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages([...images, reader.result]);
      };
      reader.readAsDataURL(newImage);
      setNewImage(null);
    }
  };

  const removeImage = (index) => {
    // Simuler l'appel API pour supprimer une image
    setImages(images.filter((_, i) => i !== index));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setNewImage(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="image-management">
      <h2>Gestion des Images</h2>
      <div
        className="drop-zone"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <p>Déposez les fichiers ici ou cliquez pour télécharger</p>
        <input
          type="file"
          onChange={handleNewImageChange}
          style={{ display: 'none' }}
          id="fileInput"
        />
        <label htmlFor="fileInput" className="file-input-label">Choisir un fichier</label>
      </div>
      <button onClick={addImage} disabled={!newImage}>Ajouter l'image</button>
      <div className="image-list">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image} alt={`Image ${index}`} />
            <button onClick={() => removeImage(index)}>Supprimer</button>
          </div>
        ))}
      </div>
      <button onClick={onClose}>Fermer</button>
    </div>
  );
};

export default ImageManagement;
