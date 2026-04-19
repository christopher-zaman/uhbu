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
import banner from '../assets/banners/full-team.webp';
import Testimonials from '../components/Testimonials';
import PhoneChip from '../components/PhoneChip';
import PricingPreview from '../components/PricingPreview';

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
     <div className="membership-page">
      <SEO
        title="Membership | Ultimate Health DPC"
        description="Learn how membership works at Ultimate Health Direct Primary Care. Book your consultation or request membership information."
        image="https://www.ultimatehealthdpc.com/assets/img/membership-based-primary-health-care.webp"
        // url="https://www.ultimatehealthdpc.com/membership"
      />

      <TopBar />
      <NavBar />

      <Hero
        backgroundImage={banner}
        title="Personalized Primary Care Without Insurance Barriers"
        subtitle="For individuals and families who want direct access to their doctor, longer visits, and transparent pricing."
        className="membership-hero"
        cta={
          <div className="d-flex gap-3 flex-wrap">
            <button className="lead cta-membership cta-request-info" onClick={scrollToLeadForm}>
              Request Membership Info
            </button>
          </div>
        }
      >
        <ul className="hero-benefits">
          <li>Busy professionals who need same-day or next-day appointments</li>
          <li>Direct access to your doctor</li>
          <li>No copays or surprise bills</li>
        </ul>
        <PhoneChip
          className="lead cta-membership cta-request-info"
        />
      </Hero>
      <Testimonials 
        filterType="dpc"
        className="membership-testimonials" 
      />
      <MembershipIntroSection />
      <MembershipSteps />
      <MembershipAudience />
      <MembershipCtaSplit onRequestInfoClick={scrollToLeadForm} />
      <PricingPreview
        startingPrice="$99"
        showSecondaryCTA={true}
      />
      <div ref={leadFormRef}>
        <div className="membership-form lead">
        <MembershipLeadForm />
        </div>
        <IntakeForm />
      </div>

      {/* <Contact /> */}
      <Footer />
      </div>
    </>
  );
}

export default Membership;