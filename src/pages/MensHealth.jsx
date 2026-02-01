import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';
import FullscriptBanner from '../components/FullscriptBanner';
import ContentSection from '../components/ContentSection';
import banner from '../assets/banners/mens-health-banner.jpg';
import contentImage from '../assets/img/mens-health.jpg';
import SecondContentImage from '../assets/img/erectile-dysfunction.png';
import MultiFeatureSection from '../components/MultiFeatureSection';
import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/male.jpg';
import afterImage from '../assets/img/mens-health-2.jpg';
import PhoneChip from '../components/PhoneChip';
import ConversionBlock from "../components/ConversionBlock";
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';

function MensHealth() {
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
      title="Men's Health"
      subtitle="Personalized care focused on energy, performance, and long-term health"
      cta={<PhoneChip inline={false} className="hero-phone fs-4" />}
      textColor="rgba(1, 3, 112, 0.75)"
      />
      <div className="fullscript-banner-over-hero">
        <FullscriptBanner />
      </div>
     </div>

     <ContentSection
        id="mens-health"
        title="Men's Health"
        subTitle="You’re Not Alone"
        paragraphs={[
            "At Ultimate Health, we are passionate about helping men rediscover the best version of themselves. The clinic has a mission to serve the men of Central Florida with innovative, individualized, finely-tuned, modern medical solutions for a variety of health concerns - physical, mental and emotional. Testosterone therapy, sexual health and weight loss solutions are now available.",
            "Get routine health checkups, screenings and (don't forget) dental exams. Just because you're healthy doesn't mean you're off the hook. Going to your health care provider for regular checkups could just save your life. By keeping up with these appointments, your health care provider can make sure you stay up-to-date with immunizations (Yes, they're for adults, too!) and important preventive health screenings. It also gives you a chance to talk about any health concerns or changes you've noticed. Make sure to talk with your health care provider about your family medical history and ask which screenings you might need.",
        ]}
        listItems={[
            "$2,500 (includes six treatments) Alma Duo is an in-office, aesthetic treatment that uses gold standard shock wave technology, focused low-intensity extracorporeal shock wave therapy (LI-ESWT), clinically validated to stimulate better blood flow and restore his natural sexual performance - bringing spontaneity back to his life.",
            "Imagine what your love life would look like without erectile dysfunction. Imagine how close you and your partner could be ... we’ve got proven effective results using our erectile dysfunction treatment Alma Duo! In erectile dysfunction, a male is incapacitated to achieve or sustain the erection of the penis.",
            "This problem negatively affects the sexual life of many men. All men that suffer from ED should ask their doctor for a thorough physical examination to get to the root cause of their dysfunction. The reported prevalence of erectile dysfunction in young men has increased globally over the last decade.",
            "If you're located in Leesburg Florida or The Villages, Umatilla, Eustis, Tavares, Lady Lake, Clermont, and Fruitland Park then we are the men’s health care clinic offering ed treatment near you!",
            
            ]}

        image={contentImage}
        />
        
        <MultiFeatureSection
        sections={[
        {
            title: "Top 5 Reasons to go with Alma Duo",
            description: "",
            treatments: [
                "Globally, 322MM men is projected to suffer from sexual performance issues due to declining vascular function by 2025.",
                "Alma Duo is a quick, 15-minute in-office treatment.",
                "No pills. No needles. No surgery.",
                "Long-lasting results clinically validated at least 2 years post treatment.",
                "No topical anesthetic and no downtime required."
                ],
            image: SecondContentImage,
            bgClass: "blue-fade-bg",
            buttonText: "Schedule a Consultation",
            buttonLink: "contact"
        },
        ]}
         />

         <ConversionBlock
  id="mens-health-conversion"
  title="Men’s health care that’s straightforward and personalized"
  subtitle="Support for energy, performance, confidence, and long-term wellness—without the runaround."

  painTitle="If you’ve felt “off” lately, it’s worth addressing."
  pains={[
    "Low energy, reduced drive, or difficulty staying consistent in the gym",
    "Changes in performance, confidence, or intimacy",
    "Stress, poor sleep, or brain fog that’s affecting your day-to-day",
    "Feeling unsure where to start—or tired of quick fixes"
  ]}
  outcome="We take a medical, judgment-free approach to understand what’s going on and outline clear options."

  solutionTitle="How Ultimate Health DPC Helps"
  solutionIntro="Our focus is on practical solutions and ongoing support—so you’re not left guessing after one visit."
  solutionBullets={[
    { title: "Private, judgment-free consult", text: "A respectful conversation focused on symptoms, goals, and priorities." },
    { title: "Root-cause evaluation", text: "We look at hormones, circulation, lifestyle, stress, sleep, and overall health." },
    { title: "Personalized plan", text: "Care is tailored to you—based on your needs, preferences, and medical profile." },
    { title: "Follow-up support", text: "We track progress and adjust your plan over time for better consistency." }
  ]}
  solutionClosing="All therapies are recommended only after a full medical evaluation. Not every option is appropriate for every patient."

  processTitle="What to Expect"
  steps={[
    { title: "Reach out", text: "Call or text to schedule a consultation and ask questions." },
    { title: "Evaluate & plan", text: "We review symptoms, history, and—when appropriate—labs or next steps." },
    { title: "Start care with support", text: "Begin your plan with follow-ups and adjustments over time." }
  ]}

  ctaTitle="Ready to take the next step?"
  ctaText="Call or text to schedule a confidential consultation."
  ctaType="phone"
  phoneClassName="hero-phone fs-4"
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

export default MensHealth;
