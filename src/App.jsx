import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Home from './pages/Home';
import SexualWellnessTreatments from './pages/SexualWellnessTreatments';
import OShot from './pages/SexualWellnessForHer';
import PShot from './pages/SexualWellnessForHim';
import Duo from './pages/Duo';

import Contrave from './pages/Contrave';
import Calocurb from './pages/Calocurb';




import ScrollToTop from './components/ScrollToTop';
import HormoneTherapy from './pages/HormoneTherapy';
import WeightLoss from './pages/WeightLoss';
import Estrogen from './pages/Estrogen';
import Progesterone from './pages/Progesterone';
import PeriMenopause from './pages/PeriMenopause';
import Testosterone from './pages/Testosterone';
import PeptideTherapy from './pages/PeptideTherapy';
import CJC1295Ipamorelin from './pages/CJC-1295-Ipamorelin';
import BPC157 from './pages/BPC-157';
import PT141 from './pages/PT141';
import AOD9604 from './pages/AOD9604';

import AboutUs from './pages/AboutUs';
import PrimaryCare from './pages/PrimaryCare';
import VitaminInjections from './pages/VitaminInjections';
import VitaminInfusions from './pages/VitaminInfusions';
import VampireFacialPage from './pages/VampireFacialPage';
import ContactUs from './pages/ContactUs';
import OurPractice from './pages/OurPractice';
import SkinPen from './pages/SkinPen';
import Toskani from './pages/Toskani';
import Neurotoxins from './pages/Neurotoxins';
import DermalFiller from './pages/DermalFiller';
import AlmaFemiLift from './pages/AlmaFemiLift';
import Careers from './pages/Careers';
import WomensHealth from './pages/WomensHealth';
import MensHealth from './pages/MensHealth';
import Telemedicine from './pages/Telemedicine';
import MentalHealth from './pages/MentalHealth';
import HairRestoration from './pages/HairRestoration';
import MentalWellness from './pages/MentalWellness';
import Blog from './pages/Blog';
import Media from './pages/Media';
import MediaPost from './pages/MediaPost';
import BlogPost from './pages/BlogPost';
import usePageTracking from './hooks/usePageTracking';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import PaymentPlans from './pages/PaymentPlans';
import BlogCMS from './pages/BlogCMS';
import BlogPostCMS from './pages/BlogPostCMS';

function App() {
  usePageTracking();
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // only animate once
    });
  }, []);

  function AdminRedirect() {
  useEffect(() => {
    window.location.replace('/admin/index.html'); // explicit file path
  }, []);
  return null;
}
  
  return (
    <>
    
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      
      <Route path="/contrave" element={<Contrave />} />
      <Route path="/calocurb" element={<Calocurb />} />
      
      
     
      


      <Route path="/weight-loss" element={<WeightLoss />} />
      <Route path="/hormone-replacement-therapy" element={<HormoneTherapy />} />
      <Route path="/estrogen" element={<Estrogen />} />
      <Route path="/progesterone" element={<Progesterone />} />
      <Route path="/peri-menopause" element={<PeriMenopause />} />
      <Route path="/testosterone" element={<Testosterone />} />
      <Route path="/peptide-therapy" element={<PeptideTherapy />} />
      <Route path="/CJC-1295-Ipamorelin" element={<CJC1295Ipamorelin />} />
      <Route path="/BPC-157" element={<BPC157 />} />
      <Route path="/pt-141" element={<PT141 />} />
      <Route path="/aod-9604" element={<AOD9604 />} />
      


      <Route path="/sexual-wellness-treatments" element={<SexualWellnessTreatments />} />
      <Route path="/sexual-wellness-for-her" element={<OShot />} />
      <Route path="/sexual-wellness-for-him" element={<PShot />} />
      <Route path="/duo" element={<Duo />} />
      <Route path="/vampire-facial" element={<VampireFacialPage />} />

      <Route path="/primary-care" element={<PrimaryCare />} />
      <Route path="/womens-health" element={<WomensHealth />} />
      <Route path="/mens-health" element={<MensHealth />} />
      <Route path="/telemedicine" element={<Telemedicine />} />
      <Route path="/hair-restoration" element={<HairRestoration />} />
      <Route path="/mental-health" element={<MentalHealth />} />
      <Route path="/mental-wellness" element={<MentalWellness />} />


      <Route path="/vitamin-injections" element={<VitaminInjections />} />
      <Route path="/vitamin-infusions" element={<VitaminInfusions />} />
      <Route path="/skin-pen" element={<SkinPen />} />
      <Route path="/toskani" element={<Toskani />} />
      <Route path="/neurotoxin" element={<Neurotoxins />} />
      <Route path="/dermal-filler" element={<DermalFiller />} />
      <Route path="/alma-femi-lift" element={<AlmaFemiLift />} />

      <Route path="/meet-us" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/our-practice" element={<OurPractice />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/media" element={<Media />} />
      <Route path="/media/:slug" element={<MediaPost />} />
      <Route path="/blog/:slug" element={<BlogPost />} /> 
      <Route path="/privacy-policy" element={<PrivacyPolicy />} /> 
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} /> 
      <Route path="/payment-plans" element={<PaymentPlans />} /> 

      <Route path="/blog-cms" element={<BlogCMS />} />
      <Route path="/blog-cms/:slug" element={<BlogPostCMS />} />


{/* Create a proper 404 page */}
      <Route path="*" element={<div style={{padding: '3rem'}}>
        <h1>Page not found</h1>
        <p>Try the menu above or <a href="/">go home</a>.</p>
      </div>} />

<Route path="/admin" element={<AdminRedirect />} />
      
    </Routes>


    
    </>
  );
}

export default App;

