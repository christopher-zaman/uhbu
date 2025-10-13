import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/img/estrogen-banner.png';
import sideImage from '../assets/img/peptide.jpg';
import contentImage from '../assets/img/peptide-therapy.png';
import thirdImage from '../assets/img/what-is-peptide-therapy.webp';
import fourthImage from '../assets/img/fourth-peptide.png';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/peptide-therapy-1.jpg';
import afterImage from '../assets/img/peptide-therapy-2.png';
import TextImageSection from '../components/TextImageSection';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';

function PeptideTherapy() {
    const seo = usePageSEO();
  return (
    <>
    <SEO {...seo} />
    <TopBar />
    <NavBar />
    <Hero
    backgroundImage={banner}
    title="Peptide Therapy"
    subtitle=""
     />
     <ContentSection
        id="peptide-therapy"
        title="Peptide Therapy in Leesburg, FL"
        subTitle="Why Consider Peptide Therapy?"
        paragraphs={[
            <>
            <p>
            At <strong>Ultimate Health Direct Primary Care</strong>, we offer advanced therapies that support cellular health, energy, and recovery. Peptides are short chains of amino acids—naturally occurring building blocks in the body—that act as messengers to help regulate important biological functions
            </p>
            </>
        ]}
        listItems={[
            "As we age, the body produces fewer of these natural messengers. This can affect energy, sleep, metabolism, focus, and even how we recover from stress or exercise. Peptide therapy is designed to gently encourage the body’s own restorative processes so you can feel and perform at your best.",
            <li className="list-style-type-none">
              📞 Call us at{' '}
              <a href="tel:+13529016582" className="phone-chip unstyled-link">(352) 901-6582</a>{' '}
              to book your consultation.
            </li>
            ]}
        image={contentImage}
        />

        <ContentSection
        id="why-peptide-therapy"
        title="Potential Benefits?"
        subTitle=""
        paragraphs={[
            "Patients explore peptide therapy for:"
        ]}
        listItems={[
            "Supporting energy and stamina",
            "Encouraging healthy metabolism",
            "Promoting restful sleep",
            "Enhancing focus and mental clarity",
            "Assisting in recovery and performance",
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
                    
                    <li><span className="d-inline-block"><strong> Comprehensive evaluation:</strong> We begin with a thorough consultation and lab testing to understand your health needs</span></li>

                    <li><span className="d-inline-block"><strong>Personalized plan:</strong> Therapy is customized to your body, lifestyle, and goals</span></li>
                
                    <li><span className="d-inline-block"><strong> Ongoing monitoring:</strong> Adjustments are made along the way to ensure safe, effective results</span></li>

                    <li><span className="d-inline-block"><strong> Note: </strong>All therapies are prescribed only after a full medical evaluation by a licensed provider. Not every option is appropriate for every patient.</span></li>
                    
                </ul>
            </>
            ),
            image: sideImage,
            bgClass: "blue-fade-bg",
            buttonText: "Get Started with Peptides",
            buttonLink: "contact"
        }}
         />

         <ContentSection
        id="how-to-get-started-peptide-therapy"
        title="Why Choose Ultimate Health in Leesburg?"
        subTitle=""
        paragraphs={[
            <>
            <ul>
            <li><span><strong>Expert guidance:</strong></span> Experienced providers who understand the science behind peptide therapy</li>

            <li><span><strong>Whole-person care:</strong></span> We don’t just prescribe—we combine therapy with nutrition, lifestyle, and other strategies for lasting results</li>

            <li><span><strong>Local trust:</strong></span> Proudly serving Leesburg and the surrounding Central Florida community with compassionate, patient-centered care</li>
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
            title: 'Take the Next Step',
            titleClass: 'blurred-bg',
            description: (
            <>

                <ul className="blurred-bg p-2">
                    <li>
                        <p>
                        If you’re ready to explore how peptide therapy could help restore balance and vitality, schedule a consultation with our team at 
                        
                           <strong> Ultimate Health Direct Primary Care in Leesburg, FL.</strong>
                            
                         We begin with a thorough consultation and lab testing to understand your health needs
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
           // buttonText: "Get Started with Peptides",
            //buttonLink: "contact"
        }}
         />

        {/* <SideBySideImages
        title=""
        leftImage={beforeImage}
        rightImage={afterImage}
        leftAlt="Before Treatment"
        rightAlt="After Treatment"
        sectionId="before-after"
        className="bg-light peptide-therapy-img"

         /> */}
    
    <Footer />
    </>
  );
}

export default PeptideTherapy;
