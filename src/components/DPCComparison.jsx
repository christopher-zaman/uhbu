import React from "react";
import "../assets/css/DPCComparison.css";
import Divider from "./Divider";
import PhoneChip from "./PhoneChip";
import { Link } from "react-router-dom";

export default function DPCComparison({
  id = "dpc-different",
  title = "Why Direct Primary Care Is Different",
  subtitle = "A simpler, more personal way to get care—without the insurance runaround.",
  leftTitle = "Traditional Care",
  rightTitle = "Direct Primary Care",
  leftItems = [
    "Short, rushed visits",
    "Long waits for appointments",
    "Copays and surprise bills",
    "Insurance approvals and middlemen"
  ],
  rightItems = [
    "Unhurried visits and real conversations",
    "Same-day/next-day access when possible",
    "No copays, no surprise bills",
    "Transparent monthly membership"
  ],
  leftBadge = "Often feels reactive",
  rightBadge = "Built to be proactive",
  ctaType = "phone", // "phone" | "link" | "none"
  ctaLink = "/primary-care",
  ctaText = "Learn About Membership",
  className = "",
  bgClass = ""
}) {
  return (
    <section id={id} className={`dpc-compare section ${bgClass} ${className}`}>
      <div className="container text-center section-title" data-aos="fade-up">
        <div><span>{title}</span></div>
        <Divider />
        {subtitle ? <p className="dpc-subtitle mt-3">{subtitle}</p> : null}
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row g-4 justify-content-center">
          <div className="col-12 col-lg-6">
            <div className="dpc-card dpc-card--traditional h-100 p-4 rounded-4">
              <div className="dpc-card-header mb-3">
                <h3 className="m-0">{leftTitle}</h3>
                {leftBadge ? <span className="dpc-badge">{leftBadge}</span> : null}
              </div>
              <ul className="dpc-list">
                {leftItems.slice(0, 6).map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="dpc-card dpc-card--dpc h-100 p-4 rounded-4">
              <div className="dpc-card-header mb-3">
                <h3 className="m-0">{rightTitle}</h3>
                {rightBadge ? <span className="dpc-badge dpc-badge--good">{rightBadge}</span> : null}
              </div>
              <ul className="dpc-list">
                {rightItems.slice(0, 6).map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>

              <div className="mt-3 dpc-cta">
                {ctaType === "phone" ? (
                  <PhoneChip inline={false} className="dpc-phone" />
                ) : ctaType === "link" ? (
                  <Link to={ctaLink} className="btn phone-chip rounded-pill px-4">
                    {ctaText}
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        {/* Optional small disclaimer line */}
        <p className="dpc-footnote text-center mt-3">
          No long explanations—just the key differences that matter day-to-day.
        </p>
      </div>
    </section>
  );
}
