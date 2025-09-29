import React from 'react';
import MediaPreview from '../components/MediaPreview';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';
import banner from '../assets/banners/media-presence.jpg';
import Title from '../components/Title';

function Media() {
  return (
    <>
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="Check Out Our Media Appearences"
    subtitle=""
    textColor="rgba(255, 255, 255, 1)"
     />
    <section className="section blog py-5">
      <div className="container">
          <Title
          introText = "See us in the "
          highlightText = "Media"
           />
        {/* First Row */}
        <div className="row mb-5">
            <div className="col-md-6 col-lg-4 mb-4">
            <MediaPreview
              title="AAEA Among U.S. Small Business Administration"
              excerpt="North Florida’s Top Honorees for 2025"
              image="/assets/img/media-images/flager-news-weekly.jpg"
              link="/media/winner-of-small-business-administration-2025"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <MediaPreview
              title="Amanda Gaskin Named 2025 SBA Woman-Owned Small Business Person of the Year for Florida"
              excerpt="The U.S. SBA has named Amanda V. Gaskin, the 2025 State of Florida and North Florida District Woman-Owned Small Business Person of the Year"
              image="/assets/img/media-images/amanda-named.webp"
              link="/media/amanda-named-small-business-person-of-the-year"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <MediaPreview
              title="Tired of your primary care provider? Leesburg practitioner recognized for direct care alternative"
              excerpt="North Florida’s Top Honorees for 2025"
              image="/assets/img/media-images/amanda-daily-commercial.webp"
              link="/media/tired-of-your-primary-care-provider"
            />
          </div>
          
        </div>

      </div>
    </section>
    <Footer />
    </>
  );
}

export default Media;
