import React from 'react';
import '../assets/css/VideoHero.css';

function VideoHero({ videoId, title, subtitle, cta, bullets }) {
  return (
    <section className="video-hero" style={{ position: 'relative' }}>
      
      <div className="responsive-video-wrapper">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}
          title="YouTube video"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>

      {/* Overlay Content */}
<div className="video-hero-overlay container">
  <div className="video-hero-content">

    {/* Title (always visible, but can be adjusted later) */}
    {title && <h1 className="video-hero-title d-none d-md-block">{title}</h1>}

    {/* Hide on mobile */}
    {subtitle && (
      <p className="video-hero-subtitle d-none d-md-block">
        {subtitle}
      </p>
    )}

    {/* Hide on mobile */}
    {bullets && bullets.length > 0 && (
      <ul className="video-hero-bullets d-none d-md-block">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    )}

    {/* CTA always visible */}
    {cta && (
      <div className="video-hero-cta">
        {cta}
      </div>
    )}

  </div>
</div>

      {/* SVG Waves */}
      <svg
        className="hero-waves d-none d-md-block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z"
          />
        </defs>
        <g className="wave1"><use xlinkHref="#wave-path" x={50} y={3} /></g>
        <g className="wave2"><use xlinkHref="#wave-path" x={50} y={0} /></g>
        <g className="wave3"><use xlinkHref="#wave-path" x={50} y={9} /></g>
      </svg>

    </section>
  );
}

export default VideoHero;