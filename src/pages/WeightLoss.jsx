import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/weight-loss-banner.jpg';
import contentImage from '../assets/img/weight-loss.png';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/before.webp';
import afterImage from '../assets/img/after-weight-loss.jpg';
import SEO from '../components/SEO';
import { usePageSEO } from '../hooks/usePageSEO';


function WeightLoss() {
  const seo = usePageSEO();
  return (
    <>
    <SEO {...seo} />
    <TopBar />
    <NavBar />
    <Hero
    backgroundImage={banner}
    title="Weight Loss"
    subtitle="Doctor-guided, personalized care for lasting weight loss"
     />
     <ContentSection
     
        id="weight-loss"
        title="Weight Loss"
        subTitle="What We Offer"
        paragraphs={[
            "We offer several trusted and effective weight loss options right here at Ultimate Health DPC in Leesburg. No need to visit a pharmacy—all medications are available in-office, making it easy and convenient to stay on track.",
            "Our doctor-guided program includes weekly check-ins, nutrition guidance, and personalized support.",
            "Experience real results, safely and sustainably — without the high costs of insurance-based care."
        ]}
        listItems={[
            
            "💉 Tirzepatide - $150/week (2.5 mg & 5 mg), $200/week (7.5 mg & 10 mg)",
            "💊 Contrave - $150 for 30-day supply",
            "🌿 Calocurb - $89 for 30-day supply",            
        ]}
        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Weight Loss",
            description: "",
            treatments: [
                "Need help choosing the right one for your goals? We’ll work with you to create a personalized weight loss plan that fits your body, your budget, and your lifestyle."
                ],
            // image: contentImage,
            bgClass: "blue-fade-bg",
            buttonLink: "https://app.elationemr.com/book/UltimateHealthDPC?appointment_types"
        },
        ]}
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
