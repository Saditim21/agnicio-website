import { Counter } from './Counter';

interface Metric {
  id: string;
  value: number;
  suffix: string;
  prefix?: string;
  decimals: number;
  label: string;
  description: string;
  icon: string;
}

const metrics: Metric[] = [
  {
    id: 'uptime',
    value: 99.99,
    suffix: '%',
    prefix: '',
    decimals: 2,
    label: 'Uptime Reliability',
    description: 'Industry-leading infrastructure availability',
    icon: '🎯',
  },
  {
    id: 'clients',
    value: 2500,
    suffix: '+',
    prefix: '',
    decimals: 0,
    label: 'Enterprise Clients',
    description: 'Trusted by leading organizations worldwide',
    icon: '🏢',
  },
  {
    id: 'response',
    value: 15,
    suffix: 'min',
    prefix: '<',
    decimals: 0,
    label: 'Average Response Time',
    description: 'Lightning-fast support when you need it',
    icon: '⚡',
  },
];

export function Metrics() {
  return (
    <section className="py-24 bg-neutral-surface relative overflow-hidden">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 50%, rgba(55, 62, 152, 0.05) 0%, transparent 70%)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-heading font-bold mb-4">
            Metrics That Matter
          </h2>
          <p className="text-body-lg font-body text-neutral-text-secondary max-w-3xl mx-auto">
            Our commitment to excellence, measured in real numbers
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={metric.id}
              className="
                relative
                bg-neutral-background
                rounded-xl p-8
                border-2 border-neutral-border
                hover:border-primary
                shadow-sm hover:shadow-lg
                transition-all duration-250
                text-center
                animate-scale-in
              "
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{metric.icon}</div>

              {/* Counter */}
              <Counter
                end={metric.value}
                duration={2000}
                suffix={metric.suffix}
                prefix={metric.prefix}
                decimals={metric.decimals}
                className="text-h1 font-heading font-bold text-primary mb-2"
              />

              {/* Label */}
              <h3 className="text-h5 font-heading font-semibold text-neutral-text-primary mb-3">
                {metric.label}
              </h3>

              {/* Description */}
              <p className="text-body font-body text-neutral-text-secondary">
                {metric.description}
              </p>

              {/* Decorative Element */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary-lightest rounded-bl-full opacity-50" />
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div
            className="
              bg-primary-lightest
              rounded-xl p-8
              border-2 border-primary-lighter
              animate-fade-in
            "
            style={{ animationDelay: '600ms' }}
          >
            <p className="text-body-lg font-body text-neutral-text-primary mb-4">
              <span className="font-semibold">Performance Guarantee:</span> Our SLA-backed infrastructure
              ensures your mission-critical applications remain online and performant, 24/7/365.
            </p>
            <a
              href="#sla"
              className="
                inline-flex items-center gap-2
                text-primary font-body font-medium
                hover:text-primary-hover
                transition-colors duration-200
              "
            >
              View Our Service Level Agreement
              <svg
                className="w-4 h-4"
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
        </div>
      </div>
    </section>
  );
}
