import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import video from '../assets/videos/hormone-replacement-therapy.mp4';
import contentImage from '../assets/img/hormone-therapy.jpg';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/hormone-therapy-1.jpg';
import afterImage from '../assets/img/hormone-therapy-2.jpg';

function HormoneTherapy() {
  return (
    <>
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundVideo={video}
    title="Hormone Therapy"
    subtitle="Doctor-guided, personalized care for lasting weight loss"
     />
     <ContentSection
        id="hormone-therapy"
        title="Hormone Therapy"
        subTitle="Benefits"
        paragraphs={[
            "Hormones play a big role in how you feel, look, and function—and when they’re out of balance, everything feels off. Whether you're going through peri-menopause, menopause, or just not feeling like yourself, we’re here to help you feel your best again.",
        ]}
        listItems={[
            "Restores hormonal balance to improve mood, energy, and overall well-being.",
            "Helps relieve symptoms of menopause and perimenopause, such as hot flashes and night sweats.",
            "Supports better sleep, mental clarity, and sexual health.",
            "Can promote healthier skin, bone density, and metabolism over time."
            ]}

        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Hormone Therapy",
            description: "",
            treatments: [
                "Includes estrogen, progesterone, and/or testosterone—bioidentical options available.",
                "Delivered via creams, patches, pellets, or oral formulations based on patient preference.",
                "Ongoing support and lab monitoring to ensure safe, effective hormone levels.",
                "Ideal for individuals experiencing hormonal imbalances due to aging, menopause, or chronic stress."
                ],
            // image: contentImage,
            bgClass: "blue-fade-bg",
            buttonText: "Learn More",
            buttonLink: "/hormone-replacement-therapy"
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
        className="bg-light hormone-therapy-images"
        
         />
    
    <Footer />
    </>
  );
}

export default HormoneTherapy;
