import "./Header.scss";
import Logo from "../../assets/icons/logo.svg?react";
import Nav from "../Nav/Nav";
import Button from "../Button/Button";
import { useState } from "react";

interface iHeader {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<iHeader> = ({ setShowModal }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  return (
    <section className="header">
      <div className="container">
        <div className="header__wrapper">
          <a
            className="header__logo-link"
            href="#"
            aria-label="Logo de MediScript"
          >
            <Logo className="header__logo" width={140} height={40} />
          </a>
          <Nav type="desktop" setActiveMenu={setActiveMenu} />
          <Button
            className="header__btn  btn--cta"
            text="Obtenez votre site"
            type="button"
            onClick={() => setShowModal(true)}
          />

          <div
            className={`header__burger ${
              !activeMenu ? "not-active" : "active"
            }`}
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>

          <Nav
            type="mobile"
            activeMenu={activeMenu}
            setShowModal={setShowModal}
            setActiveMenu={setActiveMenu}
          />
        </div>
      </div>
    </section>
  );
};

export default Header;
