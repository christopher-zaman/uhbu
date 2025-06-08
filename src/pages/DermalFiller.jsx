import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/banners/dermal-filler-banner.jpg';
import contentImage from '../assets/img/dermal-filler.jpg';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/dermal-filler-1.webp';
import afterImage from '../assets/img/dermal-filler-2.png';

function DermalFiller() {
  return (
    <>
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="✨ Dermal Fillers"
    subtitle=""
    textColor="rgba(255, 255, 255, 1)"
     />
     <ContentSection
        id="dermal-filler"
        title="Dermal Fillers"
        subTitle=""
        paragraphs={[
            "We use premium fillers to restore volume, enhance facial features, and soften lines—with a focus on natural, balanced results. Whether you're looking for subtle cheek lift, tear trough correction, or jawline definition, we've got you covered.",
            "We proudly offer the RHA Collection—designed to move with your natural facial expressions for results that are soft, smooth, and never stiff.",
            "💋 Specializing in Natural Lip Enhancement Our approach to lip filler is all about balance, symmetry, and enhancing your natural shape—so your lips look refreshed, not overdone."

        ]}
        listItems={[
            "Daxxify – $9/unit (long-lasting wrinkle relaxer)",
            "Botox – $13/unit (the gold standard in aesthetics)",
            "Xeomin – $10/unit (a cleaner, preservative-free option)",
            "Jeuveau – $10/unit (great for frown lines and forehead wrinkles)",
            "Dysport – $8/unit (spreads easily, great for larger areas)",
            ]}

        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Dermal Fillers",
            description: "",
            treatments: [
                "We’ll help you choose the best product for your goals and facial anatomy.",
                ],
            // image: contentImage,
            bgClass: "blue-fade-bg",
            buttonLink: "/dermal-filler"
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

export default DermalFiller;
