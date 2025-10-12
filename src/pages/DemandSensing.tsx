import {
  GlobalNav,
  SmoothScrollReveal,
  SmoothStaggeredGrid,
} from '../components';
import { useScrollProgress } from '../hooks/useScrollProgress';
import demandSenseVideo from '../assets/products-page/demand-sense.mp4';

export function DemandSensing() {
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
            <source src={demandSenseVideo} type="video/mp4" />
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
            {/* Key Questions */}
            <div className="mb-12 space-y-4">
              {[
                'How do I plan for maximum opportunity?',
                'How do I plan for growth and profitability?',
                'How do I drive operational excellence?'
              ].map((question, index) => (
                <div
                  key={index}
                  style={{
                    opacity: progress,
                    transform: `translateY(${(1 - progress) * 30}px)`,
                    transition: `opacity 300ms ease-out ${index * 100}ms, transform 300ms ease-out ${index * 100}ms`,
                  }}
                >
                  <h2 className="text-h4 lg:text-h3 font-heading font-semibold text-white/90 leading-tight">
                    {question}
                  </h2>
                </div>
              ))}
            </div>

            {/* Main Headline with character-by-character animation */}
            <div className="mb-8">
              <h1 className="text-h1 lg:text-6xl font-heading font-bold leading-tight">
                {'Sense the demand to plan for opportunity!'.split(' ').map((word, wordIndex) => {
                  const totalCharsBefore = 'Sense the demand to plan for opportunity!'.split(' ').slice(0, wordIndex).join('').length;
                  return (
                    <span key={wordIndex} className="inline-block mr-3">
                      {word.split('').map((char, charIndex) => {
                        const globalCharIndex = totalCharsBefore + charIndex;
                        const delay = globalCharIndex * 25;
                        return (
                          <span
                            key={charIndex}
                            className="inline-block"
                            style={{
                              opacity: progress,
                              transform: `translateY(${(1 - progress) * 30}px) scale(${0.8 + progress * 0.2})`,
                              filter: `blur(${(1 - progress) * 3}px)`,
                              background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #06b6d4 100%)',
                              WebkitBackgroundClip: 'text',
                              WebkitTextFillColor: progress > 0.5 ? 'transparent' : '#ffffff',
                              backgroundClip: 'text',
                              transition: `all 250ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
                            }}
                          >
                            {char}
                          </span>
                        );
                      })}
                    </span>
                  );
                })}
              </h1>
            </div>

            {/* Animated underline with shimmer effect */}
            <div className="relative mx-auto mb-12 flex justify-center">
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
                  Reach out to one of our experts to learn more
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

      {/* What is Demand Sensing Section */}
      <section className="py-24 bg-neutral-surface relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-hover rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <SmoothScrollReveal animation="slide-up" distance={60}>
              <div className="text-center mb-8">
                <h2 className="text-h2 font-heading font-bold text-neutral-text-primary mb-6">
                  What is <span className="text-primary">Demand Sensing</span>?
                </h2>
              </div>
            </SmoothScrollReveal>

            <SmoothScrollReveal animation="zoom" distance={40}>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border-2 border-primary/20 mb-12 transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-h3 font-heading font-bold text-primary mb-6 text-center">
                  Well, it's all about capturing the Demand Signal
                </h3>
              </div>
            </SmoothScrollReveal>

            <SmoothStaggeredGrid
              staggerDelay={0.15}
              animation="fade-up"
              distance={50}
              className="space-y-6"
            >
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary transform hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎯</span>
                    </div>
                  </div>
                  <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed">
                    Predicting who wants what product, where at what moment in time. A lot of companies are still relying only on a 'gut feeling' approach when it comes to planning their business. Often this approach is internally focused and success is measured by an actual vs. plan report, without really looking at context like competition, marketplace and even consumer.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 shadow-lg border-l-4 border-red-500 transform hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">⚠️</span>
                    </div>
                  </div>
                  <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed">
                    <strong className="text-red-600">The fact is</strong>, that's simply not enough to capture today's marketplace dynamics. To plan future opportunity, with profitability in mind, other drivers have to be considered.
                  </p>
                </div>
              </div>
            </SmoothStaggeredGrid>
          </div>
        </div>
      </section>

      {/* The Problem & Solution Section */}
      <section className="py-24 bg-neutral-background relative overflow-hidden">
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
                  The <span className="text-primary">Challenge</span>
                </h2>
                <p className="text-body-lg font-body text-neutral-text-secondary max-w-3xl mx-auto">
                  Traditional vs. Data-Driven: Two approaches to demand planning
                </p>
              </div>
            </SmoothScrollReveal>

            <SmoothStaggeredGrid
              staggerDelay={0.1}
              animation="slide-right"
              distance={60}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
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
                    <span className="group-hover:text-neutral-text-primary transition-colors">Relying on gut feeling and internal data only</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 group-hover:bg-red-200 transition-colors">
                      <span className="text-red-500 text-sm">✗</span>
                    </div>
                    <span className="group-hover:text-neutral-text-primary transition-colors">Internally focused planning approach</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 group-hover:bg-red-200 transition-colors">
                      <span className="text-red-500 text-sm">✗</span>
                    </div>
                    <span className="group-hover:text-neutral-text-primary transition-colors">Missing external market dynamics</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 group-hover:bg-red-200 transition-colors">
                      <span className="text-red-500 text-sm">✗</span>
                    </div>
                    <span className="group-hover:text-neutral-text-primary transition-colors">Ignoring competition and consumer behavior</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-red-100 flex items-center justify-center mt-0.5 group-hover:bg-red-200 transition-colors">
                      <span className="text-red-500 text-sm">✗</span>
                    </div>
                    <span className="group-hover:text-neutral-text-primary transition-colors">Reactive instead of proactive</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-8 border-l-4 border-primary shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">✓</span>
                  </div>
                  <h3 className="text-h5 font-heading font-bold text-primary">
                    Data-Driven Solution
                  </h3>
                </div>
                <ul className="space-y-4 text-body font-body text-neutral-text-secondary flex-grow">
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 group-hover:bg-primary/30 transition-colors">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <span className="group-hover:text-neutral-text-primary transition-colors">Leveraging all available (big) data sources</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 group-hover:bg-primary/30 transition-colors">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <span className="group-hover:text-neutral-text-primary transition-colors">Systemized business logic for predictions</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 group-hover:bg-primary/30 transition-colors">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <span className="group-hover:text-neutral-text-primary transition-colors">Short- and long-term demand forecasting</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 group-hover:bg-primary/30 transition-colors">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <span className="group-hover:text-neutral-text-primary transition-colors">Market opportunity understanding</span>
                  </li>
                  <li className="flex items-start gap-3 group">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-0.5 group-hover:bg-primary/30 transition-colors">
                      <span className="text-primary text-sm">✓</span>
                    </div>
                    <span className="group-hover:text-neutral-text-primary transition-colors">Sustainable growth and profitability focus</span>
                  </li>
                </ul>
              </div>
            </SmoothStaggeredGrid>

            <SmoothScrollReveal animation="slide-up" distance={60}>
              <div className="bg-gradient-to-br from-white to-primary/5 rounded-2xl p-10 shadow-xl border-2 border-primary/10 transform hover:shadow-2xl hover:scale-105 transition-all duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-3xl">💡</span>
                  </div>
                  <div>
                    <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-4">
                      The Key Insight
                    </h3>
                    <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed mb-6">
                      Many of the insights to predict demand are not captured by a company's internal data. Leveraging all types of available (big) data and (systemized) business logic enables to predict short- and long-term Demand.
                    </p>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 border-l-4 border-primary">
                  <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed">
                    Together with our partner <strong className="text-primary text-h5">Cubewise</strong>, we have developed a unique method that predicts demand and translates that into your integrated business plan. This method is focused on understanding the market opportunity while driving operational excellence, and allowing for sustainable growth and profitability.
                  </p>
                </div>
              </div>
            </SmoothScrollReveal>
          </div>
        </div>
      </section>

      {/* Solution Features Section */}
      <section className="py-24 bg-gradient-to-b from-neutral-surface via-primary/5 to-neutral-surface relative overflow-hidden">
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
                  Our <span className="text-primary">Solution</span>
                </h2>
                <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed max-w-4xl mx-auto">
                  We developed a solution that generates a base plan allowing for your business analysts and business planners to focus on what really drives your business and effectively plan for it.
                </p>
              </div>
            </SmoothScrollReveal>

            <SmoothStaggeredGrid
              staggerDelay={0.12}
              animation="zoom"
              distance={30}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            >
              <div className="group bg-white rounded-2xl p-8 shadow-lg border-t-4 border-primary h-full flex flex-col transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:border-t-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <span className="text-4xl">📊</span>
                </div>
                <h3 className="text-h5 font-heading font-bold text-neutral-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                  Market Opportunity
                </h3>
                <p className="text-body font-body text-neutral-text-secondary flex-grow group-hover:text-neutral-text-primary transition-colors duration-300">
                  Understanding and capturing true market demand beyond internal perspectives
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
                  <span className="text-4xl">⚡</span>
                </div>
                <h3 className="text-h5 font-heading font-bold text-neutral-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                  Operational Excellence
                </h3>
                <p className="text-body font-body text-neutral-text-secondary flex-grow group-hover:text-neutral-text-primary transition-colors duration-300">
                  Driving efficiency through data-driven planning and execution
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
                  <span className="text-4xl">📈</span>
                </div>
                <h3 className="text-h5 font-heading font-bold text-neutral-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                  Growth & Profitability
                </h3>
                <p className="text-body font-body text-neutral-text-secondary flex-grow group-hover:text-neutral-text-primary transition-colors duration-300">
                  Sustainable business growth with profitability at the core
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
                    <span className="text-5xl">📹</span>
                  </div>
                  <h3 className="text-h3 font-heading font-bold mb-6">
                    Want to Know More?
                  </h3>
                  <p className="text-body-lg font-body leading-relaxed max-w-3xl mx-auto mb-8">
                    Still want to know more about demand sensing analytics and how it can help your organization? Watch Agnicio's Data Strategist and Director break it down in less than 15 minutes.
                  </p>
                  <div className="inline-flex items-center gap-2 text-white/90 font-semibold">
                    <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>Watch the video below</span>
                    <svg className="w-5 h-5 animate-bounce" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
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
                      src="https://www.youtube.com/embed/yJjp6QaG5lo"
                      title="Demand Sensing Analytics Overview"
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
                Ready to Transform Your Demand Planning?
              </h2>
              <p className="text-body-lg text-white/90 mb-8">
                Discover how demand sensing can help you plan for maximum opportunity, drive growth and profitability, and achieve operational excellence.
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
