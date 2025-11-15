import { GlobalNav, SmoothScrollReveal, Footer } from '../components';
import blogImage6 from '../assets/blog-page/blog-6.jpg';

export function AgniciocubewiseWebinar() {
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
                  April 3, 2020
                </span>
              </div>
            </SmoothScrollReveal>

            {/* Title */}
            <SmoothScrollReveal animation="fade">
              <h1 className="text-h1 font-heading font-bold text-neutral-text-primary mb-8">
                Upcoming Webinar: Agnicio and Cubewise
              </h1>
            </SmoothScrollReveal>

            {/* Featured Image */}
            <SmoothScrollReveal animation="fade">
              <div className="relative rounded-2xl overflow-hidden mb-12">
                <img
                  src={blogImage6}
                  alt="Agnicio and Cubewise webinar"
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
                  When an uncertain reality seems to make planning pointless, what is the role of demand sensing and how can you keep up meaningful planning exercises?
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  In our upcoming webinar, we'll interview our guest speaker on how a large retailer had to quickly adapt their plans. How to deal with a sudden shock and re-shift resources, stock, and people? Find out how they dealt with a world turned upside down.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  Do all plans go overboard, or is it essential to be able to turn the plans around quickly. And what should be the basis for the new plans if the foundations have been pulled from underneath you?
                </p>
              </SmoothScrollReveal>

              {/* Webinar Details */}
              <SmoothScrollReveal animation="fade">
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-12">
                  <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-6">
                    Webinar Details
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <span className="font-semibold text-neutral-text-primary min-w-[120px]">Date:</span>
                      <span className="text-neutral-text-secondary">Thursday, April 16, 2020</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="font-semibold text-neutral-text-primary min-w-[120px]">Time:</span>
                      <span className="text-neutral-text-secondary">2 pm CEST</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="font-semibold text-neutral-text-primary min-w-[120px]">Duration:</span>
                      <span className="text-neutral-text-secondary">About 90 minutes</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="font-semibold text-neutral-text-primary min-w-[120px]">Partners:</span>
                      <span className="text-neutral-text-secondary">Agnicio & Cubewise</span>
                    </div>
                  </div>
                </div>
              </SmoothScrollReveal>


              {/* Hashtags */}
              <SmoothScrollReveal animation="fade">
                <div className="flex flex-wrap gap-3 mb-12">
                  <span className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary text-body-sm font-semibold rounded-full">
                    #datastrategy
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary text-body-sm font-semibold rounded-full">
                    #dataanalytics
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary text-body-sm font-semibold rounded-full">
                    #forecasting
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 bg-primary/10 text-primary text-body-sm font-semibold rounded-full">
                    #planinganalytics
                  </span>
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

      <Footer />
    </div>
  );
}