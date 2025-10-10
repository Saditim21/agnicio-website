import { Counter } from './Counter';

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    value: 24,
    suffix: '%',
    label: 'Data-Driven Organizations',
    description: 'of organizations are said to be data driven',
  },
  {
    value: 30,
    suffix: '%',
    label: 'Data Strategy',
    description: 'of companies reported to having a well-articulated data strategy',
  },
  {
    value: 33,
    suffix: '%',
    label: 'Data Trust',
    description: 'of firms trust their data enough to gain value from',
  },
  {
    value: 47,
    suffix: '%',
    label: 'Data Silos',
    description: 'of marketers indicated their data was siloed and difficult to access',
  },
];

export function Statistics() {
  return (
    <section className="py-24 bg-neutral-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-lightest rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-h2 font-heading font-bold text-neutral-text-primary mb-4">
            Did you know that only...
          </h2>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="
                relative group
                bg-neutral-surface
                rounded-xl p-8
                border-2 border-neutral-border
                hover:border-primary
                shadow-sm hover:shadow-xl
                transition-all duration-250
                text-center
                animate-scale-in
                overflow-hidden
              "
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-lightest/0 to-primary-lightest/0 group-hover:from-primary-lightest/30 group-hover:to-primary-lightest/10 transition-all duration-250 rounded-xl" />

              <div className="relative z-10">
                {/* Counter with large display */}
                <Counter
                  end={stat.value}
                  duration={2000}
                  suffix={stat.suffix}
                  decimals={0}
                  className="text-6xl md:text-7xl font-heading font-bold text-primary mb-4 block"
                />

                {/* Label */}
                <h3 className="text-h6 font-heading font-semibold text-neutral-text-primary mb-3">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-body-sm font-body text-neutral-text-secondary leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary-lightest rounded-bl-full opacity-50 group-hover:opacity-100 transition-opacity duration-250" />
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mt-16 text-center max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '500ms' }}>
          <div className="bg-white border-2 border-primary-lighter rounded-xl p-8 shadow-md">
            <p className="text-body-lg font-body text-neutral-text-primary mb-6 leading-relaxed">
              <span className="font-semibold text-primary">The data challenge is real.</span>{' '}
              Most organizations struggle to become truly data-driven. We help you bridge this gap
              with strategic insights and actionable solutions.
            </p>
            <a
              href="#contact"
              className="
                inline-flex items-center gap-2
                px-6 py-3
                bg-primary text-white
                font-body font-medium rounded-lg
                hover:bg-primary-hover
                transition-all duration-250
                transform hover:scale-105
                shadow-md hover:shadow-lg
              "
            >
              Start Your Data Journey
              <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
