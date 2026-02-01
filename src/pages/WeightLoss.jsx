import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';
import PhoneChip from '../components/PhoneChip';
import ContentSection from '../components/ContentSection';
import banner from '../assets/img/weight-loss-banner.jpg';
import bannerMobile from '../assets/mobile-banners/weight-loss-mobile-bg.webp';

import contentImage from '../assets/img/weight-loss.png';
import contentImage2 from '../assets/img/help1.png';
import contentImage3 from '../assets/img/what-makes-us-different.png';
import MultiFeatureSection from '../components/MultiFeatureSection';
import FullscriptBanner from '../components/FullscriptBanner';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/before.webp';
import afterImage from '../assets/img/after-weight-loss.jpg';
import SEO from '../components/SEO';
import { usePageSEO } from '../hooks/usePageSEO';
import PrimaryCTA from '../components/PrimaryCTA';

import ConversionBlock from "../components/ConversionBlock";

function WeightLoss() {
  const seo = usePageSEO();
  return (
    <>
    <SEO {...seo} />
    <TopBar />
    <NavBar />

{/* HERO + OVERLAID BANNER */}
<div className="hero-with-banner">
  {/* Desktop Hero */}
  <div className="hero-desktop">

    <Hero
      backgroundImage={banner}
      title="Medical Weight Loss in Leesburg, FL"
      subtitle="Doctor-guided, personalized care for lasting weight loss"
      cta={<PhoneChip inline={false} className='hero-phone-white fs-4'/>}
    />

    <div className="fullscript-banner-over-hero">
      <FullscriptBanner />
    </div>
  </div>

  {/* Mobile Hero */}
  <div className="hero-mobile hero-light">
    <Hero
      backgroundImage={bannerMobile}
      title="Medical Weight Loss in Leesburg, FL"
      subtitle="Doctor-guided, personalized care for lasting weight loss"
      cta={<PhoneChip inline={false} className='fs-4' />}
    />
  </div>
</div>

<ConversionBlock
  title="A clear path to sustainable weight loss"
  subtitle="Supportive, physician-guided care—built around your body and your goals."

  painTitle="If weight loss has felt frustrating, you’re not alone."
  pains={[
    "Tried diets that didn’t work long-term",
    "Confusing medication options",
    "No accountability or follow-up support",
    "Rushed visits that leave you guessing"
  ]}
  outcome="Our approach focuses on sustainable, physician-led weight loss with ongoing support."

  solutionTitle="How Ultimate Health DPC Helps"
  solutionIntro="We keep the process simple, supportive, and medically guided—without judgment."
  solutionBullets={[
    { title: "Personalized plan", text: "Built around your health history, goals, and lifestyle." },
    { title: "Ongoing access", text: "Support between visits so you’re not doing this alone." },
    { title: "Medical oversight", text: "Provider-guided care focused on safety and sustainability." },
    { title: "Less friction", text: "Direct Primary Care means fewer barriers and more time with your provider." }
  ]}
  solutionClosing="The goal is progress you can maintain—not quick fixes."

  processTitle="What to Expect"
  steps={[
    { title: "Meet your provider", text: "Talk through goals, history, and what’s getting in the way." },
    { title: "Build a plan", text: "Create a realistic plan you can follow—step by step." },
    { title: "Ongoing support", text: "Adjust, refine, and stay accountable with guidance along the way." }
  ]}

  ctaTitle="Ready to get started?"
  ctaText="Call or text and we’ll help you take the next step."
  ctaType="phone"
  phoneClassName="hero-phone-white fs-4"
/>



     <ContentSection
        id="weight-loss"
        title="Medical Weight Loss in Leesburg, FL"
        subTitle="What We Offer"
        paragraphs={[
          <>
          <>
            At <strong>Ultimate Health Direct Primary Care</strong>, we understand that weight management isn’t one-size-fits-all. Our medical weight loss program is designed around you—your health history, lifestyle, and long-term goals.
          </>
          
          </>
        ]}
        listItems={[
            
            "Comprehensive health evaluations to uncover metabolic or hormonal imbalances",
            "Lab testing to guide safe and effective treatment",
            "Provider-guided weight management plans that may include advanced therapies when appropriate",            
            "Ongoing support and accountability with a focus on lifestyle, nutrition, and movement", 
            <>
            <>
              <strong>Note:</strong> All therapies are prescribed only after a full medical evaluation. Some treatments may not be appropriate for every patient.
              
            </>
            
                  <br></br>
                  <li className="list-style-type-none">
                    📞 Call us at{' '}
                    <a href="tel:+13529016582" className="phone-chip unstyled-link">(352) 901-6582</a>{' '}
                    to book your consultation.
                  </li>
                
            </>          
        ]}
        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Why Choose Medical Weight Loss?",
            description: "",
            treatments: [
                "Losing weight on your own can feel frustrating and overwhelming. Fad diets and quick fixes often fail because they don’t address the root causes of weight gain. Our team takes a medical approach, helping you understand your body’s needs and creating a personalized plan that supports safe, sustainable results."
                ],
            image: contentImage2,
            bgClass: "blue-fade-bg",
            buttonLink: "https://app.elationemr.com/book/UltimateHealthDPC?appointment_types"
        },

        {
            title: "What Makes Us Different?",
            description: "",
            treatments: [
                <>
                <>
                <strong>Personalized care:</strong> We don’t hand you a one-page diet sheet. We dig deep into what your body needs.
                <br/><br/>
                <strong>Medical expertise:</strong> Every program is supervised by licensed providers with experience in primary care and weight management.
                <br/><br/>
                <strong>Local support:</strong> We’re part of your community here in Leesburg, so we walk this journey with you—not as a number, but as a neighbor.
                </>
                </>
            ],
            image: contentImage3,
            bgClass: "blue-fade-bg",
           //buttonLink: "https://app.elationemr.com/book/UltimateHealthDPC?appointment_types"
        },        
        ]}
         />
        <PrimaryCTA
        title="Get Started Today"
        text="Take the first step toward lasting change. Schedule a consultation at Ultimate Health DPC in Leesburg, FL, and let’s design a plan that works for your health, your body, and your goals."
        // cta={<PhoneChip inline={false} className="hero-phone fs-4" />}
        />
        <SideBySideImages
        title=""
        leftImage={beforeImage}
        rightImage={afterImage}
        leftAlt="Before Treatment"
        rightAlt="After Treatment"
        sectionId="before-after"
        className="bg-light"

         />
    
    <Footer />
    </>
  );
}

export default WeightLoss;
