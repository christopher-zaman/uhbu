import React from 'react';

function TextBlock({ title, body, footer }) {
  return (
    <section className="section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center" data-aos="fade-up">
            {title && <h2 className="mb-3">{title}</h2>}
            {body && <div className="lead mb-4">{body}</div>}
            {footer && <p className="fw-semibold">{footer}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}


export default TextBlock;
