import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';

function Duo(){
    return(
        <>
    <TopBar />
        <NavBar />
        <Hero
        backgroundImage="assets/img/banners/model-honey-tone-large.webp"
        backgroundVideo="/assets/video/alma-duo-video.mp4"
        heroImage="/assets/img/hero-img.png"
        title="Alma Duo"
        subtitle="Introducing the DUO Treatment"
        role="img"
        aria-label="Duo"
        videoUrl="https://www.youtube.com/watch?v=92jlApzokh0"
      />
        <Footer />
        </>
    );
}

export default Duo;