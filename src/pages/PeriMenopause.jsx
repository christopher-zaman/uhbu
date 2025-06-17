import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/estrogen-banner.png';
import contentImage from '../assets/img/peri-menopause.png';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/estrogen-1.webp';
import afterImage from '../assets/img/peri-menopause-2.webp';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';

function PeriMenopause() {
  const seo = usePageSEO();
  return (
    <>
    <SEO {...seo} />
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="Perimenopause"
    subtitle=""
     />
     <ContentSection
        id="peri-menopause"
        title="Peri-menopause"
        subTitle="Benefits"
        paragraphs={[
            "Peri-menopause is the time before menopause when hormones begin to shift. It can start as early as your 30s or 40s and can last for several years. You may still have periods, but you might notice:",
        ]}
        listItems={[
            "Irregular cycles",
            "Hot flashes",
            "Night sweats",
            "Mood swings or anxiety",
            "Weight gain",
            "Brain fog",
            "Low libido",
            "Poor sleep"
            ]}


        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Peri-menopause",
            description: "",
            treatments: [
                "Comprehensive hormone evaluation to identify imbalances in estrogen, progesterone, and other key markers.",
                "Personalized hormone therapy using bioidentical estrogen and/or progesterone as needed.",
                "Lifestyle and nutritional guidance to support hormonal health and reduce symptom severity.",
                "Targeted supplements and adaptogens to ease mood swings, sleep issues, and energy dips.",
                "Ongoing monitoring and support to adjust treatment as your body transitions through perimenopause."
                ],

            // image: contentImage,
            bgClass: "blue-fade-bg",
            buttonText: "Schedule a Hormone Evaluation",
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
        className="bg-light peri-menopause-images"
        
         />
    
    <Footer />
    </>
  );
}

export default PeriMenopause;
