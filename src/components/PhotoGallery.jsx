// src/components/PhotoGallery.jsx
import React, { useState } from 'react';

function PhotoGallery({ title, subtitle, images = [] }) {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="photo-gallery-section py-5">
      <div className="container">
        <div className="text-center mb-4">
          {title && <h2>{title}</h2>}
          {subtitle && <p className="lead">{subtitle}</p>}
        </div>

        <div className="row g-4">
          {images.map((image, index) => (
            <div className="col-6 col-md-4 col-lg-3" key={index}>
              <button
                type="button"
                className="photo-gallery-item"
                onClick={() => setSelectedImage(image)}
              >
                <img src={image.src} alt={image.alt || `Gallery image ${index + 1}`} />
              </button>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="gallery-lightbox" onClick={() => setSelectedImage(null)}>
          <button
            type="button"
            className="gallery-close"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt || 'Selected gallery image'}
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}

export default PhotoGallery;