import axios from "axios";
import Underline from "../../assets/icons/underline.svg?react";
import BlogCard from "../../components/BlogCard/BlogCard";
import { useEffect, useState } from "react";
import { formatDate } from "../../utils";
import "./BlogPage.scss";

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("http://localhost:3000/posts");
        setPosts(res.data);
      } catch (error) {
        alert(error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <section className="blog-page" id="blog-page">
      <div className="container">
        <div className="blog__wrapper">
          <h2 className="blog__title">
            Blog
            <Underline
              className="blog__title-icon"
              width={350}
              height={60}
              aria-hidden="true"
            />
          </h2>
          <div className="blog__content">
            <ul className="blog__list">
              {posts &&
                posts.map(({ id, title, content, created_at }) => (
                  <li className="blog__item" key={id}>
                    <BlogCard
                      num="1"
                      date={formatDate(created_at)}
                      title={title}
                      text={
                        content.length > 250
                          ? content.slice(0, 250) + "…"
                          : content
                      }
                      withImg={false}
                      id={id}
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
