import Underline from "../../assets/icons/underline.svg?react";
import ContactIcon from "../../assets/icons/contact-icon.svg?react";
import "./Contact.scss";
import CustomInput from "../CustomInput/CustomInput";
import CustomTextarea from "../CustomTextarea/CustomTextarea";
import Button from "../Button/Button";
import { useRef } from "react";

interface iContact {
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const Contact: React.FC<iContact> = ({ setSuccess }) => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    const payload = {
      name: formData.get("fullName"),
      phone: formData.get("tel"),
      message: formData.get("msg"),
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
      } else {
        alert("Erreur lors de l'envoi du formulaire");
      }
    } catch (err) {
      console.error(err);
      alert("Impossible de contacter le serveur");
    }
  };
  return (
    <section className="contact">
      <div className="container">
        <div className="contact__wrapper">
          <h2 className="contact__title">
            Prêt à attirer plus de patients?
            <Underline
              className="why-us__title-icon"
              width={350}
              height={60}
              aria-hidden="true"
            />
          </h2>
          <div className="contact__content">
            <form
              action="#"
              className="contact__form"
              onSubmit={handleSubmit}
              ref={formRef}
            >
              <p className="contact__form-intro">
                Remplissez ce formulaire et nous vous recontacterons rapidement.
              </p>
              <div className="contact__inputs">
                <CustomInput
                  text="Nom Complet"
                  name="fullName"
                  type="text"
                  icon="user"
                />
                <CustomInput
                  text=" Téléphone"
                  name="tel"
                  type="tel"
                  icon="phone"
                />
                <CustomTextarea text="Message (optionel)" name="msg" rows={4} />
              </div>
              <Button
                className="contact__btn"
                text="Nous contacter"
                type="submit"
              />
            </form>
            <ContactIcon
              className="contact__icon"
              width={500}
              height={500}
              aria-label="Illustration de deux professionels de santé"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
