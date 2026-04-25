import React from 'react';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { usePageSEO } from '../hooks/usePageSEO';

function EmployerLandingPage() {
  const seo = usePageSEO();
  const employerBenefits = [
    'Lower absenteeism through faster access to care',
    'Affordable group pricing with predictable monthly costs',
    'A benefit that helps you recruit and retain employees',
    'Can pair with a high-deductible health plan or stand alone as a wellness benefit',
    'Simple setup with guided enrollment and onboarding',
  ];

  const traditionalVsDpc = [
    {
      old: 'High deductibles and unpredictable costs',
      better: 'One flat monthly fee per employee',
    },
    {
      old: 'Long waits for appointments',
      better: 'Same-day or next-day appointments',
    },
    {
      old: 'Brief, rushed visits',
      better: 'Unhurried visits with a dedicated provider',
    },
    {
      old: 'Missed work hours for routine care',
      better: 'Telehealth after first visit and better access',
    },
  ];

  const faqs = [
    {
      question: 'Is this health insurance?',
      answer:
        'No. Ultimate Health DPC is a membership-based primary care practice, not health insurance. Many employers pair DPC with a high-deductible health plan for broader coverage.',
    },
    {
      question: 'How many employees do we need to qualify for group pricing?',
      answer:
        'We work with businesses of different sizes. Reach out and we can discuss options based on your team size and goals.',
    },
    {
      question: 'Can employees use this for their families?',
      answer:
        'Yes. Family memberships may be available at an additional monthly rate depending on the plan structure.',
    },
    {
      question: 'What services are included?',
      answer:
        'Membership generally covers primary care visits, chronic care management, preventive care, direct provider access, and telehealth after the first in-person visit. Some specialty services may have additional fees.',
    },
    {
      question: 'How do we get started?',
      answer:
        'Schedule a free employer consultation and we’ll walk you through pricing, enrollment, and next steps.',
    },
  ];

  return (
    <>
      <SEO {...seo} />
      <main className="employer-page">
        {/* Hero */}
        <section className="employer-hero py-5">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <span className="employer-eyebrow">For Local Employers</span>
                <h1 className="employer-title">
                  Give Your Team a Healthcare Benefit They’ll Actually Use.
                </h1>
                <p className="employer-subtitle">
                  Ultimate Health DPC offers employer group memberships that give
                  employees direct access to a dedicated provider, same-day
                  appointments, and predictable costs without the usual
                  complexity.
                </p>

                <div className="d-flex flex-wrap gap-3 mt-4">
                  <a
                    href="/contact"
                    className="btn btn-dark rounded-pill px-4"
                  >
                    Request a Free Employer Consultation
                  </a>
                  <a
                    href="/media"
                    className="btn btn-outline-dark rounded-pill px-4"
                  >
                    Learn More About Our Practice
                  </a>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="employer-hero-card">
                  <h3>Why employers consider DPC</h3>
                  <ul>
                    <li>No copays for routine primary care</li>
                    <li>Better access means fewer delays and missed work hours</li>
                    <li>Relationship-based care employees actually use</li>
                    <li>Predictable monthly cost structure</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="employer-comparison py-5">
          <div className="container">
            <div className="text-center mx-auto employer-section-header">
              <span className="employer-eyebrow">Why DPC for Your Business</span>
              <h2 className="employer-section-title">
                A simpler healthcare option for your team
              </h2>
              <p className="employer-section-subtitle">
                Traditional care is often expensive, slow, and underused. DPC is
                built to be more accessible and more useful.
              </p>
            </div>

            <div className="row g-4 mt-2">
              <div className="col-lg-6">
                <div className="comparison-card comparison-old h-100">
                  <h3>Traditional Insurance Experience</h3>
                  <ul>
                    {traditionalVsDpc.map((item, i) => (
                      <li key={i}>{item.old}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="comparison-card comparison-new h-100">
                  <h3>With Ultimate Health DPC</h3>
                  <ul>
                    {traditionalVsDpc.map((item, i) => (
                      <li key={i}>{item.better}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Employer benefits */}
        <section className="employer-benefits py-5">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <span className="employer-eyebrow">Employer Benefits</span>
                <h2 className="employer-section-title">
                  What’s in it for your business?
                </h2>
                <p className="employer-section-subtitle">
                  This is about more than healthcare access. It’s about giving
                  your team a benefit they’ll actually use while reducing day-to-day
                  friction around getting care.
                </p>
              </div>

              <div className="col-lg-6">
                <div className="benefits-card">
                  <ul>
                    {employerBenefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Provider trust section */}
        <section className="employer-provider py-5">
          <div className="container">
            <div className="provider-highlight-card">
              <span className="employer-eyebrow">Meet Your Team’s Provider</span>
              <h2 className="employer-section-title">
                Amanda Gaskin, APRN
              </h2>
              <p className="employer-section-subtitle">
                Amanda built Ultimate Health DPC on one belief: people deserve a
                provider who knows them by name, not just by chart number. Her
                work in primary care, weight management, hormone health, and
                chronic condition support reflects the same relationship-based
                care employers want their teams to have access to.
              </p>

              <ul className="provider-highlight-list">
                <li>Relationship-based primary care</li>
                <li>Focused on access, prevention, and long-term support</li>
                <li>Locally rooted leadership and community recognition</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="employer-faq py-5">
          <div className="container">
            <div className="text-center mx-auto employer-section-header">
              <span className="employer-eyebrow">FAQ</span>
              <h2 className="employer-section-title">
                Common questions from employers
              </h2>
            </div>

            <div className="accordion employer-accordion mt-4" id="employerFaq">
              {faqs.map((faq, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`heading-${index}`}>
                    <button
                      className={`accordion-button ${index !== 0 ? 'collapsed' : ''}`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${index}`}
                      aria-expanded={index === 0 ? 'true' : 'false'}
                      aria-controls={`collapse-${index}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse-${index}`}
                    className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                    aria-labelledby={`heading-${index}`}
                    data-bs-parent="#employerFaq"
                  >
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="employer-cta py-5">
          <div className="container">
            <div className="employer-cta-card text-center">
              <span className="employer-eyebrow">Ready to Talk?</span>
              <h2 className="employer-section-title">
                Let’s find the right plan for your team.
              </h2>
              <p className="employer-section-subtitle">
                Schedule a free employer consultation and we’ll walk you through
                options, pricing, and next steps.
              </p>

              <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                <a
                  href="/contact"
                  className="btn btn-dark rounded-pill px-4"
                >
                  Schedule My Consultation
                </a>
                <a
                  href="tel:+13529016582"
                  className="btn btn-outline-dark rounded-pill px-4"
                >
                  Call 352-901-6582
                </a>
              </div>

              <p className="employer-disclaimer mt-4 mb-0">
                Ultimate Health DPC membership is not health insurance. Telehealth
                services are available after an initial in-person visit. Some
                services may have additional fees outside of membership.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default EmployerLandingPage;