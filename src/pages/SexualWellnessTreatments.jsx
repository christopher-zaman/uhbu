import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Details from '../components/Details';
import SingleFeature from '../components/SingleFeature';
import Features from '../components/Features';
import Footer from '../components/Footer';

function SexualWellnessTreatments() {
    return(
      <>
        <TopBar />
        <NavBar />
        <Hero
        backgroundImage="/assets/img/banners/model-honey-tone-large.webp"
        heroImage="/assets/img/hero-img.png"
        title="Sexual Wellness Treatments"
        subtitle="Empowering your wellness journey"
        videoUrl="https://www.youtube.com/watch?v=92jlApzokh0"
      />
        <SingleFeature
        video="/assets/video/p-shot.mp4"
        treatments={[
          '🌸 InMode Empower Platform',
          '🌸 ALMA FemiLift',
          '💉 The O-Shot®',
          '💨 Oxytocin Nasal Spray & Tablets',
          '💉 PT-141 Peptide Therapy',
          '✨ Non-Surgical Labiaplasty',
          '✨ Mons Pubis Reduction',
          '✨ Labia Plumping with HA Filler + PRP',
          '💥 ALMA Duo ED Treatment',
          '💉 P-Shot (Priapus Shot®)',
          '💊 Oral ED Medications',
          '💉 Tri-Mix Injection Therapy',
          '💉 PT-141 Peptide Therapy',
        ]}
         />
        <Details 
          centerTitle={true}
          showHeading={false}
          introText="Explore Our"
          highlightText='Sexual Wellness Treatments'
          headingText
        />
        <Features />
        <Footer />
      </>
    );
}

export default SexualWellnessTreatments;