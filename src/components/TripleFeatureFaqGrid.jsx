import React, { useState } from 'react';
import '../assets/css/TripleFeatureFaqGrid.css'; // Optional for styling

function TripleFeatureFAQGrid({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState({});

  const toggle = (itemIdx, faqIdx) => {
    setActiveIndex((prev) => ({
      ...prev,
      [itemIdx]: prev[itemIdx] === faqIdx ? null : faqIdx,
    }));
  };

  return (
    <section className="section py-5 iv-hydration-bg">
      <div className="container">
        <div className="row gy-4">
          {items.map((item, itemIdx) => (
            <div className="col-md-6 col-lg-4 d-flex" key={itemIdx}>
              <div className="feature-faq-box flex-fill p-4 border rounded shadow-sm white-transparent-bg">
                
                <div className="d-flex align-items-center mb-3">
                    {item.image && (
                        <img
                        src={item.image}
                        alt={item.title}
                        className="circle-thumb me-3"
                        />
                    )}
                    <h5 className="mb-0">{item.title}</h5>
                    </div>

                {item.description && <p>{item.description}</p>}

                {item.faqs?.map((faq, faqIdx) => (
                  <div
                    key={faqIdx}
                    className={`iv-faq-item ${activeIndex[itemIdx] === faqIdx ? 'faq-active' : ''}`}
                    onClick={() => toggle(itemIdx, faqIdx)}
                  >
                    <div className="faq-question d-flex justify-content-between align-items-center">
                      <h6 className="mb-0">{faq.question}</h6>
                      <i
                        className={`bi ${
                          activeIndex[itemIdx] === faqIdx ? 'bi-chevron-up' : 'bi-chevron-down'
                        }`}
                      />
                    </div>
                    <div
                      className="faq-answer"
                      style={{
                        maxHeight: activeIndex[itemIdx] === faqIdx ? '500px' : '0px',
                        overflow: 'hidden',
                        transition: 'max-height 0.4s ease',
                      }}
                    >
                      <p className="mt-2">{faq.answer}</p>
                    </div>
                  </div>
                ))}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TripleFeatureFAQGrid;
