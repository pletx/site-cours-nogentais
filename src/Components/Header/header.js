import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', { username, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setIsAuthenticated(true);
      setIsModalOpen(false);
      setUsername('');
      setPassword('');
      window.location.reload();
    } catch (error) {
      setError('Nom d’utilisateur ou mot de passe incorrect');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
    window.location.reload(); 
  };

  return (
    <header className="header">
      <div className="header-container">
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>Accueil</Link>
            </li>
            <li className="nav-item">
              <Link to="/pedagogie" className="nav-link" onClick={closeMenu}>Pédagogie</Link>
            </li>
            <li className="nav-item">
              <Link to="/fonctionnement" className="nav-link" onClick={closeMenu}>Fonctionnement</Link>
            </li>
            <li className="nav-item">
              <Link to="/resultat-brevet" className="nav-link" onClick={closeMenu}>Résultat au Brevet</Link>
            </li>
            <li className="nav-item">
              <Link to="/inscription" className="nav-link" onClick={closeMenu}>Inscription</Link>
            </li>
            <li className="nav-item">
              <Link to="/galerie-photo" className="nav-link" onClick={closeMenu}>Galerie Photo</Link>
            </li>
            <li className="nav-item">
              <Link to="/accès" className="nav-link" onClick={closeMenu}>Accès</Link>
            </li>
            {isAuthenticated ? (
              <li className="nav-item">
                <button className="logout-button" onClick={handleLogout}>Logout</button>
              </li>
            ) : (
              <li className="nav-item">
                <button className="login-button" onClick={openModal}>Login</button>
              </li>
            )}
          </ul>
        </nav>
      </div>
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-login" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <form className="login-form" onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Nom d’utilisateur"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {error && <p className="error-message">{error}</p>}
              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
