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
import contentImage from '../assets/img/amanda-mobile-small.webp';
import backgroundVideo from '../assets/videos/alma-duo-video-optimized.mp4';
import VideoHero from '../components/VideoHero';
import CenteredVideoSection from '../components/CenteredVideoSection';
import { useEffect } from 'react';
import AOS from 'aos';
import SEO from '../components/SEO';
import { usePageSEO } from '../hooks/usePageSEO';
import AudienceGrid from '../components/AudienceGrid';
import DPCComparison from "../components/DPCComparison";
import LocalProof from "../components/LocalProof";
import PrimaryCTA from '../components/PrimaryCTA';
import Announcement from '../components/Announcement';
import ValueSection from '../components/ValueSection';
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
      <div className="header-stack">
        <Announcement />
        <TopBar />
        <NavBar />
      </div>
      <VideoHero videoId="rxVnntel71w" height="75vh" />
      
      {/* 
      <Hero 
        backgroundImage="/assets/img/banners/amanda-mobile-small.webp"
        backgroundVideo={backgroundVideo}
        heroImage="/assets/img/hero-img-sexual-wellness.png"
        title=""
        subtitle=""
      /> 
      */}

      <SectionTitle>
        Welcome to <strong>Ultimate Health</strong>{' '}
        <span className="text-green">Direct Primary Care!</span>
      </SectionTitle>
      <AudienceGrid
        title="For Families Who Want Better Access, Better Answers, and a Provider Who Actually Knows Them"
        subtitle="Unlimited visits. Same-day appointments. Transparent pricing. No insurance headaches."
        className="lead"
        titleClassName="audience-grid-title--small"
        items={[
          {
            icon: "🧑‍💼",
            title: "Busy Professionals",
            text: "Care that fits your life—direct access, telehealth options, and proactive guidance.",
            bullets: ["Fast answers", "Less waiting", "Ongoing support"],
            link: "/telemedicine",
            buttonText: "Explore Telehealth"
          },
          {
            icon: "🌸",
            title: "Women’s Wellness",
            text: "Support for hormones, vitality, and confidence—with care tailored to every stage.",
            bullets: ["Hormone support", "Sexual wellness", "Whole-body care"],
            link: "/womens-health",
            buttonText: "Women’s Health"
          },
          {
            icon: "💪",
            title: "Men’s Health",
            text: "Personalized care to support energy, performance, and long-term health outcomes.",
            bullets: ["Energy & vitality", "Performance support", "Prevention & longevity"],
            link: "/mens-health",
            buttonText: "Men’s Health"
          }
        ]}
      />
      <DPCComparison
        ctaType="link"
        ctaLink="/primary-care"
        ctaText="See How Membership Works"
      />
  <LocalProof
  title="Why Ultimate Health DPC"
  subtitle="Local, relationship-based care for Leesburg and Lake County."
  locationLine="Proudly serving Leesburg, Lake County, and surrounding Central Florida communities"
  philosophy="We take the time to listen, build a real relationship, and focus on prevention—so you feel supported long-term."
  proofItems={[
    { label: "Location", value: "Leesburg • Lake County, FL" },
    { label: "Access", value: "Direct provider messaging" },
    { label: "Care Style", value: "Prevention • longevity • whole-person care" },
    { label: "Visit Style", value: "Unhurried, relationship-based visits" }
  ]}
  provider={{
  name: "Amanda Vontrice Gaskin, MSN, APRN",
  title: "Primary Care Provider",
  bullets: [
    "Practicing since 2006",
    "Patient-first, relationship-based care",
    "Led by Amanda Gaskin, MSN, APRN",
    "2022 Leesburg Area Chamber Business Woman of the Year",
    "2026 Executive Board Chairman, Leesburg Area Chamber of Commerce",
    "Deep community roots. Personalized care. Modern medicine with real access."

  ],
  image: contentImage,
  link: "/meet-us",
  linkText: "Meet Amanda"
}}
  ctaType="phone"
/>
<ValueSection />

      <Paragraph className="lead text-gray-500" data-aos="fade-up" data-aos-delay="0">
        We’re so glad you’re here!
        At Ultimate Health, we believe going to the doctor should be simple, affordable, and personal. That’s why we do things differently. We’re a Direct Primary Care practice, which means you get care when you need it—without the long waits, surprise bills, or rushed visits.
        Think of us as your health partner. Whether you're feeling sick, need help managing a condition, or just want to stay on top of your health, we’re here for you. You’ll always see a provider who listens, cares, and takes the time to really know you.
        We’re proud to serve individuals, families, and even local businesses with the kind of care everyone deserves. Welcome to the Ultimate Health family—where your health is our priority, and you’re always treated like a VIP.
        Let’s take care of you—together.
      </Paragraph>
      <PrimaryCTA
        title = "Ready to experience healthcare differently?"
        text = "We’re here to answer your questions and help you take the next step."
      />
      <CenteredVideoSection videoId="92jlApzokh0" />
      {/* 
      <video
        className="hero-bg-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video> 
      */}
      <Services /> 
      <About />
      <Testimonials />
      <Socials />
      <CareCredit />
      <Subscribe />
      {/* 
      <Features />
      <Details />
      <Gallery />
      <Team />
      <Pricing />
      <Faq /> 
      */}
      <Contact />
      <Footer />
    </>
  );
}

export default App;