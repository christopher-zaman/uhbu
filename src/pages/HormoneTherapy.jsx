import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import Hero from '../components/Hero';

import ContentSection from '../components/ContentSection';
import video from '../assets/videos/hormone-replacement-therapy.mp4';
import contentImage from '../assets/img/hormone-therapy.jpg';
import contentImage1 from '../assets/img/lab-testing.png';
import contentImage2 from '../assets/img/conditions.png';
import MultiFeatureSection from '../components/MultiFeatureSection';

import SideBySideImages from '../components/SideBySideImages';
import beforeImage from '../assets/img/hormone-therapy-1.jpg';
import afterImage from '../assets/img/hormone-therapy-2.jpg';

import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';

function HormoneTherapy() {
  const seo = usePageSEO();
  return (
    <>
    <SEO {...seo} />
    <TopBar />
    <NavBar />
    
    <Hero
    backgroundVideo={video}
    title="Hormone Therapy in Leesburg, FL"
    subtitle="Doctor-guided, personalized care for lasting weight loss"
     />
     <ContentSection
        id="hormone-therapy"
        title="Hormone Therapy in Leesburg, FL"
        subTitle="Why Hormone Health Matters"
        paragraphs={[
          <>
            At <strong>Ultimate Health Direct Primary Care</strong>, we believe healthy aging isn’t just about numbers on a lab report. When your hormones are out of balance, you can feel it—fatigue, brain fog, weight changes, mood swings, hot flashes, or low motivation. Our providers specialize in helping patients restore balance and feel like themselves again.
          </>
        ]}
        listItems={[
            "Hormones act like messengers in your body, controlling energy, sleep, metabolism, mood, and even how your body responds to stress. As we age, levels naturally shift, and sometimes the imbalance becomes disruptive to daily life.",
            
            ]}

        image={contentImage}
        />
        <MultiFeatureSection
  sections={[
    {
      title: "What Our Program Includes",
      description: (
        <>
          <p>
            Our approach to hormone therapy is focused on safety, personalization, and whole-body health.
            Services may include:
          </p>
          <ul className="mb-0">
            <li><span><strong>Comprehensive evaluation</strong> of your symptoms, medical history, and lifestyle</span></li>
            <li><span><strong>Advanced lab testing</strong> to uncover imbalances and guide therapy</span></li>
            <li><span><strong>Individualized treatment plans</strong>that may include bioidentical or other supportive therapies when appropriate</span></li>
            <li><span><strong>Ongoing monitoring and adjustments</strong>to ensure you stay in the optimal range for health and quality of life </span></li>

          </ul>
          <br></br>
          <p><strong>Note:</strong> All treatments are prescribed only after a complete medical evaluation by a licensed provider. Therapy is customized to each patient and may not be suitable for everyone.</p>
        </>
      ),
      treatments: [],
      bgClass: "blue-fade-bg",
      buttonLink: "/hormone-replacement-therapy",
      image: contentImage1,
    },

    {
      title: "Conditions We Support",
      description: (
        <>
          <ul className="mb-0">
            <li><span><strong>Fatigue or low energy</strong></span></li>
            <li><span><strong>Weight changes and stubborn belly fat</strong></span></li>
            <li><span><strong>Sleep problems and night sweats</strong></span></li>
            <li><span><strong>Mood changes, irritability, or brain fog</strong></span></li>
            <li><span><strong>Low libido or intimacy concerns</strong></span></li>
          </ul>
          <br></br>
          
        </>
      ),
      treatments: [],
      bgClass: "blue-fade-bg",
      image: contentImage2,
      //buttonLink: "/hormone-replacement-therapy",
    },

    
    {
      title: "Why Patients Choose Ultimate Health",
      description: (
        <>
          <ul className="mb-0">
            <li><span><strong>Trusted expertise:</strong> Experienced providers in Leesburg offering compassionate, evidence-based care</span></li>
            <li><span><strong>Personalized approach:</strong> No cookie-cutter protocols—every plan is built for you</span></li>
            <li><span><strong>Whole-person focus:</strong> We go beyond prescriptions to include lifestyle and wellness strategies for lasting health</span></li>
          </ul>
          <br></br>
          
        </>
      ),
      treatments: [],
      bgClass: "blue-fade-bg",
      image: beforeImage,
      //buttonLink: "/hormone-replacement-therapy",
    },


    {
      title: "Take the Next Step",
      description: (
        <>
          <p>
            If you’ve been wondering whether hormone imbalance could be holding you back, it’s time to find out. Schedule a consultation at Ultimate Health Direct Primary Care in Leesburg, FL and take control of your health today.
          </p>
          <br/>
        </>
      ),
      treatments: [
                <>
                  <>
                    📞 Call us at{" "}
                    <strong>
                      <a
                        href="tel:+13529016582"
                        className="text-decoration-underline"
                        style={{ color: 'inherit' }}
                      >
                        (352) 901-6582
                      </a>
                    </strong>{" "}
                    to book your consultation.
                  </>
                </>
            ],
      bgClass: "blue-fade-bg",
      image: afterImage,
      //buttonLink: "/hormone-replacement-therapy",
    },

  ]}
/>

        {/* <SideBySideImages
        title=""
        leftImage={beforeImage}
        rightImage={afterImage}
        leftAlt="Before Treatment"
        rightAlt="After Treatment"
        sectionId="before-after"
        className="bg-light hormone-therapy-images"
        
         /> */}
    
    <Footer />
    </>
  );
}

export default HormoneTherapy;
