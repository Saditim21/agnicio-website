import { Button } from './ui/button';

interface HeroProps {
  backgroundImage: string;
}

export function Hero({ backgroundImage }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={backgroundImage}
          alt="Industrial AI Facility"
          className="w-full h-full object-cover object-center"
        />
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-8 md:px-12 lg:px-16 pt-48 md:pt-56 lg:pt-64 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            {/* Headline - ABB.com exact style - bigger and left-aligned */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-white leading-[1.1] tracking-tight mb-12">
              Break Data Barriers,<br />Unleash Business Power
            </h1>

            {/* CTA Button - ABB.com style: simple, prominent */}
            <div>
              <Button
                size="lg"
                className="bg-white text-ink hover:bg-gray-100 font-semibold px-8 py-4 text-base rounded-sm transition-colors duration-200"
                asChild
              >
                <a href="#ssp-platform" className="inline-flex items-center gap-3">
                  Explore our products
                  <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
