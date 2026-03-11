"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/in/manoday-kadam-3b1a74268/" },
  { name: "GitHub", href: "https://github.com/Manoday10" },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center gap-12 text-center">
          {/* Section Label */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <DecorativeStar size={24} />
            </motion.div>
            <span className="text-sm font-medium tracking-wider uppercase text-muted-foreground">
              Get in Touch
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light tracking-tighter text-foreground max-w-[900px] leading-tight px-2"
          >
            {"Let's work together on your next project"}
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-muted-foreground max-w-[600px] leading-relaxed"
          >
            {"I'm always interested in hearing about new projects, so if you'd like to chat please get in touch."}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <Link
              href="mailto:manodaykadam105@gmail.com"
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full text-lg font-medium tracking-tight transition-all duration-[250ms] hover:bg-foreground/90 group"
            >
              <span>Start a Project</span>
              <motion.svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform duration-[250ms] group-hover:translate-x-1"
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </Link>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8"
          >
            <Link
              href="mailto:manodaykadam105@gmail.com"
              className="text-xl sm:text-2xl md:text-3xl font-light tracking-tight text-foreground hover:opacity-70 transition-opacity break-all px-2 block"
            >
              manodaykadam105@gmail.com
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-8 md:py-12 px-4 sm:px-6 md:px-12 lg:px-20 border-t border-border"
    >
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-foreground hover:opacity-70 transition-opacity"
          >
            Manoday Kadam
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  )
}

function DecorativeStar({ size = 24 }: { size?: number }) {
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
  )
}
