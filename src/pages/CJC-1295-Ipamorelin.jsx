import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/cjc-1295-ipamorelin-banner.png';
import contentImage from '../assets/img/cjc-1295-ipamorelin.webp';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/sermorelin-1.jpg';
import afterImage from '../assets/img/CJC-1295-2.webp';

import SEO from '../components/SEO';
import { usePageSEO } from '../hooks/usePageSEO';

function CJC1295Ipamorelin() {
  const seo = usePageSEO();
  return (
    <>
    <SEO {...seo} />
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="CJC 1295 Ipamorelin"
    subtitle="For Longevity and Wellness"
     />
     <ContentSection
        id="CJC1295Ipamorelin"
        title="CJC 1295 Ipamorelin"
        subTitle="Benefits"
        paragraphs={[
            "This powerful duo boosts growth hormone while minimizing side effects. Great for fat burning, lean muscle gain, better recovery, and deep sleep.",
        ]}
        listItems={[
        "Stimulates natural growth hormone release without shutting down your body’s own production.",
        "Promotes fat burning, lean muscle development, and faster recovery after workouts.",
        "Supports deep, restorative sleep and improved energy levels.",
        "Low risk of side effects compared to synthetic HGH or other stimulants."
        ]}

        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "CJC 1295 Ipamorelin",
            description: "",
            treatments: [
                "Combines two synergistic peptides—CJC-1295 and Ipamorelin—for enhanced GH release.",
                "Administered via subcutaneous injection, typically once daily or five days per week.",
                "Used in anti-aging, weight management, and athletic performance programs.",
                "Improves sleep quality, metabolism, and cellular repair over time.",
                "Well-tolerated and suitable for long-term protocols under medical supervision."
                ],
            // image: contentImage,
            bgClass: "blue-fade-bg",
            buttonText: "Get Started with CJC 1295 Ipamorelin",
            buttonLink: "contact"
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

export default CJC1295Ipamorelin;
