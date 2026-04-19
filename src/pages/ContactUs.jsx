import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import banner from '../assets/banners/contact-banner.png';
import PhoneChip from '../components/PhoneChip';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';

function ContactUs() {
  const seo = usePageSEO();

  return (
    <>
      <SEO {...seo} />
      <TopBar />
      <NavBar />

      <Hero
        backgroundImage={banner}
        title="Contact Us"
         subtitle={
            <>
              <div>Questions about membership, services, or booking? We’re here to help.</div>
              <div className="mt-2">No-pressure consultation. We’ll help you find the right next step.</div>
            </>
          }
        cta={
          <PhoneChip
            inline={false}
            className="hero-phone-white fs-5"
            display="Schedule a Free Meet-and-Greet"
            ariaLabel="Schedule a free meet-and-greet with Ultimate Health Direct Primary Care"
          />
        }
        textColor="rgba(255, 255, 255, 1)"
        className="contact-hero"
      />

      <Contact />
      <Footer />
    </>
  );
}

export default ContactUs;