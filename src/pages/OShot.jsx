import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function OShot() {
    return(
        <>
        <TopBar />
        <NavBar />
            <Banner 
            image="public/assets/img/banners/votiva-vaginal-forma-v.webp"
            title="O Shot"
            subtitle="Orgasm Shot"
            role="img"
            aria-label="Orgasm Shot"
            />
        <Footer />
        </>
    );
}
export default OShot;