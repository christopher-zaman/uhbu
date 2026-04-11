import React from 'react';
import Divider from './Divider';

const steps = [
  {
    number: '01',
    title: 'Choose Your Path',
    text: 'Book now if you are ready, or request information if you still have questions.',
  },
  {
    number: '02',
    title: 'Connect With the Practice',
    text: 'Talk through your needs, goals, and what kind of support you are looking for.',
  },
  {
    number: '03',
    title: 'Find the Right Fit',
    text: 'Learn whether membership is the best fit for you or your family.',
  },
  {
    number: '04',
    title: 'Get Started',
    text: 'Move forward with a care plan built around prevention, access, and relationship-based care.',
  },
];

function MembershipSteps() {
  return (
    <section className="services section light-background">
      <div className="container section-title" data-aos="fade-up">
        <h2>Membership Process</h2>
        <Divider />
        <p>Simple steps to help you move forward with clarity.</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {steps.map((step) => (
            <div
              className="col-lg-3 col-md-6"
              key={step.number}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-item item-cyan position-relative h-100">
                <div className="icon">
                  <span className="fw-bold">{step.number}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MembershipSteps;