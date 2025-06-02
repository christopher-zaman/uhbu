import React from 'react';

function SingleColumnFeatureSection({ sections = [] }) {
  return (
    <section id="details" className="details section sexual-wellness-bg">
      <div className="container">
        {sections.map((section, index) => {
          const treatments = section.treatments || [];

          return (
            <div
              className="row justify-content-center mb-5"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="col-12 col-lg-8 blurred-bg">
                {section.title && <h3 className="fw-bold mb-3">{section.title}</h3>}
                {section.subheading && <p className="lead">{section.subheading}</p>}
                {section.description && <div className="mb-3">{section.description}</div>}

                {treatments.length > 0 ? (
                  <ul className="list-unstyled mb-3">
                    {treatments.map((item, i) => (
                      <li key={i} className="mb-1">
                        <i className="bi bi-check-circle-fill me-2 text-success" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  section.fallbackMessage && (
                    <p className="fst-italic">{section.fallbackMessage}</p>
                  )
                )}

                {section.extraText && <p>{section.extraText}</p>}

                {section.video && (
                  <div className="ratio ratio-16x9 mb-4">
                    <video className="w-100 rounded" controls muted loop playsInline>
                      <source src={section.video} type="video/mp4" />
                    </video>
                  </div>
                )}

                {section.image && (
                  <img
                    src={section.image}
                    className="img-fluid rounded my-3"
                    alt={section.title}
                  />
                )}

                {section.buttonText && section.buttonLink && (
                  <a href={section.buttonLink} className="btn btn-success mt-2">
                    {section.buttonText}
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default SingleColumnFeatureSection;
