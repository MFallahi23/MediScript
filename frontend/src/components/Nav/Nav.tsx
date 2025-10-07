import Button from "../Button/Button";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import "./Nav.scss";

interface iNav {
  type: "desktop" | "mobile";
  activeMenu?: boolean;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<iNav> = ({
  type,
  activeMenu,
  setShowModal,
  setActiveMenu,
}) => {
  return (
    <nav
      className={`nav ${type === "mobile" ? "nav--mobile" : ""} ${
        type === "mobile" && activeMenu ? "" : "nav--hidden"
      } `}
    >
      {setActiveMenu && (
        <ul className="nav__list">
          <li
            className="nav__item"
            onClick={() => {
              setActiveMenu(false);
            }}
          >
            <HashLink smooth to="/#hero" className="nav__link">
              Accueil
            </HashLink>
          </li>
          <li
            className="nav__item"
            onClick={() => {
              setActiveMenu(false);
            }}
          >
            <HashLink smooth to="/#services" className="nav__link">
              Services
            </HashLink>
          </li>
          <li
            className="nav__item"
            onClick={() => {
              setActiveMenu(false);
            }}
          >
            <HashLink smooth to="/#portfolio" className="nav__link">
              Réalisations
            </HashLink>
          </li>
          <li
            className="nav__item"
            onClick={() => {
              setActiveMenu(false);
            }}
          >
            <HashLink smooth to="/blog#blog-page" className="nav__link">
              Blog
            </HashLink>
          </li>
          <li
            className="nav__item"
            onClick={() => {
              setActiveMenu(false);
            }}
          >
            <HashLink smooth to="/about#about" className="nav__link">
              À propos
            </HashLink>
          </li>
        </ul>
      )}

      {type === "mobile" && setShowModal && (
        <Button
          className="nav__btn  btn--cta"
          text="Obtenez votre site"
          type="button"
          onClick={() => setShowModal(true)}
        />
      )}
    </nav>
  );
};

export default Nav;
