import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/calocurb-banner.jpg';
import contentImage from '../assets/img/calocurb.webp';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/calocurb-1.jpg';
import afterImage from '../assets/img/calocurb-2.jpg';

function Calocurb() {
  return (
    <>
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="Calocurb"
    subtitle="Doctor-guided, personalized care for lasting weight loss"
     />
     <ContentSection
        id="calocurb"
        title="Calocurb"
        subTitle="Benefits"
        paragraphs={[
            " Calocurb is a natural supplement made from hops extract that helps reduce snacking and portion sizes. A great option if you're looking for a plant-based, stimulant-free appetite suppressant.",
            "$89 for 30-day supply",
        ]}
        listItems={[
            "Naturally reduces appetite and supports mindful eating.",
            "Contains Amarasate™, a plant-based extract from hops flower.",
            "Helps curb cravings and snacking without stimulants or harsh chemicals.",
            "Supports weight management by promoting a feeling of fullness."
            ]}

        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Calocurb",
            description: "",
            treatments: [
                "$89 for 30-day supply.",
                "Non-prescription, plant-based supplement for appetite control.",
                "Works by activating gut-brain signals that promote satiety.",
                "Caffeine-free, stimulant-free, and gentle on the digestive system.",
                "Ideal for individuals seeking a natural approach to portion control and weight loss."
                ],
            // image: contentImage,
            bgClass: "blue-fade-bg",
            buttonText: "Get Started with Calocurb",
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
        className="bg-light calocurb-images"
        
         />
    
    <Footer />
    </>
  );
}

export default Calocurb;
