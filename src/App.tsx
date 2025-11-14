import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Blog } from './pages/Blog';
import { MaintenanceNextExpo } from './pages/MaintenanceNextExpo';
import { ExplainabilityDSA } from './pages/ExplainabilityDSA';
import { EventsDataBusinessPlanning } from './pages/EventsDataBusinessPlanning';
import { AgnicioEnvisionEvent } from './pages/AgnicioEnvisionEvent';
import { PostLockdownWorkshop } from './pages/PostLockdownWorkshop';
import { AgniciocubewiseWebinar } from './pages/AgniciocubewiseWebinar';
import { DynamicPricingDisruption } from './pages/DynamicPricingDisruption';
import { AboutUs } from './pages/AboutUs';
import { Contact } from './pages/Contact';
import { AIDrivenMaintenance } from './pages/AIDrivenMaintenance';
import { DemandSensing } from './pages/DemandSensing';
import { AIService } from './pages/AIService';
import { DataStrategy } from './pages/DataStrategy';
import { DataEngineering } from './pages/DataEngineering';
import { AzureCC } from './pages/AzureCC';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/maintenance-next-expo" element={<MaintenanceNextExpo />} />
        <Route path="/blog/explainability-dsa" element={<ExplainabilityDSA />} />
        <Route path="/blog/events-data-business-planning" element={<EventsDataBusinessPlanning />} />
        <Route path="/blog/agnicio-envision-event" element={<AgnicioEnvisionEvent />} />
        <Route path="/blog/post-lockdown-workshop" element={<PostLockdownWorkshop />} />
        <Route path="/blog/agnicio-cubewise-webinar" element={<AgniciocubewiseWebinar />} />
        <Route path="/blog/dynamic-pricing-disruption" element={<DynamicPricingDisruption />} />
        <Route path="/products/ai-maintenance" element={<AIDrivenMaintenance />} />
        <Route path="/products/demand-sensing" element={<DemandSensing />} />
        <Route path="/services/ai" element={<AIService />} />
        <Route path="/services/data-strategy" element={<DataStrategy />} />
        <Route path="/services/data-engineering" element={<DataEngineering />} />
        <Route path="/services/azure-cc" element={<AzureCC />} />
      </Routes>
    </Router>
  );
}

export default App;
