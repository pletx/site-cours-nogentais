import React from 'react';
import MinimalCarousel from '../../Components/Carousel/MinimalCarousel';
import CardGrid from '../../Components/CardGrid/CardGrid';
import Gallery from '../../Components/Gallery/Gallery';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <MinimalCarousel />
      <div className="content-container">
        <div className="text-container">
          <h2>Bienvenue au Cours Nogentais</h2>
          <p>
            Ouvert depuis 1963, le Cours Nogentais accueille des élèves pour qui le système classique s’avère peu adapté.
            L’enjeu est de leur apporter un véritable soutien scolaire afin de leur redonner confiance et goût de l’effort.
            Nous proposons à nos élèves une réelle dynamique de travail dans un cadre bienveillant et rigoureux dans lequel exigences de travail,
            soutien et compréhension cohabitent.
          </p>
        </div>
        <div className="card-grid-container">
          <h2>Nos Services</h2>
          <CardGrid />
        </div>
        <div className="gallery-container">
          <h2>Galerie de Photos</h2>
          <Gallery />
        </div>
      </div>
    </div>
  );
};

export default Home;
