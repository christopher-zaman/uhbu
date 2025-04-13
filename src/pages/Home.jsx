import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Details from '../components/Details';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Pricing from '../components/Pricing';
import Faq from '../components/Faq';
import Contact from '../components/Contact';
function App() {
  
  return (    
    <>
      <TopBar />
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Details />
      <Gallery />
      <Testimonials />
      <Team />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;