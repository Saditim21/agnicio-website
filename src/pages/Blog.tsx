import {
  GlobalNav,
  Footer,
  SmoothScrollReveal,
  SmoothStaggeredGrid,
} from '../components';

// Blog Images
import blogImage1 from '../assets/home-page/blog-image-1.png';
import blogImage2 from '../assets/home-page/blog-image-2.jpg';
import blogImage3 from '../assets/home-page/blog-image-3.jpg';
import blogImage4 from '../assets/blog-page/blog-4.png';
import blogImage5 from '../assets/blog-page/blog-5.jpg';
import blogImage6 from '../assets/blog-page/blog-6.jpg';
import blogImage7 from '../assets/blog-page/blog-7.jpg';

// Blog data structure for easier management
const blogPosts = [
  {
    id: 'maintenance-next-expo',
    title: 'Agnicio at Maintenance NEXT expo',
    category: 'EVENTS',
    categoryIcon: '🎯',
    date: 'APR',
    dateRange: '8-10',
    readingTime: null,
    image: blogImage1,
    alt: 'Maintenance NEXT Expo',
    excerpt: "We're excited to announce that Agnicio will be exhibiting at the Maintenance NEXT Expo from April 8th to 10th!",
    href: '/blog/maintenance-next-expo'
  },
  {
    id: 'explainability-dsa',
    title: "Explainability in DSA: Agnicio's Glass-Box Approach",
    category: 'AI BLOG',
    categoryIcon: '🤖',
    date: null,
    dateRange: null,
    readingTime: '5 min',
    image: blogImage2,
    alt: 'Demand Sensing Analytics',
    excerpt: 'What is Demand Sensing? Well, it is all about capturing the Demand Signal. This means predicting who wants what product, where and at what...',
    href: '/blog/explainability-dsa'
  },
  {
    id: 'events-data-business-planning',
    title: "How to use events' data for effective business planning",
    category: 'AI BLOG',
    categoryIcon: '📊',
    date: null,
    dateRange: null,
    readingTime: '4 min',
    image: blogImage3,
    alt: 'Business Planning Analytics',
    excerpt: 'Organizations of all sizes are involved in business planning. This includes setting ambitious targets on sales and other KPIs to drive growth and...',
    href: '/blog/events-data-business-planning'
  },
  {
    id: 'agnicio-envision-event',
    title: 'Upcoming Data Analytics and Strategy Event',
    category: 'EVENTS',
    categoryIcon: '🎯',
    date: 'SEP',
    dateRange: '24',
    readingTime: null,
    image: blogImage4,
    alt: 'Agnicio Envision Event',
    excerpt: 'Agnicio will be organizing a Data Strategy and Analytics event on the 24th of September 2019 at its headquarters in Utrecht. During this event, you',
    href: '/blog/agnicio-envision-event'
  },
  {
    id: 'post-lockdown-workshop',
    title: '1st Agnicio post-lockdown workshop at customer location',
    category: 'EVENTS',
    categoryIcon: '🎯',
    date: null,
    dateRange: null,
    readingTime: '3 min',
    image: blogImage5,
    alt: 'Post-lockdown workshop at customer location',
    excerpt: 'As COVID-19 gets under control in the Netherlands, Europe and other parts of the world, businesses are slowly opening up again and working',
    href: '/blog/post-lockdown-workshop'
  },
  {
    id: 'agnicio-cubewise-webinar',
    title: 'Upcoming Webinar: Agnicio and Cubewise',
    category: 'EVENTS',
    categoryIcon: '🎯',
    date: 'APR',
    dateRange: '16',
    readingTime: null,
    image: blogImage6,
    alt: 'Agnicio and Cubewise webinar',
    excerpt: 'When an uncertain reality seems to make planning pointless, what is the role of demand sensing and how can you keep up meaningful planning',
    href: '/blog/agnicio-cubewise-webinar'
  },
  {
    id: 'dynamic-pricing-disruption',
    title: 'Dynamic pricing disruption: how to stand out in the trend',
    category: 'AI BLOG',
    categoryIcon: '🤖',
    date: null,
    dateRange: null,
    readingTime: '5 min',
    image: blogImage7,
    alt: 'Dynamic pricing disruption with mobile payment',
    excerpt: 'Whether your company is an e-commerce retailer, a brick-and-mortar retailer, or a manufacturer with a direct-to-consumer strategy dynamic',
    href: '/blog/dynamic-pricing-disruption'
  }
];

export function Blog() {
  return (
    <div className="min-h-screen bg-neutral-background">
      <GlobalNav />
      
      {/* Hero Section */}
      <section className="pt-32 pb-8 bg-gradient-to-b from-neutral-surface via-neutral-background to-neutral-surface relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-hover rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8">
            <SmoothScrollReveal animation="fade">
              <h1 className="text-h1 font-heading font-bold text-neutral-text-primary mb-6">
                Our <span className="text-primary">Blog</span>
              </h1>
            </SmoothScrollReveal>
            <SmoothScrollReveal animation="fade">
              <p className="text-body-lg font-body text-neutral-text-secondary max-w-4xl mx-auto leading-relaxed">
                Analytics tips, Data strategies, Industry insights, BI best practices, and all the resources you need to <span className="font-semibold text-neutral-text-primary">do more with your data</span>.
              </p>
            </SmoothScrollReveal>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="pt-12 pb-24 bg-gradient-to-b from-neutral-background via-neutral-surface to-neutral-background relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <SmoothStaggeredGrid
            staggerDelay={0.12}
            animation="fade-up"
            distance={40}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          >
            {blogPosts.map((post) => (
              <a
                key={post.id}
                href={post.href}
                className="group bg-neutral-background rounded-2xl overflow-hidden border border-neutral-border hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-2 relative h-full flex flex-col cursor-pointer"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>

                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={post.image}
                    alt={post.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Category badge on image */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 backdrop-blur-sm text-primary text-body-sm font-bold rounded-full shadow-lg">
                      <span className="text-lg">{post.categoryIcon}</span>
                      {post.category}
                    </span>
                  </div>
                  
                  {/* Date or Reading time badge */}
                  <div className="absolute top-4 right-4">
                    {post.date ? (
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 text-center shadow-lg">
                        <div className="text-body-sm font-bold text-primary">{post.date}</div>
                        <div className="text-h5 font-heading font-bold text-neutral-text-primary leading-none">{post.dateRange}</div>
                      </div>
                    ) : (
                      <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                        <div className="text-body-sm font-semibold text-neutral-text-primary flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {post.readingTime}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-6 relative z-20 flex-grow flex flex-col">
                  <h3 className="text-h5 font-heading font-bold text-neutral-text-primary mb-3 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-body font-body text-neutral-text-secondary mb-4 leading-relaxed flex-grow">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-body font-semibold group-hover:gap-3 transition-all duration-300 mt-auto">
                    Continue reading
                    <svg className="w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </a>
            ))}
          </SmoothStaggeredGrid>

          {/* Pagination placeholder for future expansion */}
          <SmoothScrollReveal animation="fade">
            <div className="text-center mt-16">
              <p className="text-body font-body text-neutral-text-secondary">
                More blog posts coming soon...
              </p>
            </div>
          </SmoothScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}