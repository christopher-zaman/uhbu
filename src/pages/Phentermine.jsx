import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/phentermine-banner.png';
import contentImage from '../assets/img/phentermine.jpg';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/phentermine-1.png';
import afterImage from '../assets/img/phentermine-2.jpg';

function Phentermine() {
  return (
    <>
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="Phentermine"
    subtitle="Doctor-guided, personalized care for lasting weight loss"
     />
     <ContentSection
        id="phentermine"
        title="Phentermine"
        subTitle="Benefits"
        paragraphs={[
            " Phentermine is a short-term appetite suppressant that helps jumpstart weight loss. It works best when combined with lifestyle changes like healthy eating and exercise. We’ll help determine if it’s safe and right for you.",
        ]}
        listItems={[
            "Powerful appetite suppressant that helps reduce food cravings.",
            "Stimulates the central nervous system to increase energy and metabolism.",
            "Clinically proven to aid in short-term weight loss when combined with diet and exercise.",
            "Typically results in noticeable weight loss within the first few weeks of use."
            ]}

        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Phentermine",
            description: "",
            treatments: [
            "FDA-approved prescription medication for short-term use (generally up to 12 weeks).",
            "Taken orally once daily, usually in the morning to avoid insomnia.",
            "Most effective when combined with a supervised weight loss program and lifestyle changes.",
            "Not recommended for individuals with heart conditions, high blood pressure, or certain mental health conditions."
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
        className="bg-light phentermine-images"
        
         />
    
    <Footer />
    </>
  );
}

export default Phentermine;
