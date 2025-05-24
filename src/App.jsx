import { Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Home from './pages/Home';
import StarterPage from './pages/StarterPage';
import SexualWellnessTreatments from './pages/SexualWellnessTreatments';
import OShot from './pages/SexualWellnessForHer';
import PShot from './pages/PShot';
import Duo from './pages/Duo';
import VampireFacial from './pages/VampireFacial';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // only animate once
    });
  }, []);
  
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/starter" element={<StarterPage />} />
      <Route path="/sexual-wellness-treatments" element={<SexualWellnessTreatments />} />
      <Route path="/sexual-wellness-for-her" element={<OShot />} />
      <Route path="/p-shot" element={<PShot />} />
      <Route path="/duo" element={<Duo />} />
      <Route path="/vampire-facial" element={<VampireFacial />} />
    </Routes>
    </>
  );
}

export default App;

