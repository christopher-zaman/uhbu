import React from 'react';

function TextImageSection({ 
  bgClass = '', 
  section = {}, 
  reverse = false,
  className="side-image-style" 
}) {
  return (
    <section className={`details section py-5 ${bgClass}`}>
      <div className="container lead">
        <div
          className={`row gy-4 align-items-center features-item ${reverse ? 'flex-row-reverse' : ''}`}
          data-aos="fade-up"
        >
          {/* Text Column */}
          <div className="col-md-7">
            {section.title && <h3 className={section.titleClass || ''}>{section.title}</h3>}
            {section.description && <div>{section.description}</div>}

            {section.treatments?.length > 0 && (
              <ul>
                {section.treatments.map((t, i) => (
                  <li key={i}>
                    <i className="bi bi-check" /> <span>{t}</span>
                  </li>
                ))}
              </ul>
            )}

            {section.buttonText && section.buttonLink && (
              <a
                href={section.buttonLink}
                className="btn btn-success mt-2"
                target={section.buttonTarget || '_self'}
                rel={section.buttonTarget === '_blank' ? 'noopener noreferrer' : undefined}
              >
                {section.buttonText}
              </a>
            )}
          </div>

          {/* Image Column */}
          <div className="col-md-5 text-center">
            {section.image && (
              <img
                src={section.image}
                alt={section.title || 'Image'}
                className={`img-fluid rounded ${section.className || ''}`}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextImageSection;
