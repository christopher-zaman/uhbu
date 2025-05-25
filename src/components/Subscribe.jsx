import React from 'react';
import '../assets/css/Subscribe.css';

function Subscribe() {
  return (
    <section className="subscribe-section text-white">
      <div className="container py-5">
        <div className="row align-items-center justify-content-between g-4">

          {/* Left Text */}
          <div className="col-lg-3 text-lg-start text-center">
            <h2 className="fw-bold">
              <span className="highlight">Let’s Stay</span> <br />
              <span className="text-white">Connected</span>
            </h2>
            <div className="wave-underline mt-2"></div>
          </div>

          {/* Divider */}
          <div className="col-lg-1 d-none d-lg-block text-center">
            <div className="vr mx-auto" style={{ height: '80px', borderLeft: '2px dashed white' }}></div>
          </div>

          {/* Email Form */}
          <div className="col-lg-8 text-center text-lg-start">
            <p className="mb-3">Join our email list to stay up to date on services and events.</p>
            <form className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="form-control email-input"
                required
              />
              <button type="submit" className="btn btn-light text-primary-blue fw-semibold px-4">
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
