import React from 'react';

function MembershipCtaSplit({ onRequestInfoClick }) {
  return (
    <section className="section light-background">
      <div className="container" data-aos="fade-up">
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="p-4 p-lg-5 membership-cta-split-card-bg shadow-sm rounded h-100 lead">
              <h3 className="mb-3 text-pink">Book Your Consultation</h3>
              <p>
                Ready to take the next step? Go directly to our booking page
                and schedule your consultation.
              </p>
              <a href="https://app.elationemr.com/book/UltimateHealthDPC" 
              className="btn btn-pink-transparent lead" 
              target="_blank"
              
              >
                Book Now (Opens new tab)
              </a>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="p-4 p-lg-5 membership-cta-split-card-bg shadow-sm rounded h-100 lead">
              <h3 className="mb-3 text-pink">Request Membership Information</h3>
              <p>
                Not ready to book yet? Ask a question or request more information using the form below — we’re here to help.
              </p>
              <button
                type="button"
                className="btn btn-pink-transparent lead"
                onClick={onRequestInfoClick}
              >
                Request Membership Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MembershipCtaSplit;