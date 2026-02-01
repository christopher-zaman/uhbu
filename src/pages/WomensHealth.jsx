import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';
import FullscriptBanner from '../components/FullscriptBanner';
import ContentSection from '../components/ContentSection';
import banner from '../assets/banners/womens-health-banner.webp';
import contentImage from '../assets/img/womens-health.jpg';
import MultiFeatureSection from '../components/MultiFeatureSection';

import PhoneChip from '../components/PhoneChip';
import ConversionBlock from "../components/ConversionBlock";
import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/estrogen.jpg';
import afterImage from '../assets/img/peri-menopause.png';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';

function WomensHealth() {
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
    title="Women's Health Care"
    subtitle="Personalized care supporting hormonal balance, wellness, and long-term health"
    cta={<PhoneChip inline={false} className='hero-phone fs-4'/>}
    textColor="rgba(1, 3, 112, 0.75)"
     />
    <div className="fullscript-banner-over-hero">
      <FullscriptBanner />
    </div>
    </div>

     <ContentSection
        id="womens-health"
        title="Women's Health"
        subTitle="You’re Not Alone"
        paragraphs={[
            "Our nurse practitioner board certified, Amanda Gaskin, A-GNP-C provides primary care with a focus on gynecology, preconception, and menopause. Her practice also includes reproductive health care for young adults and men, including contraception and screening for sexually transmitted infections. Gaskin offers individualized care that integrates evidence-based practices from conventional medicine and complementary therapies.",
            "Women's health refers to the health of women, which differs from that of men in many unique ways. Women's health is an example of population health, where health is defined by the World Health Organization.",
        ]}
        listItems={[
            "Many women experience these concerns but don’t know where to turn. At Ultimate Health, we offer safe and simple cosmetic gynecology treatments to help improve comfort and confidence.",
            "We offer procedures like labiaplasty and other vaginal rejuvenation services in a private, respectful environment.",
            "This isn’t about vanity. It’s about feeling good in your body and reclaiming your confidence.",
            "Have questions? We’re here to help you feel heard, respected, and empowered.",
              <>
              📞 Call us at{" "}
                <a href="tel:+13529016582" className="phone-chip unstyled-link">(352) 901-6582</a>{" "}
                to book your consultation.
              </>
            
            ]}
            
        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Treatment Options We Offer",
            description: "",
            treatments: [
                "🔘 Biote Pellets for Women",
                "💊 Estradiol Creams, Troches, & Pills",
                "🧴 Compounded Testosterone Cream for Women",
                "💊 Oral or Topical Progesterone",
                "💉 SubQ Testosterone Injections",
                
                
                ],
                
                 
            // image: contentImage,
            bgClass: "blue-fade-bg",
            buttonLink: "https://app.elationemr.com/book/UltimateHealthDPC?appointment_types"
        },
        
        ]}
        
         />
         <ConversionBlock
  id="womens-health-conversion"
  title="Women’s health care that listens first"
  subtitle="Personalized support for hormones, energy, mood, sleep, and long-term wellness—through Direct Primary Care."

  painTitle="If you’ve felt dismissed or told “it’s normal,” you’re not alone."
  pains={[
    "Fatigue, brain fog, or mood changes that don’t feel like you",
    "Weight changes, low energy, or stubborn symptoms despite “normal” labs",
    "Perimenopause or menopause symptoms affecting sleep, focus, or confidence",
    "Feeling rushed in visits or unsure what to do next"
  ]}
  outcome="We take the time to understand your symptoms, your history, and your goals—then build a plan that makes sense for you."

  solutionTitle="How Ultimate Health DPC Helps"
  solutionIntro="Our care is relationship-based and evidence-informed, with a focus on real-life results—not quick answers."
  solutionBullets={[
    { title: "Whole-person evaluation", text: "We look at hormones, lifestyle, stress, sleep, and overall health factors together." },
    { title: "Personalized plan", text: "Options are tailored to your symptoms, life stage, and goals." },
    { title: "Clear guidance", text: "You’ll understand your options and what to expect—without being overwhelmed." },
    { title: "Ongoing support", text: "Follow-ups and adjustments so your plan evolves as your body changes." }
  ]}
  solutionClosing="Whether you’re navigating perimenopause, menopause, or just want proactive women’s care—your concerns deserve time and attention."

  processTitle="What to Expect"
  steps={[
    { title: "Schedule a visit", text: "Call or text to book a consultation and share what you’re experiencing." },
    { title: "Review & evaluate", text: "We discuss symptoms, history, and—when appropriate—lab work or next steps." },
    { title: "Start your plan", text: "Begin care with follow-up support and refinements over time." }
  ]}

  ctaTitle="Ready to feel heard and supported?"
  ctaText="Call or text to schedule a consultation."
  ctaType="phone"
  phoneClassName="hero-phone fs-4"
/>

        <SideBySideImages
        title=""
        leftImage={beforeImage}
        rightImage={afterImage}
        leftAlt="Before Treatment"
        rightAlt="After Treatment"
        sectionId="before-after"
        className="bg-light womens-health-images"
        
         />
    
    <Footer />
    </>
  );
}

export default WomensHealth;
