import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function Duo(){
    return(
        <>
    <TopBar />
        <NavBar />
            <Banner 
            image="public/assets/img/banners/model-honey-tone-large.webp"
            title="Duo"
            subtitle="Duo"
            role="img"
            aria-label="Duo"
            />
        <Footer />
        </>
    );
}

export default Duo;