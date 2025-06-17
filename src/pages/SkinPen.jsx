import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import video from '../assets/videos/skin-pen.mp4';
import contentImage from '../assets/img/skin-pen.webp';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/skin-pen-1.jpg';
import afterImage from '../assets/img/skin-pen-2.jpg';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';

function SkinPen() {
  const seo = usePageSEO();
  return (
    <>
    <SEO {...seo} />
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundVideo={video}
    title="✨ SkinPen Microneedling"
    subtitle="$299/session"
     />
     <ContentSection
        id="skinpen"
        title="Skin Pen"
        subTitle="Benefits"
        paragraphs={[
            "Our go-to for smoother, firmer, more radiant skin. SkinPen stimulates collagen, fades acne scars, and improves texture and tone."
        ]}
        listItems={[
            "Improve the appearance of acne scars",
            "Smooth the appearance of wrinkles on the neck",
            "First microneedling device brand to achieve FDA clearance",
            "👉 We recommend 3–4 sessions for best results.",
            ]}

        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Skin Pen Facts",
            description: "",
            treatments: [
                "Clinically tested and proven with over 90 validation studies",
                "Backed by a commitment to safety and efficacy",
                "Performed by trusted dermatologists and aestheticians",
                "Convenient, requiring little to no downtime",
                "Simple, with results in just one to three 30-minute sessions",
                "Designed to work without chemicals, heat, or stress",
                "Designed, engineered, and manufactured in North America",
                ],
            // image: contentImage,
            bgClass: "blue-fade-bg",
            buttonText: "Book an Appointment",
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

export default SkinPen;
