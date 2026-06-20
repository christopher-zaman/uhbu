import React from 'react';
import { Link } from 'react-router-dom';

function BlogPreview({ title, excerpt, image, link, isVideo = false }) {
  return (
    <div className="card h-100 blog-thumbnail">

      <Link to={link} className="blog-thumbnail-link">
        <div className="blog-thumbnail-image">
          <img src={image} className="card-img-top" alt={title} />

          {isVideo && (
            <div className="play-button">
              <i className="bi bi-play-fill"></i>
            </div>
          )}
        </div>
      </Link>

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{excerpt}</p>

        <div className="mt-auto">
          <Link to={link} className="btn btn-outline-primary">
            Read More
          </Link>
        </div>
      </div>

    </div>
  );
}

export default BlogPreview;