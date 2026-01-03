import "./blog.css";
import Separator from "../../common/separator";
import { blogs } from "../../data/blog";
function index() {
  return (
    <div className="blog-card">
      <Separator />
      <img src={blogs.image} alt={blogs.title} className="blog-image" />

      <div className="blog-info">
        <h3 className="blog-title">{blogs.title}</h3>
        <p className="blog-description">{blogs.description}</p>

        {blogs.link && (
          <a href={blogs.link} className="blog-link">
            Read more →
          </a>
        )}
      </div>
    </div>
  );
}

export default index;
