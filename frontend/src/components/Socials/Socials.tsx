import "./Socials.scss";
import Facebook from "../../assets/icons/facebook.svg?react";
import Ig from "../../assets/icons/ig.svg?react";
import Linkedin from "../../assets/icons/linkedin.svg?react";

const Socials: React.FC = () => {
  return (
    <ul className="socials">
      <li className="socials__item">
        <a
          href="https://www.linkedin.com/in/mouhcine-fallahi-256686243/"
          className="socials__link"
          target="_blank"
          aria-label="Lien vers la page Linkedin de MediScript"
        >
          <Linkedin
            className="socials-icon"
            width={30}
            height={30}
            aria-hidden={true}
          />
        </a>
      </li>
      <li className="socials__item">
        <a
          href=""
          className="socials__link"
          target="_blank"
          aria-label="Lien vers la page Facebook de MediScript"
        >
          <Facebook
            className="socials-icon"
            width={30}
            height={30}
            aria-hidden={true}
          />
        </a>
      </li>
      <li className="socials__item">
        <a
          href="https://www.instagram.com/fallahimouhcine/"
          className="socials__link"
          target="_blank"
          aria-label="Lien vers la page Instagram de MediScript"
        >
          <Ig
            className="socials-icon"
            width={30}
            height={30}
            aria-hidden={true}
          />
        </a>
      </li>
    </ul>
  );
};

export default Socials;
