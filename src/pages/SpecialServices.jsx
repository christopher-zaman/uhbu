import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';
import KeywordSnippetSection from '../components/KeywordSnippetSection';
import SubscribeInline from '../components/SubscribeInline.jsx';

import womensBladderControlImg from '../assets/img/seo/womens-bladder-control.webp';
import womensHormoneTherapyImg from '../assets/img/seo/womens-hormone-therapy.webp';
import bhrtImg from '../assets/img/seo/bhrt.webp';
import peptideTherapyImg from '../assets/img/seo/peptide-therapy.webp';
import exomindTherapyImg from '../assets/img/seo/exomind-therapy.webp';
import edTreatmentImg from '../assets/img/seo/ed-treatment.webp';
import vaginalRejuvenationImg from '../assets/img/seo/vaginal-rejuvenation.webp';

const BOOKING_URL = 'https://app.elationemr.com/book/UltimateHealthDPC';

const services = [
  {
    id: 'bladder-control-support',
    title: 'Bladder Control Support for Women',
    snippet:
      'Bladder leaks, urgency, and urinary discomfort can interfere with exercise, sleep, travel, and daily confidence. We provide personalized, judgment-free care to help identify what may be contributing to symptoms and guide you toward practical next steps. Benefits include private visits, support tailored to real-life symptoms, and care focused on comfort, confidence, and daily function.',
    imageSrc: womensBladderControlImg,
    imageAlt: 'Women’s bladder control care in Leesburg, Florida',
    ctaHref: BOOKING_URL,
    ctaText: 'Book Your Visit',
  },
  {
    id: 'womens-hormone-therapy',
    title: 'Women’s Hormone Therapy',
    snippet:
      'Hormonal changes can affect energy, sleep, mood, weight, and overall quality of life. Our women’s hormone therapy approach is designed around your symptoms and goals so care feels personal, supportive, and sustainable. Benefits include personalized support, thoughtful follow-up, and care focused on balance, wellness, and feeling more like yourself again.',
    imageSrc: womensHormoneTherapyImg,
    imageAlt: 'Women’s hormone therapy in Leesburg, Florida',
    ctaHref: BOOKING_URL,
    ctaText: 'Book Your Visit',
  },
  {
    id: 'bhrt-hormone-optimization',
    title: 'BHRT and Hormone Optimization',
    snippet:
      'When hormone-related symptoms affect how you feel day to day, it can be difficult to know where to start. We offer individualized hormone optimization support with clear guidance and ongoing follow-up. Benefits include care tailored to your goals, support for both women’s and men’s hormone concerns, and a relationship-based approach focused on long-term wellness.',
    imageSrc: bhrtImg,
    imageAlt: 'BHRT and hormone optimization in Leesburg, Florida',
    ctaHref: BOOKING_URL,
    ctaText: 'Book Your Visit',
  },
  {
    id: 'peptide-therapy',
    title: 'Peptide Therapy',
    snippet:
      'If your goals involve recovery, healthy aging, body composition, or performance support, a generic plan may not be enough. Our peptide therapy approach is personalized to your needs and built around structured guidance and follow-up. Benefits include individualized support, sustainable progress, and care aligned to your recovery and wellness goals.',
    imageSrc: peptideTherapyImg,
    imageAlt: 'Peptide therapy in Leesburg, Florida',
    ctaHref: BOOKING_URL,
    ctaText: 'Book Your Visit',
  },
  {
    id: 'brain-health-wellness',
    title: 'Brain Health and Mental Wellness Support',
    snippet:
      'Stress, mental fatigue, focus issues, and other brain-health concerns can affect how you feel and function in daily life. We offer a supportive, modern approach to brain-focused wellness in a comfortable setting. Benefits include non-invasive wellness options, personalized support, and clear next steps centered around your goals.',
    imageSrc: exomindTherapyImg,
    imageAlt: 'Brain health and mental wellness support in Leesburg, Florida',
    ctaHref: BOOKING_URL,
    ctaText: 'Book Your Visit',
  },
  {
    id: 'mens-sexual-health',
    title: 'Men’s Sexual Health and ED Support',
    snippet:
      'Erectile dysfunction and performance concerns can affect confidence, relationships, and overall well-being. We provide discreet, respectful men’s health support with individualized care designed around your symptoms and goals. Benefits include confidential visits, practical next steps, and care focused on confidence, performance, and long-term wellness.',
    imageSrc: edTreatmentImg,
    imageAlt: 'Men’s sexual health and ED support in Leesburg, Florida',
    ctaHref: BOOKING_URL,
    ctaText: 'Book Your Visit',
  },
  {
    id: 'womens-intimate-wellness',
    title: 'Women’s Intimate Wellness',
    snippet:
      'Changes in comfort, confidence, and intimate wellness can affect both physical and emotional well-being, yet many women hesitate to talk about them. Our care is private, respectful, and tailored to your goals. Benefits include discreet visits, a supportive environment, and a personalized approach focused on comfort and confidence.',
    imageSrc: vaginalRejuvenationImg,
    imageAlt: 'Women’s intimate wellness care in Leesburg, Florida',
    ctaHref: BOOKING_URL,
    ctaText: 'Book Your Visit',
  },
];

function SpecialServices() {
  const seo = usePageSEO();

  return (
    <>
      <SEO {...seo} />
      <TopBar />
      <NavBar />

      <main className="special-services-bg lead">
        <div className="special-services-content">
          {services.map((service, idx) => (
            <KeywordSnippetSection
              key={service.id}
              id={service.id}
              title={service.title}
              snippet={service.snippet}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              reverse={idx % 2 === 1}
            >
              <div className="d-flex flex-wrap gap-3 mb-3">
                <a
                  href={BOOKING_URL}
                  className="text-white special-btn primary lead"
                  target="_blank"
                  rel="noreferrer"
                >
                  Schedule your visit
                </a>
                <a
                  href="/membership"
                  className="text-white special-btn secondary lead"
                >
                  Learn about membership
                </a>
                
              </div>

              <SubscribeInline cardTitle={service.title} />
            </KeywordSnippetSection>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default SpecialServices;