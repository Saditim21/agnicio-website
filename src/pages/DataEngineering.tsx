import {
  GlobalNav,
  SmoothScrollReveal,
  SmoothStaggeredGrid,
} from '../components';
import { useScrollProgress } from '../hooks/useScrollProgress';
import dataEngineeringVideo from '../assets/services-page/data-engineering.mp4';

export function DataEngineering() {
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
          <source src={dataEngineeringVideo} type="video/mp4" />
        </video>

        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 py-32">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Headline with character-by-character animation */}
            <div className="mb-8">
              <h1 className="text-h1 lg:text-6xl font-heading font-bold leading-tight">
                {"Available, accessible and useful Data".split(' ').map((word, wordIndex) => {
                  const totalCharsBefore = "Available, accessible and useful Data".split(' ').slice(0, wordIndex).join('').length;
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
              className="text-body-lg font-body text-white/90 max-w-4xl mx-auto mb-8 leading-relaxed"
              style={{
                opacity: progress,
                transform: `translateY(${(1 - progress) * 20}px)`,
                transition: 'opacity 300ms ease-out 200ms, transform 300ms ease-out 200ms',
              }}
            >
              Agnicio data engineers and architects are dedicated to build <strong className="text-white">robust and scalable data infrastructures</strong> that are designed for faster and better analytics. This brings actionable insights and informed decision-making capabilities. We help you build and manage your enterprise data infrastructure and strive to make your data available, accessible, and useful to your business.
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
              Say goodbye to data silos, spreadsheet headaches and inefficient decision-making!
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

      {/* 3D Parallax Data Flow Visualization */}
      <section className="relative min-h-screen py-32 overflow-hidden bg-gradient-to-br from-slate-900 via-primary/10 to-slate-900">
        {/* Animated 3D background layers for parallax */}
        <div className="absolute inset-0">
          {/* Layer 1 - Far background */}
          <div className="absolute inset-0 parallax-layer-1">
            <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-float-slower"></div>
          </div>

          {/* Layer 2 - Mid background with grid */}
          <div className="absolute inset-0 parallax-layer-2 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(rgba(55, 62, 152, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(55, 62, 152, 0.5) 1px, transparent 1px)`,
              backgroundSize: '50px 50px',
              transform: 'perspective(1000px) rotateX(60deg)',
              transformOrigin: 'center top'
            }}></div>
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 parallax-layer-3">
            {[...Array(30)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-cyan-400/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `floatParticle ${10 + Math.random() * 20}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 5}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <SmoothScrollReveal animation="slide-up" distance={60}>
            <h2 className="text-5xl lg:text-7xl font-heading font-black text-center mb-6 bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent">
              The Data Journey
            </h2>
            <p className="text-xl text-white/80 text-center max-w-3xl mx-auto mb-24">
              From chaos to clarity - we transform your data into actionable intelligence
            </p>
          </SmoothScrollReveal>

          {/* 3D Interactive Pipeline Visualization */}
          <div className="max-w-7xl mx-auto relative" style={{ perspective: '2000px' }}>
            {/* SVG Connections Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block" style={{ zIndex: 0 }}>
              <defs>
                <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: '#373e98', stopOpacity: 0 }} />
                  <stop offset="50%" style={{ stopColor: '#06b6d4', stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: '#373e98', stopOpacity: 0 }} />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* Animated connecting curves */}
              <path d="M 150 150 Q 300 100 450 150" stroke="url(#lineGradient1)" strokeWidth="2" fill="none" filter="url(#glow)" className="animate-draw-line" />
              <path d="M 450 150 Q 600 200 750 150" stroke="url(#lineGradient1)" strokeWidth="2" fill="none" filter="url(#glow)" className="animate-draw-line" style={{ animationDelay: '0.5s' }} />
              <path d="M 750 150 Q 900 100 1050 150" stroke="url(#lineGradient1)" strokeWidth="2" fill="none" filter="url(#glow)" className="animate-draw-line" style={{ animationDelay: '1s' }} />
            </svg>

            {/* Pipeline Steps with 3D transforms */}
            <SmoothStaggeredGrid
              staggerDelay={0.15}
              animation="zoom"
              className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-[1]"
            >
              {[
                { icon: '📥', title: 'Ingest', desc: 'Multi-source data collection', color: 'from-violet-500 to-purple-600', rotate: -2 },
                { icon: '⚙️', title: 'Transform', desc: 'Real-time processing', color: 'from-cyan-500 to-blue-600', rotate: 3 },
                { icon: '💾', title: 'Store', desc: 'Scalable infrastructure', color: 'from-primary to-indigo-600', rotate: -1 },
                { icon: '🔍', title: 'Analyze', desc: 'AI-powered insights', color: 'from-emerald-500 to-teal-600', rotate: 2 },
                { icon: '📊', title: 'Visualize', desc: 'Beautiful dashboards', color: 'from-pink-500 to-rose-600', rotate: -3 },
              ].map((step, i) => (
                <div key={i} className="group relative transform-gpu" style={{ transform: `rotateY(${step.rotate}deg)` }}>
                  {/* Glassmorphism card */}
                  <div className="relative glassmorphism rounded-3xl p-8 border border-white/20 overflow-hidden transition-all duration-500 hover:scale-110 hover:rotate-0 hover:-translate-y-6" style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
                  }}>
                    {/* Gradient glow on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-3xl`}></div>

                    {/* 3D floating icon */}
                    <div className="relative mb-6 transform group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-700">
                      <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl relative`} style={{
                        transform: 'translateZ(50px)',
                      }}>
                        <span className="text-4xl filter drop-shadow-lg">{step.icon}</span>
                        {/* Pulsing ring */}
                        <div className="absolute inset-0 rounded-2xl border-2 border-white/40 animate-ping-slow"></div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-heading font-bold text-white text-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-white/70 text-center group-hover:text-white/90 transition-colors duration-300">
                      {step.desc}
                    </p>

                    {/* Data flow particles */}
                    <div className="absolute inset-0 overflow-hidden rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(5)].map((_, j) => (
                        <div
                          key={j}
                          className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-particle-flow"
                          style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${j * 0.2}s`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Connection indicator */}
                  {i < 4 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 z-20">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-transparent animate-flow-right"></div>
                    </div>
                  )}
                </div>
              ))}
            </SmoothStaggeredGrid>
          </div>
        </div>
      </section>

      {/* Scrapbook-Style Services Collage */}
      <section className="relative py-40 bg-gradient-to-b from-white via-neutral-surface/50 to-white overflow-hidden">
        {/* Textured background overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}></div>

        {/* Scattered decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl animate-float-slow"></div>
          <div className="absolute bottom-40 right-20 w-40 h-40 bg-cyan-500/5 rounded-full blur-2xl animate-float-slower"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-violet-500/5 rounded-full blur-2xl animate-float-slow"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <SmoothScrollReveal animation="slide-up" distance={60}>
            <div className="text-center mb-20">
              <h2 className="text-5xl lg:text-7xl font-heading font-black text-neutral-text-primary mb-6 relative inline-block">
                Our Expertise
                {/* Hand-drawn underline */}
                <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 10C50 5 150 2 298 8" stroke="#373e98" strokeWidth="3" strokeLinecap="round" className="animate-draw-underline"/>
                </svg>
              </h2>
              <p className="text-xl text-neutral-text-secondary mt-8 max-w-2xl mx-auto">
                Crafting data solutions that don't just work—they transform
              </p>
            </div>
          </SmoothScrollReveal>

          {/* Scrapbook collage layout with rotated, overlapping cards */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              {/* Card 1 - Data Architecture - Large, top-left, slightly rotated */}
              <SmoothScrollReveal animation="slide-up" distance={80}>
                <div className="relative w-full transform md:-rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 hover:z-20 group md:-mt-8">
                <div className="relative" style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
                  borderRadius: '24px',
                  padding: '40px',
                }}>
                  {/* Washi tape effect */}
                  <div className="absolute -top-4 left-12 w-32 h-8 bg-primary/20 transform -rotate-2" style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 98% 100%, 2% 100%)',
                  }}></div>

                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-violet-500 to-purple-600 rounded-3xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-2xl">
                      <span className="text-5xl">🏗️</span>
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-violet-100 text-violet-700 text-xs font-bold rounded-full mb-3">FOUNDATION</span>
                      <h3 className="text-3xl font-heading font-black text-neutral-text-primary mb-2">
                        Data & Analytics Architecture
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg text-neutral-text-secondary leading-relaxed mb-6">
                    Build robust, scalable data pipelines that grow with your business. From concept to cloud, we architect systems that turn data chaos into strategic advantage.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-violet-50 text-violet-600 rounded-lg text-sm font-medium">Data Modeling</span>
                    <span className="px-3 py-1 bg-violet-50 text-violet-600 rounded-lg text-sm font-medium">Pipeline Design</span>
                    <span className="px-3 py-1 bg-violet-50 text-violet-600 rounded-lg text-sm font-medium">Cloud Migration</span>
                  </div>

                  {/* Decorative sticker element */}
                  <div className="absolute bottom-6 right-6 w-16 h-16 bg-yellow-200 rounded-full flex items-center justify-center transform rotate-12 shadow-lg border-4 border-yellow-300">
                    <span className="text-2xl">⭐</span>
                  </div>
                </div>
              </div>
              </SmoothScrollReveal>

              {/* Card 2 - Unified Platform - Medium, top-right, rotated opposite */}
              <SmoothScrollReveal animation="slide-up" distance={80}>
                <div className="relative w-full transform md:rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-500 hover:z-20 group md:mt-12">
                <div className="relative" style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
                  borderRadius: '24px',
                  padding: '32px',
                }}>
                  <div className="absolute -top-3 right-20 w-28 h-8 bg-cyan-500/20 transform rotate-3"></div>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 shadow-xl">
                      <span className="text-4xl">🔄</span>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-full mb-2">TRANSFORM</span>
                      <h3 className="text-2xl font-heading font-black text-neutral-text-primary">
                        Unified Data Platform
                      </h3>
                    </div>
                  </div>

                  <p className="text-base text-neutral-text-secondary leading-relaxed">
                    Break down silos with ETL/ELT solutions that bring all your data together. Real-time or batch, structured or unstructured—we make it work seamlessly.
                  </p>
                </div>
              </div>
              </SmoothScrollReveal>

              {/* Card 3 - Data Processing - Small card, middle-left */}
              <SmoothScrollReveal animation="slide-up" distance={80}>
                <div className="relative w-full transform md:-rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-500 hover:z-20 group md:-mt-4">
                <div className="relative" style={{
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                  borderRadius: '20px',
                  padding: '28px',
                }}>
                  <div className="flex gap-4 items-start">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 transition-all duration-500 shadow-lg flex-shrink-0">
                      <span className="text-3xl">⚡</span>
                    </div>
                    <div>
                      <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 text-xs font-bold rounded-full mb-2">SPEED</span>
                      <h3 className="text-xl font-heading font-black text-neutral-text-primary mb-2">
                        Unified Data Processing
                      </h3>
                      <p className="text-sm text-neutral-text-secondary">
                        Lightning-fast data processing that scales effortlessly with your needs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              </SmoothScrollReveal>

              {/* Card 4 - Security - Large feature card, middle-center */}
              <SmoothScrollReveal animation="slide-up" distance={80}>
                <div className="relative w-full transform md:rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 hover:z-20 group md:mt-8">
                <div className="relative" style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,240,255,0.9) 100%)',
                  backdropFilter: 'blur(15px)',
                  boxShadow: '0 25px 70px rgba(0,0,0,0.2), 0 0 0 1px rgba(0,0,0,0.05)',
                  borderRadius: '28px',
                  padding: '40px',
                  border: '3px solid rgba(55, 62, 152, 0.1)',
                }}>
                  {/* Corner fold effect */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-primary/10 transform origin-top-right" style={{
                    clipPath: 'polygon(100% 0, 100% 100%, 0 0)',
                  }}></div>

                  <div className="flex items-start gap-6 mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-rose-500 to-pink-600 rounded-3xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-700 shadow-2xl relative">
                      <span className="text-5xl">🔒</span>
                      <div className="absolute inset-0 rounded-3xl border-4 border-white/30 animate-ping-slow"></div>
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-rose-100 text-rose-700 text-xs font-bold rounded-full mb-3">CRITICAL</span>
                      <h3 className="text-3xl font-heading font-black text-neutral-text-primary mb-2">
                        Platform Governance & Security
                      </h3>
                    </div>
                  </div>

                  <p className="text-lg text-neutral-text-secondary leading-relaxed mb-6">
                    Enterprise-grade security and compliance that protects your data at every layer. From encryption to access control, we've got you covered.
                  </p>

                  <div className="flex gap-3">
                    <span className="px-4 py-2 bg-rose-50 text-rose-600 rounded-xl text-sm font-semibold shadow-sm">GDPR Ready</span>
                    <span className="px-4 py-2 bg-rose-50 text-rose-600 rounded-xl text-sm font-semibold shadow-sm">SOC 2</span>
                    <span className="px-4 py-2 bg-rose-50 text-rose-600 rounded-xl text-sm font-semibold shadow-sm">ISO 27001</span>
                  </div>
                </div>
              </div>
              </SmoothScrollReveal>

              {/* Card 5 - Data Quality - Medium, bottom-left */}
              <SmoothScrollReveal animation="slide-up" distance={80}>
                <div className="relative w-full transform md:-rotate-2 hover:rotate-0 hover:scale-105 transition-all duration-500 hover:z-20 group md:-mt-12">
                <div className="relative" style={{
                  background: 'rgba(255, 255, 255, 0.75)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                  borderRadius: '24px',
                  padding: '32px',
                }}>
                  <div className="absolute -top-3 left-16 w-24 h-8 bg-amber-300/30 transform -rotate-6"></div>

                  <div className="flex items-start gap-5">
                    <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl flex items-center justify-center transform group-hover:rotate-12 transition-all duration-500 shadow-xl flex-shrink-0">
                      <span className="text-4xl">✅</span>
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full mb-3">PRECISION</span>
                      <h3 className="text-2xl font-heading font-black text-neutral-text-primary mb-3">
                        Data Quality Management
                      </h3>
                      <p className="text-base text-neutral-text-secondary leading-relaxed">
                        Clean, validated, enriched data you can trust. Our quality frameworks ensure every decision is backed by accurate information.
                      </p>
                    </div>
                  </div>

                  {/* Decorative doodle */}
                  <svg className="absolute bottom-4 right-4 w-12 h-12 text-amber-300 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
                  </svg>
                </div>
              </div>
              </SmoothScrollReveal>

              {/* Card 6 - BI & Visualization - Bottom-right, dynamic card */}
              <SmoothScrollReveal animation="slide-up" distance={80}>
                <div className="relative w-full transform md:rotate-1 hover:rotate-0 hover:scale-105 transition-all duration-500 hover:z-20 group md:-mt-8">
                <div className="relative" style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(250,250,255,0.85) 100%)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.18)',
                  borderRadius: '24px',
                  padding: '36px',
                }}>
                  <div className="flex items-start gap-5 mb-4">
                    <div className="w-22 h-22 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-3xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-2xl flex-shrink-0">
                      <span className="text-5xl">📊</span>
                    </div>
                    <div className="flex-1">
                      <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-bold rounded-full mb-3">INSIGHTS</span>
                      <h3 className="text-3xl font-heading font-black text-neutral-text-primary mb-3">
                        BI & Visualization
                      </h3>
                    </div>
                  </div>

                  <p className="text-base text-neutral-text-secondary leading-relaxed mb-4">
                    Transform data into stunning visual stories. Interactive dashboards that make complex data instantly understandable and actionable.
                  </p>

                  {/* Fake mini chart visualization */}
                  <div className="flex gap-2 items-end h-16 mt-6">
                    <div className="flex-1 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t h-12 animate-pulse-slow"></div>
                    <div className="flex-1 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t h-16"></div>
                    <div className="flex-1 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t h-10 animate-pulse-slower"></div>
                    <div className="flex-1 bg-gradient-to-t from-purple-500 to-purple-300 rounded-t h-14"></div>
                    <div className="flex-1 bg-gradient-to-t from-indigo-500 to-indigo-300 rounded-t h-8 animate-pulse-slow"></div>
                  </div>
                </div>
              </div>
              </SmoothScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <SmoothScrollReveal animation="slide-up" distance={80}>
        <section id="contact" className="py-24 bg-primary relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-h2 font-heading font-bold text-white mb-6">
                Ready to Transform Your Data Infrastructure?
              </h2>
              <p className="text-body-lg text-white/90 mb-8">
                Let's discuss how our data engineering expertise can help you build robust, scalable data pipelines and unlock the full potential of your data.
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

        /* New advanced animations for 2025 design */
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 6s ease-in-out infinite;
        }

        @keyframes pulse-slow {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.5;
          }
        }

        @keyframes pulse-slower {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.6;
          }
        }

        .animate-flow-right {
          animation: flow-right 2s ease-in-out infinite;
        }

        @keyframes flow-right {
          0% {
            transform: translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(12px);
            opacity: 0;
          }
        }

        /* Floating particles */
        @keyframes floatParticle {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.2;
          }
          25% {
            opacity: 0.6;
          }
          50% {
            transform: translateY(-80px) translateX(40px) scale(1.5);
            opacity: 0.4;
          }
          75% {
            opacity: 0.8;
          }
        }

        .animate-float-slow {
          animation: float-slow 8s ease-in-out infinite;
        }

        .animate-float-slower {
          animation: float-slower 12s ease-in-out infinite;
        }

        @keyframes float-slow {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }

        @keyframes float-slower {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-30px) translateX(-15px);
          }
        }

        /* SVG line drawing animation */
        .animate-draw-line {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: draw-line 3s ease-in-out forwards;
        }

        @keyframes draw-line {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Hand-drawn underline */
        .animate-draw-underline {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: draw-underline 1.5s ease-out forwards;
          animation-delay: 0.5s;
        }

        @keyframes draw-underline {
          to {
            stroke-dashoffset: 0;
          }
        }

        /* Particle flow animation */
        .animate-particle-flow {
          animation: particle-flow 2s ease-in-out infinite;
        }

        @keyframes particle-flow {
          0% {
            transform: translate(0, 0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translate(50px, -50px);
            opacity: 0;
          }
        }

        /* Pinging ring effect */
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes ping-slow {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        /* Glassmorphism helper */
        .glassmorphism {
          position: relative;
        }

        .glassmorphism::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(145deg, rgba(255,255,255,0.3), rgba(255,255,255,0.05));
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        /* Parallax layers */
        .parallax-layer-1 {
          transform: translateZ(-100px) scale(1.5);
        }

        .parallax-layer-2 {
          transform: translateZ(-50px) scale(1.25);
        }

        .parallax-layer-3 {
          transform: translateZ(0);
        }

        /* Transform GPU acceleration */
        .transform-gpu {
          transform: translate3d(0, 0, 0);
          will-change: transform;
        }

        /* Smooth hover transitions */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </div>
  );
}
