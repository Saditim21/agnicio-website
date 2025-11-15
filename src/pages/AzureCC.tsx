import {
  GlobalNav,
  SmoothScrollReveal,
} from '../components';
import { useScrollProgress } from '../hooks/useScrollProgress';
import azureVideo from '../assets/services-page/azure.mp4';

export function AzureCC() {
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
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            width: '100vw',
            height: '100vh',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
          }}
        >
          <source src={azureVideo} type="video/mp4" />
        </video>

        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Headline with character-by-character animation */}
            <div className="mb-8">
              <h1 className="text-h1 lg:text-6xl font-heading font-bold leading-tight">
                {"Data analytics for the era of AI".split(' ').map((word, wordIndex) => {
                  const totalCharsBefore = "Data analytics for the era of AI".split(' ').slice(0, wordIndex).join('').length;
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
                              background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #0078d4 100%)',
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

            {/* Animated underline */}
            <div className="relative mx-auto mb-12 flex justify-center">
              <div
                className="h-1 rounded-full relative overflow-hidden"
                style={{
                  width: `${progress * 200}px`,
                  background: 'linear-gradient(90deg, transparent, #0078d4, #00bcf2, #0078d4, transparent)',
                  backgroundSize: '200% 100%',
                  animation: progress > 0.8 ? 'shimmerLine 3s linear infinite' : 'none',
                  transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-400 rounded-full"
                  style={{
                    opacity: progress,
                    boxShadow: '0 0 10px #00bcf2, 0 0 20px #00bcf2',
                    animation: progress > 0.9 ? 'pulse 2s ease-in-out infinite' : 'none',
                    transition: 'opacity 250ms ease-in-out',
                  }}
                />
              </div>
            </div>

            {/* Description */}
            <p
              className="text-body-lg font-body text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed"
              style={{
                opacity: progress,
                transform: `translateY(${(1 - progress) * 20}px)`,
                transition: 'opacity 300ms ease-out 200ms, transform 300ms ease-out 200ms',
              }}
            >
              We can provide guidance, best practices, and insights related to Azure data services such as <strong className="text-white">Azure Data Factory, Azure Databricks, Azure Synapse, Azure HDInsight, Azure Stream Analytics</strong>, and more. From strategic planning to implementation, our expertise spans the entire Azure ecosystem.
            </p>

            {/* Sub-heading */}
            <h2
              className="text-h4 font-heading font-semibold text-white/95 mb-12"
              style={{
                opacity: progress,
                transform: `translateY(${(1 - progress) * 20}px)`,
                transition: 'opacity 300ms ease-out 300ms, transform 300ms ease-out 300ms',
              }}
            >
              If you need any help around Azure Data Analytics
            </h2>

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
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />
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

        {/* Subtle grid overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </section>

      {/* Professional Services Section */}
      <section className="relative py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4 relative z-10">
          <SmoothScrollReveal animation="slide-up" distance={60}>
            <div className="text-center mb-20">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
                OUR CAPABILITIES
              </div>
              <h2 className="text-5xl lg:text-6xl font-heading font-bold text-neutral-text-primary mb-6">
                Azure CC Services
              </h2>
              <p className="text-xl text-neutral-text-secondary max-w-3xl mx-auto">
                Enterprise-grade Azure solutions designed to accelerate your digital transformation
              </p>
            </div>
          </SmoothScrollReveal>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Service 1 - Azure Solution Architecture */}
              <SmoothScrollReveal animation="slide-up" distance={60}>
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-300 hover:-translate-y-2">
                  {/* Gradient accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-t-2xl"></div>

                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-400 rounded-full animate-ping-slow"></div>
                  </div>

                  {/* Category */}
                  <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider rounded-md mb-4">
                    Architecture
                  </span>

                  {/* Title */}
                  <h3 className="text-2xl font-heading font-bold text-neutral-text-primary mb-4">
                    Azure Solution Architecture
                  </h3>

                  {/* Description */}
                  <p className="text-base text-neutral-text-secondary leading-relaxed mb-6">
                    Collaborate with business leaders to define use cases, aligning with advanced analytics and BI solutions. Expert architecture design with the right Azure tools for seamless data flow.
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">Design</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">Integration</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">Optimization</span>
                  </div>
                </div>
              </SmoothScrollReveal>

              {/* Service 2 - Assessment & Migration */}
              <SmoothScrollReveal animation="slide-up" distance={60}>
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-green-300 hover:-translate-y-2">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-green-600 rounded-t-2xl"></div>

                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-ping-slow"></div>
                  </div>

                  <span className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-bold uppercase tracking-wider rounded-md mb-4">
                    Migration
                  </span>

                  <h3 className="text-2xl font-heading font-bold text-neutral-text-primary mb-4">
                    Assessment & Migration
                  </h3>

                  <p className="text-base text-neutral-text-secondary leading-relaxed mb-6">
                    Seamlessly transition data from on-premise to Azure, prioritizing security, accessibility, and scalability. Optimize existing architectures for cloud excellence.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">Cloud Migration</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">Security</span>
                  </div>
                </div>
              </SmoothScrollReveal>

              {/* Service 3 - Power BI */}
              <SmoothScrollReveal animation="slide-up" distance={60}>
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-yellow-300 hover:-translate-y-2">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-t-2xl"></div>

                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping-slow"></div>
                  </div>

                  <span className="inline-block px-3 py-1 bg-yellow-50 text-yellow-700 text-xs font-bold uppercase tracking-wider rounded-md mb-4">
                    Insights
                  </span>

                  <h3 className="text-2xl font-heading font-bold text-neutral-text-primary mb-4">
                    Power BI
                  </h3>

                  <p className="text-base text-neutral-text-secondary leading-relaxed mb-6">
                    Leverage Azure Power BI for actionable insights. From data modeling to interactive dashboards, we facilitate informed decision-making.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">Analytics</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">Visualization</span>
                  </div>
                </div>
              </SmoothScrollReveal>

              {/* Service 4 - Fabric */}
              <SmoothScrollReveal animation="slide-up" distance={60}>
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-purple-300 hover:-translate-y-2">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600 rounded-t-2xl"></div>

                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                      </svg>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-400 rounded-full animate-ping-slow"></div>
                  </div>

                  <span className="inline-block px-3 py-1 bg-purple-50 text-purple-700 text-xs font-bold uppercase tracking-wider rounded-md mb-4">
                    Unified Platform
                  </span>

                  <h3 className="text-2xl font-heading font-bold text-neutral-text-primary mb-4">
                    Microsoft Fabric
                  </h3>

                  <p className="text-base text-neutral-text-secondary leading-relaxed mb-6">
                    An inclusive analytics solution, seamlessly unifying Power BI, Azure Synapse, and Azure DataFactory. Streamline your analytics with OneLake unified storage.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">Power BI</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">Synapse</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">OneLake</span>
                  </div>
                </div>
              </SmoothScrollReveal>

              {/* Service 5 - Azure AI */}
              <SmoothScrollReveal animation="slide-up" distance={60}>
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-cyan-300 hover:-translate-y-2">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-t-2xl"></div>

                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full animate-ping-slow"></div>
                  </div>

                  <span className="inline-block px-3 py-1 bg-cyan-50 text-cyan-700 text-xs font-bold uppercase tracking-wider rounded-md mb-4">
                    AI & ML
                  </span>

                  <h3 className="text-2xl font-heading font-bold text-neutral-text-primary mb-4">
                    Azure Artificial Intelligence
                  </h3>

                  <p className="text-base text-neutral-text-secondary leading-relaxed mb-6">
                    Harness the transformative potential of machine learning, artificial intelligence, and large language models within Azure for powerful insights and predictions.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">Machine Learning</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">LLMs</span>
                  </div>
                </div>
              </SmoothScrollReveal>

              {/* Service 6 - Academy */}
              <SmoothScrollReveal animation="slide-up" distance={60}>
                <div className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-indigo-300 hover:-translate-y-2">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-t-2xl"></div>

                  <div className="mb-6 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-indigo-400 rounded-full animate-ping-slow"></div>
                  </div>

                  <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-bold uppercase tracking-wider rounded-md mb-4">
                    Education
                  </span>

                  <h3 className="text-2xl font-heading font-bold text-neutral-text-primary mb-4">
                    Azure Academy
                  </h3>

                  <p className="text-base text-neutral-text-secondary leading-relaxed mb-6">
                    Your gateway to mastering Azure solutions. From Data Factory to Synapse, Fabric, and Power BI, our programs cover the full spectrum of Azure offerings.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">Training</span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">Certification</span>
                  </div>
                </div>
              </SmoothScrollReveal>

            </div>
          </div>
        </div>

        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #000 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}></div>
      </section>

      {/* CTA Section */}
      <SmoothScrollReveal animation="slide-up" distance={80}>
        <section id="contact" className="py-32 relative overflow-hidden" style={{
          background: 'linear-gradient(135deg, #0078d4 0%, #005a9e 100%)',
        }}>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                Ready to Transform with Azure?
              </h2>
              <p className="text-xl text-white/90 mb-10 leading-relaxed">
                Let's discuss how our Azure CC expertise can help you harness the full power of Microsoft Azure for your data analytics and AI initiatives.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 font-body font-bold text-lg rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 ease-in-out transform hover:scale-105 hover:-translate-y-1"
              >
                Contact Our Azure Experts
                <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Geometric background elements */}
          <div className="absolute top-10 right-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl"></div>

          {/* Diagonal lines pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,0.1) 35px, rgba(255,255,255,0.1) 70px)',
          }}></div>
        </section>
      </SmoothScrollReveal>

      {/* Footer */}
      <footer className="bg-neutral-text-primary text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-h5 font-heading font-bold mb-4">Agnicio</h3>
              <p className="text-body-sm text-neutral-background/70 mb-4">
                Empowering organizations with intelligent solutions
              </p>
            </div>

            <div>
              <h4 className="text-h6 font-heading font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="/products/ai-maintenance" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">AI Driven Maintenance</a></li>
                <li><a href="/products/demand-sensing" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">Demand Sensing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-h6 font-heading font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="/services/ai" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">AI</a></li>
                <li><a href="/services/data-strategy" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">Data Strategy</a></li>
                <li><a href="/services/data-engineering" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">Data Engineering</a></li>
                <li><a href="/services/azure-cc" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">Azure CC</a></li>
              </ul>
            </div>

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

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
}
