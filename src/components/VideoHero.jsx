import React from 'react';
import '../assets/css/VideoHero.css';

function VideoHero({ videoId }) {
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
