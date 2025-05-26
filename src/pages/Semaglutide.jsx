import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/semaglutide-banner.webp';
import contentImage from '../assets/img/semaglutide.png';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/before.png';
import afterImage from '../assets/img/after.jpg';

function Semaglutide() {
  return (
    <>
    <TopBar />
    <NavBar />
    <Hero
    backgroundImage={banner}
    title="Semaglutide Weight Loss"
    subtitle="Doctor-guided, personalized care for lasting weight loss"
     />
     <ContentSection
        id="semaglutide"
        title="Semaglutide Weight Loss"
        subTitle="What's Included"
        paragraphs={[
            "Semaglutide is a weekly injection that helps reduce appetite, control cravings, and support long-term weight loss. It works by mimicking a natural hormone that helps regulate blood sugar and hunger. Great for patients with or without diabetes.",
            "Semaglutide is an FDA-approved GLP-1 receptor agonist that helps control blood sugar and reduce appetite.",
            "Our doctor-guided program includes weekly check-ins, nutrition guidance, and personalized support.",
            "Experience real results, safely and sustainably — without the high costs of insurance-based care."
        ]}
        listItems={[
            "GLP-1 injections (Ozempic/Wegovy)",
            "$100/week (all doses)",
            "Weekly check-ins with your provider",
            "Customized nutrition and lifestyle coaching",
            "No insurance or referral needed"
        ]}
        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Semaglutide - $100 / week (all doses)",
            description: "",
            treatments: [
                "GLP-1 injections (Ozempic/Wegovy)",
                "Weekly check-ins with your provider",
                "Customized nutrition and lifestyle coaching",
                "No insurance or referral needed"
                ],
            // image: contentImage,
            bgClass: "blue-fade-bg",
            buttonText: "Learn More",
            buttonLink: "/semaglutide"
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

export default Semaglutide;
