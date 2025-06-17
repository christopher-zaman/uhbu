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
import afterImage from '../assets/img/progesterone-2.jpg';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';

function Progesterone() {
  const seo = usePageSEO();
  return (
    <>
    <SEO {...seo} />
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="Progesterone"
    subtitle="Feel like yourself again with progesterone therapy"
     />
     <ContentSection
        id="progesterone"
        title="Progesterone"
        subTitle="Benefits"
        paragraphs={[
            "Helps with mood, sleep, and balancing estrogen. It also plays a calming role and is especially helpful in reducing anxiety, promoting restful sleep, and supporting bone health.",
        ]}
        listItems={[
            "Essential for balancing estrogen and protecting uterine health in hormone therapy.",
            "Helps regulate mood, support better sleep, and reduce anxiety or irritability.",
            "Promotes a healthy menstrual cycle and supports fertility in premenopausal women.",
            "May improve symptoms like bloating, breast tenderness, and hormonal headaches."
            ]}

        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Progesterone",
            description: "",
            treatments: [
                "Prescribed as part of a personalized hormone therapy plan, often alongside estrogen.",
                "Available in oral capsules, creams, and vaginal forms depending on your needs.",
                "Bioidentical options offer a natural match to the body’s own progesterone.",
                "Commonly used during perimenopause, menopause, or after estrogen-only therapy to maintain hormonal balance.",
                "Monitored through lab work and regular follow-ups to ensure safety and effectiveness."
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
        className="bg-light progesterone-images"
        
         />
    
    <Footer />
    </>
  );
}

export default Progesterone;
