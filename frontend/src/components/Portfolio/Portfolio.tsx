import Underline from "../../assets/icons/underline.svg?react";
import PortfolioCard from "../PortfolioCard/PortfolioCard";
import "./Portfolio.scss";

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio">
      <div className="container">
        <div className="portfolio__wrapper">
          <h2 className="portfolio__title">
            Nos Réalisations
            <Underline
              className="why-us__title-icon"
              width={350}
              height={60}
              aria-hidden="true"
            />
          </h2>
          <div className="portfolio__content">
            <ul className="portfolio__list">
              <li className="portfolio__item">
                <PortfolioCard />
              </li>
              {/* <li className="portfolio__item">
                <div className="portfolio-card portfolio-card--coming-soon">
                  <div className="portfolio-card__overlay portfolio-card__overlay--always-on">
                    <span className="portfolio-card__overlay-text">
                      Bientôt disponible
                    </span>
                  </div>
                </div>
              </li>
              <li className="portfolio__item">
                <div className="portfolio-card portfolio-card--coming-soon">
                  <div className="portfolio-card__overlay portfolio-card__overlay--always-on">
                    <span className="portfolio-card__overlay-text">
                      Bientôt disponible
                    </span>
                  </div>
                </div>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
