import React from 'react';
import Hero from '../components/Hero';
import FullscriptBanner from '../components/FullscriptBanner';
import Footer from '../components/Footer';
import banner from '../assets/banners/contact-banner.png';
import CherryPayment from "../components/CherryPayment";
import SEO from '../components/SEO';
import { usePageSEO } from '../hooks/usePageSEO';
import PhoneChip from '../components/PhoneChip';

function PaymentPlans() {
  const seo = usePageSEO();
  return (
    <>
      <SEO {...seo} />
      {/* HERO + OVERLAID BANNER */}
      <div className="hero-with-banner">
      <Hero
        backgroundImage={banner}
        title="Payment Plans"
        subtitle="Flexible options designed to make care more accessible and affordable"
        cta={<PhoneChip inline={false} className="hero-phone-white fs-4" />}
        textColor="rgba(255, 255, 255, 1)"
        className='payment-plans-hero'
      />
      <div className="fullscript-banner-over-hero">
        <FullscriptBanner />
      </div>
      </div>
      <CherryPayment sections={["all"]} />
      <Footer />
    </>
  );
}
export default PaymentPlans;
