// PasswordModal.js
import React, { useState } from 'react';
import './PasswordModal.css';
import ImageManagement from '../PasswordModal/PasswordModal.js';

const PasswordModal = ({ onClose }) => {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === 'adminpassword') { // Changez ce mot de passe selon vos besoins
      setIsAuthenticated(true);
    } else {
      alert('Mot de passe incorrect');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        {!isAuthenticated ? (
          <form onSubmit={handleSubmit}>
            <h2>Entrer le mot de passe</h2>
            <input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Mot de passe"
            />
            <button type="submit">Valider</button>
          </form>
        ) : (
          <ImageManagement onClose={onClose} />
        )}
      </div>
    </div>
  );
};

export default PasswordModal;
