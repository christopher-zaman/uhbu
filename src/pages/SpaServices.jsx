import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';
import FullscriptBanner from '../components/FullscriptBanner';
import ContentSection from '../components/ContentSection';
import banner from '../assets/img/ultimate-health-spa-logo-bg.png';
import sideImage from '../assets/img/regenerative-therapy.png';
import contentImage from '../assets/img/spa.png';
import thirdImage from '../assets/img/spa2.png';
import PhoneChip from '../components/PhoneChip';
import spaLogo from '../assets/img/ultimate-health-spa-logo.png'; 
import TextImageSection from '../components/TextImageSection';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';
import ConversionBlock from "../components/ConversionBlock";

function SpaServices() {
    const seo = usePageSEO();
  return (
    <>
    <SEO {...seo} />
    <TopBar />
    <NavBar />

    {/* HERO + OVERLAID BANNER */}
      <div className="hero-with-banner">
        <Hero
        backgroundImage={banner}
        title="Aesthetics & Spa Services"
        textColor="rgba(11, 61, 92, 0.8)"
        subtitle="Thoughtfully designed treatments to support skin health, confidence, and overall wellness"
        cta={<PhoneChip inline={false} className="hero-phone fs-4" />}
        className="hero--spa"
        />
        <div className="fullscript-banner-over-hero">
          <FullscriptBanner />
        </div>
      </div>
     <ContentSection
        id="aesthetics-spa-services"
        title="Aesthetics & Spa Services in Leesburg, FL"
        subTitle="What We Offer"
        paragraphs={[
            <>
            <p>
            At <strong>Ultimate Health Spa</strong>, we believe self-care is more than skin deep. Our treatments are designed to help you look refreshed, feel confident, and enjoy a moment of luxury right here in Leesburg. From facials and lash services to advanced skin treatments, our spa blends medical expertise with a welcoming, boutique experience.
            </p>
            </>
        ]}
        listItems={[
            "Skin Care Treatments",
            "Customized facials to cleanse, hydrate, and brighten",
            "Exfoliation and advanced skin therapies to target fine lines, texture, and uneven tone",
            "Non-surgical options for rejuvenation and collagen support",
            "Beauty Enhancements",
            "Gentle waxing services in our Smooth Studio",
            "Lash lifts and extensions in the Wink Suite",
            "Professional skincare product recommendations in our Beauty Boutique",
            "Advanced Treatments",
            "Expertly performed injectables in the Refinery to smooth and refresh",
            "Microneedling and collagen-boosting therapies",
            "Regenerative skin options using your body’s natural resources, performed under medical supervision",
            "Note: All medical spa services are performed or supervised by licensed professionals. Individual results vary, and not every treatment is suitable for every client.",
            <>
              <PhoneChip variant="inline" className="phone-chip lead" />
            </>
            ]}
        image={contentImage}
        />

<ConversionBlock
  id="spa-services-conversion"
  title="Look refreshed. Feel confident. Keep it natural."
  subtitle="Personalized aesthetics and spa services in Leesburg—designed for real results without an “overdone” look."

  painTitle="If your skin (or confidence) has been feeling off, you’re not alone."
  pains={[
    "Dullness, dryness, or uneven tone",
    "Fine lines, texture, or tired-looking skin",
    "Wanting a glow-up that still looks like you",
    "Not sure which treatment is right for your goals"
  ]}
  outcome="We’ll help you choose the right service based on your skin, your comfort level, and the results you want."

  solutionTitle="How Ultimate Health Spa Helps"
  solutionIntro="We combine a boutique experience with licensed expertise—so you feel taken care of from start to finish."
  solutionBullets={[
    { title: "Personalized recommendations", text: "Every visit starts with understanding your goals and skin needs." },
    { title: "Natural-looking results", text: "Enhancement that looks like you—just refreshed and more confident." },
    { title: "Comfort-first experience", text: "Relaxing suites and a welcoming atmosphere that feels like a getaway." },
    { title: "Trusted care", text: "Services are performed or supervised by licensed professionals when appropriate." }
  ]}
  solutionClosing="Individual results vary, and not every treatment is suitable for every client."

  processTitle="What to Expect"
  steps={[
    { title: "Tell us your goal", text: "Glow, hydration, smoothing texture, event prep, or targeted concerns." },
    { title: "Get a tailored recommendation", text: "We’ll guide you to the best-fit option—no guessing." },
    { title: "Enjoy your treatment", text: "Leave with a refreshed look and a simple plan for maintenance if desired." }
  ]}

  ctaTitle="Ready to book your spa visit?"
  ctaText="Call or text to schedule, or book online."
  ctaType="phone"
  phoneClassName="hero-phone fs-4"
/>



        <ContentSection
        id="ultimate-spa-difference"
        title="The Ultimate Health Spa Difference"
        subTitle=""
        listItems={[
            "Hidden luxury: A Beverly Hills-level experience tucked away in Leesburg",
            "Personalized approach: Every service begins with a consultation to understand your goals and skin needs",
            "Trusted providers: A blend of medical expertise and esthetic artistry",
            "Relaxing environment: Beautifully designed treatment suites that make every visit feel like a getaway",
            ]}
        image={thirdImage}
        />

         <TextImageSection 
         bgClass="sexual-wellness-bg"
         section={{
            title: 'Visit Us in Leesburg',
            titleClass: 'blurred-bg',
            description: (
            <>
            <ul className="blurred-bg p-2">
            <li>
              <span className="d-inline-block">
                Whether you’re preparing for a special occasion, maintaining your skin health, or simply treating yourself, our team is here to help you shine.
              </span>
            </li>

              <li>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=711%20North%203rd%20Street%2C%20Leesburg%2C%20FL%2034748"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="d-inline-block"
                  aria-label="Open address 711 North 3rd Street, Leesburg, FL 34748 in Google Maps (opens in a new tab)"
                >
                  📍 Find us at 711 North 3rd Street, Leesburg, FL 34748
                </a>
              </li>

                    📞 Call us at{" "}
                    <a href="tel:+13529016582" className="phone-chip unstyled-link">(352) 901-6582</a>{" "}
                    to book your consultation.
                    <br></br><br></br>

                    🌐 Visit us at
                    <a
                            href="https://ultimatehealthspa.glossgenius.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="external-link"
                            aria-label="Open Ultimate Health Spa (new tab)"
                          >
                            <img
                              src={spaLogo}
                              alt="Ultimate Health Spa"
                              width={150}
                              height={100}
                              loading="lazy"
                            />
                            <span className="ms-2">Ultimate Health Spa</span>
                          </a>

                    
                    
                </ul>
            </>
            ),
            image: sideImage,
            bgClass: "blue-fade-bg",
            //buttonText: "Get Started with Regenerative Therapy",
            //buttonLink: "contact"
        }}
         />

         
    
    <Footer />
    </>
  );
}

export default SpaServices;
