import Button from "../Button/Button";
import "./Nav.scss";

interface iNav {
  type: "desktop" | "mobile";
  activeMenu?: boolean;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<iNav> = ({ type, activeMenu, setShowModal }) => {
  return (
    <nav
      className={`nav ${type === "mobile" ? "nav--mobile" : ""} ${
        type === "mobile" && activeMenu ? "" : "nav--hidden"
      } `}
    >
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#" className="nav__link">
            Accueil
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Services
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Réalisations
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Blog
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            À propos
          </a>
        </li>
      </ul>
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
