import React from 'react';
import '../assets/css/ContentSection.css';
import Divider from './Divider';

function ContentSection({
  id,
  title = '',
  subTitle = '',           
  paragraphs = [],
  listItems = [],
  image,
  imageClassName,
  video,
  imageAlt = '',
  buttonText = '',
  buttonLink = '',
  roundedImage = false,
  reverse = false
}) {
  return (
    <section id={id} className="about section lead">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className={`row align-items-xl-center gy-5 ${reverse ? 'flex-row-reverse' : ''}`}>
          
          {/* Text Column */}
          <div className="col-xl-7 content">
            <h2 className="text-uppercase">{title}</h2>
            <Divider centered={false} />

            <div>
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}

              {/* ✅ Render the subTitle after the last paragraph */}
              {subTitle && <h4 className="mt-4">{subTitle}</h4>}

              {listItems.length > 0 && (
                <ul className="ps-3">
                  {listItems.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
            </div>

            {buttonText && buttonLink && (
              <a href={buttonLink} className="read-more">
                <span>{buttonText}</span> <i className="bi bi-arrow-right" />
              </a>
            )}
          </div>

          {/* Image Column */}
          <div className="col-xl-5 d-flex justify-content-center">
            {video ? (
              <video
                src={video}
                className="img-fluid"
                autoPlay
                loop
                muted
                playsInline
                controls={true} // optional
                style={{ width: '60%', borderRadius: '1rem' }}
              />
            ) : (
              <img 
              src={image} 
              className={`img-fluid ${imageClassName}`}
              alt={imageAlt || title}
              style={{ borderRadius: roundedImage ? '1rem' : '0' }} 
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContentSection;
