import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/low-dose-naltrexone-banner.png';
import contentImage from '../assets/img/low-dose-naltrexone.jpg';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/naltrexone-1.png';
import afterImage from '../assets/img/naltrexone-2.jpg';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';

function LowDoseNaltrexone() {
  const seo = usePageSEO();
  return (
    <>
    <SEO {...seo} />
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="💊 Low Dose Naltrexone"
    subtitle="Doctor-guided, personalized care for lasting weight loss"
     />
     <ContentSection
        id="lowdosenaltrexone"
        title="Low Dose Naltrexone"
        subTitle="Benefits"
        paragraphs={[
            "LDN helps reduce inflammation and may support weight loss in people with insulin resistance, PCOS, or autoimmune issues. It can be taken alongside other weight loss medications. Ask us about pricing and if LDN is right for you.",
        ]}
        listItems={[
            "Modulates the immune system and reduces inflammation linked to chronic conditions.",
            "May help regulate appetite and support weight management in certain individuals.",
            "Used off-label to support treatment of autoimmune conditions, fibromyalgia, and chronic pain.",
            "Low side effect profile with once-daily oral dosing."
            ]}

        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Low Dose Naltrexone",
            description: "",
            treatments: [
                "Compounded in low doses (typically 1.5–4.5mg) for off-label use.",
                "Taken orally once daily, usually at night to minimize side effects.",
                "Supports neurological and immune regulation with minimal sedation or dependency risk.",
                "May complement other therapies in managing inflammation, mood, and metabolic function."
                ],
            // image: contentImage,
            bgClass: "blue-fade-bg",
            buttonLink: "/low-dose-naltrexone"
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

export default LowDoseNaltrexone;
