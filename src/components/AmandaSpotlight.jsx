import React from "react";
  
function AmandaSpotlight({ image }) {
  return (
    <section className="amanda-spotlight py-5 lead">
      <div className="container">
        <div className="row align-items-center g-4">

          {/* Image */}
          <div className="col-lg-5 text-center">
            <img
              src={image}
              alt="Amanda Gaskin, MSN, APRN"
              className="img-fluid rounded-4 shadow-sm amanda-img"
            />
          </div>

          {/* Content */}
          <div className="col-lg-7">

            <span className="amanda-eyebrow">
              Meet Your Provider
            </span>

            <h2 className="amanda-title text-pink">
              Amanda Gaskin, MSN, APRN
            </h2>

            <p className="amanda-lead">
              Relationship-based care from a provider who takes the time to know you,
              listen well, and help you move forward with confidence.
            </p>

            <ul className="amanda-bullets">
              <li>Practicing since 2006</li>
              <li>2022 Leesburg Area Chamber Business Woman of the Year</li>
              <li>2026 Executive Board Chairman, Leesburg Area Chamber of Commerce</li>
              <li>Deep community roots. Personalized care. Modern medicine with real access.</li>
            </ul>

            <div className="d-flex flex-wrap gap-3 mt-4">
              <a
                href="/meet-us"
                className="btn btn-pink-transparent rounded-pill px-4"
              >
                Meet Amanda
              </a>

              <a
                href="https://app.elationemr.com/book/UltimateHealthDPC"
                className="btn btn-pink-transparent rounded-pill px-4"
                target="_blank"
                rel="noreferrer"
              >
                Schedule Your Visit
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AmandaSpotlight;