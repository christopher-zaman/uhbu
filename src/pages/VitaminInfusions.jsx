import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

import AlternatingColumns from '../components/AlternatingColumns';
import AboutUs from './AboutUs';
import banner from '../assets/banners/iv-infusion-treatments.jpg';
import { faBolt } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import TextBlock from '../components/TextBlock';
import TextVideoSection from '../components/TextVideoSection';
import BulletedTextBlock from '../components/BulletedTextBlock';
import Faq from '../components/Faq';
import TripleFAQGrid from '../components/TripleFaqGrid';
import TripleFeatureFaqGrid from '../components/TripleFeatureFaqGrid';
import TextImageSection from '../components/TextImageSection';
import SEO from '../components/SEO';

function VitaminInfusions() {
  return (
    <>
    <SEO
        title="Vitamin Infusions | Ultimate Health DPC"
        description="Revitalize with our powerful vitamin infusions in Leesburg, FL. Boost energy, immunity, and hydration with IV therapy at Ultimate Health."
        image="https://www.ultimatehealthdpc.com/assets/iv-infusion-treatments.jpg"
        url="https://www.ultimatehealthdpc.com/vitamin-infusions"
      />
      <TopBar />
      <NavBar />

      <Hero
        backgroundImage={banner}
        title="Vitamin Infusions"
        subtitle=""
        textColor="rgba(1, 3, 112, 0.75)"
      />

      {/* <AlternatingColumns
        title="Vitamin Infusions"
        sectionId="vitamin-infusions"
        items={injections}
      /> */}

      <TextBlock
        title="Feel Better, Live Better—One Injection at a Time"
        body="Whether you need a quick energy boost, want to brighten your skin, or support your immune system—our vitamin injections are a fast, effective way to feel your best."
        footer="📞 Call or stop by today to get started. We’ll help you choose the right mix for your body and your goals!"
      />

      <TextImageSection
            bgClass="iv-hydration-bg"
            section={{
                title: 'Vitamin Infusion Therapy – Leesburg Office',
                description: (
                <>
                    <p>Feeling tired, dehydrated, or just not at your best? <strong>IV hydration therapy</strong> is a fast and powerful way to rehydrate your body, replenish key vitamins and minerals, and leave you feeling refreshed from the inside out.</p>
                    <p>At <strong>Ultimate Health DPC</strong> in Leesburg, we offer a variety of vitamin infusions tailored to your needs—whether you’re recovering from a rough week, battling burnout, or simply looking to glow up your wellness routine.</p>
                </>
                ),
                image: '/assets/img/vitamins/iv-bag.jpeg',
                buttonText: 'Book Now',
                buttonLink: '/contact'
            }}
            />

      

        <TextBlock
        title="What Is IV Hydration Therapy?"
        body="IV hydration delivers fluids, vitamins, and nutrients directly into your bloodstream, so your body can absorb everything fully and quickly. You get immediate hydration and targeted nutrients—without having to rely on your digestive system to process it all."
        footer=""
      />

      <BulletedTextBlock
        title="Benefits of IV Therapy:"
        bullets={[
            'Rehydrates and restores electrolyte balance',
            'Boosts energy and mental clarity',
            'Strengthens immune system',
            'Speeds up recovery after illness, travel, or workouts',
            'Supports weight loss and metabolism',
            'Brightens skin and improves complexion',
            'Relieves symptoms of stress, fatigue, and hangovers',
        ]}
        paragraph="We offer 500 cc and 1000 cc bags, depending on your needs. 💧 📞 Call for pricing and to book your session."
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

        <TextBlock
            title="Let’s Get You Rehydrated and Recharged"
            body="IV therapy takes about 45–60 minutes and is done right here in our relaxing Leesburg office. Whether you’re looking to heal, glow, or simply feel better—we’ll help you choose the perfect drip for your goals."
            footer=" Call us today to schedule your infusion and ask about bag size pricing!"
        />
      
      <Contact />
      <Footer />
    </>
  );
}

export default VitaminInfusions;
