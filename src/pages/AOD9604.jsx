import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/aod-banner.webp';
import contentImage from '../assets/img/aod-9604.webp';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/weight-loss.png';
import afterImage from '../assets/img/aod-9604-2.jpg';

function AOD9604() {
  return (
    <>
    <TopBar />
    <NavBar />
    <Hero
    backgroundImage={banner}
    title="AOD 9604"
    subtitle="For Fat Loss"
     />
     <ContentSection
        id="aod-9604"
        title="AOD 9604"
        subTitle="What AOD 9604 Does"
        paragraphs={[
            "A fat-burning peptide that mimics the part of growth hormone responsible for breaking down fat. Great for weight loss support when paired with healthy habits."
        ]}
        listItems={[
            "Targets stubborn body fat by mimicking the fat-burning action of growth hormone.",
            "Helps accelerate weight loss when combined with a healthy diet and exercise.",
            "Supports metabolism without affecting blood sugar or growth hormone levels.",
            "Non-stimulant and generally well-tolerated with minimal side effects."
            ]}
        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "AOD 9604",
            description: "",
            treatments: [
                "A modified fragment of human growth hormone (HGH) designed specifically for fat reduction.",
                "Administered via subcutaneous injection, typically once daily.",
                "Often used in body contouring or weight management protocols.",
                "Promotes lipolysis (fat breakdown) while preventing lipogenesis (fat accumulation).",
                "Ideal for individuals struggling with diet-resistant fat or looking for non-hormonal weight loss support."
                ],
            // image: contentImage,
            bgClass: "blue-fade-bg",
            buttonText: "Learn More",
            buttonLink: "/aod-9604"
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

export default AOD9604;
