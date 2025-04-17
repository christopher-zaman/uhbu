import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function PShot(){
    return(
        <>
        <TopBar />
        <NavBar />
        <Hero
        backgroundImage="/assets/img/banners/votiva-vaginal-forma-v.webp"
        heroImage="/assets/img/hero-img.png"
        title="P Shot"
        subtitle="Priapus Shot"
        aria-label="Priapus Shot"
        videoUrl="https://www.youtube.com/watch?v=92jlApzokh0"
        />
        <Footer />
        </>
    );
}
export default PShot;