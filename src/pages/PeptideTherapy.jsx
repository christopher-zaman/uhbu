import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/estrogen-banner.png';
import sideImage from '../assets/img/peptide.jpg';
import contentImage from '../assets/img/peptide-therapy.png';
import thirdImage from '../assets/img/what-is-peptide-therapy.webp';
import fourthImage from '../assets/img/fourth-peptide.png';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/peptide-therapy-1.jpg';
import afterImage from '../assets/img/peptide-therapy-2.png';
import TextImageSection from '../components/TextImageSection';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';

function PeptideTherapy() {
    const seo = usePageSEO();
  return (
    <>
    <SEO {...seo} />
    <TopBar />
    <NavBar />
    <Hero
    backgroundImage={banner}
    title="Peptide Therapy"
    subtitle=""
     />
     <ContentSection
        id="peptide-therapy"
        title="Peptide Therapy"
        subTitle="What Are Peptides?"
        paragraphs={[
            "Feeling tired, slow to recover, struggling with weight, or just not quite yourself? Peptide therapy could be the missing piece. At Ultimate Health DPC in Leesburg, we offer cutting-edge peptide treatments to help you look, feel, and perform at your best."
        ]}
        listItems={[
            "Peptides are short chains of amino acids—like little messengers that tell your body to heal, repair, and perform certain functions. Think of them as natural boosters that work with your body to improve energy, sleep, metabolism, muscle recovery, and even skin health."
            ]}
        image={contentImage}
        />

        <ContentSection
        id="why-peptide-therapy"
        title="Why Peptide Therapy?"
        subTitle=""
        paragraphs={[
            "As we age, our body slows down in producing the hormones and proteins that keep us feeling young and vibrant. Peptides help restart that natural process, making them a great option for"
        ]}
        listItems={[
            "Weight loss support",
            "Muscle building and faster recovery",
            "Better sleep",
            "Improved focus and brain clarity",
            "Boosted immune system",
            "Anti-aging and skin rejuvenation",
            "Increased libido and sexual function",
            "Joint and tissue healing"
            ]}
        image={thirdImage}
        />

         <TextImageSection 
         bgClass="sexual-wellness-bg"
         section={{
            title: 'Peptides We Offer at Ultimate Health (Leesburg)',
            titleClass: 'blurred-bg',
            description: (
            <>
                <ul className="blurred-bg p-2">
                    
                    <li><span className="d-inline-block"><strong> 💉 CJC-1295 / Ipamorelin</strong> – This powerful duo boosts growth hormone while minimizing side effects. Great for fat burning, lean muscle gain, better recovery, and deep sleep.</span></li>
                    <li><span className="d-inline-block"><strong> 💉 BPC-157</strong> – Known as the 'Body Protection Compound,' this peptide helps heal joints, muscles, and the gut. Great for athletes, injury recovery, or anyone with inflammation.</span></li>
                
                    <li><span className="d-inline-block"><strong> 💉 AOD-9604</strong> – A fat-burning peptide that mimics the part of growth hormone responsible for breaking down fat. Great for weight loss support when paired with healthy habits.</span></li>
                    
                </ul>
            </>
            ),
            image: sideImage,
            bgClass: "blue-fade-bg",
            buttonText: "Get Started with Peptides",
            buttonLink: "contact"
        }}
         />

         <ContentSection
        id="how-to-get-started-peptide-therapy"
        title="How Do I Get Started?"
        subTitle=""
        paragraphs={[
            "We’ll draw your labs right here in our office to get a full picture of your hormone and metabolic health. Then we’ll create a personalized peptide plan just for you.",
            "You’ll receive your peptide therapy in-office or as a prescription for home use—whichever fits your lifestyle best."
        ]}
        listItems={[
            
            ]}
        image={fourthImage}
        />

        <SideBySideImages
        title=""
        leftImage={beforeImage}
        rightImage={afterImage}
        leftAlt="Before Treatment"
        rightAlt="After Treatment"
        sectionId="before-after"
        className="bg-light peptide-therapy-img"

         />
    
    <Footer />
    </>
  );
}

export default PeptideTherapy;
