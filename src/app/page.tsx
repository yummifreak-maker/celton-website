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
    <main className="min-h-screen bg-celton-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-celton-black/80 backdrop-blur-xl border-b border-celton-silver/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo-celton.png"
                alt="Celton Semiconductors"
                width={140}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#convergence" className="text-celton-silver hover:text-celton-light transition-colors text-sm">
                The Convergence
              </Link>
              <Link href="#cognorus" className="text-celton-silver hover:text-celton-light transition-colors text-sm">
                Cognorus
              </Link>
              <Link href="#nexarus" className="text-celton-silver hover:text-celton-light transition-colors text-sm">
                Nexarus
              </Link>
              <Link href="#helorus" className="text-celton-silver hover:text-celton-light transition-colors text-sm">
                Helorus
              </Link>
              <Link href="/about" className="text-celton-silver hover:text-celton-light transition-colors text-sm">
                About
              </Link>
            </div>
            <Link href="/contact" className="btn-secondary text-sm py-2 px-5">
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-celton-black via-celton-dark to-celton-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(41,151,255,0.08),transparent_70%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="space-y-8"
          >
            <motion.p
              variants={fadeUp}
              className="text-celton-silver text-lg tracking-wide uppercase"
            >
              Celton Semiconductors
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-celton-light leading-[1.1]"
            >
              Intelligence
              <br />
              <span className="text-gradient">at the Core</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl text-celton-silver max-w-3xl mx-auto leading-relaxed"
            >
              Where VLSI and AI converge to create chips that learn, adapt, and optimize in real time.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <Link href="#convergence" className="btn-primary">
                Explore the Convergence
              </Link>
              <Link href="/about" className="btn-secondary">
                Our Vision
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-celton-silver/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-celton-silver/50 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* The Celton Convergence */}
      <section id="convergence" className="section-premium relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="text-center mb-20"
          >
            <motion.p variants={fadeUp} className="text-celton-accent text-sm uppercase tracking-widest mb-4">
              The Foundation
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl font-semibold text-celton-light mb-6">
              The Celton Convergence
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-celton-silver max-w-3xl mx-auto">
              Three platforms. One unified intelligence. Unlike others who treat AI as an afterthought,
              Celton integrates intelligence at every level of the semiconductor ecosystem.
            </motion.p>
          </motion.div>

          {/* Convergence Visual */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Cognorus Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="card-premium p-8 lg:p-10 group hover:border-celton-accent/30 transition-all duration-500"
            >
              <div className="mb-8">
                <Image
                  src="/logo-cognorus.png"
                  alt="Cognorus.ai"
                  width={160}
                  height={48}
                  className="h-10 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-celton-accent text-sm uppercase tracking-wider mb-3">Learn</p>
              <h3 className="text-2xl font-semibold text-celton-light mb-4">
                Cognitive Learning Platform
              </h3>
              <p className="text-celton-silver leading-relaxed mb-6">
                Personalized semiconductor education that adapts to you. From fundamentals to advanced chip design,
                powered by AI that understands how you learn.
              </p>
              <Link
                href="#cognorus"
                className="inline-flex items-center text-celton-accent hover:text-celton-light transition-colors group/link"
              >
                <span>Discover Cognorus</span>
                <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* Nexarus Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="card-premium p-8 lg:p-10 group hover:border-celton-accent/30 transition-all duration-500"
            >
              <div className="mb-8">
                <Image
                  src="/logo-nexarus.png"
                  alt="Nexarus.ai"
                  width={160}
                  height={48}
                  className="h-10 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-celton-accent text-sm uppercase tracking-wider mb-3">Design</p>
              <h3 className="text-2xl font-semibold text-celton-light mb-4">
                Design Intelligence Platform
              </h3>
              <p className="text-celton-silver leading-relaxed mb-6">
                From concept to GDS in one intelligent flow. Describe your chip, and let AI architect
                the methodology, RTL, verification, and physical design.
              </p>
              <Link
                href="#nexarus"
                className="inline-flex items-center text-celton-accent hover:text-celton-light transition-colors group/link"
              >
                <span>Discover Nexarus</span>
                <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>

            {/* Helorus Card */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.2 }}
              className="card-premium p-8 lg:p-10 group hover:border-celton-accent/30 transition-all duration-500"
            >
              <div className="mb-8">
                <Image
                  src="/logo-helorus.png"
                  alt="Helorus.ai"
                  width={160}
                  height={48}
                  className="h-10 w-auto opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <p className="text-celton-accent text-sm uppercase tracking-wider mb-3">Build</p>
              <h3 className="text-2xl font-semibold text-celton-light mb-4">
                Intelligent Chip Development
              </h3>
              <p className="text-celton-silver leading-relaxed mb-6">
                Next-generation semiconductor innovation through AI-driven performance metrics.
                Building the future of power-efficient silicon.
              </p>
              <Link
                href="#helorus"
                className="inline-flex items-center text-celton-accent hover:text-celton-light transition-colors group/link"
              >
                <span>Discover Helorus</span>
                <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-elegant max-w-4xl mx-auto" />

      {/* Cognorus Deep Dive */}
      <section id="cognorus" className="section-premium relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(41,151,255,0.05),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="mb-6">
                <Image
                  src="/logo-cognorus.png"
                  alt="Cognorus.ai"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
              </motion.div>
              <motion.p variants={fadeUp} className="text-celton-accent uppercase tracking-wider text-sm mb-4">
                Experiential Learning Platform
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-semibold text-celton-light mb-6">
                Learn semiconductor design the way your mind works.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-celton-silver mb-8 leading-relaxed">
                Cognorus transforms how the world learns chip design. Our Cognitive Intelligence Engine
                creates personalized learning paths based on your background, goals, and learning style —
                not a one-size-fits-all curriculum.
              </motion.p>
              <motion.ul variants={fadeUp} className="space-y-4 mb-8">
                {[
                  'AI-powered personalized curriculum',
                  'From fundamentals to advanced physical design',
                  'Hands-on labs and digital twin simulations',
                  'Industry-aligned content for global careers'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-celton-silver">
                    <svg className="w-5 h-5 text-celton-accent mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </motion.ul>
              <motion.p variants={fadeUp} className="text-celton-silver/60 text-sm">
                Coming soon for students, professionals, and career switchers worldwide.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="card-premium p-8 lg:p-12">
                <div className="space-y-6">
                  <p className="text-celton-silver text-sm uppercase tracking-wider">For</p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      'Fresh Graduates',
                      'VLSI Professionals',
                      'Career Switchers',
                      'Engineering Students',
                      'Semiconductor Aspirants',
                      'Global Learners'
                    ].map((audience, i) => (
                      <div key={i} className="bg-celton-black/50 rounded-xl px-4 py-3 text-celton-light text-sm">
                        {audience}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-elegant max-w-4xl mx-auto" />

      {/* Nexarus Deep Dive */}
      <section id="nexarus" className="section-premium relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(201,169,98,0.05),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="card-premium p-8 lg:p-12">
                <p className="text-celton-silver text-sm uppercase tracking-wider mb-6">The Flow</p>
                <div className="space-y-4">
                  {[
                    { step: '01', title: 'Describe', desc: 'Define your chip requirements in natural language' },
                    { step: '02', title: 'Architect', desc: 'AI generates methodology and design architecture' },
                    { step: '03', title: 'Implement', desc: 'Automated RTL, verification, and physical design' },
                    { step: '04', title: 'Optimize', desc: 'Iteratively refine at any stage of the flow' },
                    { step: '05', title: 'Deliver', desc: 'Production-ready GDS for foundry tape-out' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <span className="text-celton-gold font-mono text-sm">{item.step}</span>
                      <div>
                        <p className="text-celton-light font-medium">{item.title}</p>
                        <p className="text-celton-silver text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="order-1 lg:order-2"
            >
              <motion.div variants={fadeUp} className="mb-6">
                <Image
                  src="/logo-nexarus.png"
                  alt="Nexarus.ai"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
              </motion.div>
              <motion.p variants={fadeUp} className="text-celton-gold uppercase tracking-wider text-sm mb-4">
                Design Intelligence Architecture
              </motion.p>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-semibold text-celton-light mb-6">
                From idea to GDS. Intelligently.
              </motion.h2>
              <motion.p variants={fadeUp} className="text-xl text-celton-silver mb-8 leading-relaxed">
                Nexarus embeds AI into every stage of chip design. Describe your requirements —
                processor architecture, performance targets, power constraints — and let intelligent
                automation handle the rest.
              </motion.p>
              <motion.ul variants={fadeUp} className="space-y-4 mb-8">
                {[
                  'Natural language to RTL generation',
                  'Automated testbench and verification',
                  'AI-optimized physical design',
                  'Tweak and iterate at any stage'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-celton-silver">
                    <svg className="w-5 h-5 text-celton-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </motion.ul>
              <motion.p variants={fadeUp} className="text-celton-silver/60 text-sm">
                For product companies, design houses, and research institutions.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="divider-elegant max-w-4xl mx-auto" />

      {/* Helorus Deep Dive */}
      <section id="helorus" className="section-premium relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(41,151,255,0.03),transparent_50%)]" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeUp} className="mb-6 flex justify-center">
              <Image
                src="/logo-helorus.png"
                alt="Helorus.ai"
                width={200}
                height={60}
                className="h-12 w-auto"
              />
            </motion.div>
            <motion.p variants={fadeUp} className="text-celton-accent uppercase tracking-wider text-sm mb-4">
              Intelligent Chip Development
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-semibold text-celton-light mb-6">
              Silicon that thinks ahead.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-celton-silver mb-12 leading-relaxed">
              Helorus powers Celton's internal chip development, creating next-generation
              power electronics silicon with AI-driven performance optimization.
              Where innovation meets energy efficiency.
            </motion.p>
            <motion.div variants={fadeUp} className="grid md:grid-cols-3 gap-6">
              {[
                { metric: 'Power Electronics', desc: 'Energy-efficient silicon solutions' },
                { metric: 'AI-Driven', desc: 'Intelligent performance metrics' },
                { metric: 'Next-Gen', desc: 'Future-ready chip architecture' }
              ].map((item, i) => (
                <div key={i} className="card-premium p-6">
                  <p className="text-2xl font-semibold text-celton-light mb-2">{item.metric}</p>
                  <p className="text-celton-silver text-sm">{item.desc}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-premium relative">
        <div className="absolute inset-0 bg-gradient-to-t from-celton-dark to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-semibold text-celton-light mb-6">
              The future of semiconductor is intelligent.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-celton-silver mb-10">
              Join us as we build the platforms that will define the next era of chip design.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Partner with Celton
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-celton-silver/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <Image
                src="/logo-celton.png"
                alt="Celton Semiconductors"
                width={160}
                height={48}
                className="h-10 w-auto mb-6"
              />
              <p className="text-celton-silver max-w-md">
                Celton Semiconductors is redefining the semiconductor landscape through
                intelligent platforms that learn, adapt, and optimize at every level.
              </p>
            </div>
            <div>
              <p className="text-celton-light font-medium mb-4">The Convergence</p>
              <ul className="space-y-3">
                <li><Link href="#cognorus" className="text-celton-silver hover:text-celton-light transition-colors">Cognorus.ai</Link></li>
                <li><Link href="#nexarus" className="text-celton-silver hover:text-celton-light transition-colors">Nexarus.ai</Link></li>
                <li><Link href="#helorus" className="text-celton-silver hover:text-celton-light transition-colors">Helorus.ai</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-celton-light font-medium mb-4">Company</p>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-celton-silver hover:text-celton-light transition-colors">About</Link></li>
                <li><Link href="/contact" className="text-celton-silver hover:text-celton-light transition-colors">Contact</Link></li>
                <li><Link href="/careers" className="text-celton-silver hover:text-celton-light transition-colors">Careers</Link></li>
              </ul>
            </div>
          </div>
          <div className="divider-elegant mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-celton-silver text-sm">
              © 2025 Celton Semiconductors. All rights reserved.
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
