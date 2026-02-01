import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/LocalProof.css";
import Divider from "./Divider";
import PhoneChip from "./PhoneChip";

export default function LocalProof({
  id = "local-proof",
  title = "Why Ultimate Health DPC",
  subtitle = "Local, relationship-based care for Leesburg and Lake County.",
  locationLine = "Serving Leesburg, Lake County, and surrounding Central Florida communities",
  philosophy = "We believe great care starts with time, trust, and access—so you can focus on health, not paperwork.",
  proofItems = [
    { label: "Local Care", value: "Leesburg • Lake County" },
    { label: "Access", value: "Direct messaging & flexible visits" },
    { label: "Approach", value: "Prevention • longevity • whole-person care" }
  ],
  provider = {
    name: "Your Provider Name, MD/DO/APRN",
    title: "Primary Care Provider",
    bullets: ["X+ years in practice", "Special interest: hormones, wellness, longevity"],
    image: "", // optional: "/assets/img/providers/provider.webp"
    link: "/about-us",
    linkText: "Meet the Provider"
  },
  ctaType = "phone", // "phone" | "link" | "none"
  ctaLink = "/contact",
  ctaText = "Contact Us",
  className = "",
  bgClass = ""
}) {
  return (
    <section id={id} className={`local-proof section ${bgClass} ${className}`}>
      <div className="container text-center section-title" data-aos="fade-up">
        <div><span>{title}</span></div>
        <Divider />
        {subtitle ? <p className="lp-subtitle mt-3">{subtitle}</p> : null}
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row g-4 align-items-stretch">
          {/* Left: Local trust */}
          <div className="col-12 col-lg-7">
            <div className="lp-panel h-100 p-4 p-lg-5 rounded-4">
              <p className="lp-location mb-2">{locationLine}</p>

              <p className="lp-philosophy mb-4">{philosophy}</p>

              <div className="row g-3">
                {proofItems.slice(0, 6).map((p, idx) => (
                  <div className="col-12 col-md-6" key={idx}>
                    <div className="lp-proof-item p-3 rounded-3">
                      <div className="lp-proof-label">{p.label}</div>
                      <div className="lp-proof-value">{p.value}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lp-cta mt-4">
                {ctaType === "phone" ? (
                  <PhoneChip inline={false} className="lp-phone" />
                ) : ctaType === "link" ? (
                  <Link to={ctaLink} className="btn btn-primary rounded-pill px-4">
                    {ctaText}
                  </Link>
                ) : null}
              </div>
            </div>
          </div>

          {/* Right: Provider credibility */}
          <div className="col-12 col-lg-5">
            <div className="lp-provider h-100 p-4 rounded-4">
              <div className="d-flex gap-3 align-items-center mb-3">
                {provider.image ? (
                  <img
                    src={provider.image}
                    alt={provider.name}
                    className="lp-provider-img"
                    loading="lazy"
                  />
                ) : (
                  <div className="lp-provider-placeholder" aria-hidden="true">
                    👩‍⚕️
                  </div>
                )}

                <div>
                  <div className="lp-provider-name">{provider.name}</div>
                  <div className="lp-provider-title">{provider.title}</div>
                </div>
              </div>

              {Array.isArray(provider.bullets) && provider.bullets.length > 0 ? (
                <ul className="lp-provider-bullets">
                  {provider.bullets.slice(0, 5).map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              ) : null}

              {provider.link ? (
                <Link to={provider.link} className="btn phone-chip rounded-pill mt-3 px-4">
                  {provider.linkText || "Learn More"}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
