import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import banner from '../assets/banners/subscribe.png';
import TextBlock from '../components/TextBlock';
import TextImageSection from '../components/TextImageSection';
import BulletedTextBlock from '../components/BulletedTextBlock';
import sideImage from '../assets/img/side-card-image.webp';
import MultiFeatureSection from '../components/MultiFeatureSection';
import Faq from '../components/Faq';
import TripleFeatureFaqGrid from '../components/TripleFeatureFaqGrid';
import ApproachMissionVision from '../components/ApproachMissionVision';
import SingleColumnFeatureSection from '../components/SingleColumnFeatureSection';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';

function OurPractice() {
  const seo = usePageSEO();
  return (
    <>
      <SEO {...seo} />
      <TopBar />
      <NavBar />

      <Hero
        backgroundImage={banner}
        title="Our Practice"
        subtitle="Rooted in Community, Committed to Care"
        textColor="rgba(255, 255, 255, 1)"
      />

      

      <TextBlock
        title="Our Practice"
        body={
            <>
            <p>
                At Ultimate Health DPC, we believe healthcare should be more than just appointments and prescriptions—it should be personal, empowering, and deeply connected to the community we serve.

            </p>
            <p>
                We’re proud to call Leesburg home, and our mission goes far beyond our office walls.

            </p>
            </>
        }
        footer=""
      />

      <TextImageSection
            bgClass="our-practice"
            section={{
                title: 'Community Involvement',
                description: (
                <>
                    <p>We’re actively involved in making Leesburg and Lake County healthier, stronger, and more supported:</p>
                    <ul>
                        <li>🎉 Proud member of the Leesburg Chamber of Commerce</li>
                        <li>🎓 Mentor with Take Stock in Children, helping local students pursue education and brighter futures</li>
                        <li>🚀 Member of Elevate Lake, supporting economic growth and small business success</li>
                        <li>🩺 Precepting site for Nurse Practitioner students, training the next generation of healthcare providers</li>
                    </ul>
                </>
                ),
                image: sideImage,
                className: 'side-image-style',
                buttonText: 'Book a Consultation',
                buttonLink: 'https://app.elationemr.com/book/UltimateHealthDPC?appointment_types',
                buttonTarget: '_blank'
            }}
            />

      

        {/* <TextBlock
        title="Award-Winning Care & Leadership"
        body=""
        footer=""
      /> */}
      <MultiFeatureSection 
      sections={[
        {
            title: "Award-Winning Care & Leadership",
            description: (
                <>
                <p>We’re honored to be recognized for our dedication to both clinical excellence and community leadership:
                </p>
                </>
            ) ,

            treatments: [
                "🏆 Voted “Best of the Best” by Style Magazine in 2023",
                "👑 Amanda Vontrice Gaskin named Lake County’s Business Woman of the Year in 2022",
                "🚀 Finalist for Florida SBDC's Entrepreneur of the Year Award",
                ],
                extraText: "",
            // image: contentImage,
            bgClass: "blue-fade-bg",
        },
        ]}
      />

      <BulletedTextBlock
        title="Mentorship That Makes a Difference"
        bullets={[
            'Amanda Vontrice Gaskin, APRN, is not only a successful Direct Primary Care founder—she’s also a dedicated mentor to new and aspiring DPC providers across the country. Her dynamic mentorship program helps others launch, grow, and thrive in their own practices, with real-world guidance and a heart for servant leadership.',
            
        ]}
        paragraph="When you choose Ultimate Health DPC, you're not just getting a healthcare provider—you’re joining a practice that lives, leads, and gives back."
        />
        <ApproachMissionVision />

        
        <SingleColumnFeatureSection
            sections={[
                {
                title: 'Our Core Values',
                subheading: '',
                treatments: [
                    'Compassion – We lead with kindness, empathy, and understanding in every interaction.',
                    'Integrity – We do what’s right, even when no one is watching. Honesty and transparency guide all we do.',
                    'Access – We believe everyone deserves quality healthcare, regardless of insurance or income.',
                    'Empowerment – We educate and support our patients, helping them take charge of their health.',
                    
                    'Excellence – We provide high-quality care with attention, precision, and a commitment to ongoing learning.',
                    
                    'Innovation – We embrace forward-thinking solutions that improve outcomes and enhance the patient experience.',
                    'Community – We invest in our local community, because healthcare should strengthen the people it serves.',
                    'Authenticity – We show up as our true selves and create a safe, judgment-free space for our patients to do the same.',

                ],
                extraText: '',
                //   video: '/assets/videos/vampire-treatment.mp4',
                }
            ]}
        />



        
           


        {/* <TextBlock
            title="Why Choose Ultimate Health DPC in Leesburg, Florida?"
            body="At Ultimate Health DPC, we prioritize your well-being, offering personalized care in a comfortable and discreet environment. Our experienced healthcare professionals are dedicated to providing comprehensive consultations and ensuring your journey to optimal health is tailored to your unique needs."
            footer=""
        /> */}
      
      <Contact />
      <Footer />
    </>
  );
}

export default OurPractice;
