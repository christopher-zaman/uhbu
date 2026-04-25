import React from 'react';
import Footer from '../components/Footer';
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
    problem:
      'Bladder leaks, urgency, and urinary discomfort can interfere with exercise, sleep, travel, and daily confidence.',
    solution:
      'We provide personalized, judgment-free care to help identify what may be contributing to symptoms and guide you toward practical next steps.',
    benefits: [
      'Private, judgment-free visits',
      'Support tailored to real-life symptoms',
      'Care focused on comfort, confidence, and daily function',
    ],
    imageSrc: womensBladderControlImg,
    imageAlt: 'Women’s bladder control care in Leesburg, Florida',
  },
  {
    id: 'womens-hormone-therapy',
    title: 'Women’s Hormone Therapy',
    problem:
      'Hormonal changes can affect energy, sleep, mood, weight, and overall quality of life.',
    solution:
      'Our women’s hormone therapy approach is designed around your symptoms and goals so care feels personal, supportive, and sustainable.',
    benefits: [
      'Personalized support for your symptoms',
      'Thoughtful follow-up and ongoing monitoring',
      'Care focused on balance, wellness, and quality of life',
    ],
    imageSrc: womensHormoneTherapyImg,
    imageAlt: 'Women’s hormone therapy in Leesburg, Florida',
  },
  {
    id: 'bhrt-hormone-optimization',
    title: 'BHRT and Hormone Optimization',
    problem:
      'When hormone-related symptoms affect how you feel day to day, it can be difficult to know where to start.',
    solution:
      'We offer individualized hormone optimization support with clear guidance and ongoing follow-up tailored to your goals.',
    benefits: [
      'Individualized plans based on your goals',
      'Support for women’s and men’s hormone concerns',
      'A relationship-based approach focused on long-term wellness',
    ],
    imageSrc: bhrtImg,
    imageAlt: 'BHRT and hormone optimization in Leesburg, Florida',
  },
  {
    id: 'peptide-therapy',
    title: 'Peptide Therapy',
    problem:
      'If your goals involve recovery, healthy aging, body composition, or performance support, a generic plan may not be enough.',
    solution:
      'Our peptide therapy approach is personalized to your needs and built around structured guidance and follow-up.',
    benefits: [
      'Support tailored to your recovery and wellness goals',
      'Guidance designed for sustainable progress',
      'A personalized plan in a direct primary care setting',
    ],
    imageSrc: peptideTherapyImg,
    imageAlt: 'Peptide therapy in Leesburg, Florida',
  },
  {
    id: 'brain-health-wellness',
    title: 'Brain Health and Mental Wellness Support',
    problem:
      'Stress, mental fatigue, focus issues, and other brain-health concerns can affect how you feel and function in daily life.',
    solution:
      'We offer a supportive, modern approach to brain-focused wellness in a comfortable setting with clear next steps.',
    benefits: [
      'Supportive care centered around your goals',
      'Non-invasive wellness options',
      'Personalized guidance in a comfortable setting',
    ],
    imageSrc: exomindTherapyImg,
    imageAlt: 'Brain health and mental wellness support in Leesburg, Florida',
  },
  {
    id: 'mens-sexual-health',
    title: 'Men’s Sexual Health and ED Support',
    problem:
      'Erectile dysfunction and performance concerns can affect confidence, relationships, and overall well-being.',
    solution:
      'We provide discreet, respectful men’s health support with individualized care designed around your symptoms and goals.',
    benefits: [
      'Confidential, judgment-free visits',
      'Practical next steps tailored to your needs',
      'Care focused on confidence, performance, and long-term wellness',
    ],
    imageSrc: edTreatmentImg,
    imageAlt: 'Men’s sexual health and ED support in Leesburg, Florida',
  },
  {
    id: 'womens-intimate-wellness',
    title: 'Women’s Intimate Wellness',
    problem:
      'Changes in comfort, confidence, and intimate wellness can affect both physical and emotional well-being, yet many women hesitate to talk about them.',
    solution:
      'Our care is private, respectful, and tailored to your goals so you can move forward with clarity and support.',
    benefits: [
      'Discreet visits in a supportive environment',
      'A personalized approach focused on your goals',
      'Care centered on comfort and confidence',
    ],
    imageSrc: vaginalRejuvenationImg,
    imageAlt: 'Women’s intimate wellness care in Leesburg, Florida',
  },
];

function SpecialServices() {
  const seo = usePageSEO();

  return (
    <>
      <SEO {...seo} />
      <main className="special-services-bg lead">
        <div className="special-services-content">
          {services.map((service, idx) => (
            <KeywordSnippetSection
              key={service.id}
              id={service.id}
              title={service.title}
              snippet={`${service.problem} ${service.solution}`}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              reverse={idx % 2 === 1}
            >
              <ul className="text-white mb-3 ps-4">
                {service.benefits.map((benefit, benefitIdx) => (
                  <li key={benefitIdx} className="mb-2">
                    {benefit}
                  </li>
                ))}
              </ul>

              <div className="d-flex flex-wrap gap-3 mb-3">
                <a
                  href={BOOKING_URL}
                  className="text-white lead special-btn primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Schedule your visit
                </a>

                <a
                  href="/membership"
                  className="text-white lead special-btn secondary"
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