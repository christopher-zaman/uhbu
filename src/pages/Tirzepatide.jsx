import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import video from '../assets/videos/Tirzepatide.mp4';
import contentImage from '../assets/img/tirzepatide.jpg';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/tirzepatide-1.jpg';
import afterImage from '../assets/img/tirzepatide-2.png';

function Tirzepatide() {
  return (
    <>
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundVideo={video}
    title="Tirzepatide"
    subtitle="Doctor-guided, personalized care for lasting weight loss"
     />
     <ContentSection
        id="tirzepatide"
        title="Tirzepatide"
        subTitle="Benefits"
        paragraphs={[
            " Tirzepatide is another powerful weekly injection that targets two hunger-related hormones, helping you feel fuller, longer. It’s one of the most effective tools for both weight loss and blood sugar control.",
            "$150/week (2.5 mg & 5 mg)",
            "$200/week (7.5 mg & 10 mg)"
        ]}
        listItems={[
            "Significant weight loss — up to 15–22% in clinical trials depending on dose and duration.",
            "Improved appetite control — reduces hunger and increases feelings of fullness.",
            "Better blood sugar management — lowers A1C levels and stabilizes glucose throughout the day.",
            "Dual-action support — targets both GIP and GLP-1 receptors for enhanced metabolic benefits."
            ]}

        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Tirzepatide",
            description: "",
            treatments: [
                "$150/week (2.5 mg & 5 mg)",
                "$200/week (7.5 mg & 10 mg)",
                "Clinically proven to aid weight loss and type 2 diabetes management.",
                "Once-weekly injection for convenient, consistent dosing.",
                "Improves insulin sensitivity and helps lower A1C levels.",
                "Supports appetite regulation by enhancing satiety and reducing cravings."
                ],
            // image: contentImage,
            bgClass: "blue-fade-bg",
            buttonText: "Learn More",
            buttonLink: "/tirzepatide"
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

export default Tirzepatide;
