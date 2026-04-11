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

import banner from '../assets/banners/contact-banner.png';

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
        title="Membership Made Simple"
        subtitle="Learn how membership works, who it is for, and choose the next step that fits you best."
      />

      <MembershipIntroSection />
      <MembershipSteps />
      <MembershipAudience />
      <MembershipCtaSplit onRequestInfoClick={scrollToLeadForm} />

      <div ref={leadFormRef}>
        <MembershipLeadForm />
      </div>

      {/* <Contact /> */}
      <Footer />
    </>
  );
}

export default Membership;