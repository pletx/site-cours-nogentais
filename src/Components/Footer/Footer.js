import React from 'react';
import { FaFacebook, FaPhone, FaEnvelope } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Adresse</h3>
          <p>7 rue Auguste Péchinez <br />94130 Nogent sur Marne<br /></p>
        </div>
        <div className="footer-section">
          <h3>Réseaux Sociaux</h3>
          <ul className="social-links">
            <li><a href="#"><FaFacebook /></a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact</h3>
          <ul className="contact-info">
            <li><FaPhone /> 01 48 71 26 57 </li>
            <li><FaEnvelope /> coursnogentais@wanadoo.fr</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
