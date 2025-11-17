import { motion } from 'framer-motion';

const steps = [
  { key: "sense", label: "SENSE" },
  { key: "solve", label: "SOLVE" },
  { key: "plan", label: "PLAN" },
];

const titleVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const subtitleVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.4, duration: 0.5 } }
};

const circlesContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.8,
      staggerChildren: 0.35,
    },
  },
};

const circleVariant = {
  hidden: { opacity: 0, scale: 0.7, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 14,
    },
  },
};

export function SenseSolvePlanSection() {
  return (
    <section className="bg-slate-950 text-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight mb-4"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          SSP Platform
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-16"
          variants={subtitleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          Break Data Barriers, Unleash Business Power
        </motion.p>

        {/* Circles + Flow */}
        <motion.div
          className="mt-14 flex items-center justify-center gap-6 sm:gap-10"
          variants={circlesContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {steps.map((step, index) => (
            <div key={step.key} className="flex items-center">
              {/* Circle */}
              <motion.div
                className="relative flex flex-col items-center"
                variants={circleVariant}
              >
                {/* Outer circle */}
                <div className="relative flex h-28 w-28 sm:h-36 sm:w-36 items-center justify-center rounded-full bg-slate-900/60 ring-1 ring-slate-700/70">
                  {/* Inner dashed circle with dot */}
                  <div className="h-14 w-14 rounded-full border border-dashed border-sky-400 flex items-center justify-center">
                    <div className="h-4 w-4 rounded-full bg-sky-400/90"></div>
                  </div>
                </div>

                {/* Label */}
                <span className="mt-4 text-xs sm:text-sm font-semibold tracking-[0.18em] text-sky-300">
                  {step.label}
                </span>
              </motion.div>

              {/* Dotted line connector (except after last circle) */}
              {index < steps.length - 1 && (
                <motion.div
                  className="hidden sm:block h-px w-16 border-t border-dashed border-slate-600"
                  variants={circleVariant}
                />
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
