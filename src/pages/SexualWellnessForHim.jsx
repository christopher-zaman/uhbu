import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Title from '../components/Title';
import banner from '../assets/img/pt-141-banner.jpg'
import MultiFeatureSection from '../components/MultiFeatureSection';
import FeatureItems from '../components/FeatureItems';
import InfoSplitSection from '../components/InfoSplitSection';
import Footer from '../components/Footer';

const featureList = [
  { 
    icon: "bi-eye", 
    title: "💥 ALMA Duo ED Treatment", 
    subtext: "Known as the “love hormone,” oxytocin can help increase feelings of closeness, arousal, and emotional bonding. It may also enhance natural lubrication and enjoyment of intimacy", 
    color: "#ffbb2c" 
  },
  { 
    icon: "bi-infinity", 
    title: "💉 PT-141 Peptide Therapy", 
    subtext: "This peptide is a powerful libido booster that works on the brain to stimulate arousal. Great for women experiencing low sexual desire or difficulty getting “in the mood”", 
    color: "#5578ff" 
  },
  { 
    icon: "bi-mortarboard", 
    title: "✨ Non-Surgical Labiaplasty", 
    subtext: "Tightens and refines the appearance of the labia using radiofrequency or laser energy—no surgery, no downtime, just a smoother, more youthful look that enhances self-esteem and intimacy", 
    color: "#e80368" 
  },
  { 
    icon: "bi-nut", 
    title: "✨ Mons Pubis Reduction", 
    subtext: "Helps eliminate the appearance of a \"camel toe\" or bulging in tight clothing. A non-invasive, effective way to smooth and flatten the pubic area using radiofrequency or body contouring tools",
    color: "#e361ff" 
  },
  { 
    icon: "bi-shuffle", 
    title: "✨ Labia Plumping with HA Filler + PRP", 
    subtext: "Restores volume to thinning labia for a fuller, more youthful appearance. This treatment also helps protect against discomfort from friction during activities or intimacy",
    color: "#47aeff" 
  },
  // { 
  //   icon: "bi-star", 
  //   title: "Top Rated", 
  //   color: "#ffa76e" 
  // },
  // { 
  //   icon: "bi-x-diamond", 
  //   title: "Unique Options", 
  //   color: "#11dbcf" 
  // },
  // { 
  //   icon: "bi-camera-video", 
  //   title: "Media Control", 
  //   color: "#4233ff" 
  // },
  // { 
  //   icon: "bi-command", 
  //   title: "Shortcut Power", 
  //   color: "#b2904f" 
  // },
  // { 
  //   icon: "bi-dribbble", 
  //   title: "Creative Access", 
  //   color: "#b20969" 
  // },
  // { 
  //   icon: "bi-activity", 
  //   title: "Real-Time Tracking", 
  //   color: "#ff5828" 
  // },
  // { 
  //   icon: "bi-brightness-high", 
  //   title: "Bright Ideas", 
  //   color: "#29cc61" 
  // },
];


const featureSections = [
  {
    title: " Our Sexual Wellness Treatments for Men",
    subheading:(<>
     <p>Sexual health is a key part of a man’s overall well-being, confidence, and connection. Whether you're dealing with performance concerns, low libido, or just not feeling like yourself, we’re here with real solutions that work—no judgment, no pressure.
     </p>
     <p>
     At<strong> Ultimate Health DPC</strong> in Leesburg, we specialize in discreet, personalized care to help men reclaim their vitality, intimacy, and confidence—at every stage of life.
     </p>
    </>),
    description: "",
    extraText: "",    
    image: "/src/assets/img/sermorelin-1.jpg",
    fallbackMessage: ""
  },
  {
    title: "Common Male Sexual Health Concerns",
    subheading: "It’s normal for sexual function to change with age, stress, or health conditions. You might be experiencing:",
    treatments: [
      "Erectile dysfunction (ED)", 
      "Low libido or reduced desire", 
      "Trouble maintaining erections",
      "Delayed or premature ejaculation",
      "Decline in stamina or performance",
      "Performance anxiety",
      "Post-prostate cancer challenges",
    ],
    description: "",
    extraText: (
    <>
    "We’re here to remind you: <strong>you’re not alone—and you’re not out of options.</strong>"
    </>),
    image: "/assets/img/wellness/peptide.jpg",
    fallbackMessage: "This is the fallback message"
  },
  {
    title: "Our Sexual Wellness Treatments for men",
    subheading: "We offer a variety of evidence-based, non-invasive and minimally invasive treatments to help restore function, comfort, and confidence.",
    description:(
      <>
      <h3 className="fst-normal fw-bold mb-2">💥 ALMA Duo ED Treatment</h3>
      <p className="">A non-invasive, pain-free treatment that uses low-intensity shockwave therapy to improve blood flow, restore natural erections, and enhance sexual performance. ALMA Duo:</p>
      </>
    ) ,
    treatments: [
      "Stimulates new blood vessel growth",
      "Improves firmness and spontaneity", 
      "Requires no downtime or medication",
      "Is safe for men with health concerns—including those in remission from prostate cancer",
      ],
    extraText: "This is a great long-term solution that treats the root cause—not just the symptoms—of ED",
    image: "/assets/img/wellness/alma-duo.jpg",
  },
  {
    title: "💉 P-Shot (Priapus Shot®)",
    subheading: "The P-Shot uses your own platelet-rich plasma (PRP) to regenerate tissue and improve blood flow to the penis. Benefits may include:",
    treatments: [
      "Stronger, firmer erections", 
      "Lubrication and moisture", 
      "Urinary leakage",
      "Recurrent vaginal infections",
      "Improved comfort during intercourse"
    ],
    description: "",
    extraText: "This procedure is performed in-office with minimal discomfort and downtime.",
    image: "/assets/img/wellness/p-shot.jpg",
    fallbackMessage: "This is the fallback message"
  },
  {
    title: "💊 Oral ED Medications",
    subheading: "We can prescribe trusted medications like:",
    treatments: [
      "Viagra® (Sildenafil)", 
      "Cialis® (Tadalafil)", 
      "Levitra® (Vardenafil)",
    ],
    description: "",
    extraText: "These medications can help improve erection quality, stamina, and confidence in the bedroom. We'll help you choose the best option based on your needs and medical history.",
    image: "/assets/img/wellness/ed-pills.png",
    fallbackMessage: "This is the fallback message"
  },

  {
    title: "💉 Tri-Mix Injection Therapy",
    subheading: "Tri-Mix is a custom-compounded injectable solution used to treat moderate to severe ED when oral medications don’t work. It produces reliable, firm erections quickly and safely—especially for men with more complex cases.",
    treatments: [
      "We’ll guide you on proper use and dosing to ensure safety and comfort.",
    ],
    description: "",
    extraText: "",
    image: "/assets/img/wellness/sermorelin.png",
    fallbackMessage: "This is the fallback message"
  },

  {
    title: "💉 PT-141 Peptide Therapy",
    subheading:(
        <>
        Unlike ED medications that focus on blood flow, <strong>PT-141 works on the brain</strong> to stimulate sexual desire and arousal. It’s a great option for men with low libido, performance anxiety, or a lack of sexual interest—alone or in combination with other treatments.
        </>
    ),
    treatments: [
        " Let’s restore your confidence—naturally, safely, and with real results.Call today to schedule your private male sexual wellness consultation at our Leesburg office."
    ],
    description: "",
    extraText: "",
    image: "assets/img/wellness/pt-141-purple.jpg",
    
    fallbackMessage: "This is the fallback message"
  },

  {
    title: "You Deserve to Feel Like Yourself Again",
    subheading:(
        <>
        Whether it’s physical, hormonal, or emotional— <strong>we have real answers.</strong> We’ll take the time to listen, evaluate your options, and build a custom plan that fits your lifestyle.

        </>
    ),
    treatments: [
        "Call today to schedule your private male sexual wellness consultation at our Leesburg office."
    ],
    description: "",
    extraText: "",
    image: "/assets/img/wellness/sermorelin-peptide.jpg",
    fallbackMessage: "This is the fallback message"
  },
];

function PShot() {
    return(
      <>
      <TopBar />
      <NavBar />
      <Hero
        backgroundImage={banner}
        // heroImage="/assets/img/hero-img.png"
        title="Sexual Wellness For Him"
        textColor="rgba(1, 3, 112, 0.75)"
        subtitle="Featuring the priapus Shot - designed to enhance your wellness journey."
        videoUrl="https://www.youtube.com/watch?v=92jlApzokh0"
      />
      {/* <Title
        centerTitle={true}
        showHeading={false}
        introText="Sexual Wellness"
        highlightText='For Her'
      /> */}
      
      {/* <FeatureItems 
        items={featureList}
        topTitle="Treatment Options"
        middleTitle="Cosmetic Gynecology – Non-Surgical Options"
      /> */}
      <MultiFeatureSection 
        sections={featureSections} 
      />
      <InfoSplitSection
        paragraph="The P-Shot is a non-surgical, natural approach to improving sexual function and wellness in men. This cutting-edge therapy utilizes platelet-rich plasma extracted from your blood, harnessing the body's natural healing properties to rejuvenate and enhance various aspects of male sexual health"
        leftColumnTitle="Understanding the P-Shot"
        rightColumnTitle="Benefits of the P-Shot"
        listItems={[
          "Erectile Dysfunction (ED) - The P-Shot has shown remarkable success in addressing erectile dysfunction by promoting tissue regeneration and increased blood flow to the genital area.",
          "Enhanced Sensation - Many men have reported heightened sensitivity and improved pleasure following the P-Shot, enhancing overall sexual experiences.",
          "Increased Stamina - By rejuvenating the tissues and promoting blood vessel formation, the P-Shot may contribute to increased stamina and endurance.",
          "Improved Sexual Confidence - Restoring and optimizing sexual function often leads to increased confidence and satisfaction in intimate relationships.",
        ]}
        leftAnimation="fade-right"
        rightAnimation="fade-left"
        // backgroundColor="#0f058b"  // Or any background you like
        // dark={true}
      />


      {/* <FeatureItems 
        items={featureList}
        topTitle="Treatment Options"
        middleTitle="Cosmetic Gynecology – Non-Surgical Options"
      /> */}

        
      <Footer />
      </>
    );
}
export default PShot;