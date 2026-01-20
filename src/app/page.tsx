'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NeuronBackground } from '../components/NeuronBackground'

// Apple-style animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.8,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9, filter: 'blur(20px)' },
  visible: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 1,
      ease: [0.25, 0.4, 0.25, 1]
    }
  }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
}

// Word-by-word animation for hero text
const wordAnimation = {
  hidden: { opacity: 0, y: 20, rotateX: 90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.6,
      ease: [0.25, 0.4, 0.25, 1]
    }
  })
}

// Glow pulse animation
const glowPulse = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(0,122,255,0.3)',
      '0 0 40px rgba(0,122,255,0.5)',
      '0 0 20px rgba(0,122,255,0.3)'
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut'
    }
  }
}

// Animated word component
const AnimatedWords = ({ text, className }: { text: string; className?: string }) => {
  const words = text.split(' ')
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={wordAnimation}
          initial="hidden"
          animate="visible"
          className="inline-block mr-[0.25em]"
          style={{ perspective: '1000px' }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Mouse tracking for parallax
  useEffect(() => {
    setIsLoaded(true)
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePosition({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
      {/* Navigation with fade-in animation */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/5"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <div className="max-w-[1800px] mx-auto px-[4%]">
          <div className="flex items-center justify-between h-[72px]">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo-celton.png"
                  alt="Celton Semiconductors"
                  width={280}
                  height={84}
                  className="h-10 md:h-16 w-auto"
                />
              </Link>
            </motion.div>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-11">
              {[
                { href: '/products', label: 'Innovations' },
                { href: '/careers', label: 'Careers' },
                { href: '/contact', label: 'Contact' }
              ].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className="text-[#f5f5f7] hover:text-[#007aff] transition-all text-sm relative group"
                  >
                    {item.label}
                    <motion.span
                      className="absolute -bottom-1 left-0 h-0.5 bg-[#007aff]"
                      initial={{ width: 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.2 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Hamburger Button */}
            <button
              className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <motion.span
                className="w-6 h-0.5 bg-white rounded-full"
                animate={{ rotate: mobileMenuOpen ? 45 : 0, y: mobileMenuOpen ? 8 : 0 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-white rounded-full"
                animate={{ opacity: mobileMenuOpen ? 0 : 1 }}
              />
              <motion.span
                className="w-6 h-0.5 bg-white rounded-full"
                animate={{ rotate: mobileMenuOpen ? -45 : 0, y: mobileMenuOpen ? -8 : 0 }}
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Dropdown */}
      <motion.div
        className="fixed top-[72px] left-0 right-0 z-40 bg-black/95 backdrop-blur-xl border-b border-white/10 md:hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: mobileMenuOpen ? 'auto' : 0,
          opacity: mobileMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <div className="flex flex-col py-4 px-6 gap-4">
          {[
            { href: '/products', label: 'Innovations' },
            { href: '/careers', label: 'Careers' },
            { href: '/contact', label: 'Contact' }
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-[#f5f5f7] hover:text-[#007aff] transition-all text-lg py-2 border-b border-white/10"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Hero Section - Full Height, No Scroll */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-[4%] pt-20 pb-24 md:pt-0 md:pb-0 relative overflow-hidden">
        {/* Animated Background with Parallax */}
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(0,122,255,0.15),transparent),radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(147,51,234,0.1),transparent)] z-[1]"
          style={{
            x: mousePosition.x * 20,
            y: mousePosition.y * 20
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 30 }}
        />

        {/* Apple-style Gradient Mesh */}
        <motion.div
          className="absolute inset-0 opacity-60 z-[1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#007aff]/10 blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-purple-600/10 blur-[100px]" />
        </motion.div>

        {/* Neuron Network Animation */}
        <NeuronBackground />

        {/* Pulsing Orbs with Parallax */}
        <motion.div
          className="absolute -top-[20%] -left-[10%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle,rgba(0,122,255,0.12)_0%,transparent_60%)] z-[1]"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          style={{
            x: mousePosition.x * -30,
            y: mousePosition.y * -30
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.1)_0%,transparent_60%)] z-[1]"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.4, 0.7, 0.4]
          }}
          style={{
            x: mousePosition.x * 25,
            y: mousePosition.y * 25
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />

        <div className="relative z-20 max-w-[1800px] w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-6"
          >
            {/* Intro badge with reveal animation */}
            <motion.div
              variants={scaleIn}
              className="inline-block"
            >
              <motion.p
                className="text-[#007aff] text-[clamp(14px,1.2vw,16px)] tracking-[4px] font-semibold px-6 py-2 rounded-full border border-[#007aff]/20 bg-[#007aff]/5 backdrop-blur-sm"
                whileHover={{ scale: 1.02, borderColor: 'rgba(0,122,255,0.4)' }}
              >
                Introducing the Celton Triad™
              </motion.p>
            </motion.div>

            {/* Main headline with character animation */}
            <motion.h1
              variants={fadeUp}
              className="text-[clamp(32px,8vw,110px)] font-extrabold leading-[1.08] tracking-[1px]"
            >
              <motion.span
                className="bg-gradient-to-b from-white via-white to-[#8b8b8d] bg-clip-text text-transparent inline-block"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Intelligence.
              </motion.span>
              <br />
              <motion.span
                className="bg-gradient-to-b from-white via-[#c0c0c0] to-[#6b6b6d] bg-clip-text text-transparent inline-block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
              >
                Engineered into silicon.
              </motion.span>
            </motion.h1>

            {/* Subheadline with fade */}
            <motion.p
              variants={fadeUp}
              className="text-[clamp(18px,1.6vw,24px)] text-[#86868b] tracking-[2px]"
            >
              <AnimatedWords text="From the atom up. From inception forward." />
            </motion.p>

            {/* Description with staggered reveal */}
            <motion.p
              variants={fadeUp}
              className="text-[clamp(16px,1.4vw,20px)] text-[#a1a1a6] max-w-[1300px] mx-auto leading-relaxed"
            >
              Where AI, deeptech, and VLSI converge, the future of innovation evolves. Intelligence isn&apos;t layered on —
              <br />
              it&apos;s intrinsic to everything we build, from a cognitive learning and a design automation to next-gen energy chips.
            </motion.p>

            {/* CTA buttons with enhanced hover effects */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-5 justify-center pt-6 pb-4"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/products"
                  className="relative px-10 py-4 text-[17px] font-medium rounded-full bg-[#007aff] text-white overflow-hidden group inline-block"
                >
                  {/* Shimmer effect */}
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                    animate={{ x: ['calc(-100%)', 'calc(200%)'] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                  />
                  <span className="relative z-10">Discover The Triad</span>
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="/contact"
                  className="px-10 py-4 text-[17px] font-medium rounded-full bg-white/[0.05] text-[#007aff] border border-[#007aff]/30 hover:bg-[#007aff]/10 hover:border-[#007aff]/50 transition-all inline-block backdrop-blur-sm"
                >
                  Collaborate with Us
                </Link>
              </motion.div>
            </motion.div>

            {/* Tagline with glow effect */}
            <motion.div
              variants={fadeUp}
              className="pt-2"
            >
              <motion.p
                className="text-[clamp(18px,2vw,26px)] text-[#007aff] font-semibold italic"
                animate={{
                  textShadow: [
                    '0 0 20px rgba(0,122,255,0.3)',
                    '0 0 40px rgba(0,122,255,0.5)',
                    '0 0 20px rgba(0,122,255,0.3)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                The future. Built now.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer - Positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 py-6 border-t border-white/[0.05] z-20">
          <div className="max-w-[1800px] mx-auto px-[4%]">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-[#86868b] text-sm">
                © 2026 Celton Semiconductors. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link href="/privacy" className="text-[#86868b] hover:text-[#007aff] text-sm transition-colors">Privacy</Link>
                <Link href="/terms" className="text-[#86868b] hover:text-[#007aff] text-sm transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
