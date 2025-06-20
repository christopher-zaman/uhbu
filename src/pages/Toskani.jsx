import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/banners/toskani-banner.webp';
import contentImage from '../assets/img/toskani.jpg';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/toskani-1.jpg';
import afterImage from '../assets/img/toskani-2.webp';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';

function Toskani() {
  const seo = usePageSEO();
  return (
    <>
    <SEO {...seo} />
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="Toskani Peptide Cocktails"
    subtitle=""
     />
     <ContentSection
        id="toskani"
        title="Toskani"
        subTitle="Benefits"
        paragraphs={[
            "We’re proud to carry Toskani’s luxury skin care injectables, made with potent peptides and nutrients for:"
        ]}
        listItems={[
            "Skin rejuvenation",
            "Hair growth and scalp health",
            "Anti-aging and firming",
            "Hydration and brightness",
            ]}

        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Toskani Facts",
            description: "",
            treatments: [
                "These treatments are tailored to your specific skin or hair goals—think of it as a luxury cocktail for your face or scalp.",
                ],
            // image: contentImage,
            bgClass: "blue-fade-bg",
            buttonText: "Schedule an Appointment",
            buttonLink: "https://app.elationemr.com/book/UltimateHealthDPC?appointment_types"
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

export default Toskani;
