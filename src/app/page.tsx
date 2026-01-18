'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

// Animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

export default function Home() {
  return (
    <main className="h-screen bg-black overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-[6%]">
          <div className="flex items-center justify-between h-[72px]">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-celton.png"
                alt="Celton Semiconductors"
                width={280}
                height={84}
                className="h-16 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center gap-11">
              <Link href="/products" className="text-[#f5f5f7] hover:text-[#007aff] transition-all text-sm relative group">
                Innovations
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007aff] transition-all group-hover:w-full" />
              </Link>
              <Link href="/about" className="text-[#f5f5f7] hover:text-[#007aff] transition-all text-sm relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007aff] transition-all group-hover:w-full" />
              </Link>
              <Link href="/careers" className="text-[#f5f5f7] hover:text-[#007aff] transition-all text-sm relative group">
                Careers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007aff] transition-all group-hover:w-full" />
              </Link>
              <Link href="/contact" className="text-[#f5f5f7] hover:text-[#007aff] transition-all text-sm relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007aff] transition-all group-hover:w-full" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full Height, No Scroll */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-[6%] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_40%,rgba(0,122,255,0.15),transparent),radial-gradient(ellipse_60%_40%_at_80%_60%,rgba(147,51,234,0.1),transparent)]" />

        {/* Circuit Lines Animation */}
        <div className="absolute inset-0 opacity-[0.03]">
          <motion.div
            className="absolute top-[20%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#007aff] to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="absolute top-[50%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#007aff] to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: 2 }}
          />
          <motion.div
            className="absolute top-[80%] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#007aff] to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: 4 }}
          />
        </div>

        {/* Floating Particles */}
        <motion.div
          className="absolute top-[30%] left-[20%] w-1 h-1 bg-[#007aff] rounded-full"
          animate={{ y: [0, -30, 0], opacity: [0, 0.6, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-[60%] left-[70%] w-1 h-1 bg-[#007aff] rounded-full"
          animate={{ y: [0, -30, 0], opacity: [0, 0.6, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 1.5 }}
        />
        <motion.div
          className="absolute top-[40%] left-[80%] w-1 h-1 bg-[#007aff] rounded-full"
          animate={{ y: [0, -30, 0], opacity: [0, 0.6, 0], scale: [1, 1.5, 1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 3 }}
        />

        {/* Pulsing Orbs */}
        <motion.div
          className="absolute -top-[20%] -left-[10%] w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle,rgba(0,122,255,0.1)_0%,transparent_70%)]"
          animate={{ scale: [1, 1.3, 1], x: [0, 20, 0], y: [0, 20, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-[20%] -right-[10%] w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(147,51,234,0.08)_0%,transparent_70%)]"
          animate={{ scale: [1, 1.3, 1], x: [0, -20, 0], y: [0, -20, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 12, repeat: Infinity, direction: 'reverse' }}
        />

        <div className="relative z-10 max-w-[1400px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-6"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#007aff] text-[clamp(14px,1.2vw,16px)] tracking-[4px] font-semibold"
            >
              Introducing the Celton Triad
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-[clamp(52px,8vw,110px)] font-extrabold leading-[1.08] tracking-[1px] bg-gradient-to-b from-white to-[#8b8b8d] bg-clip-text text-transparent"
            >
              Intelligence.
              <br />
              Engineered into silicon.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[clamp(16px,1.4vw,20px)] text-[#a1a1a6] max-w-[1100px] mx-auto leading-relaxed"
            >
              Where AI, deeptech, and VLSI converge, the future of silicon evolves. Intelligence isn&apos;t layered on —
              <br />
              it&apos;s intrinsic to everything we build, from a cognitive learning platform and a silicon design engine to next-gen energy-efficient chips.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-5 justify-center pt-6 pb-4"
            >
              <Link
                href="/products"
                className="px-10 py-4 text-[17px] font-medium rounded-full bg-[#007aff] text-white shadow-[0_4px_20px_rgba(0,122,255,0.3)] hover:bg-[#0051d5] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,122,255,0.4)] transition-all"
              >
                Discover The Triad
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 text-[17px] font-medium rounded-full bg-white/[0.08] text-[#007aff] border border-[#007aff]/30 hover:bg-[#007aff]/15 hover:border-[#007aff]/60 hover:-translate-y-0.5 transition-all"
              >
                Collaborate with Us
              </Link>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-[clamp(18px,2vw,26px)] text-[#007aff] font-semibold italic pt-2"
            >
              The future. Built at silicon speed.
            </motion.p>
          </motion.div>
        </div>

        {/* Footer - Positioned at bottom */}
        <div className="absolute bottom-0 left-0 right-0 py-6 border-t border-white/[0.05]">
          <div className="max-w-[1400px] mx-auto px-[6%]">
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
