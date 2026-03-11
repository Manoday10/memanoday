"use client"

import { motion, useScroll, useTransform, useMotionValue, useSpring, Variants } from "framer-motion"
import Image from "next/image"
import { useRef, useState, MouseEvent } from "react"

const projects = [
  {
    id: 1,
    title: "Demand Forecasting Model",
    description: "Leveraged NBeats and Prophet for accurate time series forecasting of sales trends and seasonality.",
    category: "AI & Data Science",
    image: "https://framerusercontent.com/images/D6fsUxqmky99D5TuqTduwAIL1Ow.webp",
    color: "#1a1a2e",
  },
  {
    id: 2,
    title: "Cancero",
    description: "Designed a CNN-based model to classify cancer types from MRI scans with 92% accuracy.",
    category: "Deep Learning & Healthcare",
    image: "https://framerusercontent.com/images/Nk3iUU1HWdPTnkYNlNeELJCRGB8.webp",
    color: "#f5f0eb",
  },
  {
    id: 3,
    title: "Fruit Quality Detection",
    description: "Developed a sequential CNN-based model for fruit quality assessment with 90% accuracy.",
    category: "Computer Vision",
    image: "https://framerusercontent.com/images/ajRueeV76Lr6WAW1YeYSDz906bk.webp",
    color: "#fff5f0",
  },
  {
    id: 4,
    title: "Level SuperMind Hackathon 2025",
    description: "National Finalist out of thousands of participants in an overnight AI hackathon.",
    category: "Hackathon",
    image: "https://framerusercontent.com/images/XJpHtCi9RSXXsyeLW196u8Fvgc.webp",
    color: "#0a0a0a",
  },
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center justify-between mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tighter text-foreground">
            Featured work
          </h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm font-medium tracking-wider">Scroll</span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              className="text-muted-foreground"
            >
              <path
                d="M12 5v14M5 12l7 7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[number]
}) {
  const ref = useRef<HTMLElement>(null)
  
  // Parallax scroll effect
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  // Magnetic badge effect
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150, mass: 0.1 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left - 50) // center 100px badge
    mouseY.set(e.clientY - rect.top - 50)
  }

  return (
    <motion.article
      ref={ref}
      variants={cardVariants}
      className="group relative rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Image Container */}
      <div 
        className="relative aspect-[4/3] overflow-hidden bg-secondary"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div 
          style={{ y }} 
          className="absolute inset-[-15%] w-[130%] h-[130%] origin-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />
        </motion.div>
        
        {/* Explore Badge */}
        <motion.div
          style={{ x: springX, y: springY }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.5 }}
          transition={{ duration: 0.2 }}
          className="pointer-events-none absolute z-20 flex h-[100px] w-[100px] items-center justify-center rounded-full bg-background/30 backdrop-blur-md text-sm font-medium tracking-wider text-background shadow-lg"
        >
          Explore
        </motion.div>

        {/* Overlay on hover */}
        <motion.div
          className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500 z-10 pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className="p-6 bg-card rounded-b-2xl relative z-30">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl md:text-3xl font-medium tracking-tight text-card-foreground group-hover:opacity-70 transition-opacity">
            {project.title}
          </h3>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            {project.description}
          </p>
          <span className="inline-flex items-center mt-2 text-sm font-medium tracking-wider text-muted-foreground uppercase">
            {project.category}
          </span>
        </div>
      </div>
    </motion.article>
  )
}
