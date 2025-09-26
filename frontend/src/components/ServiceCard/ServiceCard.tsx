import "./ServiceCard.scss";
import Computer from "../../assets/icons/computer.svg?react";
import Tooth from "../../assets/icons/tooth.svg?react";
import Hospital from "../../assets/icons/hospital.svg?react";
import Toolkit from "../../assets/icons/toolkit.svg?react";

interface iServiceCard {
  type: "computer" | "tooth" | "hospital" | "toolkit";
  title: string;
  desc: string;
}

const icons = {
  computer: Computer,
  tooth: Tooth,
  hospital: Hospital,
  toolkit: Toolkit,
};

const ServiceCard: React.FC<iServiceCard> = ({ type, title, desc }) => {
  const Icon = icons[type];
  return (
    <div className="service-card">
      <Icon
        className="service-card__icon"
        width={80}
        height={80}
        aria-hidden="true"
      />
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__desc">{desc}</p>
    </div>
  );
};

export default ServiceCard;
