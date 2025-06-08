import React from 'react';
import '../assets/css/Services.css';
import Divider from '../components/Divider';
import { Link } from 'react-router-dom';    

const defaultServices = [
  {
    title: 'Weight Loss',
    description: [
    'GLP1A/Semaglutide',
    'FDA approved',
    'Treats chronic weight loss in adults with obesity',
    'Control blood sugar levels',
    'Suppress appetite',
    'Type 2 diabetes',
    'Lipotropic injection',
    '(Ozempic/Wegovy)'
    ],
    image: '/assets/img/wellness/weight-loss.jpg',
    
    link: '/semaglutide'
  },
  {
    title: 'Hormone Replacement Therapy',
    description: [
    '🌸 Estrogen',
    '🌙 Progesterone',
    '💪 Testosterone',
    '🔘 Biote Pellets for Women',
    '💊 Estradiol Creams, Troches, & Pills',
    '🧴 Compounded Testosterone Cream',
    '💊 Oral or Topical Progesterone',
    '💉 SubQ Testosterone Injections'
    ],
    image: '/assets/img/wellness/hormone-therapy.jpg',
    link: '/hormone-replacement-therapy',
    noBullets: true
  },
  {
    title: 'Peptide Therapy',
    description: [
    '💉 Sermorelin',
    '💉 CJC-1295 / Ipamorelin',
    '💉 BPC-157',
    '💉 PT-141 (Bremelanotide)',
    '💉 AOD-9604',
    '💉 Tesamorelin',
    ],
    image: '/assets/img/wellness/peptide-therapy.png',
    link: '/peptide-therapy',
    noBullets: true
  },
  {
    title: 'Sexual Wellness',
    description: [
    '🌸 InMode Empower Platform',
    '🌸 ALMA FemiLift',
    '💉 The O-Shot®',
    '💨 Oxytocin Nasal Spray & Tablets',
    '💉 PT-141 Peptide Therapy',
    '💥 ALMA Duo ED Treatment',
    '💉 P-Shot (Priapus Shot®)',
    '💊 Oral ED Medications',
    '💉 Tri-Mix Injection Therapy',
    ],
    image: '/assets/img/wellness/for-her.jpg',
    link: '/sexual-wellness-treatments',
    noBullets: true
  },
  {
    title: 'Primary Care',
    description: [
    'We’re a Direct Primary Care practice, which means you get care when you need it—without the long waits, surprise bills, or rushed visits.',
    ],
    image: '/assets/img/wellness/primary-care.webp',
    link: '/primary-care',
    noBullets: true
  },
  {
    title: 'Asthetics',
    description: [
    'Whether you\'re new to aesthetics or ready for a full glow-up, we’re here to walk you through every option with honesty, care, and a keen eye for natural results.',
    ],
    image: '/assets/img/wellness/aesthetics.png',
    link: '/sexual-wellness-treatments',
    noBullets: true
  }, 

];




function Services({ services = defaultServices, title = "Our Services", className = "", bgClass = "", backgroundImage = ""}) {
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
      </div>
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="service-card position-relative overflow-hidden rounded">
                <img
                  src={service.image}
                  className="img-fluid w-100 h-100 object-fit-cover"
                  alt={service.title}
                />
                <div className="gradient-overlay position-absolute top-0 start-0 w-100 h-100 z-1"></div>
                <div className="service-title position-absolute bottom-0 start-0 w-100 text-white text-center py-2 z-2">
                  <h5 className="m-0">{service.title}</h5>
                </div>
                <div className="overlay p-3 d-flex flex-column justify-content-center text-center">
                  <h5 className="text-white mb-2">{service.title}</h5>
                  <ul className={`text-white small text-start ${service.noBullets ? 'list-unstyled ps-0' : 'ps-3'}`}>
                    {service.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <Link to={service.link} className="btn btn-outline-light btn-sm rounded-pill mt-2">
                    {service.title}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default Services;
