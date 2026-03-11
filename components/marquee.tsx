"use client"

import { motion } from "framer-motion"

const marqueeText = "Artificial Intelligence • Data Science • Machine Learning • Computer Vision • NLP • GenAI • "

export function Marquee() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-8 md:py-16 overflow-hidden border-t border-border"
    >
      <div className="relative flex">
        <div className="animate-marquee flex whitespace-nowrap">
          {/* First set */}
          <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-foreground/10 mx-4">
            {marqueeText}
          </span>
          <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-foreground/10 mx-4">
            {marqueeText}
          </span>
          {/* Duplicate for seamless loop */}
          <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-foreground/10 mx-4">
            {marqueeText}
          </span>
          <span className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter text-foreground/10 mx-4">
            {marqueeText}
          </span>
        </div>
      </div>
    </motion.section>
  )
}
