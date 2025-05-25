import React from 'react';
import '../assets/css/CareCredit.css';

function CareCredit() {
  return (
    <section className="carecredit-section py-5">
      <div className="container">
        <div className="carecredit-card d-flex flex-column flex-lg-row align-items-center justify-content-between p-4">
          
          {/* Left Content */}
          <div className="text-white mb-4 mb-lg-0">
            <img src="/assets/img/care-credit-logo.png" alt="CareCredit Logo" className="mb-3" />

            <ul className="list-unstyled">
              <li><i className="bi bi-chevron-right me-2"></i>Take control of your health today with 6 months interest free</li>
              <li><i className="bi bi-chevron-right me-2"></i>Prequalify with no impact to your credit score</li>
              <li><i className="bi bi-chevron-right me-2"></i>Apply here for a CareCredit card in just a few clicks</li>
            </ul>

            <a
              href="https://app.elationemr.com/book/UltimateHealthDPC"
              target="_blank"
              rel="noopener noreferrer"
              className="apply-btn mt-3 d-inline-block"
            >
              APPLY HERE
            </a>
          </div>

          {/* Right Image */}
          <a href="https://app.elationemr.com/book/UltimateHealthDPC" target="_blank" rel="noopener noreferrer">
            <img
              src="/assets/img/care-credit-card.png"
              alt="CareCredit Card"
              className="carecredit-image"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

export default CareCredit;
