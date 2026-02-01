import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import FullscriptBanner from '../components/FullscriptBanner';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import SideBySideImages from '../components/SideBySideImages';
import AlternatingColumns from '../components/AlternatingColumns';
import PhoneChip from '../components/PhoneChip';
import banner from '../assets/img/primary-care-banner.png';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ConversionBlock from "../components/ConversionBlock";
import TextBlock from '../components/TextBlock';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';


const injections = [
  {
    image: '/assets/img/vitamins/vitamin-d.png',
    title: 'Vitamin D Injections',
    description: 'Vitamin D is known as the "sunshine vitamin"—but many people don’t get enough of it, especially if you work indoors or wear sunscreen often. Low levels can sneak up on you and cause:',
    bullets: [
      { icon: faBolt, text: 'Fatigue' },
      { icon: faBolt, text: 'Weak immune system' },
      { icon: faBolt, text: 'Joint or bone pain' },
      { icon: faBolt, text: 'Mood changes or depression' },
      { icon: faBolt, text: 'Muscle weakness' },
      { icon: faStar, bold: 'Benefits of Vitamin D:', text: '' },
      { icon: faBolt, bold: '', text: 'Supports a healthy immune system' },
      { icon: faBolt, bold: '', text: 'Helps with calcium absorption and strong bones' },
      { icon: faBolt, bold: '', text: 'Improves mood and energy' },
      { icon: faBolt, bold: '', text: 'May help reduce inflammation' },
      { icon: faBolt, bold: '', text: 'Supports hormone balance' },

      { icon: faStar, bold: 'Recommended: ', text: 'Once or twice a month:' },
      { icon: faStar, bold: 'Boosts:', text: ' Energy and mental clarity' },
      { icon: faStar, bold: 'Cost:', text: '$50' },
      { icon: faCheckCircle, 
        text: (
          <>
          We can easily <strong>test your Vitamin D levels in our office</strong> and help you get back on track. Most patients feel the difference after just a few injections!
          </>
        )
        },
    ],
  },
  {
    image: '/assets/img/vitamins/vitamin-b12-150x150.jpg',
    title: 'Vitamin B12 Injections',
    description: 'Vitamin B12 helps your body turn food into energy—and it’s key for a healthy nervous system, red blood cell production, and brain function. A B12 deficiency is more common than you think and can lead to:',
    bullets: [
      { icon: faBolt, bold: '', text: ' Fatigue or low energy' },
      { icon: faBolt, bold: '', text: ' Brain fog or trouble focusing' },
      { icon: faBolt, bold: '', text: ' Mood swings' },
      { icon: faBolt, bold: '', text: ' Weight gain or slow metabolism' },
      { icon: faBolt, bold: '', text: ' Tingling in hands and feet' },

      { icon: faStar, bold: 'Benefits of B12', text: '' },
      { icon: faBolt, bold: '', text: ' Supports metabolism and weight management' },
      { icon: faBolt, bold: '', text: ' Promotes better mood and focus' },
      { icon: faBolt, bold: '', text: ' Supports red blood cell production' },
      { icon: faBolt, bold: '', text: ' Helps with sleep and stress management' },

      { icon: faBolt, bold: 'Recommended:', text: 'Weekly or monthly' },
      { icon: faBolt, bold: 'Boosts', text: 'Energy and mental clarity' },
      { icon: faBolt, bold: 'Cost', text: ' $20' },

      { icon: faCheckCircle, bold: '', text:(
        <>
          <strong>We offer B12 level testing right here in our office</strong>, so we can find the best plan for your needs
        </>
      )
      },
    ],
  },
  {
    image: '/assets/img/vitamins/glutathione.jpg',
    title: 'Glutathione Injections',
    description:(
      <>
      Glutathione is your body’s <strong>master antioxidant</strong> - it helps protect your cells, fight inflammation, and clear out toxins. Over time, things like stress, poor diet, medications, or chronic illness can lower your natural glutathione levels
      </>
    ) ,
    bullets: [
      { icon: faStar, bold: 'Indications & Benefits:', text: '' },
      { icon: faBolt, bold: '', text: ' Detoxifies the liver' },
      { icon: faBolt, bold: '', text: ' Brightens and evens out skin tone' },
      { icon: faBolt, bold: '', text: ' Supports immune function' },
      { icon: faBolt, bold: '', text: ' Reduces oxidative stress and inflammation' },
      { icon: faBolt, bold: '', text: ' May help with chronic fatigue and brain fog' },
      { icon: faBolt, bold: '', text: ' Popular for skin brightening and healthy aging' },

      { icon: faStar, bold: 'Recommended:', text: 'Weekly or as needed' },
      { icon: faStar, bold: 'Boosts:', text: ' Perfect for a monthly wellness boost or as part of a skin glow routine!' },
      { icon: faStar, bold: 'Cost:', text: ' $50' },

      { icon: faCheckCircle, bold: '', text: ' Perfect for a monthly wellness boost or as part of a skin glow routine!' },

    ],
  },
  {
    image: '/assets/img/vitamins/nad.webp',
    title: 'NAD+ Injections',
    description: 'NAD+ (Nicotinamide Adenine Dinucleotide) is a powerful coenzyme found in every cell of your body. It plays a major role in energy production, DNA repair, and brain health—but NAD+ levels naturally decline with age, stress, poor sleep, and illness.',
    bullets: [
      { icon: faStar, bold: 'Symptoms of NAD+ deficiency can include:', text: '' },
      { icon: faBolt, bold: '', text: 'Chronic fatigue' },
      { icon: faBolt, bold: '', text: 'Brain fog' },
      { icon: faBolt, bold: '', text: 'Mood swings' },
      { icon: faBolt, bold: '', text: 'Poor sleep' },
      { icon: faBolt, bold: '', text: 'Aging skin' },
      { icon: faBolt, bold: '', text: 'Low motivation or focus' },

      { icon: faStar, bold: 'Benefits of NAD+:', text: '' },
      { icon: faCheckCircle, bold: '', text: 'Increases cellular energy (ATP)' },
      { icon: faCheckCircle, bold: '', text: 'Improves mental clarity and memory' },
      { icon: faCheckCircle, bold: '', text: 'Supports detox and longevity' },
      { icon: faCheckCircle, bold: '', text: 'Enhances muscle recovery and endurance' },
      { icon: faCheckCircle, bold: '', text: 'Promotes better sleep and mood' },
      { icon: faCheckCircle, bold: 'Recommended:', text: 'Weekly or biweekly' },
      { icon: faCheckCircle, bold: 'Boosts:', text: 'Metabolism and fat-burning' },
      { icon: faCheckCircle, bold: 'Cost:', text: 'We offer single injections for $50, or you can purchase a vial for $300 for home use with provider guidance.' },
    ],
  },
];

function VitaminInjectionsPage() {
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
          title="Vitamin Injections"
          subtitle="Support how you feel and function—from the inside out"
          cta={<PhoneChip inline={false} className="hero-phone fs-4" />}
          textColor="rgba(1, 3, 112, 0.75)"
        />
        <div className="fullscript-banner-over-hero">
          <FullscriptBanner />
        </div>
      </div>
      <AlternatingColumns
        title="Vitamin Injections"
        sectionId="vitamin-injections"
        items={injections}
      />

      <ConversionBlock
  id="vitamin-injections-conversion"
  title="Quick support for energy, immunity, and recovery"
  subtitle="Targeted injections designed to help you feel better—fast—without a long appointment."

  painTitle="If you’ve been running on empty, your body is telling you."
  pains={[
    "Low energy, fatigue, or afternoon crashes",
    "Brain fog or trouble focusing",
    "Feeling run down or constantly stressed",
    "Wanting better absorption than oral supplements"
  ]}
  outcome="We’ll help you choose an option that fits your goals and make it simple to get started."

  solutionTitle="How Ultimate Health Helps"
  solutionIntro="Our approach is fast, medically guided, and personalized."
  solutionBullets={[
    { title: "Quick visits", text: "Most injections take just a few minutes—easy to fit into your day." },
    { title: "Provider guidance", text: "We help you choose what’s appropriate based on your needs." },
    { title: "Goal-based options", text: "Energy, recovery, immune support, and overall wellness—without guessing." },
    { title: "Easy follow-up", text: "Want a routine? We can help you build a schedule that makes sense." }
  ]}
  solutionClosing="Injections are offered with appropriate screening and may not be suitable for everyone."

  processTitle="What to Expect"
  steps={[
    { title: "Tell us your goal", text: "Energy, immunity, recovery, skin support—we start with what you want to improve." },
    { title: "Choose your injection", text: "We recommend an option and frequency based on your needs." },
    { title: "Get your boost", text: "Quick in-office injection with minimal disruption to your day." }
  ]}

  ctaTitle="Ready to get started?"
  ctaText="Call or text to schedule a vitamin injection."
  ctaType="phone"
  phoneClassName="hero-phone fs-4"
/>

      <TextBlock
        title="Feel Better, Live Better—One Injection at a Time"
        body="Whether you need a quick energy boost, want to brighten your skin, or support your immune system—our vitamin injections are a fast, effective way to feel your best."
        footer={
          <>
            Call or stop by today to get started. We’ll help you choose the right mix for your body and your goals!<br></br>
            <PhoneChip variant="inline" className="phone-chip lead" />
          </>
        }
      />

      {/* <SideBySideImages
        title=""
        leftImage={beforeImage}
        rightImage={afterImage}
        leftAlt="Before"
        rightAlt="After"
        sectionId="before-after"
        className="bg-light"
      /> */}

      <Contact />
      <Footer />
    </>
  );
}

export default VitaminInjectionsPage;
