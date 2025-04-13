import React, { useEffect } from 'react';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.css';

function Hero() {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox',
      touchNavigation: true,
      autoplayVideos: true,
    });

    return () => lightbox.destroy(); // Cleanup
  }, []);

  return (
    <section id="hero" className="hero section dark-background">
      <img src="assets/img/hero-bg-2.jpg" alt="" className="hero-bg" />
      <div className="container">
        <div className="row gy-4 justify-content-between">
          <div className="col-lg-4 order-lg-last hero-img" data-aos="zoom-out" data-aos-delay={100}>
            <img src="assets/img/hero-img.png" className="img-fluid animated" alt="" />
          </div>
          <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-in">
            <h1>Build Your Landing Page With <span>Bootslander</span></h1>
            <p>We are team of talented designers making websites with Bootstrap</p>
            <div className="d-flex">
              <a href="#about" className="btn-get-started">Get Started</a>
              <a
                href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                className="glightbox btn-watch-video d-flex align-items-center"
              >
                <i className="bi bi-play-circle" /><span>Watch Video</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28 " preserveAspectRatio="none">
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
