import React from "react";
import Divider from "./Divider";
import PhoneChip from "./PhoneChip";
import { Link } from "react-router-dom";

/**
 * ConversionBlock
 * Purpose: Add the conversion flow (Pain → Solution → Process → CTA)
 * to any page without restructuring the rest of the page.
 */
export default function ConversionBlock({
  id = "conversion-block",
  title = "A simpler path forward",
  subtitle = "",
  // 1) Pain
  painTitle = "If this sounds familiar, you’re not alone.",
  pains = [],
  outcome = "",

  // 2) Solution
  solutionTitle = "How Ultimate Health DPC Helps",
  solutionIntro = "",
  solutionBullets = [], // [{ title, text }]
  solutionClosing = "",

  // 3) Process
  processTitle = "What to Expect",
  steps = [], // ["Step title"] OR [{ title, text }]

  // 4) CTA
  ctaTitle = "Ready to get started?",
  ctaText = "Call or text and we’ll help you take the next step.",
  ctaType = "phone", // "phone" | "link" | "none"
  ctaLink = "/contact",
  ctaButtonText = "Get Started",
  phoneClassName = "fs-4",
  className = "",
  bgClass = ""
}) {
  return (
    <section id={id} className={`section ${bgClass} ${className}`}>
      <div className="container text-center section-title" data-aos="fade-up">
        <div><span>{title}</span></div>
        <Divider />
        {subtitle ? <p className="mt-3 lead" style={{ opacity: 0.85 }}>{subtitle}</p> : null}
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        {/* PAIN → OUTCOME */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-lg-9">
            <div className="p-4 rounded-4" style={{ background: "rgba(0,0,0,0.03)" }}>
              <h3 className="mb-3">{painTitle}</h3>

              {pains?.length ? (
                <ul className="list-unstyled mb-3 lead">
                  {pains.slice(0, 6).map((p, i) => (
                    <li key={i} className="d-flex align-items-start gap-2 mb-2">
                      <span aria-hidden="true">•</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              ) : null}

              {outcome ? (
                <div className="p-3 rounded-4 lead" style={{ background: "rgba(1, 3, 112, 0.06)" }}>
                  <strong>→ </strong>{outcome}
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {/* SOLUTION */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-lg-9">
            <h3 className="text-center mb-3">{solutionTitle}</h3>
            {solutionIntro ? <p className="lead text-center mb-4">{solutionIntro}</p> : null}

            {solutionBullets?.length ? (
              <div className="row g-3">
                {solutionBullets.slice(0, 6).map((b, i) => (
                  <div className="col-12 col-md-6" key={i}>
                    <div className="p-4 rounded-4 h-100 lead"
                      style={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(0,0,0,0.06)" }}>
                      <strong className="d-block mb-1 text-success">{b.title}</strong>
                      <span style={{ opacity: 0.9 }}>{b.text}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : null}

            {solutionClosing ? (
              <p className="text-center mt-3 mb-0 lead" style={{ opacity: 0.85 }}>
                {solutionClosing}
              </p>
            ) : null}
          </div>
        </div>

        {/* PROCESS */}
        <div className="row justify-content-center mb-4">
          <div className="col-12 col-lg-9 lead">
            <h3 className="text-center mb-3">{processTitle}</h3>

            <div className="row g-3">
              {steps.slice(0, 4).map((s, i) => {
                const stepTitle = typeof s === "string" ? s : s.title;
                const stepText = typeof s === "string" ? "" : (s.text || "");

                return (
                  <div className="col-12 col-md-6 col-lg-4" key={i}>
                    <div className="p-4 rounded-4 h-100"
                      style={{ background: "rgba(255,255,255,0.95)", border: "1px solid rgba(0,0,0,0.06)" }}>
                      <div className="mb-2 text-navy" style={{ opacity: 0.75, fontWeight: 800 }}>
                        Step {i + 1}
                      </div>
                      <div style={{ fontSize: "1.05rem", fontWeight: 900 }}>
                        {stepTitle}
                      </div>
                      {stepText ? (
                        <div className="mt-2 text-success" style={{ opacity: 0.9 }}>
                          {stepText}
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA (REPEAT) */}
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9">
            <div className="p-4 rounded-4 text-center lead"
              style={{ background: "rgba(1, 3, 112, 0.06)" }}>
              <h3 className="mb-2" style={{ fontWeight: 900 }}>{ctaTitle}</h3>
              <p className="mb-3" style={{ opacity: 0.9 }}>{ctaText}</p>

              {ctaType === "phone" ? (
                <PhoneChip inline={false} className={phoneClassName} />
              ) : ctaType === "link" ? (
                <Link to={ctaLink} className="btn btn-primary rounded-pill px-4">
                  {ctaButtonText}
                </Link>
              ) : null}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
