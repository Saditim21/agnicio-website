import { GlobalNav, Footer, Button } from '../components';

// Product Images
import senseImage from '../assets/home-page/SSP_dashboard_interface_7891374e.png';
import solveImage from '../assets/home-page/Demand_sensing_analytics_dashboard_c69079df.png';
import planImage from '../assets/home-page/Maintenance_generator_interface_f929dd22.png';
import genixImage from '../assets/home-page/UDP_data_foundation_platform_d050d38c.png';
import heroBackgroundImg from '../assets/products-page/planning.jpeg';

export function Products() {
  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBackgroundImg}
            alt="Industrial Planning Facility"
            className="w-full h-full object-cover object-center"
          />
          {/* Darker overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-8 md:px-12 lg:px-16 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-5xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.1] tracking-tight mb-8">
                Sense, Solve, and Plan
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
                A holistic approach to intelligent maintenance orchestration. Our integrated platform breaks data barriers and unleashes business power through AI-driven asset management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SENSE Section */}
      <section className="py-20 bg-background border-b border-grayLine">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
                  SENSE
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-4">
                  24/7 AI-Driven Problem Detection
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Continuous monitoring and failure prediction across your entire infrastructure. Transform from reactive to proactive maintenance with AI-generated insights delivered in human language.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-ink mb-4">Key Capabilities</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-semibold text-ink mb-2">Holistic Monitoring</h4>
                    <p className="text-sm text-gray-700">Continuous tracking of all assets with large sensor combinations, eliminating gut-feeling based problem detection</p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink mb-2">AI-Powered Prediction</h4>
                    <p className="text-sm text-gray-700">Advanced algorithms predict failures before they occur, reducing unplanned downtime by up to 42%</p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink mb-2">LLM-Generated Insights</h4>
                    <p className="text-sm text-gray-700">Conclusions delivered in natural human language through advanced Large Language Models for easy understanding</p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink mb-2">Expert Knowledge Capture</h4>
                    <p className="text-sm text-gray-700">Systematize historical expert knowledge that was previously trapped in individuals' heads</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ink mb-4">Business Impact</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Reduce unplanned downtime significantly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Prevent equipment failures before they happen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Eliminate manual problem detection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Preserve retiring expert knowledge</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-lg overflow-hidden border border-grayLine">
              <img
                src={senseImage}
                alt="SENSE interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOLVE Section */}
      <section className="py-20 bg-grayBg border-b border-grayLine">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-lg overflow-hidden border border-grayLine order-2 lg:order-1">
              <img
                src={solveImage}
                alt="SOLVE interface"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
                  SOLVE
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-4">
                  GenAI Powered Solution Engineering
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Transform from investigation mode to solution mode seamlessly. Tap into your enterprise knowledge with AI-powered insights and intelligent chat functionality.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-ink mb-4">Key Capabilities</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-semibold text-ink mb-2">Enterprise Knowledge Access</h4>
                    <p className="text-sm text-gray-700">AI-powered access to structured and unstructured enterprise information for faster problem resolution</p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink mb-2">Intuitive Chat Interface</h4>
                    <p className="text-sm text-gray-700">Natural language interaction for engineers to get instant answers and recommendations</p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink mb-2">Intelligent Onboarding</h4>
                    <p className="text-sm text-gray-700">Reduce learning curves for new engineers through AI-augmented guidance and best practices</p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink mb-2">Solution Mode Transformation</h4>
                    <p className="text-sm text-gray-700">Move beyond investigation to actionable solutions with AI-recommended maintenance procedures</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ink mb-4">Business Impact</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Faster issue resolution</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Reduced dependency on senior experts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Improved knowledge sharing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Lower training costs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLAN Section */}
      <section className="py-20 bg-background border-b border-grayLine">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
                  PLAN
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-4">
                  AI-Driven Maintenance Planning
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Enable cross-functional and chain-level planning with AI optimization. Generate plans that balance demand, resources, costs, and risk while maintaining complete budget control.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-ink mb-4">Key Capabilities</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-semibold text-ink mb-2">Cross-Functional Planning</h4>
                    <p className="text-sm text-gray-700">Break down siloed systems with enterprise-wide planning that considers all departments and constraints</p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink mb-2">AI Solver Optimization</h4>
                    <p className="text-sm text-gray-700">Advanced algorithms create consensus across operational constraints, eliminating manual planning inefficiencies</p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink mb-2">Scenario Planning</h4>
                    <p className="text-sm text-gray-700">Model multiple scenarios to understand cost, risk, and process outage visibility before execution</p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink mb-2">Budget Control</h4>
                    <p className="text-sm text-gray-700">Complete visibility into multi-year budgets with tactical and operational planning horizons</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ink mb-4">Business Impact</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Eliminate manual, uninformed planning</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Achieve chain-level optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Reduce maintenance costs by 30%+</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Gain complete cost visibility</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Image */}
            <div className="rounded-lg overflow-hidden border border-grayLine">
              <img
                src={planImage}
                alt="PLAN interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* GENIX Section */}
      <section className="py-20 bg-grayBg border-b border-grayLine">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="rounded-lg overflow-hidden border border-grayLine order-2 lg:order-1">
              <img
                src={genixImage}
                alt="GENIX™ interface"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-md mb-4">
                  GENIX™
                </span>
                <h2 className="text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-4">
                  Unified Data Platform
                </h2>
                <p className="text-base text-gray-700 leading-relaxed">
                  Beyond traditional ODS - enterprise-wide asset information model that transforms scattered data into actionable intelligence. The foundation for all SSP capabilities.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-ink mb-4">Key Capabilities</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-base font-semibold text-ink mb-2">Enterprise Asset Model</h4>
                    <p className="text-sm text-gray-700">Unified information model connecting ERP, CMMS, process data, and external sources</p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink mb-2">Data Governance</h4>
                    <p className="text-sm text-gray-700">Implement MDM and governance frameworks to ensure data quality and compliance</p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink mb-2">Contextual Enrichment</h4>
                    <p className="text-sm text-gray-700">Transform raw data into contextual insights with chain structure, failure predictions, and master data</p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink mb-2">API-First Architecture</h4>
                    <p className="text-sm text-gray-700">Modern connectors and consensus layer enable seamless integration with existing systems</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-ink mb-4">Business Impact</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Single source of truth for all assets</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Break down data silos</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Enable enterprise reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Support AI-driven decision making</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-6">
            Ready to Transform Your Maintenance Operations?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Discover how the SSP Platform can drive sustainable growth and operational excellence for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
              <a href="/#contact">
                Schedule a Demo
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="/">
                Back to Home
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
