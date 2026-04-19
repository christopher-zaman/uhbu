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
    <section className="services section light-background-pink-gradient">
      <div className="container section-title" data-aos="fade-up">
        <h2 className="membership-process">Membership Process</h2>
        <p className="lead">Simple steps to help you move forward with clarity.</p>
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
                  <span 
                  className="fw-bold lead font-large"
                  data-aos="slide-right"
                  data-aos-delay="200"
                  >{step.number}
                  </span>
                </div>
                <h4 className="text-dark-pink">{step.title}</h4>
                <p className="lead">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MembershipSteps;