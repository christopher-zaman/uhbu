import React from "react";
import "../assets/css/PrimaryCTA.css";
import PhoneChip from "./PhoneChip";

export default function PrimaryCTA({
  title = "Have questions? Let’s talk.",
  text = "We’re here to answer your questions and help you take the next step.",
  className = "lead",
  bgClass = ""
}) {
  return (
    <section className={`primary-cta ${bgClass} ${className}`}>
      <div className="container text-center">
        <h2 className="primary-cta-title mb-2">{title}</h2>
        <p className="primary-cta-text mb-3">{text}</p>

        {/* SAME CTA AS HERO — NO VARIATION */}
        <PhoneChip inline={false} className="hero-phone" />
      </div>
    </section>
  );
}
