import React from 'react';

function MultiFeatureSection({ sections = [] }) {
  return (
    <section id="details" className="details section sexual-wellness-bg">
      <div className="container blurred-bg">
        {sections.map((section, index) => {
          const treatments = section.treatments || [];
          const isReversed = index % 2 === 1; // alternate layout for Z-pattern

          return (
            <div
              className="row gy-4 align-items-center features-item"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Text Column */}
              <div className={`col-md-7 ${isReversed ? 'order-md-2' : ''}`}>
                {section.title && <h3>{section.title}</h3>}
                {section.subheading && <h4>{section.subheading}</h4>}
                {section.description && <div className="fst-italic">{section.description}</div>}

                {treatments.length > 0 ? (
                  <ul>
                    {treatments.map((item, i) => (
                      <li key={i}>
                        <i className="bi bi-check" /> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  section.fallbackMessage && (
                    <p className="fst-italic">{section.fallbackMessage}</p>
                  )
                )}
                {section.extraText && <p className="fst-italic">{section.extraText}</p>}
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
