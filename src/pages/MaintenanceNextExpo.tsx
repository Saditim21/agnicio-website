import { GlobalNav, SmoothScrollReveal, Footer } from '../components';
import blogImage1 from '../assets/home-page/blog-image-1.png';

export function MaintenanceNextExpo() {
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
                  March 31, 2025
                </span>
              </div>
            </SmoothScrollReveal>

            {/* Title */}
            <SmoothScrollReveal animation="fade">
              <h1 className="text-h1 font-heading font-bold text-neutral-text-primary mb-8">
                Agnicio at Maintenance NEXT expo
              </h1>
            </SmoothScrollReveal>

            {/* Featured Image */}
            <SmoothScrollReveal animation="fade">
              <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
                <img
                  src={blogImage1}
                  alt="Maintenance NEXT Expo"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
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
                  We're excited to announce that Agnicio will be exhibiting at the Maintenance NEXT Expo from April 8th to 10th!
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  Mark your calendars and join us at <strong className="text-neutral-text-primary">stand no 4.103</strong> to discover our latest innovations and solutions designed to optimize your maintenance processes.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-6 mt-12">
                  What to expect at our booth:
                </h2>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <div className="space-y-6 mb-12">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h3 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-2">Product Showcases:</h3>
                      <p className="text-body font-body text-neutral-text-secondary leading-relaxed">
                        Come see our amazing AI driven "Sense-Solve-Plan" platform.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h3 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-2">Expert Consultations:</h3>
                      <p className="text-body font-body text-neutral-text-secondary leading-relaxed">
                        Our team of experienced professionals are excited to discuss your specific maintenance challenges and provide tailored solutions.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h3 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-2">Networking Opportunities:</h3>
                      <p className="text-body font-body text-neutral-text-secondary leading-relaxed">
                        Connect with industry peers and learn about the latest trends in maintenance and asset management.
                      </p>
                    </div>
                  </div>
                </div>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-6 mt-12">
                  Why visit Agnicio at Maintenance NEXT?
                </h2>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  At Agnicio, we understand the critical role maintenance plays in ensuring operational efficiency and maximizing asset lifespan. We are committed to providing innovative solutions that help businesses:
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  <div className="flex items-center gap-3 p-4 bg-neutral-surface rounded-lg border border-neutral-border">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-body font-body text-neutral-text-secondary">Reduce downtime and maintenance costs</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-neutral-surface rounded-lg border border-neutral-border">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-body font-body text-neutral-text-secondary">Improve asset reliability and performance</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-neutral-surface rounded-lg border border-neutral-border">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-body font-body text-neutral-text-secondary">Enhance safety and compliance</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-neutral-surface rounded-lg border border-neutral-border">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-body font-body text-neutral-text-secondary">Optimize maintenance planning and scheduling</span>
                  </div>
                </div>
              </SmoothScrollReveal>

              {/* Event Details Box */}
              <SmoothScrollReveal animation="fade">
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-12">
                  <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-6">
                    Event Details:
                  </h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-neutral-text-primary min-w-[100px]">Event:</span>
                      <span className="text-neutral-text-secondary">Maintenance NEXT Expo</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-neutral-text-primary min-w-[100px]">Dates:</span>
                      <span className="text-neutral-text-secondary">April 8th - 10th</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-semibold text-neutral-text-primary min-w-[100px]">Booth Number:</span>
                      <span className="text-primary font-semibold">4.103</span>
                    </div>
                  </div>
                </div>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  We look forward to meeting you at Maintenance NEXT and discussing how our solutions can help you achieve your maintenance goals.
                </p>
              </SmoothScrollReveal>

              {/* CTA Section */}
              <SmoothScrollReveal animation="fade">
                <div className="bg-gradient-to-r from-primary/10 to-primary-hover/10 border border-primary/30 rounded-2xl p-8 text-center mb-12">
                  <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-4">
                    Don't miss the chance to win a free AI readiness assessment!
                  </h3>
                  <p className="text-body font-body text-neutral-text-secondary mb-6">
                    Fill out the form and enter our exclusive giveaway
                  </p>
                  <a
                    href="https://forms.office.com/pages/responsepage.aspx?id=-OZowxB6g0Oq_MHmFkqyVsLHtNLfwJpClEkulf1YF6lURTdHSTlKTVVGTkxCREpLNERQMzQ4Q0ROSi4u&route=shorturl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-body font-semibold rounded-lg hover:bg-primary-hover transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Enter Giveaway
                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-4">
                  Visit our website at <a href="https://agnicio.com" className="text-primary hover:text-primary-hover font-semibold transition-colors">agnicio.com</a> for more information about our products and services.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-h5 font-heading font-semibold text-primary text-center mt-8">
                  See you at the expo!
                </p>
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

      <Footer />
    </div>
  );
}