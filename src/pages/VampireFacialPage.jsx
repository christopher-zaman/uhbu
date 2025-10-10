import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import banner from '../assets/banners/vampire-facial-banner.jpeg';
import TextBlock from '../components/TextBlock';
import BulletedTextBlock from '../components/BulletedTextBlock';
import sideImage from '../assets/img/vampire-facial.jpg';

import TextImageSection from '../components/TextImageSection';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';

function VampireFacialPage() {
  const seo = usePageSEO();
  return (
    <>
      <SEO {...seo} />
      <TopBar />
      <NavBar />

      <Hero
        backgroundImage={banner}
        title="Vampire Facial"
        subtitle=""
        textColor="rgba(1, 3, 112, 0.75)"
      />

      

      <TextBlock
        title="What is the Vampire Facial®?"
        body={
            <>
            <p>
                A vampire facial, harnesses the body's own healing mechanisms and cellular resources for skin rejuvenation, utilizing the plasma and platelets found in your blood.
            </p>
            <p>
                Platelets play a key role in healing by fostering cell renewal, boosting collagen formation, enhancing blood circulation, and diminishing inflammation. In this process, blood is drawn and processed in a centrifuge to enrich the plasma, which is then re-injected into the skin, encouraging the development of new collagen and diminishing aging signs.
            </p>
            </>
        }
        footer=""
      />

      <TextImageSection
            bgClass="iv-hydration-bg"
            section={{
                title: 'Vampire Facial Perks',
                description: (
                <>
                    <p>The vampire facial offers a non-invasive treatment option with several aesthetic benefits, including:</p>
                    <ul>
                        <li>Diminishing the visibility of wrinkles, fine lines, and acne scars.</li>
                        <li>Minimizing the appearance of enlarged pores.</li>
                        <li>Refreshing the area around the eyes.</li>
                        <li>Enhancing facial volume for a more youthful look.</li>
                    </ul>
                </>
                ),
                image: sideImage,
                className: 'side-image-style',
                buttonText: 'Book Now',
                buttonLink: '/contact'
            }}
            />

      

        <TextBlock
        title="Benefits of a Vampire Facial"
        body="The Vampire Facial offers a range of aesthetic enhancements by harnessing the body's natural healing abilities. It's an effective alternative to more invasive anti-aging treatments, such as Botox or surgery, providing a rejuvenated complexion. This treatment is multifaceted, addressing issues from fine lines to hair thinning."
        footer=""
      />

      <BulletedTextBlock
        title="Key Benefits Include:"
        bullets={[
            'Facial rejuvenation for a youthful contour and firmer skin',
            'Natural healing with minimal side effects',
            'Improved skin texture and quality',
            'Non-surgical procedure with minimal recovery time',
            'Quick, typically 30 to 60 minutes per session',
        ]}
        paragraph=""
        />



        <TextBlock
            title="Why Choose Ultimate Health DPC in Leesburg, Florida?"
            body="At Ultimate Health DPC, we prioritize your well-being, offering personalized care in a comfortable and discreet environment. Our experienced healthcare professionals are dedicated to providing comprehensive consultations and ensuring your journey to optimal health is tailored to your unique needs."
            footer=""
        />
      
      <Contact />
      <Footer />
    </>
  );
}

export default VampireFacialPage;
