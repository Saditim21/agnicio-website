import { GlobalNav } from '../components';

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
    <div className="min-h-screen bg-background">
      {/* Global Navigation */}
      <GlobalNav />

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBackgroundImg}
            alt="Industrial AI Facility"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability - ABB-inspired */}
          <div className="absolute inset-0 bg-black/75"></div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10 py-20">
          <div className="max-w-5xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-8">
              Break Data Barriers,<br />Unleash Business Power
            </h1>
            <div>
              <a
                href="#ssp-platform"
                className="inline-flex items-center gap-3 bg-white text-ink px-8 py-4 text-lg font-medium transition-all duration-200 hover:bg-gray-100"
              >
                Explore our products
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <a href="#stats" className="flex flex-col items-center text-white/70 hover:text-white transition-colors duration-200">
            <span className="text-sm mb-2">Scroll to explore</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-20 bg-background border-b border-grayLine">
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
            <div className="bg-white border border-grayLine rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 h-80 rounded-lg overflow-hidden border border-grayLine">
                  <img
                    src={solveImg}
                    alt="SOLVE - GenAI Solution Engineering Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl md:text-3xl font-semibold text-ink tracking-tight mb-4">SOLVE - GenAI Solution Engineering</h3>
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">
                    Tap into your enterprise knowledge with AI-powered insights. Transform from investigation mode to solution mode seamlessly with AI-augmented maintenance.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">AI-powered enterprise knowledge access</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">Intuitive chat functionality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">Reduced learning curves for engineers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">Intelligent onboarding support</span>
                    </li>
                  </ul>
                  <a
                    href="/products/ssp-solve"
                    className="inline-flex items-center gap-2 text-primary font-medium transition-colors duration-200 hover:text-primary-dark"
                  >
                    Learn More
                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* PLAN */}
            <div className="bg-white border border-grayLine rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-ink tracking-tight mb-4">PLAN - AI-Driven Maintenance Planning</h3>
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">
                    Enable cross-functional and chain-level planning. Generate and optimize plans that balance demand, resources, costs, and risk with complete budget control.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">Cross-functional planning optimization</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">AI solver for consensus building</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">Advanced scenario planning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">Complete budget visibility</span>
                    </li>
                  </ul>
                  <a
                    href="/products/ssp-plan"
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
                    src={planImg}
                    alt="PLAN - AI-Driven Maintenance Planning Dashboard"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* GENIX */}
            <div className="bg-white border border-grayLine rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 h-80 rounded-lg overflow-hidden border border-grayLine">
                  <img
                    src={genixImg}
                    alt="GENIX™ Unified Data Platform"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl md:text-3xl font-semibold text-ink tracking-tight mb-4">GENIX™ Unified Data Platform</h3>
                  <p className="text-base text-gray-700 mb-6 leading-relaxed">
                    Beyond traditional ODS - enterprise-wide asset information model that integrates all your data sources into a single, unified platform for intelligent decision-making.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">Enterprise asset information model</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">Multi-source data integration</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">Contextual data enrichment</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-sm text-gray-700">API connectors & consensus layer</span>
                    </li>
                  </ul>
                  <a
                    href="/products/genix"
                    className="inline-flex items-center gap-2 text-primary font-medium transition-colors duration-200 hover:text-primary-dark"
                  >
                    Learn More
                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background border-b border-grayLine">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-ink tracking-tight leading-tight mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive support from strategy to implementation
            </p>
          </div>

          <div className="space-y-12">
            {/* AI & Data Strategy Services */}
            <div>
              <h3 className="text-2xl font-semibold text-ink mb-6">AI & Data Strategy Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border border-grayLine rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-ink mb-3">AI & Data Strategy</h4>
                  <p className="text-sm text-gray-700">Strategic planning to break data barriers and align AI initiatives with your business objectives for sustainable operational growth.</p>
                </div>
                <div className="bg-white border border-grayLine rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-ink mb-3">Assessment Services</h4>
                  <p className="text-sm text-gray-700">Comprehensive evaluation of your current maintenance operations, data infrastructure, and readiness for intelligent asset management.</p>
                </div>
                <div className="bg-white border border-grayLine rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-ink mb-3">Use Case Development</h4>
                  <p className="text-sm text-gray-700">Design and validate high-impact use cases that address your specific challenges in asset maintenance and operational planning.</p>
                </div>
                <div className="bg-white border border-grayLine rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-ink mb-3">Data & Document Governance</h4>
                  <p className="text-sm text-gray-700">Implement MDM and governance frameworks to transform scattered information into enterprise-ready decision support.</p>
                </div>
              </div>
            </div>

            {/* AI & Data Technical Services */}
            <div>
              <h3 className="text-2xl font-semibold text-ink mb-6">AI & Data Technical Services</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border border-grayLine rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-ink mb-3">Data Engineering</h4>
                  <p className="text-sm text-gray-700">Build scalable data pipelines, ETL processes, and data warehousing solutions for industrial IoT.</p>
                </div>
                <div className="bg-white border border-grayLine rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-ink mb-3">PowerBI Training</h4>
                  <p className="text-sm text-gray-700">Empower your team with advanced analytics capabilities through comprehensive PowerBI training programs.</p>
                </div>
                <div className="bg-white border border-grayLine rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-ink mb-3">Cloud Migration</h4>
                  <p className="text-sm text-gray-700">Seamlessly migrate legacy systems to cloud infrastructure with minimal disruption and maximum efficiency.</p>
                </div>
                <div className="bg-white border border-grayLine rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-ink mb-3">Azure Data Platform Training</h4>
                  <p className="text-sm text-gray-700">Develop expertise in Azure data services, Synapse Analytics, and cloud-native architectures.</p>
                </div>
                <div className="bg-white border border-grayLine rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-ink mb-3">AI & Advanced Analytics</h4>
                  <p className="text-sm text-gray-700">Implement machine learning models for predictive maintenance, anomaly detection, and optimization.</p>
                </div>
                <div className="bg-white border border-grayLine rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-ink mb-3">Implementation Services</h4>
                  <p className="text-sm text-gray-700">End-to-end deployment, integration, and support for all our solutions and platforms.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABB Partnership Section */}
      <section className="py-20 bg-grayBg border-b border-grayLine">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-ink tracking-tight leading-tight mb-4">
              ABB Certified Technology Partner
            </h2>
            <p className="text-lg text-gray-700">
              Delivering world-class AI-powered asset management through strategic partnership with ABB
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            <div className="bg-white border border-grayLine rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-ink mb-6">ABB Partnership</h3>
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                Our strategic partnership with ABB enables seamless integration with their industry-leading automation and electrification solutions, providing comprehensive asset management across the entire industrial ecosystem.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">15+ years of industrial AI expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">200+ successful deployments globally</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">24/7 dedicated support and monitoring</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700">ISO 27001 certified data security</span>
                </li>
              </ul>
            </div>

            <div className="rounded-lg overflow-hidden border border-grayLine">
              <img
                src={abbPartnershipImg}
                alt="ABB Industrial Partnership Collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-white border border-grayLine rounded-lg p-8">
            <h4 className="text-xl font-semibold text-ink mb-6 text-center">Partnership Benefits</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm text-gray-700">Seamless integration with ABB automation systems</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm text-gray-700">Joint development of AI-powered solutions</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm text-gray-700">Access to ABB's global industrial expertise</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm text-gray-700">Certified compatibility with ABB electrification portfolio</span>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm text-gray-700">Industrial partnership collaboration</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-background border-b border-grayLine">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-ink tracking-tight leading-tight mb-4">
              Transforming Maintenance Operations
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Real-world impact across manufacturing, energy, and industrial sectors
            </p>
          </div>

          <div className="space-y-8">
            {/* Automotive Manufacturing Case Study */}
            <div className="bg-white border border-grayLine rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <span className="inline-block px-3 py-1 bg-grayBg text-primary text-sm font-medium rounded-md mb-4">
                    Automotive Manufacturing
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-ink mb-4">
                    From Reactive to Predictive Maintenance
                  </h3>
                  <div className="mb-4">
                    <h4 className="text-base font-semibold text-ink mb-2">Challenge</h4>
                    <p className="text-sm text-gray-700">
                      Expert knowledge trapped in individuals' heads, gut-feeling based problem detection, and frequent unplanned failures
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-base font-semibold text-ink mb-2">Solution</h4>
                    <p className="text-sm text-gray-700">
                      Implemented SSP Platform with SENSE for continuous monitoring and SOLVE for knowledge management
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink mb-3">Key Results</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">42% reduction in unplanned downtime</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">€2.8M annual maintenance cost savings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Structured expert knowledge across teams</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-center border-l border-grayLine pl-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-ink mb-2">42%</div>
                    <p className="text-sm text-gray-600">Downtime Reduced</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Power Generation Case Study */}
            <div className="bg-white border border-grayLine rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <span className="inline-block px-3 py-1 bg-grayBg text-primary text-sm font-medium rounded-md mb-4">
                    Power Generation
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-ink mb-4">
                    Breaking Siloed Systems for Holistic Planning
                  </h3>
                  <div className="mb-4">
                    <h4 className="text-base font-semibold text-ink mb-2">Challenge</h4>
                    <p className="text-sm text-gray-700">
                      No enterprise-wide view, manual uninformed planning, and lack of cost visibility across departments
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-base font-semibold text-ink mb-2">Solution</h4>
                    <p className="text-sm text-gray-700">
                      Deployed PLAN module with AI solver for cross-functional planning and budget control
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink mb-3">Key Results</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">€3.5M in annual cost savings</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Chain-level planning optimization</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Complete budget visibility</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-center border-l border-grayLine pl-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-ink mb-2">€3.5M</div>
                    <p className="text-sm text-gray-600">Cost Savings</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chemical Processing Case Study */}
            <div className="bg-white border border-grayLine rounded-lg p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <span className="inline-block px-3 py-1 bg-grayBg text-primary text-sm font-medium rounded-md mb-4">
                    Chemical Processing
                  </span>
                  <h3 className="text-xl md:text-2xl font-semibold text-ink mb-4">
                    Unified Data Platform Drives Decisions
                  </h3>
                  <div className="mb-4">
                    <h4 className="text-base font-semibold text-ink mb-2">Challenge</h4>
                    <p className="text-sm text-gray-700">
                      Scattered information not leveraged for decisions, lack of MDM and data governance
                    </p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-base font-semibold text-ink mb-2">Solution</h4>
                    <p className="text-sm text-gray-700">
                      Integrated GENIX™ Unified Data Platform with enterprise asset information model
                    </p>
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-ink mb-3">Key Results</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">99.8% failure prediction accuracy</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">Single source of truth established</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-gray-700">AI-powered decision support</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center justify-center border-l border-grayLine pl-8">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-ink mb-2">99.8%</div>
                    <p className="text-sm text-gray-600">Prediction Accuracy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 bg-grayBg border-b border-grayLine">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-ink tracking-tight leading-tight mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-700">
              Ready to transform your maintenance operations? Contact us today
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="bg-white border border-grayLine rounded-lg p-8">
              <h3 className="text-xl font-semibold text-ink mb-4">Send us a message</h3>
              <p className="text-sm text-gray-700 mb-6">
                Fill out the form and our team will get back to you within 24 hours
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-grayLine rounded-md focus:border-primary focus:outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 border border-grayLine rounded-md focus:border-primary focus:outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-ink mb-2">Company</label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Your Company"
                    className="w-full px-4 py-3 border border-grayLine rounded-md focus:border-primary focus:outline-none transition-colors duration-200"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your needs..."
                    className="w-full px-4 py-3 border border-grayLine rounded-md focus:border-primary focus:outline-none transition-colors duration-200"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-6 py-3 rounded-md font-medium transition-colors duration-200 hover:bg-primary-dark"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white border border-grayLine rounded-lg p-6">
                <h4 className="text-base font-semibold text-ink mb-4">Email</h4>
                <p className="text-sm text-gray-700 mb-2">contact@agnicio.com</p>
                <p className="text-sm text-gray-700">support@agnicio.com</p>
              </div>
              <div className="bg-white border border-grayLine rounded-lg p-6">
                <h4 className="text-base font-semibold text-ink mb-4">Phone</h4>
                <p className="text-sm text-gray-700 mb-2">+1 (555) 123-4567</p>
                <p className="text-sm text-gray-700">+44 20 7123 4567</p>
              </div>
              <div className="bg-white border border-grayLine rounded-lg p-6">
                <h4 className="text-base font-semibold text-ink mb-4">Headquarters</h4>
                <p className="text-sm text-gray-700 mb-2">123 Industrial Drive</p>
                <p className="text-sm text-gray-700">Tech Valley, CA 94025</p>
              </div>
              <div className="bg-white border border-grayLine rounded-lg p-6">
                <h4 className="text-base font-semibold text-ink mb-4">Business Hours</h4>
                <p className="text-sm text-gray-700 mb-2">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-sm text-gray-700">24/7 Emergency Support Available</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 bg-background border-b border-grayLine">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold text-ink tracking-tight leading-tight mb-4">
              Recent <span className="text-primary">Insights</span>
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Analytics tips, Data strategies, Industry insights, BI best practices, and all the resources you need to do more with your data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Event Post */}
<<<<<<< HEAD
            <article className="bg-white border border-grayLine rounded-lg overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
=======
            <a href="/blog/maintenance-next-expo" className="group bg-neutral-background rounded-2xl overflow-hidden border border-neutral-border hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 relative h-full flex flex-col cursor-pointer">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

              <div className="relative h-56 overflow-hidden flex-shrink-0">
>>>>>>> 5c24cf34cb9109e58e6bc8ef2faba7407d0d33a4
                <img
                  src={blogImage1}
                  alt="Maintenance NEXT Expo"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-primary text-sm font-medium rounded-md">
                    EVENTS
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white rounded-md px-3 py-2 text-center">
                    <div className="text-sm font-medium text-primary">APR</div>
                    <div className="text-xl font-semibold text-ink leading-none">8-10</div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-ink mb-3 group-hover:text-primary transition-colors duration-200">
                  Agnicio at Maintenance NEXT expo
                </h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  We're excited to announce that Agnicio will be exhibiting at the Maintenance NEXT Expo from April 8th to 10th!
                </p>
<<<<<<< HEAD
                <a
                  href="/blog/maintenance-next-expo"
                  className="inline-flex items-center gap-2 text-primary font-medium transition-colors duration-200 hover:text-primary-dark"
                >
=======
                <span className="inline-flex items-center gap-2 text-primary font-body font-semibold group-hover:gap-3 transition-all duration-300 mt-auto">
>>>>>>> 5c24cf34cb9109e58e6bc8ef2faba7407d0d33a4
                  Continue reading
                  <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* AI Blog Post 1 */}
<<<<<<< HEAD
            <article className="bg-white border border-grayLine rounded-lg overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
=======
            <a href="/blog/explainability-dsa" className="group bg-neutral-background rounded-2xl overflow-hidden border border-neutral-border hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 relative h-full flex flex-col cursor-pointer">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

              <div className="relative h-56 overflow-hidden flex-shrink-0">
>>>>>>> 5c24cf34cb9109e58e6bc8ef2faba7407d0d33a4
                <img
                  src={blogImage2}
                  alt="Demand Sensing Analytics"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-primary text-sm font-medium rounded-md">
                    AI BLOG
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white rounded-md px-3 py-2">
                    <div className="text-sm font-medium text-ink flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      5 min
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-ink mb-3 group-hover:text-primary transition-colors duration-200">
                  Explainability in DSA: Agnicio's Glass-Box Approach
                </h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  What is Demand Sensing? Well, it is all about capturing the Demand Signal. This means predicting who wants what product, where and at what...
                </p>
<<<<<<< HEAD
                <a
                  href="/blog/explainability-dsa"
                  className="inline-flex items-center gap-2 text-primary font-medium transition-colors duration-200 hover:text-primary-dark"
                >
=======
                <span className="inline-flex items-center gap-2 text-primary font-body font-semibold group-hover:gap-3 transition-all duration-300 mt-auto">
>>>>>>> 5c24cf34cb9109e58e6bc8ef2faba7407d0d33a4
                  Continue reading
                  <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>

            {/* AI Blog Post 2 */}
<<<<<<< HEAD
            <article className="bg-white border border-grayLine rounded-lg overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
=======
            <a href="/blog/events-data-business-planning" className="group bg-neutral-background rounded-2xl overflow-hidden border border-neutral-border hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 relative h-full flex flex-col cursor-pointer">
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

              <div className="relative h-56 overflow-hidden flex-shrink-0">
>>>>>>> 5c24cf34cb9109e58e6bc8ef2faba7407d0d33a4
                <img
                  src={blogImage3}
                  alt="Business Planning Analytics"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-primary text-sm font-medium rounded-md">
                    AI BLOG
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white rounded-md px-3 py-2">
                    <div className="text-sm font-medium text-ink flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      4 min
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-ink mb-3 group-hover:text-primary transition-colors duration-200">
                  How to use events' data for effective business planning
                </h3>
                <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                  Organizations of all sizes are involved in business planning. This includes setting ambitious targets on sales and other KPIs to drive growth and...
                </p>
<<<<<<< HEAD
                <a
                  href="/blog/events-data-business-planning"
                  className="inline-flex items-center gap-2 text-primary font-medium transition-colors duration-200 hover:text-primary-dark"
                >
=======
                <span className="inline-flex items-center gap-2 text-primary font-body font-semibold group-hover:gap-3 transition-all duration-300 mt-auto">
>>>>>>> 5c24cf34cb9109e58e6bc8ef2faba7407d0d33a4
                  Continue reading
                  <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
<<<<<<< HEAD
            </article>
          </div>
=======
            </a>
          </SmoothStaggeredGrid>
>>>>>>> 5c24cf34cb9109e58e6bc8ef2faba7407d0d33a4

          <div className="text-center mt-12">
            <a
              href="/blog"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-md font-medium transition-colors duration-200 hover:text-primary-dark hover:border-primary-dark"
            >
              View All Posts
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join 2,500+ enterprise clients who trust Agnicio for their AI and data solutions.
            Let's build something extraordinary together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-md font-medium transition-colors duration-200 hover:bg-gray-100"
          >
            Get in Touch
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-ink text-white py-16 border-t border-grayLine">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Company */}
            <div>
              <h3 className="text-lg font-semibold mb-4">AGNICIO</h3>
              <p className="text-sm text-white/70">
                Break data barriers, unleash business power. AI-powered asset management for sustainable growth.
              </p>
            </div>

            {/* SSP Platform */}
            <div>
              <h4 className="text-base font-semibold mb-4">SSP Platform</h4>
              <ul className="space-y-2">
                <li><a href="/products/ssp-sense" className="text-sm text-white/70 hover:text-white transition-colors duration-200">SENSE - Problem Detection</a></li>
                <li><a href="/products/ssp-solve" className="text-sm text-white/70 hover:text-white transition-colors duration-200">SOLVE - Solution Engineering</a></li>
                <li><a href="/products/ssp-plan" className="text-sm text-white/70 hover:text-white transition-colors duration-200">PLAN - Maintenance Planning</a></li>
                <li><a href="/products/genix" className="text-sm text-white/70 hover:text-white transition-colors duration-200">GENIX™ Data Platform</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="/services/ai-data-strategy" className="text-sm text-white/70 hover:text-white transition-colors duration-200">AI & Data Strategy</a></li>
                <li><a href="/services/data-engineering" className="text-sm text-white/70 hover:text-white transition-colors duration-200">Data Engineering</a></li>
                <li><a href="/services/training" className="text-sm text-white/70 hover:text-white transition-colors duration-200">Training Services</a></li>
                <li><a href="/services/implementation" className="text-sm text-white/70 hover:text-white transition-colors duration-200">Implementation</a></li>
              </ul>
            </div>

            {/* Company & Contact */}
            <div>
              <h4 className="text-base font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-white/70">
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

          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-sm text-white/60">
              © 2025 Agnicio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
