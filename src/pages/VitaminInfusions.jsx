import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import FullscriptBanner from '../components/FullscriptBanner';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

import AlternatingColumns from '../components/AlternatingColumns';
import AboutUs from './AboutUs';
import banner from '../assets/banners/iv-infusion-treatments.jpg';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import PhoneChip from '../components/PhoneChip';
import TextBlock from '../components/TextBlock';
import TextVideoSection from '../components/TextVideoSection';
import BulletedTextBlock from '../components/BulletedTextBlock';
import Faq from '../components/Faq';
import TripleFAQGrid from '../components/TripleFaqGrid';
import TripleFeatureFaqGrid from '../components/TripleFeatureFaqGrid';

import ContentSection from '../components/ContentSection';
import TextImageSection from '../components/TextImageSection';
import sideImage from '../assets/img/vitamin.png';
import fourthImage from '../assets/img/why-vitamin.png';
import spaLogo from '../assets/img/ultimate-health-spa-logo.png'; 
import SEO from '../components/SEO';

function VitaminInfusions() {
  
  return (
    <>
    <SEO
        title="Vitamin Infusions | Ultimate Health DPC"
        description="Revitalize with our powerful vitamin infusions in Leesburg, FL. Boost energy, immunity, and hydration with IV therapy at Ultimate Health."
        image="https://www.ultimatehealthdpc.com/assets/iv-infusion-treatments-eb346629.jpg"
        url="https://www.ultimatehealthdpc.com/vitamin-infusions"
      />
      <TopBar />
      <NavBar />

      {/* HERO + OVERLAID BANNER */}
      <div className="hero-with-banner">
      <Hero
        backgroundImage={banner}
        title="Vitamin Infusions"
        subtitle=""
        textColor="rgba(1, 3, 112, 0.75)"
      />
      <div className="fullscript-banner-over-hero">
        <FullscriptBanner />
      </div>
      </div>

      {/* <AlternatingColumns
        title="Vitamin Infusions"
        sectionId="vitamin-infusions"
        items={injections}
      /> */}

      <TextBlock
        title="IV Therapy in Leesburg, FL"
        body="Whether you need a quick energy boost, want to brighten your skin, or support your immune system—our vitamin injections are a fast, effective way to feel your best."
        footer={
        <>
          Call or stop by today to get started. We’ll help you choose the right mix for your body and your goals!<br></br>
          <PhoneChip variant="inline" className="phone-chip lead" />
        </>
        }
      />

      <TextImageSection
            bgClass="iv-hydration-bg"
            section={{
                title: 'Vitamin Infusion Therapy – Leesburg Office',
                description: (
                <>
                    <p>At <strong>Ultimate Health Direct Primary Care</strong>, we offer IV therapy as a powerful way to support hydration, energy, immune health, and recovery. Whether you’re feeling run down, preparing for travel, or simply want to give your body a boost, IV therapy delivers essential nutrients directly into the bloodstream for faster absorption and noticeable results.</p>
                    
                </>
                ),
                image: '/assets/img/vitamins/iv-bag.jpeg',
                buttonText: 'Book Now',
                buttonLink: '/contact'
            }}
            />

      

        <TextBlock
        title="Why IV Therapy?"
        body="When taken by mouth, vitamins and nutrients pass through the digestive system, which can limit how much your body absorbs. IV therapy bypasses digestion, allowing higher concentrations of nutrients to reach your cells more efficiently. Patients often report feeling refreshed, energized, and rehydrated after treatment."
        footer=""
      />

      <BulletedTextBlock
        title="Benefits of IV Therapy:"
        bullets={[
            'Energy and focus',
            'Immune health during cold and flu season',
            'Hydration after travel or activity',
            'Recovery from fatigue or stress',
            'Overall wellness optimization',
        ]}

    paragraph={[<>
                <p>
                  📞 Call us at{" "}
                  <a href="tel:+13529016582" className="phone-chip unstyled-link">(352) 901-6582</a>{" "}
                  to book your consultation.
                </p>
              </>
            ]}
          />


<TextImageSection 
         bgClass="sexual-wellness-bg"
         section={{
            title: 'Our Approach',
            titleClass: 'blurred-bg',
            description: (
            <>
                <ul className="blurred-bg p-2">
                    
                    <li><span className="d-inline-block"><strong> Provider-guided care:</strong>   Every IV treatment is administered by trained medical professionals in a safe, clinical setting</span></li>

                    <li><span className="d-inline-block"><strong> Personalized formulas:</strong>  IV blends are tailored to your goals—whether it’s immune support, energy enhancement, or recovery</span></li>
                
                    <li><span className="d-inline-block"><strong>Relaxing experience: </strong> Treatments are delivered in a comfortable environment designed to help you recharge</span></li>

                    <li><span className="d-inline-block"><strong> Note: </strong>IV therapy is provided only after evaluation by a licensed provider. Not every option is suitable for every patient.</span></li>
                    
                </ul>
            </>
            ),
            image: sideImage,
            bgClass: "blue-fade-bg",
            //buttonText: "Get Started with Regenerative Therapy",
            //buttonLink: "contact"
        }}
         />

         <ContentSection
        id="how-to-get-started-peptide-therapy"
        title="Why Choose Ultimate Health in Leesburg?"
        subTitle=""
        paragraphs={[
            <>
            <ul>
            <li><span><strong>Medical expertise: </strong></span>Experienced providers who understand how IV therapy supports wellness and prevention</li>

            <li><span><strong>Whole-person care: </strong></span>IV therapy is part of a broader approach to health, including nutrition, hormones, and lifestyle strategies</li>

            <li><span><strong>Local trust: </strong></span>Proudly serving Leesburg and surrounding communities with compassionate, patient-centered care</li>
            </ul>
            </>
        ]}
        listItems={[
            
            ]}
        image={fourthImage}
        />

        <TextBlock
  title="Book Your IV Therapy Session"
  body="Give your body the boost it deserves. Schedule an IV therapy appointment at Ultimate Health Direct Primary Care in Leesburg, FL today."
  footer={[
    <React.Fragment key="cta">
      📞 Call us at{" "}
      <a
        href="tel:+13529016582"
        className="phone-chip unstyled-link"
        aria-label="Call Ultimate Health DPC at (352) 901-6582"
      >
        (352) 901-6582
      </a>{" "}
      to book your consultation.
      <br />
      <br />
      Or visit us at{" "}
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
    </React.Fragment>
  ]}
/>


        <TripleFeatureFaqGrid
        items={[
            {
            image: '/assets/img/vitamins/infusions.webp',
            title: 'Bounce Back Drip',
            description: 'Perfect after a night out, long week, or big event. Helps restore hydration, ease headaches, and boost energy so you can feel like yourself again—fast.',
            faqs: [
                {
                question: 'What’s in it?',
                answer: 'Magnesium, B-vitamins, Vitamin C, and Electrolytes.',
                },
                {
                question: 'Details?',
                answer: 'Duration: 45 minutes',
                answer2: 'Cost: $160'
                },
            ],
            },
            {
            image: '/assets/img/vitamins/infusions.webp',
            title: 'Jet Lag Drip',
            description: 'Just got back from a trip? This drip helps you bounce back from travel fatigue, dehydration, and time zone changes so you can feel rested and refreshed.',
            faqs: [
                {
                question: 'What’s in it?',
                answer: 'Vitamin B12, B-complex vitamins, Vitamin C, Magnesium, Taurine, Electrolytes and hydration fluids.',
                },
                {
                question: 'Details?',
                answer: 'Duration: 45 minutes',
                answer2: 'Cost: $195.00'
                },
            ],
            },
            {
            image: '/assets/img/vitamins/infusions.webp',
            title: 'Feel Better Drip',
            description: 'Feeling under the weather? This immune-boosting blend includes Vitamin C, zinc, and other essential nutrients to help fight off illness and get you back on your feet.',
            faqs: [
                {
                question: 'What’s in it?',
                answer: 'High-dose Vitamin C, Zinc, B-complex vitamins, Glutathione (optional), Electrolytes and fluids',
                },
                {
                question: 'Details?',
                answer: 'Duration: 45 minutes',
                answer2: 'Cost: $160.00'
                },
            ],
            },

            {
            image: '/assets/img/vitamins/infusions.webp',
            title: 'Energizer Drip',
            description: 'Designed to give you a clean, natural energy boost without the crash. Great for busy professionals, parents, students, or anyone in need of a pick-me-up.',
            faqs: [
                {
                question: 'What’s in it?',
                answer: 'Vitamin B12, B-complex vitamins, Magnesium, Taurine, Amino acids, Electrolytes',
                },
                {
                question: 'Details?',
                answer: 'Duration: 45 minutes',
                answer2: 'Cost: $185.00'
                },
            ],
            },
            {
            image: '/assets/img/vitamins/infusions.webp',
            title: 'Myer’s Cocktail',
            description: 'The OG of IV therapy. This classic blend of vitamins and minerals (B vitamins, Vitamin C, magnesium, and more) helps with everything from fatigue and migraines to stress and chronic illness.',
            faqs: [
                {
                question: 'What’s in it?',
                answer: 'Vitamin C, B-complex vitamins, Vitamin B12, Magnesium, Calcium, Sterile saline solution',
                },
                {
                question: 'Details?',
                answer: 'Duration: 45 minutes',
                answer2: 'Cost: $195.00'
                },
            ],
            },
            {
            image: '/assets/img/vitamins/infusions.webp',
            title: 'NAD+ Drip',
            description: 'Cellular repair from the inside out. NAD+ helps with brain fog, low energy, aging, and mood. It supports longevity and whole-body health—ideal for anti-aging and peak performance.',
            faqs: [
                {
                question: 'What’s in it?',
                answer: 'Nicotinamide Adenine Dinucleotide (NAD+), Saline or dextrose base, Optional B vitamins or amino acids',
                },
                {
                question: 'Details?',
                answer: 'Duration: 45 minutes',
                answer2: 'Cost: $375.00'
                },
            ],
            },

            {
            image: '/assets/img/vitamins/infusions.webp',
            title: 'Iron Transfusion Drip',
            description: 'Low iron levels? We’ve got you covered. This drip is great for patients with anemia, fatigue, or chronic blood loss. We’ll monitor your labs and guide you through treatment safely.',
            faqs: [
                {
                question: 'What’s in it?',
                answer: 'IV iron (iron sucrose or ferric gluconate), Saline solution, Customized based on lab work',
                },
                {
                question: 'Details?',
                answer: 'Duration: 45 minutes',
                answer2: 'Cost: $375.00'
                },
            ],
            },
            {
            image: '/assets/img/vitamins/infusions.webp',
            title: 'Inner Beauty Drip',
            description: 'Glow from within! This skin-loving blend is packed with antioxidants, Vitamin C, and biotin to help improve skin clarity, support collagen, and leave you looking radiant.',
            faqs: [
                {
                question: 'What’s in it?',
                answer: 'High-dose Vitamin C, Biotin, Glutathione, B-complex vitamins, Hydration fluids',
                },
                {
                question: 'Details?',
                answer: 'Duration: 45 minutes',
                answer2: 'Cost: $185.00'
                },
            ],
            },
            {
            image: '/assets/img/vitamins/infusions.webp',
            title: 'Be Lean Drip',
            description: 'Supports your metabolism and energy while aiding in fat-burning and muscle recovery. Great as part of a weight loss or fitness plan.',
            faqs: [
                {
                question: 'What’s in it?',
                answer: 'MIC (Methionine, Inositol, Choline), L-Carnitine, B-complex vitamins, Amino acids, Electrolytes',
                },
                {
                question: 'Details?',
                answer: 'Duration: 45 minutes',
                answer2: 'Cost: $185.00'
                },
            ],
            },
    // Add more as needed
  ]}
/>

        
      
      <Contact />
      <Footer />
    </>
  );
}

export default VitaminInfusions;
