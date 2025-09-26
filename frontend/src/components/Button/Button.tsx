import "./Button.scss";

interface iButton {
  text: string;
  className: string;
  type: "button" | "submit" | "reset";
  onClick?: () => void;
}

const Button: React.FC<iButton> = ({ text, className, type, onClick }) => {
  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
