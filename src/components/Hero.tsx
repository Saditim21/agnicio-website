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
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-16 pt-32 sm:pt-40 md:pt-48 lg:pt-56 xl:pt-64 pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            {/* Headline - ABB.com exact style - bigger and left-aligned */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light text-white leading-[1.1] tracking-tight mb-8 sm:mb-10 md:mb-12">
              Break Data Barriers,<br />Unleash Business Power
            </h1>

            {/* CTA Button - Sleek and modern */}
            <div>
              <Button
                className="bg-white text-ink hover:bg-gray-100 font-medium px-4 py-2.5 sm:px-6 sm:py-3 text-xs sm:text-base rounded-md transition-all duration-200 min-h-[44px] w-auto shadow-lg hover:shadow-xl"
                asChild
              >
                <a href="#ssp-platform" className="inline-flex items-center justify-center gap-1.5 sm:gap-2">
                  Explore our products
                  <svg className="w-3.5 h-3.5 sm:w-5 sm:h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
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
