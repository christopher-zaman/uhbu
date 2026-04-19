import React from "react";

function PricingPreview({
  startingPrice = "$99",
  link = "https://app.elationemr.com/book/UltimateHealthDPC",
  showSecondaryCTA = false,
}) {
  return (
    <section className="pricing-preview py-5 lead">
      <div className="container">

        <div className="text-center mx-auto pricing-preview-header">
          <span className="pricing-eyebrow">Membership Pricing</span>

          <h2 className="pricing-title">
            Simple, Transparent Care
          </h2>

          <p className="pricing-subtitle">
            Memberships starting at{" "}
            <strong>{startingPrice}/month</strong>. No copays. No surprise bills.
          </p>
        </div>

        <div className="row justify-content-center mt-4">
          <div className="col-lg-6">

            <div className="pricing-card text-center">

              <h3 className="pricing-card-price">
                {startingPrice}
                <span>/month</span>
              </h3>

              <p className="pricing-card-description">
                Primary care designed around you — not insurance.
              </p>

              <ul className="pricing-features">
                <li>Unlimited primary care visits</li>
                <li>Same-day or next-day appointments</li>
                <li>Direct access to your provider</li>
                <li>No copays or surprise bills</li>
              </ul>

              <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                <a
                  href={link}
                  target="_blank"
                  className="btn btn-blue-transparent rounded-pill px-4 lead"
                >
                  Book Now
                </a>

                {showSecondaryCTA && (
                  <a
                    href="https://app.elationemr.com/book/UltimateHealthDPC"
                    className="btn btn-blue-transparent rounded-pill px-4 lead"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Schedule Your Visit
                  </a>
                )}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default PricingPreview;