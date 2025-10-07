import { useEffect, useState } from "react";
import Underline from "../../assets/icons/underline.svg?react";
import BlogCard from "../BlogCard/BlogCard";

import "./Blog.scss";
import axios from "axios";
import { formatDate } from "../../utils";

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    console.log("hello");
    const fetchLatestPosts = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/posts?limit=3`);
        console.log(res.data);
        setPosts(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchLatestPosts();
  }, []);

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
            {posts.length > 0 ? (
              <ul className="blog__list">
                <li className="blog__item">
                  <BlogCard
                    num="1"
                    date={formatDate(posts[0].created_at)}
                    title={posts[0].title}
                    text={
                      posts[0].content.length > 250
                        ? posts[0].content.slice(0, 250) + "…"
                        : posts[0].content
                    }
                    withImg={true}
                    id={posts[0].id}
                  />
                </li>
                <li className="blog__item">
                  <BlogCard
                    num="2"
                    date={formatDate(posts[1].created_at)}
                    title={posts[1].title}
                    text={
                      posts[1].content.length > 250
                        ? posts[1].content.slice(0, 250) + "…"
                        : posts[1].content
                    }
                    withImg={true}
                    id={posts[1].id}
                  />
                </li>
                <li className="blog__item">
                  <BlogCard
                    num="3"
                    date={formatDate(posts[2].created_at)}
                    title={posts[2].title}
                    text={
                      posts[2].content.length > 250
                        ? posts[2].content.slice(0, 250) + "…"
                        : posts[2].content
                    }
                    withImg={true}
                    id={posts[2].id}
                  />
                </li>
              </ul>
            ) : (
              <p>Pas d'articles disponibles</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
