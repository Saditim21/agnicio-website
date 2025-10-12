import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { AIDrivenMaintenance } from './pages/AIDrivenMaintenance';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/ai-maintenance" element={<AIDrivenMaintenance />} />
      </Routes>
    </Router>
  );
}

export default App;
