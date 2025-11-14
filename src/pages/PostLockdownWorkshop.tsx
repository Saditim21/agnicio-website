import { GlobalNav, SmoothScrollReveal } from '../components';
import blogImage5 from '../assets/blog-page/blog-5.jpg';

export function PostLockdownWorkshop() {
  return (
    <div className="min-h-screen bg-neutral-background">
      <GlobalNav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-neutral-surface via-neutral-background to-neutral-surface relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-hover rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Category and Date */}
            <SmoothScrollReveal animation="fade">
              <div className="flex items-center gap-4 mb-6">
                <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-primary/10 text-primary text-body-sm font-bold rounded-full">
                  <span className="text-lg">🎯</span>
                  EVENTS
                </span>
                <span className="text-neutral-text-secondary font-body text-body">
                  July 1, 2020
                </span>
              </div>
            </SmoothScrollReveal>

            {/* Title */}
            <SmoothScrollReveal animation="fade">
              <h1 className="text-h1 font-heading font-bold text-neutral-text-primary mb-8">
                1st Agnicio post-lockdown workshop at customer location
              </h1>
            </SmoothScrollReveal>

            {/* Featured Image */}
            <SmoothScrollReveal animation="fade">
              <div className="relative rounded-2xl overflow-hidden mb-12">
                <img
                  src={blogImage5}
                  alt="Post-lockdown workshop at customer location"
                  className="w-full h-auto object-contain"
                />
              </div>
            </SmoothScrollReveal>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg prose-neutral max-w-none">
              <SmoothScrollReveal animation="fade">
                <p className="text-body-lg font-body text-neutral-text-secondary leading-relaxed mb-8">
                  As COVID-19 gets under control in the Netherlands, Europe and other parts of the world, businesses are slowly opening up again and working conditions are slowly getting back to normal.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  Today, Agnicio had it's 1st post-lockdown workshop at customer location.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-12">
                  For more information about what Agnicio offers, checkout some of our core products and services.
                </p>
              </SmoothScrollReveal>

              {/* Products and Services Links */}
              <SmoothScrollReveal animation="fade">
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-12">
                  <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-6">
                    Our Core Products & Services
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Products */}
                    <div>
                      <h4 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-4">Products</h4>
                      <div className="space-y-3">
                        <a href="/products/ai-maintenance" className="block p-4 bg-white rounded-lg border border-neutral-border hover:border-primary transition-colors duration-200">
                          <div className="text-body font-semibold text-neutral-text-primary mb-1">AI Driven Maintenance</div>
                          <div className="text-body-sm text-neutral-text-secondary">Predictive maintenance solutions powered by AI</div>
                        </a>
                        <a href="/products/demand-sensing" className="block p-4 bg-white rounded-lg border border-neutral-border hover:border-primary transition-colors duration-200">
                          <div className="text-body font-semibold text-neutral-text-primary mb-1">Demand Sensing</div>
                          <div className="text-body-sm text-neutral-text-secondary">Advanced demand forecasting and analytics</div>
                        </a>
                      </div>
                    </div>

                    {/* Services */}
                    <div>
                      <h4 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-4">Services</h4>
                      <div className="space-y-3">
                        <a href="/services/ai" className="block p-4 bg-white rounded-lg border border-neutral-border hover:border-primary transition-colors duration-200">
                          <div className="text-body font-semibold text-neutral-text-primary mb-1">AI</div>
                          <div className="text-body-sm text-neutral-text-secondary">Artificial intelligence consulting and implementation</div>
                        </a>
                        <a href="/services/data-strategy" className="block p-4 bg-white rounded-lg border border-neutral-border hover:border-primary transition-colors duration-200">
                          <div className="text-body font-semibold text-neutral-text-primary mb-1">Data Strategy</div>
                          <div className="text-body-sm text-neutral-text-secondary">Strategic data consulting and planning</div>
                        </a>
                        <a href="/services/data-engineering" className="block p-4 bg-white rounded-lg border border-neutral-border hover:border-primary transition-colors duration-200">
                          <div className="text-body font-semibold text-neutral-text-primary mb-1">Data Engineering</div>
                          <div className="text-body-sm text-neutral-text-secondary">Data pipeline and infrastructure solutions</div>
                        </a>
                        <a href="/services/azure-cc" className="block p-4 bg-white rounded-lg border border-neutral-border hover:border-primary transition-colors duration-200">
                          <div className="text-body font-semibold text-neutral-text-primary mb-1">Azure CC</div>
                          <div className="text-body-sm text-neutral-text-secondary">Azure cloud consulting and implementation</div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </SmoothScrollReveal>
            </article>

            {/* Back to Blog */}
            <SmoothScrollReveal animation="fade">
              <div className="mt-16 pt-8 border-t border-neutral-border">
                <a
                  href="/blog"
                  className="inline-flex items-center gap-2 text-primary font-body font-semibold hover:gap-3 transition-all duration-300"
                >
                  <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to Blog
                </a>
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