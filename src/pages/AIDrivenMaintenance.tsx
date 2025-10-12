import {
  GlobalNav,
  SmoothScrollReveal,
  SmoothStaggeredGrid,
} from '../components';
import { useScrollProgress } from '../hooks/useScrollProgress';
import sspVideo from '../assets/products-page/ssp.mp4';
import senseImg from '../assets/products-page/sense.jpeg';
import solveImg from '../assets/products-page/solve.jpeg';
import planningImg from '../assets/products-page/planning.jpeg';

export function AIDrivenMaintenance() {
  // Use scroll-based animations for hero
  const { ref, progress } = useScrollProgress({
    persist: false,
    easing: 'ease-out',
    threshold: 0.3
  });

  return (
    <div className="min-h-screen bg-neutral-background">
      {/* Global Navigation */}
      <GlobalNav />

      {/* Hero Section with Video Background */}
      <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: 'brightness(0.4)' }}
          >
            <source src={sspVideo} type="video/mp4" />
          </video>

          {/* Dark gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

          {/* Animated gradient overlay */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(circle at 30% 50%, rgba(55, 62, 152, 0.4) 0%, transparent 50%)',
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Headline with character-by-character animation */}
            <div className="mb-8">
              <h1 className="text-h1 lg:text-6xl font-heading font-bold leading-tight">
                {'SSP: Sense, Solve, Plan'.split('').map((char, charIndex) => {
                  const delay = charIndex * 30; // 30ms per character
                  return (
                    <span
                      key={charIndex}
                      className="inline-block"
                      style={{
                        opacity: progress,
                        transform: `translateY(${(1 - progress) * 40}px) scale(${0.8 + progress * 0.2})`,
                        filter: `blur(${(1 - progress) * 3}px)`,
                        background: char === ' ' ? 'transparent' : 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #06b6d4 100%)',
                        WebkitBackgroundClip: char === ' ' ? 'unset' : 'text',
                        WebkitTextFillColor: progress > 0.5 ? (char === ' ' ? 'transparent' : 'transparent') : '#ffffff',
                        backgroundClip: char === ' ' ? 'unset' : 'text',
                        color: char === ' ' ? 'transparent' : 'inherit',
                        transition: `all 250ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
                      }}
                    >
                      {char === ' ' ? '\u00A0' : char}
                    </span>
                  );
                })}
              </h1>
            </div>

            {/* Animated underline with shimmer effect */}
            <div className="relative mx-auto mb-8 flex justify-center">
              <div
                className="h-1 rounded-full relative overflow-hidden"
                style={{
                  width: `${progress * 200}px`,
                  background: 'linear-gradient(90deg, transparent, #373e98, #06b6d4, #373e98, transparent)',
                  backgroundSize: '200% 100%',
                  animation: progress > 0.8 ? 'shimmerLine 3s linear infinite' : 'none',
                  transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {/* Glowing dot at center */}
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"
                  style={{
                    opacity: progress,
                    boxShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4',
                    animation: progress > 0.9 ? 'pulse 2s ease-in-out infinite' : 'none',
                    transition: 'opacity 250ms ease-in-out',
                  }}
                />
              </div>
            </div>

            {/* Description with fade-in and word highlighting */}
            <p
              className="text-body-lg font-body text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed"
              style={{
                opacity: progress,
                transform: `translateY(${(1 - progress) * 20}px)`,
                transition: 'opacity 300ms ease-out 200ms, transform 300ms ease-out 200ms',
              }}
            >
              Transforming asset maintenance with AI-powered intelligence:{' '}
              <strong className="text-white">Sense</strong> problems before they occur,{' '}
              <strong className="text-white">Solve</strong> issues with the power of LLM leveraging your enterprise wisdom, and{' '}
              <strong className="text-white">Plan</strong> maintenance for optimal performance and budget control.
            </p>

            {/* CTA Button with enhanced effects */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              style={{
                opacity: progress,
                transform: `translateY(${(1 - progress) * 20}px) scale(${0.95 + progress * 0.05})`,
                transition: 'opacity 300ms ease-out 400ms, transform 300ms ease-out 400ms',
              }}
            >
              <a
                href="#contact"
                className="group relative px-8 py-4 bg-primary text-white font-body font-semibold text-body-lg rounded-lg shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-250 ease-in-out transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
              >
                {/* Shimmer effect on hover */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />

                {/* Animated border glow */}
                <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  boxShadow: '0 0 20px rgba(55, 62, 152, 0.5), 0 0 40px rgba(6, 182, 212, 0.3)',
                }} />

                <span className="relative z-10 flex items-center gap-2">
                  Reach out to our experts
                  <svg className="w-5 h-5 transition-transform duration-250 group-hover:translate-x-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>
      </section>

      {/* What is SSP Platform Section */}
      <section className="py-24 bg-neutral-surface relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-hover rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <SmoothScrollReveal animation="slide-up" distance={60}>
              <h2 className="text-h2 font-heading font-bold text-neutral-text-primary mb-6 text-center">
                What is the <span className="text-primary">SSP Platform</span>?
              </h2>
            </SmoothScrollReveal>

            <SmoothScrollReveal animation="fade" distance={40}>
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary mb-8 transform hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed">
                  The Agnicio SSP platform revolutionizes asset maintenance by transitioning from a reactive, isolated approach to a proactive, data-driven system. By incorporating AI-powered sensing, problem-solving, and planning capabilities, it effectively addresses critical challenges in maintenance operations: dismantling data silos, preempting failures, extending asset lifecycles, enhancing safety, optimizing planning, and systematizing expert knowledge.
                </p>
              </div>
            </SmoothScrollReveal>

            <SmoothScrollReveal animation="slide-up" distance={50}>
              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 border-l-4 border-primary mb-12">
                <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-4">
                  Quantifiable Impact
                </h3>
                <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed mb-6">
                  This comprehensive solution delivers quantifiable improvements across all dimensions of your operations:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-4xl font-heading font-bold text-primary mb-2">35-45%</div>
                    <div className="text-body font-body text-neutral-text-secondary">Reduction in unplanned stops</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-4xl font-heading font-bold text-primary mb-2">15-20%</div>
                    <div className="text-body font-body text-neutral-text-secondary">Decrease in maintenance costs</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 shadow-sm">
                    <div className="text-4xl font-heading font-bold text-primary mb-2">25-30%</div>
                    <div className="text-body font-body text-neutral-text-secondary">Increase in productivity</div>
                  </div>
                </div>
              </div>
            </SmoothScrollReveal>
          </div>
        </div>
      </section>

      {/* Three Pillars: Sense, Solve, Plan */}
      <section className="py-24 bg-neutral-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <SmoothScrollReveal animation="fade">
              <h2 className="text-h2 font-heading font-bold text-neutral-text-primary mb-16 text-center">
                The Three Pillars of <span className="text-primary">SSP</span>
              </h2>
            </SmoothScrollReveal>

            <div className="space-y-16">
              {/* Sense */}
              <SmoothScrollReveal animation="slide-right" distance={80}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-4xl">👁️</span>
                      </div>
                      <h3 className="text-h3 font-heading font-bold text-primary">Sense</h3>
                    </div>
                    <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed">
                      AI-driven, continuous problem detection and failure prediction across your entire infrastructure, facilitating proactive maintenance and maximizing asset lifecycles.
                    </p>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={senseImg}
                      alt="Sense - AI-driven problem detection"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </SmoothScrollReveal>

              {/* Solve */}
              <SmoothScrollReveal animation="slide-left" distance={80}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={solveImg}
                      alt="Solve - AI-augmented problem solving"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="order-1 lg:order-2">
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-4xl">🔧</span>
                      </div>
                      <h3 className="text-h3 font-heading font-bold text-primary">Solve</h3>
                    </div>
                    <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed">
                      Systematized solution engineering that leverages enterprise knowledge, transitioning teams from investigation to solution mode, and reducing the learning curve through AI-augmented maintenance.
                    </p>
                  </div>
                </div>
              </SmoothScrollReveal>

              {/* Plan */}
              <SmoothScrollReveal animation="slide-right" distance={80}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <div className="inline-flex items-center gap-3 mb-6">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-4xl">📋</span>
                      </div>
                      <h3 className="text-h3 font-heading font-bold text-primary">Plan</h3>
                    </div>
                    <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed">
                      AI-driven maintenance planning that generates optimized schedules by balancing demand, resources, costs, and risk across functional areas and chain levels, providing control over budgets through scenario planning.
                    </p>
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={planningImg}
                      alt="Plan - Intelligent schedule optimization"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </SmoothScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* The Challenge Section */}
      <section className="py-24 bg-neutral-surface relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-40 right-20 w-64 h-64 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-primary rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <SmoothScrollReveal animation="slide-up" distance={60}>
              <div className="text-center mb-16">
                <h2 className="text-h2 font-heading font-bold text-neutral-text-primary mb-4">
                  The <span className="text-primary">Challenge</span> of Modern Maintenance
                </h2>
                <p className="text-body-lg font-body text-neutral-text-secondary max-w-3xl mx-auto">
                  Traditional vs. AI-Powered: Two approaches to maintenance planning
                </p>
              </div>
            </SmoothScrollReveal>

            <SmoothStaggeredGrid
              staggerDelay={0.1}
              animation="slide-right"
              distance={60}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              <div className="bg-white rounded-xl p-8 border-l-4 border-red-500 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">❌</span>
                  </div>
                  <h3 className="text-h5 font-heading font-bold text-neutral-text-primary">
                    Traditional Approach
                  </h3>
                </div>
                <ul className="space-y-4 text-body font-body text-neutral-text-secondary flex-grow">
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 group-hover:bg-red-200 transition-colors">
                      <span className="text-red-500 text-sm">✗</span>
                    </div>
                    <span className="group-hover:text-neutral-text-primary transition-colors">Static planning methods that struggle to adapt</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 group-hover:bg-red-200 transition-colors">
                      <span className="text-red-500 text-sm">✗</span>
                    </div>
                    <span className="group-hover:text-neutral-text-primary transition-colors">Reactive rather than strategic approach</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 group-hover:bg-red-200 transition-colors">
                      <span className="text-red-500 text-sm">✗</span>
                    </div>
                    <span className="group-hover:text-neutral-text-primary transition-colors">Isolated systems and data silos</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 group-hover:bg-red-200 transition-colors">
                      <span className="text-red-500 text-sm">✗</span>
                    </div>
                    <span className="group-hover:text-neutral-text-primary transition-colors">Limited visibility across operations</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 group-hover:bg-red-200 transition-colors">
                      <span className="text-red-500 text-sm">✗</span>
                    </div>
                    <span className="group-hover:text-neutral-text-primary transition-colors">Difficulty balancing costs and risk</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border-l-4 border-primary shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-h5 font-heading font-bold text-primary">
                    AI-Powered Solution
                  </h3>
                </div>
                <ul className="space-y-4 text-body font-body text-neutral-text-secondary flex-grow">
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 group-hover:bg-primary/30 transition-colors">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <span className="group-hover:text-neutral-text-primary transition-colors">Dynamic, data-driven planning that adapts in real-time</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 group-hover:bg-primary/30 transition-colors">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <span className="group-hover:text-neutral-text-primary transition-colors">Proactive, strategic maintenance approach</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 group-hover:bg-primary/30 transition-colors">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <span className="group-hover:text-neutral-text-primary transition-colors">Integrated systems with unified data view</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 group-hover:bg-primary/30 transition-colors">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <span className="group-hover:text-neutral-text-primary transition-colors">Cross-functional visibility and optimization</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 group-hover:bg-primary/30 transition-colors">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <span className="group-hover:text-neutral-text-primary transition-colors">Intelligent balancing of demand, resources, costs, and risk</span>
                  </li>
                </ul>
              </div>
            </SmoothStaggeredGrid>

            <SmoothScrollReveal animation="slide-up" distance={60}>
              <div className="mt-12 bg-gradient-to-br from-white to-primary/5 rounded-2xl p-10 shadow-xl border-2 border-primary/10 transform hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">💡</span>
                  </div>
                  <div>
                    <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-4">
                      The Key Insight
                    </h3>
                    <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed mb-6">
                      Maintenance is fundamentally about foresight—anticipating needs, efficiently allocating resources, and minimizing downtime. However, many companies still depend on static planning methods that struggle to balance demand, costs, and risk. Without an intelligent, data-driven approach, maintenance planning can quickly become reactive rather than strategic.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border-l-4 border-primary">
                  <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed">
                    Traditional planning methods are inadequate in today's complex operational environment. To ensure efficiency, compliance, and cost control, companies require a dynamic approach—one that adapts to shifting constraints and optimizes every decision.
                  </p>
                </div>
              </div>
            </SmoothScrollReveal>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-24 bg-gradient-to-b from-neutral-background via-primary/5 to-neutral-background relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <SmoothScrollReveal animation="slide-up" distance={60}>
              <div className="text-center mb-12">
                <h2 className="text-h2 font-heading font-bold text-neutral-text-primary mb-6">
                  AI-Powered Maintenance <span className="text-primary">Planning Solution</span>
                </h2>
                <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed max-w-4xl mx-auto">
                  Many key insights necessary for creating the optimal maintenance plan are not captured in standard planning tools. Leveraging AI-driven algorithms and data-driven logic enables smarter, cross-functional planning—ensuring that shutdowns, turnarounds, and outages are optimized across the entire value chain.
                </p>
              </div>
            </SmoothScrollReveal>

            <SmoothStaggeredGrid
              staggerDelay={0.12}
              animation="zoom"
              distance={30}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            >
              <div className="group bg-white rounded-2xl p-8 shadow-lg border-t-4 border-primary h-full flex flex-col transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:border-t-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <span className="text-4xl">🎯</span>
                </div>
                <h3 className="text-h5 font-heading font-bold text-neutral-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                  Intelligent Generation
                </h3>
                <p className="text-body font-body text-neutral-text-secondary flex-grow group-hover:text-neutral-text-primary transition-colors duration-300">
                  Automatically generates optimized maintenance plans based on real-time data and constraints
                </p>
                <div className="mt-6 pt-6 border-t border-neutral-border">
                  <div className="flex items-center gap-2 text-primary font-semibold text-body-sm">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg border-t-4 border-primary h-full flex flex-col transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:border-t-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <span className="text-4xl">⚖️</span>
                </div>
                <h3 className="text-h5 font-heading font-bold text-neutral-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                  Smart Balancing
                </h3>
                <p className="text-body font-body text-neutral-text-secondary flex-grow group-hover:text-neutral-text-primary transition-colors duration-300">
                  Balances demand, resources, costs, and risk across all operations
                </p>
                <div className="mt-6 pt-6 border-t border-neutral-border">
                  <div className="flex items-center gap-2 text-primary font-semibold text-body-sm">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="group bg-white rounded-2xl p-8 shadow-lg border-t-4 border-primary h-full flex flex-col transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:border-t-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <span className="text-4xl">🔮</span>
                </div>
                <h3 className="text-h5 font-heading font-bold text-neutral-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                  Scenario Planning
                </h3>
                <p className="text-body font-body text-neutral-text-secondary flex-grow group-hover:text-neutral-text-primary transition-colors duration-300">
                  Built-in scenario planning for budget control and operational excellence
                </p>
                <div className="mt-6 pt-6 border-t border-neutral-border">
                  <div className="flex items-center gap-2 text-primary font-semibold text-body-sm">
                    <span>Learn more</span>
                    <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </SmoothStaggeredGrid>

            <SmoothScrollReveal animation="zoom" distance={40}>
              <div className="relative bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-12 text-center text-white shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                {/* Animated background effect */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
                    <span className="text-5xl">🎯</span>
                  </div>
                  <h3 className="text-h3 font-heading font-bold mb-6">
                    A Complete Ecosystem
                  </h3>
                  <p className="text-body-lg font-body leading-relaxed max-w-3xl mx-auto">
                    Together with predictive and augmented maintenance, our planning solution forms a complete ecosystem—helping you <strong>sense</strong>, <strong>solve</strong>, and <strong>plan</strong> for every maintenance challenge.
                  </p>
                </div>
              </div>
            </SmoothScrollReveal>

            {/* Video Section */}
            <SmoothScrollReveal animation="slide-up" distance={60}>
              <div className="mt-12">
                <div className="relative rounded-xl overflow-hidden shadow-2xl bg-neutral-surface">
                  {/* Video container with 16:9 aspect ratio */}
                  <div className="relative" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/ncar02ta0WU"
                      title="SSP Platform Overview"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            </SmoothScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <SmoothScrollReveal animation="slide-up" distance={80}>
        <section id="contact" className="py-24 bg-primary relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-h2 font-heading font-bold text-white mb-6">
                Ready to Transform Your Maintenance Operations?
              </h2>
              <p className="text-body-lg text-white/90 mb-8">
                Discover how the SSP platform can help you sense problems before they occur, solve issues intelligently, and plan maintenance for optimal performance.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-body font-semibold text-body-lg rounded-lg shadow-xl hover:shadow-2xl transition-all duration-250 ease-in-out transform hover:scale-105"
              >
                Contact Our Experts
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
              <h3 className="text-h5 font-heading font-bold mb-4">Agnicio</h3>
              <p className="text-body-sm text-neutral-background/70 mb-4">
                Empowering organizations with intelligent solutions
              </p>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-h6 font-heading font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="/products/ai-maintenance" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">AI Driven Maintenance</a></li>
                <li><a href="/products/demand-sensing" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">Demand Sensing</a></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-h6 font-heading font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="/services/ai" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">AI</a></li>
                <li><a href="/services/data-strategy" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">Data Strategy</a></li>
                <li><a href="/services/data-engineering" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">Data Engineering</a></li>
                <li><a href="/services/azure-cc" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">Azure CC</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-h6 font-heading font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-body-sm text-neutral-background/70">
                <li>hello@agnicio.com</li>
                <li>+1 (555) 123-4567</li>
                <li className="pt-2">
                  <a href="/contact" className="text-white hover:text-primary-light transition-colors duration-200">Contact Form →</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-body-sm text-neutral-background/60">
              © 2025 Agnicio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="/privacy" className="text-body-sm text-neutral-background/60 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="/terms" className="text-body-sm text-neutral-background/60 hover:text-white transition-colors duration-200">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
          }
        }

        @keyframes shimmerLine {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  );
}
