import React from 'react';
import { Link } from 'react-router-dom';

function MediaPreview({ title, excerpt, image, link }) {
  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={title} />
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

export default MediaPreview;
