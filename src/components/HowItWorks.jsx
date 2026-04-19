import React from 'react';

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Plan',
      text: 'Pick the membership tier that fits your needs. Individual, family, and employer plans available with transparent pricing.',
    },
    {
      number: '02',
      title: 'Meet Your Provider',
      text: 'Schedule your first in-person visit with Amanda Gaskin, APRN. We take time to understand your history, goals, and concerns.',
    },
    {
      number: '03',
      title: 'Get Real Care',
      text: 'Enjoy same-day appointments, direct provider access, telehealth after your first visit, and no surprise bills.',
    },
  ];

  return (
    <section className="how-it-works py-5 lead">
      <div className="container">
        <div className="text-center mx-auto how-it-works-header">
          <h1 className="how-it-works-eyebrow">How It Works</h1>
          <h2 className="how-it-works-title">Getting Started Is Simple</h2>
          <p className="how-it-works-subtitle">
            No referrals. No insurance hoops. Just care that’s built around you.
          </p>
        </div>

        <div className="row g-4 mt-2">
          {steps.map((step) => (
            <div className="col-lg-4" key={step.number}>
              <div className="how-it-works-card h-100">
                <div className="how-it-works-number">{step.number}</div>
                <h3 className="how-it-works-card-title">{step.title}</h3>
                <p className="how-it-works-card-text">{step.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="how-it-works-cta text-center mt-4">
          <p className="mb-3">
            Most members are enrolled and scheduled quickly. Ready to get started?
          </p>

          <div className="d-flex flex-wrap justify-content-center gap-3">
            <a
              href="https://app.elationemr.com/book/UltimateHealthDPC"
              className="btn btn-blue-transparent rounded-pill px-4"
              target="_blank"
              rel="noreferrer"
            >
              Join Today
            </a>

            <a
              href="tel:+13529016582"
              className="btn btn-blue-transparent rounded-pill px-4"
            >
              Call 352-901-6582
            </a>
          </div>

          <p className="how-it-works-note mt-4 mb-0">
            Ultimate Health DPC membership is not health insurance. Telehealth visits are available after your first in-person appointment. Some services may have an additional fee.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;