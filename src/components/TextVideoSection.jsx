import React from 'react';

function TextVideoSection({ 
    sections = [], 
    bgClass = '' 
    
}) {
  return (
    <section className={`details section ${bgClass}`}>
      <div className="container">
        {sections.map((section, index) => {
          const isReversed = index % 2 === 1;

          return (
            <div
              className="row gy-4 align-items-center features-item"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Text Column */}
              <div
                className={`col-md-7 blurred-bg ${isReversed ? 'order-md-2' : ''}`}
                data-aos="fade-up"
              >
                {section.title && <h3>{section.title}</h3>}
                {section.description && <p>{section.description}</p>}

                {section.treatments?.length > 0 && (
                  <ul>
                    {section.treatments.map((item, i) => (
                      <li key={i}>
                        <i className="bi bi-check" /> <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {section.buttonText && section.buttonLink && (
                  <a href={section.buttonLink} className="btn btn-success mt-2">
                    {section.buttonText}
                  </a>
                )}
              </div>

              {/* Video Column */}
              <div
                className={`col-md-5 d-flex align-items-center ${isReversed ? 'order-md-1' : ''}`}
                data-aos="zoom-out"
                data-aos-delay={100}
              >
                {section.youtubeUrl ? (
                  <div className="ratio ratio-16x9 w-100">
                    <iframe
                      src={section.youtubeUrl.replace('youtu.be/', 'www.youtube.com/embed/')}
                      title={section.title || 'YouTube video'}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      frameBorder="0"
                      className="w-100 rounded"
                    />
                  </div>
                ) : section.video ? (
                  <video
                    className={`img-fluid rounded ${section.videoClassName || 'w-100'}`}
                    controls
                    muted
                    playsInline
                    loop
                    >
                    <source src={section.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default TextVideoSection;
