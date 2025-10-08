import { useEffect, useState } from "react";
import "./BlogPost.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import Underline from "../../assets/icons/underline.svg?react";

interface Post {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

const BlogPost: React.FC = () => {
  const [post, setPost] = useState<Post>();

  const { id } = useParams<{ id: string }>();
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(`/posts/${id}`);
      setPost(res.data);
    };
    fetchPost();
  }, []);
  return (
    <section className="blog-post">
      <div className="container">
        <div className="blog-post__wrapper">
          <h2 className="blog-post__title">
            {post && post.title}

            <Underline
              className="blog-post__title-icon"
              width={350}
              height={60}
              aria-hidden="true"
            />
          </h2>
          <div className="blog-post__content">
            <ReactMarkdown
              components={{
                p: ({ node, ...props }) => (
                  <p className="blog-post__paragraph" {...props} />
                ),
                h2: ({ node, ...props }) => (
                  <h2 className="blog-post__subtitle" {...props} />
                ),
                a: ({ node, ...props }) => (
                  <a
                    className="blog-post__link"
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                  />
                ),
                strong: ({ node, ...props }) => (
                  <strong className="blog-post__bold" {...props} />
                ),
                li: ({ node, ...props }) => (
                  <li className="blog-post__list-item" {...props} />
                ),
              }}
            >
              {post?.content || ""}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPost;
