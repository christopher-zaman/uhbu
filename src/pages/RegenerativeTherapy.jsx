import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/estrogen-banner.png';
import sideImage from '../assets/img/regenerative-therapy.png';
import contentImage from '../assets/img/peptide-therapy.png';
import thirdImage from '../assets/img/regenerative.png';
import fourthImage from '../assets/img/fourth-peptide.png';
import PhoneChip from '../components/PhoneChip';
import beforeImage from '../assets/img/peptide-therapy-1.jpg';

import TextImageSection from '../components/TextImageSection';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';

function RegenerativeTherapy() {
    const seo = usePageSEO();
  return (
    <>
    <SEO {...seo} />
    <TopBar />
    <NavBar />
    <Hero
    backgroundImage={banner}
    title="Regenerative Therapy"
    subtitle=""
     />
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
                    Call us at <PhoneChip variant="inline" className="phone-chip" /> to book your consultation.
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
