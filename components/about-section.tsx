"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const skills = [
  "Python & C++",
  "TensorFlow",
  "LiveKit / WebRTC",
  "Machine Learning",
  "Generative AI",
  "Computer Vision",
]


const experiences = [
  {
    role: "Product Intern (AI)",
    company: "The Good Bug",
    period: "Oct. 2025 – Present",
  },
  {
    role: "B.E. in AI and Data Science",
    company: "SIES GST",
    period: "Dec. 2022 – June 2025",
  },
  {
    role: "Diploma in Information Tech",
    company: "Bharti Vidyapeeth",
    period: "July 2019 – April 2022",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20 bg-foreground">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20">
          {/* Left Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, type: "spring", stiffness: 70, damping: 20 }}
            className="flex flex-col gap-8"
          >
            {/* Profile Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-secondary">
              <Image
                src="/profile.png"
                alt="Manoday Kadam"
                fill
                className="object-cover object-top"
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 70, damping: 20 }}
                className="text-center"
              >
                <span className="text-4xl md:text-5xl font-light tracking-tighter text-background">
                  Top 5
                </span>
                <p className="text-sm font-medium text-background/70 mt-1">National Finalist</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: "spring", stiffness: 70, damping: 20 }}
                className="text-center"
              >
                <span className="text-4xl md:text-5xl font-light tracking-tighter text-background">
                  10+
                </span>
                <p className="text-sm font-medium text-background/70 mt-1">Projects Done</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: "spring", stiffness: 70, damping: 20 }}
                className="text-center"
              >
                <span className="text-4xl md:text-5xl font-light tracking-tighter text-background">
                  2
                </span>
                <p className="text-sm font-medium text-background/70 mt-1">Hackathons</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - About Content */}
          <motion.div
            initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, type: "spring", stiffness: 70, damping: 20 }}
            className="flex flex-col gap-10"
          >
            {/* Section Label */}
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <DecorativeStar size={24} className="text-background" />
              </motion.div>
              <span className="text-sm font-medium tracking-wider uppercase text-background/70">
                About Me
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tighter text-background leading-tight">
              Building intelligent systems with data and precision
            </h2>

            {/* Description */}
            <p className="text-lg md:text-xl text-background/80 leading-relaxed">
              {"I'm an AI Engineer based in Mumbai, India, passionate about applying deep learning, computer vision, and real-time communication to solve complex problems. I believe in the power of AI to transform industries and create meaningful impact."}
            </p>

            {/* Skills */}
            <div className="flex flex-col gap-4">
              <span className="text-sm font-medium tracking-wider uppercase text-background/70">
                Services
              </span>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 rounded-full border border-background/30 text-sm font-medium text-background hover:bg-background hover:text-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="flex flex-col gap-4 mt-4">
              <span className="text-sm font-medium tracking-wider uppercase text-background/70">
                Experience
              </span>
              <div className="flex flex-col gap-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 border-b border-background/20 gap-2 sm:gap-0"
                  >
                    <div>
                      <p className="text-lg font-medium text-background">{exp.role}</p>
                      <p className="text-sm text-background/70">{exp.company}</p>
                    </div>
                    <span className="text-sm text-background/60">{exp.period}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function DecorativeStar({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 60 60"
      fill="none"
      className={className}
    >
      <path
        d="M 32.143 0 L 27.857 0 L 27.857 24.827 L 10.302 7.272 L 7.272 10.302 L 24.827 27.857 L 0 27.857 L 0 32.143 L 24.827 32.143 L 7.272 49.698 L 10.302 52.728 L 27.857 35.173 L 27.857 60 L 32.143 60 L 32.143 35.173 L 49.698 52.728 L 52.729 49.698 L 35.173 32.143 L 60 32.143 L 60 27.857 L 35.173 27.857 L 52.728 10.302 L 49.698 7.271 L 32.143 24.827 Z"
        fill="currentColor"
      />
    </svg>
  )
}
