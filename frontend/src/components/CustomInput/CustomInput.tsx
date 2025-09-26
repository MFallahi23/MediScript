import "./CustomInput.scss";
import UserIcon from "../../assets/icons/user.svg?react";
import PhoneIcon from "../../assets/icons/phone.svg?react";

interface iCustomInput {
  type: "text" | "email" | "tel";
  name: string;
  icon: "user" | "phone";
  text: string;
}

const icons = {
  user: UserIcon,
  phone: PhoneIcon,
};

const CustomInput: React.FC<iCustomInput> = ({ type, name, icon, text }) => {
  const Icon = icons[icon];
  return (
    <div className="custom-input">
      <label htmlFor={name} className="custom-input__label">
        {text}
      </label>
      <input
        className="custom-input__field"
        type={type}
        name={name}
        id={name}
      />
      <Icon
        className="custom-input__icon"
        width={25}
        height={25}
        aria-hidden="true"
      />
    </div>
  );
};

export default CustomInput;
