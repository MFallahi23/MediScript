import "./Footer.scss";
import LogoWhite from "../../assets/icons/logo-white.svg?react";
import Socials from "../Socials/Socials";
import Button from "../Button/Button";

interface iHeader {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Footer: React.FC<iHeader> = ({ setShowModal }) => {
  return (
    <section className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__top">
            <div className="footer__logo">
              <a
                className="footer__logo-link"
                href="#"
                aria-label="Logo de MediScript"
              >
                <LogoWhite
                  className="footer__logo-icon"
                  width={140}
                  height={40}
                />
              </a>
              <p className="footer__logo-text">
                Sites web médicaux sur mesure, pour attirer plus de patients.
              </p>
            </div>
            <div className="footer__info">
              <h3 className="footer__info-title">Liens utiles</h3>
              <ul className="footer__info-links">
                <li className="footer__info-item">
                  <a href="#" className="footer__info-link">
                    Accueil
                  </a>
                </li>
                <li className="footer__info-item">
                  <a href="#" className="footer__info-link">
                    Services
                  </a>
                </li>
                <li className="footer__info-item">
                  <a href="#" className="footer__info-link">
                    Pourquoi un site web pour votre cabinet?
                  </a>
                </li>
                <li className="footer__info-item">
                  <a href="#" className="footer__info-link">
                    Pourquoi nous choisir?
                  </a>
                </li>
                <li className="footer__info-item">
                  <a href="#" className="footer__info-link">
                    Portfolio
                  </a>
                </li>
                <li className="footer__info-item">
                  <a href="#" className="footer__info-link">
                    Blog
                  </a>
                </li>
                <li className="footer__info-item">
                  <a href="#" className="footer__info-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__info">
              <h3 className="footer__info-title">Contact</h3>
              <ul className="footer__info-links">
                <li className="footer__info-item">
                  <a className="footer__info-link" href="#">
                    {" "}
                    example@gmail.com{" "}
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__info">
              <h3 className="footer__info-title">Mentions légales</h3>
              <ul className="footer__info-links">
                <li className="footer__info-item">
                  <a className="footer__info-link" href="#">
                    Mentions légales{" "}
                  </a>
                </li>
                <li className="footer__info-item">
                  <a className="footer__info-link" href="#">
                    Politique de confidentialité
                  </a>
                </li>
              </ul>
            </div>
            <Button
              className="footer__btn btn--cta"
              text="Obtenir mon site"
              type="button"
              onClick={() => setShowModal(true)}
            />
          </div>
          <div className="footer__bottom">
            <Socials />
            <p className="footer__copy">
              © 2025 Mediscript. Conçu avec soin pour les professionnels de
              santé.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
