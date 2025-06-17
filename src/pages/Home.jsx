import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import Paragraph from '../components/Paragraph';
import Video from '../components/Video';
import About from '../components/About';
import Services from '../components/Services';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Details from '../components/Details';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Socials from '../components/Socials';
import Subscribe from '../components/Subscribe';
import Team from '../components/Team';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import Contact from '../components/Contact';
import CareCredit from '../components/CareCredit';

import backgroundVideo from '../assets/videos/alma-duo-video-optimized.mp4';
import VideoHero from '../components/VideoHero';
import CenteredVideoSection from '../components/CenteredVideoSection';
import { useEffect } from 'react';
import AOS from 'aos';
import SEO from '../components/SEO';
import { usePageSEO } from '../hooks/usePageSEO';

function App() {
  const seo = usePageSEO();
  useEffect(() => {
    AOS.refresh(); // This runs after the page component mounts
  }, []);
  
  return (    
    <>
    <SEO
        title="Membership-Based Primary Care in Leesburg | Ultimate Health DPC"
        description="Join Ultimate Health DPC and enjoy unlimited doctor access, weight loss support, hormone therapy, and more. Serving Leesburg, Florida."
        image="https://ultimatehealthdpc.com/assets/img/membership-based-primary-health-care.png"
      />
      <TopBar />
      <NavBar />
      <VideoHero videoId="rxVnntel71w" height="75vh" />
      
      {/* <Hero 
        backgroundImage="/assets/img/banners/amanda-mobile-small.webp"
        backgroundVideo={backgroundVideo}
        heroImage="/assets/img/hero-img-sexual-wellness.png"
        title=""
        subtitle=""
      /> */}

      <SectionTitle>
        Welcome to <strong>Ultimate Health</strong>{' '}
        <span className="text-green-600 animate-bounce">Direct Primary Care!</span>
      </SectionTitle>

      <Paragraph className="lead text-gray-500">
        We’re so glad you’re here!

        At Ultimate Health, we believe going to the doctor should be simple, affordable, and personal. That’s why we do things differently. We’re a Direct Primary Care practice, which means you get care when you need it—without the long waits, surprise bills, or rushed visits.
        Think of us as your health partner. Whether you're feeling sick, need help managing a condition, or just want to stay on top of your health, we’re here for you. You’ll always see a provider who listens, cares, and takes the time to really know you.
        We’re proud to serve individuals, families, and even local businesses with the kind of care everyone deserves. Welcome to the Ultimate Health family—where your health is our priority, and you’re always treated like a VIP.
        Let’s take care of you—together.
      </Paragraph>

        <CenteredVideoSection videoId="92jlApzokh0" />


      {/* <video
        className="hero-bg-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      <Services /> 


      <About />


      <Testimonials />

      
      <Socials />

      <CareCredit />

      <Subscribe />


      {/* <Features />
      <Details />
      <Gallery />
      
      <Team />
      <Pricing />
      <Faq /> */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;