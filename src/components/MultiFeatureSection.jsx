import React from 'react';

function MultiFeatureSection({ sections = [], backgroundClass, textWhite = false, titleClass = '' }) {
  return (
    <section
    id="details"
    className={`details section ${backgroundClass || 'sexual-wellness-bg'} lead`}
    >
      <div className="container">
        {sections.map((section, index) => {
          const treatments = section.treatments || [];
          const htmlList = section.htmlList || [];
          const isReversed = index % 2 === 1;

          return (
            <div
                className={`row gy-4 align-items-center features-item ${textWhite ? 'text-white' : ''}`}
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
              {/* Text Column */}
              <div className={`col-md-7 blurred-bg ${isReversed ? 'order-md-2' : ''}`}>
                {section.title && <h3 className={titleClass}>{section.title}</h3>}
                {section.subheading && <p>{section.subheading}</p>}
                {section.description && <div>{section.description}</div>}

                {/* Original treatments list */}
                {treatments.length > 0 && (
                  <ul>
                    {treatments.map((item, i) => (
                      <li key={i}>
                        <i className="bi bi-check" /> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Optional HTML-enhanced list */}
                {htmlList.length > 0 && (
                  <ul>
                    {htmlList.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}

                {section.fallbackMessage && !treatments.length && !htmlList.length && (
                  <p className="fst-italic">{section.fallbackMessage}</p>
                )}

                {section.extraText && <p>{section.extraText}</p>}

                {section.buttonLink && section.title && (
                section.buttonLink.startsWith('http') ? (
                  <a
                    href={section.buttonLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-success mt-2"
                    aria-label={section.buttonText || `Get Started with ${section.title}`}
                  >
                    {section.buttonText || `Get Started with ${section.title}`}
                  </a>
                ) : (
                  <a
                    href={`/${section.buttonLink}`}
                    className="btn btn-success mt-2"
                    aria-label={section.buttonText || `Get Started with ${section.title}`}
                  >
                    {section.buttonText || `Get Started with ${section.title}`}
                  </a>
                )
              )}
              </div>

              {/* Image/Video Column */}
              <div
                className={`col-md-5 d-flex align-items-center ${isReversed ? 'order-md-1' : ''}`}
                data-aos="zoom-out"
                data-aos-delay={100}
              >
                {section.video ? (
                  <video className="img-fluid" controls muted loop playsInline>
                    <source src={section.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  section.image && (
                    <img src={section.image} className="img-fluid custom-img" alt="" />
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MultiFeatureSection;
