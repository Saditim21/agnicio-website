import { TiltCard } from './TiltCard';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  size: 'small' | 'medium' | 'large';
  color: string;
}

const services: Service[] = [
  {
    id: '1',
    title: 'Cloud Infrastructure',
    description: 'Scalable, secure cloud solutions built for enterprise-grade performance and reliability.',
    icon: '☁️',
    size: 'large',
    color: 'bg-primary-lightest',
  },
  {
    id: '2',
    title: 'Data Analytics',
    description: 'Transform raw data into actionable insights with advanced analytics and visualization.',
    icon: '📊',
    size: 'medium',
    color: 'bg-neutral-surface',
  },
  {
    id: '3',
    title: 'AI Integration',
    description: 'Leverage machine learning to automate processes and enhance decision-making.',
    icon: '🤖',
    size: 'medium',
    color: 'bg-neutral-surface',
  },
  {
    id: '4',
    title: 'Security Solutions',
    description: 'Comprehensive security frameworks to protect your critical business assets.',
    icon: '🔒',
    size: 'large',
    color: 'bg-primary-lightest',
  },
  {
    id: '5',
    title: 'DevOps Automation',
    description: 'Streamline development workflows with CI/CD pipelines and infrastructure as code.',
    icon: '⚙️',
    size: 'small',
    color: 'bg-neutral-surface',
  },
  {
    id: '6',
    title: 'API Development',
    description: 'RESTful and GraphQL APIs designed for scalability and integration.',
    icon: '🔌',
    size: 'small',
    color: 'bg-neutral-surface',
  },
];

export function ServicesGrid() {
  const getGridClass = (size: 'small' | 'medium' | 'large') => {
    switch (size) {
      case 'large':
        return 'col-span-1 md:col-span-2 row-span-2';
      case 'medium':
        return 'col-span-1 md:col-span-1 row-span-2';
      case 'small':
        return 'col-span-1 md:col-span-1 row-span-1';
      default:
        return 'col-span-1';
    }
  };

  const getHeightClass = (size: 'small' | 'medium' | 'large') => {
    switch (size) {
      case 'large':
        return 'min-h-[400px]';
      case 'medium':
        return 'min-h-[400px]';
      case 'small':
        return 'min-h-[180px]';
      default:
        return 'min-h-[200px]';
    }
  };

  return (
    <section className="py-24 bg-neutral-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold mb-4">
            Our Services
          </h2>
          <p className="text-body-lg font-body text-neutral-text-secondary max-w-3xl mx-auto">
            Comprehensive solutions designed to accelerate your digital transformation journey
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto auto-rows-auto">
          {services.map((service, index) => (
            <TiltCard
              key={service.id}
              className={`${getGridClass(service.size)}`}
              animationDuration={200}
              maxTilt={8}
              scale={1.02}
            >
              <div
                className={`
                  ${service.color} ${getHeightClass(service.size)}
                  h-full rounded-xl p-8
                  border-2 border-neutral-border
                  hover:border-primary
                  shadow-sm hover:shadow-lg
                  transition-all duration-200
                  flex flex-col justify-between
                  animate-scale-in
                `}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div
                    className={`
                      ${service.size === 'large' ? 'text-6xl' : service.size === 'medium' ? 'text-5xl' : 'text-4xl'}
                      mb-4
                    `}
                  >
                    {service.icon}
                  </div>
                  <h3
                    className={`
                      font-heading font-semibold text-neutral-text-primary mb-3
                      ${service.size === 'large' ? 'text-h3' : service.size === 'medium' ? 'text-h4' : 'text-h5'}
                    `}
                  >
                    {service.title}
                  </h3>
                  <p
                    className={`
                      font-body text-neutral-text-secondary
                      ${service.size === 'large' ? 'text-body-lg' : 'text-body'}
                    `}
                  >
                    {service.description}
                  </p>
                </div>

                {/* CTA Link - Only for large cards */}
                {service.size === 'large' && (
                  <div className="mt-4">
                    <a
                      href={`#service-${service.id}`}
                      className="
                        inline-flex items-center gap-2
                        text-primary font-body font-medium
                        hover:text-primary-hover
                        transition-colors duration-200
                      "
                    >
                      Learn More
                      <svg
                        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                )}

                {/* Placeholder for complex B2B visuals/infographics */}
                {service.size === 'large' && (
                  <div className="mt-6 pt-6 border-t border-neutral-border/50">
                    <div className="h-24 rounded-lg bg-neutral-border/20 flex items-center justify-center">
                      <span className="text-body-sm text-neutral-text-tertiary font-body italic">
                        Infographic Placeholder
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </TiltCard>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '800ms' }}>
          <a
            href="#contact"
            className="
              inline-flex items-center gap-2
              px-8 py-4
              bg-primary text-white font-body font-semibold text-body-lg rounded-lg
              shadow-md hover:shadow-xl hover:bg-primary-hover
              transition-all duration-250 ease-in-out
              transform hover:scale-105
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
            "
          >
            Explore All Services
            <svg
              className="w-5 h-5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
