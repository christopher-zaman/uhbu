import React from 'react';

function MediaSpotlight() {
  return (
    <section className="media-spotlight py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="media-spotlight-card text-center text-lg-start">
              <span className="media-spotlight-eyebrow">
                Community Recognition
              </span>

              <h2 className="media-spotlight-title">
                Amanda Gaskin’s leadership and community impact have earned local recognition.
              </h2>

              <p className="media-spotlight-text mb-4">
                From chamber leadership to award recognition, Amanda’s work in Leesburg reflects the same relationship-based care patients experience at Ultimate Health DPC.
              </p>

              <div className="d-flex flex-wrap gap-3 justify-content-center justify-content-lg-start">
                <a href="/media" className="btn btn-dark rounded-pill px-4">
                  See Media & Recognition
                </a>

                <a href="/meet-us" className="btn btn-outline-dark rounded-pill px-4">
                  Meet Amanda
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MediaSpotlight;