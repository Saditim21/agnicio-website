import {
  GlobalNav,
  VideoHero,
  ParallaxDivider,
  Statistics,
  Metrics,
  SmoothScrollReveal,
  SmoothStaggeredGrid,
} from '../components';

// Industry Images
import assetMaintenanceImg from '../assets/home-page/asset-maintenance.png';
import retailImg from '../assets/home-page/retail.png';
import energyPowerImg from '../assets/home-page/energy-power.jpg';
import logisticsImg from '../assets/home-page/logistics.jpg';
import supplyChainImg from '../assets/home-page/supply-chain.jpg';
import aboutUsImg from '../assets/home-page/about-us.jpeg';
import blogImage1 from '../assets/home-page/blog-image-1.png';
import blogImage2 from '../assets/home-page/blog-image-2.jpg';
import blogImage3 from '../assets/home-page/blog-image-3.jpg';

export function Home() {
  return (
    <div className="min-h-screen bg-neutral-background">

      {/* Global Navigation */}
      <GlobalNav />

      {/* Video Hero Section */}
      <section id="hero">
        <VideoHero
          headline="We help companies to drive sustainable growth and achieve operational excellence"
          subheadline="We ensure your business is at the forefront of AI innovation and implementation"
          ctaText="Reach out to our experts"
          ctaHref="#contact"
          secondaryCtaText="Learn More"
          secondaryCtaHref="#services"
        />
      </section>

      {/* Statistics Section - "Did you know" */}
      <section id="content">
        <Statistics />
      </section>

      {/* Parallax Divider */}
      <ParallaxDivider
        speed={0.8}
        height="250px"
        pattern="gradient"
      />

      {/* What We Do - Services Section */}
      <section id="services" className="py-24 bg-neutral-surface relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <SmoothScrollReveal animation="slide-up">
              <p className="text-body-lg font-body text-primary font-semibold mb-4 uppercase tracking-wide">
                What We Do
              </p>
            </SmoothScrollReveal>
            <SmoothScrollReveal animation="fade">
              <h2 className="text-h2 font-heading font-bold text-neutral-text-primary mb-6">
                We breathe data and AI: From strategy to actionable insights
              </h2>
            </SmoothScrollReveal>
            <SmoothScrollReveal animation="fade">
              <p className="text-body-lg font-body text-neutral-text-secondary max-w-3xl mx-auto">
                Data Analytics with Impact and Value
              </p>
            </SmoothScrollReveal>
          </div>

          {/* Services Grid */}
          <SmoothStaggeredGrid
            staggerDelay={0.08}
            animation="zoom"
            distance={30}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto"
          >
            {/* AI Service */}
            <div className="group bg-neutral-background rounded-xl p-8 border-2 border-neutral-border hover:border-primary transition-all duration-250 shadow-sm hover:shadow-xl hover:-translate-y-2 flex flex-col h-full">
              <div className="text-5xl mb-4">🤖</div>
              <h3 className="text-h4 font-heading font-semibold text-neutral-text-primary mb-4">
                AI
              </h3>
              <p className="text-body font-body text-neutral-text-secondary mb-6 flex-grow">
                Harness the power of artificial intelligence to transform your operations and drive innovation.
              </p>
              <a
                href="/services/ai"
                className="inline-flex items-center gap-2 text-primary font-body font-medium hover:text-primary-hover transition-colors duration-200 mt-auto"
              >
                Learn More
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Data Strategy Service */}
            <div className="group bg-neutral-background rounded-xl p-8 border-2 border-neutral-border hover:border-primary transition-all duration-250 shadow-sm hover:shadow-xl hover:-translate-y-2 flex flex-col h-full">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-h4 font-heading font-semibold text-neutral-text-primary mb-4">
                Data Strategy
              </h3>
              <p className="text-body font-body text-neutral-text-secondary mb-6 flex-grow">
                Develop a comprehensive data strategy that aligns with your business goals and drives growth.
              </p>
              <a
                href="/services/data-strategy"
                className="inline-flex items-center gap-2 text-primary font-body font-medium hover:text-primary-hover transition-colors duration-200 mt-auto"
              >
                Learn More
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Data Engineering Service */}
            <div className="group bg-neutral-background rounded-xl p-8 border-2 border-neutral-border hover:border-primary transition-all duration-250 shadow-sm hover:shadow-xl hover:-translate-y-2 flex flex-col h-full">
              <div className="text-5xl mb-4">⚙️</div>
              <h3 className="text-h4 font-heading font-semibold text-neutral-text-primary mb-4">
                Data Engineering
              </h3>
              <p className="text-body font-body text-neutral-text-secondary mb-6 flex-grow">
                Build robust data pipelines and infrastructure that scale with your business needs.
              </p>
              <a
                href="/services/data-engineering"
                className="inline-flex items-center gap-2 text-primary font-body font-medium hover:text-primary-hover transition-colors duration-200 mt-auto"
              >
                Learn More
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Azure CC Service */}
            <div className="group bg-neutral-background rounded-xl p-8 border-2 border-neutral-border hover:border-primary transition-all duration-250 shadow-sm hover:shadow-xl hover:-translate-y-2 flex flex-col h-full">
              <div className="text-5xl mb-4">☁️</div>
              <h3 className="text-h4 font-heading font-semibold text-neutral-text-primary mb-4">
                Azure Competence Centre
              </h3>
              <p className="text-body font-body text-neutral-text-secondary mb-6 flex-grow">
                Leverage Microsoft Azure's full potential with our expert guidance and implementation support.
              </p>
              <a
                href="/services/azure-cc"
                className="inline-flex items-center gap-2 text-primary font-body font-medium hover:text-primary-hover transition-colors duration-200 mt-auto"
              >
                Learn More
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </SmoothStaggeredGrid>
        </div>
      </section>

      {/* Parallax Divider */}
      <ParallaxDivider
        speed={0.8}
        height="250px"
        pattern="dots"
      />

      {/* Products/Industries Section */}
      <section id="products" className="py-24 bg-neutral-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <SmoothScrollReveal animation="zoom">
              <h2 className="text-h2 font-heading font-bold text-neutral-text-primary mb-4">
                Industry Solutions
              </h2>
            </SmoothScrollReveal>
            <SmoothScrollReveal animation="fade">
              <p className="text-body-lg font-body text-neutral-text-secondary max-w-3xl mx-auto">
                Tailored solutions for your industry's unique challenges
              </p>
            </SmoothScrollReveal>
          </div>

          <div className="max-w-7xl mx-auto space-y-12">
            {/* Asset Maintenance */}
            <SmoothScrollReveal animation="slide-right" distance={80}>
            <div className="group bg-neutral-surface rounded-xl p-8 border-2 border-neutral-border hover:border-primary border-glow transition-all duration-250 shadow-sm hover:shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-5xl mb-4 float-animate">🔧</div>
                  <h3 className="text-h3 font-heading font-semibold text-neutral-text-primary mb-4">
                    Asset Maintenance
                  </h3>
                  <p className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    The Maintenance industry faces unique challenges, from ensuring operational reliability and compliance to optimizing resource utilization, minimizing environmental impact and planning optimization. Our AI-powered solutions address these challenges head-on, delivering tangible results and driving sustainable practices.
                  </p>
                </div>
                <div className="h-64 rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-250">
                  <img src={assetMaintenanceImg} alt="Asset Maintenance" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
            </SmoothScrollReveal>

            {/* Retail */}
            <SmoothScrollReveal animation="slide-left" distance={80}>
            <div className="group bg-neutral-surface rounded-xl p-8 border-2 border-neutral-border hover:border-primary transition-all duration-250 shadow-sm hover:shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 h-64 rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-250">
                  <img src={retailImg} alt="Retail Solutions" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="text-5xl mb-4 float-animate">🛒</div>
                  <h3 className="text-h3 font-heading font-semibold text-neutral-text-primary mb-4">
                    Retail
                  </h3>
                  <p className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    Start making informed decisions to gain a competitive edge in retail. We help you understand your customers by turning data into actionable insights. Get behind the steering wheel via our demand sensing algorithms to grow your market share.
                  </p>
                </div>
              </div>
            </div>
            </SmoothScrollReveal>

            {/* Energy & Power */}
            <SmoothScrollReveal animation="slide-right" distance={80}>
            <div className="group bg-neutral-surface rounded-xl p-8 border-2 border-neutral-border hover:border-primary transition-all duration-250 shadow-sm hover:shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-5xl mb-4 float-animate">⚡</div>
                  <h3 className="text-h3 font-heading font-semibold text-neutral-text-primary mb-4">
                    Energy & Power
                  </h3>
                  <p className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    Navigate the complexities of the energy landscape with confidence as we empower your organization to balance supply & demand, enhance operational efficiency, and make data-driven decisions fostering sustainability and profitability in a dynamically evolving industry.
                  </p>
                </div>
                <div className="h-64 rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-250">
                  <img src={energyPowerImg} alt="Energy & Power Solutions" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
            </SmoothScrollReveal>

            {/* Logistics */}
            <SmoothScrollReveal animation="slide-left" distance={80}>
            <div className="group bg-neutral-surface rounded-xl p-8 border-2 border-neutral-border hover:border-primary border-glow transition-all duration-250 shadow-sm hover:shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="order-2 lg:order-1 h-64 rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-250">
                  <img src={logisticsImg} alt="Logistics Solutions" className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="order-1 lg:order-2">
                  <div className="text-5xl mb-4 float-animate">🚚</div>
                  <h3 className="text-h3 font-heading font-semibold text-neutral-text-primary mb-4">
                    Logistics
                  </h3>
                  <p className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    Experience a new era in transport and logistics efficiency with our AI solutions that empower your organisation to optimize your network, elevate fleet management practices, and make strategic decisions rooted in data, thus enhancing overall performance and customer satisfaction.
                  </p>
                </div>
              </div>
            </div>
            </SmoothScrollReveal>

            {/* Supply Chain */}
            <SmoothScrollReveal animation="slide-right" distance={80}>
            <div className="group bg-neutral-surface rounded-xl p-8 border-2 border-neutral-border hover:border-primary transition-all duration-250 shadow-sm hover:shadow-xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-5xl mb-4 float-animate">📦</div>
                  <h3 className="text-h3 font-heading font-semibold text-neutral-text-primary mb-4">
                    Supply Chain
                  </h3>
                  <p className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    Unlock the full potential of your supply chain with our solutions that enable you to optimize your inventory management, augment operational transparency, and make good data-driven decisions, streamlining processes and maximizing efficiency.
                  </p>
                </div>
                <div className="h-64 rounded-lg overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-250">
                  <img src={supplyChainImg} alt="Supply Chain Solutions" className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
            </div>
            </SmoothScrollReveal>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <Metrics />

      {/* About Section */}
      <section id="about" className="py-24 bg-primary-lightest">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <SmoothScrollReveal animation="slide-up">
                <h2 className="text-h2 font-heading font-bold text-neutral-text-primary mb-6">
                  About Us
                </h2>
              </SmoothScrollReveal>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch mb-16">
              <SmoothScrollReveal animation="slide-right" distance={60}>
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={aboutUsImg}
                    alt="Agnicio Team"
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="slide-left" distance={60}>
                <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed mb-6">
                  Agnicio is a data analytics and strategy company founded in 2018. More than 2000 years after Aristoteles, Agnicio will help you gain new insights and – as a result – sparkle your company to make that decisive turn.
                </p>
                <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed mb-8">
                  As your partner, Agnicio will help shape you, will guide you through the development and implementation phase of your data analytics journey.
                </p>
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-body font-semibold text-body-lg rounded-lg shadow-md hover:shadow-xl hover:bg-primary-hover transition-all duration-250 ease-in-out transform hover:scale-105"
                >
                  Learn more about us
                  <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              </SmoothScrollReveal>
            </div>

            {/* CEO Quote */}
            <SmoothScrollReveal animation="blur">
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg border-l-4 border-primary">
              <p className="text-body-lg md:text-h5 font-body text-neutral-text-primary italic leading-relaxed mb-6">
                "For over two decades I have been helping international brands to drive growth, achieve competitive agility and operational excellence through data driven strategy and solutions."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-primary-lightest flex items-center justify-center">
                  <span className="text-h4 font-heading font-bold text-primary">HE</span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-neutral-text-primary">Hicham El Arfaoui</p>
                  <p className="text-body-sm font-body text-neutral-text-secondary">CEO, Agnicio B.V.</p>
                </div>
              </div>
            </div>
            </SmoothScrollReveal>

            {/* CEO Video */}
            <SmoothScrollReveal animation="slide-up" distance={60}>
              <div className="mt-12">
                <div className="relative rounded-xl overflow-hidden shadow-2xl bg-neutral-surface">
                  {/* Video container with 16:9 aspect ratio */}
                  <div className="relative" style={{ paddingBottom: '56.25%' }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/yJjp6QaG5lo"
                      title="CEO Message - Hicham El Arfaoui"
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
    </div>
  );
}
