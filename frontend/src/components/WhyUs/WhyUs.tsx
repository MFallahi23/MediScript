import Underline from "../../assets/icons/underline.svg?react";
import WhyUsIcon from "../../assets/icons/why-us.svg?react";
import "./WhyUs.scss";

const WhyUs: React.FC = () => {
  return (
    <section className="why-us">
      <div className="container">
        <div className="why-us__wrapper">
          <h2 className="why-us__title">
            Pourquoi nous choisir?
            <Underline
              className="why-us__title-icon"
              width={350}
              height={60}
              aria-hidden="true"
            />
          </h2>
          <div className="why-us__ctn">
            <WhyUsIcon
              className="why-us__icon"
              width={500}
              height={500}
              aria-label="Illustrations de deux médecins"
            />
            <div className="why-us__content">
              <ul className="why-us__list">
                <li className="why-us__item">
                  <span className="why-us__number">01.</span>
                  <div className="why-us__text">
                    <h3 className="why-us__content-title">
                      Expertise médicale
                    </h3>
                    <p className="why-us__desc">
                      Grâce à notre connaissance approfondie du secteur médical,
                      nous créons des sites adaptés aux besoins spécifiques de
                      chaque cabinet.
                    </p>
                  </div>
                </li>
                <li className="why-us__item">
                  <span className="why-us__number">02.</span>
                  <div className="why-us__text">
                    <h3 className="why-us__content-title">
                      Flexibilité et personnalisation
                    </h3>
                    <p className="why-us__desc">
                      Chaque site est conçu sur mesure selon vos objectifs et
                      votre identité visuelle, avec des solutions modulables
                      pour évoluer avec votre activité.
                    </p>
                  </div>
                </li>
                <li className="why-us__item">
                  <span className="why-us__number">03.</span>
                  <div className="why-us__text">
                    <h3 className="why-us__content-title">
                      Résultats concrets
                    </h3>
                    <p className="why-us__desc">
                      Notre objectif ne se limite pas à un beau site : nous
                      visons à améliorer votre visibilité, attirer davantage de
                      patients et générer un impact réel sur votre pratique.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
