// MentalHealth.jsx
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';
import FullscriptBanner from '../components/FullscriptBanner';
import ContentSection from '../components/ContentSection';

import video from '../videos/exomind-video.mp4';
import contentImage from '../assets/img/mental-health.webp';
import myImage from '../assets/img/positive-mental-health.jpg';
import PhoneChip from '../components/PhoneChip';
import MultiFeatureSection from '../components/MultiFeatureSection';
import Contact from '../components/Contact';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';

const htmlList = [
  <ul key="mental-health-list">
    <li>
      <span>
        <FontAwesomeIcon icon={faStar} className="text-warning me-2" />
        <strong>Improved Mental Health – </strong>
        Mental health care can help young adults address and manage mental health issues such as anxiety, depression, and stress. By receiving appropriate treatment, young adults may experience improved mental health outcomes, leading to better emotional well-being, increased resilience, and improved overall quality of life.
      </span>
    </li>
    <li>
      <span>
        <FontAwesomeIcon icon={faStar} className="text-warning me-2" />
        <strong>Enhanced Coping Skills – </strong>
        Mental health care can provide young adults with tools and strategies to cope with life stressors and challenges. This includes healthy coping mechanisms, problem-solving skills, and stress management techniques to navigate life effectively.
      </span>
    </li>
    <li>
      <span>
        <FontAwesomeIcon icon={faStar} className="text-warning me-2" />
        <strong>Improved Relationships – </strong>
       Mental health care can help young adults develop healthier communication skills and build positive relationships with peers, family members, and other important individuals in their lives. Improved mental health can also reduce conflicts and enhance overall relationship satisfaction.
      </span>
    </li>
    <li>
      <span>
        <FontAwesomeIcon icon={faStar} className="text-warning me-2" />
        <strong>Early Intervention – </strong>
       Receiving mental health care early in life can help identify and address mental health issues before they become more severe or chronic. Early intervention can prevent mental health problems from escalating and becoming more challenging to treat in the future.
      </span>
    </li>
    <li>
      <span>
        <FontAwesomeIcon icon={faStar} className="text-warning me-2" />
        <strong>Increased Self-Awareness – </strong>
       Mental health care can promote self-reflection and self-awareness in young adults, helping them gain insight into their thoughts, feelings, and behaviors. This increased self-awareness can lead to improved self-regulation, emotional intelligence, and self-care, which can benefit their mental health and overall well-being.
      </span>
    </li>
    <li>
      <span>
        <FontAwesomeIcon icon={faStar} className="text-warning me-2" />
        <strong>Prevention of Mental Health Crises – </strong>
       Mental health care can provide young adults with the tools and resources to recognize and manage mental health crises, such as suicidal thoughts or severe anxiety episodes. Early intervention and ongoing mental health care can help prevent crises and provide young adults with the support they need during challenging times.
      </span>
    </li>
  </ul>
];

function MentalHealth() {
  const seo = usePageSEO();
  return (
    <>
      <SEO {...seo} />
      <TopBar />
      <NavBar />

    {/* HERO + OVERLAID BANNER */}
      <div className="hero-with-banner">
        <Hero
          backgroundVideo={video}
          title=""
          subtitle=""
          textColor="rgba(255,255,255,0.8)"
        />

      <div className="fullscript-banner-over-hero">
        <FullscriptBanner />
      </div>
      </div>
      <ContentSection
        id="mental-health"
        title="Caring for Your Emotional Well-being"
        paragraphs={[
          "At Ultimate Health Direct Primary Care, we believe that mental health is just as important as physical health. Our compassionate healthcare providers offer comprehensive mental health services to address a wide range of emotional and psychological conditions. From depression and anxiety to stress management and counseling, we provide a holistic approach to mental health care to help you achieve emotional well-being."
        ]}
        listItems={[
          "Home based primary care or the modern day “house call” delivers primary care to the most medically complex (and costliest to the health care system) homebound or home limited patients in society. These patients typically have no continuous follow up care, which continues the cycle of poor health management and is even more expensive and exhaustive for patients and their caregivers.",
          <>
            Call us at <PhoneChip variant="inline" className="phone-chip" /> to book your consultation.
          </>
        ]}
        image={contentImage}
      />

      <MultiFeatureSection
  sections={[{
    title: "Benefits of receiving mental health care:",
    description: (
        <>
        </>
    ),
    htmlList,
    image: myImage,
    bgClass: "blue-fade-bg",
    buttonText: "Book Now",
    buttonLink: "/contact"
  }]}
/>

<Contact />

      <Footer />
    </>
  );
}

export default MentalHealth;
