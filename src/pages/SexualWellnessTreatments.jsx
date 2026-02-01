import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import FullscriptBanner from '../components/FullscriptBanner';
import Details from '../components/Details';
import SingleFeature from '../components/SingleFeature';
import Features from '../components/Features';
import Footer from '../components/Footer';
import pshotVideo from '../assets/videos/p-shot.mp4';
import TextVideoSection from '../components/TextVideoSection';
import PhoneChip from '../components/PhoneChip';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';
import bannerMobile from '../assets/mobile-banners/honey-model.webp';
import ConversionBlock from "../components/ConversionBlock";

function SexualWellnessTreatments() {
  const seo = usePageSEO();
    return(
      <>
        <SEO {...seo} />
        <TopBar />
        <NavBar />

        {/* HERO + OVERLAID BANNER */}
      <div className="hero-with-banner">
        {/* Desktop Hero */}
        <div className="hero-desktop">
            <Hero
              backgroundImage="/assets/img/banners/model-honey-tone-large.webp"
              // heroImage="/assets/img/hero-img.png"
              title="Sexual Wellness Treatments"
              subtitle="Personalized, relationship-based care focused on prevention, longevity, and real results"
              videoUrl="https://www.youtube.com/watch?v=92jlApzokh0"
              cta={<PhoneChip inline={false} className="hero-phone-white fs-4"/>}
            />

        <div className="fullscript-banner-over-hero">
          <FullscriptBanner />
        </div>

      </div>

      {/* Mobile Hero */}
      <div className="hero-mobile">
        <Hero
          backgroundImage={bannerMobile}
          title="Empowering your wellness journey"
          subtitle="Personalized, relationship-based care focused on prevention, longevity, and real results"
          cta={<PhoneChip inline={false} className="hero-phone-white fs-4"/>}
        />





      </div>
      </div>
        {/* <SingleFeature
        video="/assets/video/p-shot.mp4"
        treatments={[
          '🌸 InMode Empower Platform',
          '🌸 ALMA FemiLift',
          '💉 The O-Shot®',
          '💨 Oxytocin Nasal Spray & Tablets',
          '💉 PT-141 Peptide Therapy',
          '✨ Non-Surgical Labiaplasty',
          '✨ Mons Pubis Reduction',
          '✨ Labia Plumping with HA Filler',
          '💥 ALMA Duo ED Treatment',
          '💉 P-Shot (Priapus Shot®)',
          '💊 Oral ED Medications',
          '💉 Tri-Mix Injection Therapy',
          '💉 PT-141 Peptide Therapy',
        ]}
         /> */}

        <TextVideoSection
          bgClass="sexual-wellness-bg lead"
          sections={[
            {
              title: 'Sexual Wellness Treatments',
              description:
                'We offer a variety of evidence-based, non-invasive and minimally invasive treatments to help restore function, comfort, and confidence.',
                treatments: [
                  '🌸 InMode Empower Platform',
                  '🌸 ALMA FemiLift',
                  '💉 The O-Shot®',
                  '💉 PT-141 Peptide Therapy',
                  '💥 ALMA Duo ED Treatment',
                  '💉 P-Shot (Priapus Shot®)',
                  '💨 Oxytocin Nasal Spray & Tablets',
                  <>
                  <li className="list-style-type-none">
                    📞 Call us at{' '}
                    <a href="tel:+13529016582" className="phone-chip unstyled-link">(352) 901-6582</a>{' '}
                    to book your consultation.
                  </li>
                  </> 
                ],
                extraText: (
                    <>
                      These issues may be caused by hormone shifts (like menopause or postpartum), past trauma, stress, medication side effects, childbirth, or natural aging. But the good news is—you have options.
                      <p className='mt-4'>
                      {' '}
                      Call us at <PhoneChip variant="inline" className="phone-chip" /> to book your consultation.
                      </p>
                    </>
                  ),
                
              video: pshotVideo, 
              videoClassName: 'w-75'
            },
            
          ]}
        />


        <ConversionBlock
  id="sexual-wellness-conversion"
  title="Supportive, confidential care—built around you"
  subtitle="Restore comfort, function, and confidence with a plan tailored to your body and your goals."

  painTitle="If something feels different, you deserve answers—not embarrassment."
  pains={[
    "Low desire, discomfort, or changes in sensation",
    "Pain with intimacy or vaginal dryness",
    "Difficulty with arousal or performance",
    "Confidence changes after childbirth, stress, or hormone shifts"
  ]}
  outcome="We take a respectful, medical approach to help you understand what’s going on—and what your options are."

  solutionTitle="How Ultimate Health DPC Helps"
  solutionIntro="Our approach is private, personalized, and grounded in evidence-based options—so you feel supported every step of the way."
  solutionBullets={[
    { title: "Judgment-free consult", text: "A discreet, respectful conversation focused on your symptoms and goals." },
    { title: "Root-cause evaluation", text: "We consider hormones, stress, medications, life stage changes, and overall health." },
    { title: "Personalized treatment plan", text: "Options may include device-based therapies and/or supportive medical therapies when appropriate." },
    { title: "Ongoing support", text: "Follow-up and adjustments so you’re not left guessing between visits." }
  ]}
  solutionClosing="All therapies are offered only after a full medical evaluation. Not every option is appropriate for every patient."

  processTitle="What to Expect"
  steps={[
    { title: "Talk with your provider", text: "Share symptoms, goals, and what you’ve tried so far—privately and comfortably." },
    { title: "Review your options", text: "We’ll explain what’s appropriate for you and outline a clear next step." },
    { title: "Start care with support", text: "Begin your plan with guidance, follow-up, and adjustments over time." }
  ]}

  ctaTitle="Ready to talk privately?"
  ctaText="Call or text to schedule a confidential consultation."
  ctaType="phone"
  phoneClassName="hero-phone-white fs-4"
/>


        {/* <Details 
          centerTitle={true}
          showHeading={false}
          introText="Explore Our"
          highlightText='Sexual Wellness Treatments'
          headingText
        /> */}
        {/* <Features /> */}
        <Footer />
      </>
    );
}

export default SexualWellnessTreatments;