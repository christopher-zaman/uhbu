import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';


function VampireFacial() {
    return(
        <>
        <TopBar />
        <NavBar />
        <Hero
        backgroundImage="/assets/img/banners/vampire-facial-banner-medium.webp"
        heroImage="/assets/img/hero-img.png"
        title="Sexual Wellness Treatments"
        subtitle="Personalized treatments designed to enhance your wellness journey."
        videoUrl="https://www.youtube.com/watch?v=examplevideo"
      />
        <Footer />
        </>
    );
}
export default VampireFacial;