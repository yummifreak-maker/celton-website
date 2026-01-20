'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

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

export default function Products() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-black overflow-x-hidden">
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
                className="h-10 md:h-16 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center gap-11">
              <Link href="/" className="text-[#f5f5f7] hover:text-[#007aff] transition-all text-sm relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007aff] transition-all group-hover:w-full" />
              </Link>
              <Link href="/products" className="text-[#007aff] text-sm relative group">
                Innovations
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#007aff]" />
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
      </nav>

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
            { href: '/', label: 'Home' },
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

      {/* Hero Section */}
      <section className="pt-[100px] pb-[20px] px-[5%] bg-gradient-to-b from-black to-[#0a0a0f] text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-[14px] text-[#86868b] uppercase tracking-[3px] font-semibold mb-5">
            The Celton Triad™
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-[clamp(38px,5vw,68px)] font-bold tracking-[-2px] leading-[1.1] mb-8">
            Three platforms.
            <br />
            One unified vision.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[clamp(19px,2.2vw,26px)] text-[#a1a1a6] max-w-[980px] mx-auto leading-relaxed">
            <span className="font-semibold text-[#d2d2d7]">Powering the semiconductor landscape.</span>
            <br />
            From creating future engineers to accelerating chip design
            <br />
            and enabling energy-efficient silicon.
          </motion.p>
        </motion.div>
      </section>

      {/* Three Platforms Grid */}
      <section className="px-[5%] pt-[40px] pb-[30px] bg-[#0a0a0f] relative">
        {/* Animated Chip Visual (Background) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] opacity-[0.03]">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] bg-gradient-to-br from-[#007aff] to-[#0051d5] rounded-xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[3px] max-w-[1400px] mx-auto bg-gradient-to-br from-[#007aff]/15 to-[#9333ea]/10 p-[3px] rounded-[32px] relative z-10">
          {/* Cognorus Card */}
          <Link href="#cognorus">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="bg-black p-[30px_30px] rounded-[30px] hover:bg-[#0a0a0f] hover:-translate-y-2 transition-all duration-500 cursor-pointer group relative overflow-hidden h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#007aff]/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <motion.div
                  className="mb-4"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Image src="/logo-cognorus.png" alt="Cognorus.ai" width={180} height={90} className="h-[80px] w-auto" />
                </motion.div>
                <h3 className="text-[28px] font-bold text-[#007aff] mb-1">Cognorus.ai™</h3>
                <p className="text-[12px] text-[#86868b] uppercase tracking-[2px] mb-4">Adaptive • Yours™</p>
                <p className="text-[14px] text-[#d2d2d7] leading-relaxed mb-3">
                  Scalable cognitive learning ecosystem that transforms semiconductor education through personalized curricula, experiential learning, and digital twins.
                </p>
                <p className="text-[12px] text-[#86868b] italic pt-2 border-t border-white/[0.08]">
                  For: Global Gen-Z learners, professionals, and career switchers
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Nexarus Card */}
          <Link href="#nexarus">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="bg-black p-[30px_30px] rounded-[30px] hover:bg-[#0a0a0f] hover:-translate-y-2 transition-all duration-500 cursor-pointer group relative overflow-hidden h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#007aff]/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <motion.div
                  className="mb-4"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                >
                  <Image src="/logo-nexarus.png" alt="Nexarus.ai" width={220} height={110} className="h-[100px] w-auto" />
                </motion.div>
                <h3 className="text-[28px] font-bold text-[#007aff] mb-1">Nexarus.ai™</h3>
                <p className="text-[12px] text-[#86868b] uppercase tracking-[2px] mb-4">Prompt-to-Silicon™</p>
                <p className="text-[14px] text-[#d2d2d7] leading-relaxed mb-3">
                  Revolutionary design platform that embeds AI into chip workflows—from architecture to GDS—optimizing efficiency, reliability, and performance at every stage.
                </p>
                <p className="text-[12px] text-[#86868b] italic pt-2 border-t border-white/[0.08]">
                  For: Product and design services companies, startups, and universities
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Helorus Card */}
          <Link href="#helorus">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="bg-black p-[30px_30px] rounded-[30px] hover:bg-[#0a0a0f] hover:-translate-y-2 transition-all duration-500 cursor-pointer group relative overflow-hidden h-full"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#007aff]/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <motion.div
                  className="mb-4"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                >
                  <Image src="/logo-helorus.png" alt="Helorus.ai" width={180} height={90} className="h-[80px] w-auto" />
                </motion.div>
                <h3 className="text-[28px] font-bold text-[#007aff] mb-1">Helorus.ai™</h3>
                <p className="text-[12px] text-[#86868b] uppercase tracking-[2px] mb-4">Power • Perfected™</p>
                <p className="text-[14px] text-[#d2d2d7] leading-relaxed mb-3">
                  Next-generation semiconductor platform revolutionizing power electronics through advanced performance metrics and energy-efficient chip solutions.
                </p>
                <p className="text-[12px] text-[#86868b] italic pt-2 border-t border-white/[0.08]">
                  For: Aerospace, Automotive, power electronics, and energy systems
                </p>
              </div>
            </motion.div>
          </Link>
        </div>
      </section>

      {/* Cognorus Deep Dive */}
      <section id="cognorus" className="min-h-screen py-[80px] px-[5%] bg-black relative overflow-hidden flex items-center">
        {/* DNA Helix Background */}
        <motion.div
          className="absolute top-1/2 -right-[10%] -translate-y-1/2 w-[400px] h-[600px] opacity-[0.03]"
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute left-[30%] w-0.5 h-full bg-gradient-to-b from-transparent via-[#007aff] to-transparent" />
          <div className="absolute right-[30%] w-0.5 h-full bg-gradient-to-b from-transparent via-[#007aff] to-transparent" />
        </motion.div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-2">
              <Image src="/logo-cognorus.png" alt="Cognorus.ai" width={140} height={42} className="h-10 w-auto" />
            </motion.div>
            <motion.span variants={fadeUp} className="inline-block text-[28px] font-bold text-[#007aff] mb-2">
              Cognorus.ai™
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-[clamp(32px,4vw,52px)] font-bold tracking-[-2px] text-[#f5f5f7] mb-4">
              Learn chip design.
              <br />
              Your way.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[16px] text-[#a1a1a6] leading-[1.6] mb-5">
              Not everyone learns the same way. Cognorus.ai™ generates personalized learning paths based on your background, interest, learning style, goals, and objectives - from absolute basics to advanced chip architectures.
            </motion.p>
            <motion.ul variants={fadeUp} className="mb-5">
              {[
                'Personalized curriculum generation',
                'Experiential learning through digital twins',
                'Industry-grade hands-on labs',
                'Market-relevant skill development paths',
                'Global accessibility',
                'Blockchain-verified professional certifications'
              ].map((item, i) => (
                <li key={i} className="text-[15px] text-[#d2d2d7] py-2 pl-7 relative border-b border-white/[0.06]">
                  <span className="absolute left-0 text-[#007aff] font-bold text-[16px]">→</span>
                  {item}
                </li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact?interest=Cognorus.ai - Learning Platform"
                className="inline-block px-8 py-3 text-[15px] font-medium rounded-full bg-[#007aff] text-white shadow-[0_4px_20px_rgba(0,122,255,0.3)] hover:bg-[#0051d5] hover:-translate-y-0.5 transition-all"
              >
                Start Learning
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] rounded-[32px] p-[30px] border border-white/[0.08] min-h-[450px] flex flex-col items-center justify-center relative overflow-hidden"
          >
            <motion.div
              className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(0,122,255,0.2)_0%,transparent_70%)]"
              animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            {/* Cognorus Logo with Animation */}
            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  filter: ['drop-shadow(0 0 30px rgba(0,122,255,0.3))', 'drop-shadow(0 0 60px rgba(0,122,255,0.5))', 'drop-shadow(0 0 30px rgba(0,122,255,0.3))']
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-6"
              >
                <Image src="/logo-cognorus.png" alt="Cognorus.ai" width={480} height={240} className="h-[240px] w-auto" />
              </motion.div>
              <p className="text-[28px] font-bold text-[#007aff]/30 text-center">
                EXPERIENTIAL
                <br />
                LEARNING
              </p>
              <p className="text-[13px] text-[#86868b] mt-3 text-center max-w-[320px]">
                Adaptive learning driven by industry-grade digital twins
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nexarus Deep Dive */}
      <section id="nexarus" className="min-h-screen py-[80px] px-[5%] bg-[#0a0a0f] relative overflow-hidden flex items-center">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] rounded-[32px] p-[30px] border border-white/[0.08] min-h-[450px] flex flex-col items-center justify-center relative overflow-hidden order-2 lg:order-1"
          >
            <motion.div
              className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(0,122,255,0.2)_0%,transparent_70%)]"
              animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            {/* Nexarus Logo with Animation */}
            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  filter: ['drop-shadow(0 0 30px rgba(0,122,255,0.3))', 'drop-shadow(0 0 60px rgba(0,122,255,0.5))', 'drop-shadow(0 0 30px rgba(0,122,255,0.3))']
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="mb-6"
              >
                <Image src="/logo-nexarus.png" alt="Nexarus.ai" width={560} height={280} className="h-[280px] w-auto" />
              </motion.div>
              <p className="text-[28px] font-bold text-[#007aff]/30 text-center">
                AUTOMATED DESIGN ENGINE
              </p>
              <p className="text-[13px] text-[#86868b] mt-3 text-center max-w-[280px]">
                Prompt-to-GDS™ chip design
              </p>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="order-1 lg:order-2"
          >
            <motion.div variants={fadeUp} className="mb-2">
              <Image src="/logo-nexarus.png" alt="Nexarus.ai" width={140} height={42} className="h-10 w-auto" />
            </motion.div>
            <motion.span variants={fadeUp} className="inline-block text-[28px] font-bold text-[#007aff] mb-2">
              Nexarus.ai™
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-[clamp(32px,4vw,52px)] font-bold tracking-[-2px] text-[#f5f5f7] mb-4">
              From Prompt
              <br />
              to Silicon.™
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[16px] text-[#a1a1a6] leading-[1.6] mb-5">
              Describe your chip idea as module levels. Nexarus.ai™ handles the rest—architecture, RTL, verification, physical design, and GDS. Iterate, optimize, and perfect at any stage.
            </motion.p>
            <motion.ul variants={fadeUp} className="mb-5">
              {[
                'Prompt-to-chip™ design automation',
                'Complete RTL generation and verification',
                'Automated physical design workflows',
                'Real-time optimization and tweaking',
                'EDA tool integration (Synopsys, Cadence, Mentor)',
                'GDS output for modules'
              ].map((item, i) => (
                <li key={i} className="text-[15px] text-[#d2d2d7] py-2 pl-7 relative border-b border-white/[0.06]">
                  <span className="absolute left-0 text-[#007aff] font-bold text-[16px]">→</span>
                  {item}
                </li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact?interest=Nexarus.ai - Design Platform"
                className="inline-block px-8 py-3 text-[15px] font-medium rounded-full bg-[#007aff] text-white shadow-[0_4px_20px_rgba(0,122,255,0.3)] hover:bg-[#0051d5] hover:-translate-y-0.5 transition-all"
              >
                Request Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Helorus Deep Dive */}
      <section id="helorus" className="min-h-screen py-[80px] px-[5%] bg-black relative overflow-hidden flex items-center">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-2">
              <Image src="/logo-helorus.png" alt="Helorus.ai" width={140} height={42} className="h-10 w-auto" />
            </motion.div>
            <motion.span variants={fadeUp} className="inline-block text-[28px] font-bold text-[#007aff] mb-2">
              Helorus.ai™
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-[clamp(32px,4vw,52px)] font-bold tracking-[-2px] text-[#f5f5f7] mb-4">
              Silicon that
              <br />
              thinks ahead.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[16px] text-[#a1a1a6] leading-[1.6] mb-5">
              Helorus powers Celton&apos;s internal chip development, creating next-generation power electronics silicon with AI-driven performance optimization. Where innovation meets energy efficiency.
            </motion.p>
            <motion.ul variants={fadeUp} className="mb-5">
              {[
                'AI-driven performance metrics',
                'Power electronics optimization',
                'Energy-efficient chip solutions',
                'Next-gen semiconductor innovation',
                'Advanced thermal management',
                'Sustainable silicon design'
              ].map((item, i) => (
                <li key={i} className="text-[15px] text-[#d2d2d7] py-2 pl-7 relative border-b border-white/[0.06]">
                  <span className="absolute left-0 text-[#007aff] font-bold text-[16px]">→</span>
                  {item}
                </li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact?interest=Helorus.ai - Chip Development"
                className="inline-block px-8 py-3 text-[15px] font-medium rounded-full bg-[#007aff] text-white shadow-[0_4px_20px_rgba(0,122,255,0.3)] hover:bg-[#0051d5] hover:-translate-y-0.5 transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] rounded-[32px] p-[30px] border border-white/[0.08] min-h-[450px] flex flex-col items-center justify-center relative overflow-hidden"
          >
            <motion.div
              className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(0,122,255,0.2)_0%,transparent_70%)]"
              animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            {/* Helorus Logo with Animation */}
            <div className="relative z-10 flex flex-col items-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  filter: ['drop-shadow(0 0 30px rgba(0,122,255,0.3))', 'drop-shadow(0 0 60px rgba(0,122,255,0.5))', 'drop-shadow(0 0 30px rgba(0,122,255,0.3))']
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                className="mb-6"
              >
                <Image src="/logo-helorus.png" alt="Helorus.ai" width={480} height={240} className="h-[240px] w-auto" />
              </motion.div>
              <p className="text-[28px] font-bold text-[#007aff]/30 text-center">
                POWER PERFECTED™
              </p>
              <p className="text-[13px] text-[#86868b] mt-3 text-center max-w-[320px]">
                Next-gen energy-efficient silicon for aerospace, automotive, and power electronics
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-[140px] px-[5%] text-center bg-[radial-gradient(ellipse_at_center,rgba(0,122,255,0.08)_0%,black_70%)]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-[clamp(42px,6vw,76px)] font-bold tracking-[-2px] text-[#f5f5f7] mb-6">
            The future is architected.
          </motion.h2>
          <motion.p variants={fadeUp} className="text-[clamp(18px,2vw,24px)] text-[#a1a1a6] max-w-[800px] mx-auto mb-12">
            Join us as we build the platforms that will define the next era of semiconductor innovation.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-5 justify-center">
            <Link
              href="/contact"
              className="px-10 py-4 text-[17px] font-medium rounded-full bg-[#007aff] text-white shadow-[0_4px_20px_rgba(0,122,255,0.3)] hover:bg-[#0051d5] hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(0,122,255,0.4)] transition-all"
            >
              Collaborate with Celton
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/[0.05] bg-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <p className="text-[#f5f5f7] font-medium mb-4">The Triad</p>
              <ul className="space-y-3">
                <li><Link href="/products#cognorus" className="text-[#86868b] hover:text-[#007aff] transition-colors">Cognorus.ai™</Link></li>
                <li><Link href="/products#nexarus" className="text-[#86868b] hover:text-[#007aff] transition-colors">Nexarus.ai™</Link></li>
                <li><Link href="/products#helorus" className="text-[#86868b] hover:text-[#007aff] transition-colors">Helorus.ai™</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[#f5f5f7] font-medium mb-4">Company</p>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-[#86868b] hover:text-[#007aff] transition-colors">About</Link></li>
                <li><Link href="/careers" className="text-[#86868b] hover:text-[#007aff] transition-colors">Careers</Link></li>
                <li><Link href="/contact" className="text-[#86868b] hover:text-[#007aff] transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[#f5f5f7] font-medium mb-4">Legal</p>
              <ul className="space-y-3">
                <li><Link href="/privacy" className="text-[#86868b] hover:text-[#007aff] transition-colors">Privacy</Link></li>
                <li><Link href="/terms" className="text-[#86868b] hover:text-[#007aff] transition-colors">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />
          <div className="text-center">
            <p className="text-[#86868b] text-sm">
              © 2026 Celton Semiconductors. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  )
}
