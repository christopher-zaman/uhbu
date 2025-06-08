import React from 'react';

function TextBlock({ title, body, footer }) {
  const renderBody = () => {
    if (Array.isArray(body)) {
      return (
        <ul className="lead mb-4 list-unstyled">
          {body.map((line, idx) => (
            <li key={idx} className="mb-2">{line}</li>
          ))}
        </ul>
      );
    }
    return <div className="lead mb-4">{body}</div>;
  };

  return (
    <section className="section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center" data-aos="fade-up">
            {title && <h2 className="mb-3">{title}</h2>}
            {renderBody()}
            {footer && <p className="fw-semibold">{footer}</p>}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TextBlock;

