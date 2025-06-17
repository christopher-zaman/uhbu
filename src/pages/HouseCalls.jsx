import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';
import ContentSection from '../components/ContentSection';
import banner from '../assets/banners/medical-house-calls.webp';
import contentImage from '../assets/img/house-calls.webp';
import SecondContentImage from '../assets/img/amanda-facetime.webp';
import MultiFeatureSection from '../components/MultiFeatureSection';
import Contact from '../components/Contact';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';

function HouseCalls() {
  const seo = usePageSEO();
  return (
    <>
    <SEO {...seo} />
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="House Calls"
    subtitle=""
    textColor="rgba(255, 255, 255,.75)"
     />
     <ContentSection
        id="house-calls"
        title="House Calls"
        subTitle=""
        paragraphs={[
            "Ultimate Health performs physical examinations, diagnose and treat illnesses, order and interpret lab tests, perform procedures, provide patient education and counseling and make rounds to enrolled patients with limited mobility who find it difficult to get to the provider’s office.",
        ]}
        listItems={[
            "Home based primary care or the modern day “house call” delivers primary care to the most medically complex (and costliest to the health care system) homebound or home limited patients in society. These patients typically have no continuous follow up care, which continues the cycle of poor health management and is even more expensive and exhaustive for patients and their caregivers.",
            ]}

        image={contentImage}
        />
        <MultiFeatureSection
        sections={[
        {
            title: "Schedule an appointment",
            description: "",
            treatments: [
                "Direct Primary Care (DPC) is a membership model that replaces the complex and costly billing system of our current insurance based health care.",
                "The Ultimate Health DPC team works in collaboration with you and our carefully chosen network of specialists to create a personalized health plan.",
                "We provide annual exams, based on preventative medicine best-practices.",
                "We also address chronic health problems, and phase-of-life issues such as menopause and andropause",
                "Ultimate Health DPC is the solution for quality health services at an affordable cost for you, your family, and your business.",
                ],
            image: SecondContentImage,
            bgClass: "blue-fade-bg",
            buttonText: "Schedule an Appointment",
            buttonLink: "/contact"
        },
        ]}
         />
    <Contact />
    <Footer />
    </>
  );
}

export default HouseCalls;
