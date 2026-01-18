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
    <main className="min-h-screen bg-black overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-[6%]">
          <div className="flex items-center justify-between h-[72px]">
            <Link href="/" className="flex flex-col">
              <Image
                src="/logo-celton.png"
                alt="Celton Semiconductors"
                width={160}
                height={48}
                className="h-10 w-auto"
              />
              <span className="text-[11px] text-[#86868b] tracking-[2px] uppercase mt-0.5">
                Architecting the Future
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-11">
              <Link href="/products" className="text-[#f5f5f7] hover:text-[#007aff] transition-all text-sm relative group">
                The Celton Triad
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007aff] transition-all group-hover:w-full" />
              </Link>
              <Link href="/about" className="text-[#f5f5f7] hover:text-[#007aff] transition-all text-sm relative group">
                About
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

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center pt-[140px] pb-[100px] px-[5%] relative overflow-hidden">
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

        <div className="relative z-10 max-w-[1200px]">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-[#007aff] text-[clamp(13px,1.2vw,16px)] uppercase tracking-[4px] font-semibold"
            >
              Introducing The Celton Triad
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-[clamp(52px,8vw,110px)] font-extrabold leading-[0.95] tracking-[-4px] bg-gradient-to-b from-white to-[#8b8b8d] bg-clip-text text-transparent"
            >
              Architected
              <br />
              intelligence
              <br />
              into silicon.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[clamp(22px,2.8vw,36px)] text-[#f5f5f7] font-semibold leading-[1.3]"
            >
              From the atom up. From inception forward.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-[clamp(17px,1.6vw,21px)] text-[#a1a1a6] max-w-[950px] mx-auto leading-relaxed"
            >
              Where <strong className="text-[#007aff] font-semibold">AI</strong>, <strong className="text-[#007aff] font-semibold">deep technology</strong>, and <strong className="text-[#007aff] font-semibold">VLSI</strong> converge to redefine semiconductor innovation. Cognition isn&apos;t added—it&apos;s engineered into every layer, every workflow, every chip we create.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap gap-5 justify-center pt-4"
            >
              <Link
                href="/products"
                className="px-10 py-4 text-[17px] font-medium rounded-full bg-[#007aff] text-white shadow-[0_4px_20px_rgba(0,122,255,0.3)] hover:bg-[#0051d5] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,122,255,0.4)] transition-all"
              >
                Explore The Triad
              </Link>
              <Link
                href="/contact"
                className="px-10 py-4 text-[17px] font-medium rounded-full bg-white/[0.08] text-[#007aff] border border-[#007aff]/30 hover:bg-[#007aff]/15 hover:border-[#007aff]/60 hover:-translate-y-0.5 transition-all"
              >
                Partner with Us
              </Link>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-[clamp(19px,2.2vw,28px)] text-[#007aff] font-semibold italic pt-4"
            >
              This is the future at silicon speed.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/[0.05] bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex flex-col mb-6">
                <Image
                  src="/logo-celton.png"
                  alt="Celton Semiconductors"
                  width={160}
                  height={48}
                  className="h-10 w-auto"
                />
                <span className="text-[11px] text-[#86868b] tracking-[2px] uppercase mt-1">
                  Architecting the Future
                </span>
              </div>
              <p className="text-[#86868b] max-w-md leading-relaxed">
                AI and VLSI converge to redefine semiconductor innovation—architected into every layer, every workflow, every chip we create.
              </p>
            </div>
            <div>
              <p className="text-[#f5f5f7] font-medium mb-4">The Triad</p>
              <ul className="space-y-3">
                <li><Link href="/products#cognorus" className="text-[#86868b] hover:text-[#007aff] transition-colors">Cognorus.ai</Link></li>
                <li><Link href="/products#nexarus" className="text-[#86868b] hover:text-[#007aff] transition-colors">Nexarus.ai</Link></li>
                <li><Link href="/products#helorus" className="text-[#86868b] hover:text-[#007aff] transition-colors">Helorus.ai</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[#f5f5f7] font-medium mb-4">Company</p>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-[#86868b] hover:text-[#007aff] transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-[#86868b] hover:text-[#007aff] transition-colors">Contact</Link></li>
                <li><Link href="/careers" className="text-[#86868b] hover:text-[#007aff] transition-colors">Careers</Link></li>
              </ul>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#86868b] text-sm">
              © 2025 Celton Semiconductors. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-[#86868b] hover:text-[#007aff] text-sm transition-colors">Privacy</Link>
              <Link href="/terms" className="text-[#86868b] hover:text-[#007aff] text-sm transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
