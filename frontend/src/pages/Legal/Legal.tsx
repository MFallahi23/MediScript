import "./Legal.scss";
import Underline from "../../assets/icons/underline.svg?react";

const Legal = () => {
  return (
    <section className="legal">
      <div className="container">
        <h2 className="legal__title">
          Mentions légales
          <Underline
            className="services__title-icon"
            width={350}
            height={60}
            aria-hidden="true"
          />
        </h2>

        <div className="legal__content">
          <p>Ce site internet est édité par :</p>
          <p>
            {" "}
            <strong>MediScript</strong>:Agence de développement web médical
          </p>
          <h3>Siège social :</h3>
          <p>[Adresse complète]</p>
          <h3>Email :</h3> contact@mediscript.ma
          <p></p>
          <h3>Téléphone :</h3>
          <p>+212 [numéro]</p>
          <h3>Responsable de la publication :</h3>
          <p>[Nom et prénom du gérant]</p>
          <h3>Hébergement du site :</h3>
          <p>[Nom de l’hébergeur] – [Adresse] – [Site web]</p>
          <h3> Propriété intellectuelle :</h3>
          <p>
            L’ensemble du contenu du site (textes, images, logos, graphismes,
            vidéos, structure) est la propriété exclusive de MediScript, sauf
            mention contraire. Toute reproduction, distribution ou modification,
            partielle ou totale, sans autorisation écrite préalable est
            strictement interdite.
          </p>
          <h3>Responsabilité :</h3>
          <p>
            MediScript s’efforce d’assurer l’exactitude des informations
            présentes sur ce site. Cependant, aucune garantie n’est donnée quant
            à l’exhaustivité ou l’actualité des contenus. L’utilisateur
            reconnaît utiliser ces informations sous sa seule responsabilité.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Legal;
