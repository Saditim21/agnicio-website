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
        {/* Darker overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 md:px-12 lg:px-16 pt-32 sm:pt-40 md:pt-48 lg:pt-56 xl:pt-64 pb-16 sm:pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-5xl">
            {/* Animated Title */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-light text-white leading-[1.1] tracking-tight mb-4 sm:mb-6"
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              SSP Platform
            </motion.h1>

            {/* Animated Subtitle */}
            <motion.p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white/90 leading-[1.2] tracking-tight mb-8 sm:mb-10 md:mb-12"
              variants={subtitleVariants}
              initial="hidden"
              animate="visible"
            >
              Break Data Barriers,<br />Unleash Business Power
            </motion.p>

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
                    className="relative flex flex-col items-center"
                    variants={circleVariant}
                  >
                    {/* Outer circle */}
                    <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 md:h-28 md:w-28 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm ring-1 ring-white/20">
                      {/* Inner dashed circle with dot */}
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border border-dashed border-sky-400 flex items-center justify-center">
                        <div className="h-3 w-3 rounded-full bg-sky-400"></div>
                      </div>
                    </div>

                    {/* Label */}
                    <span className="mt-3 text-xs sm:text-sm font-semibold tracking-[0.15em] text-sky-300">
                      {step.label}
                    </span>
                  </motion.div>

                  {/* Dotted line connector (except after last circle) */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="hidden sm:block h-px w-8 md:w-12 border-t border-dashed border-white/40 mx-2"
                      variants={circleVariant}
                    />
                  )}
                </div>
              ))}
            </motion.div>

            {/* CTA Button - Sleek and modern */}
            <motion.div
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
