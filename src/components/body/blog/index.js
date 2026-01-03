import "./blog.css";
import Separator from "../../common/separator";
import { blogs } from "../../data/blog";

function Blog() {
  return (
    <div className="blog">
      <Separator />
      <label className="section-title">Blogs</label>

      <div className="blog-list">
        {blogs.map((blog, index) => (
          <a
            href={blog.link}
            className="blog-card"
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={blog.image} alt={blog.title} className="blog-image" />

            <div className="blog-info">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Blog;
