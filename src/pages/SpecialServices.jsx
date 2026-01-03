import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import TopBar from '../components/TopBar';
import { usePageSEO } from '../hooks/usePageSEO';
import SEO from '../components/SEO';
import KeywordSnippetSection from '../components/KeywordSnippetSection';
import SubscribeInline from '../components/SubscribeInline.jsx';

// Women's Bladder Control / Urinary
import womenBladderControlImg from '../assets/img/seo/regenerative.webp';
import womenBladderTherapyImg from '../assets/img/seo/women-bladder-therapy.webp';
import womensBladderControlImg from '../assets/img/seo/womens-bladder-control.webp';
import urinaryIncontinenceImg from '../assets/img/seo/urinary-incontinence.webp';
import urinaryIncontinenceClinicImg from '../assets/img/seo/urinary-incontinence-clinic.webp';
import urinaryIncontinenceTherapyImg from '../assets/img/seo/urinary-incontinence-therapy.webp';
import bladderLeakageImg from '../assets/img/seo/bladder-leakage.webp';
import nonSurgicalBladderControlImg from '../assets/img/seo/non-surgical-bladder-control.webp';

// Women's Hormone Therapy / Menopause
import womensHormoneTherapyImg from '../assets/img/seo/womens-hormone-therapy.webp';
import hrtWomenImg from '../assets/img/seo/hrt-women.webp';
import bioidenticalHormonesImg from '../assets/img/seo/bioidentical-hormones.webp';
import bioidenticalHrtImg from '../assets/img/seo/bioidentical-hrt.webp';
import menopauseHormoneTherapyImg from '../assets/img/seo/menopause-hormone-therapy.webp';
import menopauseClinicImg from '../assets/img/seo/menopause-clinic.webp';
import womensWellnessHormonesImg from '../assets/img/seo/womens-wellness-hormones.webp';
import femaleHormoneTreatmentImg from '../assets/img/seo/female-hormone-treatment.webp';

// BHRT / Peptides
import bhrtImg from '../assets/img/seo/bhrt.webp';
import bhrtClinicImg from '../assets/img/seo/bhrt-clinic.webp';
import bhrtWomenImg from '../assets/img/seo/bhrt-women.webp';
import testosteroneBhrtImg from '../assets/img/seo/testosterone-ed.webp';
import maleHrtImg from '../assets/img/seo/male-hrt.webp';

import peptideTherapyImg from '../assets/img/seo/peptide-therapy.webp';
import peptideClinicImg from '../assets/img/seo/peptide-clinic.webp';
import peptideInjectionsImg from '../assets/img/seo/peptide-injections.webp';
import antiAgingPeptidesImg from '../assets/img/seo/anti-aging-peptides.webp';
import peptidesWomenImg from '../assets/img/seo/peptides-women.webp';
import peptidesMenImg from '../assets/img/seo/peptides-men.webp';
import muscleRecoveryPeptidesImg from '../assets/img/seo/muscle-recovery-peptides.webp';

// Exomind / Brain Health
import exomindClinicImg from '../assets/img/seo/exomind-clinic.webp';
import exomindTherapyImg from '../assets/img/seo/exomind-therapy.webp';
import exomindTreatmentImg from '../assets/img/seo/exomind-treatment.webp';
import brainHealthClinicImg from '../assets/img/seo/brain-health-clinic.webp';

// Erectile Dysfunction / Men's Health
import edClinicImg from '../assets/img/seo/ed-clinic.webp';
import edTreatmentImg from '../assets/img/seo/ed-treatment.webp';
import mensHealthEdImg from '../assets/img/seo/mens-health-ed.webp';
import nonSurgicalEdImg from '../assets/img/seo/non-surgical-ed.webp';
import testosteroneEdImg from '../assets/img/seo/testosterone-ed.webp';
import dpcEdImg from '../assets/img/seo/dpc-ed.webp';

// Vaginal Rejuvenation / Women's Intimate Health
import vaginalRejuvenationImg from '../assets/img/seo/vaginal-rejuvenation.webp';
import vaginalRejuvenationClinicImg from '../assets/img/seo/vaginal-rejuvenation-clinic.webp';
import nonSurgicalVaginalRejuvenationImg from '../assets/img/seo/non-surgical-vaginal-rejuvenation.webp';
import laserVaginalRejuvenationImg from '../assets/img/seo/laser-vaginal-rejuvenation.webp';
import vaginalTighteningImg from '../assets/img/seo/vaginal-tightening.webp';

const services = [
  // Women's Bladder Control / Urinary  -> /womens-health
  {
    title: "Bladder control treatment",
    snippet:
      "At Ultimate Health Direct Primary Care in Leesburg, Florida, we offer personalized options for women seeking bladder control treatment, with a focus on comfort, confidence, and long-term support.",
    imageSrc: womensBladderControlImg,
    imageAlt: "Women’s bladder control care in Leesburg, Florida",
    ctaHref: "/womens-health",
    ctaText: "Learn more about bladder control care for women",
  },
  {
    title: "Bladder control therapy near me",
    snippet:
      "If you’re exploring bladder control therapy, our Leesburg, Florida team at Ultimate Health Direct Primary Care focuses on identifying triggers and building a plan that fits your daily routine.",
    imageSrc: womenBladderControlImg,
    imageAlt: "Bladder control therapy support",
    ctaHref: "/womens-health",
    ctaText: "Explore women’s bladder control therapy options",
  },
  {
    title: "Womens bladder control",
    snippet:
      "Women’s bladder control concerns are common and treatable. Ultimate Health Direct Primary Care in Leesburg, Florida provides supportive, judgment-free care tailored to your needs.",
    imageSrc: womenBladderTherapyImg,
    imageAlt: "Women’s bladder control support",
    ctaHref: "/womens-health",
    ctaText: "See women’s bladder control treatment options",
  },
  {
    title: "Urinary incontinence treatment",
    snippet:
      "For urinary incontinence treatment in Leesburg, Florida, Ultimate Health Direct Primary Care offers a clear, step-by-step approach to help reduce leaks and improve confidence.",
    imageSrc: urinaryIncontinenceImg,
    imageAlt: "Urinary incontinence treatment",
    ctaHref: "/womens-health",
    ctaText: "Learn more about urinary incontinence treatment for women",
  },
  {
    title: "Urinary incontinence clinic",
    snippet:
      "If you’re searching for a urinary incontinence clinic, Ultimate Health Direct Primary Care in Leesburg, Florida provides private, personalized visits and ongoing support.",
    imageSrc: urinaryIncontinenceClinicImg,
    imageAlt: "Urinary incontinence clinic in Leesburg, Florida",
    ctaHref: "/womens-health",
    ctaText: "Visit our women’s health clinic for urinary incontinence support",
  },
  {
    title: "Urinary incontinence therapy near me",
    snippet:
      "Need urinary incontinence therapy near you? Ultimate Health Direct Primary Care in Leesburg, Florida offers patient-focused care with practical next steps based on your symptoms.",
    imageSrc: urinaryIncontinenceTherapyImg,
    imageAlt: "Urinary incontinence therapy near Leesburg, Florida",
    ctaHref: "/womens-health",
    ctaText: "Explore urinary incontinence therapy options in women’s health",
  },
  {
    title: "Bladder leakage treatment",
    snippet:
      "Bladder leakage can disrupt work, sleep, and exercise. Ultimate Health Direct Primary Care in Leesburg, Florida helps women address bladder leakage treatment with a plan built for real life.",
    imageSrc: bladderLeakageImg,
    imageAlt: "Bladder leakage treatment",
    ctaHref: "/womens-health",
    ctaText: "Learn more about bladder leakage treatment for women",
  },
  {
    title: "Non surgical bladder control treatment",
    snippet:
      "If you’re seeking non surgical bladder control treatment, Ultimate Health Direct Primary Care in Leesburg, Florida can guide you through options aimed at improving control without major downtime.",
    imageSrc: nonSurgicalBladderControlImg,
    imageAlt: "Non-surgical bladder control treatment",
    ctaHref: "/womens-health",
    ctaText: "See non-surgical options for bladder control in women’s health",
  },

  // Women's Hormone Therapy / Menopause  -> /hormone-replacement-therapy
  {
    title: "Womens hormone therapy",
    snippet:
      "Ultimate Health Direct Primary Care in Leesburg, Florida provides women’s hormone therapy with a personalized approach to support energy, mood, and overall wellness.",
    imageSrc: womensHormoneTherapyImg,
    imageAlt: "Women’s hormone therapy in Leesburg, Florida",
    ctaHref: "/hormone-replacement-therapy",
    ctaText: "Learn more about hormone replacement therapy for women",
  },
  {
    title: "Womens hormone therapy near me",
    snippet:
      "Searching for women’s hormone therapy near you? Our Leesburg, Florida team at Ultimate Health Direct Primary Care offers individualized care designed around your symptoms and goals.",
    imageSrc: womensHormoneTherapyImg,
    imageAlt: "Women’s hormone therapy near Leesburg, Florida",
    ctaHref: "/hormone-replacement-therapy",
    ctaText: "Explore women’s hormone therapy options near Leesburg",
  },
  {
    title: "Hormone replacement therapy for women",
    snippet:
      "For hormone replacement therapy for women in Leesburg, Florida, Ultimate Health Direct Primary Care focuses on safe, structured care and ongoing check-ins to support how you feel day to day.",
    imageSrc: hrtWomenImg,
    imageAlt: "Hormone replacement therapy for women",
    ctaHref: "/hormone-replacement-therapy",
    ctaText: "Explore hormone replacement therapy options for women",
  },
  {
    title: "Bioidentical hormone therapy",
    snippet:
      "If you’re considering bioidentical hormone therapy, Ultimate Health Direct Primary Care in Leesburg, Florida provides patient-centered guidance to help you navigate next steps with confidence.",
    imageSrc: bioidenticalHormonesImg,
    imageAlt: "Bioidentical hormone therapy",
    ctaHref: "/hormone-replacement-therapy",
    ctaText: "Learn more about bioidentical hormone therapy options",
  },
  {
    title: "Bioidentical hormone replacement therapy",
    snippet:
      "Ultimate Health Direct Primary Care in Leesburg, Florida offers bioidentical hormone replacement therapy with a personalized plan designed to support your wellness goals over time.",
    imageSrc: bioidenticalHrtImg,
    imageAlt: "Bioidentical hormone replacement therapy",
    ctaHref: "/hormone-replacement-therapy",
    ctaText: "Explore bioidentical hormone replacement therapy in Leesburg",
  },
  {
    title: "Hormone therapy for menopause",
    snippet:
      "Hormone therapy for menopause can help when symptoms interfere with daily life. Ultimate Health Direct Primary Care in Leesburg, Florida provides supportive, individualized care for women.",
    imageSrc: menopauseHormoneTherapyImg,
    imageAlt: "Hormone therapy for menopause",
    ctaHref: "/hormone-replacement-therapy",
    ctaText: "Learn more about menopause hormone therapy options",
  },
  {
    title: "Menopause hormone therapy clinic",
    snippet:
      "Looking for a menopause hormone therapy clinic? Ultimate Health Direct Primary Care serves Leesburg, Florida with discreet visits and a step-by-step plan based on your symptoms.",
    imageSrc: menopauseClinicImg,
    imageAlt: "Menopause hormone therapy clinic in Leesburg, Florida",
    ctaHref: "/hormone-replacement-therapy",
    ctaText: "Explore menopause hormone therapy at our clinic",
  },
  {
    title: "Womens wellness hormone therapy",
    snippet:
      "Women’s wellness hormone therapy at Ultimate Health Direct Primary Care in Leesburg, Florida is designed to support your overall well-being with personalized care and ongoing follow-up.",
    imageSrc: womensWellnessHormonesImg,
    imageAlt: "Women’s wellness hormone therapy",
    ctaHref: "/hormone-replacement-therapy",
    ctaText: "Explore women’s wellness-focused hormone therapy",
  },
  {
    title: "Female hormone treatment near me",
    snippet:
      "Need female hormone treatment near you? Ultimate Health Direct Primary Care in Leesburg, Florida provides individualized support to help you feel more balanced and in control.",
    imageSrc: femaleHormoneTreatmentImg,
    imageAlt: "Female hormone treatment near Leesburg, Florida",
    ctaHref: "/hormone-replacement-therapy",
    ctaText: "Learn more about female hormone treatment options near you",
  },

  // BHRT -> /hormone-replacement-therapy (closest match)
  {
    title: "BHRT",
    snippet:
      "BHRT at Ultimate Health Direct Primary Care in Leesburg, Florida is centered on individualized care—helping you address symptoms with a plan aligned to your goals and follow-up needs.",
    imageSrc: bhrtImg,
    imageAlt: "BHRT care in Leesburg, Florida",
    ctaHref: "/hormone-replacement-therapy",
    ctaText: "Learn more about BHRT and hormone replacement therapy",
  },
  {
    title: "BHRT near me",
    snippet:
      "Searching for BHRT near you? Ultimate Health Direct Primary Care serves Leesburg, Florida with personalized hormone support and clear next steps based on your concerns.",
    imageSrc: bhrtImg,
    imageAlt: "BHRT near Leesburg, Florida",
    ctaHref: "/hormone-replacement-therapy",
    ctaText: "Explore BHRT options near Leesburg, Florida",
  },
  {
    title: "BHRT clinic",
    snippet:
      "If you’re looking for a BHRT clinic in Leesburg, Florida, Ultimate Health Direct Primary Care offers patient-focused care with a structured plan and ongoing check-ins.",
    imageSrc: bhrtClinicImg,
    imageAlt: "BHRT clinic in Leesburg, Florida",
    ctaHref: "/hormone-replacement-therapy",
    ctaText: "Learn more about BHRT clinic services and follow-up care",
  },
  {
    title: "BHRT for women",
    snippet:
      "BHRT for women at Ultimate Health Direct Primary Care in Leesburg, Florida is designed to support energy, mood, and overall wellness with care tailored to your symptoms.",
    imageSrc: bhrtWomenImg,
    imageAlt: "BHRT for women",
    ctaHref: "/hormone-replacement-therapy",
    ctaText: "Explore BHRT for women and hormone therapy options",
  },
  {
    title: "Testosterone BHRT therapy",
    snippet:
      "Testosterone BHRT therapy may be considered in specific situations. Ultimate Health Direct Primary Care in Leesburg, Florida provides personalized guidance and ongoing monitoring based on your goals.",
    imageSrc: testosteroneBhrtImg,
    imageAlt: "Testosterone BHRT therapy",
    ctaHref: "/mens-health",
    ctaText: "Learn more about men’s hormone optimization and testosterone support",
  },
  {
    title: "Male hormone replacement therapy",
    snippet:
      "Male hormone replacement therapy at Ultimate Health Direct Primary Care in Leesburg, Florida is tailored to your symptoms and lifestyle, with supportive follow-up to help you stay on track.",
    imageSrc: maleHrtImg,
    imageAlt: "Male hormone replacement therapy",
    ctaHref: "/mens-health",
    ctaText: "Explore male hormone replacement therapy in men’s health care",
  },

  // Peptide Therapy -> /peptide-therapy
  {
    title: "Peptide therapy",
    snippet:
      "Peptide therapy at Ultimate Health Direct Primary Care in Leesburg, Florida is offered with a personalized approach focused on wellness goals, recovery, and long-term support.",
    imageSrc: peptideTherapyImg,
    imageAlt: "Peptide therapy in Leesburg, Florida",
    ctaHref: "/peptide-therapy",
    ctaText: "Learn more about peptide therapy and wellness support",
  },
  {
    title: "Peptide therapy near me",
    snippet:
      "Looking for peptide therapy near you? Ultimate Health Direct Primary Care serves Leesburg, Florida with individualized peptide care aligned to your goals and progress.",
    imageSrc: peptideTherapyImg,
    imageAlt: "Peptide therapy near Leesburg, Florida",
    ctaHref: "/peptide-therapy",
    ctaText: "Explore peptide therapy options near Leesburg, Florida",
  },
  {
    title: "Peptide therapy clinic",
    snippet:
      "If you’re searching for a peptide therapy clinic, Ultimate Health Direct Primary Care in Leesburg, Florida provides clear guidance, follow-up, and patient-centered care.",
    imageSrc: peptideClinicImg,
    imageAlt: "Peptide therapy clinic in Leesburg, Florida",
    ctaHref: "/peptide-therapy",
    ctaText: "Learn more about our peptide therapy clinic approach",
  },
  {
    title: "Peptide injections",
    snippet:
      "Peptide injections are offered at Ultimate Health Direct Primary Care in Leesburg, Florida with an individualized plan designed around your wellness and recovery goals.",
    imageSrc: peptideInjectionsImg,
    imageAlt: "Peptide injections",
    ctaHref: "/peptide-therapy",
    ctaText: "Learn more about peptide injections and personalized plans",
  },
  {
    title: "Peptide injections near me",
    snippet:
      "Need peptide injections near you? Ultimate Health Direct Primary Care in Leesburg, Florida provides personalized support and follow-up so your plan fits your routine.",
    imageSrc: peptideInjectionsImg,
    imageAlt: "Peptide injections near Leesburg, Florida",
    ctaHref: "/peptide-therapy",
    ctaText: "Explore peptide injection options near Leesburg, Florida",
  },
  {
    title: "Anti aging peptide therapy",
    snippet:
      "Anti aging peptide therapy at Ultimate Health Direct Primary Care in Leesburg, Florida is approached with personalized care focused on supporting wellness, recovery, and healthy aging goals.",
    imageSrc: antiAgingPeptidesImg,
    imageAlt: "Anti-aging peptide therapy",
    ctaHref: "/peptide-therapy",
    ctaText: "Learn more about peptide therapy for healthy aging goals",
  },
  {
    title: "Peptide therapy for women",
    snippet:
      "Peptide therapy for women at Ultimate Health Direct Primary Care in Leesburg, Florida is tailored to your goals, with supportive follow-up to track how you’re feeling over time.",
    imageSrc: peptidesWomenImg,
    imageAlt: "Peptide therapy for women",
    ctaHref: "/peptide-therapy",
    ctaText: "Explore peptide therapy options for women",
  },
  {
    title: "Peptide therapy for men",
    snippet:
      "Peptide therapy for men at Ultimate Health Direct Primary Care in Leesburg, Florida is personalized to your wellness and recovery goals, with guidance designed for sustainable results.",
    imageSrc: peptidesMenImg,
    imageAlt: "Peptide therapy for men",
    ctaHref: "/peptide-therapy",
    ctaText: "Explore peptide therapy options for men",
  },
  {
    title: "Peptide clinic near me",
    snippet:
      "Searching for a peptide clinic near you? Ultimate Health Direct Primary Care supports patients in Leesburg, Florida with individualized plans and consistent follow-up.",
    imageSrc: peptideClinicImg,
    imageAlt: "Peptide clinic near Leesburg, Florida",
    ctaHref: "/peptide-therapy",
    ctaText: "Learn more about peptide clinic care near Leesburg",
  },
  {
    title: "Peptide treatment for muscle recovery",
    snippet:
      "Peptide treatment for muscle recovery at Ultimate Health Direct Primary Care in Leesburg, Florida focuses on supporting your training, recovery, and wellness goals with a personalized plan.",
    imageSrc: muscleRecoveryPeptidesImg,
    imageAlt: "Peptide treatment for muscle recovery",
    ctaHref: "/peptide-therapy",
    ctaText: "Learn more about peptides for recovery and performance goals",
  },

  // Exomind / Brain Health -> /mental-wellness
  {
    title: "Exomind clinic",
    snippet:
      "Ultimate Health Direct Primary Care in Leesburg, Florida offers an Exomind clinic experience focused on brain-focused wellness goals in a supportive, patient-centered setting.",
    imageSrc: exomindClinicImg,
    imageAlt: "Exomind clinic in Leesburg, Florida",
    ctaHref: "/mental-wellness",
    ctaText: "Explore brain-focused wellness options and mental wellness support",
  },
  {
    title: "Exomind therapy",
    snippet:
      "Exomind therapy at Ultimate Health Direct Primary Care in Leesburg, Florida is designed for patients seeking a modern, non-invasive approach to brain-focused wellness support.",
    imageSrc: exomindTherapyImg,
    imageAlt: "Exomind therapy",
    ctaHref: "/mental-wellness",
    ctaText: "Learn more about mental wellness support and brain health care",
  },
  {
    title: "Exomind treatment near me",
    snippet:
      "Looking for Exomind treatment near you? Ultimate Health Direct Primary Care serves Leesburg, Florida with a patient-focused experience and clear next steps based on your goals.",
    imageSrc: exomindTreatmentImg,
    imageAlt: "Exomind treatment near Leesburg, Florida",
    ctaHref: "/mental-wellness",
    ctaText: "Explore non-invasive mental wellness support near Leesburg",
  },
  {
    title: "Brain health clinic",
    snippet:
      "If you’re searching for a brain health clinic in Leesburg, Florida, Ultimate Health Direct Primary Care offers supportive care focused on wellness goals, lifestyle factors, and long-term follow-through.",
    imageSrc: brainHealthClinicImg,
    imageAlt: "Brain health clinic in Leesburg, Florida",
    ctaHref: "/mental-wellness",
    ctaText: "Learn more about brain health and mental wellness care",
  },

  // Erectile Dysfunction / Men's Health -> /mens-health
  {
    title: "Erectile dysfunction clinic",
    snippet:
      "Ultimate Health Direct Primary Care in Leesburg, Florida offers discreet support through our erectile dysfunction clinic approach—focused on privacy, individualized care, and clear next steps.",
    imageSrc: edClinicImg,
    imageAlt: "Erectile dysfunction clinic in Leesburg, Florida",
    ctaHref: "/mens-health",
    ctaText: "Learn more about erectile dysfunction support in men’s health",
  },
  {
    title: "Erectile dysfunction clinic near me",
    snippet:
      "Searching for an erectile dysfunction clinic near you? Ultimate Health Direct Primary Care serves Leesburg, Florida with confidential, patient-centered men’s health care.",
    imageSrc: edClinicImg,
    imageAlt: "Erectile dysfunction clinic near Leesburg, Florida",
    ctaHref: "/mens-health",
    ctaText: "Explore men’s health care for erectile dysfunction near Leesburg",
  },
  {
    title: "Erectile dysfunction treatment",
    snippet:
      "Erectile dysfunction treatment at Ultimate Health Direct Primary Care in Leesburg, Florida starts with understanding the full picture—then building a plan aligned to your health and goals.",
    imageSrc: edTreatmentImg,
    imageAlt: "Erectile dysfunction treatment",
    ctaHref: "/mens-health",
    ctaText: "Explore erectile dysfunction treatment options in men’s health",
  },
  {
    title: "ED clinic",
    snippet:
      "If you’re looking for an ED clinic in Leesburg, Florida, Ultimate Health Direct Primary Care provides a respectful, discreet environment and individualized men’s health support.",
    imageSrc: edClinicImg,
    imageAlt: "ED clinic",
    ctaHref: "/mens-health",
    ctaText: "Learn more about ED clinic support in men’s health",
  },
  {
    title: "ED clinic near me",
    snippet:
      "Need an ED clinic near you? Ultimate Health Direct Primary Care supports men in Leesburg, Florida with confidential visits and a patient-focused approach.",
    imageSrc: edClinicImg,
    imageAlt: "ED clinic near Leesburg, Florida",
    ctaHref: "/mens-health",
    ctaText: "Explore ED clinic care near Leesburg, Florida",
  },
  {
    title: "ED treatment",
    snippet:
      "ED treatment at Ultimate Health Direct Primary Care in Leesburg, Florida is personalized—built around your symptoms, lifestyle, and long-term wellness goals.",
    imageSrc: edTreatmentImg,
    imageAlt: "ED treatment",
    ctaHref: "/mens-health",
    ctaText: "Learn more about personalized ED treatment options",
  },
  {
    title: "Mens health ED clinic",
    snippet:
      "As a men’s health ED clinic serving Leesburg, Florida, Ultimate Health Direct Primary Care prioritizes privacy and practical next steps to support performance and confidence.",
    imageSrc: mensHealthEdImg,
    imageAlt: "Men’s health ED clinic",
    ctaHref: "/mens-health",
    ctaText: "Explore men’s health clinic support for ED",
  },
  {
    title: "Mens health ED treatment",
    snippet:
      "Men’s health ED treatment at Ultimate Health Direct Primary Care in Leesburg, Florida focuses on individualized care and ongoing support to help you feel your best.",
    imageSrc: mensHealthEdImg,
    imageAlt: "Men’s health ED treatment",
    ctaHref: "/mens-health",
    ctaText: "Learn more about men’s health ED treatment options",
  },
  {
    title: "Non surgical erectile dysfunction treatment",
    snippet:
      "If you’re seeking non surgical erectile dysfunction treatment, Ultimate Health Direct Primary Care in Leesburg, Florida offers confidential guidance and a personalized care plan.",
    imageSrc: nonSurgicalEdImg,
    imageAlt: "Non-surgical erectile dysfunction treatment",
    ctaHref: "/mens-health",
    ctaText: "Explore non-surgical erectile dysfunction treatment options",
  },
  {
    title: "Testosterone therapy for ED",
    snippet:
      "Testosterone therapy for ED may be part of a broader men’s health plan for some patients. Ultimate Health Direct Primary Care in Leesburg, Florida provides individualized guidance and follow-up.",
    imageSrc: testosteroneEdImg,
    imageAlt: "Testosterone therapy for ED",
    ctaHref: "/mens-health",
    ctaText: "Learn more about testosterone support for men’s health",
  },
  {
    title: "ED clinic direct primary care",
    snippet:
      "For an ED clinic in a direct primary care setting, Ultimate Health Direct Primary Care in Leesburg, Florida offers personalized, relationship-based care with privacy and continuity.",
    imageSrc: dpcEdImg,
    imageAlt: "ED clinic direct primary care",
    ctaHref: "/mens-health",
    ctaText: "Explore direct primary care for men’s health and ED support",
  },

  // Vaginal Rejuvenation / Women's Intimate Health -> /womens-health
  {
    title: "Vaginal rejuvenation",
    snippet:
      "Ultimate Health Direct Primary Care in Leesburg, Florida offers vaginal rejuvenation support with a discreet, patient-centered approach focused on comfort and confidence.",
    imageSrc: vaginalRejuvenationImg,
    imageAlt: "Vaginal rejuvenation in Leesburg, Florida",
    ctaHref: "/womens-health",
    ctaText: "Learn more about vaginal rejuvenation and women’s intimate health",
  },
  {
    title: "Vaginal rejuvenation near me",
    snippet:
      "Searching for vaginal rejuvenation near you? Ultimate Health Direct Primary Care serves Leesburg, Florida with private, supportive care tailored to your goals.",
    imageSrc: vaginalRejuvenationImg,
    imageAlt: "Vaginal rejuvenation near Leesburg, Florida",
    ctaHref: "/womens-health",
    ctaText: "Explore vaginal rejuvenation options near Leesburg, Florida",
  },
  {
    title: "Vaginal rejuvenation clinic",
    snippet:
      "If you’re looking for a vaginal rejuvenation clinic, Ultimate Health Direct Primary Care in Leesburg, Florida provides a comfortable setting and individualized guidance.",
    imageSrc: vaginalRejuvenationClinicImg,
    imageAlt: "Vaginal rejuvenation clinic in Leesburg, Florida",
    ctaHref: "/womens-health",
    ctaText: "Learn more about our women’s health clinic and intimate wellness care",
  },
  {
    title: "Non surgical vaginal rejuvenation",
    snippet:
      "Non surgical vaginal rejuvenation at Ultimate Health Direct Primary Care in Leesburg, Florida is approached with privacy, education, and care tailored to your comfort.",
    imageSrc: nonSurgicalVaginalRejuvenationImg,
    imageAlt: "Non-surgical vaginal rejuvenation",
    ctaHref: "/womens-health",
    ctaText: "Explore non-surgical vaginal rejuvenation options",
  },
  {
    title: "Laser vaginal rejuvenation",
    snippet:
      "For laser vaginal rejuvenation inquiries in Leesburg, Florida, Ultimate Health Direct Primary Care provides patient-focused guidance and a discreet care experience.",
    imageSrc: laserVaginalRejuvenationImg,
    imageAlt: "Laser vaginal rejuvenation",
    ctaHref: "/womens-health",
    ctaText: "Learn more about laser-based vaginal rejuvenation support",
  },
  {
    title: "Vaginal tightening therapy",
    snippet:
      "Vaginal tightening therapy at Ultimate Health Direct Primary Care in Leesburg, Florida is offered with a respectful, discreet approach focused on your comfort and goals.",
    imageSrc: vaginalTighteningImg,
    imageAlt: "Vaginal tightening therapy",
    ctaHref: "/womens-health",
    ctaText: "Explore vaginal tightening therapy and women’s intimate health care",
  },
  {
    title: "Vaginal tightening treatment near me",
    snippet:
      "Looking for vaginal tightening treatment near you? Ultimate Health Direct Primary Care supports patients in Leesburg, Florida with private visits and individualized care.",
    imageSrc: vaginalTighteningImg,
    imageAlt: "Vaginal tightening treatment near Leesburg, Florida",
    ctaHref: "/womens-health",
    ctaText: "Learn more about vaginal tightening treatment near Leesburg",
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
              key={`${service.title}-${idx}`}
              title={service.title}
              snippet={service.snippet}
              imageSrc={service.imageSrc}
              imageAlt={service.imageAlt}
              reverse={idx % 2 === 1}

              // NEW
              ctaHref={service.ctaHref}
              ctaText={service.ctaText}
            >
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
