import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import StarterSection from '../components/StarterSection';
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
      <StarterSection />
        <Footer />
        </>
    );
}

export default SexualWellnessTreatments;