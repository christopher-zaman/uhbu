import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/banners/neurotoxins-banner.png';
import contentImage from '../assets/img/neurotoxin.png';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/neurotoxin-1.jpg';
import afterImage from '../assets/img/dysport.jpg';

function Neurotoxins() {
  return (
    <>
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="Neurotoxin for Fine Lines & Wrinkle Relaxation"
    subtitle=""
    textColor="rgba(255, 255, 255, 1)"
     />
     <ContentSection
        id="neurotoxin"
        title="Neurotoxin"
        subTitle="Neurotoxin Options"
        paragraphs={[
            "We offer a full line of wrinkle-relaxing neurotoxins to soften expression lines and smooth the skin—while keeping your natural look."
        ]}
        listItems={[
            "Daxxify – $9/unit (long-lasting wrinkle relaxer)",
            "Botox – $13/unit (the gold standard in aesthetics)",
            "Xeomin – $10/unit (a cleaner, preservative-free option)",
            "Jeuveau – $10/unit (great for frown lines and forehead wrinkles)",
            "Dysport – $8/unit (spreads easily, great for larger areas)",
            ]}

        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Neurotoxins",
            description: "",
            treatments: [
                "We’ll help you choose the best product for your goals and facial anatomy.",
                ],
            // image: contentImage,
            bgClass: "blue-fade-bg",
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
        className="bg-light tirzepatide-images"
        
         />
    
    <Footer />
    </>
  );
}

export default Neurotoxins;
