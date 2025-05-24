import React from 'react';
import TopBar from '../components/TopBar';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import Title from '../components/Title';
import MultiFeatureSection from '../components/MultiFeatureSection';
import FeatureItems from '../components/FeatureItems';
import InfoSplitSection from '../components/InfoSplitSection';
import Footer from '../components/Footer';

const featureList = [
  { 
    icon: "bi-eye", 
    title: "💨 Oxytocin Nasal Spray & Tablets", 
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
    title: " Female Sexual Wellness – Leesburg Office",
    subheading: "Women Taking Care of Women",
    description: "Your sexual health is a vital part of your overall well-being—and you deserve care that’s compassionate, respectful, and tailored to your body. At Ultimate Health DPC in Leesburg, we proudly offer advanced, non-surgical solutions to help women feel confident, comfortable, and in control of their sexual health and intimacy",
    extraText: "Whether you’re struggling with discomfort, dryness, low desire, or cosmetic concerns—we’re here for you.",    
    image: "/assets/img/wellness/for-her.jpg",
    fallbackMessage: ""
  },
  {
    title: "Common Female Sexual Wellness Concerns",
    subheading: "Sexual dysfunction in women is more common than most people think. Some of the most frequent issues we treat include:",
    treatments: [
      "Vaginal dryness or discomfort during intimacy", 
      "Painful intercourse (dyspareunia)", 
      "Low libido or decreased arousal",
      "Difficulty reaching orgasm",
      "Urinary incontinence or urgency",
      "Cosmetic concerns with the labia or mons pubis",
      "Loss of confidence due to changes after childbirth, aging, or hormones",
    ],
    description: "",
    extraText: "These issues may be caused by hormone shifts (like menopause or postpartum), past trauma, stress, medication side effects, childbirth, or natural aging. But the good news is—you have options.",
    image: "/assets/img/wellness/for-her.jpg",
    fallbackMessage: "This is the fallback message"
  },
  {
    title: "Our Sexual Wellness Treatments",
    subheading: "We offer a variety of evidence-based, non-invasive and minimally invasive treatments to help restore function, comfort, and confidence.",
    description:(
      <>
      <h3 className="fst-normal fw-bold mb-2">🌸 InMode Empower Platform.</h3>
      <p className="fst-italic">A cutting-edge solution that combines multiple technologies (RF and muscle stimulation) to treat:</p>
      </>
    ) ,
    treatments: [
      "Vaginal laxity and dryness",
      "Stress urinary incontinence", 
      "Decreased sensation",
      "Weak pelvic floor muscles",
      "Poor muscle tone after childbirth",
      "Changes due to menopause"
      ],
    extraText: "Comfortable, non-surgical, and highly effective—Empower helps restore both function and sensation",
    image: "/assets/img/wellness/for-her.jpg",
  },
  {
    title: "🌸 ALMA FemiLift",
    subheading: "This gentle, FDA-cleared laser uses controlled thermal energy to rejuvenate vaginal tissue. FemiLift helps with",
    treatments: [
      "Vaginal tightening and elasticity", 
      "Lubrication and moisture", 
      "Urinary leakage",
      "Recurrent vaginal infections",
      "Improved comfort during intercourse"
    ],
    description: "",
    extraText: "It’s quick, safe, and has no downtime—just better results and more confidence.",
    image: "/assets/img/wellness/for-her.jpg",
    fallbackMessage: "This is the fallback message"
  },
  {
    title: "💉 The O-Shot®",
    subheading: "A revolutionary treatment using your body’s own PRP (Platelet-Rich Plasma) to:",
    treatments: [
      "Increase arousal and natural lubrication", 
      "Improve orgasm sensitivity", 
      "Reduce pain during sex",
      "Treat mild urinary incontinence",
      "Boost overall sexual satisfaction"
    ],
    description: "",
    extraText: "We also offer O-Shot Arousal Oil and O-Shot CBD Lubricant to complement your in-office treatment and support intimacy at home.",
    image: "/assets/img/wellness/for-her.jpg",
    fallbackMessage: "This is the fallback message"
  },
];

function OShot() {
    return(
      <>
      <TopBar />
      <NavBar />
      <Hero
        backgroundImage="assets/img/banners/votiva-vaginal-forma-v.webp"
        heroImage="/assets/img/hero-img.png"
        title="Sexual Wellness For Her"
        subtitle="Featuring the Orgasm Shot - designed to enhance your wellness journey."
        videoUrl="https://www.youtube.com/watch?v=92jlApzokh0"
      />
      <Title
        centerTitle={true}
        showHeading={false}
        introText="Sexual Wellness"
        highlightText='For Her'
      />
      <MultiFeatureSection 
        sections={featureSections} 
      />
      <FeatureItems 
        items={featureList}
        topTitle="Treatment Options"
        middleTitle="Cosmetic Gynecology – Non-Surgical Options"
      />
      <InfoSplitSection
        paragraph="The O-Shot, or Orgasm Shot, is a non-surgical procedure that utilizes Platelet-Rich Plasma (PRP) therapy to rejuvenate and revitalize intimate areas in women. This groundbreaking treatment harnesses the natural healing properties of your own blood to enhance sexual function and address various concerns related to female intimate wellness"
        leftColumnTitle="Understanding the O-Shot"
        rightColumnTitle="Benefits of the O-Shot"
        listItems={[
          "Increased Sensation - The O-Shot has shown promising results in enhancing sexual arousal and pleasure by promoting tissue regeneration and increased blood flow to the genital area.",
          "Improved Lubrication - Many women experience improved lubrication after the O-Shot, leading to enhanced comfort and satisfaction during intimate moments.",
          "Treatment of Sexual Dysfunction - Whether it's difficulty reaching orgasm or other forms of sexual dysfunction, the O-Shot offers a non-invasive solution to address these concerns and improve overall sexual satisfaction.",
          "Enhanced Orgasms - Women often report more intense and frequent orgasms after undergoing the O-Shot, contributing to a heightened sense of well-being.",
        ]}
        leftAnimation="fade-right"
        rightAnimation="fade-left"
        // backgroundColor="#0f058b"  // Or any background you like
        // dark={true}
      />

        
      <Footer />
      </>
    );
}
export default OShot;