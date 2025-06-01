import React, { useState } from 'react';
import '../assets/css/TripleFaqGrid.css'; // optional for styles

function TripleFAQGrid({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="section py-5">
      <div className="container">
        <div className="row gy-4">
          {items.map((item, index) => (
            <div className="col-md-6 col-lg-4 d-flex" key={index}>
              <div className="faq-box flex-fill p-4 border rounded shadow-sm">
                <div
                  className={`faq-item ${activeIndex === index ? 'faq-active' : ''}`}
                  onClick={() => toggle(index)}
                >
                  <div className="faq-question d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">{item.question}</h5>
                    <i className={`bi ${activeIndex === index ? 'bi-chevron-up' : 'bi-chevron-down'}`} />
                  </div>
                  <div
                    className="faq-answer"
                    style={{
                      maxHeight: activeIndex === index ? '500px' : '0px',
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease',
                    }}
                  >
                    <p className="mt-3">{item.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TripleFAQGrid;
