import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/bpc-157-banner.png';
import contentImage from '../assets/img/bpc-157.jpg';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/sermorelin-1.jpg';
import afterImage from '../assets/img/bpc-157-2.webp';

function BPC157() {
  return (
    <>
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="BPC 157"
    subtitle="Body Protection Compound"
     />
     <ContentSection
        id="BPC157"
        title="BPC157"
        subTitle="Benefits"
        paragraphs={[
            "Known as the “Body Protection Compound,” this peptide helps heal joints, muscles, and the gut. Great for athletes, injury recovery, or anyone with inflammation.",
        ]}
        listItems={[
          "Promotes healing of muscles, tendons, ligaments, and the gastrointestinal tract.",
          "Supports recovery from injuries, surgeries, and inflammation-related conditions.",
          "Improves joint health, mobility, and connective tissue repair.",
          "Non-hormonal peptide with minimal side effects and strong regenerative potential."
        ]}

        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "BPC157",
            description: "",
            treatments: [
              "Known as the 'Body Protection Compound'—originally derived from gastric juice.",
              "Administered via subcutaneous injection or oral capsule depending on use case.",
              "Widely used by athletes and individuals with chronic pain or tissue damage.",
              "Supports gut lining repair, muscle regeneration, and faster recovery after strain.",
              "Can be part of a broader healing and performance protocol under clinical guidance."
            ],
            // image: contentImage,
            bgClass: "blue-fade-bg",
            buttonText: "",
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

export default BPC157;
