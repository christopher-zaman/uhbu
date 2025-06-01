import React from 'react';

function BulletedTextBlock({ title, bullets = [], paragraph = '' }) {
  return (
    <section className="section py-5">
      <div className="container" data-aos="fade-up">
        <div className="row justify-content-center">
          <div className="col-lg-12">
            {title && <h2 className="mb-4 text-center">{title}</h2>}

            {bullets.length > 0 && (
              <ul className="list-unstyled fs-5 mb-4">
                {bullets.map((item, i) => (
                  <li key={i} className="mb-2">
                    <i className="bi bi-check-circle me-2 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {paragraph && <p className="lead text-center">{paragraph}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BulletedTextBlock;
