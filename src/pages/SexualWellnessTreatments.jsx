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

function SexualWellnessTreatments() {
  const seo = usePageSEO();
    return(
      <>
        <SEO {...seo} />
        <TopBar />
        <NavBar />

        {/* HERO + OVERLAID BANNER */}
      <div className="hero-with-banner">
        <Hero
          backgroundImage="/assets/img/banners/model-honey-tone-large.webp"
          // heroImage="/assets/img/hero-img.png"
          title="Sexual Wellness Treatments"
          subtitle="Empowering your wellness journey"
          videoUrl="https://www.youtube.com/watch?v=92jlApzokh0"
        />

        <div className="fullscript-banner-over-hero">
          <FullscriptBanner />
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