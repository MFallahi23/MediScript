import "./Footer.scss";
import LogoWhite from "../../assets/icons/logo-white.svg?react";
import Socials from "../Socials/Socials";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

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
                  <HashLink className="footer__info-link" smooth to="/#hero">
                    Accueil
                  </HashLink>
                </li>
                <li className="footer__info-item">
                  <HashLink
                    className="footer__info-link"
                    smooth
                    to="/#services"
                  >
                    Services
                  </HashLink>
                </li>
                <li className="footer__info-item">
                  <HashLink
                    className="footer__info-link"
                    smooth
                    to="/#doctor-website"
                  >
                    Pourquoi un site web pour votre cabinet?
                  </HashLink>
                </li>
                <li className="footer__info-item">
                  <HashLink className="footer__info-link" smooth to="/#why-us">
                    Pourquoi nous choisir?
                  </HashLink>
                </li>
                <li className="footer__info-item">
                  <HashLink
                    className="footer__info-link"
                    smooth
                    to="/#portfolio"
                  >
                    Portfolio
                  </HashLink>
                </li>
                <li className="footer__info-item">
                  <HashLink
                    className="footer__info-link"
                    smooth
                    to="/blog#blog-page"
                  >
                    Blog
                  </HashLink>
                </li>
                <li className="footer__info-item">
                  <HashLink className="footer__info-link" smooth to="/#contact">
                    Contact
                  </HashLink>
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
                  <Link className="footer__info-link" to={"/legal"}>
                    Mentions légales{" "}
                  </Link>
                </li>
                <li className="footer__info-item">
                  <Link className="footer__info-link" to={"/politic"}>
                    Politique de confidentialité
                  </Link>
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
