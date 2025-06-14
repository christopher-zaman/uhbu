// MentalHealth.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import banner from '../assets/banners/hair-restoration-banner.jpg';
import myImage from '../assets/img/hair-injections.jpg';
import MultiFeatureSection from '../components/MultiFeatureSection';
import Contact from '../components/Contact';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import TextBlock from '../components/TextBlock';

const htmlList = [
  <ul key="mental-health-list">
    <li>
      <span>
        <FontAwesomeIcon icon={faStar} className="text-warning me-2" />
        <strong>PRP Therapy (Platelet-Rich Plasma): – </strong>
        We use your body’s own powerful growth factors to stimulate dormant hair follicles. PRP involves a simple blood draw, after which your plasma is processed and injected directly into the scalp to encourage natural hair growth and strengthen thinning hair.
      </span>
    </li>
    <li>
      <span>
        <FontAwesomeIcon icon={faStar} className="text-warning me-2" />
        <strong>Steroid Scalp Injections: – </strong>
         For patients experiencing inflammatory scalp conditions such as alopecia areata, targeted corticosteroid injections can reduce inflammation and support regrowth. This treatment is ideal for sudden or patchy hair loss.
      </span>
      </li>
      <li>
      <span>
        <FontAwesomeIcon icon={faStar} className="text-warning me-2" />
        <strong>Exosome Therapy: – </strong>
         Exosomes are regenerative cell messengers that can help rejuvenate and activate hair follicles at the cellular level. Exosome therapy offers a cutting-edge solution for patients seeking accelerated, long-lasting hair regrowth without surgery.
      </span>
      </li>
      <li>
      <span>
        <FontAwesomeIcon icon={faStar} className="text-warning me-2" />
        <strong>Peptide Blend Therapy: – </strong>
         We offer customized peptide therapy designed to boost scalp health and improve hair density. Peptides naturally stimulate hair follicle activity, prolong the growth phase, and support overall scalp rejuvenation.
      </span>
      </li>
      <li>
      <span>
        <FontAwesomeIcon icon={faStar} className="text-warning me-2" />
        <strong>Red Light Therapy Cap: – </strong>
         Our FDA-cleared red light therapy caps deliver low-level laser therapy (LLLT) directly to the scalp, stimulating blood flow and cellular energy to promote thicker, healthier hair growth — all from the comfort of your own home.
      </span>
    </li>
    
  </ul>
];

function HairRestoration() {
  return (
    <>
      <TopBar />
      <NavBar />

      <Hero
        backgroundImage={banner}
        title="Hair Restoration"
        subtitle=""
        textColor="rgba(255,255,255,0.8)"
      />

      <ContentSection
        id="hair-restoration"
        title="Hair Restoration Services"
        paragraphs={[
          "At Ultimate Health Spa, we understand that hair loss can impact your confidence and self-image. That’s why we offer a comprehensive, science-driven approach to hair restoration — designed to naturally stimulate growth, strengthen existing hair, and restore your confidence.",
          "Our hair restoration treatments are non-surgical, minimally invasive, and customized to each individual’s needs. Whether you’re noticing early thinning or have struggled with hair loss for years, we have advanced solutions to help you regain healthier, fuller hair."
        ]}
        // listItems={[
        //   ""
        // ]}
        video="/assets/video/prp-hair.mp4"  // ← this is the public path
      />

      <MultiFeatureSection
  sections={[{
    title: "Our Hair Restoration Solutions Include:",
    description: (
        <>
        <p>
        </p>
        </>
    ),
    htmlList,
    image: myImage,
    bgClass: "blue-fade-bg",
    buttonText: "Book Now",
    buttonLink: "/contact"
  }]}
/>



    <TextBlock
    title="Why Choose Ultimate Health Spa for Hair Restoration?"
    body={[
    "Customized, multi-therapy approach tailored to your unique hair goals",
    "Regenerative, non-surgical solutions with little to no downtime",
    "Cutting-edge treatments led by experienced professionals"
    ]}
    footer="✨ Schedule your personalized consultation today!"
     />

    <Contact />
    <Footer />
    </>
  );
}

export default HairRestoration;
