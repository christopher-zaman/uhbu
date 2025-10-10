import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/pt-141-banner.jpg';
import contentImage from '../assets/img/pt-141-purple.jpg';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/get-fit.jpg';
import afterImage from '../assets/img/bpc-157-2.webp';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';

function PT141() {
  const seo = usePageSEO();
  return (
    <>
    <SEO {...seo} />
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="PT-141"
    subtitle="for Sexual Wellness"
    textColor="rgba(1, 3, 112, 0.75)"
     />
     <ContentSection
        id="PT-141"
        title="PT-141"
        subTitle="Benefits"
        paragraphs={[
            "Supports libido and sexual function—works for both men and women. Can also enhance energy and mood.",
        ]}
        listItems={[
            "Enhances libido and sexual function in both men and women.",
            "Works directly on the nervous system to boost arousal and desire.",
            "Can improve intimacy without affecting hormones like testosterone or estrogen.",
            "May also support mood and overall sense of well-being."
            ]}

        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "PT-141",
            description: "",
            treatments: [
                "Administered as a subcutaneous injection, typically as needed before sexual activity.",
                "FDA-approved for treatment of hypoactive sexual desire disorder (HSDD) in premenopausal women.",
                "Used off-label for men with erectile dysfunction or low libido.",
                "Begins working within hours and can enhance physical and psychological sexual response.",
                "Often included in sexual wellness protocols alongside hormone therapy or lifestyle interventions."
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
        className="bg-light"
        
         />
    
    <Footer />
    </>
  );
}

export default PT141;
