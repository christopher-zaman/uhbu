import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/tesamorelin-banner.webp';
import contentImage from '../assets/img/tesamorelin.jpg';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/weight-loss.png';
import afterImage from '../assets/img/aod-9604-2.jpg';

function Tesamorelin() {
  return (
    <>
    <TopBar />
    <NavBar />
    <Hero
    backgroundImage={banner}
    title="Tesamorelin"
    subtitle="For Fat Loss"
     />
     <ContentSection
        id="tesamorelin"
        title="Tesamorelin"
        subTitle="Tesamorelin"
        paragraphs={[
            "Another growth hormone–stimulating peptide, great for reducing stubborn belly fat and improving body composition—especially helpful for patients with insulin resistance or metabolic concerns."
        ]}
        listItems={[
            "Stimulates natural growth hormone release to support fat loss and lean muscle preservation.",
            "Clinically shown to reduce visceral (belly) fat, especially in individuals with metabolic concerns.",
            "May improve insulin sensitivity and lipid profiles.",
            "Supports overall body composition and metabolic health without suppressing natural hormone production."
            ]}
        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Tesamorelin",
            description: "",
            treatments: [
                "A synthetic peptide analog of GHRH (growth hormone–releasing hormone).",
                "Administered via subcutaneous injection, typically once daily.",
                "FDA-approved for reducing abdominal fat in HIV-associated lipodystrophy, and used off-label for weight loss and metabolic support.",
                "Often included in advanced weight loss and wellness protocols for those with insulin resistance or stubborn visceral fat.",
                "Well-tolerated with gradual, sustained effects on body fat distribution and metabolic markers."
                ],
            // image: contentImage,
            bgClass: "blue-fade-bg",
            buttonLink: "/tesamorelin"
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

export default Tesamorelin;
