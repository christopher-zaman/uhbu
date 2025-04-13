import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StarterPage from './pages/StarterPage';
import SexualWellnessTreatments from './pages/SexualWellnessTreatments';
import OShot from './pages/OShot';
import PShot from './pages/PShot';
import Duo from './pages/Duo';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/starter" element={<StarterPage />} />
      <Route path="/sexual-wellness-treatments" element={<SexualWellnessTreatments />} />
      <Route path="/o-shot" element={<OShot />} />
      <Route path="/p-shot" element={<PShot />} />
      <Route path="/duo" element={<Duo />} />
    </Routes>
    </>
  );
}

export default App;

