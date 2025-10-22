import { GlobalNav, SmoothScrollReveal } from '../components';
import blogImage2 from '../assets/home-page/blog-image-2.jpg';
import stlDecompositionChart from '../assets/blog-page/Explainability-1.png';
import shapleyValuesChart from '../assets/blog-page/Explainability-2.png';
import waterfallChart from '../assets/blog-page/Explainability-3.png';
import contextualAIPillars from '../assets/blog-page/Explainability-4.png';

export function ExplainabilityDSA() {
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
                  <span className="text-lg">🤖</span>
                  AI BLOG
                </span>
                <span className="text-neutral-text-secondary font-body text-body">
                  December 20, 2021
                </span>
              </div>
            </SmoothScrollReveal>

            {/* Title */}
            <SmoothScrollReveal animation="fade">
              <h1 className="text-h1 font-heading font-bold text-neutral-text-primary mb-8">
                Explainability in DSA: Agnicio's Glass-Box Approach
              </h1>
            </SmoothScrollReveal>

            {/* Featured Image */}
            <SmoothScrollReveal animation="fade">
              <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
                <img
                  src={blogImage2}
                  alt="Demand Sensing Analytics"
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
                  What is Demand Sensing? Well, it is all about capturing the Demand Signal. This means predicting who wants what product, where and at what moment in time. The retail industry is one prominent example where this challenge arises, and companies are struggling to capture the important demand signals.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  Within Demand Sensing Analytics (DSA), machine learning models are created to solve specific planning use cases, for example to predict future sales. However, such models are often considered a 'black-box' by the planning team when the predictions are not explainable enough, therefore not providing enough information on how to act on certain forecasts. This affects the user adoption of the ML solution, which is undesirable. This article covers ways to infuse explainability in your business plan through leveraging the Agnicio Demand Sensing Analytics Framework.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-6 mt-12">
                  Challenge for the planning team
                </h2>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  Machine learning models serve the purpose of finding hidden patterns in today's dynamic marketplace. Leveraging all types of (big) data and (systemized) business logic enables to predict short- and long-term demand, including trend, seasonality and additional external factors. These models are receiving more interest in organizations and can be used to look at a company's internal dynamics, as well as external context like competition, events, and consumer dynamics.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-12">
                  The challenge for the planning team is to interpret the predictions and to sense to which extent a planning expert should adjust the solution to his / her market expertise. As the planning team wants to perform planning with the latest available insights, perhaps provided by some of their large accounts, and could be in doubt whether such information is already captured by the machine learning models, explainability of these models is of utmost importance.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-6 mt-12">
                  Two perspectives in which your company can perform planning with explainability
                </h2>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  Agnicio has developed a Demand Sensing Analytics framework that predicts demand and translates that into an explainable business plan. This methodology is focused on understanding the market opportunities, so clients can achieve operational excellence through sustainable growth and profitability. This is done by strategically mapping the demand drivers of a company in co-operation with the planning team. In this driver-based approach, there are two main perspectives to tackle explainability, namely 'within driver' and 'across driver' explainability:
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-6 mt-10">
                  Within driver explainability
                </h3>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  This depends on the type of machine learning model that is used for the specific driver. When for example looking at historical sales, which most often are time series data, a decomposition can be constructed of the data in terms of a trend, a seasonal component (usually a yearly season is considered) and a remainder term over time. Seasonal trends are repeating each year, whereas the trend and remainder give an idea of the behaviour in the market. Below, an example of a historical sales decomposition is shown.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <div className="my-8">
                  <img
                    src={stlDecompositionChart}
                    alt="STL decomposition chart showing trend, seasonal, and remainder components of historical sales data"
                    className="w-full max-w-4xl mx-auto rounded-lg border border-neutral-border shadow-lg"
                  />
                  <p className="text-center text-body-sm text-neutral-text-tertiary mt-2 italic">
                    STL decomposition of historical sales data showing units = trend + season_12 + remainder
                  </p>
                </div>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  In the above case, we find seasonal sales to go up in December and down in January every year. Also, the remainder data captures a Covid dip in April 2020, while the overall trend over the past two and a half years is positive. This shows an interpretable framework to understand historical sales data, which is leveraged when predicting future sales.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  Another type of machine learning model used within demand drivers can be a classification model, for example a decision tree used to improve inventory performance in supply chain management. To make such a model explainable, plots of Shapley values are useful to visualize which features have the most influence on the model outcome. This is used for feature selection.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <div className="my-8">
                  <img
                    src={shapleyValuesChart}
                    alt="Shapley values chart showing the impact of different features on model output"
                    className="w-full max-w-3xl mx-auto rounded-lg border border-neutral-border shadow-lg"
                  />
                  <p className="text-center text-body-sm text-neutral-text-tertiary mt-2 italic">
                    Shapley values visualization showing feature importance and impact on model output
                  </p>
                </div>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  Furthermore, sensitivity analysis is also a useful approach to achieve explainability when models with tweakable parameters are used, like ETS or ARIMA models in (hierarchical) time series forecasting. In that case, optimal parameter values could for example be obtained by looking for the parameter that achieves the lowest mean absolute percentage error for a sales forecast in a certain historical period. On top of that, with such analysis a model's robustness for sales forecasts in future periods is more certain, increasing trust in the model. All in all, for each demand driver and corresponding machine learning model there are different approaches to achieve interpretability for a planning team.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-6 mt-10">
                  Across driver explainability
                </h3>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  All individual demand drivers lead to different market and business insights that overall fit in a driver framework. This driver framework needs explainability as well for the planning team to be able to see which drivers have the most impact on its business. One approach to visualize the effect of different drivers on sales in a certain period is through a waterfall chart, building up towards predicted sales in the future.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <div className="my-8">
                  <img
                    src={waterfallChart}
                    alt="Waterfall chart showing how different demand drivers contribute to next year's sales forecast"
                    className="w-full max-w-4xl mx-auto rounded-lg border border-neutral-border shadow-lg"
                  />
                  <p className="text-center text-body-sm text-neutral-text-tertiary mt-2 italic">
                    Waterfall chart illustrating the cumulative impact of demand drivers from this year's sales to next year's sales forecast
                  </p>
                </div>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-12">
                  All types of demand drivers like campaigns, lost sales and store expansions can be leveraged through Demand Sensing Analytics. Demand Sensing Analytics enables planning teams to sense the impact of the essential business drivers and to interact with the driver framework in their own planning tool, augmenting the creation of business plans.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-6 mt-12">
                  User adoption of AI tool
                </h2>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  User adoption is an important aspect to consider when implementing machine learning based models in an organization. This is best achieved when the planning team can easily track, review, and interact with the tool, and when the solution delivers explainable results. Demand Sensing Analytics serves this purpose. At the same time, the planning team with its market expertise is always required to be the middleman between the data, the forecasts from the machine learning models and the final business decisions.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <div className="my-8">
                  <img
                    src={contextualAIPillars}
                    alt="Pillars of Contextual A.I.: Intelligible, Adaptive, Customizable, and Context-aware"
                    className="w-full max-w-4xl mx-auto rounded-lg border border-neutral-border shadow-lg"
                  />
                  <p className="text-center text-body-sm text-neutral-text-tertiary mt-2 italic">
                    The four pillars of Contextual A.I. that enable effective user adoption and explainability
                  </p>
                </div>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-12">
                  The challenge for the planning team is to clearly formulate the objectives that are required for a fluent planning process in co-operation with the machine learning engineers, so that the possibilities of the models and the explainability framework are optimally utilized. This can be achieved through iterations of business conversations with the ML engineers, and thorough user acceptance testing (UAT) for best user adoption.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-6 mt-12">
                  Learn more about Demand Sensing Analytics and Explainability
                </h2>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  Do you have a large planning team involved in business planning which creates large overhead and costs in doing repetitive time-consuming tasks? Does your planning team struggle with explaining the business plan in terms of different market opportunities? Would you like to use the latest AI technology to improve your business planning?
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  Book a Demand Sensing Analytics demo today by reaching out to <a href="mailto:info@agnicio.com" className="text-primary hover:text-primary-hover font-semibold transition-colors">info@agnicio.com</a>, or by connecting to the CEO of Agnicio via <a href="https://www.linkedin.com/in/hichamelarfaoui/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover font-semibold transition-colors">LinkedIn here</a>.
                </p>
              </SmoothScrollReveal>

              {/* CTA Section */}
              <SmoothScrollReveal animation="fade">
                <div className="bg-gradient-to-r from-primary/10 to-primary-hover/10 border border-primary/30 rounded-2xl p-8 text-center mb-12">
                  <h3 className="text-h4 font-heading font-bold text-neutral-text-primary mb-4">
                    Ready to Transform Your Business Planning?
                  </h3>
                  <p className="text-body font-body text-neutral-text-secondary mb-6">
                    Let machine learning augment your company's business planning to make it less tedious, and to drive growth and profitability, achieving operational excellence!
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