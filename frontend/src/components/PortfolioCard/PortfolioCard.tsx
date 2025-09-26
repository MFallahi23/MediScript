import "./PortfolioCard.scss";
import WebsiteImg from "../../assets/images/portfolio-1.png";

const PortfolioCard: React.FC = () => {
  return (
    <div className="portfolio-card">
      <a
        className="portfolio-card__link"
        href="https://lahrissi-dermatologist-website.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="portfolio-card__img"
          src={WebsiteImg}
          alt="Image du site web de Dr. Lahrissi, dermatologue à Casablanca"
        />
        <div className="portfolio-card__overlay">
          <span className="portfolio-card__overlay-text">Visiter la page</span>
        </div>
      </a>
    </div>
  );
};

export default PortfolioCard;
