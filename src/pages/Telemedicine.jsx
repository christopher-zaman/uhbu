import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';
import FullscriptBanner from '../components/FullscriptBanner';
import ContentSection from '../components/ContentSection';
import banner from '../assets/banners/telemedicine-bg.webp';
import contentImage from '../assets/img/amanda-mobile-small.webp';
import SecondContentImage from '../assets/img/amanda-facetime.webp';
import MultiFeatureSection from '../components/MultiFeatureSection';
import ConversionBlock from "../components/ConversionBlock";
import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/telemedicine-3.jpg';
import afterImage from '../assets/img/telemedicine-2.jpg';
import PhoneChip from '../components/PhoneChip';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';
import Subscribe from '../components/Subscribe';
function Telemedicine() {
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
    title="Telehealth"
    subtitle="Convenient, personalized care from anywhere—without rushed visits or insurance barriers"
    cta={<PhoneChip inline={false} className="hero-phone-white fs-4" />}
    textColor="rgba(255, 255, 255,1)"
    className='telemedicine-hero'
     />
    <div className="fullscript-banner-over-hero">
      <FullscriptBanner />
    </div>
    </div>
     <ContentSection
        id="telemedicine"
        title="Telemedicine"
        subTitle="What is Telehealth?"
        paragraphs={[
            "Telemedicine means appropriate follow up and conditions may be assessed in the comfort of your home or even on the road or at work. With Virtual DPC, a patient connects with the same primary care provider every time—their personal Direct Primary Care provider—the one who knows and has access to that patient’s complete medical history; the same Nurse Practitioner who is familiar with and understands his or her patient’s unique health concerns.",
        ]}
        listItems={[
            "Telehealth is the distribution of health-related services and information via electronic information and telecommunication technologies. It allows long-distance patient and clinician contact, care, advice, reminders, education, intervention, monitoring, and remote admissions.",
            <PhoneChip inline={false} className="hero-phone fs-4" />
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

         <ConversionBlock
  id="telehealth-conversion"
  title="Primary care—without the drive, waiting room, or rushed visit"
  subtitle="Convenient telehealth with the same provider who knows your history and follows through."

  painTitle="Telehealth should feel simple—not impersonal."
  pains={[
    "Hard to get an appointment when you actually need care",
    "Busy schedule makes in-office visits difficult",
    "Virtual visits that feel rushed or disconnected",
    "Seeing a different provider every time and repeating your story"
  ]}
  outcome="With Ultimate Health DPC, telehealth is relationship-based—so you get consistent care and clear next steps."

  solutionTitle="How Ultimate Health DPC Helps"
  solutionIntro="We combine convenience with continuity—so you can get care from wherever you are, without sacrificing quality."
  solutionBullets={[
    { title: "Same provider, every time", text: "You connect with the provider who knows your history and goals." },
    { title: "Convenient follow-ups", text: "Ideal for check-ins, ongoing concerns, and managing chronic conditions." },
    { title: "Clear guidance", text: "Get a plan you understand—plus next steps if you need labs, imaging, or referrals." },
    { title: "Ongoing support", text: "Questions between visits? You’re not left waiting weeks for answers." }
  ]}
  solutionClosing="We’ll always tell you when an in-person visit is the better option—your safety comes first."

  processTitle="What to Expect"
  steps={[
    { title: "Schedule your visit", text: "Call or text to book a telehealth appointment." },
    { title: "Meet virtually", text: "Discuss symptoms, goals, and concerns—comfortably from home or work." },
    { title: "Follow-through", text: "Get your plan, next steps, and follow-up support as needed." }
  ]}

  ctaTitle="Ready to get care from anywhere?"
  ctaText="Call or text to schedule a telehealth visit."
  ctaType="phone"
  phoneClassName="hero-phone-white fs-4"
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
