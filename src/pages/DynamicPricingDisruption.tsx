import { GlobalNav, SmoothScrollReveal, Footer } from '../components';
import blogImage7 from '../assets/blog-page/blog-7.jpg';
import pricingModulesChart from '../assets/blog-page/blog-7-content.png';

export function DynamicPricingDisruption() {
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
                  November 26, 2021
                </span>
              </div>
            </SmoothScrollReveal>

            {/* Title */}
            <SmoothScrollReveal animation="fade">
              <h1 className="text-h1 font-heading font-bold text-neutral-text-primary mb-8">
                Dynamic pricing disruption: how to stand out in the trend
              </h1>
            </SmoothScrollReveal>

            {/* Featured Image */}
            <SmoothScrollReveal animation="fade">
              <div className="relative rounded-2xl overflow-hidden mb-12">
                <img
                  src={blogImage7}
                  alt="Dynamic pricing disruption with mobile payment"
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
                  Whether your company is an e-commerce retailer, a brick-and-mortar retailer, or a manufacturer with a direct-to-consumer strategy dynamic pricing can help your business to be more responsive in ever-changing market conditions.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  If your company is not leveraging dynamic price optimization, there is a high chance it's losing out on better margins, higher profits and better deals to your customers against the competition.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  There are several reasons why dynamic pricing is no longer a wish but a necessity:
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <ul className="space-y-4 mb-12 ml-6">
                  <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    Customers tend to compare prices more frequently, with popular price comparison tools
                  </li>
                  <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    Leading marketplaces and tech-savvy retailers already use dynamic pricing. A good example of that is Amazon, which changes its prices every 10 minutes, resulting in over 2.5 million product price changes a day
                  </li>
                  <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    Customer expectations are rising and customers want to be rewarded for loyalty with personalized offers
                  </li>
                  <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    Massive amounts of data is generated from internal and external sources, and companies not leveraging this data risk being outcompeted
                  </li>
                </ul>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-12">
                  This article will help you to understand what dynamic pricing is, how it works and how your company can leverage dynamic pricing to drive growth and achieve operational excellence.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-6">
                  What is dynamic pricing?
                </h2>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  Dynamic pricing is a process by which companies adjust their prices in real-time based on the current supply and demand in the market, inventory levels, and competition dynamics. Dynamic pricing works by maximizing expected revenue or profit for any given product.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  The basic idea behind it is that during high-demand, low-competition and low-stock periods prices can be raised, while low-demand, high-competition and high-stock periods call for a reduction in price.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-6">
                  What is the goal of dynamic pricing?
                </h2>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  At it's core, the goal of dynamic pricing is to ensure that the company is able to respond to current and expected market dynamics with a competitive and attractive offer to the customer. However, the strategy of the pricing solution can be tailored to your business objective: market penetration, staying price leader or successfully launching new products.
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-6">
                  What data do I need to make it work?
                </h2>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  The two key ingredients to a successful implementation of dynamic pricing solution is well-defined pricing strategy and high quality, high quantity data. A list of relevant data includes:
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <div className="space-y-8 mb-12">
                  <div className="bg-neutral-surface rounded-2xl p-8 border border-neutral-border">
                    <h3 className="text-h4 font-heading font-semibold text-neutral-text-primary mb-4">
                      Internal data
                    </h3>
                    <ul className="space-y-3">
                      <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                        <strong>Transactions data:</strong> what products were sold at what price in the past. This is a key ingredient to identify the basic relationship between prices and sales. For online retailers, this can further include online shopping behaviour
                      </li>
                      <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                        <strong>Inventory data:</strong> current & expected inventory levels to estimate the supply side
                      </li>
                      <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                        <strong>Product data:</strong> price-related attributes such as cost, base price, and minimum advertising price. This data is used for setting boundaries of price optimization. It can also include non-pricing attributes such as color, size, stock level, expiration date or target sales date
                      </li>
                      <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                        <strong>Additional internal data:</strong> promotion periods, discount policies
                      </li>
                    </ul>
                  </div>

                  <div className="bg-neutral-surface rounded-2xl p-8 border border-neutral-border">
                    <h3 className="text-h4 font-heading font-semibold text-neutral-text-primary mb-4">
                      External data
                    </h3>
                    <ul className="space-y-3">
                      <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                        <strong>External competitor data:</strong> prices of competitors for similar products, public reviews and ratings of their products
                      </li>
                      <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                        <strong>Seasonality data:</strong> this includes holidays in a specific country/region
                      </li>
                      <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                        <strong>Market trends:</strong> global, regional and local trends that have an impact on the demand or supply of the product
                      </li>
                    </ul>
                  </div>
                </div>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-6">
                  How does dynamic pricing work?
                </h2>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  There are multiple approaches to dynamic pricing:
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <ul className="space-y-4 mb-8 ml-6">
                  <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    <strong>Rule-based:</strong> business rules are used to come up with a price (e.g. price 15% above cost). It doesn't always take into account market dynamics
                  </li>
                  <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    <strong>Demand based:</strong> estimating demand response to price change. Demand elasticity is estimated and used to suggest an optimal price. It's a more data-driven approach but may be isolated from other factors
                  </li>
                  <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    <strong>Competition based:</strong> this is when price is matched or set to undercut key competitor prices. This approach is more responsive in nature.
                  </li>
                  <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    <strong>Price optimization:</strong> this approach takes multiple pricing drivers into account: historical and forecasted demand, price elasticity, competition dynamics, stock levels, and uses optimization techniques to come up with an optimal price suggestion
                  </li>
                </ul>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  ML based price optimization approach consists of the following steps:
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <ol className="space-y-3 mb-8 ml-6 list-decimal">
                  <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    Historical data on sales and prices is used to identify dependencies and build a demand function
                  </li>
                  <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    An effect of change in price on sales is predicted using identified dependencies
                  </li>
                  <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    Then, price is further optimized using taking additional pricing and non-pricing factors into account
                  </li>
                  <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    Algorithm is continuously re-run with new data to adapt to reality
                  </li>
                </ol>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  Below is an example of end-to-end dynamic pricing with several sub-modules:
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <div className="relative rounded-2xl overflow-hidden mb-8">
                  <img
                    src={pricingModulesChart}
                    alt="How pricing modules generate price recommendations over a product's life cycle"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <div className="bg-neutral-surface rounded-lg p-4 mb-8 text-center">
                  <p className="text-body-sm font-body text-neutral-text-secondary italic">
                    Source: McKinsey
                  </p>
                </div>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  We can use ML to handle special cases like:
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <ul className="space-y-4 mb-12 ml-6">
                  <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    <strong>New products:</strong> pricing products that have a short sales history or no history at all. Machine learning identifies similar products in a company or competitors assortment and suggests a price, based on key product characteristics
                  </li>
                  <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    <strong>Identifying Key Value Items (KVIs):</strong> consumers base their perception of the brand by comparing a few key products in the assortment. Machine learning helps to identify highest impact products from all the products sold. Those products should be priced optimially
                  </li>
                  <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    <strong>Personalized offers:</strong> based on shopping history ML helps to give customers targeted offers at special prices to lower churn and increase customer loyalty. This is specifically related to promotional pricing
                  </li>
                </ul>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-6">
                  What are the benefits of dynamic pricing?
                </h2>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  There are two types of benefits that your company can get from dynamic pricing:
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <ul className="space-y-3 mb-8 ml-6">
                  <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    efficiencies arising from automation of costly and time-consuming manual pricing
                  </li>
                  <li className="text-body font-body text-neutral-text-secondary leading-relaxed">
                    increases in key KPIs arising due to smarter pricing
                  </li>
                </ul>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-6">
                  These include:
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <div className="bg-primary/5 border border-primary/20 rounded-2xl p-8 mb-12">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ul className="space-y-3">
                      <li className="text-body font-body text-neutral-text-secondary leading-relaxed flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        Increase in profit margins
                      </li>
                      <li className="text-body font-body text-neutral-text-secondary leading-relaxed flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        Better competitive positioning/ market share
                      </li>
                      <li className="text-body font-body text-neutral-text-secondary leading-relaxed flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        Higher profits
                      </li>
                      <li className="text-body font-body text-neutral-text-secondary leading-relaxed flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        Lower churn
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="text-body font-body text-neutral-text-secondary leading-relaxed flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        Better consumer experience
                      </li>
                      <li className="text-body font-body text-neutral-text-secondary leading-relaxed flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        More efficient use of inventory
                      </li>
                      <li className="text-body font-body text-neutral-text-secondary leading-relaxed flex items-center gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        Increasing customer loyalty
                      </li>
                    </ul>
                  </div>
                </div>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-6">
                  What are the steps to take to implement?
                </h2>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  To drive benefits from dynamic pricing, you can follow a 5 step approach:
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <div className="space-y-6 mb-12">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
                    <div>
                      <h3 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-2">Defining the business objective</h3>
                      <p className="text-body font-body text-neutral-text-secondary leading-relaxed">
                        dynamic pricing can serve multiple, sometimes opposing objectives and its important to define those at the start
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
                    <div>
                      <h3 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-2">Setting high-level pricing strategy</h3>
                      <p className="text-body font-body text-neutral-text-secondary leading-relaxed">
                        do you want to be known as the cheapest retailer in the market, or you want to keep sustainable margins over the long-term? Setting goals goal will inform which solutions to apply
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
                    <div>
                      <h3 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-2">Identifying the boundaries</h3>
                      <p className="text-body font-body text-neutral-text-secondary leading-relaxed">
                        this is a specific step, where you focus on boundaries of a dynamic pricing solution, e.g. capping frequency of price changes or capping the change range for certain strategic products
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
                    <div>
                      <h3 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-2">Collecting available data</h3>
                      <p className="text-body font-body text-neutral-text-secondary leading-relaxed">
                        ensuring data availability at an organization in order to perform the optimization
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">5</div>
                    <div>
                      <h3 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-2">Implementation and monitoring</h3>
                      <p className="text-body font-body text-neutral-text-secondary leading-relaxed">
                        verifying the pricing suggestions and monitoring the impact of the pricing decisions on the business
                      </p>
                    </div>
                  </div>
                </div>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <h2 className="text-h3 font-heading font-bold text-neutral-text-primary mb-6">
                  About Agnicio
                </h2>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  Is your company interested in leveraging dynamic pricing to achieve any of the above objectives? Do you need a partner that helps you to take right steps in advanced analytics and retail intelligence?
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <p className="text-body font-body text-neutral-text-secondary leading-relaxed mb-8">
                  Connect to Agnicio team, leader in demand sensing and supply chain forecasting, to create a plan for dynamic pricing implementation at your company. Contact us <a href="mailto:info@agnicio.com" className="text-primary hover:text-primary-hover font-semibold transition-colors">here</a> or reach out to Agnicio founder and CEO on <a href="https://www.linkedin.com/in/hichamelarfaoui/" className="text-primary hover:text-primary-hover font-semibold transition-colors">linkedin</a> to kick-off your data-driven journey
                </p>
              </SmoothScrollReveal>

              <SmoothScrollReveal animation="fade">
                <div className="bg-neutral-surface rounded-lg p-6 mb-8">
                  <p className="text-body-sm font-body text-neutral-text-secondary">
                    <strong>Keywords:</strong> dynamic pricing, advanced analytics, machine learning, demand sensing
                  </p>
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