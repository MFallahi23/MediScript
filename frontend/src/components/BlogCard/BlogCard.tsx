import "./BlogCard.scss";
import BlogImg1 from "../../assets/images/blog-1.jpg";
import BlogImg2 from "../../assets/images/blog-2.jpg";
import BlogImg3 from "../../assets/images/blog-3.jpg";
import ReactMarkdown from "react-markdown";
import { useNavigate } from "react-router-dom";

interface iBlogCard {
  num: "1" | "2" | "3";
  title: string;
  text: string;
  date: string;
  withImg: boolean;
  id: number;
}

const BlogCard: React.FC<iBlogCard> = ({
  num,
  date,
  title,
  text,
  withImg,
  id,
}) => {
  const images: Record<iBlogCard["num"], string> = {
    "1": BlogImg1,
    "2": BlogImg2,
    "3": BlogImg3,
  };
  const navigate = useNavigate();

  return (
    <article className="blog-card">
      <div className="blog-card__wrapper">
        {withImg && (
          <img
            className="blog-card__img"
            src={images[num]}
            width="300"
            height="200"
            alt="Photo d'un médecin qui veut créer un site web pour son cabinet médical"
          />
        )}
        <div className="blog-card__content">
          <div className="blog-card__content-top">
            <time dateTime="2025-09-06">{date}</time>
            <h3 className="blog-card__title">{title}</h3>

            <div className="blog-card__desc">
              <ReactMarkdown>{text}</ReactMarkdown>
            </div>
          </div>
          <button
            className="btn blog-card__btn"
            onClick={() => navigate(`/blog/${id}`)}
          >
            En savoir plus
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
