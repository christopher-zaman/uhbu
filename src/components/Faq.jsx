import React, { useState } from 'react';

const faqItems = [
  {
    question: 'Non consectetur a erat nam at lectus urna duis?',
    answer:
      'Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.',
  },
  {
    question: 'Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque?',
    answer:
      'Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium.',
  },
  {
    question: 'Dolor sit amet consectetur adipiscing elit pellentesque?',
    answer:
      'Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit.',
  },
];

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section id="faq" className="faq section light-background">
      <div className="container" data-aos="fade-up">
        <div className="section-header">
          <h2>
            Frequently Asked <strong>Questions</strong>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </div>

        <div className="row gy-4 align-items-stretch">
          {/* FAQ Left Column */}
          <div className="col-lg-6">
            <div className="faq-container">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`faq-item ${activeIndex === index ? 'faq-active' : ''}`}
                  onClick={() => toggle(index)}
                >
                  <div className="faq-question d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <i className="bi bi-question-circle question-icon me-2" />
                      <h5 className="mb-0">{item.question}</h5>
                    </div>
                    <i
                      className={`bi ${
                        activeIndex === index ? 'bi-chevron-up' : 'bi-chevron-down'
                      } toggle-icon`}
                    />
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
              ))}
            </div>
          </div>

          {/* Image Right Column */}
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <img
              src="assets/img/faq.jpg"
              alt="FAQ"
              className="img-fluid"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
