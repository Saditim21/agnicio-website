import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { GlobalNav, Footer, Button } from '../components';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Product Images
import senseImage from '../assets/home-page/SSP_dashboard_interface_7891374e.png';
import solveImage from '../assets/home-page/Demand_sensing_analytics_dashboard_c69079df.png';
import planImage from '../assets/home-page/Maintenance_generator_interface_f929dd22.png';
import genixImage from '../assets/home-page/UDP_data_foundation_platform_d050d38c.png';
import pmcImage from '../assets/products-page/Pmc.png';
import heroBackgroundImg from '../assets/products-page/planning.jpeg';

export function Products() {
  const senseAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const solveAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const planAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const pmcAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const genixAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    // Handle hash navigation (e.g., /products#sense)
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
      <GlobalNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <img
            src={heroBackgroundImg}
            alt="Industrial Planning Facility"
            className="w-full h-full object-cover object-center"
          />
          {/* Elegant gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-900/60"></div>
          <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 via-transparent to-transparent"></div>
        </motion.div>

        {/* Content */}
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-16 pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-20 sm:pb-32 md:pb-40">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-6xl">

              {/* Animated Badge */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                className="mb-6 sm:mb-8"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sky-300 text-xs sm:text-sm font-medium tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                  PRODUCTS
                </span>
              </motion.div>

              {/* Animated Title */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-6 sm:mb-8"
              >
                <span className="bg-gradient-to-br from-white via-white to-sky-200 bg-clip-text text-transparent">
                  SSP Platform
                </span>
              </motion.h1>

              {/* Animated Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] as const }}
                className="mb-12 sm:mb-16 md:mb-20"
              >
                <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-[1.4] tracking-tight">
                  <span className="text-white/60">Break Data Barriers,</span>
                  <br />
                  <span className="text-transparent bg-gradient-to-r from-sky-200 via-sky-300 to-sky-400 bg-clip-text">
                    Unleash Business Power
                  </span>
                </p>
              </motion.div>

              {/* Elegant process flow - SENSE, SOLVE, PLAN */}
              <div className="mb-12 sm:mb-16">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6">
                  {['SENSE', 'SOLVE', 'PLAN'].map((label, index) => (
                    <div key={label} className="flex items-center">
                      {/* Elegant circle design */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: 1.0 + (index * 0.2),
                          duration: 0.8,
                          ease: [0.16, 1, 0.3, 1] as const
                        }}
                        className="relative group cursor-pointer"
                      >
                        {/* Outer glow ring */}
                        <div className="absolute -inset-2 bg-gradient-to-br from-sky-400/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Main circle */}
                        <div className="relative flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-lg border border-white/20 shadow-2xl group-hover:border-sky-400/50 transition-all duration-500">
                          {/* Label */}
                          <span className="text-sm sm:text-base font-bold tracking-wider text-white group-hover:text-sky-300 transition-colors duration-300">
                            {label}
                          </span>

                          {/* Inner decorative element */}
                          <div className="absolute inset-0 rounded-full border-2 border-dashed border-sky-400/30 group-hover:border-sky-400/60 transition-colors duration-500"
                               style={{ animation: 'spin 30s linear infinite' }}></div>
                        </div>
                      </motion.div>

                      {/* Elegant connector line */}
                      {index < 2 && (
                        <motion.div
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          transition={{
                            delay: 1.2 + (index * 0.2),
                            duration: 0.6,
                            ease: [0.16, 1, 0.3, 1] as const
                          }}
                          className="hidden sm:block w-8 md:w-12 lg:w-16 h-px mx-2 md:mx-3 origin-left"
                          style={{
                            background: 'linear-gradient(to right, rgba(56, 189, 248, 0.6), rgba(56, 189, 248, 0.2))'
                          }}
                        >
                          <div className="w-full h-full relative">
                            <div className="absolute inset-0 blur-sm bg-sky-400/40"></div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SENSE Section */}
      <section
        id="sense"
        ref={senseAnimation.ref}
        className={`py-12 sm:py-16 md:py-20 bg-background border-b border-grayLine transition-all duration-1000 ${
          senseAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Content */}
            <div>
              <div className="mb-4 sm:mb-6">
                <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary text-xs sm:text-sm font-semibold rounded-md mb-3 sm:mb-4">
                  SENSE
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-3 sm:mb-4">
                  24/7 AI-Driven Problem Detection
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  Continuous monitoring and failure prediction across your entire infrastructure. Transform from reactive to proactive maintenance with AI-generated insights delivered in human language.
                </p>
              </div>

              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-ink mb-3 sm:mb-4">Key Capabilities</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-ink mb-1.5 sm:mb-2">Holistic Monitoring</h4>
                    <p className="text-sm text-gray-700">Continuous tracking of all assets with large sensor combinations, eliminating gut-feeling based problem detection</p>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-ink mb-1.5 sm:mb-2">AI-Powered Prediction</h4>
                    <p className="text-sm text-gray-700">Advanced algorithms predict failures before they occur, reducing unplanned downtime by up to 42%</p>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-ink mb-1.5 sm:mb-2">LLM-Generated Insights</h4>
                    <p className="text-sm text-gray-700">Conclusions delivered in natural human language through advanced Large Language Models for easy understanding</p>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-ink mb-1.5 sm:mb-2">Expert Knowledge Capture</h4>
                    <p className="text-sm text-gray-700">Systematize historical expert knowledge that was previously trapped in individuals' heads</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-ink mb-3 sm:mb-4">Business Impact</h3>
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
      <section
        id="solve"
        ref={solveAnimation.ref}
        className={`py-12 sm:py-16 md:py-20 bg-grayBg border-b border-grayLine transition-all duration-1000 ${
          solveAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
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
              <div className="mb-4 sm:mb-6">
                <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary text-xs sm:text-sm font-semibold rounded-md mb-3 sm:mb-4">
                  SOLVE
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-3 sm:mb-4">
                  GenAI Powered Solution Engineering
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
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
                <h3 className="text-lg sm:text-xl font-semibold text-ink mb-3 sm:mb-4">Business Impact</h3>
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
      <section
        id="plan"
        ref={planAnimation.ref}
        className={`py-12 sm:py-16 md:py-20 bg-background border-b border-grayLine transition-all duration-1000 ${
          planAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Content */}
            <div>
              <div className="mb-4 sm:mb-6">
                <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary text-xs sm:text-sm font-semibold rounded-md mb-3 sm:mb-4">
                  PLAN
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-3 sm:mb-4">
                  AI-Driven Maintenance Planning
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
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
                <h3 className="text-lg sm:text-xl font-semibold text-ink mb-3 sm:mb-4">Business Impact</h3>
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

      {/* PMC Section */}
      <section
        id="pmc"
        ref={pmcAnimation.ref}
        className={`py-12 sm:py-16 md:py-20 bg-grayBg border-b border-grayLine transition-all duration-1000 ${
          pmcAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Image */}
            <div className="rounded-lg overflow-hidden border border-grayLine order-2 lg:order-1">
              <img
                src={pmcImage}
                alt="Periodic Maintenance Generator interface"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="mb-4 sm:mb-6">
                <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary text-xs sm:text-sm font-semibold rounded-md mb-3 sm:mb-4">
                  PMG
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-3 sm:mb-4">
                  Periodic Maintenance Generator
                </h2>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  GenAI-Driven Schedule Optimization. Automatically generate and optimize maintenance schedules by extracting theoretical schedules from supplier manuals and applying real-world context intelligence for maximum efficiency.
                </p>
              </div>

              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-ink mb-3 sm:mb-4">Key Capabilities</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-ink mb-1.5 sm:mb-2">Intelligent Schedule Extraction</h4>
                    <p className="text-sm text-gray-700">Use Large Language Models to automatically extract maintenance schedules from supplier manuals and documentation</p>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-ink mb-1.5 sm:mb-2">Asset-Specific Application</h4>
                    <p className="text-sm text-gray-700">Apply theoretical schedules to actual assets through seamless integration with Enterprise Management Systems</p>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-ink mb-1.5 sm:mb-2">Context-Aware Refinement</h4>
                    <p className="text-sm text-gray-700">Refine schedules based on real operating conditions including utilization rates, environmental factors, and equipment age</p>
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-semibold text-ink mb-1.5 sm:mb-2">Optimized Output Generation</h4>
                    <p className="text-sm text-gray-700">Generate optimized, executable maintenance schedules that balance manufacturer recommendations with actual asset conditions</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-ink mb-3 sm:mb-4">Business Impact</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Eliminate manual schedule creation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Ensure compliance with OEM guidelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Reduce over-maintenance costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">Adapt schedules to real conditions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GENIX Section */}
      <section
        id="genix"
        ref={genixAnimation.ref}
        className={`py-12 sm:py-16 md:py-20 bg-background border-b border-grayLine transition-all duration-1000 ${
          genixAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Content */}
            <div>
              <div className="mb-4 sm:mb-6">
                <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-primary/10 text-primary text-xs sm:text-sm font-semibold rounded-md mb-3 sm:mb-4">
                  UDP
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-2">
                  Unified Data Platform
                </h2>
                <p className="text-base sm:text-lg text-gray-600 mb-3 sm:mb-4">
                  powered by ABB Genix™
                </p>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
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
                <h3 className="text-lg sm:text-xl font-semibold text-ink mb-3 sm:mb-4">Business Impact</h3>
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

            {/* Image */}
            <div className="rounded-lg overflow-hidden border border-grayLine flex items-center justify-center">
              <img
                src={genixImage}
                alt="GENIX™ interface"
                className="w-full h-auto object-contain scale-[1.12]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-tight mb-4 sm:mb-6 px-4">
            Ready to Transform Your Maintenance Operations?
          </h2>
          <p className="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Discover how the SSP Platform can drive sustainable growth and operational excellence for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 min-h-[44px]" asChild>
              <a href="/#contact">
                Schedule a Demo
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary min-h-[44px]" asChild>
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
