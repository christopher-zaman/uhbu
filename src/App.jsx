import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Home from './pages/Home';
import StarterPage from './pages/StarterPage';
import SexualWellnessTreatments from './pages/SexualWellnessTreatments';
import OShot from './pages/SexualWellnessForHer';
import PShot from './pages/SexualWellnessForHim';
import Duo from './pages/Duo';
import VampireFacial from './pages/VampireFacial';
import Semaglutide from './pages/Semaglutide';
import Tirzepatide from './pages/Tirzepatide';
import Contrave from './pages/Contrave';
import Calocurb from './pages/Calocurb';
import Retatrutide from './pages/Retatrutide';
import LowDoseNaltrexone from './pages/LowDoseNaltrexone';
import Sermorelin from './pages/Sermorelin';
import Phentermine from './pages/Phentermine';
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
import PT141Bremelonotide from './pages/PT-141-Bremelonotide';
import AOD9604 from './pages/AOD9604';
import Tesamorelin from './pages/Tesamorelin';
import AboutUs from './pages/AboutUs';
import PrimaryCare from './pages/PrimaryCare';
import VitaminInjections from './pages/VitaminInjections';
import VitaminInfusions from './pages/VitaminInfusions';
import VampireFacialPage from './pages/VampireFacialPage';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // only animate once
    });
  }, []);
  
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/starter" element={<StarterPage />} />
      <Route path="/semaglutide" element={<Semaglutide />} />
      <Route path="/tirzepatide" element={<Tirzepatide />} />
      <Route path="/contrave" element={<Contrave />} />
      <Route path="/calocurb" element={<Calocurb />} />
      <Route path="/retatrutide" element={<Retatrutide />} />
      <Route path="/low-dose-naltrexone" element={<LowDoseNaltrexone />} />
      <Route path="/sermorelin" element={<Sermorelin />} />
      <Route path="/phentermine" element={<Phentermine />} />


      <Route path="/weight-loss" element={<WeightLoss />} />
      <Route path="/hormone-replacement-therapy" element={<HormoneTherapy />} />
      <Route path="/estrogen" element={<Estrogen />} />
      <Route path="/progesterone" element={<Progesterone />} />
      <Route path="/peri-menopause" element={<PeriMenopause />} />
      <Route path="/testosterone" element={<Testosterone />} />
      <Route path="/peptide-therapy" element={<PeptideTherapy />} />
      <Route path="/CJC-1295-Ipamorelin" element={<CJC1295Ipamorelin />} />
      <Route path="/BPC-157" element={<BPC157 />} />
      <Route path="/pt-141-bremelonotide" element={<PT141Bremelonotide />} />
      <Route path="/aod-9604" element={<AOD9604 />} />
      <Route path="/tesamorelin" element={<Tesamorelin />} />


      <Route path="/sexual-wellness-treatments" element={<SexualWellnessTreatments />} />
      <Route path="/sexual-wellness-for-her" element={<OShot />} />
      <Route path="/sexual-wellness-for-him" element={<PShot />} />
      <Route path="/duo" element={<Duo />} />
      <Route path="/vampire-facial" element={<VampireFacialPage />} />

      <Route path="/primary-care" element={<PrimaryCare />} />
      <Route path="/vitamin-injections" element={<VitaminInjections />} />
      <Route path="/vitamin-infusions" element={<VitaminInfusions />} />

      <Route path="/meet-us" element={<AboutUs />} />
    </Routes>
    
    </>
  );
}

export default App;

