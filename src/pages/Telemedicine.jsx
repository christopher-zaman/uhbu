import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/banners/telemedicine.svg';
import contentImage from '../assets/img/amanda-mobile-small.webp';
import SecondContentImage from '../assets/img/amanda-facetime.webp';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/telemedicine-3.jpg';
import afterImage from '../assets/img/telemedicine-2.jpg';

function Telemedicine() {
  return (
    <>
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title=""
    subtitle=""
    textColor="rgba(255, 255, 255,1)"
     />
     <ContentSection
        id="telemedicine"
        title="Telemedicine"
        subTitle="What is Telehealth?"
        paragraphs={[
            "Telemedicine means appropriate follow up and conditions may be assessed in the comfort of your home or even on the road or at work. With Virtual DPC, a patient connects with the same primary care provider every time—their personal Direct Primary Care provider—the one who knows and has access to that patient’s complete medical history; the same Nurse Practitioner who is familiar with and understands his or her patient’s unique health concerns.",
        ]}
        listItems={[
            "Telehealth is the distribution of health-related services and information via electronic information and telecommunication technologies. It allows long-distance patient and clinician contact, care, advice, reminders, education, intervention, monitoring, and remote admissions.",
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
            buttonText: "Schedule an appointment",
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
        className="bg-light mens-health-images"
        
         />
    
    <Footer />
    </>
  );
}

export default Telemedicine;
