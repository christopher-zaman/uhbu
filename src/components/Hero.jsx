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
  videoUrl, 
  className = '',
  textColor 
}) {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      autoplayVideos: true,
    });

    return () => lightbox.destroy();
  }, []);

  return (
    <section id="hero" className={`hero section dark-background ${className}`}>
      {/* Background Video or Image */}
      {backgroundVideo && window.innerWidth > 768 ? (
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
          <video
            className="hero-bg-video"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )
      ) : (
        <img src={backgroundImage} alt="" className="hero-bg" />
      )}

      {/* Foreground Content */}
      <div className="container">
        <div className="row gy-4 justify-content-between">
          <div className="col-lg-4 order-lg-last hero-img" data-aos="zoom-out" data-aos-delay={100}>
            <img src={heroImage} className="img-fluid animated" alt="" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-in">
            <h1 style={textColor ? { color: textColor } : {}}>{title}</h1>
            <p style={textColor ? { color: textColor } : {}}>{subtitle}</p>
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
