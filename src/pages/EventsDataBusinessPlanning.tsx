import { GlobalNav, SmoothScrollReveal } from '../components';
import blogImage3 from '../assets/home-page/blog-image-3.jpg';
import neuralProphetChart from '../assets/blog-page/events-1.png';

export function EventsDataBusinessPlanning() {
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
                  <span className="text-lg">📊</span>
                  AI BLOG
                </span>
                <span className="text-neutral-text-secondary font-body text-body">
                  November 12, 2021
                </span>
              </div>
            </SmoothScrollReveal>

            {/* Title */}
            <SmoothScrollReveal animation="fade">
              <h1 className="text-h1 font-heading font-bold text-neutral-text-primary mb-8">
                How to use events' data for effective business planning
              </h1>
            </SmoothScrollReveal>

            {/* Featured Image */}
            <SmoothScrollReveal animation="fade">
              <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
                <img
                  src={blogImage3}
                  alt="Business Planning Analytics"
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
                  Organizations of all sizes are involved in business planning. This includes setting ambitious targets on sales and other KPIs to drive growth and efficiencies. This post covers how using data on future events can help your businesses improve month-on-month planning accuracy through leveraging Demand Sensing Analytics & Machine Learning.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-6 mt-12">
                  Challenges with planning for Events
                </h2>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  The retail industry is a leading example of how events can impact sales and supply chain dynamics. For example, sporting goods companies need to plan their sales around World Cup and the Olympics. Such events have a drastic impact on customer behavior, and companies need to find a way to take this into account when taking supply chain decisions.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  The diversity of events is also large. There are numerous events both outside and inside the organization that affect your P&L:
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-neutral-surface rounded-lg border border-neutral-border">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-body font-body text-neutral-text-secondary">Promotional campaigns</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-neutral-surface rounded-lg border border-neutral-border">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-body font-body text-neutral-text-secondary">New product launches and releases</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-neutral-surface rounded-lg border border-neutral-border">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-body font-body text-neutral-text-secondary">Public events (e.g. Thanksgiving day)</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-neutral-surface rounded-lg border border-neutral-border">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-body font-body text-neutral-text-secondary">Price increases</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-neutral-surface rounded-lg border border-neutral-border">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-body font-body text-neutral-text-secondary">Discount periods</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-neutral-surface rounded-lg border border-neutral-border">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-body font-body text-neutral-text-secondary">Extreme events, such as Covid-19 outbreak</span>
                  </div>
                </div>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  The diversity of events creates challenges for the planners to come up with accurate financial forecasts that take events into account. It is difficult to estimate how much impact a certain event will on future sales. For that reason, automated systems leveraging Machine Learning emerge to help planners take the relevant events into account.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-12">
                  Specifically, 2 types of events are important to business planning:
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                    <h3 className="text-h5 font-heading font-bold text-neutral-text-primary mb-3">Regular events</h3>
                    <p className="text-body font-body text-neutral-text-secondary">
                      Events that have a moving date. These events include Chinese New Year, Black Friday, and Easter.
                    </p>
                  </div>
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                    <h3 className="text-h5 font-heading font-bold text-neutral-text-primary mb-3">Irregular events</h3>
                    <p className="text-body font-body text-neutral-text-secondary">
                      Such as discount campaigns, new product launches, or economic distortions.
                    </p>
                  </div>
                </div>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-12">
                  In both cases, having a system that is able to automatically take into account the relevant future events allows planners to increase the accuracy of the future sales targets.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-6 mt-12">
                  Machine learning approach
                </h2>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  Recently, Agnicio completed a project for a large retail client that involved identifying events' impact on sales planning. The goal was to find out how can we successfully leverage events data for our overall Demand Sensing solution.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  This exploration resulted in the development of a new "events driver" which became the latest addition to Agnicio's framework of demand sensing algorithms. In the remainder of the blog post, we cover how we approached this task.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  Our data science team followed a 3-step approach to improve the forecasting accuracy of our Demand Sensing Solution that can forecast sales 18-24 months ahead on the country, store location, product category, and product line levels.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <div className="bg-neutral-surface border border-neutral-border rounded-xl p-6 mb-8">
                  <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-4">Steps involved:</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-body-sm font-bold">1</div>
                      <span className="text-body font-body text-neutral-text-secondary">Identifying relevant events via business workshops</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-body-sm font-bold">2</div>
                      <span className="text-body font-body text-neutral-text-secondary">Estimating event windows on daily sales data</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-body-sm font-bold">3</div>
                      <span className="text-body font-body text-neutral-text-secondary">Testing optimal event combinations in our Demand Sensing solution</span>
                    </div>
                  </div>
                </div>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-6 mt-10">
                  Step 1. Business Workshops
                </h3>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  The first step was to come up with a list of public and company-specific events that could be relevant to the organization. We overlayed event dates with daily sales data to match against the observed peaks or drops in sales.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  This allowed us to have a conversation with the business planners and identify which of the fluctuations in sales are due to the events. The key metric we optimized for is the percentage of the peaks/drops in sales that we can match to our events list on a given year. The outcome of the workshop was a list of events per country that can be leveraged by the data science models.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-6 mt-10">
                  Step 2. Choosing event windows
                </h3>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  The next step after that was to identify for how long a certain event has an impact on sales. When doing monthly planning, it is not enough to say that an event happens on a certain month. If customers start shopping 3 weeks before a giveaway campaign that falls on March 1st, should the sales be allocated to March or April? In that case, using event weights allowed us to split the event impact between multiple months around the event.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  To find the event windows we used a Neural Prophet model released in 2020 by the Facebook research team. While we do overall planning on a monthly level, daily data allows us to see on a day-by-day basis when a certain event starts and stops having an impact on sales.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  Here is a simple example from Facebook how Super Bowl has a stronger effect on the day before compared to the day after the event:
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <div className="my-8">
                  <img
                    src={neuralProphetChart}
                    alt="Neural Prophet chart showing Super Bowl event impact on sales before and after the event"
                    className="w-full max-w-4xl mx-auto rounded-lg border border-neutral-border shadow-lg"
                  />
                  <p className="text-center text-body-sm text-neutral-text-tertiary mt-2 italic">
                    Impact of an event on sales before and after the Super Bowl. Source: <a href="http://neuralprophet.com/model/events/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover transition-colors">http://neuralprophet.com/model/events/</a>
                  </p>
                </div>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  With this approach, it becomes clear when an event impact starts and ends.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-6 mt-10">
                  Step 3. Testing month-on-month accuracy
                </h3>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  To arrive at the final result we integrated events in the Agnicio Demand Sensing framework. Then we used multiple event combinations to test accuracy at different forecast periods up to 18 months forward.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <div className="bg-gradient-to-r from-primary/10 to-primary-hover/10 border border-primary/30 rounded-xl p-6 mb-12">
                  <p className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    In reality, we saw that reducing the number of events to only key relevant events gave us the best accuracy improvements. The model showed up to a <strong className="text-primary font-semibold">5% improvement in accuracy</strong>, which is very good given the overall model accuracy ranges between 80-95%.
                  </p>
                </div>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-6 mt-12">
                  Covid-19 impact
                </h2>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  Adding events to our Demand Sensing solution also allowed us to isolate the negative impact of certain extreme events such as Covid-19. As you know, Machine Learning models learn how to predict the future by looking at the past. In the case of the 2021-2022 forecast, using 2020 as a learning period makes the model biased due to covid lockdown measures.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-12">
                  To correct this issue we added a 'covid' event into the model, which allowed the model to learn that what happened in the past is abnormal.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-6 mt-12">
                  Interactivity
                </h2>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  In case you're wondering if the planning team can add their own events to the events driver, the short answer is yes. We've been able to successfully demo that approach in the new SupplyFocus tool in collaboration with our partner Cubewise.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  This approach has several advantages. First, planners can mark certain dates in the past as events, so the driver learns their impact. Then it only needs future event dates to extrapolate the effect. In case an event has never happened before, a manual indication of expected impact can be provided. After the event has passed, the driver will look at actuals and learn its true effect. Then the planner can decide to apply the event again or mark it as a one-off event.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-12">
                  Using events interactively requires some data management on the client side, but brings additional benefits in terms of improved planning accuracy and agility.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-6 mt-12">
                  Learn more about Demand Sensing Analytics
                </h2>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  Is your business impacted by events? Do you have a large planners team involved in business planning which creates a large overhead and costs? Would you like to use the latest AI technology to improve business planning?
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  Book a Demand Sensing demo today by reaching out to <a href="mailto:info@agnicio.com" className="text-primary hover:text-primary-hover font-semibold transition-colors">info@agnicio.com</a> or by connecting on LinkedIn to the CEO of Agnicio: <a href="https://www.linkedin.com/in/hichamelarfaoui/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover font-semibold transition-colors">https://www.linkedin.com/in/hichamelarfaoui/</a>
                </p>
              </SmoothScrollReveal>

              {/* CTA Section */}
              <SmoothScrollReveal animation="fade">
                <div className="bg-gradient-to-r from-primary/10 to-primary-hover/10 border border-primary/30 rounded-2xl p-8 text-center mb-12">
                  <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-4">
                    Transform Your Business Planning Today
                  </h3>
                  <p className="text-body font-body text-neutral-text-secondary mb-6">
                    Let machine learning help your company re-imagine business planning to drive growth and achieve operational excellence
                  </p>
                  <a
                    href="mailto:info@agnicio.com"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-body font-semibold rounded-lg hover:bg-primary-hover transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Book a Demo
                    <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
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