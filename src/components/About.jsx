import React from 'react';
import founderImage from '../assets/img/amanda.webp';
import '../assets/css/About.css';
import Divider from '../components/Divider';

function About() {
  return (
    <section id="about" className="about section about-us-bg lead">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row align-items-xl-center gy-5">
          {/* Left Column (keep as-is) */}
          <div
            className="col-xl-7 content"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h2 className="text-uppercase">About Us</h2>
            <Divider
              centered={false}
              aos="fade-right"
              aosDelay="100"
              aosDuration="1000"
              customClass="custom-fade-right"
            />

            
            <div>
              <p><strong>Your Wellness, Our Passion</strong></p>

              <p>
                At Ultimate Health Direct Primary Care, we’re all about keeping healthcare simple, personal, and affordable.
              </p>

              <p>
                We started our practice because we saw how hard it was for people to get the care they needed—without the hassle. Long wait times, rushed visits, and high costs? No thanks. We knew there had to be a better way.
              </p>

              <p>
                That’s why we chose Direct Primary Care (DPC). With DPC, you pay one low monthly fee and get unlimited access to your provider. No copays. No hidden bills. Just real care, when you need it.
              </p>

              <p>
                Our team takes time to listen, build real relationships, and focus on what matters most—you. Whether you’re dealing with a chronic condition, just need a check-up, or have questions about your health, we’re here for it all.
              </p>

              <p className="mb-3">
                We proudly care for individuals, families, and local businesses across our community. At Ultimate Health, you’re not just a patient—you’re part of the family.
              </p>
            </div>

            <a href="/meet-us" className="read-more lead">
              <span>Meet the Team</span> <i className="bi bi-arrow-right" />
            </a>
          </div>

          {/* Right Column (Image of Founder) */}
          <div
            className="col-xl-5 d-flex justify-content-center"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <img 
            src={founderImage} 
            alt="Founder" 
            className="about-image" 
            width="368"
            height="552"
            />
          </div>
          

        </div>
      </div>
    </section>
  );
}

export default About;
