import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AIDrivenMaintenance } from './pages/AIDrivenMaintenance';
import { DemandSensing } from './pages/DemandSensing';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/ai-maintenance" element={<AIDrivenMaintenance />} />
        <Route path="/products/demand-sensing" element={<DemandSensing />} />
      </Routes>
    </Router>
  );
}

export default App;
