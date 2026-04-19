import React from 'react';
import Divider from './Divider';

const audienceItems = [
  'Adults looking for more personalized primary care',
  'Patients frustrated by rushed visits and poor access',
  'Individuals who want a better provider relationship',
  'People focused on prevention and long-term wellness',
  'Families who want a more direct care experience',
  'Anyone who wants to learn more before booking',
];

function MembershipAudience() {
  return (
    <section className="section light-background-pink-gradient">
      <div className="container section-title" data-aos="fade-down">
        <h2 className="membership-process">Who This Is For</h2>
        <p className="lead">Membership may be a strong fit for people who want a better healthcare experience.</p>
      </div>

      <div className="container">
        <div className="row gy-4">
          {audienceItems.map((item, index) => (
            <div
              className="col-lg-4 col-md-6" 
              key={index}
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <div className="p-4 shadow-sm rounded bg-white h-100">
                <p className="mb-0 lead">{item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MembershipAudience;