import "./blog.css";

function index({ blog }) {
  return (
    <div className="blog-card">
      <img src={blog.image} alt={blog.title} className="blog-image" />

      <div className="blog-info">
        <h3 className="blog-title">{blog.title}</h3>
        <p className="blog-description">{blog.description}</p>

        {blog.link && (
          <a href={blog.link} className="blog-link">
            Read more →
          </a>
        )}
      </div>
    </div>
  );
}

export default index;
