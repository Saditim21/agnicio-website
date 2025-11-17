import { Button, Card } from './';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface PlatformFeature {
  title: string;
  description: string;
  features: string[];
  image: string;
  link: string;
  imageContain?: boolean;
}

interface FeatureCardProps extends PlatformFeature {}

function FeatureCard({ title, description, features, image, link, imageContain }: FeatureCardProps) {
  return (
    <Card className="p-5 sm:p-6 md:p-8 flex flex-col h-full">
      {/* Image */}
      <div className="h-48 sm:h-56 md:h-64 rounded-lg overflow-hidden border border-grayLine mb-4 sm:mb-6">
        <img
          src={image}
          alt={title}
          className={`w-full h-full ${imageContain ? 'object-contain scale-125' : 'object-cover scale-110'}`}
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-ink tracking-tight mb-3 sm:mb-4">{title}</h3>
        <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed">
          {description}
        </p>
        <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 flex-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
        <Button variant="link" className="p-0 justify-start min-h-[44px]" asChild>
          <a href={link} className="inline-flex items-center gap-2">
            Learn More
            <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </Button>
      </div>
    </Card>
  );
}

interface SSPPlatformProps {
  senseImage: string;
  solveImage: string;
  planImage: string;
  genixImage: string;
  pmcImage: string;
}

export function SSPPlatform({ senseImage, solveImage, planImage, genixImage, pmcImage }: SSPPlatformProps) {
  const platformAnimation = useScrollAnimation({ threshold: 0.1, triggerOnce: true });

  const features: PlatformFeature[] = [
    {
      title: "SENSE - AI-Driven Problem Detection",
      description: "Holistic problem detection and failure prediction across your entire infrastructure. AI-generated maintenance schedules delivered in human language through advanced Large Language Models.",
      features: [
        "24/7 continuous monitoring",
        "AI-powered failure prediction",
        "LLM-generated insights in human language",
        "Continuous monitoring across all assets"
      ],
      image: senseImage,
      link: "/products#sense",
      imageContain: true
    },
    {
      title: "SOLVE - GenAI Solution Engineering",
      description: "Tap into your enterprise knowledge with AI-powered insights. Transform from investigation mode to solution mode seamlessly with AI-augmented maintenance.",
      features: [
        "AI-powered enterprise knowledge access",
        "Intuitive chat functionality",
        "Reduced learning curves for engineers",
        "Intelligent onboarding support"
      ],
      image: solveImage,
      link: "/products#solve",
      imageContain: true
    },
    {
      title: "PLAN - AI-Driven Maintenance Planning",
      description: "Enable cross-functional and chain-level planning. Generate and optimize plans that balance demand, resources, costs, and risk with complete budget control.",
      features: [
        "Cross-functional planning optimization",
        "AI solver for consensus building",
        "Advanced scenario planning",
        "Complete budget visibility"
      ],
      image: planImage,
      link: "/products#plan"
    },
    {
      title: "Periodic Maintenance Generator - GenAI-Driven Schedule Optimization",
      description: "Automatically generate and optimize maintenance schedules by extracting theoretical schedules from supplier manuals and applying real-world context intelligence for maximum efficiency.",
      features: [
        "Intelligent schedule extraction using LLMs",
        "Asset-specific application through EMS integration",
        "Context-aware refinement based on operating conditions",
        "Optimized executable maintenance schedules"
      ],
      image: pmcImage,
      link: "/products#pmc"
    },
    {
      title: "Unified Data Platform powered by ABB Ability Genix™",
      description: "Beyond traditional ODS - enterprise-wide asset information model that integrates all your data sources into a single, unified platform for intelligent decision-making.",
      features: [
        "Enterprise asset information model",
        "Multi-source data integration",
        "Contextual data enrichment",
        "API connectors & consensus layer"
      ],
      image: genixImage,
      link: "/products#genix"
    }
  ];

  return (
    <section
      id="ssp-platform"
      ref={platformAnimation.ref}
      className={`py-12 sm:py-16 md:py-20 bg-grayBg border-b border-grayLine transition-all duration-1000 ${
        platformAnimation.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-ink tracking-tight leading-tight mb-3 sm:mb-4 px-4">
            The SSP Platform
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4">
            Sense, Solve, and Plan - A holistic approach to intelligent maintenance orchestration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="transition-all duration-700 hover:scale-[1.02]"
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
