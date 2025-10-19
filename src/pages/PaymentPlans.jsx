import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import FullscriptBanner from '../components/FullscriptBanner';
import Footer from '../components/Footer';
import banner from '../assets/banners/contact-banner.png';
import CherryPayment from "../components/CherryPayment";

import SEO from '../components/SEO';
import { usePageSEO } from '../hooks/usePageSEO';

function PaymentPlans() {
  const seo = usePageSEO();
  return (
    <>
      <SEO {...seo} />
      <TopBar />
      <NavBar />

      {/* HERO + OVERLAID BANNER */}
      <div className="hero-with-banner">
      <Hero
        backgroundImage={banner}
        title="Payment Plans"
        subtitle=""
        textColor="rgba(1, 3, 112, 0.75)"
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
