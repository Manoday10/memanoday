"use client"

import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

function LiveClock() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Kolkata"
      }))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return <span className="tabular-nums">{time}</span>
}

export function Navbar() {
  const [activeLink, setActiveLink] = useState<string | null>(null)
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    // Handling Initial Load Sequence
    document.body.style.overflow = "hidden"
    const timer = setTimeout(() => {
      setIsLoaded(true)
      document.body.style.overflow = ""
    }, 800)

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 50)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
      document.body.style.overflow = ""
    }
  }, [])

  // Exact Framer Ease from HTML
  const framerEase: [number, number, number, number] = [0.44, 0, 0.56, 1]

  return (
    <>
      {/* Initial Dark Loader Sequence */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isLoaded ? 0 : 1, pointerEvents: isLoaded ? "none" : "auto" }}
        transition={{ duration: 0.6, ease: [0.44, 0, 0.56, 1] }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#151515]"
      >
        <motion.div
          layoutId="brand-logo"
          className="text-2xl md:text-3xl font-bold tracking-tight text-[#F1EFED]"
        >
          Manoday Kadam
        </motion.div>
      </motion.div>

      {/* Main Navbar */}
      <motion.header
        initial={{ backgroundColor: "rgba(241, 239, 237, 0)", borderBottom: "1px solid rgba(21, 21, 21, 0)" }}
        animate={{ 
          backgroundColor: hasScrolled ? "rgba(241, 239, 237, 0.9)" : "rgba(241, 239, 237, 0)",
          borderBottom: hasScrolled ? "1px solid rgba(21, 21, 21, 0.05)" : "1px solid rgba(21, 21, 21, 0)"
        }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 md:px-12 lg:px-20 py-4 md:py-6 backdrop-blur-md"
      >
        <nav className="flex items-center justify-between max-w-[1400px] mx-auto">
          {/* Logo / Name */}
          <Link href="/" className="hover:opacity-70 transition-opacity flex-shrink-0 z-50">
            <motion.div
              layoutId="brand-logo"
              className="text-xl font-bold tracking-tight text-foreground"
            >
              Manoday Kadam
            </motion.div>
          </Link>

          {/* Navigation Links - Desktop */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isLoaded ? 1 : 0, 
              y: isLoaded ? 0 : 20
            }}
            transition={{ duration: 0.8, delay: 0.1, ease: framerEase }}
            className="hidden md:flex items-center gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-lg font-medium tracking-tight text-foreground group overflow-hidden"
                onMouseEnter={() => setActiveLink(link.href)}
                onMouseLeave={() => setActiveLink(null)}
              >
                <motion.span
                  className="inline-block"
                  animate={{ y: activeLink === link.href ? -2 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {link.label}
                </motion.span>
                <motion.span
                  className="absolute -bottom-0.5 left-0 h-[1.5px] bg-foreground origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: activeLink === link.href ? 1 : 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                />
              </Link>
            ))}
          </motion.div>

          {/* Location & Time */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isLoaded ? 1 : 0, 
              y: isLoaded ? 0 : 20
            }}
            transition={{ duration: 0.8, delay: 0.2, ease: framerEase }}
            className="hidden md:flex items-center gap-2 text-lg font-medium tracking-tight text-foreground"
          >
            <span>Mumbai</span>
            <span className="mx-2">
              <StarIcon />
            </span>
            <LiveClock />
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.1, ease: framerEase }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 z-50 relative"
            aria-label="Menu"
          >
            <motion.span 
              animate={{ rotate: isMobileMenuOpen ? 45 : 0, y: isMobileMenuOpen ? 8 : 0 }} 
              className="w-6 h-0.5 bg-foreground origin-center transition-transform" 
            />
            <motion.span 
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }} 
              className="w-6 h-0.5 bg-foreground transition-opacity" 
            />
            <motion.span 
              animate={{ rotate: isMobileMenuOpen ? -45 : 0, y: isMobileMenuOpen ? -8 : 0, width: isMobileMenuOpen ? 24 : 16 }} 
              className="h-0.5 bg-foreground origin-center transition-transform" 
            />
          </motion.button>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: framerEase }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1, duration: 0.5, ease: framerEase }}
              >
                <Link
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-light tracking-tight text-foreground hover:opacity-70 transition-opacity"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function StarIcon() {
  return (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 60 60" 
      fill="none"
      className="animate-spin-slow"
    >
      <path 
        d="M 32.143 0 L 27.857 0 L 27.857 24.827 L 10.302 7.272 L 7.272 10.302 L 24.827 27.857 L 0 27.857 L 0 32.143 L 24.827 32.143 L 7.272 49.698 L 10.302 52.728 L 27.857 35.173 L 27.857 60 L 32.143 60 L 32.143 35.173 L 49.698 52.728 L 52.729 49.698 L 35.173 32.143 L 60 32.143 L 60 27.857 L 35.173 27.857 L 52.728 10.302 L 49.698 7.271 L 32.143 24.827 Z" 
        fill="currentColor"
      />
    </svg>
  )
}
