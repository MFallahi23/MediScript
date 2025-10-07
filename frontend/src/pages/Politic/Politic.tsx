import "./Politic.scss";
import Underline from "../../assets/icons/underline.svg?react";

const Politic = () => {
  return (
    <section className="politic">
      <div className="container">
        <h2 className="politic__title">
          Politique de confidentialité
          <Underline
            className="politic__title-icon"
            width={350}
            height={60}
            aria-hidden="true"
          />
        </h2>

        <div className="politic__content">
          <p>
            La protection des données personnelles est une priorité pour
            MediScript. Cette politique explique comment nous collectons,
            utilisons et protégeons vos informations.
          </p>

          <h3>1. Collecte des données</h3>

          <p>
            Nous pouvons collecter les informations suivantes lorsque vous
            utilisez notre site :
          </p>

          <ul>
            <li>Nom, prénom</li>
            <li>Adresse email, numéro de téléphone</li>
            <li>
              Informations transmises via les formulaires de contact ou de prise
              de rendez-vous
            </li>
          </ul>

          <h3>2. Utilisation des données</h3>

          <p>Les données collectées servent uniquement à :</p>
          <ul>
            <li>Répondre à vos demandes de contact</li>
            <li>Gérer les prises de rendez-vous</li>
            <li>Améliorer nos services et notre communication</li>
          </ul>

          <h3>3. Conservation des données</h3>
          <p>
            Les données sont conservées pour une durée limitée, uniquement le
            temps nécessaire aux finalités indiquées, puis supprimées ou
            archivées de manière sécurisée.
          </p>
          <h3>4. Partage des données</h3>
          <p>
            Vos données ne sont jamais vendues ni partagées avec des tiers à des
            fins commerciales. Elles peuvent être transmises uniquement à nos
            partenaires techniques si cela est indispensable au bon
            fonctionnement du service.
          </p>

          <h3>5. Sécurité</h3>
          <p>
            Nous mettons en place des mesures techniques et organisationnelles
            pour protéger vos données contre tout accès non autorisé, perte ou
            divulgation.
          </p>
          <h3>6. Droits des utilisateurs</h3>
          <p>
            Conformément à la loi marocaine 09-08 relative à la protection des
            données personnelles, vous disposez d’un droit d’accès, de
            rectification et de suppression de vos données. Pour exercer vos
            droits, contactez-nous à : contact@mediscript.ma
          </p>
        </div>
      </div>
    </section>
  );
};

export default Politic;
