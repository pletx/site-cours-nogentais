import React, { useState } from 'react';
import './Inscription.css'; // Assurez-vous de créer un fichier CSS pour le style

const Inscription = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:eddyplet93@gmail.com?subject=Demande%20d'informations&body=Email:%20${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="inscription">
      <h1>Inscription</h1>
      <div className="section">
        <h2>Processus d'inscription</h2>
        <p>
          Nous inscrivons sur rendez-vous uniquement, en présence de l’enfant.
           Il s’agit de déterminer tous ensemble si la pédagogie et l’accompagnement que nous proposons pourra lui convenir.
           L’essentiel sera que l’élève prenne conscience des enjeux et de l’engagement qu’il prend à s’investir dans sa scolarité.
           Il s’agit également de nous permettre de le connaître le mieux possible pour pouvoir répondre à ses besoins et l’accompagner de manière optimale.
          Quels que soient les problèmes rencontrés ultérieurement, nous sommes prêts à laisser une chance à un élève motivé, désireux de s’impliquer de progresser.
          Il est possible d’envisager des inscriptions en cours d’année dans la mesure des places disponibles.
        </p>
      </div>
      <div className="section">
        <h2>Demandez un rendez-vous</h2>
        <form onSubmit={handleSubmit} className="email-form">
          <label htmlFor="email">Envoyez nous un mail :</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Votre email"
            required
          />
          <label htmlFor="message">Message :</label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={handleMessageChange}
            placeholder="Votre message"
            required
          />
          <button type="submit">Soumettre</button>
        </form>
      </div>
    </div>
  );
};

export default Inscription;
