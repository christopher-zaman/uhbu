import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/TopBar.css'; // for custom styles

function TopBar() {
  return (
    <div id="top-bar" className="topbar py-3">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          
          {/* Logo */}
          <div className="col-md-4 text-md-start text-center mb-2 mb-md-0">
            <Link to="/">
              <img
                src="/assets/img/logo.webp"
                alt="Logo"
                className="topbar-logo"
              />
            </Link>
          </div>

          {/* CTA Button */}
          <div className="col-md-4 text-center mb-2 mb-md-0">
            <a href="contact" className="btn navy-blue text-white px-4 py-2">
              Request an Appointment
            </a>
          </div>

          {/* Social + Phone */}
          <div className="col-md-4 text-md-end text-center">
            <div className="d-flex justify-content-md-end justify-content-center align-items-center gap-3">
              <a 
              href="https://www.linkedin.com/in/amanda-neil-msn-aprn-2b2238202" 
              className="text-dark"
              aria-label="LinkedIn profile for Amanda Gaskin" 
              target="_blank" 
              rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a 
              href="https://www.instagram.com/ultimatehealthdpc" 
              className="text-dark"
              aria-label="Instagram profile for Amanda Gaskin" 
              target="_blank" 
              rel="noopener noreferrer"
              >
              <i className="bi bi-instagram fs-5"></i></a>
              <span className="ms-2 fw-semibold">
              <a
                href="tel:+13529016582"
                className="text-dark fw-semibold d-flex align-items-center gap-1"
                itemProp="telephone"
              >
                <i className="bi bi-telephone-fill"></i> 352-901-6582
              </a>
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TopBar;
