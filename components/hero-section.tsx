"use client";

import { motion, Variants } from "framer-motion";

const textVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2 + i * 0.1,
      duration: 0.8,
      ease: [0.44, 0, 0.56, 1]
    },
  }),
};

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.4 + i * 0.1,
      duration: 0.8,
      ease: [0.44, 0, 0.56, 1]
    },
  }),
};

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 md:px-12 lg:px-20 pt-28 pb-16">
      <div className="max-w-[1200px] w-full flex flex-col items-center gap-6 sm:gap-8">
        {/* Main Heading */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, delay: 0.9, ease: [0.44, 0, 0.56, 1] }}
            className="hidden md:block"
          >
            <DecorativeStar size={90} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.0, ease: [0.44, 0, 0.56, 1] }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-[110px] font-light tracking-tighter text-foreground text-center leading-[1.1] px-2"
          >
            {"I'm Manoday Kadam"}
          </motion.h1>
        </div>

        {/* Description Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 mt-4 w-full">
          {/* Description Text */}
          <motion.p
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-lg md:text-xl lg:text-2xl font-medium tracking-tight text-foreground max-w-[400px] text-center md:text-left leading-relaxed"
          >
            I am a passionate AI and Data Science engineer, building scalable 
            AI systems and data-driven solutions that solve real-world problems.
          </motion.p>

          {/* Designer Badge */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1, rotate: 360 }}
                transition={{
                  opacity: { delay: 1.3, duration: 0.6 },
                  scale: { delay: 1.3, duration: 0.6 },
                  rotate: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 1.9,
                  },
                }}
              >
                <DecorativeStar size={38} />
              </motion.div>
              <motion.span
                custom={0}
                variants={wordVariants}
                initial="hidden"
                animate="visible"
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter text-foreground"
              >
                An Engineer
              </motion.span>
            </div>
            <motion.span
              custom={1}
              variants={wordVariants}
              initial="hidden"
              animate="visible"
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-tighter text-foreground"
            >
              building AI
            </motion.span>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
          className="mt-16 md:mt-24"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium tracking-wider uppercase text-muted-foreground">
              Scroll
            </span>
            <motion.svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              className="text-muted-foreground"
              animate={{ y: [0, 6, 0] }}
              transition={{
                duration: 1.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function DecorativeStar({ size = 60 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      className="text-foreground"
    >
      <path
        d="M 32.143 0 L 27.857 0 L 27.857 24.827 L 10.302 7.272 L 7.272 10.302 L 24.827 27.857 L 0 27.857 L 0 32.143 L 24.827 32.143 L 7.272 49.698 L 10.302 52.728 L 27.857 35.173 L 27.857 60 L 32.143 60 L 32.143 35.173 L 49.698 52.728 L 52.729 49.698 L 35.173 32.143 L 60 32.143 L 60 27.857 L 35.173 27.857 L 52.728 10.302 L 49.698 7.271 L 32.143 24.827 Z"
        fill="currentColor"
      />
    </svg>
  );
}
