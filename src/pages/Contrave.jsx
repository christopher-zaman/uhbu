import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/contrave-banner.jpg';
import contentImage from '../assets/img/contrave.webp';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/contrave-1.jpg';
import afterImage from '../assets/img/contrave-2.jpg';

import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';

function Contrave() {
  const seo = usePageSEO();
  return (
    <>
    <SEO {...seo} />
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="Contrave"
    subtitle="Doctor-guided, personalized care for lasting weight loss"
     />
     <ContentSection
        id="contrave"
        title="Contrave"
        subTitle="Benefits"
        paragraphs={[
            "Contrave is a daily pill that combines two medications to reduce hunger and food cravings. It’s especially helpful for emotional or stress eaters looking for more control.",
            "$150 for 30-day supply",
        ]}
        listItems={[
            "Promotes steady weight loss by targeting both hunger and cravings.",
            
            "Helps reduce emotional eating and food-related reward signals.",
            "FDA-approved for chronic weight management in adults with obesity or overweight with weight-related conditions."
            ]}

        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Contrave",
            description: "",
            treatments: [
                "$150 for 30-day supply",
                "FDA-approved prescription for long-term weight management.",
                "Targets hunger and cravings through brain-based appetite control.",
                
                "Designed for adults with obesity or those overweight with weight-related medical conditions."
                ],
            // image: contentImage,
            bgClass: "blue-fade-bg",
            buttonLink: "/contrave"
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
        className="bg-light contrave-images"
        
         />
    
    <Footer />
    </>
  );
}

export default Contrave;
