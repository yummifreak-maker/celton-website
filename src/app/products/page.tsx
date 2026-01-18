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

export default function Products() {
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
              <Link href="/products" className="text-[#007aff] text-sm relative group">
                The Celton Triad
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#007aff]" />
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
      <section className="pt-[140px] pb-[100px] px-[5%] bg-gradient-to-b from-black to-[#0a0a0f] text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          <motion.p variants={fadeUp} className="text-[14px] text-[#86868b] uppercase tracking-[3px] font-semibold mb-5">
            The Celton Triad
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-[clamp(38px,5vw,68px)] font-bold tracking-[-2px] leading-[1.1] mb-8">
            Three platforms.
            <br />
            One unified vision.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[clamp(19px,2.2vw,26px)] text-[#a1a1a6] max-w-[980px] mx-auto leading-relaxed">
            AI and VLSI fused at the deepest level.
            Technology that learns, adapts, and evolves—architected into every stage of semiconductor creation.
          </motion.p>
        </motion.div>
      </section>

      {/* Three Platforms Grid */}
      <section className="px-[5%] pb-[140px] bg-[#0a0a0f] relative">
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
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="bg-black p-[65px_45px] rounded-[30px] hover:bg-[#0a0a0f] hover:-translate-y-2 transition-all duration-500 cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#007aff]/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <motion.div
                className="mb-7"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Image src="/logo-cognorus.png" alt="Cognorus.ai" width={140} height={70} className="h-[70px] w-auto" />
              </motion.div>
              <h3 className="text-[32px] font-bold text-[#007aff] mb-2">Cognorus.ai</h3>
              <p className="text-[13px] text-[#86868b] uppercase tracking-[2px] mb-5">Adaptive • Yours</p>
              <p className="text-[17px] text-[#d2d2d7] leading-relaxed mb-6">
                Scalable cognitive learning ecosystem that transforms semiconductor education through AI-powered personalized curricula, experiential learning, and digital twins.
              </p>
              <p className="text-[14px] text-[#86868b] italic pt-5 border-t border-white/[0.08]">
                For: Students, professionals, career switchers, global Gen-Z learners
              </p>
            </div>
          </motion.div>

          {/* Nexarus Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.1 }}
            className="bg-black p-[65px_45px] rounded-[30px] hover:bg-[#0a0a0f] hover:-translate-y-2 transition-all duration-500 cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#007aff]/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <motion.div
                className="mb-7"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <Image src="/logo-nexarus.png" alt="Nexarus.ai" width={140} height={70} className="h-[70px] w-auto" />
              </motion.div>
              <h3 className="text-[32px] font-bold text-[#007aff] mb-2">Nexarus.ai</h3>
              <p className="text-[13px] text-[#86868b] uppercase tracking-[2px] mb-5">Designed to Flow</p>
              <p className="text-[17px] text-[#d2d2d7] leading-relaxed mb-6">
                Revolutionary design platform that embeds AI into chip workflows—from architecture to GDS—optimizing efficiency, reliability, and performance at every stage.
              </p>
              <p className="text-[14px] text-[#86868b] italic pt-5 border-t border-white/[0.08]">
                For: Product companies, design services, innovative startups, universities
              </p>
            </div>
          </motion.div>

          {/* Helorus Card */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="bg-black p-[65px_45px] rounded-[30px] hover:bg-[#0a0a0f] hover:-translate-y-2 transition-all duration-500 cursor-pointer group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#007aff]/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <motion.div
                className="mb-7"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                <Image src="/logo-helorus.png" alt="Helorus.ai" width={140} height={70} className="h-[70px] w-auto" />
              </motion.div>
              <h3 className="text-[32px] font-bold text-[#007aff] mb-2">Helorus.ai</h3>
              <p className="text-[13px] text-[#86868b] uppercase tracking-[2px] mb-5">Power • Perfected</p>
              <p className="text-[17px] text-[#d2d2d7] leading-relaxed mb-6">
                Next-generation semiconductor platform revolutionizing power electronics through advanced AI-driven performance metrics and energy-efficient chip solutions.
              </p>
              <p className="text-[14px] text-[#86868b] italic pt-5 border-t border-white/[0.08]">
                For: Power electronics, energy systems, next-gen semiconductors
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cognorus Deep Dive */}
      <section id="cognorus" className="py-[140px] px-[5%] bg-black relative overflow-hidden">
        {/* DNA Helix Background */}
        <motion.div
          className="absolute top-1/2 -right-[10%] -translate-y-1/2 w-[400px] h-[600px] opacity-[0.03]"
          animate={{ rotateY: [0, 360] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute left-[30%] w-0.5 h-full bg-gradient-to-b from-transparent via-[#007aff] to-transparent" />
          <div className="absolute right-[30%] w-0.5 h-full bg-gradient-to-b from-transparent via-[#007aff] to-transparent" />
        </motion.div>

        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-4">
              <Image src="/logo-cognorus.png" alt="Cognorus.ai" width={180} height={54} className="h-12 w-auto" />
            </motion.div>
            <motion.span variants={fadeUp} className="inline-block text-[32px] font-bold text-[#007aff] mb-4">
              Cognorus.ai
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-[clamp(40px,5vw,64px)] font-bold tracking-[-2px] text-[#f5f5f7] mb-6">
              Learn semiconductors
              <br />
              the way you think.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[19px] text-[#a1a1a6] leading-[1.7] mb-9">
              Not everyone learns the same way. Cognorus.ai generates personalized learning paths based on your background, goals, and learning style—from absolute basics to advanced chip architectures.
            </motion.p>
            <motion.ul variants={fadeUp} className="space-y-0 mb-8">
              {[
                'AI-powered personalized curriculum generation',
                'Experiential learning through digital twins',
                'Hands-on labs from basics to advanced designs',
                'Career-focused skill development paths',
                'Global accessibility for Gen-Z learners',
                'Professional certifications and industry recognition'
              ].map((item, i) => (
                <li key={i} className="text-[17px] text-[#d2d2d7] py-4 pl-9 relative border-b border-white/[0.06]">
                  <span className="absolute left-0 text-[#007aff] font-bold text-[20px]">→</span>
                  {item}
                </li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 text-[17px] font-medium rounded-full bg-[#007aff] text-white shadow-[0_4px_20px_rgba(0,122,255,0.3)] hover:bg-[#0051d5] hover:-translate-y-0.5 transition-all"
              >
                Start Learning
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] rounded-[32px] p-[60px] border border-white/[0.08] min-h-[500px] flex items-center justify-center relative overflow-hidden"
          >
            <motion.div
              className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(0,122,255,0.2)_0%,transparent_70%)]"
              animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <p className="text-[48px] font-bold text-[#007aff]/15 text-center relative z-10">
              EXPERIENTIAL
              <br />
              LEARNING
            </p>
          </motion.div>
        </div>
      </section>

      {/* Nexarus Deep Dive */}
      <section id="nexarus" className="py-[140px] px-[5%] bg-[#0a0a0f] relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] rounded-[32px] p-[60px] border border-white/[0.08] min-h-[500px] flex items-center justify-center relative overflow-hidden order-2 lg:order-1"
          >
            <motion.div
              className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(0,122,255,0.2)_0%,transparent_70%)]"
              animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <p className="text-[48px] font-bold text-[#007aff]/15 text-center relative z-10">
              DESIGN
              <br />
              AUTOMATION
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="order-1 lg:order-2"
          >
            <motion.div variants={fadeUp} className="mb-4">
              <Image src="/logo-nexarus.png" alt="Nexarus.ai" width={180} height={54} className="h-12 w-auto" />
            </motion.div>
            <motion.span variants={fadeUp} className="inline-block text-[32px] font-bold text-[#007aff] mb-4">
              Nexarus.ai
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-[clamp(40px,5vw,64px)] font-bold tracking-[-2px] text-[#f5f5f7] mb-6">
              From concept
              <br />
              to silicon.
              <br />
              In hours.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[19px] text-[#a1a1a6] leading-[1.7] mb-9">
              Describe your chip idea. Nexarus.ai handles the rest—architecture, RTL, verification, physical design, and GDS. Iterate, optimize, and perfect at any stage.
            </motion.p>
            <motion.ul variants={fadeUp} className="space-y-0 mb-8">
              {[
                'Prompt-to-chip design automation',
                'Complete RTL generation and verification',
                'Automated physical design workflows',
                'Real-time optimization and tweaking',
                'EDA tool integration (Synopsys, Cadence, Mentor)',
                'Foundry-ready GDS output'
              ].map((item, i) => (
                <li key={i} className="text-[17px] text-[#d2d2d7] py-4 pl-9 relative border-b border-white/[0.06]">
                  <span className="absolute left-0 text-[#007aff] font-bold text-[20px]">→</span>
                  {item}
                </li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 text-[17px] font-medium rounded-full bg-[#007aff] text-white shadow-[0_4px_20px_rgba(0,122,255,0.3)] hover:bg-[#0051d5] hover:-translate-y-0.5 transition-all"
              >
                Request Demo
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Helorus Deep Dive */}
      <section id="helorus" className="py-[140px] px-[5%] bg-black relative overflow-hidden">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="mb-4">
              <Image src="/logo-helorus.png" alt="Helorus.ai" width={180} height={54} className="h-12 w-auto" />
            </motion.div>
            <motion.span variants={fadeUp} className="inline-block text-[32px] font-bold text-[#007aff] mb-4">
              Helorus.ai
            </motion.span>
            <motion.h2 variants={fadeUp} className="text-[clamp(40px,5vw,64px)] font-bold tracking-[-2px] text-[#f5f5f7] mb-6">
              Silicon that
              <br />
              thinks ahead.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-[19px] text-[#a1a1a6] leading-[1.7] mb-9">
              Helorus powers Celton&apos;s internal chip development, creating next-generation power electronics silicon with AI-driven performance optimization. Where innovation meets energy efficiency.
            </motion.p>
            <motion.ul variants={fadeUp} className="space-y-0 mb-8">
              {[
                'AI-driven performance metrics',
                'Power electronics optimization',
                'Energy-efficient chip solutions',
                'Next-gen semiconductor innovation',
                'Advanced thermal management',
                'Sustainable silicon design'
              ].map((item, i) => (
                <li key={i} className="text-[17px] text-[#d2d2d7] py-4 pl-9 relative border-b border-white/[0.06]">
                  <span className="absolute left-0 text-[#007aff] font-bold text-[20px]">→</span>
                  {item}
                </li>
              ))}
            </motion.ul>
            <motion.div variants={fadeUp}>
              <Link
                href="/contact"
                className="inline-block px-10 py-4 text-[17px] font-medium rounded-full bg-[#007aff] text-white shadow-[0_4px_20px_rgba(0,122,255,0.3)] hover:bg-[#0051d5] hover:-translate-y-0.5 transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#0a0a0f] to-[#1a1a2e] rounded-[32px] p-[60px] border border-white/[0.08] min-h-[500px] flex items-center justify-center relative overflow-hidden"
          >
            <motion.div
              className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(0,122,255,0.2)_0%,transparent_70%)]"
              animate={{ x: [0, 30, 0], y: [0, 30, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
            <p className="text-[48px] font-bold text-[#007aff]/15 text-center relative z-10">
              POWER
              <br />
              PERFECTED
            </p>
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
              Partner with Celton
            </Link>
            <Link
              href="/about"
              className="px-10 py-4 text-[17px] font-medium rounded-full bg-white/[0.08] text-[#007aff] border border-[#007aff]/30 hover:bg-[#007aff]/15 hover:border-[#007aff]/60 hover:-translate-y-0.5 transition-all"
            >
              About Us
            </Link>
          </motion.div>
        </motion.div>
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
