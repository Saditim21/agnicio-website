import { useScrollProgress } from '../hooks/useScrollProgress';
import videoSrc from '../assets/home-page/185631-876210585_small.mp4';

interface VideoHeroProps {
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function VideoHero({
  headline,
  subheadline,
  ctaText = 'Get Started',
  ctaHref = '#contact',
  secondaryCtaText = 'Learn More',
  secondaryCtaHref = '#services',
}: VideoHeroProps) {
  // Use scroll-based animations instead of mount-based
  const { ref, progress } = useScrollProgress({
    persist: false,
    easing: 'ease-out',
    threshold: 0.3 // Trigger faster since it's at the top
  });

  // Convert progress (0-1) to isLoaded-like boolean for smooth transitions
  const isLoaded = progress > 0.1; // Start animations when 10% scrolled into view

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: 'brightness(0.4)' }}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>

        {/* Dark gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />

        {/* Animated gradient overlay */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at 30% 50%, rgba(55, 62, 152, 0.4) 0%, transparent 50%)',
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-32">
        <div className="max-w-5xl mx-auto text-center">

          {/* Main Headline with enhanced character-by-character animation */}
          <div className="mb-8">
            <h1 className="font-heading font-bold leading-tight text-h1 lg:text-6xl">
              {headline.split(' ').map((word, wordIndex) => {
                const totalCharsBefore = headline.split(' ').slice(0, wordIndex).join('').length;
                return (
                  <span key={wordIndex} className="inline-block mr-3">
                    {word.split('').map((char, charIndex) => {
                      const globalCharIndex = totalCharsBefore + charIndex;
                      const delay = globalCharIndex * 30; // 30ms per character

                      return (
                        <span
                          key={charIndex}
                          className="inline-block"
                          style={{
                            opacity: progress,
                            transform:
                              `translateY(${(1 - progress) * 40}px) scale(${0.8 + progress * 0.2}) rotateX(${(1 - progress) * -90}deg)`,
                            filter: `blur(${(1 - progress) * 4}px)`,
                            background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 50%, #06b6d4 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: progress > 0.5 ? 'transparent' : '#ffffff',
                            backgroundClip: 'text',
                            transition: `all 250ms cubic-bezier(0.34, 1.56, 0.64, 1) ${delay}ms`,
                          }}
                        >
                          {char}
                        </span>
                      );
                    })}
                  </span>
                );
              })}
            </h1>
          </div>

          {/* Animated underline with shimmer effect */}
          <div className="relative mx-auto mb-8 flex justify-center">
            <div
              className="h-1 rounded-full relative overflow-hidden"
              style={{
                width: `${progress * 200}px`,
                background: 'linear-gradient(90deg, transparent, #373e98, #06b6d4, #373e98, transparent)',
                backgroundSize: '200% 100%',
                animation: progress > 0.8 ? 'shimmerLine 3s linear infinite' : 'none',
                transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {/* Glowing dot at center */}
              <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"
                style={{
                  opacity: progress,
                  boxShadow: '0 0 10px #06b6d4, 0 0 20px #06b6d4',
                  animation: progress > 0.9 ? 'pulse 2s ease-in-out infinite' : 'none',
                  transition: 'opacity 250ms ease-in-out',
                }}
              />
            </div>
          </div>

          {/* Subheadline with fade-in */}
          {subheadline && (
            <p
              className="text-body-lg font-body text-white/90 max-w-3xl mx-auto mb-12"
              style={{
                opacity: progress,
                transform: `translateY(${(1 - progress) * 20}px)`,
                transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {subheadline}
            </p>
          )}

          {/* CTA Buttons with slide-up animation */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            style={{
              opacity: progress,
              transform: `translateY(${(1 - progress) * 20}px)`,
              transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* Primary CTA */}
            <a
              href={ctaHref}
              className="
                group relative
                px-8 py-4
                bg-primary text-white font-body font-semibold text-body-lg rounded-lg
                shadow-xl hover:shadow-2xl
                overflow-hidden
                transition-all duration-250 ease-in-out
                transform hover:scale-105
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2
              "
            >
              {/* Shimmer effect on hover */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700" />

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
                group
                px-8 py-4
                bg-white/10 backdrop-blur-sm text-white
                border-2 border-white/50
                font-body font-semibold text-body-lg rounded-lg
                hover:bg-white/20 hover:border-white
                transition-all duration-250 ease-in-out
                transform hover:scale-105
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2
              "
            >
              <span className="flex items-center gap-2">
                {secondaryCtaText}
              </span>
            </a>
          </div>

          {/* Scroll indicator with bounce animation */}
          <div
            className="mt-20"
            style={{
              opacity: progress,
              transition: 'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            <a
              href="#content"
              className="inline-flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors duration-200"
            >
              <span className="text-body-sm font-body">Scroll to explore</span>
              <svg
                className="w-6 h-6 animate-bounce"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
          }
        }

        @keyframes shimmerLine {
          0% {
            background-position: 0% 0%;
          }
          100% {
            background-position: 200% 0%;
          }
        }
      `}</style>
    </section>
  );
}
