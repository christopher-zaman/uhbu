// components/BlogHero.jsx
import React from 'react';

function BlogHero({ backgroundImage, title }) {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
  };

  return (
    <section style={sectionStyle}>
      <div className="container">
        <h1 className="display-5">{title}</h1>
      </div>
    </section>
  );
}

export default BlogHero;
