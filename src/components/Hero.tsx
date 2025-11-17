import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface HeroProps {
  backgroundImage: string;
}

// Ultra-smooth fade and slide up
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 1,
      ease: [0.16, 1, 0.3, 1] as const // Elegant ease-out curve
    }
  })
};

// Staggered letter animation for title
const letterVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1] as const
    }
  })
};

export function Hero({ backgroundImage }: HeroProps) {
  const titleText = "Sense, Solve, and Plan";

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Feel */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <img
          src={backgroundImage}
          alt="Industrial AI Facility"
          className="w-full h-full object-cover object-center"
        />
        {/* Elegant gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-900/80 to-slate-900/60"></div>
        {/* Subtle accent glow */}
        <div className="absolute inset-0 bg-gradient-to-tr from-sky-500/5 via-transparent to-transparent"></div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-16 pt-32 sm:pt-40 md:pt-48 lg:pt-56 pb-20 sm:pb-32 md:pb-40">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-6xl">

            {/* Elegant subtitle badge */}
            <motion.div
              custom={0}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="mb-6 sm:mb-8"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sky-300 text-xs sm:text-sm font-medium tracking-wider">
                <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
                AI-POWERED MAINTENANCE ORCHESTRATION
              </span>
            </motion.div>

            {/* Animated Title with letter-by-letter reveal */}
            <div className="mb-6 sm:mb-8 overflow-hidden">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] tracking-tight">
                {titleText.split('').map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block bg-gradient-to-br from-white via-white to-sky-200 bg-clip-text text-transparent"
                    style={{
                      textShadow: '0 0 60px rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </h1>
            </div>

            {/* Elegant subtitle with refined animation */}
            <motion.div
              custom={0.8}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              className="mb-12 sm:mb-16 md:mb-20"
            >
              <p className="text-lg sm:text-xl md:text-2xl text-white/70 leading-relaxed max-w-4xl">
                A holistic approach to intelligent maintenance orchestration. Our integrated platform{' '}
                <span className="text-transparent bg-gradient-to-r from-sky-200 via-sky-300 to-sky-400 bg-clip-text font-medium">
                  breaks data barriers and unleashes business power
                </span>
                {' '}through AI-driven asset management.
              </p>
            </motion.div>

            {/* Elegant CTA Button */}
            <motion.div
              custom={1.2}
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
            >
              <div className="relative inline-block group">
                {/* Button glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 via-sky-300 to-sky-400 rounded-xl blur-xl opacity-40 group-hover:opacity-70 transition-opacity duration-500 animate-pulse"></div>

                <Button
                  className="relative bg-white text-slate-900 hover:bg-sky-50 font-semibold px-8 py-4 sm:px-10 sm:py-5 text-sm sm:text-base rounded-xl transition-all duration-500 min-h-[44px] shadow-2xl group-hover:shadow-sky-500/50 group-hover:-translate-y-0.5"
                  asChild
                >
                  <a href="#ssp-platform" className="inline-flex items-center justify-center gap-3">
                    <span className="relative">
                      Explore our products
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-400 group-hover:w-full transition-all duration-500"></span>
                    </span>
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </Button>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
