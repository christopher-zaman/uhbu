import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/amanda-banner.webp';
import contentImage from '../assets/img/amanda.webp';
import secondImage from '../assets/img/amanda-facetime.webp';

import TextVideoSection from '../components/TextVideoSection';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import { usePageSEO } from '../hooks/usePageSEO';

function AboutUs() {
  const seo = usePageSEO();
  return (
    <>
    <SEO {...seo} />
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="About Us"
    subtitle=""
     />
     <ContentSection
        id="about-us"
        title="A Note from Our Founder"
        subTitle=""
        paragraphs={[
            "Hi there,","I'm Amanda Vontrice Gaskin, a Nurse Practitioner and the founder of Ultimate Health Direct Primary Care. I started this practice in 2021 with one big goal: to bring real, affordable healthcare back to the people who need it most.",
            "During the COVID-19 pandemic, I saw how broken and confusing the healthcare system had become—especially for working families, small business owners, and those without great insurance. I knew there had to be a better way. That's when I found Direct Primary Care, and it changed everything.",
            "At Ultimate Health, we believe healthcare should feel personal. You should be able to talk to your provider, ask questions, and feel truly cared for—not like just another number.",
            "This isn't just my job—it's my passion. I'm proud to serve our community and help people take control of their health without all the red tape.",
            
            "Thank you for trusting us. We’re honored to care for you and your family.",
            "With love and care,",
            "Amanda Vontrice Gaskin, APRN",
            "Founder, Ultimate Health DPC",

        ]}
        image={contentImage}
        roundedImage={true}
        />
        <TextVideoSection
            bgClass="sexual-wellness-bg lead"
            sections={[
                {
                title: 'About Us',
                description: 'Ultimate Health Direct Primary Care is a new and innovative personalized approach to medical care management. This affordable, patient-center model gives our members access to unlimited primary care. Our focus is to provide every patient with individualized attention to meet his or her specific health care needs. Ultimate Health Direct Primary Care uses a monthly direct pay, flat fee that is likely to cover 80-90% of the issues for which you will need to seek medical care, including:routine and preventative care; sick visits, weight loss management, and chronic disease management. We are here for you. Our members are not required to sign a long-term contract.',
                youtubeUrl: 'https://youtu.be/WI1gtvVhmDI',
                buttonText: 'Schedule a Consultation',
                buttonLink: '/contact',
                },
            ]}
        />

        <ContentSection
        id="about-us"
        title="Amanda Vontrice Gaskin MSN, APRN"
        subTitle=""
        paragraphs={[
            "Amanda believes that the best health care comes from a meaningful partnership between her and her patients. She has found that direct primary care is a great way to facilitate this. She is originally from Winter Haven, FL. Amanda is a National Board-Certified Nurse Practitioner. She obtained her Nurse Practitioner licensure with a focus in Adult-Geriatric Medicine from the American Academy of Nurse Practitioners. She obtained her Masters of Science in Nursing from the University of South Florida. She has been providing quality health care since 2006. She began her career on a Medical/Surgical unit in her hometown of Winter Haven, Florida, where she gained invaluable experience. Amanda transitioned into a leadership role at Central Florida Health Care, a community health center, where she provided supervision to the Nursing staff. While in Graduate School she worked on the Inpatient Hospice/ Palliative Care unit at Lakeland Regional Hospital. Amanda relocated to Lake County in 2016 to work for Lifestream Behavioral Center. She was the sole provider for the WIN Clinic, a Primary Care Clinic embedded in a Behavioral Health Center to provide care for those with Severe Mental Illness and Substance Use Disorders. Amanda is very passionate about preventative care and mental health; she strongly believes that if time is well-spent focusing on these aspects of care, the lives of her patients will continue to stay optimal. Amanda spends her free time with family, friends and mentoring in her community. She is excited about the opportunity to influence the lives of others and looks forward to meeting you, soon!",
        ]}
        image={secondImage}
        roundedImage={true}
        reverse={true}
        />        
    <Contact />
    <Footer />
    </>
  );
}

export default AboutUs;
