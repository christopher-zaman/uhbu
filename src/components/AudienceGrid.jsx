import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/AudienceGrid.css";
import Divider from "./Divider";

export default function AudienceGrid({
  id = "who-we-serve",
  title = "Who We’re For",
  subtitle = "Care designed for real life—find the path that fits you.",
  items = [],
  className = "",
  bgClass = ""
}) {
  return (
    <section id={id} className={`audience-grid section ${bgClass} ${className}`}>
      <div className="container text-center section-title" data-aos="fade-up">
        <div><span>{title}</span></div>
        <Divider />
        {subtitle ? <p className="audience-subtitle mt-3">{subtitle}</p> : null}
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row g-4 justify-content-center">
          {items.map((item, idx) => (
            <div className="col-12 col-md-6 col-lg-4" key={idx}>
              <div className="audience-card h-100 p-4 rounded-4">
                <div className="d-flex align-items-center gap-3 mb-3">
                  {item.icon ? (
                    <div className="audience-icon" aria-hidden="true">
                      {item.icon}
                    </div>
                  ) : null}

                  <h3 className="audience-title m-0">{item.title}</h3>
                </div>

                {item.text ? (
                  <p className="audience-text mb-3">{item.text}</p>
                ) : null}

                {Array.isArray(item.bullets) && item.bullets.length > 0 ? (
                  <ul className="audience-bullets mb-4">
                    {item.bullets.slice(0, 5).map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                ) : null}

                <div className="mt-auto">
                  {item.link ? (
                    <Link
                      to={item.link}
                      className={`btn btn-sm phone-chip rounded-pill audience-btn ${item.buttonClassName || ""}`}
                    >
                      {item.buttonText || "Explore"}
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Optional secondary CTA row */}
        {/* <div className="text-center mt-4">
          <Link to="/contact" className="btn btn-primary rounded-pill px-4">
            Not sure? Contact us
          </Link>
        </div> */}
      </div>
    </section>
  );
}
