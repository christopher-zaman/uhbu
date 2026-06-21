// src/components/PhotoGallery.jsx
import React, { useState } from 'react';

function PhotoBanner({ image, alt }) {
  return (
    <section className="photo-banner">
      <img src={image} alt={alt} />
    </section>
  );
}

export default PhotoBanner;