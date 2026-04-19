import React from 'react';
import '../assets/css/Services.css';
import Divider from '../components/Divider';
import { Link } from 'react-router-dom';

const defaultServices = [
  {
    title: 'Primary Care & Membership',
    description: [
      'Relationship-based primary care with simple, transparent membership pricing.',
      'Same-day sick visits',
      'Chronic care management',
      'Preventive care and wellness visits',
      'Direct provider access',
    ],
    image: '/assets/img/wellness/primary-care.webp',
    link: '/membership',
    introOnly: false,
    buttonText: 'Explore Membership',
  },
  {
    title: 'Weight Loss & Metabolic Health',
    description: [
      'Medical weight loss support designed to help you make steady, sustainable progress.',
      'Semaglutide',
      'Tirzepatide',
      'Metabolic health support',
      'Personalized treatment planning',
    ],
    image: '/assets/img/wellness/weight-loss.jpg',
    link: '/weight-loss',
    introOnly: false,
    buttonText: 'Explore Weight Loss',
  },
  {
    title: 'Hormone & Sexual Wellness',
    description: [
      'Care for energy, intimacy, balance, and confidence — tailored to where you are now.',
      'Hormone replacement therapy',
      'Women’s intimate wellness',
      'Men’s sexual wellness',
      'Performance and vitality support',
    ],
    image: '/assets/img/wellness/for-her.jpg',
    link: '/sexual-wellness-treatments',
    introOnly: false,
    buttonText: 'Explore Hormone & Wellness Care',
  },
  {
    title: 'Regenerative & Advanced Wellness',
    description: [
      'Modern therapies that support recovery, appearance, and overall wellness goals.',
      'Peptide therapy',
      'IV therapy',
      'PRP and regenerative treatments',
      'Aesthetic services',
    ],
    image: '/assets/img/wellness/aesthetics.png',
    link: '/regenerative-therapy',
    introOnly: false,
    buttonText: 'Explore Advanced Wellness',
  },
];

function Services({
  services = defaultServices,
  title = 'Explore Our Care Options',
  subtitle = 'Find the care that fits your goals — from membership-based primary care to weight loss, hormone support, and advanced wellness services.',
  className = '',
  bgClass = '',
  backgroundImage = '',
}) {
  return (
    <section
      id="services"
      className={`services section ${className} ${bgClass} fixed-bg`}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      <div className="container text-center section-title" data-aos="fade-up">
        <div><span>{title}</span></div>
        <Divider />
        {subtitle && (
          <p className="services-subtitle lead mt-3 mb-0 mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row g-4">
          {services.map((service, index) => {
            const [intro, ...bullets] = service.description;

            return (
              <div className="col-lg-3 col-md-6" key={index}>
                <div className="service-card position-relative overflow-hidden rounded lead h-100">
                  <img
                    src={service.image}
                    className="img-fluid w-100 h-100 object-fit-cover"
                    alt={service.title}
                  />

                  <div className="gradient-overlay position-absolute top-0 start-0 w-100 h-100 z-1"></div>

                  <div className="service-title position-absolute bottom-0 start-0 w-100 text-white text-center py-2 z-2">
                    <h3 className="m-0 text-white">{service.title}</h3>
                  </div>

                  <div className="overlay p-3 d-flex flex-column justify-content-center text-center">
                    <p className="text-white small mb-3 service-intro">
                      {intro}
                    </p>

                    {bullets.length > 0 && (
                      <ul className="text-white small text-start ps-3 service-list mb-3">
                        {bullets.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}

                    <Link
                      to={service.link}
                      className="btn btn-outline-light btn-sm rounded-pill mt-2 align-self-center"
                    >
                      {service.buttonText || `Explore ${service.title}`}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Services;