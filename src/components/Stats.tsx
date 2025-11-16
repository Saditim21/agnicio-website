import { Card, CardContent } from './ui/card';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface StatCardProps {
  value: string;
  title: string;
  description: string;
}

function StatCard({ value, title, description }: StatCardProps) {
  return (
    <Card className="p-4 sm:p-5 text-center h-full">
      <CardContent className="p-0 flex flex-col justify-center h-full min-h-[120px] sm:min-h-[140px]">
        <div className="text-3xl sm:text-4xl font-bold text-ink mb-1.5 sm:mb-2">{value}</div>
        <h3 className="text-sm sm:text-base font-semibold text-ink mb-1 sm:mb-1.5 leading-tight">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}

export function Stats() {
  const statsAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  const stats = [
    {
      value: "42%",
      title: "Reduction in Unplanned Downtime",
      description: "Continuous AI-driven monitoring"
    },
    {
      value: "€2.8M",
      title: "Average Annual Cost Savings",
      description: "Optimized maintenance planning"
    },
    {
      value: "99.8%",
      title: "Failure Prediction Accuracy",
      description: "Advanced AI & LLM technology"
    },
    {
      value: "24/7",
      title: "Continuous Monitoring",
      description: "Real-time problem detection"
    }
  ];

  return (
    <section
      id="stats"
      ref={statsAnimation.ref}
      className={`py-12 sm:py-16 md:py-20 bg-background border-b border-grayLine transition-all duration-1000 ${
        statsAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-ink tracking-tight leading-tight mb-3 sm:mb-4 px-4">
            Driving Sustainable Growth and Operational Excellence
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4">
            Proven results from our SSP Platform across manufacturing, energy, and industrial sectors
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="transition-all duration-700"
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <StatCard {...stat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
