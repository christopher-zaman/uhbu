import React from 'react';
import '../assets/css/SideBySideImages.css';

function SideBySideImages({ title, leftImage, rightImage, leftAlt = '', rightAlt = '', sectionId = '', className = '' }) {
  return (
    <section id={sectionId} className={`side-by-side section ${className}`}>
      <div className="container text-center">
        {title && <h2 className="mb-5">{title}</h2>}
        <div className="row g-4 justify-content-center">
          <div className="col-md-6">
            <img src={leftImage} alt={leftAlt} className="img-fluid rounded shadow" />
          </div>
          <div className="col-md-6">
            <img src={rightImage} alt={rightAlt} className="img-fluid rounded shadow" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SideBySideImages;
