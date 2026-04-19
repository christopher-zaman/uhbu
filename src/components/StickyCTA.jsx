import React from "react";

function StickyCTA() {
  return (
    <div className="sticky-cta-wrapper">
      <a
        href="https://app.elationemr.com/book/UltimateHealthDPC"
        className="sticky-cta-btn primary"
        target="_blank"
        rel="noreferrer"
      >
        Book Visit
      </a>

      <a
        href="tel:+13529016582"
        className="sticky-cta-btn secondary"
      >
        Call Now
      </a>
    </div>
  );
}

export default StickyCTA;