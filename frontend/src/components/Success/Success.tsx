import "./Success.scss";
import SuccessIcon from "../../assets/icons/success.svg?react";
import ModalClose from "../../assets/icons/close.svg?react";

interface iSuccess {
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const Success: React.FC<iSuccess> = ({ success, setSuccess }) => {
  return (
    <>
      <div
        className={`success__bg ${success ? "success__bg--visible" : ""}`}
      ></div>
      <div
        className={`success ${success ? "success--visible" : ""}`}
        id="success"
      >
        <button
          className="success__close"
          type="button"
          onClick={() => setSuccess(false)}
        >
          {/* <svg
            className="success__icon size-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg> */}
          <ModalClose className="modal__icon" />
        </button>
        <h2 className="success__title">Formulaire envoyé avec succès</h2>
        <p className="success__text">
          Merci pour votre message. Nous vous répondrons dans les plus brefs
          délais.
        </p>
        <SuccessIcon
          className="success__img"
          width={150}
          height={150}
          aria-hidden="true"
        />
      </div>
    </>
  );
};

export default Success;
