import React from 'react';
import './Pedagogie.css';

const Pedagogie = () => {
  return (
    <div className="pedagogie-page">
      <h1>Pédagogie</h1>

      <section className="pedagogie-section">
        <div className="pedagogie-text">
          <h2>Accompagnement personnalisé</h2>
          <p>
            Ouvert depuis 1963, le Cours Nogentais accueille des élèves pour qui le système classique s’avère peu adapté.
            L’enjeu est de leur apporter un véritable soutien scolaire afin de leur redonner confiance et goût de l’effort.
            Nous proposons à nos élèves une réelle dynamique de travail dans un cadre bienveillant et rigoureux dans lequel exigences de travail, soutien et compréhension cohabitent.
          </p>
          <p>
            Ce cadre nous permet de mettre en place, dès que cela est nécessaire, des aménagements spécifiques que nous adaptons en suivant de très près l’évolution de la scolarité de chaque élève grâce à des échanges très réguliers avec l’intégralité de l’équipe enseignante mais également avec les familles et les éventuels intervenants extérieurs.
          </p>
        </div>
        <div className="pedagogie-image">
          <img src="chemin_de_l_image.jpg" alt="Description de l'image" />
        </div>
      </section>

      <section className="pedagogie-section">
        <div className="pedagogie-text">
          <h2>Environnement inclusif</h2>
          <p>
            Nous accueillons des enfants ayant des profils variés, pouvant aller de la précocité intellectuelle aux troubles des apprentissages (trouble de l’attention, dyslexie…), mais également des élèves qui ressentent le besoin de ne pas être perdus dans de grands établissements, d’être aidés et encadrés pour pouvoir exploiter leurs capacités. Tout ceci est rendu possible par les petits effectifs de nos classes et permet à chacun de progresser, dans un climat d’entraide et de bienveillance où l’on apprend également à vivre ensemble dans une dynamique de groupe nourrie par chacun.
          </p>
        </div>
        <div className="pedagogie-image">
          <img src="chemin_de_l_image.jpg" alt="Description de l'image" />
        </div>
      </section>

      <section className="pedagogie-section">
        <div className="pedagogie-text">
          <h2>Méthodologie rigoureuse</h2>
          <p>
            Nous pratiquons un enseignement explicite. Les élèves ont un cahier dans chaque matière, dans lequel une trace écrite est systématiquement notée. Une fois les notions travaillées et expliquées, ils ont donc des outils de travail clairs.
          </p>
          <p>
            Nous surveillons que tous les devoirs donnés soient faits et veillons à ce que l’apprentissage des leçons soit régulier. Pour cela, nous interrogeons régulièrement les enfants sur leurs cours pour vérifier qu’ils sont sus. Si nous constatons un manque de travail ou une difficulté, l’élève reprend ce qui lui a posé problème avec nous le soir où à l’heure de déjeuner. Il s’agit d’aider chacun à ne pas prendre de retard et surtout, à ne pas perdre pied.
          </p>
          <p>
            L’objectif de cette méthodologie rigoureuse est d’offrir à nos élèves un cadre sécurisant, leur permettant rapidement de prendre confiance en eux et en l’adulte, ce qui nous apparaît comme la première étape nécessaire à la réussite scolaire.
          </p>
        </div>
        <div className="pedagogie-image">
          <img src="chemin_de_l_image.jpg" alt="Description de l'image" />
        </div>
      </section>
    </div>
  );
};

export default Pedagogie;
