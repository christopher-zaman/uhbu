import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import banner from '../assets/banners/contact-banner.png';
import TextBlock from '../components/TextBlock';
import ResumeUploadForm from '../components/ResumeUploadForm';

import SEO from '../components/SEO';
import { usePageSEO } from '../hooks/usePageSEO';

function Careers() {
  const seo = usePageSEO();
  return (
    <>
      <SEO {...seo} />
      <TopBar />
      <NavBar />

      <Hero
        backgroundImage={banner}
        title="Careers"
        subtitle=""
        textColor="rgba(1, 3, 112, 0.75)"
      />

      

      <TextBlock
        title="Careers"
        body={
            <>
            <p>
                Join Ultimate Health DPC. We're Growing!
            </p>
            <p>
                Please submit your resume below.
            </p>
            </>
        }
        footer=""
      />

        <ResumeUploadForm />
     

      <Footer />
    </>
  );
}

export default Careers;
