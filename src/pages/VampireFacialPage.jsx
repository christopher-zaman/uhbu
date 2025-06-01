import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import banner from '../assets/banners/vampire-facial.jpeg';
import TextBlock from '../components/TextBlock';
import BulletedTextBlock from '../components/BulletedTextBlock';

import TextImageSection from '../components/TextImageSection';


function VampireFacialPage() {
  return (
    <>
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
                A vampire facial, or Platelet-Rich Plasma (PRP) therapy, harnesses the body's own healing mechanisms and cellular resources for skin rejuvenation, utilizing the plasma and platelets found in your blood.
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
                image: '/assets/img/',
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

export default VampireFacialPage;
