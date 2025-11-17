import { motion } from 'framer-motion';
import { Button } from './ui/button';

interface HeroProps {
  backgroundImage: string;
}

const steps = [
  { key: "sense", label: "SENSE" },
  { key: "solve", label: "SOLVE" },
  { key: "plan", label: "PLAN" },
];

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] // Custom easing for smoothness
    }
  }
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.6,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const circlesContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 1.4,
      staggerChildren: 0.25,
    },
  },
};

const circleVariant = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 0.8,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.4,
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

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
        {/* Enhanced gradient overlay with more depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/75 to-transparent"></div>
        {/* Subtle animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-16 pt-32 sm:pt-40 md:pt-48 lg:pt-56 xl:pt-64 pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            {/* Animated Title with enhanced styling */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white leading-[1.1] tracking-tight mb-4 sm:mb-6"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              style={{
                textShadow: '0 0 40px rgba(56, 189, 248, 0.3), 0 0 80px rgba(56, 189, 248, 0.2)'
              }}
            >
              <span className="bg-gradient-to-r from-white via-sky-100 to-sky-200 bg-clip-text text-transparent">
                SSP Platform
              </span>
            </motion.h1>

            {/* Animated Subtitle with enhanced typography */}
            <motion.div
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
            >
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white leading-[1.3] tracking-tight mb-2">
                <span className="font-medium text-sky-300">Break Data Barriers</span>,
              </p>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white leading-[1.3] tracking-tight mb-8 sm:mb-10 md:mb-12">
                <span className="font-medium text-sky-300">Unleash Business Power</span>
              </p>
            </motion.div>

            {/* Animated SENSE → SOLVE → PLAN Circles */}
            <motion.div
              className="flex items-center justify-start gap-4 sm:gap-6 mb-8 sm:mb-10 md:mb-12"
              variants={circlesContainer}
              initial="hidden"
              animate="visible"
            >
              {steps.map((step, index) => (
                <div key={step.key} className="flex items-center">
                  {/* Circle */}
                  <motion.div
                    className="relative flex flex-col items-center group"
                    variants={circleVariant}
                  >
                    {/* Outer circle with enhanced effects */}
                    <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 items-center justify-center rounded-full bg-gradient-to-br from-sky-400/20 via-white/10 to-transparent backdrop-blur-md ring-2 ring-sky-400/40 shadow-[0_0_30px_rgba(56,189,248,0.3)] group-hover:ring-sky-400/60 group-hover:shadow-[0_0_40px_rgba(56,189,248,0.5)] transition-all duration-500">
                      {/* Inner dashed circle with dot */}
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-2 border-dashed border-sky-400 flex items-center justify-center animate-[spin_20s_linear_infinite]">
                        <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.8)]"></div>
                      </div>
                      {/* Pulse effect */}
                      <div className="absolute inset-0 rounded-full bg-sky-400/20 animate-ping opacity-0 group-hover:opacity-75"></div>
                    </div>

                    {/* Label with enhanced styling */}
                    <span className="mt-3 text-xs sm:text-sm font-bold tracking-[0.2em] text-sky-300 group-hover:text-sky-200 transition-colors duration-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.5)]">
                      {step.label}
                    </span>
                  </motion.div>

                  {/* Enhanced connector line (except after last circle) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden sm:block relative h-px w-8 md:w-12 mx-2"
                      variants={circleVariant}
                    >
                      <div className="absolute inset-0 border-t-2 border-dashed border-sky-400/60 shadow-[0_0_8px_rgba(56,189,248,0.4)]"></div>
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* CTA Button - Enhanced with glow effects */}
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              className="relative group"
            >
              {/* Glow background effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-sky-300 rounded-lg blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>

              <Button
                className="relative bg-white text-ink hover:bg-sky-50 font-semibold px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base rounded-lg transition-all duration-300 min-h-[44px] w-auto shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_40px_rgba(56,189,248,0.6)] hover:scale-105"
                asChild
              >
                <a href="#ssp-platform" className="inline-flex items-center justify-center gap-2">
                  <span>Explore our products</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
