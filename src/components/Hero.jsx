// Hero.jsx
import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

function Hero({
  backgroundImage,
  backgroundVideo,
  heroImage,
  title,
  subtitle,
  cta,
  videoUrl,
  className = '',
  textColor,
  videoAspect = '16 / 9',      // NEW: match your video’s aspect ratio
  videoControls = true,         // NEW: show controls if true
  videoFit = 'contain',         // 'contain' (no crop) or 'cover' (fills, may crop)
}) {
  useEffect(() => {
    const lightbox = GLightbox({ selector: '.glightbox', touchNavigation: true, autoplayVideos: true });
    return () => lightbox.destroy();
  }, []);

  const isDesktop = typeof window !== 'undefined' ? window.innerWidth > 768 : true;

  return (
    <section
  id="hero"
  className={`hero section dark-background ${className} ${backgroundVideo ? 'hero-has-video' : ''}`}
   
>
      {backgroundVideo && isDesktop ? (
    backgroundVideo.includes('youtube.com') ? (
      <div className="hero-video-wrapper">
        <iframe
          src={backgroundVideo}
          title="Hero Video"
          frameBorder="0"
          allow="autoplay; muted"
          allowFullScreen
          style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
        />
      </div>
    ) : (
      <div className="hero-video-wrapper">
        <video
          className="hero-bg-video"
          autoPlay
          loop
          muted              // starts muted (required for autoplay)
          playsInline
          preload="metadata"
          controls           // SHOW controls so users can unmute
          controlsList="nodownload"   // optional
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
    )
  ) : (
    <img src={backgroundImage} alt="" className="hero-bg" />
  )}

      {/* Foreground Content */}
      <div className="container hero-content">
        <div className="row gy-4 justify-content-between">
          <div className="col-lg-4 order-lg-last hero-img" data-aos="zoom-out" data-aos-delay={100}>
            <img src={heroImage} className="img-fluid animated" alt="" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-in">
            <h1 style={textColor ? { color: textColor } : {}}>{title}</h1>
            <p style={textColor ? { color: textColor } : {}}>{subtitle}</p>

            {cta && <div className="hero-cta mt-3">{cta}</div>}

          </div>
        </div>
      </div>

      {/* SVG Waves */}
      <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s58 18 88 18 58-18 88-18 58 18 88 18v44h-352z" />
        </defs>
        <g className="wave1"><use xlinkHref="#wave-path" x={50} y={3} /></g>
        <g className="wave2"><use xlinkHref="#wave-path" x={50} y={0} /></g>
        <g className="wave3"><use xlinkHref="#wave-path" x={50} y={9} /></g>
      </svg>
    </section>
  );
}

export default Hero;
