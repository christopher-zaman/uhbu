import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/retatrutide-banner.jpg';
import contentImage from '../assets/img/retatrutide.webp';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/retatrutide-1.jpg';
import afterImage from '../assets/img/retatrutide-2.jpg';

function Retatrutide() {
  return (
    <>
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="Retatrutide"
    subtitle="Doctor-guided, personalized care for lasting weight loss"
     />
     <ContentSection
        id="retatrutide"
        title="Retatrutide"
        subTitle="Benefits"
        paragraphs={[
            "Retatrutide is one of the newest weekly injections showing amazing promise for weight loss. It works on multiple hunger and metabolism pathways and may be a good fit if other meds haven’t worked for you.",
            "$150/week",
        ]}
        listItems={[
            "Triple hormone agonist — targets GLP-1, GIP, and glucagon receptors for enhanced weight loss.",
            "Promising clinical trial results show greater weight loss than current GLP-1 therapies.",
            "Supports appetite suppression, increased energy expenditure, and improved metabolic control.",
            "Potential to aid in both obesity and type 2 diabetes management once FDA-approved."
            ]}

        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Retatrutide",
            description: "",
            treatments: [
                "Not yet commercially available — currently in clinical trial phase.",
                "Designed to offer superior weight loss outcomes compared to single or dual agonists.",
                "May improve glucose regulation, fat burning, and reduce liver fat.",
                "Once-weekly injectable formulation being evaluated for safety and long-term use.",
                "Ideal for future consideration in chronic weight management once approved by FDA."
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
        className="bg-light retatrutide-images"
        
         />
    
    <Footer />
    </>
  );
}

export default Retatrutide;
