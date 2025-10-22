import { GlobalNav, SmoothScrollReveal, SmoothStaggeredGrid } from '../components';
import hichamImage from '../assets/about-us/hicham.jpg';
import derekImage from '../assets/about-us/derek.jpg';
import agnicioLogo from '../assets/about-us/agnicio-logo.webp';

export function AboutUs() {
  return (
    <div className="min-h-screen bg-neutral-background">
      <GlobalNav />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          controls
          autoPlay
          muted
          loop
        >
          <source src="/src/assets/about-us/about-us-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Optional overlay for better text readability if needed */}
        <div className="absolute inset-0 bg-black/20"></div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-neutral-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Welcome Section */}
            <SmoothScrollReveal animation="fade">
              <div className="mb-16">
                <div className="flex justify-center mb-12">
                  <img
                    src={agnicioLogo}
                    alt="Agnicio Logo"
                    className="h-16 w-auto"
                  />
                </div>
                
                <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed mb-8">
                  Welcome to Agnicio, where data analytics meets the power of insight and transformation.
                </p>
                
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  Inspired by Aristotle's "peripeteia," a pivotal moment of discovery in Greek theater, signifies a sudden shift in understanding that leads to profound change. Just like those changing twists in ancient plays, our AI solutions just reveal, innovate, and predict, delivering undeniable transformation for your business. We leverage AI, including generative AI, to unlock your data's full potential, going beyond basic analytics. By harnessing the predictive power of advanced data analytics, enhanced by machine learning and generative AI capabilities, Agnicio helps organizations uncover unique perspectives and generate novel data driven scenarios, to make informed decisions that propel them towards success.
                </p>
                
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  Backed by our founders' 20-25 years of consulting experience at prestigious companies, Agnicio was born from a clear vision: to provide strategic data and AI guidance that translates directly into tangible results. They recognized the need for a partner who could not only advise on data and AI strategies aligned with business roadmaps, but also "walk the talk" by implementing the solutions to bring that vision to life.
                </p>
                
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  Our team of skilled data analysts and experts is committed to guiding you through your data-driven journey. We deploy intelligent algorithms and automated data pipelines that combine cutting-edge technologies, advanced statistical models, and an in-depth understanding of your industry to extract meaningful patterns and trends from complex data sets.
                </p>
                
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
                  <p className="text-body-lg font-body text-neutral-text-secondary mb-6">
                    Ready to experience your "peripeteia" with data, and explore the possibilities of generative AI?
                  </p>
                  <a
                    href="mailto:info@agnicio.com"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-body font-semibold rounded-lg hover:bg-primary-hover transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Schedule a free data strategy consultation
                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </SmoothScrollReveal>

            {/* Leadership Team Section */}
            <SmoothScrollReveal animation="fade">
              <div className="mb-16">
                <h2 className="text-h2 font-heading font-bold text-neutral-text-primary mb-12 text-center">
                  Meet the Leadership Team
                </h2>
                
                <SmoothStaggeredGrid
                  staggerDelay={0.1}
                  animation="fade-up"
                  distance={30}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {/* Hicham El Arfaoui */}
                  <div className="bg-neutral-surface rounded-2xl p-8 border border-neutral-border hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary/20">
                      <img
                        src={hichamImage}
                        alt="Hicham El Arfaoui"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-2">
                      Hicham El Arfaoui
                    </h3>
                    <p className="text-body font-body text-primary font-semibold mb-4">
                      CEO & Founder
                    </p>
                    <p className="text-body font-body text-neutral-text-secondary leading-relaxed">
                      Hicham is deeply passionate about making companies (more) data driven and empowering their strategic objectives. He has consulted leading companies like Nike, J&J, and Chanel. He is an expert level consultant with +20 years of (international) experience in enterprise data analytics.
                    </p>
                  </div>

                  {/* Derek Zoutendijk */}
                  <div className="bg-neutral-surface rounded-2xl p-8 border border-neutral-border hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-xl text-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-6 border-4 border-primary/20">
                      <img
                        src={derekImage}
                        alt="Derek Zoutendijk"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-2">
                      Derek Zoutendijk
                    </h3>
                    <p className="text-body font-body text-primary font-semibold mb-4">
                      Chief data, product & customer
                    </p>
                    <p className="text-body font-body text-neutral-text-secondary leading-relaxed">
                      Derek is a Data expert who drives product innovation. He has consulted companies like Lidl, Jumbo, PostNL & ProRail around data & planning products. He is able to seamlessly combine product thinking, data and analytics to improve operational excellence
                    </p>
                  </div>
                </SmoothStaggeredGrid>
              </div>
            </SmoothScrollReveal>

            {/* Mission Statement */}
            <SmoothScrollReveal animation="fade">
              <div className="text-center mb-16">
                <div className="bg-gradient-to-r from-primary/10 to-primary-hover/10 border border-primary/30 rounded-2xl p-8">
                  <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-4">
                    Our Mission
                  </h2>
                  <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed">
                    We help companies to drive sustainable growth and achieve operational excellence through data analytics strategies & solutions
                  </p>
                </div>
              </div>
            </SmoothScrollReveal>

          </div>
        </div>
      </section>

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

            {/* Useful Links */}
            <div>
              <h4 className="text-h6 font-heading font-semibold mb-4">Useful links</h4>
              <ul className="space-y-2">
                <li><a href="/about" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">About Us</a></li>
                <li><a href="/contact" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">Contact Us</a></li>
              </ul>
            </div>

            {/* Products */}
            <div>
              <h4 className="text-h6 font-heading font-semibold mb-4">Products</h4>
              <ul className="space-y-2">
                <li><a href="/products/ai-maintenance" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">AI Driven Maintenance</a></li>
                <li><a href="/products/demand-sensing" className="text-body-sm text-neutral-background/70 hover:text-white transition-colors duration-200">Demand Sensing</a></li>
              </ul>
            </div>

            {/* Our Contacts */}
            <div>
              <h4 className="text-h6 font-heading font-semibold mb-4">Our contacts</h4>
              <ul className="space-y-2 text-body-sm text-neutral-background/70">
                <li className="flex items-start gap-2">
                  <span>☖</span>
                  <span>Millennium Tower, Weena, 3012 CN Rotterdam</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>✉</span>
                  <a href="mailto:info@agnicio.com" className="hover:text-white transition-colors duration-200">info@agnicio.com</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-neutral-background/20 pt-8 text-center">
            <p className="text-body-sm text-neutral-background/60">
              © Agnicio. All Rights Reserved 2024.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}