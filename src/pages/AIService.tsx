import {
  GlobalNav,
  SmoothScrollReveal,
  SmoothStaggeredGrid,
} from '../components';
import { useScrollProgress } from '../hooks/useScrollProgress';
import aiVideo from '../assets/services-page/AI.mp4';

export function AIService() {
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

      {/* Hero Section */}
      <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src={aiVideo} type="video/mp4" />
        </video>

        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Headline with character-by-character animation */}
            <div className="mb-8">
              <h1 className="text-h1 lg:text-6xl font-heading font-bold leading-tight">
                {"Unlock AI's transformative power".split(' ').map((word, wordIndex) => {
                  const totalCharsBefore = "Unlock AI's transformative power".split(' ').slice(0, wordIndex).join('').length;
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

            {/* Description */}
            <p
              className="text-body-lg font-body text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed"
              style={{
                opacity: progress,
                transform: `translateY(${(1 - progress) * 20}px)`,
                transition: 'opacity 300ms ease-out 200ms, transform 300ms ease-out 200ms',
              }}
            >
              We provide the strategic and practical solutions for your <strong className="text-white">AI transformation</strong>
            </p>

            {/* CTA Button */}
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
                  boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)',
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

      {/* AI and Strategy Capabilities Section */}
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
                AI and Strategy <span className="text-primary">Capabilities</span>
              </h2>
            </SmoothScrollReveal>

            <SmoothScrollReveal animation="fade" distance={40}>
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary mb-8 transform hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed">
                  Agnicio leverages cutting-edge artificial intelligence to transform asset maintenance from reactive to predictive, with our specialized AI department developing sophisticated algorithms that detect patterns and anomalies across your entire infrastructure before problems occur. Our AI strategy capabilities extend beyond simply implementing technology—we partner with maintenance organizations to create a comprehensive data foundation and AI roadmap tailored to your specific operational environment. We don't just provide AI solutions; we architect complete digital transformations that break down data silos and enable cross-functional planning while delivering measurable improvements in productivity, asset lifespan, and operational costs. Our approach includes thorough assessment of your current landscape, strategic alignment of AI initiatives with business objectives, implementation of a unified data platform, and continuous improvement of algorithms to ensure sustainable growth and operational excellence.
                </p>
              </div>
            </SmoothScrollReveal>
          </div>
        </div>
      </section>

      {/* AI Capabilities Grid */}
      <section className="py-24 bg-neutral-background relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <SmoothStaggeredGrid
              staggerDelay={0.15}
              animation="zoom"
              distance={40}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Predictive Analytics */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg border-t-4 border-primary h-full flex flex-col transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:border-t-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <span className="text-4xl">📊</span>
                </div>
                <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                  Predictive Analytics
                </h3>
                <p className="text-body font-body text-neutral-text-secondary flex-grow group-hover:text-neutral-text-primary transition-colors duration-300 leading-relaxed">
                  With our proven track record in predictive analytics, we empower you to anticipate change and make data-driven decisions that drive revenue growth
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

              {/* Generative AI */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg border-t-4 border-primary h-full flex flex-col transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:border-t-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <span className="text-4xl">🤖</span>
                </div>
                <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                  Generative AI
                </h3>
                <p className="text-body font-body text-neutral-text-secondary flex-grow group-hover:text-neutral-text-primary transition-colors duration-300 leading-relaxed">
                  Harness the power of LLMs to unlock new dimensions of innovation. We build novel data-driven scenarios and solutions that redefine your industry
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

              {/* Machine Learning */}
              <div className="group bg-white rounded-2xl p-8 shadow-lg border-t-4 border-primary h-full flex flex-col transform hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:border-t-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <span className="text-4xl">⚙️</span>
                </div>
                <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-4 group-hover:text-primary transition-colors duration-300">
                  Machine Learning
                </h3>
                <p className="text-body font-body text-neutral-text-secondary flex-grow group-hover:text-neutral-text-primary transition-colors duration-300 leading-relaxed">
                  Drive operational efficiency and gain a competitive edge with our tailored machine learning solutions, designed to optimize performance and deliver measurable results
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
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-24 bg-gradient-to-b from-neutral-surface via-primary/5 to-neutral-surface relative overflow-hidden">
        {/* Decorative background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <SmoothScrollReveal animation="slide-up" distance={60}>
              <h2 className="text-h2 font-heading font-bold text-neutral-text-primary mb-16 text-center">
                Our <span className="text-primary">Approach</span>
              </h2>
            </SmoothScrollReveal>

            <SmoothStaggeredGrid
              staggerDelay={0.15}
              animation="fade-up"
              distance={50}
              className="space-y-8"
            >
              {/* Step 1 */}
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary transform hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-h3 font-heading font-bold">
                      1
                    </div>
                  </div>
                  <div>
                    <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-3">
                      Discovery & Assessment
                    </h3>
                    <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed">
                      Understanding your business goals and identifying key opportunities for AI implementation
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary transform hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-h3 font-heading font-bold">
                      2
                    </div>
                  </div>
                  <div>
                    <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-3">
                      Solution Design & Development
                    </h3>
                    <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed">
                      Creating customized AI solutions that align with your specific requirements
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-xl p-8 shadow-lg border-l-4 border-primary transform hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white text-h3 font-heading font-bold">
                      3
                    </div>
                  </div>
                  <div>
                    <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-3">
                      Implementation & Integration
                    </h3>
                    <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed">
                      Seamlessly integrating AI solutions into your existing systems
                    </p>
                  </div>
                </div>
              </div>
            </SmoothStaggeredGrid>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <SmoothScrollReveal animation="slide-up" distance={80}>
        <section id="contact" className="py-24 bg-primary relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-h2 font-heading font-bold text-white mb-6">
                Ready to Unlock AI's Potential?
              </h2>
              <p className="text-body-lg text-white/90 mb-8">
                Let's discuss how our AI solutions can transform your business and drive sustainable growth.
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
