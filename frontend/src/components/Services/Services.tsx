import "./Services.scss";
import Underline from "../../assets/icons/underline.svg?react";
import ServiceCard from "../ServiceCard/ServiceCard";

const Services: React.FC = () => {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__wrapper">
          <h2 className="services__title">
            Nos services
            <Underline
              className="services__title-icon"
              width={350}
              height={60}
              aria-hidden="true"
            />
          </h2>
          <ul className="services__list">
            <li className="services__item">
              <ServiceCard
                type="computer"
                title="Sites professionnels"
                desc="Conception d'un site professionnel sur mesure pour votre
                  cabinet, moderne et facile à gérer."
              />
            </li>
            <li className="services__item">
              <ServiceCard
                type="tooth"
                title="Audit de site existant"
                desc="Analyse complète de votre site actuel avec recommandations
                  pour améliorer visibilité, crédibilité et performance."
              />
            </li>
            <li className="services__item">
              <ServiceCard
                type="hospital"
                title="Formulaire & rendez-vous en ligne"
                desc="Mettez en place des outils simples pour que vos patients
                  prennent rendez-vous facilement et directement depuis votre
                  site."
              />
            </li>
            <li className="services__item">
              <ServiceCard
                type="toolkit"
                title="Maintenance & support"
                desc="Nous assurons la sécurité, les mises à jour et la performance
                  de votre site pour un fonctionnement sans souci."
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
