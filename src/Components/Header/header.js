import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
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
              <Link to="/Accès" className="nav-link" onClick={closeMenu}>Accès</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
