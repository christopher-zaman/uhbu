import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/sermorelin-banner.png';
import contentImage from '../assets/img/sermorelin.png';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/sermorelin-1.jpg';
import afterImage from '../assets/img/sermorelin-2.webp';

function Sermorelin() {
  return (
    <>
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="Sermorelin"
    subtitle="Doctor-guided, personalized care for lasting weight loss"
     />
     <ContentSection
        id="sermorelin"
        title="Sermorelin"
        subTitle="Benefits"
        paragraphs={[
            "Sermorelin helps boost natural growth hormone levels, which may support fat loss, muscle growth, better sleep, and improved energy. Great for people over 30 looking to feel younger and healthier. Ask us about pricing and availability.",
        ]}
        listItems={[
            "Stimulates the natural production of human growth hormone (HGH) through the pituitary gland.",
            "May improve sleep quality, energy levels, and recovery from exercise.",
            "Supports fat metabolism and lean muscle development.",
            "Promotes healthy aging by enhancing cellular repair and regeneration."
            ]}

        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Sermorelin",
            description: "",
            treatments: [
            "Administered as a subcutaneous injection, typically once daily at night.",
            "Used in age management and wellness programs to support hormone balance.",
            "Requires prescription and medical supervision with periodic lab monitoring.",
            "Best suited for adults with low or declining HGH levels seeking natural stimulation over synthetic HGH."
            ],
            // image: contentImage,
            bgClass: "blue-fade-bg",
            buttonText: "Learn More",
            buttonLink: "/sermorelin"
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

export default Sermorelin;
