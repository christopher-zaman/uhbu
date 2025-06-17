import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/estrogen-banner.png';
import contentImage from '../assets/img/estrogen.jpg';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/estrogen-1.webp';
import afterImage from '../assets/img/estrogen-2.jpg';

import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';

function Estrogen() {
  const seo = usePageSEO();
  return (
    <>
    <SEO {...seo} />
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="Estrogen"
    subtitle="Feel like yourself again with estrogen therapy"
     />
     <ContentSection
        id="estrogen"
        title="Estrogen"
        subTitle="Benefits"
        paragraphs={[
            "Supports brain function, bone strength, heart health, and keeps vaginal tissue healthy. It’s also responsible for regulating your menstrual cycle.",
        ]}
        listItems={[
            "Replenishes declining estrogen levels to relieve common menopause and perimenopause symptoms.",
            "Reduces hot flashes, night sweats, and vaginal dryness for improved comfort and quality of life.",
            "Supports mood stability, bone strength, and cognitive function.",
            "May improve skin elasticity, libido, and urinary health."
            ]}

        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Estrogen",
            description: "",
            treatments: [
                "Available in creams, patches, pills, and vaginal inserts—customized to your needs.",
                "Prescribed after lab testing to ensure safe and personalized dosing.",
                "Often combined with progesterone for women with an intact uterus to maintain hormonal balance.",
                "Ideal for women in perimenopause, menopause, or with estrogen deficiency symptoms."
                ],
            // image: contentImage,
            bgClass: "blue-fade-bg",
            buttonLink: "/estrogen"
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
        className="bg-light estrogen-images"
        
         />
    
    <Footer />
    </>
  );
}

export default Estrogen;
