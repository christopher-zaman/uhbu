import React from 'react';
import '../assets/css/TopBar.css'; // for custom styles

function TopBar() {
  return (
    <div id="top-bar" className="topbar py-3">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          
          {/* Logo */}
          <div className="col-md-4 text-md-start text-center mb-2 mb-md-0">
            <img
              src="../assets/img/logo.webp"
              alt="Logo"
            />
          </div>

          {/* CTA Button */}
          <div className="col-md-4 text-center mb-2 mb-md-0">
            <a href="#contact" className="btn navy-blue text-white px-4 py-2">
              Request an Appointment
            </a>
          </div>

          {/* Social + Phone */}
          <div className="col-md-4 text-md-end text-center">
            <div className="d-flex justify-content-md-end justify-content-center align-items-center gap-3">
              <a href="#" className="text-dark"><i className="bi bi-facebook fs-5"></i></a>
              <a href="#" className="text-dark"><i className="bi bi-instagram fs-5"></i></a>
              <span className="ms-2 fw-semibold">📞 (352) 555-1234</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default TopBar;
