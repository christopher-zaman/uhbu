import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '..//components/Hero';
import Footer from '../components/Footer';

function OShot() {
    return(
        <>
        <TopBar />
        <NavBar />
        <Hero
        backgroundImage="assets/img/banners/votiva-vaginal-forma-v.webp"
        heroImage="/assets/img/hero-img.png"
        title="O Shot"
        subtitle="Orgasm Shot designed to enhance your wellness journey."
        videoUrl="https://www.youtube.com/watch?v=92jlApzokh0"
      />
        <Footer />

        
        </>
    );
}
export default OShot;