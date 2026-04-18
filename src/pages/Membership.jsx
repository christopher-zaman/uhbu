import React, { useRef } from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import Announcement from '../components/Announcement';
import SEO from '../components/SEO';

import MembershipIntroSection from '../components/MembershipIntroSection';
import MembershipSteps from '../components/MembershipSteps';
import MembershipAudience from '../components/MembershipAudience';
import MembershipCtaSplit from '../components/MembershipCtaSplit';
import MembershipLeadForm from '../components/MembershipLeadForm';
import IntakeForm from '../components/IntakeForm';
import banner from '../assets/banners/contact-banner.png';
import Testimonials from '../components/Testimonials';

function Membership() {
  const leadFormRef = useRef(null);

  const scrollToLeadForm = () => {
    leadFormRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <SEO
        title="Membership | Ultimate Health DPC"
        description="Learn how membership works at Ultimate Health Direct Primary Care. Book your consultation or request membership information."
        image="https://www.ultimatehealthdpc.com/assets/img/membership-based-primary-health-care.webp"
        // url="https://www.ultimatehealthdpc.com/membership"
      />

      <Announcement />
      <TopBar />
      <NavBar />

      <Hero
        backgroundImage={banner}
        title="Personalized Primary Care Without Insurance Barriers"
        subtitle="For individuals and families who want direct access to their doctor, longer visits, and transparent pricing."
        className="membership-hero"
        cta={
          <div className="d-flex gap-3 flex-wrap">
            <button className="btn btn-primary" onClick={scrollToLeadForm}>
              Book Your Free Meet & Greet
            </button>
            <button className="btn btn-outline-light" onClick={scrollToLeadForm}>
              Request Info
            </button>
          </div>
        }
      >
        <ul className="hero-benefits">
          <li>Busy professionals who need same-day or next-day appointments</li>
          <li>Direct access to your doctor</li>
          <li>No copays or surprise bills</li>
        </ul>
      </Hero>

      <Testimonials 
        filterType="dpc"
        className="membership-testimonials" 
      />
      <MembershipIntroSection />
      <MembershipSteps />
      <MembershipAudience />
      <MembershipCtaSplit onRequestInfoClick={scrollToLeadForm} />

      <div ref={leadFormRef}>
        <MembershipLeadForm />
        <IntakeForm />
      </div>

      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default Membership;