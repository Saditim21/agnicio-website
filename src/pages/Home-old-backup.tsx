import {
  GlobalNav,
  SmoothScrollReveal,
  SmoothStaggeredGrid,
} from '../components';

// Hero & Platform Images
import heroBackgroundImg from '../assets/home-page/Hero_industrial_AI_facility_10a53121.png';
import senseImg from '../assets/home-page/SSP_dashboard_interface_7891374e.png';
import solveImg from '../assets/home-page/Demand_sensing_analytics_dashboard_c69079df.png';
import planImg from '../assets/home-page/Maintenance_generator_interface_f929dd22.png';
import genixImg from '../assets/home-page/UDP_data_foundation_platform_d050d38c.png';
import abbPartnershipImg from '../assets/home-page/Industrial_partnership_collaboration_photo_2af4c618.png';

// Blog Images
import blogImage1 from '../assets/home-page/blog-image-1.png';
import blogImage2 from '../assets/home-page/blog-image-2.jpg';
import blogImage3 from '../assets/home-page/blog-image-3.jpg';

export function Home() {
  return (
    <div className="min-h-screen bg-neutral-background">

      {/* Global Navigation */}
      <GlobalNav />

      {/* Hero Section */}
      <section id="hero" className="relative bg-background pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden border-b border-grayLine">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBackgroundImg}
            alt="Industrial AI Facility"
            className="w-full h-full object-cover opacity-10"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-semibold text-ink leading-tight tracking-tight mb-6">
              Break Data Barriers, Unleash Business Power
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
              AI-powered asset management platform that transforms maintenance from reactive to predictive.
              Drive sustainable growth and operational excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 hover:bg-primary-dark"
              >
                Get Started
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#ssp-platform"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-md font-medium transition-colors duration-200 hover:text-primary-dark hover:border-primary-dark"
              >
                View Products
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-grayBg border border-grayLine rounded-md">
              <span className="text-sm font-medium text-ink">ABB Certified Technology Partner</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background border-b border-grayLine">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-ink tracking-tight leading-tight mb-4">
              Driving Sustainable Growth and Operational Excellence
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Proven results from our SSP Platform across manufacturing, energy, and industrial sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white border border-grayLine rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-ink mb-2">42%</div>
              <h3 className="text-base font-semibold text-ink mb-2">Reduction in Unplanned Downtime</h3>
              <p className="text-sm text-gray-600">Continuous AI-driven monitoring</p>
            </div>
            <div className="bg-white border border-grayLine rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-ink mb-2">€2.8M</div>
              <h3 className="text-base font-semibold text-ink mb-2">Average Annual Cost Savings</h3>
              <p className="text-sm text-gray-600">Optimized maintenance planning</p>
            </div>
            <div className="bg-white border border-grayLine rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-ink mb-2">99.8%</div>
              <h3 className="text-base font-semibold text-ink mb-2">Failure Prediction Accuracy</h3>
              <p className="text-sm text-gray-600">Advanced AI & LLM technology</p>
            </div>
            <div className="bg-white border border-grayLine rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-ink mb-2">24/7</div>
              <h3 className="text-base font-semibold text-ink mb-2">Continuous Monitoring</h3>
              <p className="text-sm text-gray-600">Real-time problem detection</p>
            </div>
          </div>
        </div>
      </section>

      {/* SSP Platform Section */}
      <section id="ssp-platform" className="py-20 bg-grayBg border-b border-grayLine">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-ink tracking-tight leading-tight mb-4">
              The SSP Platform
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Sense, Solve, and Plan - A holistic approach to intelligent maintenance orchestration
            </p>
          </div>

          <div className="space-y-8">
            {/* SENSE */}
            <div className="bg-white border border-grayLine rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-ink tracking-tight mb-4">SENSE - AI-Driven Problem Detection</h3>
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">
                    24/7 continuous monitoring and failure prediction across your entire infrastructure. AI-generated maintenance schedules delivered in human language through advanced Large Language Models.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">Continuous monitoring across all assets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">AI-powered failure prediction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">LLM-generated insights in human language</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">Holistic problem detection</span>
                    </li>
                  </ul>
                  <a
                    href="/products/ssp-sense"
                    className="inline-flex items-center gap-2 text-primary font-medium transition-colors duration-200 hover:text-primary-dark"
                  >
                    Learn More
                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
                <div className="h-80 rounded-lg overflow-hidden border border-grayLine">
                  <img
                    src={senseImg}
                    alt="SENSE - AI-Driven Problem Detection Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* SOLVE */}
            <SmoothScrollReveal animation="slide-left" distance={80}>
              <div className="bg-neutral-surface rounded-xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-neutral-border hover:border-primary">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1 h-80 rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={solveImg}
                      alt="SOLVE - GenAI Solution Engineering Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <h3 className="text-h3 font-heading font-bold text-primary mb-4">SOLVE - GenAI Solution Engineering</h3>
                    <p className="text-body font-body text-neutral-text-secondary mb-6 leading-relaxed">
                      Tap into your enterprise knowledge with AI-powered insights. Transform from investigation mode to solution mode seamlessly with AI-augmented maintenance.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2">
                        <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body font-body text-neutral-text-secondary">AI-powered enterprise knowledge access</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body font-body text-neutral-text-secondary">Intuitive chat functionality</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body font-body text-neutral-text-secondary">Reduced learning curves for engineers</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body font-body text-neutral-text-secondary">Intelligent onboarding support</span>
                      </li>
                    </ul>
                    <a
                      href="/products/ssp-solve"
                      className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:gap-3 transition-all duration-300"
                    >
                      Learn More
                      <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </SmoothScrollReveal>

            {/* PLAN */}
            <SmoothScrollReveal animation="slide-right" distance={80}>
              <div className="bg-neutral-surface rounded-xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-neutral-border hover:border-primary">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-h3 font-heading font-bold text-primary mb-4">PLAN - AI-Driven Maintenance Planning</h3>
                    <p className="text-body font-body text-neutral-text-secondary mb-6 leading-relaxed">
                      Enable cross-functional and chain-level planning. Generate and optimize plans that balance demand, resources, costs, and risk with complete budget control.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2">
                        <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body font-body text-neutral-text-secondary">Cross-functional planning optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body font-body text-neutral-text-secondary">AI solver for consensus building</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body font-body text-neutral-text-secondary">Advanced scenario planning</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body font-body text-neutral-text-secondary">Complete budget visibility</span>
                      </li>
                    </ul>
                    <a
                      href="/products/ssp-plan"
                      className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:gap-3 transition-all duration-300"
                    >
                      Learn More
                      <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                  <div className="h-80 rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={planImg}
                      alt="PLAN - AI-Driven Maintenance Planning Dashboard"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </SmoothScrollReveal>

            {/* GENIX */}
            <SmoothScrollReveal animation="slide-left" distance={80}>
              <div className="bg-neutral-surface rounded-xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-neutral-border hover:border-primary">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className="order-2 lg:order-1 h-80 rounded-lg overflow-hidden shadow-xl">
                    <img
                      src={genixImg}
                      alt="GENIX™ Unified Data Platform"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <h3 className="text-h3 font-heading font-bold text-primary mb-4">GENIX™ Unified Data Platform</h3>
                    <p className="text-body font-body text-neutral-text-secondary mb-6 leading-relaxed">
                      Beyond traditional ODS - enterprise-wide asset information model that integrates all your data sources into a single, unified platform for intelligent decision-making.
                    </p>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-2">
                        <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body font-body text-neutral-text-secondary">Enterprise asset information model</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body font-body text-neutral-text-secondary">Multi-source data integration</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body font-body text-neutral-text-secondary">Contextual data enrichment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-body font-body text-neutral-text-secondary">API connectors & consensus layer</span>
                      </li>
                    </ul>
                    <a
                      href="/products/genix"
                      className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:gap-3 transition-all duration-300"
                    >
                      Learn More
                      <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </SmoothScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-neutral-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SmoothScrollReveal animation="slide-up">
              <h2 className="text-h2 font-heading font-bold text-neutral-text-primary mb-4">
                Our Services
              </h2>
            </SmoothScrollReveal>
            <SmoothScrollReveal animation="fade">
              <p className="text-body-lg font-body text-neutral-text-secondary max-w-3xl mx-auto">
                Comprehensive support from strategy to implementation
              </p>
            </SmoothScrollReveal>
          </div>

          <div className="max-w-7xl mx-auto space-y-16">
            {/* AI & Data Strategy Services */}
            <div>
              <h3 className="text-h3 font-heading font-bold text-primary mb-8">AI & Data Strategy Services</h3>
              <SmoothStaggeredGrid
                staggerDelay={0.08}
                animation="fade-up"
                distance={30}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-neutral-border hover:border-primary">
                  <h4 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-3">AI & Data Strategy</h4>
                  <p className="text-body font-body text-neutral-text-secondary mb-4">Strategic planning to break data barriers and align AI initiatives with your business objectives for sustainable operational growth.</p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-neutral-border hover:border-primary">
                  <h4 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-3">Assessment Services</h4>
                  <p className="text-body font-body text-neutral-text-secondary mb-4">Comprehensive evaluation of your current maintenance operations, data infrastructure, and readiness for intelligent asset management.</p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-neutral-border hover:border-primary">
                  <h4 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-3">Use Case Development</h4>
                  <p className="text-body font-body text-neutral-text-secondary mb-4">Design and validate high-impact use cases that address your specific challenges in asset maintenance and operational planning.</p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-neutral-border hover:border-primary">
                  <h4 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-3">Data & Document Governance</h4>
                  <p className="text-body font-body text-neutral-text-secondary mb-4">Implement MDM and governance frameworks to transform scattered information into enterprise-ready decision support.</p>
                </div>
              </SmoothStaggeredGrid>
            </div>

            {/* AI & Data Technical Services */}
            <div>
              <h3 className="text-h3 font-heading font-bold text-primary mb-8">AI & Data Technical Services</h3>
              <SmoothStaggeredGrid
                staggerDelay={0.08}
                animation="fade-up"
                distance={30}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-neutral-border hover:border-primary">
                  <h4 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-3">Data Engineering</h4>
                  <p className="text-body font-body text-neutral-text-secondary mb-4">Build scalable data pipelines, ETL processes, and data warehousing solutions for industrial IoT.</p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-neutral-border hover:border-primary">
                  <h4 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-3">PowerBI Training</h4>
                  <p className="text-body font-body text-neutral-text-secondary mb-4">Empower your team with advanced analytics capabilities through comprehensive PowerBI training programs.</p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-neutral-border hover:border-primary">
                  <h4 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-3">Cloud Migration</h4>
                  <p className="text-body font-body text-neutral-text-secondary mb-4">Seamlessly migrate legacy systems to cloud infrastructure with minimal disruption and maximum efficiency.</p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-neutral-border hover:border-primary">
                  <h4 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-3">Azure Data Platform Training</h4>
                  <p className="text-body font-body text-neutral-text-secondary mb-4">Develop expertise in Azure data services, Synapse Analytics, and cloud-native architectures.</p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-neutral-border hover:border-primary">
                  <h4 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-3">AI & Advanced Analytics</h4>
                  <p className="text-body font-body text-neutral-text-secondary mb-4">Implement machine learning models for predictive maintenance, anomaly detection, and optimization.</p>
                </div>
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-neutral-border hover:border-primary">
                  <h4 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-3">Implementation Services</h4>
                  <p className="text-body font-body text-neutral-text-secondary mb-4">End-to-end deployment, integration, and support for all our solutions and platforms.</p>
                </div>
              </SmoothStaggeredGrid>
            </div>
          </div>
        </div>
      </section>

      {/* ABB Partnership Section */}
      <section className="py-24 bg-neutral-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SmoothScrollReveal animation="zoom">
              <div className="text-center mb-16">
                <h2 className="text-h2 font-heading font-bold text-neutral-text-primary mb-4">
                  ABB Certified Technology Partner
                </h2>
                <p className="text-body-lg font-body text-neutral-text-secondary">
                  Delivering world-class AI-powered asset management through strategic partnership with ABB
                </p>
              </div>
            </SmoothScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
              <SmoothScrollReveal animation="slide-right" distance={60}>
                <div className="bg-white rounded-xl p-10 shadow-xl">
                  <h3 className="text-h4 font-heading font-bold text-primary mb-6">ABB Partnership</h3>
                  <p className="text-body font-body text-neutral-text-secondary mb-6 leading-relaxed">
                    Our strategic partnership with ABB enables seamless integration with their industry-leading automation and electrification solutions, providing comprehensive asset management across the entire industrial ecosystem.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-body font-body text-neutral-text-secondary">15+ years of industrial AI expertise</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-body font-body text-neutral-text-secondary">200+ successful deployments globally</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-body font-body text-neutral-text-secondary">24/7 dedicated support and monitoring</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-body font-body text-neutral-text-secondary">ISO 27001 certified data security</span>
                    </li>
                  </ul>
                </div>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="slide-left" distance={60}>
                <div className="rounded-xl overflow-hidden shadow-xl h-full">
                  <img
                    src={abbPartnershipImg}
                    alt="ABB Industrial Partnership Collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </SmoothScrollReveal>
            </div>

            <SmoothScrollReveal animation="fade">
              <div className="bg-neutral-surface rounded-xl p-8 shadow-lg">
                <h4 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-6 text-center">Partnership Benefits</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-body font-body text-neutral-text-secondary">Seamless integration with ABB automation systems</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-body font-body text-neutral-text-secondary">Joint development of AI-powered solutions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-body font-body text-neutral-text-secondary">Access to ABB's global industrial expertise</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-body font-body text-neutral-text-secondary">Certified compatibility with ABB electrification portfolio</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-body font-body text-neutral-text-secondary">Industrial partnership collaboration</span>
                  </div>
                </div>
              </div>
            </SmoothScrollReveal>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-neutral-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <SmoothScrollReveal animation="slide-up">
              <h2 className="text-h2 font-heading font-bold text-neutral-text-primary mb-4">
                Transforming Maintenance Operations
              </h2>
            </SmoothScrollReveal>
            <SmoothScrollReveal animation="fade">
              <p className="text-body-lg font-body text-neutral-text-secondary max-w-3xl mx-auto">
                Real-world impact across manufacturing, energy, and industrial sectors
              </p>
            </SmoothScrollReveal>
          </div>

          <div className="max-w-7xl mx-auto space-y-12">
            {/* Automotive Manufacturing Case Study */}
            <SmoothScrollReveal animation="slide-right" distance={80}>
              <div className="bg-white rounded-xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <span className="inline-block px-4 py-1 bg-primary-lightest text-primary text-body-sm font-semibold rounded-full mb-4">
                      Automotive Manufacturing
                    </span>
                    <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-4">
                      From Reactive to Predictive Maintenance
                    </h3>
                    <div className="mb-6">
                      <h4 className="text-body font-heading font-semibold text-neutral-text-primary mb-2">Challenge</h4>
                      <p className="text-body font-body text-neutral-text-secondary">
                        Expert knowledge trapped in individuals' heads, gut-feeling based problem detection, and frequent unplanned failures
                      </p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-body font-heading font-semibold text-neutral-text-primary mb-2">Solution</h4>
                      <p className="text-body font-body text-neutral-text-secondary">
                        Implemented SSP Platform with SENSE for continuous monitoring and SOLVE for knowledge management
                      </p>
                    </div>
                    <div>
                      <h4 className="text-body font-heading font-semibold text-neutral-text-primary mb-3">Key Results</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-body font-body text-neutral-text-secondary">42% reduction in unplanned downtime</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-body font-body text-neutral-text-secondary">€2.8M annual maintenance cost savings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-body font-body text-neutral-text-secondary">Structured expert knowledge across teams</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-heading font-bold text-primary mb-2">42%</div>
                      <p className="text-body font-body text-neutral-text-secondary">Downtime Reduced</p>
                    </div>
                  </div>
                </div>
              </div>
            </SmoothScrollReveal>

            {/* Power Generation Case Study */}
            <SmoothScrollReveal animation="slide-left" distance={80}>
              <div className="bg-white rounded-xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <span className="inline-block px-4 py-1 bg-primary-lightest text-primary text-body-sm font-semibold rounded-full mb-4">
                      Power Generation
                    </span>
                    <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-4">
                      Breaking Siloed Systems for Holistic Planning
                    </h3>
                    <div className="mb-6">
                      <h4 className="text-body font-heading font-semibold text-neutral-text-primary mb-2">Challenge</h4>
                      <p className="text-body font-body text-neutral-text-secondary">
                        No enterprise-wide view, manual uninformed planning, and lack of cost visibility across departments
                      </p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-body font-heading font-semibold text-neutral-text-primary mb-2">Solution</h4>
                      <p className="text-body font-body text-neutral-text-secondary">
                        Deployed PLAN module with AI solver for cross-functional planning and budget control
                      </p>
                    </div>
                    <div>
                      <h4 className="text-body font-heading font-semibold text-neutral-text-primary mb-3">Key Results</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-body font-body text-neutral-text-secondary">€3.5M in annual cost savings</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-body font-body text-neutral-text-secondary">Chain-level planning optimization</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-body font-body text-neutral-text-secondary">Complete budget visibility</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-heading font-bold text-primary mb-2">€3.5M</div>
                      <p className="text-body font-body text-neutral-text-secondary">Cost Savings</p>
                    </div>
                  </div>
                </div>
              </div>
            </SmoothScrollReveal>

            {/* Chemical Processing Case Study */}
            <SmoothScrollReveal animation="slide-right" distance={80}>
              <div className="bg-white rounded-xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <span className="inline-block px-4 py-1 bg-primary-lightest text-primary text-body-sm font-semibold rounded-full mb-4">
                      Chemical Processing
                    </span>
                    <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-4">
                      Unified Data Platform Drives Decisions
                    </h3>
                    <div className="mb-6">
                      <h4 className="text-body font-heading font-semibold text-neutral-text-primary mb-2">Challenge</h4>
                      <p className="text-body font-body text-neutral-text-secondary">
                        Scattered information not leveraged for decisions, lack of MDM and data governance
                      </p>
                    </div>
                    <div className="mb-6">
                      <h4 className="text-body font-heading font-semibold text-neutral-text-primary mb-2">Solution</h4>
                      <p className="text-body font-body text-neutral-text-secondary">
                        Integrated GENIX™ Unified Data Platform with enterprise asset information model
                      </p>
                    </div>
                    <div>
                      <h4 className="text-body font-heading font-semibold text-neutral-text-primary mb-3">Key Results</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-body font-body text-neutral-text-secondary">99.8% failure prediction accuracy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-body font-body text-neutral-text-secondary">Single source of truth established</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-body font-body text-neutral-text-secondary">AI-powered decision support</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl font-heading font-bold text-primary mb-2">99.8%</div>
                      <p className="text-body font-body text-neutral-text-secondary">Prediction Accuracy</p>
                    </div>
                  </div>
                </div>
              </div>
            </SmoothScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-24 bg-neutral-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <SmoothScrollReveal animation="slide-up">
                <h2 className="text-h2 font-heading font-bold text-neutral-text-primary mb-4">
                  Get in Touch
                </h2>
              </SmoothScrollReveal>
              <SmoothScrollReveal animation="fade">
                <p className="text-body-lg font-body text-neutral-text-secondary">
                  Ready to transform your maintenance operations? Contact us today
                </p>
              </SmoothScrollReveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <SmoothScrollReveal animation="slide-right" distance={60}>
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-6">Send us a message</h3>
                  <p className="text-body font-body text-neutral-text-secondary mb-6">
                    Fill out the form and our team will get back to you within 24 hours
                  </p>
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-body-sm font-body font-semibold text-neutral-text-primary mb-2">Name</label>
                      <input
                        type="text"
                        id="name"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border-2 border-neutral-border rounded-lg focus:border-primary focus:outline-none transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-body-sm font-body font-semibold text-neutral-text-primary mb-2">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 border-2 border-neutral-border rounded-lg focus:border-primary focus:outline-none transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-body-sm font-body font-semibold text-neutral-text-primary mb-2">Company</label>
                      <input
                        type="text"
                        id="company"
                        placeholder="Your Company"
                        className="w-full px-4 py-3 border-2 border-neutral-border rounded-lg focus:border-primary focus:outline-none transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-body-sm font-body font-semibold text-neutral-text-primary mb-2">Message</label>
                      <textarea
                        id="message"
                        rows={4}
                        placeholder="Tell us about your needs..."
                        className="w-full px-4 py-3 border-2 border-neutral-border rounded-lg focus:border-primary focus:outline-none transition-colors duration-200"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-8 py-4 bg-primary text-white font-body font-semibold text-body-lg rounded-lg shadow-md hover:shadow-xl hover:bg-primary-hover transition-all duration-250 ease-in-out transform hover:scale-105"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </SmoothScrollReveal>

              {/* Contact Information */}
              <SmoothScrollReveal animation="slide-left" distance={60}>
                <div className="space-y-8">
                  <div className="bg-neutral-surface rounded-xl p-6 shadow-lg">
                    <h4 className="text-h6 font-heading font-semibold text-neutral-text-primary mb-4">Email</h4>
                    <p className="text-body font-body text-neutral-text-secondary mb-2">contact@agnicio.com</p>
                    <p className="text-body font-body text-neutral-text-secondary">support@agnicio.com</p>
                  </div>
                  <div className="bg-neutral-surface rounded-xl p-6 shadow-lg">
                    <h4 className="text-h6 font-heading font-semibold text-neutral-text-primary mb-4">Phone</h4>
                    <p className="text-body font-body text-neutral-text-secondary mb-2">+1 (555) 123-4567</p>
                    <p className="text-body font-body text-neutral-text-secondary">+44 20 7123 4567</p>
                  </div>
                  <div className="bg-neutral-surface rounded-xl p-6 shadow-lg">
                    <h4 className="text-h6 font-heading font-semibold text-neutral-text-primary mb-4">Headquarters</h4>
                    <p className="text-body font-body text-neutral-text-secondary mb-2">123 Industrial Drive</p>
                    <p className="text-body font-body text-neutral-text-secondary">Tech Valley, CA 94025</p>
                  </div>
                  <div className="bg-neutral-surface rounded-xl p-6 shadow-lg">
                    <h4 className="text-h6 font-heading font-semibold text-neutral-text-primary mb-4">Business Hours</h4>
                    <p className="text-body font-body text-neutral-text-secondary mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-body font-body text-neutral-text-secondary">24/7 Emergency Support Available</p>
                  </div>
                </div>
              </SmoothScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-24 bg-gradient-to-b from-neutral-surface via-neutral-background to-neutral-surface relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-hover rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <SmoothScrollReveal animation="fade">
              <h2 className="text-h2 font-heading font-bold text-neutral-text-primary mb-4">
                Recent <span className="text-primary">Insights</span>
              </h2>
            </SmoothScrollReveal>
            <SmoothScrollReveal animation="fade">
              <p className="text-body-lg font-body text-neutral-text-secondary max-w-3xl mx-auto leading-relaxed">
                Analytics tips, Data strategies, Industry insights, BI best practices, and all the resources you need to <span className="font-semibold text-neutral-text-primary">do more with your data</span>.
              </p>
            </SmoothScrollReveal>
          </div>

          <SmoothStaggeredGrid
            staggerDelay={0.12}
            animation="fade-up"
            distance={40}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {/* Event Post */}
            <article className="group bg-neutral-background rounded-2xl overflow-hidden border border-neutral-border hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 relative h-full flex flex-col">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <img
                  src={blogImage1}
                  alt="Maintenance NEXT Expo"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                {/* Category badge on image */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-primary text-body-sm font-bold rounded-full shadow-lg">
                    <span className="text-lg">🎯</span>
                    EVENTS
                  </span>
                </div>
                {/* Date badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 text-center shadow-lg">
                    <div className="text-body-sm font-bold text-primary">APR</div>
                    <div className="text-h5 font-heading font-bold text-neutral-text-primary leading-none">8-10</div>
                  </div>
                </div>
              </div>

              <div className="p-6 relative z-20 flex-grow flex flex-col">
                <h3 className="text-h5 font-heading font-bold text-neutral-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                  Agnicio at Maintenance NEXT expo
                </h3>
                <p className="text-body font-body text-neutral-text-secondary mb-4 leading-relaxed flex-grow">
                  We're excited to announce that Agnicio will be exhibiting at the Maintenance NEXT Expo from April 8th to 10th!
                </p>
                <a
                  href="/blog/maintenance-next-expo"
                  className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:gap-3 transition-all duration-300 mt-auto"
                >
                  Continue reading
                  <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            {/* AI Blog Post 1 */}
            <article className="group bg-neutral-background rounded-2xl overflow-hidden border border-neutral-border hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 relative h-full flex flex-col">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <img
                  src={blogImage2}
                  alt="Demand Sensing Analytics"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                {/* Category badge on image */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-primary text-body-sm font-bold rounded-full shadow-lg">
                    <span className="text-lg">🤖</span>
                    AI BLOG
                  </span>
                </div>
                {/* Reading time badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                    <div className="text-body-sm font-semibold text-neutral-text-primary flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      5 min
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 relative z-20 flex-grow flex flex-col">
                <h3 className="text-h5 font-heading font-bold text-neutral-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                  Explainability in DSA: Agnicio's Glass-Box Approach
                </h3>
                <p className="text-body font-body text-neutral-text-secondary mb-4 leading-relaxed flex-grow">
                  What is Demand Sensing? Well, it is all about capturing the Demand Signal. This means predicting who wants what product, where and at what...
                </p>
                <a
                  href="/blog/explainability-dsa"
                  className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:gap-3 transition-all duration-300 mt-auto"
                >
                  Continue reading
                  <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            {/* AI Blog Post 2 */}
            <article className="group bg-neutral-background rounded-2xl overflow-hidden border border-neutral-border hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 relative h-full flex flex-col">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

              <div className="relative h-56 overflow-hidden flex-shrink-0">
                <img
                  src={blogImage3}
                  alt="Business Planning Analytics"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                {/* Category badge on image */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-primary text-body-sm font-bold rounded-full shadow-lg">
                    <span className="text-lg">📊</span>
                    AI BLOG
                  </span>
                </div>
                {/* Reading time badge */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                    <div className="text-body-sm font-semibold text-neutral-text-primary flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      4 min
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 relative z-20 flex-grow flex flex-col">
                <h3 className="text-h5 font-heading font-bold text-neutral-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                  How to use events' data for effective business planning
                </h3>
                <p className="text-body font-body text-neutral-text-secondary mb-4 leading-relaxed flex-grow">
                  Organizations of all sizes are involved in business planning. This includes setting ambitious targets on sales and other KPIs to drive growth and...
                </p>
                <a
                  href="/blog/events-data-business-planning"
                  className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:gap-3 transition-all duration-300 mt-auto"
                >
                  Continue reading
                  <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          </SmoothStaggeredGrid>

          <SmoothScrollReveal animation="zoom">
          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-body font-semibold text-body-lg rounded-lg hover:bg-primary hover:text-white transition-all duration-250 ease-in-out transform hover:scale-105"
            >
              View All Posts
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
          </SmoothScrollReveal>
        </div>
      </section>

      {/* Final CTA Banner */}
      <SmoothScrollReveal animation="slide-up" distance={80}>
      <section id="contact" className="py-24 bg-primary relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-h2 font-heading font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-body-lg text-white/90 mb-8">
              Join 2,500+ enterprise clients who trust Agnicio for their AI and data solutions.
              Let's build something extraordinary together.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-body font-semibold text-body-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-250 ease-in-out transform hover:scale-105"
            >
              Get in Touch
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-light rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-hover rounded-full blur-3xl opacity-30" />
      </section>
      </SmoothScrollReveal>

      {/* Footer */}
      <footer className="bg-neutral-text-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company */}
            <div>
              <h3 className="text-h5 font-heading font-bold mb-4">AGNICIO</h3>
              <p className="text-body-sm text-neutral-background/70 mb-4">
                Break data barriers, unleash business power. AI-powered asset management for sustainable growth.
              </p>
            </div>

            {/* SSP Platform */}
            <div>
              <h4 className="text-h6 font-heading font-semibold mb-4">SSP Platform</h4>
              <ul className="space-y-2">
                <li><a href="/products/ssp-sense" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">SENSE - Problem Detection</a></li>
                <li><a href="/products/ssp-solve" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">SOLVE - Solution Engineering</a></li>
                <li><a href="/products/ssp-plan" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">PLAN - Maintenance Planning</a></li>
                <li><a href="/products/genix" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">GENIX™ Data Platform</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-h6 font-heading font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="/services/ai-data-strategy" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">AI & Data Strategy</a></li>
                <li><a href="/services/data-engineering" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">Data Engineering</a></li>
                <li><a href="/services/training" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">Training Services</a></li>
                <li><a href="/services/implementation" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">Implementation</a></li>
              </ul>
            </div>

            {/* Company & Contact */}
            <div>
              <h4 className="text-h6 font-heading font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-body-sm text-neutral-background/70">
                <li><a href="/partners" className="hover:text-white transition-colors duration-200">Partners</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
                <li className="pt-2">
                  <a href="/privacy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-white transition-colors duration-200">Terms of Service</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-background/20 pt-8 text-center">
            <p className="text-body-sm text-neutral-background/60">
              © 2025 Agnicio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
