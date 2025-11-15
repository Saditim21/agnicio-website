import { GlobalNav, SmoothScrollReveal, Footer } from '../components';
import blogImage4 from '../assets/blog-page/blog-4.png';

export function AgnicioEnvisionEvent() {
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
                  July 4, 2019
                </span>
              </div>
            </SmoothScrollReveal>

            {/* Title */}
            <SmoothScrollReveal animation="fade">
              <h1 className="text-h1 font-heading font-bold text-neutral-text-primary mb-8">
                Upcoming Data Analytics and Strategy Event
              </h1>
            </SmoothScrollReveal>

            {/* Featured Image */}
            <SmoothScrollReveal animation="fade">
              <div className="relative rounded-2xl overflow-hidden mb-12">
                <img
                  src={blogImage4}
                  alt="Agnicio Envision Event"
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
                  Agnicio will be organizing a Data Strategy and Analytics event on the 24th of September 2019 at its headquarters in Utrecht. During this event, you can expect 70 business decision-makers including 3 use cases.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  Some important topics that will be covered during this event include:
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <div className="space-y-6 mb-12">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h3 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-2">Demand signal analytics and Data-driven planning</h3>
                      <p className="text-body font-body text-neutral-text-secondary leading-relaxed">
                        Learn how to capture demand signals and leverage data-driven insights for strategic planning and forecasting.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full mt-3"></div>
                    <div>
                      <h3 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-2">Enterprise bots</h3>
                      <p className="text-body font-body text-neutral-text-secondary leading-relaxed">
                        Explore the latest developments in enterprise automation and how intelligent bots can transform business operations.
                      </p>
                    </div>
                  </div>
                </div>
              </SmoothScrollReveal>

              {/* Event Details Box */}
              <SmoothScrollReveal animation="fade">
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-12">
                  <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-6">
                    Event Details:
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="font-semibold text-neutral-text-primary min-w-[120px]">Date:</span>
                      <span className="text-neutral-text-secondary">September 24, 2019</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="font-semibold text-neutral-text-primary min-w-[120px]">Time:</span>
                      <span className="text-neutral-text-secondary">2:00 PM - 6:00 PM</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="font-semibold text-neutral-text-primary min-w-[120px]">Location:</span>
                      <span className="text-neutral-text-secondary">Agnicio Headquarters, Utrecht</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="font-semibold text-neutral-text-primary min-w-[120px]">Attendees:</span>
                      <span className="text-neutral-text-secondary">70 business decision-makers</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="font-semibold text-neutral-text-primary min-w-[120px]">Use Cases:</span>
                      <span className="text-neutral-text-secondary">3 featured case studies</span>
                    </div>
                  </div>
                </div>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  The event begins at 2 pm and ends at 6 pm. For more information on this event, please contact Agnicio.
                </p>
              </SmoothScrollReveal>

              {/* CTA Section */}
              <SmoothScrollReveal animation="fade">
                <div className="bg-gradient-to-r from-primary/10 to-primary-hover/10 border border-primary/30 rounded-2xl p-8 text-center mb-12">
                  <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-4">
                    Interested in Attending?
                  </h3>
                  <p className="text-body font-body text-neutral-text-secondary mb-6">
                    Join us for an insightful event covering the latest in data analytics and strategy
                  </p>
                  <a
                    href="mailto:info@agnicio.com"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-body font-semibold rounded-lg hover:bg-primary-hover transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Contact Us for More Information
                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-4">
                  Visit our website at <a href="https://agnicio.com" className="text-primary hover:text-primary-hover font-semibold transition-colors">agnicio.com</a> for more information about our services and upcoming events.
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