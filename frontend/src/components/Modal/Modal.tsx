import "./Modal.scss";
import CustomInput from "../CustomInput/CustomInput";
import CustomTextarea from "../CustomTextarea/CustomTextarea";
import ModalClose from "../../assets/icons/close.svg?react";
import Button from "../Button/Button";
import { useRef } from "react";

interface iModal {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<iModal> = ({ showModal, setShowModal, setSuccess }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    const payload = {
      name: formData.get("modalFullName"),
      phone: formData.get("modalTel"),
      message: formData.get("modalMsg"),
    };

    try {
      const res = await fetch("http://localhost:3000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setSuccess(true);
        formRef.current?.reset();
        setShowModal(false);
      } else {
        alert("Erreur lors de l'envoi du formulaire");
      }
    } catch (err) {
      console.error(err);
      alert("Impossible de contacter le serveur");
    }
  };
  return (
    <>
      <div
        className={`modal__bg ${showModal ? "modal__bg--visible" : ""}`}
      ></div>
      <div className={`modal ${showModal ? "modal--visible" : ""}`} id="modal">
        <button
          className="modal__close"
          type="button"
          onClick={() => setShowModal(false)}
        >
          <ModalClose className="modal__icon" />
        </button>

        <form
          action="#"
          className="modal__form"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <p className="modal__form-intro">
            Remplissez ce formulaire et nous vous recontacterons rapidement.
          </p>
          <div className="modal__inputs">
            <CustomInput
              text="Nom Complet"
              type="text"
              name="modalFullName"
              icon="user"
            />

            <CustomInput
              text="Téléphone"
              type="tel"
              name="modalTel"
              icon="phone"
            />
            <CustomTextarea
              name="modalMsg"
              text="Message (optionel)"
              rows={4}
            />
          </div>
          <Button className="modal__btn" text="Nous contacter" type="submit" />
        </form>
      </div>
    </>
  );
};

export default Modal;
