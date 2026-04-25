import React from 'react';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FullscriptBanner from '../components/FullscriptBanner';
import ContentSection from '../components/ContentSection';
import banner from '../assets/img/estrogen-banner.webp';
import sideImage from '../assets/img/regenerative-therapy.png';
import contentImage from '../assets/img/peptide-therapy.webp';
import thirdImage from '../assets/img/regenerative.png';
import fourthImage from '../assets/img/fourth-peptide.webp';
import PhoneChip from '../components/PhoneChip';
import beforeImage from '../assets/img/peptide-therapy-1.jpg';
import ConversionBlock from "../components/ConversionBlock";
import TextImageSection from '../components/TextImageSection';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';
import bannerMobile from '../assets/mobile-banners/peptide-therapy.webp';

function RegenerativeTherapy() {
    const seo = usePageSEO();
  return (
    <>
    <SEO {...seo} />
    {/* HERO + OVERLAID BANNER */}
      <div className="hero-with-banner">
        {/* Desktop Hero */}
        <div className="hero-desktop">
            <Hero
            backgroundImage={banner}
            title="Regenerative Therapy"
            subtitle="Personalized regenerative therapies designed to support healing and recovery"
            cta={<PhoneChip inline={false} className="hero-phone-white fs-4" />}
            />
            <div className="fullscript-banner-over-hero">
                <FullscriptBanner />
            </div>
        </div>
        {/* Mobile Hero */}
        <div className="hero-mobile">
            <Hero
            backgroundImage={bannerMobile}
            title="Regenerative Therapy"
            subtitle="Personalized regenerative therapies designed to support healing and recovery"
            cta={<PhoneChip inline={false} className="hero-phone-white fs-4" />}
            />
        </div>
        
     </div>
     <ContentSection
        id="regenerative-therapy"
        title="Regenerative Therapy in Leesburg, FL"
        subTitle="What Are Regenerative Therapies?"
        paragraphs={[
            <>
            <p>
            At <strong>Ultimate Health Direct Primary Care</strong>, we offer innovative treatments that use your body’s own natural resources to support healing, recovery, and rejuvenation. These therapies are designed to encourage the body’s repair processes without surgery or long downtime.

            </p>
            </>
        ]}
        listItems={[
            "Instead of relying only on outside medications, regenerative treatments focus on what your body already has—the ability to heal and restore. Using advanced techniques, we carefully process and apply your body’s own biologic material under the guidance of our licensed medical team.",
            <p>
            Discover how regenerative therapies can help you feel and look your best—naturally. Schedule a consultation at <strong> Ultimate Health Direct Primary Care in Leesburg, FL.</strong> in Leesburg, FL to explore your options. 
                <br></br><br></br>
                📞 Call us at{" "}
                <a href="tel:+13529016582" className="phone-chip unstyled-link">(352) 901-6582</a>{" "}
                to book your consultation.
            </p>
            ]}
        image={contentImage}
        />

        <ContentSection
        id="why-peptide-therapy"
        title="Benefits of Regenerative Care?"
        subTitle=""
        paragraphs={[
            "Patients choose regenerative therapy because it may help with:"
        ]}
        listItems={[
            "Supporting natural tissue repair",
            "Promoting healthier skin and hair",
            "Improving recovery after injuries or procedures",
            "Enhancing overall wellness and vitality",
            ]}
        image={thirdImage}
        />

    <ConversionBlock
  id="regenerative-therapy-conversion"
  title="Support healing and recovery—naturally"
  subtitle="Regenerative therapies designed to support your body’s repair process with medically guided care."

  painTitle="When you’re not healing the way you used to, it’s frustrating."
  pains={[
    "Ongoing aches, stiffness, or slow recovery after activity",
    "Feeling like progress has stalled despite doing “the right things”",
    "Wanting non-surgical options with minimal downtime",
    "Unsure which regenerative options are appropriate for your goals"
  ]}
  outcome="We help you understand what’s driving the issue and whether regenerative therapy may be a good fit."

  solutionTitle="How Ultimate Health DPC Helps"
  solutionIntro="Our approach is careful, personalized, and medically guided—so you feel clear on next steps."
  solutionBullets={[
    { title: "Medical evaluation first", text: "We review your history, goals, and symptoms before recommending anything." },
    { title: "Personalized pathway", text: "Your plan is based on what’s appropriate for you—not a one-size protocol." },
    { title: "Whole-body support", text: "We pair regenerative options with lifestyle guidance when needed for better outcomes." },
    { title: "Clear expectations", text: "We’ll explain what to expect, what’s realistic, and how progress is monitored." }
  ]}
  solutionClosing="All therapies are provided under medical supervision and may not be suitable for everyone."

  processTitle="What to Expect"
  steps={[
    { title: "Consultation", text: "Discuss goals, history, and what recovery looks like for you right now." },
    { title: "Review options", text: "We’ll explain which regenerative approaches may fit your needs." },
    { title: "Start care & follow up", text: "Begin your plan with check-ins and adjustments as appropriate." }
  ]}

  ctaTitle="Ready to explore your options?"
  ctaText="Call or text to schedule a consultation."
  ctaType="phone"
  phoneClassName="hero-phone-white fs-4"
/>


         <TextImageSection 
         bgClass="sexual-wellness-bg"
         section={{
            title: 'Our Approach',
            titleClass: 'blurred-bg',
            description: (
            <>
                <ul className="blurred-bg p-2">
                    
                    <li><span className="d-inline-block"><strong> Medical expertise:</strong>  Every procedure is performed by trained providers in a safe, clinical setting</span></li>

                    <li><span className="d-inline-block"><strong> Personalized plans:</strong> We evaluate your goals and recommend the right treatment pathway for you</span></li>
                
                    <li><span className="d-inline-block"><strong>Whole-body focus: </strong> Regenerative care is most effective when combined with nutrition, lifestyle, and other wellness strategies</span></li>

                    <li><span className="d-inline-block"><strong> Note: </strong>Regenerative therapies are performed using a patient’s own biologic material. All treatments are provided under medical supervision and may not be suitable for everyone.</span></li>
                    <>
                    <PhoneChip variant="inline" className="phone-chip" />
                    </>
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
        title="Why Patients Choose Ultimate Health?"
        subTitle=""
        paragraphs={[
            <>
            <ul>
            <li><span><strong>Local trust: </strong></span> Serving Leesburg and the surrounding communities with advanced, patient-centered care</li>

            <li><span><strong>Cutting-edge options:</strong></span>  Bringing modern regenerative medicine techniques into a safe, welcoming environment</li>

            <li><span><strong>Compassionate support:</strong></span>  From consultation to follow-up, our providers walk alongside you every step of the way</li>
            </ul>
            </>
        ]}
        listItems={[
            
            ]}
        image={fourthImage}
        />

        <TextImageSection 
         bgClass="sexual-wellness-bg"
         section={{
            title: 'Ready to Learn More?',
            titleClass: 'blurred-bg',
            description: (
            <>
                <ul className="blurred-bg p-2">
                    <li>
                        <p>
                        Discover how regenerative therapies can help you feel and look your best—naturally. Schedule a consultation at <strong> Ultimate Health Direct Primary Care in Leesburg, FL.</strong> in Leesburg, FL to explore your options. 
                         <br></br><br></br>
                         📞 Call us at{" "}
                            <a href="tel:+13529016582" className="phone-chip unstyled-link">(352) 901-6582</a>{" "}
                            to book your consultation.
                         </p>
                        
                    </li>
                </ul>
            </>
            ),
            
            image: beforeImage,
            bgClass: "blue-fade-bg",
           // buttonText: "Get Started with Regenerative Therapy",
            //buttonLink: "contact"
        }}
         />
    
    <Footer />
    </>
  );
}

export default RegenerativeTherapy;
