import Underline from "../../assets/icons/underline.svg?react";
import ComputerNotes from "../../assets/icons/computer-notes.svg?react";
import Trust from "../../assets/icons/trust.svg?react";
import Professional from "../../assets/icons/professional.svg?react";
import "./DoctorWebsite.scss";

const DoctorWebsite: React.FC = () => {
  return (
    <section className="doctor-website" id="doctor-website">
      <div className="container">
        <div className="doctor-website__wrapper">
          <h2 className="doctor-website__title">
            Pourquoi un site web pour les médecins?
            <Underline
              className="doctor-website__title-icon"
              width={350}
              height={60}
              aria-hidden="true"
            />
          </h2>
          <ul className="doctor-website__list">
            <li className="doctor-website__item">
              <ComputerNotes
                className="doctor-website__icon"
                width={160}
                height={160}
                aria-hidden="true"
              />
              <h3 className="doctor-website__item-title">Plus de patients</h3>
              <p className="doctor-website__item-desc">
                Vos patients recherchent leur médecin en ligne. Un site vous
                rend visible là où vos confrères ne le sont pas encore.
              </p>
              <span className="doctor-website__number">01.</span>
            </li>
            <li className="doctor-website__item">
              <Trust
                className="doctor-website__icon"
                width={160}
                height={160}
                aria-hidden="true"
              />
              <h3 className="doctor-website__item-title">Plus de confiance</h3>
              <p className="doctor-website__item-desc">
                Un site professionnel rassure vos patients et montre que votre
                cabinet est moderne et organisé.
              </p>
              <span className="doctor-website__number">02.</span>
            </li>
            <li className="doctor-website__item">
              <Professional
                className="doctor-website__icon"
                width={160}
                height={160}
                aria-hidden="true"
              />
              <h3 className="doctor-website__item-title">Plus de réputation</h3>
              <p className="doctor-website__item-desc">
                Votre site devient votre vitrine officielle : il valorise votre
                image et renforce votre crédibilité.
              </p>
              <span className="doctor-website__number">03.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default DoctorWebsite;
