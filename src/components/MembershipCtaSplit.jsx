import React from 'react';

function MembershipCtaSplit({ onRequestInfoClick }) {
  return (
    <section className="section light-background">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="p-4 p-lg-5 bg-white shadow-sm rounded h-100">
              <h3 className="mb-3">Book Your Consultation</h3>
              <p>
                Ready to take the next step? Go directly to our booking page
                and schedule your consultation.
              </p>
              <a href="/book-an-appointment" className="btn btn-danger">
                Book Now
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="p-4 p-lg-5 bg-white shadow-sm rounded h-100">
              <h3 className="mb-3">Request Membership Information</h3>
              <p>
                Not ready to book yet? Send us your information and questions,
                and someone from the team can follow up with you.
              </p>
              <button
                type="button"
                className="btn btn-outline-dark"
                onClick={onRequestInfoClick}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MembershipCtaSplit;