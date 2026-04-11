import React from "react";
import "../assets/css/ValueSection.css";

function ValueSection() {
  return (
    <section className="value-section">
      <div className="container">
        <div className="value-section__content">
          <span className="value-section__eyebrow">
            Why Families Choose Direct Primary Care
          </span>

          <h2 className="value-section__text">
            Healthcare shouldn’t feel rushed, confusing, or transactional. At
            Ultimate Health Direct Primary Care, you receive longer visits,
            direct access to your provider, and a membership model designed
            around your family, not your insurance company.
          </h2>

          <p className="value-section__highlight">
            No copays. No surprise bills. Just straightforward care.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ValueSection;