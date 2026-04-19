import React from 'react';
import Announcement from '../components/Announcement';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Paragraph from '../components/Paragraph';
import About from '../components/About';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';
import Socials from '../components/Socials';
import Subscribe from '../components/Subscribe';
import Contact from '../components/Contact';
import CareCredit from '../components/CareCredit';
import contentImage from '../assets/img/amanda-spotlight.webp';
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
import ValueSection from '../components/ValueSection';
import AmandaSpotlight from '../components/AmandaSpotlight';
import HowItWorks from '../components/HowItWorks';
import PricingPreview from '../components/PricingPreview';
import HomepageTestimonials from '../components/HomepageTestimonials';
import { reviews } from '../data/reviews';

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
      <Announcement />
      <TopBar />
      <NavBar />
      <VideoHero
          videoId="rxVnntel71w" 
          title="Your Personal Provider. One Monthly Fee. No Insurance Games."
          subtitle="Direct access to your provider in Leesburg — same-day visits, no waiting rooms, and care that actually knows your name."
          bullets={[
            "Flat monthly membership — no copays, no surprise bills",
            "Same-day or next-day appointments",
            "Telehealth available after your first in-person visit"
          ]}
          cta={
            <a 
            href="https://app.elationemr.com/book/UltimateHealthDPC"
            target="_blank"
            >
              Become a Member Today
            </a>
          }
      />

      <AmandaSpotlight 
        image={contentImage} 
      />
      <HowItWorks />

      <Services /> 

      <PricingPreview startingPrice="$99" />
      <HomepageTestimonials reviews={reviews} />
      {/* <SectionTitle>
        Welcome to <strong>Ultimate Health</strong>{' '}
        <span className="text-green">Direct Primary Care!</span>
      </SectionTitle> */}
      <AudienceGrid
        // title="For Families Who Want Better Access, Better Answers, and a Provider Who Actually Knows Them"
        // subtitle="Unlimited visits. Same-day appointments. Transparent pricing. No insurance headaches."
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
        ctaLink="/membership"
        ctaText="Memberships starting at $99/month"
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
        title="Ready to get started?"
        text="Schedule your visit or call us today to take the next step."
      />
      <CenteredVideoSection videoId="92jlApzokh0" />
      
      <About />
      <Testimonials />
      <Socials />
      <CareCredit />
      <Subscribe />
      <Contact />
      <Footer />
    </>
  );
}

export default App;