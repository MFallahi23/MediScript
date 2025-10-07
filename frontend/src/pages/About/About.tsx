import "./About.scss";
import Underline from "../../assets/icons/underline.svg?react";
import Button from "../../components/Button/Button";

interface iABout {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const About: React.FC<iABout> = ({ setShowModal }) => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__wrapper">
          <h2 className="about__title">
            À propos
            <Underline
              className="services__title-icon"
              width={350}
              height={60}
              aria-hidden="true"
            />
          </h2>
          <div className="about__content">
            <p>
              Chez <strong>MediScript</strong>, nous aidons les médecins et les
              cabinets au Maroc à construire une présence digitale utile et
              professionnelle et non pas des vitrines vaines.
              <strong>Notre équipe</strong> réunit des développeurs web et des
              spécialistes de la communication médicale pour concevoir des sites
              clairs, sécurisés et orientés patient.
            </p>
            <p>
              Notre approche est pragmatique : comprendre vos objectifs
              cliniques, protéger les données de vos patients et livrer une
              expérience en ligne qui réduit les appels, facilite la prise de
              rendez-vous et renforce la confiance.
            </p>
            <p>
              <strong>Ce que nous faisons :</strong> création de site sur
              mesure, hébergement sécurisé (HTTPS), optimisation mobile,
              référencement local, maintenance continue, rédaction orientée
              patient, et intégration d’outils pratiques (prise de RDV en ligne,
              formulaires sécurisés, carte interactive).
            </p>
            <p>
              Vous voulez un site qui reflète réellement votre professionnalisme
              et apporte des résultats concrets ?{" "}
              <Button
                text="Contactez nous"
                type="button"
                className="about__btn"
                onClick={() => setShowModal(true)}
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
