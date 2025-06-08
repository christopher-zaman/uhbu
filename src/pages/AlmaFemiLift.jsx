import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/banners/alma-femi-lift-banner.webp';
import contentImage from '../assets/img/alma-femi-lift.jpg';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/alma-femi-lift-1.jpg';
import afterImage from '../assets/img/alma-femi-lift-2.webp';

function AlmaFemiLift() {
  return (
    <>
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="✨ ALMA FemiLift for Facial Resurfacing"
    subtitle=""
    textColor="rgba(255, 255, 255, 1)"
     />
     <ContentSection
        id="alma-femi-lift"
        title="ALMA FemiLift for Facial Resurfacing"
        subTitle=""
        paragraphs={[
            "Yes, it’s not just for intimate wellness! Our ALMA FemiLift laser can also be used to resurface the face—reducing fine lines, acne scars, and uneven tone with minimal downtime.",
            "We proudly offer the RHA Collection—designed to move with your natural facial expressions for results that are soft, smooth, and never stiff.",

        ]}
        listItems={[
            ]}

        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Let’s Bring Out Your Glow—Naturally",
            description: "",
            treatments: [
                "Whether you're new to aesthetics or ready for a full glow-up, we’re here to walk you through every option with honesty, care, and a keen eye for natural results.",
                "Call today to schedule your consultation and discover what’s possible—beautifully, naturally, confidently"
                ],
            // image: contentImage,
            bgClass: "blue-fade-bg",
            buttonText: "Get Started with Alma Femilift",
            buttonLink: "/contact"
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
        className="bg-light alma-femi-lift-images"
        
         />
    
    <Footer />
    </>
  );
}

export default AlmaFemiLift;
