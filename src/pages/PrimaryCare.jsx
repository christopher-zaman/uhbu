import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/primary-care-banner.png';
import contentImage from '../assets/img/gallery-9.jpg';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/naltrexone-1.png';
import afterImage from '../assets/img/naltrexone-2.jpg';
import Features from '../components/Features';
import FeatureItems from '../components/FeatureItems';
import Gallery from '../components/Gallery';
import Services from '../components/Services';

import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';

const featureList = [
  { 
    icon: "bi-eye", 
    title: "💨 Oxytocin Nasal Spray & Tablets", 
    subtext: "Known as the “love hormone,” oxytocin can help increase feelings of closeness, arousal, and emotional bonding. It may also enhance natural lubrication and enjoyment of intimacy", 
    color: "#ffbb2c" 
  },
  { 
    icon: "bi-infinity", 
    title: "💉 PT-141 Peptide Therapy", 
    subtext: "This peptide is a powerful libido booster that works on the brain to stimulate arousal. Great for women experiencing low sexual desire or difficulty getting “in the mood”", 
    color: "#5578ff" 
  },
  { 
    icon: "bi-mortarboard", 
    title: "✨ Non-Surgical Labiaplasty", 
    subtext: "Tightens and refines the appearance of the labia using radiofrequency or laser energy—no surgery, no downtime, just a smoother, more youthful look that enhances self-esteem and intimacy", 
    color: "#e80368" 
  },
];

function PrimaryCare() {
  const seo = usePageSEO();
  return (
    <>
    <SEO {...seo} />
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="Primary Care"
    textColor="rgba(1, 3, 112, 0.75)"
    subtitle="Direct Primary Care – Leesburg Office"
     />
     <ContentSection
        id="primarycare"
        title="Primary Care"
        subTitle="What’s Included in Your $99/Month Membership:"
        paragraphs={[
            "Imagine having a provider who knows you, listens to you, and is just a text away. That’s what you get with Direct Primary Care (DPC) at Ultimate Health DPC in Leesburg.",
            "We keep healthcare simple, personal, and affordable—with no insurance, no copays, and no rushed visits. Just real care, when you need it."
        ]}
        listItems={[
            "Same-day or next-day appointments",
            "No copays or surprise bills—ever",
            "24/7 text access to Amanda, your Nurse Practitioner",
            "Basic labs included (like cholesterol, blood sugar, thyroid, etc.)",
            "Discounts on additional services",
            "Discounts on Sexual wellness",
            "Discounts on Weight loss",
            "Discounts on Aesthetic procedures",
            "Longer visits that actually allow time to talk",
            "Help coordinating care with specialists or other providers when needed",
            ]}

        image={contentImage}
        imageClassName="shadow rounded"
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Is Direct Primary Care Right for You?",
            description: (
                <>
                <p>DPC is a great fit for anyone who wants more access, more time, and more personalized care—without breaking the bank.
                </p>
                <p><strong>You’ll love DPC if you’re:</strong></p>
                </>
            ) ,

            treatments: [
                "Tired of waiting weeks for an appointment",
                "Wanting longer visits where you’re actually heard",
                "Self-employed or without insurance",
                "Paying high premiums but still not getting great care",
                "Managing chronic conditions like high blood pressure, diabetes, or thyroid issues",
                "Looking for a provider who treats the whole person—not just symptoms",
                "A small business owner wanting to offer affordable care to your team",
                "A parent who needs quick, convenient access for the whole family",
                ],
                extraText: "You don’t need insurance to be cared for. You just need a provider who puts you first. That’s what we do here.",
            // image: contentImage,
            bgClass: "blue-fade-bg",
            buttonText: "Schedule an Appointment",
            buttonLink: "contact"
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
        className="bg-light"
        
         /> */}

        {/* add primary care services to the features list */}
         {/* <FeatureItems
         items={featureList}
         topTitle="top title"
         middleTitle="middle title"
         /> */}

    {/* <Services
    bgClass=""
    backgroundImage="/assets/img/subscribe.png"
    title="Primary Care Services"
    services={[
    {
      title: 'Women\'s Health ',
      description: ['Platelet-rich plasma to improve sensitivity & firmness'],
      image: '/assets/img/wellness/p-shot.jpg',
      link: '/p-shot',
    },
    {
      title: 'Men\'s Health',
      description: ['Acoustic wave therapy for stronger erections & blood flow'],
      image: '/assets/img/wellness/alma-duo.jpg',
      link: '/alma-duo',
    },
    {
      title: 'Telemedicine',
      description: ['Acoustic wave therapy for stronger erections & blood flow'],
      image: '/assets/img/wellness/alma-duo.jpg',
      link: '/alma-duo',
    },
    
    {
      title: 'Housecalls',
      description: ['Acoustic wave therapy for stronger erections & blood flow'],
      image: '/assets/img/wellness/alma-duo.jpg',
      link: '/alma-duo',
    },
    {
      title: '24 Hour Health Care',
      description: ['Acoustic wave therapy for stronger erections & blood flow'],
      image: '/assets/img/wellness/alma-duo.jpg',
      link: '/alma-duo',
    },
    {
      title: 'Mental Health',
      description: ['Acoustic wave therapy for stronger erections & blood flow'],
      image: '/assets/img/wellness/alma-duo.jpg',
      link: '/alma-duo',
    },
  ]}
/> */}

    <Footer />
    </>
  );
}

export default PrimaryCare;
