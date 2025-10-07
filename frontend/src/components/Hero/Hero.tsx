import React from "react";
import "./Hero.scss";
import MedicalCore from "../../assets/icons/medical-core.svg?react";
import Stheto from "../../assets/icons/stheto.svg?react";
import Button from "../Button/Button";

interface iHero {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: React.FC<iHero> = ({ setShowModal }) => {
  return (
    <section className="hero" id="hero">
      <h1 className="visually-hidden">
        MediScript, Agence digitale spécialisée dans les sites pour cabinets
        médicaux
      </h1>
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__content">
            <h2 className="hero__title">
              Un site web qui valorisent votre cabinet
            </h2>
            <p className="hero__desc">
              C'est le moment idéal : très peu de médecins sont présents en
              ligne, alors que vos patients vous cherchent déjà. Avec
              MediScript, créez un site moderne qui valorise votre cabinet,
              renforce votre réputation et attire de nouveaux patients. Profitez
              dès aujourd'hui d'un avantage unique avant que vos confrères ne le
              découvrent.
            </p>
            <Button
              className="hero__btn btn--cta"
              text="Attirez plus de patients"
              type="button"
              onClick={() => setShowModal(true)}
            />
            <div className="hero__stats">
              <div className="hero__stat">
                <span className="hero__stat-number">98%</span>
                <span className="hero__stat-text">de clients satisfaits</span>
              </div>
              <div className="hero__stat">
                <span className="hero__stat-number">100%</span>
                <span className="hero__stat-text">
                  spécialisés dans les sites web médicaux
                </span>
              </div>
            </div>
          </div>
          <div className="hero__visual">
            <MedicalCore
              className="hero__img"
              width={500}
              height={500}
              aria-label="Illustration d'un staff medical"
            />

            <div className="hero__speciality">
              <Stheto
                className="hero__speciality-icon"
                width={30}
                height={30}
                aria-hidden={true}
              />
              Spécialistes des sites pour cabinets médicaux
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
