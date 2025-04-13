// Banner.jsx
import React from 'react';

const Banner = ({ image, title, subtitle, imageDescription }) => {
  return (
    <div
      className="banner"
      style={{ background: `url(${image}) center center/cover no-repeat` }}
      role="img"
      aria-label={imageDescription}
    >
      <div className="banner-text">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

export default Banner;
