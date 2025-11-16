import { useEffect } from 'react';
import { GlobalNav, Hero, Stats, SSPPlatform, Footer, Button } from '../components';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

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

// Brochure PDF
import brochurePdf from '../assets/home-page/Brochure_A4_Agnicio+ABB_2025rev3.pdf';

export function Home() {
  const servicesAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const partnershipAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const blogAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    // Handle hash navigation (e.g., /#contact)
    const hash = window.location.hash;
    if (hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Global Navigation */}
      <GlobalNav />

      {/* Hero Section */}
      <Hero backgroundImage={heroBackgroundImg} />

      {/* Stats Section */}
      <Stats />

      {/* SSP Platform Section */}
      <SSPPlatform
        senseImage={senseImg}
        solveImage={solveImg}
        planImage={planImg}
        genixImage={genixImg}
      />

      {/* Services Section */}
      <section
        id="services"
        ref={servicesAnimation.ref}
        className={`py-12 sm:py-16 md:py-20 bg-background border-b border-grayLine transition-all duration-1000 ${
          servicesAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-ink tracking-tight leading-tight mb-3 sm:mb-4 px-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4">
              Comprehensive support from strategy to implementation
            </p>
          </div>

          <div className="space-y-8 sm:space-y-10 md:space-y-12">
            {/* AI & Data Strategy Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-ink mb-4 sm:mb-6 px-4">AI & Data Strategy Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white border border-grayLine rounded-lg p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h4 className="text-base sm:text-lg font-semibold text-ink mb-2 sm:mb-3">AI & Data Strategy</h4>
                  <p className="text-sm text-gray-700">Strategic planning to break data barriers and align AI initiatives with your business objectives for sustainable operational growth.</p>
                </div>
                <div className="bg-white border border-grayLine rounded-lg p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h4 className="text-base sm:text-lg font-semibold text-ink mb-2 sm:mb-3">Data & Document Governance</h4>
                  <p className="text-sm text-gray-700">Implement MDM and governance frameworks to transform scattered information into enterprise-ready decision support.</p>
                </div>
                <div className="bg-white border border-grayLine rounded-lg p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h4 className="text-base sm:text-lg font-semibold text-ink mb-2 sm:mb-3">Assessment Services</h4>
                  <p className="text-sm text-gray-700">Comprehensive evaluation of your current maintenance operations, data infrastructure, and readiness for intelligent asset management.</p>
                </div>
                <div className="bg-white border border-grayLine rounded-lg p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h4 className="text-base sm:text-lg font-semibold text-ink mb-2 sm:mb-3">Use Case Development</h4>
                  <p className="text-sm text-gray-700">Design and validate high-impact use cases that address your specific challenges in asset maintenance and operational planning.</p>
                </div>
              </div>
            </div>

            {/* AI & Data Technical Services */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-ink mb-4 sm:mb-6 px-4">AI & Data Technical Services</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="bg-white border border-grayLine rounded-lg p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h4 className="text-base sm:text-lg font-semibold text-ink mb-2 sm:mb-3">AI & Advanced Analytics</h4>
                  <p className="text-sm text-gray-700">Implement machine learning models for predictive maintenance, anomaly detection, and optimization.</p>
                </div>
                <div className="bg-white border border-grayLine rounded-lg p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h4 className="text-base sm:text-lg font-semibold text-ink mb-2 sm:mb-3">Implementation Services</h4>
                  <p className="text-sm text-gray-700">End-to-end deployment, integration, and support for all our solutions and platforms.</p>
                </div>
                <div className="bg-white border border-grayLine rounded-lg p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h4 className="text-base sm:text-lg font-semibold text-ink mb-2 sm:mb-3">Data Engineering</h4>
                  <p className="text-sm text-gray-700">Build scalable data pipelines, ETL processes, and data warehousing solutions for industrial IoT.</p>
                </div>
                <div className="bg-white border border-grayLine rounded-lg p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h4 className="text-base sm:text-lg font-semibold text-ink mb-2 sm:mb-3">PowerBI Training</h4>
                  <p className="text-sm text-gray-700">Empower your team with advanced analytics capabilities through comprehensive PowerBI training programs.</p>
                </div>
                <div className="bg-white border border-grayLine rounded-lg p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h4 className="text-base sm:text-lg font-semibold text-ink mb-2 sm:mb-3">Cloud Migration</h4>
                  <p className="text-sm text-gray-700">Seamlessly migrate legacy systems to cloud infrastructure with minimal disruption and maximum efficiency.</p>
                </div>
                <div className="bg-white border border-grayLine rounded-lg p-5 sm:p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <h4 className="text-base sm:text-lg font-semibold text-ink mb-2 sm:mb-3">Azure Data Platform Training</h4>
                  <p className="text-sm text-gray-700">Develop expertise in Azure data services, Synapse Analytics, and cloud-native architectures.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABB Partnership Section */}
      <section
        ref={partnershipAnimation.ref}
        className={`py-12 sm:py-16 md:py-20 bg-grayBg border-b border-grayLine transition-all duration-1000 ${
          partnershipAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-ink tracking-tight leading-tight mb-3 sm:mb-4 px-4">
              ABB Certified Technology Partner
            </h2>
            <p className="text-base sm:text-lg text-gray-700 px-4">
              Delivering world-class AI-powered asset management through strategic partnership with ABB
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center mb-8 sm:mb-12">
            <div className="bg-white border border-grayLine rounded-lg p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold text-ink mb-4 sm:mb-6">ABB Partnership</h3>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                Our strategic partnership with ABB enables seamless integration with their industry-leading automation and electrification solutions, providing comprehensive asset management across the entire industrial ecosystem.
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
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

              <Button
                size="lg"
                className="bg-primary text-white hover:bg-primary-hover w-full sm:w-auto min-h-[44px]"
                asChild
              >
                <a href={brochurePdf} download="Agnicio_ABB_Brochure_2025.pdf" className="inline-flex items-center justify-center gap-2 px-6">
                  <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Brochure
                </a>
              </Button>
            </div>

            <div className="rounded-lg overflow-hidden border border-grayLine aspect-video lg:aspect-auto">
              <img
                src={abbPartnershipImg}
                alt="ABB Industrial Partnership Collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="bg-white border border-grayLine rounded-lg p-6 sm:p-8">
            <h4 className="text-lg sm:text-xl font-semibold text-ink mb-4 sm:mb-6 text-center">Partnership Benefits</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
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
      <section className="py-12 sm:py-16 md:py-20 bg-background border-b border-grayLine">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-ink tracking-tight leading-tight mb-3 sm:mb-4 px-4">
              Transforming Maintenance Operations
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4">
              Real-world impact across manufacturing, energy, and industrial sectors
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {/* Automotive Manufacturing Case Study */}
            <div className="bg-white border border-grayLine rounded-lg p-5 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="lg:col-span-2">
                  <span className="inline-block px-3 py-1 bg-grayBg text-primary text-xs sm:text-sm font-medium rounded-md mb-3 sm:mb-4">
                    Automotive Manufacturing
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-ink mb-3 sm:mb-4">
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
                <div className="flex items-center justify-center lg:border-l border-grayLine lg:pl-8 pt-6 lg:pt-0">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl font-bold text-ink mb-2">42%</div>
                    <p className="text-sm text-gray-600">Downtime Reduced</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Power Generation Case Study */}
            <div className="bg-white border border-grayLine rounded-lg p-5 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="lg:col-span-2">
                  <span className="inline-block px-3 py-1 bg-grayBg text-primary text-xs sm:text-sm font-medium rounded-md mb-3 sm:mb-4">
                    Power Generation
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-ink mb-3 sm:mb-4">
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
                <div className="flex items-center justify-center lg:border-l border-grayLine lg:pl-8 pt-6 lg:pt-0">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl font-bold text-ink mb-2">€3.5M</div>
                    <p className="text-sm text-gray-600">Cost Savings</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chemical Processing Case Study */}
            <div className="bg-white border border-grayLine rounded-lg p-5 sm:p-6 md:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
                <div className="lg:col-span-2">
                  <span className="inline-block px-3 py-1 bg-grayBg text-primary text-xs sm:text-sm font-medium rounded-md mb-3 sm:mb-4">
                    Chemical Processing
                  </span>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-ink mb-3 sm:mb-4">
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
                <div className="flex items-center justify-center lg:border-l border-grayLine lg:pl-8 pt-6 lg:pt-0">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl font-bold text-ink mb-2">99.8%</div>
                    <p className="text-sm text-gray-600">Prediction Accuracy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section
        id="blog"
        ref={blogAnimation.ref}
        className={`py-12 sm:py-16 md:py-20 bg-background border-b border-grayLine transition-all duration-1000 ${
          blogAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-ink tracking-tight leading-tight mb-3 sm:mb-4 px-4">
              Recent <span className="text-primary">Insights</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4">
              Analytics tips, Data strategies, Industry insights, BI best practices, and all the resources you need to do more with your data.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Event Post */}
            <article className="bg-white border border-grayLine rounded-lg overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
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

              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-ink mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-200">
                  Agnicio at Maintenance NEXT expo
                </h3>
                <p className="text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                  We're excited to announce that Agnicio will be exhibiting at the Maintenance NEXT Expo from April 8th to 10th!
                </p>
                <a
                  href="/blog/maintenance-next-expo"
                  className="inline-flex items-center gap-2 text-primary font-medium transition-colors duration-200 hover:text-primary-dark text-sm min-h-[44px]"
                >
                  Continue reading
                  <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            {/* AI Blog Post 1 */}
            <article className="bg-white border border-grayLine rounded-lg overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
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

              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-ink mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-200">
                  Explainability in DSA: Agnicio's Glass-Box Approach
                </h3>
                <p className="text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                  What is Demand Sensing? Well, it is all about capturing the Demand Signal. This means predicting who wants what product, where and at what...
                </p>
                <a
                  href="/blog/explainability-dsa"
                  className="inline-flex items-center gap-2 text-primary font-medium transition-colors duration-200 hover:text-primary-dark text-sm min-h-[44px]"
                >
                  Continue reading
                  <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            {/* AI Blog Post 2 */}
            <article className="bg-white border border-grayLine rounded-lg overflow-hidden group">
              <div className="relative h-56 overflow-hidden">
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

              <div className="p-5 sm:p-6">
                <h3 className="text-base sm:text-lg font-semibold text-ink mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-200">
                  How to use events' data for effective business planning
                </h3>
                <p className="text-sm text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                  Organizations of all sizes are involved in business planning. This includes setting ambitious targets on sales and other KPIs to drive growth and...
                </p>
                <a
                  href="/blog/events-data-business-planning"
                  className="inline-flex items-center gap-2 text-primary font-medium transition-colors duration-200 hover:text-primary-dark text-sm min-h-[44px]"
                >
                  Continue reading
                  <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <Button variant="outline" size="lg" className="min-h-[44px]" asChild>
              <a href="/blog" className="inline-flex items-center gap-2">
                View All Posts
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-12 sm:py-16 md:py-20 bg-grayBg border-b border-grayLine">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-ink tracking-tight leading-tight mb-3 sm:mb-4 px-4">
              Get in Touch
            </h2>
            <p className="text-base sm:text-lg text-gray-700 px-4">
              Have a question? Fill out the contact form. We'd love to hear from you
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Form */}
            <div className="bg-white border border-grayLine rounded-lg p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-semibold text-ink mb-3 sm:mb-4">Send us a message</h3>
              <p className="text-sm text-gray-700 mb-4 sm:mb-6">
                Fill out the form and our team will get back to you within 24 hours
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    required
                    className="w-full px-4 py-3 border border-grayLine rounded-md focus:border-primary focus:outline-none transition-colors duration-200 min-h-[44px] text-base"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 border border-grayLine rounded-md focus:border-primary focus:outline-none transition-colors duration-200 min-h-[44px] text-base"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Enter your message"
                    required
                    className="w-full px-4 py-3 border border-grayLine rounded-md focus:border-primary focus:outline-none transition-colors duration-200 text-base"
                  ></textarea>
                </div>
                <Button type="submit" className="w-full min-h-[44px]">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white border border-grayLine rounded-lg p-5 sm:p-6">
                <h4 className="text-sm sm:text-base font-semibold text-ink mb-3 sm:mb-4 flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Find Us
                </h4>
                <p className="text-sm text-gray-700">Millennium Tower, Weena, 3012 CN Rotterdam</p>
              </div>
              <div className="bg-white border border-grayLine rounded-lg p-5 sm:p-6">
                <h4 className="text-sm sm:text-base font-semibold text-ink mb-3 sm:mb-4 flex items-center gap-3">
                  <svg className="w-5 h-5 text-primary" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M3 8l7.89 3.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </h4>
                <a
                  href="mailto:info@agnicio.com"
                  className="text-sm text-primary hover:text-primaryDark transition-colors duration-200 underline"
                >
                  info@agnicio.com
                </a>
              </div>
              <div className="bg-white border border-grayLine rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2460.4457765394907!2d4.469163!3d51.9225002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c434a69dca8539%3A0xd4725d79fec8314a!2sMillennium%20Tower%2C%20Weena%20686%2C%203012%20CN%20Rotterdam%2C%20Netherlands!5e0!3m2!1sen!2sus!4v1729629047449!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Agnicio Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-4 sm:mb-6 px-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Join 2,500+ enterprise clients who trust Agnicio for their AI and data solutions.
            Let's build something extraordinary together.
          </p>
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 min-h-[44px]" asChild>
            <a href="#contact" className="inline-flex items-center gap-2">
              Get in Touch
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
