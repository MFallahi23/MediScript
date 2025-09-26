import Underline from "../../assets/icons/underline.svg?react";
import BlogCard from "../BlogCard/BlogCard";

import "./Blog.scss";

const Blog: React.FC = () => {
  return (
    <section className="blog">
      <div className="container">
        <div className="blog__wrapper">
          <h2 className="blog__title">
            Blog
            <Underline
              className="why-us__title-icon"
              width={350}
              height={60}
              aria-hidden="true"
            />
          </h2>
          <div className="blog__content">
            <ul className="blog__list">
              <li className="blog__item">
                <BlogCard
                  num="1"
                  date="Septembre 6, 2025"
                  title="Comment créer un site web pour votre cabinet médical"
                  text="Un site web bien conçu est aujourd'hui indispensable
                          pour tout cabinet médical. Il permet de présenter vos
                          services, faciliter la prise de rendez-vous et
                          rassurer vos patients. Découvrez les étapes clés pour
                          créer un site clair, moderne et efficace."
                />
              </li>
              <li className="blog__item">
                <BlogCard
                  num="2"
                  date="Septembre 6, 2025"
                  title="Comment devenir un médecin réputé au Maroc"
                  text="La réputation d'un médecin ne dépend pas seulement de
                          ses compétences, mais aussi de sa visibilité et de sa
                          relation avec les patients. Apprenez les stratégies
                          pour bâtir votre image professionnelle et gagner la
                          confiance de vos patients au Maroc."
                />
              </li>
              <li className="blog__item">
                <BlogCard
                  num="3"
                  date="Septembre 6, 2025"
                  title="5 erreurs à éviter lors de la création d’un site web
                          pour médecins"
                  text="Créer un site web pour un cabinet médical peut sembler
                          simple, mais certaines erreurs nuisent à son
                          efficacité. Découvrez les cinq erreurs les plus
                          fréquentes et comment les corriger pour offrir une
                          expérience optimale à vos patients."
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
