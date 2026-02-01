import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import FullscriptBanner from '../components/FullscriptBanner';
import Footer from '../components/Footer';
import ContentSection from '../components/ContentSection';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import contentImage from '../assets/img/alma-duo.jpg';
import beforeImage from '../assets/img/estrogen-1.webp';
import afterImage from '../assets/img/estrogen-2.jpg';
import PhoneChip from '../components/PhoneChip';
import duoVideo from '../assets/videos/what-is-ed.mp4';
import Contact from '../components/Contact';    
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';
import ConversionBlock from "../components/ConversionBlock";

function Duo(){
    const seo = usePageSEO();
    return(
        <>
        <SEO {...seo} />
        <TopBar />
        <NavBar />

         {/* HERO + OVERLAID BANNER */}
      <div className="hero-with-banner">
        <Hero
        backgroundImage="assets/img/banners/model-honey-tone-large.webp"
        backgroundVideo="/assets/video/alma-duo-video.mp4"
        // heroImage="/assets/img/hero-img.png"
        title="Alma Duo"
        subtitle="Introducing the DUO Treatment at Ultimate Health!"
        role="img"
        aria-label="Duo"
        videoUrl="https://www.youtube.com/watch?v=92jlApzokh0"
        cta={<PhoneChip inline={false} className='hero-phone-white fs-4'/>}
      />
      <div className="fullscript-banner-over-hero">
        <FullscriptBanner />
      </div>
      </div>


      <ContentSection
        id="alma-duo"
        title="Introducing the DUO Treatment"
        subTitle="Who Benefits from DUO?"
        paragraphs={[
            "DUO represents the forefront of \"His and Hers\" treatments, utilizing Alma Lasers' state-of-the-art shock wave technology. This non-invasive procedure uses low-intensity extracorporeal shock wave therapy (LI-ESWT) to increase blood flow to sexual organs, thereby enhancing function and reversing the effects of aging on vascular health. DUO treatments are designed to significantly improve sexual satisfaction for both genders.",
        ]}
        listItems={[
            "DUO is ideal for individuals looking for a non-surgical solution to sexual function issues, including erectile dysfunction, reduced sensitivity, and challenges in achieving satisfactory sexual performance. It offers an effective alternative to medications and a cutting-edge solution for those aiming to boost their sexual health discreetly. A consultation with Amanda Gaskin can help determine your suitability for this innovative treatment.",
            ]}


        image={contentImage}
        video={duoVideo}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "The DUO Experience",
            description: "",
            treatments: [
                "The Alma Duo system revitalizes sexual health by using LI-ESWT technology to boost blood flow, enhancing sexual pleasure and function in both men and women. Treatments are brief, under 15 minutes, without the need for downtime. Men can experience improved erection quality through restored penile blood flow, while women benefit from increased sensitivity and pleasure due to enhanced vaginal tissue blood flow. Administered with a handheld applicator, the treatment is painless, with no needles or anesthesia required."
                ],
            image: contentImage,
            bgClass: "blue-fade-bg",
            buttonLink: "payment-plans"
        },
        ]}
         />
        {/* <SideBySideImages
        title=""
        leftImage={beforeImage}
        rightImage={afterImage}
        leftAlt="Before Treatment"
        rightAlt="After Treatment"
        sectionId="before-after"
        className="bg-light duo-images"
        
         /> */}

         <ConversionBlock
  id="alma-duo-conversion"
  title="A simple, non-invasive way to support sexual wellness"
  subtitle="A discreet, in-office treatment designed to support blood flow, sensitivity, and confidence—without downtime."

  painTitle="If intimacy feels different than it used to, you’re not alone."
  pains={[
    "Erectile dysfunction or reduced performance confidence",
    "Decreased sensitivity or reduced satisfaction",
    "Changes in arousal, comfort, or response over time",
    "Looking for a non-surgical option without medications"
  ]}
  outcome="We’ll help you understand what’s contributing and whether a treatment like DUO is appropriate for your goals."

  solutionTitle="How Ultimate Health DPC Helps"
  solutionIntro="We keep the process private, medically guided, and personalized—so you feel clear and supported from the start."
  solutionBullets={[
    { title: "Discreet consultation", text: "A respectful conversation focused on your concerns, goals, and comfort level." },
    { title: "Medical oversight", text: "Guidance from a licensed provider with safety as the priority." },
    { title: "Non-invasive option", text: "An in-office approach designed for minimal disruption to your routine." },
    { title: "Clear next steps", text: "If you’re a good candidate, we outline a plan and what results to expect." }
  ]}
  solutionClosing="All treatments are provided only after a full medical evaluation. Not every option is appropriate for every patient."

  processTitle="What to Expect"
  steps={[
    { title: "Consult & evaluate", text: "Discuss symptoms, goals, and health history to ensure it’s a fit." },
    { title: "Plan your sessions", text: "We’ll recommend a schedule and walk you through what to expect." },
    { title: "Support & follow-up", text: "Track progress and adjust your plan as needed over time." }
  ]}

  ctaTitle="Want to see if DUO is right for you?"
  ctaText="Call or text to schedule a confidential consultation."
  ctaType="phone"
  phoneClassName="hero-phone-white fs-4"
/>

        <Contact />
        <Footer />
        </>
    );
}

export default Duo;