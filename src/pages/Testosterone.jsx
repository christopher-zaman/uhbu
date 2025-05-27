import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/testosterone-banner.jpg';
import contentImage from '../assets/img/testosterone.webp';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/testosterone-1.png';
import afterImage from '../assets/img/testosterone-2.jpg';

function Testosterone() {
  return (
    <>
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="Testosterone"
    subtitle=""
     />
     <ContentSection
        id="testosterone"
        title="Testosterone"
        subTitle="Benefits"
        paragraphs={[
            "Often thought of as a \"male\" hormone, but women need it too! It supports energy, mental clarity, muscle tone, metabolism, mood, sex drive—and even heart health.",
        ]}
        listItems={[
            "Boosts energy, motivation, and overall vitality.",
            "Improves muscle mass, strength, and fat metabolism.",
            "Supports libido, erectile function, and sexual performance.",
            "Enhances mood, focus, and mental clarity."
            ]}

        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Testosterone",
            description: "",
            treatments: [
                "Offered as injections, topical gels, or pellets—based on lifestyle and preference.",
                "Prescribed following lab testing to confirm low testosterone levels.",
                "Monitored regularly to ensure safe and effective dosing.",
                "Often used to treat symptoms of andropause or age-related testosterone decline.",
                "Can be part of a broader wellness plan that includes exercise, nutrition, and lifestyle coaching."
                ],
            // image: contentImage,
            bgClass: "blue-fade-bg",
            buttonText: "Learn More",
            buttonLink: "/testosterone"
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
        className="bg-light testosterone-images"
        
         />
    
    <Footer />
    </>
  );
}

export default Testosterone;
