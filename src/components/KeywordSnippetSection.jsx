import React from "react";
import { Link, useLocation } from "react-router-dom";
import { trackGA4 } from "../utils/ga4";

export default function KeywordSnippetSection({
  title,
  snippet,
  imageSrc,
  imageAlt,
  reverse = false,
  children,

  // NEW SEO CTA
  ctaHref,
  ctaText,

  phone = "(352) 901-6582",
  phoneHref = "tel:+13529016582",

  emailTo = "ultimatehealthdpc@gmail.com",
  emailSubject = "Website Inquiry",

  socials = {
    linkedin: "https://www.linkedin.com/in/amanda-gaskin-msn-aprn-2b2238202/",
    instagram: "https://www.instagram.com/ultimatehealthdpc",
  },
}) {
  const location = useLocation();

  const mailtoHref = `mailto:${encodeURIComponent(emailTo)}?subject=${encodeURIComponent(
    emailSubject
  )}`;

  const handlePhoneClick = () => {
    trackGA4("phone_click", {
      phone_number: phoneHref?.replace("tel:", "") || "+13529016582",
      position: "seo_card",
      card_title: title,
      page_path: location.pathname,
    });
  };

  return (
    <section className="keyword-snippet-section">
      <div className="container">
        <div className="uha-glass-card uha-scroll-card">
          <div className={`row align-items-center gy-4 ${reverse ? "flex-row-reverse" : ""}`}>
            <div className="col-lg-5">
              <div className="keyword-image-wrap">
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="img-fluid keyword-image"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="col-lg-7">
              <div className="keyword-copy">
                <h3 className="keyword-title">{title}</h3>
                <p className="keyword-snippet mb-3">{snippet}</p>

                {ctaHref && ctaText && (
                  <div className="mt-3">
                    <Link to={ctaHref} className="seo-inline-link">
                      {ctaText}
                    </Link>
                  </div>
                )}

                {children && <div className="mt-3">{children}</div>}

                <div className="keyword-cta-bar">
                  <a className="keyword-cta" href={phoneHref} onClick={handlePhoneClick}>
                    Call {phone}
                  </a>

                  <div className="keyword-socials-icons" aria-label="Social links">
                    {socials?.linkedin && (
                      <a
                        className="keyword-social-icon"
                        href={socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                      >
                        <i className="bi bi-linkedin" />
                      </a>
                    )}

                    {socials?.instagram && (
                      <a
                        className="keyword-social-icon"
                        href={socials.instagram}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        title="Instagram"
                      >
                        <i className="bi bi-instagram" />
                      </a>
                    )}

                    <a className="keyword-social-icon" href={mailtoHref} aria-label="Email" title="Email">
                      <i className="bi bi-envelope" />
                    </a>
                  </div>
                </div>

                <small className="keyword-disclaimer d-block mt-2">
                  Same-day scheduling available in Leesburg, FL.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
