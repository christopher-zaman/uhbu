import React from 'react';
import '../assets/css/Socials.css'; // make sure this file exists
import Divider from './Divider';

function Socials() {
  return (
    <section className="socials-section text-center text-white">
      <div className="container py-5">
        <h2 className="fw-bold">WE ARE SOCIAL</h2>
        <h3 className="mb-3">FOLLOW US</h3>

        <Divider />

        <div className="d-flex justify-content-center gap-3 flex-wrap">
          <a href="https://www.linkedin.com/in/amanda-neil-msn-aprn-2b2238202" className="social-icon"><i className="bi bi-linkedin"></i></a>
          <a href="https://www.instagram.com/ultimatehealthdpc" className="social-icon"><i className="bi bi-instagram"></i></a>
          <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
          <a href="#" className="social-icon"><i className="bi bi-tiktok"></i></a>
          <a href="#" className="social-icon"><i className="bi bi-youtube"></i></a>
        </div>
      </div>
    </section>
  );
}

export default Socials;
