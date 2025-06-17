import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/banners/womens-health-banner.webp';
import contentImage from '../assets/img/womens-health.jpg';
import MultiFeatureSection from '../components/MultiFeatureSection';

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
    
    <Hero
    backgroundImage={banner}
    title="Women's Health Care"
    subtitle=""
    textColor="rgba(1, 3, 112, 0.75)"
     />
     <ContentSection
        id="contrave"
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
            "Have questions? We’re here to help you feel heard, respected, and empowered."
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
                "💉 SubQ Testosterone Injections"
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
        className="bg-light womens-health-images"
        
         />
    
    <Footer />
    </>
  );
}

export default WomensHealth;
