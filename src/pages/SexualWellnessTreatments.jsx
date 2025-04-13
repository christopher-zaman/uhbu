import React from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function SexualWellnessTreatments() {
    return(
        <>
        <TopBar />
        <Navbar />
        <Banner 
            image="/assets/img/banners/model-honey-tone-large.webp"
            title="Sexual Wellness Treatments"
            subtitle="Empowering your wellness journey"
            role="img"
            aria-label="Model Honey Tone in a lifestyle setting, showcasing our signature style."
        />
        <Footer />
        </>
    );
}

export default SexualWellnessTreatments;