import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

function PShot(){
    return(
        <>
        <TopBar />
        <NavBar />
        <Banner
            image="public/assets/img/banners/votiva-vaginal-forma-v.webp"
            title="P Shot"
            subtitle="Priapus Shot"
            role="img"
            aria-label="Priapus Shot"
         />
        <Footer />
        </>
    );
}
export default PShot;