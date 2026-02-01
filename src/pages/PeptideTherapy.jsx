import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/estrogen-banner.webp';
import sideImage from '../assets/img/peptide.jpg';
import contentImage from '../assets/img/peptide-therapy.webp';
import thirdImage from '../assets/img/what-is-peptide-therapy.webp';
import fourthImage from '../assets/img/fourth-peptide.webp';
import MultiFeatureSection from '../components/MultiFeatureSection';
import FullscriptBanner from '../components/FullscriptBanner';
import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/peptide-therapy-1.jpg';
import afterImage from '../assets/img/peptide-therapy-2.png';
import TextImageSection from '../components/TextImageSection';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';
import PhoneChip from '../components/PhoneChip';
import bannerMobile from '../assets/mobile-banners/peptide-therapy.webp';
import ConversionBlock from "../components/ConversionBlock";

function PeptideTherapy() {
    const seo = usePageSEO();
  return (
    <>
    <SEO {...seo} />
    <TopBar />
    <NavBar />

    {/* HERO + OVERLAID BANNER */}
      <div className="hero-with-banner">
        {/* Desktop Hero */}
        <div className="hero-desktop">

            <Hero
            backgroundImage={banner}
            title="Peptide Therapy"
            subtitle="Personalized peptide therapy through Direct Primary Care in Leesburg"
            cta={<PhoneChip inline={false} className="hero-phone fs-4"/>}
            
            />
        

            <div className="fullscript-banner-over-hero">
                <FullscriptBanner />
            </div>

        </div>

    {/* Mobile Hero */}
        <div className="hero-mobile">
            <Hero
            backgroundImage={bannerMobile}
            title="Peptide Therapy"
            subtitle="Personalized peptide therapy through Direct Primary Care in Leesburg"
            cta={<PhoneChip inline={false} className="hero-phone-white fs-4"/>}
            />
        </div>
    </div>

    {/* NEW: Conversion Block (Pain → Solution → Process → CTA) */}
<ConversionBlock
  id="peptides-conversion"
  title="A clearer, guided approach to peptide therapy"
  subtitle="Personalized care designed to support energy, recovery, and overall wellness—without guesswork."

  painTitle="Peptide therapy is often explored when you feel “off,” but can’t pinpoint why."
  pains={[
    "Low energy or stamina that doesn’t improve with rest",
    "Slow recovery from workouts, stress, or busy weeks",
    "Sleep that isn’t restful or consistent",
    "Brain fog, low focus, or feeling “not like yourself”"
  ]}
  outcome="We start with a full evaluation and build a plan that supports your goals safely and responsibly."

  solutionTitle="How Ultimate Health DPC Helps"
  solutionIntro="We keep peptide therapy simple and medically guided—so you understand what you’re taking and why."
  solutionBullets={[
    { title: "Comprehensive evaluation", text: "We begin with a thorough consultation and, when appropriate, lab testing." },
    { title: "Personalized plan", text: "Therapy is tailored to your body, lifestyle, and goals—not a one-size protocol." },
    { title: "Ongoing monitoring", text: "We track progress and adjust carefully over time for safety and results." },
    { title: "Direct Primary Care advantage", text: "More access, more time, and fewer barriers to getting questions answered." }
  ]}
  solutionClosing="All therapies are prescribed only after a full medical evaluation. Not every option is right for every patient."

  processTitle="What to Expect"
  steps={[
    { title: "Meet your provider", text: "Discuss symptoms, goals, and health history." },
    { title: "Build a plan", text: "Review options and create a plan aligned with your needs." },
    { title: "Ongoing support", text: "Monitor progress and refine your plan over time." }
  ]}

  ctaTitle="Ready to explore peptide therapy?"
  ctaText="Call or text to schedule a consultation and get clear next steps."
  ctaType="phone"
  phoneClassName="hero-phone fs-4"
/>


     <ContentSection
        id="peptide-therapy"
        title="Peptide Therapy in Leesburg, FL"
        subTitle="Why Consider Peptide Therapy?"
        paragraphs={[
            <>
            <p>
            At <strong>Ultimate Health Direct Primary Care</strong>, we offer advanced therapies that support cellular health, energy, and recovery. Peptides are short chains of amino acids—naturally occurring building blocks in the body—that act as messengers to help regulate important biological functions
            </p>
            </>
        ]}
        listItems={[
            "As we age, the body produces fewer of these natural messengers. This can affect energy, sleep, metabolism, focus, and even how we recover from stress or exercise. Peptide therapy is designed to gently encourage the body’s own restorative processes so you can feel and perform at your best.",
            <>
              📞 Call us at{' '}
              <a href="tel:+13529016582" className="phone-chip unstyled-link">(352) 901-6582</a>{' '}
              to book your consultation.
            </>
            ]}
        image={contentImage}
        />

        <ContentSection
        id="why-peptide-therapy"
        title="Potential Benefits?"
        subTitle=""
        paragraphs={[
            "Patients explore peptide therapy for:"
        ]}
        listItems={[
            "Supporting energy and stamina",
            "Encouraging healthy metabolism",
            "Promoting restful sleep",
            "Enhancing focus and mental clarity",
            "Assisting in recovery and performance",
            ]}
        image={thirdImage}
        />

         <TextImageSection 
         bgClass="sexual-wellness-bg"
         section={{
            title: 'Our Approach',
            titleClass: 'blurred-bg',
            description: (
            <>
                <ul className="blurred-bg p-2">
                    
                    <li><span className="d-inline-block"><strong> Comprehensive evaluation:</strong> We begin with a thorough consultation and lab testing to understand your health needs</span></li>

                    <li><span className="d-inline-block"><strong>Personalized plan:</strong> Therapy is customized to your body, lifestyle, and goals</span></li>
                
                    <li><span className="d-inline-block"><strong> Ongoing monitoring:</strong> Adjustments are made along the way to ensure safe, effective results</span></li>

                    <li><span className="d-inline-block"><strong> Note: </strong>All therapies are prescribed only after a full medical evaluation by a licensed provider. Not every option is appropriate for every patient.</span></li>
                    
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
        title="Why Choose Ultimate Health in Leesburg?"
        subTitle=""
        paragraphs={[
            <>
            <ul>
            <li><span><strong>Expert guidance:</strong></span> Experienced providers who understand the science behind peptide therapy</li>

            <li><span><strong>Whole-person care:</strong></span> We don’t just prescribe—we combine therapy with nutrition, lifestyle, and other strategies for lasting results</li>

            <li><span><strong>Local trust:</strong></span> Proudly serving Leesburg and the surrounding Central Florida community with compassionate, patient-centered care</li>
            </ul>
            </>
        ]}
        listItems={[
            
            ]}
        image={fourthImage}
        />

        <TextImageSection 
         bgClass="sexual-wellness-bg"
         section={{
            title: 'Take the Next Step',
            titleClass: 'blurred-bg',
            description: (
            <>

                <ul className="blurred-bg p-2">
                    <li>
                        <p>
                        If you’re ready to explore how peptide therapy could help restore balance and vitality, schedule a consultation with our team at 
                        
                           <strong> Ultimate Health Direct Primary Care in Leesburg, FL.</strong>
                            
                         We begin with a thorough consultation and lab testing to understand your health needs
                         <br></br><br></br>
                         📞 Call us at{" "}
                    <a href="tel:+13529016582" className="phone-chip unstyled-link">(352) 901-6582</a>{" "}
                    to book your consultation.
                         </p>
                        
                    </li>
                </ul>
            </>
            ),
            
            image: beforeImage,
            bgClass: "blue-fade-bg",
           // buttonText: "Get Started with Peptides",
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
        className="bg-light peptide-therapy-img"

         /> */}
    
    <Footer />
    </>
  );
}

export default PeptideTherapy;
