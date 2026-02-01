import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';
import FullscriptBanner from '../components/FullscriptBanner';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/primary-care-banner.png';
import contentImage from '../assets/img/gallery-9.jpg';
import PhoneChip from '../components/PhoneChip';
import TextImageSection from '../components/TextImageSection';
import sideImage from '../assets/img/membership-based-primary-health-care.webp';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';
import ConversionBlock from "../components/ConversionBlock";

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
    
  {/* HERO + OVERLAID BANNER */}
    <div className="hero-with-banner">
    <Hero
    backgroundImage={banner}
    title="Primary Care"
    subtitle="Direct Primary Care – Leesburg Office"
    cta={<PhoneChip inline={false} className='fs-4'/>}
    textColor="rgba(1, 3, 112, 0.75)"
     />
    <div className="fullscript-banner-over-hero">
      <FullscriptBanner />
    </div>
    </div>

     <ContentSection
        id="primarycare"
        title="Primary Care"
        subTitle="What’s Included in Your $99/Month Membership:"
        cta={<PhoneChip inline={false}/>}

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


        

        {/* New Section */}

        <TextImageSection 
         bgClass="sexual-wellness-bg"
         section={{
            title: 'Is Direct Primary Care Right for You?',
            titleClass: 'blurred-bg',
            description: (
            <>
                <ul className="blurred-bg p-2 checklist">
                  <li>
                    <i className="bi bi-check2-circle" aria-hidden="true"></i>
                    <span>DPC is a great fit for anyone who wants more access, more time, and more personalized care—without breaking the bank.</span>
                  </li>
                  <li className="mt-2 fw-semibold">You’ll love DPC if you’re:</li>
                  <li><i className="bi bi-check2-circle" aria-hidden="true"></i><span>Tired of waiting weeks for an appointment</span></li>
                  <li><i className="bi bi-check2-circle" aria-hidden="true"></i><span>Wanting longer visits where you’re actually heard</span></li>
                  <li><i className="bi bi-check2-circle" aria-hidden="true"></i><span>Self-employed or without insurance</span></li>
                  <li><i className="bi bi-check2-circle" aria-hidden="true"></i><span>Paying high premiums but still not getting great care</span></li>
                  <li><i className="bi bi-check2-circle" aria-hidden="true"></i><span>Managing chronic conditions like high blood pressure, diabetes, or thyroid issues</span></li>
                  <li><i className="bi bi-check2-circle" aria-hidden="true"></i><span>Looking for a provider who treats the whole person—not just symptoms</span></li>
                  <li><i className="bi bi-check2-circle" aria-hidden="true"></i><span>A small business owner wanting to offer affordable care to your team</span></li>
                  <li><i className="bi bi-check2-circle" aria-hidden="true"></i><span>A parent who needs quick, convenient access for the whole family</span></li>
                  <li><i className="bi bi-check2-circle" aria-hidden="true"></i><span>You don’t need insurance to be cared for. You just need a provider who puts you first. That’s what we do here.</span></li>
                <li>
                </li>
                    📞 Call us at{" "}
                    <a href="tel:+13529016582" className="phone-chip unstyled-link">(352) 901-6582</a>{" "}
                    to book your consultation.
                    <br></br><br></br>
                </ul>
            </>
            ),
            image: sideImage,
            bgClass: "blue-fade-bg",
            //buttonText: "Get Started with Regenerative Therapy",
            //buttonLink: "contact"
        }}
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
<ConversionBlock
  id="primary-care-conversion"
  title="Primary care that actually feels personal"
  subtitle="More access. More time. Clear communication. Care that fits real life."

  painTitle="If primary care has felt frustrating, you’re not alone."
  pains={[
    "Long waits for appointments when you’re actually sick",
    "Rushed visits where you don’t feel heard",
    "Surprise bills, confusing copays, and insurance headaches",
    "No clear way to reach your provider between visits"
  ]}
  outcome="Direct Primary Care is designed to remove friction—so getting care feels simple, consistent, and supportive."

  solutionTitle="How Ultimate Health DPC Helps"
  solutionIntro="We focus on relationship-based care with better access and real follow-through—without the usual barriers."
  solutionBullets={[
    { title: "More access", text: "Same-day or next-day visits when you need them." },
    { title: "More time", text: "Longer appointments so you can actually talk through what’s going on." },
    { title: "Direct communication", text: "Text access so questions don’t turn into unnecessary urgent care visits." },
    { title: "Care coordination", text: "Help navigating referrals, labs, and specialist care when needed." }
  ]}
  solutionClosing="Whether you’re managing a chronic condition or just want a provider who knows you—this model is built for real support."

  processTitle="What to Expect"
  steps={[
    { title: "Reach out", text: "Call or text to ask questions and schedule your first visit." },
    { title: "Build your plan", text: "We review your history, goals, and current concerns—then create a clear plan." },
    { title: "Ongoing support", text: "Follow-ups, check-ins, and access when life happens—without the runaround." }
  ]}

  ctaTitle="Ready to feel supported in your healthcare?"
  ctaText="Call or text to schedule a consultation."
  ctaType="phone"
  phoneClassName="fs-4"
/>

    <Footer />
    </>
  );
}

export default PrimaryCare;
