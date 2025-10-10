import { LaserFlow } from './LaserFlow';
import { KineticTypography } from './KineticTypography';
import { DESIGN_TOKENS } from '../design-system';

interface HeroSectionProps {
  headline?: string;
  highlightWords?: string[];
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function HeroSection({
  headline = 'Transform Your Business with Intelligent Solutions',
  highlightWords = ['Transform', 'Intelligent'],
  subheadline = 'Empowering organizations with cutting-edge technology and strategic innovation. Built for the modern enterprise.',
  ctaText = 'Get Started',
  ctaHref = '#get-started',
  secondaryCtaText = 'Learn More',
  secondaryCtaHref = '#learn-more',
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-background">
      {/* Laser Flow Background - Professional ambient motion */}
      <LaserFlow
        opacity={0.08}
        speed="slow"
        color={DESIGN_TOKENS.colors.accent.electric_blue}
      />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-5xl mx-auto text-center">
          {/* Kinetic Typography Headline */}
          <div className="mb-8">
            <KineticTypography
              text={headline}
              highlightWords={highlightWords}
              className="text-h1 leading-tight"
              animationDuration={250}
              staggerDelay={50}
            />
          </div>

          {/* Subheadline */}
          <p
            className="
              text-body-lg font-body text-neutral-text-secondary
              max-w-3xl mx-auto mb-12
              animate-fade-in
            "
            style={{ animationDelay: '400ms' }}
          >
            {subheadline}
          </p>

          {/* CTA Buttons */}
          <div
            className="
              flex flex-col sm:flex-row gap-4 justify-center items-center
              animate-slide-in
            "
            style={{ animationDelay: '600ms' }}
          >
            {/* Primary CTA - Accent Color with Hover Effects */}
            <a
              href={ctaHref}
              className="
                group
                px-8 py-4
                bg-primary text-white font-body font-semibold text-body-lg rounded-lg
                shadow-md hover:shadow-xl
                border-2 border-primary hover:border-primary-hover
                transition-all duration-250 ease-in-out
                transform hover:scale-105
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                relative overflow-hidden
              "
              style={{
                backgroundColor: DESIGN_TOKENS.colors.primary.base,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = DESIGN_TOKENS.colors.primary.hover;
                e.currentTarget.style.borderColor = DESIGN_TOKENS.colors.primary.hover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = DESIGN_TOKENS.colors.primary.base;
                e.currentTarget.style.borderColor = DESIGN_TOKENS.colors.primary.base;
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {ctaText}
                <svg
                  className="w-5 h-5 transition-transform duration-250 group-hover:translate-x-1"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>

            {/* Secondary CTA */}
            <a
              href={secondaryCtaHref}
              className="
                px-8 py-4
                bg-neutral-surface text-neutral-text-primary font-body font-semibold text-body-lg rounded-lg
                border-2 border-neutral-border
                hover:border-primary hover:text-primary
                transition-all duration-250 ease-in-out
                transform hover:scale-105
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
              "
            >
              {secondaryCtaText}
            </a>
          </div>

          {/* Trust Indicators / Stats */}
          <div
            className="
              mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8
              animate-fade-in
            "
            style={{ animationDelay: '800ms' }}
          >
            <div className="text-center">
              <div className="text-h2 font-heading font-bold text-primary mb-2">
                500+
              </div>
              <div className="text-body font-body text-neutral-text-tertiary">
                Enterprise Clients
              </div>
            </div>
            <div className="text-center">
              <div className="text-h2 font-heading font-bold text-primary mb-2">
                99.9%
              </div>
              <div className="text-body font-body text-neutral-text-tertiary">
                Uptime Guarantee
              </div>
            </div>
            <div className="text-center">
              <div className="text-h2 font-heading font-bold text-primary mb-2">
                24/7
              </div>
              <div className="text-body font-body text-neutral-text-tertiary">
                Expert Support
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay for better text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, transparent 0%, ${DESIGN_TOKENS.colors.neutrals.background} 100%)`,
          opacity: 0.3,
        }}
      />
    </section>
  );
}
