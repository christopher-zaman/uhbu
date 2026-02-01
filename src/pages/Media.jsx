import React from 'react';
import MediaPreview from '../components/MediaPreview';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';
import banner from '../assets/banners/media-bg.webp';
import Title from '../components/Title';
import PhoneChip from '../components/PhoneChip';

function Media() {
  return (
    <>
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundImage={banner}
    title="Our Media Appearences"
    subtitle={<span class="text-white">Featuring interviews, coverage, and expert insights from our providers</span>}
    cta={<PhoneChip inline={false} className="hero-phone fs-4" />}
    textColor="rgba(1, 3, 112, 0.75)"
    className='media-hero'
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
    {/* Row 2 */}
        <div className="row mb-5">
            <div className="col-md-6 col-lg-4 mb-4">
            <MediaPreview
              title="Orlando-area primary care company plans expansion into men's clinics and spa services"
              excerpt="Ambitious plans for the future"
              image="/assets/img/media-images/amanda-daily-commercial.webp"
              link="/media/orlando-bizjournals"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <MediaPreview
              title="Ultimate Health Direct Primary Care: A New Approach to Medical Care Management Multi-Service Primary Care Clinic Launches in Leesburg with Assistance from Florida SBDC at UCF"
              excerpt="Successful entrepreneurs typically have a spirit, an energy, a kind of determination"
              image="/assets/img/media-images/sba.svg"
              link="/media/small-business-administration"
            />
          </div>
          {/* <div className="col-md-6 col-lg-4 mb-4">
            <MediaPreview
              title="Tired of your primary care provider? Leesburg practitioner recognized for direct care alternative"
              excerpt="North Florida’s Top Honorees for 2025"
              image="/assets/img/media-images/amanda-daily-commercial.webp"
              link="/media/tired-of-your-primary-care-provider"
            />
          </div> */}
          
        </div>

      </div>
    </section>
    <Footer />
    </>
  );
}

export default Media;
