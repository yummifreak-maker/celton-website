'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

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

const openRoles = [
  {
    title: 'Prompt Engineer',
    team: 'AI & Intelligence',
    location: 'Hybrid',
    type: 'Full-time / Part-time',
    description: 'Craft intelligent AI interactions for chip design workflows. Shape how engineers communicate with our AI-powered platforms.'
  },
  {
    title: 'DeepTech Research Engineer',
    team: 'Core Engineering',
    location: 'Hybrid',
    type: 'Full-time / Part-time',
    description: 'Push the boundaries of what silicon can do. Work on next-gen architectures that don\'t exist in textbooks yet.'
  },
  {
    title: 'Machine Learning Architect',
    team: 'AI & Intelligence',
    location: 'Hybrid',
    type: 'Full-time / Part-time',
    description: 'Build the AI that builds chips. Design intelligent systems that accelerate semiconductor design from months to days.'
  },
  {
    title: 'UI/UX Designer',
    team: 'Product Design',
    location: 'Hybrid',
    type: 'Full-time / Part-time',
    description: 'Make complexity feel simple. Transform dense technical workflows into experiences that engineers actually love using.'
  },
  {
    title: 'VLSI Frontend Engineer',
    team: 'Core Engineering',
    location: 'Hybrid',
    type: 'Full-time / Part-time',
    description: 'Design RTL architectures and drive synthesis optimization. Build the digital logic that powers next-gen chips.'
  },
  {
    title: 'VLSI Backend Engineer',
    team: 'Core Engineering',
    location: 'Hybrid',
    type: 'Full-time / Part-time',
    description: 'Master physical design, timing closure, and floorplanning. Turn RTL into manufacturable silicon.'
  },
  {
    title: 'VLSI DFT Engineer',
    team: 'Core Engineering',
    location: 'Hybrid',
    type: 'Full-time / Part-time',
    description: 'Design for testability and reliability. Ensure our chips meet the highest quality standards from day one.'
  },
  {
    title: 'Experiential Learning Designer',
    team: 'Cognorus',
    location: 'Hybrid',
    type: 'Full-time / Part-time',
    description: 'Reinvent how the world learns semiconductors. Design adaptive, AI-powered learning journeys that feel nothing like traditional education.'
  },
  {
    title: 'Growth & Marketing Lead',
    team: 'Marketing',
    location: 'Hybrid',
    type: 'Full-time / Part-time',
    description: 'Tell the story of silicon\'s future. Build a brand that resonates with engineers, institutions, and enterprises worldwide.'
  }
]

export default function Careers() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <main className="min-h-screen bg-celton-black overflow-x-hidden">
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
              <Link href="/products" className="text-[#f5f5f7] hover:text-[#007aff] transition-all text-sm relative group">
                Innovations
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007aff] transition-all group-hover:w-full" />
              </Link>
              <Link href="/careers" className="text-[#007aff] text-sm relative group">
                Careers
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#007aff]" />
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

      {/* Hero */}
      <section className="pt-28 pb-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-celton-dark/50 to-celton-black" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl lg:text-7xl font-semibold text-celton-light mb-6 leading-tight">
              We don't hire résumés.
              <br />
              <span className="text-celton-accent">We hire restless minds.</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg md:text-xl text-celton-silver leading-relaxed max-w-3xl mx-auto">
              Degrees and GPAs are all great. But we hire for something else.
              <br />
              If you've ever felt you were made for more than a traditional path, you're home.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-6 relative">
        <div className="max-w-[1400px] mx-auto px-[5%]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-16 items-center"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-semibold text-celton-light mb-5">
                Credentials open doors.
                <br />
                <span className="text-celton-silver">Curiosity builds the future.</span>
              </h2>
              <p className="text-celton-silver text-base md:text-lg leading-relaxed">
                We're looking for the ones who don't wait for permission to innovate, who taught themselves Verilog at 2 AM and the linguists who treat a prompt like a work of art. The designers who can't stop tweaking a pixel until it breathes, and the marketers who know that deep tech isn't just hardware—it's the pulse of the future. Whether you're mapping billions of transistors or refining the soul of an algorithm, you don't just work here. You build the things the world hasn't dared to imagine yet.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="grid grid-cols-3 gap-3">
              {[
                { label: 'Prompt Engineering', desc: 'Linguists who treat prompts like art' },
                { label: 'AI & Intelligence', desc: 'What textbooks haven\'t written yet' },
                { label: 'Machine Learning', desc: 'Teaching machines to think in silicon' },
                { label: 'UI/UX', desc: 'Tweaking pixels until they breathe' },
                { label: 'VLSI Frontend', desc: 'Where logic meets obsession' },
                { label: 'VLSI Backend', desc: 'Mapping billions of transistors' },
                { label: 'VLSI DFT', desc: 'Because silicon doesn\'t get second chances' },
                { label: 'Product Design', desc: 'Unlearning how the world learns' },
                { label: 'Marketing', desc: 'Turning niche into next big thing' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2 p-3 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-celton-accent/20 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-celton-accent mt-1.5 flex-shrink-0" />
                  <div>
                    <p className="text-celton-light font-medium text-sm">{item.label}</p>
                    <p className="text-celton-silver text-xs">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-celton-dark/30 to-transparent" />
        <div className="relative max-w-[1400px] mx-auto px-[5%]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-5"
          >
            <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-semibold text-celton-light">
              What we value
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                title: 'Relentless Curiosity',
                desc: 'You don\'t wait for permission to learn. You dive in, break things, figure them out.'
              },
              {
                title: 'Builder\'s Mentality',
                desc: 'Ideas are great. Shipped products are better. You care about impact, not just concepts.'
              },
              {
                title: 'No Ego, All Growth',
                desc: 'You\'re not here to prove you\'re the smartest. You\'re here to learn, contribute, and evolve.'
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="card-premium p-6 text-center hover:border-celton-accent/20 transition-colors"
              >
                <p className="text-celton-light text-lg font-medium mb-3">{value.title}</p>
                <p className="text-celton-silver text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-celton-light mb-4">
              Open Roles
            </motion.h2>
            <motion.p variants={fadeUp} className="text-celton-silver">
              Find where you fit. Or tell us where you should.
            </motion.p>
          </motion.div>

          <div className="space-y-4">
            {openRoles.map((role, i) => (
              <motion.a
                key={i}
                href={`mailto:careers@celtonsemi.com?subject=Application for ${role.title}&body=Hi Celton Team,%0D%0A%0D%0AI am interested in the ${role.title} position.%0D%0A%0D%0A[Please attach your resume and include a brief introduction]`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className="group block p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:border-celton-accent/30 transition-all cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-celton-light text-lg font-medium mb-1 group-hover:text-celton-accent transition-colors">
                      {role.title}
                    </h3>
                    <p className="text-celton-silver text-sm mb-2">{role.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-3 py-1 rounded-full bg-celton-accent/10 text-celton-accent">
                        {role.team}
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-celton-silver">
                        {role.location}
                      </span>
                      <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-celton-silver">
                        {role.type}
                      </span>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="text-celton-accent text-sm group-hover:underline">
                      Apply →
                    </span>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold text-celton-light mb-6">
              Don't see your role?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-celton-silver mb-10">
              Exceptional talent always has a home here. If you're ready to redefine silicon, reach out.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact?interest=Career+Opportunities" className="btn-primary">
                Get in Touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-celton-silver/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-celton-silver text-sm">
              © 2026 Celton Semiconductors. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-celton-silver hover:text-celton-light text-sm transition-colors">Privacy</Link>
              <Link href="/terms" className="text-celton-silver hover:text-celton-light text-sm transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
