import { GlobalNav, Footer, Button, Card } from '../components';
import heroBackgroundImg from '../assets/products-page/solve.jpeg';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// Icon components for each service type
const ServiceIcon = ({ type }: { type: string }) => {
  const iconClass = "w-12 h-12 text-primary";

  switch (type) {
    case 'strategy':
      return (
        <svg className={iconClass} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      );
    case 'assessment':
      return (
        <svg className={iconClass} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'planning':
      return (
        <svg className={iconClass} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      );
    case 'governance':
      return (
        <svg className={iconClass} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      );
    case 'engineering':
      return (
        <svg className={iconClass} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      );
    case 'training':
      return (
        <svg className={iconClass} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    case 'migration':
      return (
        <svg className={iconClass} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
        </svg>
      );
    case 'ai':
      return (
        <svg className={iconClass} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case 'implementation':
      return (
        <svg className={iconClass} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    default:
      return (
        <svg className={iconClass} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
  }
};

const serviceCategories = [
  {
    title: "AI & Data Strategy Services",
    subtitle: "Strategic planning and assessment services to ensure successful AI adoption and sustainable operational transformation.",
    services: [
      {
        badge: "Strategy",
        title: "AI & Data Strategy",
        icon: "strategy",
        description: "Comprehensive strategic planning to break data barriers and align AI initiatives with your business objectives for sustainable operational growth.",
        whatWeDo: [
          "Digital transformation roadmap development",
          "AI maturity assessment and capability building",
          "Business case development and ROI modeling",
          "Technology stack evaluation and recommendations"
        ],
        outcomes: [
          "Clear AI implementation roadmap",
          "Aligned stakeholder expectations",
          "Quantified business value",
          "Risk mitigation strategy"
        ]
      },
      {
        badge: "Assessment",
        title: "Assessment Services",
        icon: "assessment",
        description: "Comprehensive evaluation of your current maintenance operations, data infrastructure, and readiness for intelligent asset management.",
        whatWeDo: [
          "Current state analysis of maintenance processes",
          "Data quality and availability assessment",
          "System integration capability review",
          "Organizational readiness evaluation"
        ],
        outcomes: [
          "Gap analysis report",
          "Prioritized improvement areas",
          "Technical feasibility study",
          "Change management recommendations"
        ]
      },
      {
        badge: "Planning",
        title: "Use Case Development",
        icon: "planning",
        description: "Design and validate high-impact use cases that address your specific challenges in asset maintenance and operational planning.",
        whatWeDo: [
          "Workshop facilitation with stakeholders",
          "Use case identification and prioritization",
          "Proof of concept development",
          "Success metrics definition"
        ],
        outcomes: [
          "Validated use case portfolio",
          "Technical specifications",
          "Pilot project plan",
          "Success criteria framework"
        ]
      },
      {
        badge: "Governance",
        title: "Data & Document Governance",
        icon: "governance",
        description: "Implement MDM and governance frameworks to transform scattered information into enterprise-ready decision support.",
        whatWeDo: [
          "Master Data Management (MDM) framework design",
          "Data quality rules and monitoring",
          "Document management system setup",
          "Compliance and security protocols"
        ],
        outcomes: [
          "Governed data architecture",
          "Quality assurance processes",
          "Compliance documentation",
          "Audit trail capabilities"
        ]
      }
    ]
  },
  {
    title: "AI & Data Technical Services",
    subtitle: "Comprehensive technical implementation, training, and ongoing support services for your AI-powered maintenance platform.",
    services: [
      {
        badge: "Engineering",
        title: "Data Engineering",
        icon: "engineering",
        description: "Build scalable data pipelines, ETL processes, and data warehousing solutions optimized for industrial IoT and asset management.",
        whatWeDo: [
          "Data pipeline architecture and implementation",
          "Real-time and batch processing solutions",
          "Data lake and warehouse design",
          "Integration with ERP, CMMS, and process systems"
        ],
        outcomes: [
          "Unified data platform",
          "Automated data flows",
          "Scalable infrastructure",
          "Reduced data latency"
        ]
      },
      {
        badge: "Training",
        title: "PowerBI Training",
        icon: "training",
        description: "Empower your team with advanced analytics capabilities through comprehensive PowerBI training programs tailored to industrial operations.",
        whatWeDo: [
          "Fundamentals to advanced PowerBI courses",
          "Industry-specific dashboard development",
          "DAX and data modeling best practices",
          "Report optimization and performance tuning"
        ],
        outcomes: [
          "Self-sufficient analytics team",
          "Custom dashboard capabilities",
          "Reduced reporting time",
          "Data-driven decision culture"
        ]
      },
      {
        badge: "Migration",
        title: "Cloud Migration",
        icon: "migration",
        description: "Seamlessly migrate legacy maintenance systems to cloud infrastructure with minimal disruption and maximum efficiency gains.",
        whatWeDo: [
          "Cloud readiness assessment",
          "Migration strategy and planning",
          "Phased migration execution",
          "Post-migration optimization"
        ],
        outcomes: [
          "Modern cloud infrastructure",
          "Improved scalability",
          "Reduced IT costs",
          "Enhanced system availability"
        ]
      },
      {
        badge: "Training",
        title: "Azure Data Platform Training",
        icon: "training",
        description: "Develop expertise in Azure data services, Synapse Analytics, and cloud-native architectures for industrial asset management.",
        whatWeDo: [
          "Azure fundamentals and architecture",
          "Synapse Analytics deep dive",
          "Azure IoT and time-series data",
          "Security and compliance in Azure"
        ],
        outcomes: [
          "Certified Azure expertise",
          "Cloud-native development skills",
          "Best practices knowledge",
          "Reduced dependency on vendors"
        ]
      },
      {
        badge: "AI/ML",
        title: "AI & Advanced Analytics",
        icon: "ai",
        description: "Implement machine learning models for predictive maintenance, anomaly detection, and optimization of asset performance.",
        whatWeDo: [
          "Predictive model development and training",
          "Anomaly detection algorithm implementation",
          "Optimization engine configuration",
          "Model monitoring and maintenance"
        ],
        outcomes: [
          "Production-ready ML models",
          "Automated prediction pipelines",
          "Continuous model improvement",
          "Measurable accuracy gains"
        ]
      },
      {
        badge: "Implementation",
        title: "Implementation Services",
        icon: "implementation",
        description: "End-to-end deployment, integration, and support for all SSP Platform components and related solutions.",
        whatWeDo: [
          "Solution architecture and design",
          "System integration and configuration",
          "User acceptance testing coordination",
          "Go-live support and training"
        ],
        outcomes: [
          "Fully operational system",
          "Integrated workflows",
          "Trained user base",
          "Ongoing support plan"
        ]
      }
    ]
  }
];

export function Services() {
  const categoryAnimation1 = useScrollAnimation({ threshold: 0.1, triggerOnce: true });
  const categoryAnimation2 = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  return (
    <div className="min-h-screen bg-background">
      <GlobalNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBackgroundImg}
            alt="AI-Powered Solutions"
            className="w-full h-full object-cover object-center"
          />
          {/* Darker overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full px-8 md:px-12 lg:px-16 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-5xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.1] tracking-tight mb-8">
                End-to-End Support for Your Journey
              </h1>
              <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl">
                From strategy to implementation, our expert team guides you through every step of your AI-powered asset management transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {serviceCategories.map((category, categoryIndex) => {
        const animation = categoryIndex === 0 ? categoryAnimation1 : categoryAnimation2;

        return (
          <section
            key={categoryIndex}
            ref={animation.ref}
            className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-background' : 'bg-grayBg'} border-b border-grayLine transition-all duration-1000 ${
              animation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="max-w-7xl mx-auto px-6 md:px-8">
              {/* Category Header */}
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-semibold text-ink tracking-tight mb-4">
                  {category.title}
                </h2>
                <p className="text-base text-gray-700 max-w-3xl mx-auto">
                  {category.subtitle}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <Card
                  key={serviceIndex}
                  className="p-8 flex flex-col h-full transition-all duration-700 hover:shadow-lg hover:-translate-y-1"
                  style={{
                    transitionDelay: `${serviceIndex * 100}ms`
                  }}
                >
                  <div className="mb-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <ServiceIcon type={service.icon} />
                      </div>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-md">
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-ink mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-base font-semibold text-ink mb-3">What We Do</h4>
                    <ul className="space-y-2">
                      {service.whatWeDo.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="text-sm text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <h4 className="text-base font-semibold text-ink mb-3">Expected Outcomes</h4>
                    <ul className="space-y-2">
                      {service.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm text-gray-700">{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
        );
      })}

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight leading-tight mb-6">
            Let's Build Your Success Together
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Our expert team is ready to guide you through every phase of your AI-powered asset management transformation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100" asChild>
              <a href="/#contact">
                Discuss Your Needs
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-primary" asChild>
              <a href="/">
                Back to Home
                <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
