'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

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

export default function About() {
  return (
    <main className="min-h-screen bg-celton-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-[6%]">
          <div className="flex items-center justify-between h-[72px]">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo-celton.png"
                alt="Celton Semiconductors"
                width={240}
                height={72}
                className="h-14 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center gap-11">
              <Link href="/products" className="text-[#f5f5f7] hover:text-[#007aff] transition-all text-sm relative group">
                The Celton Triad
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007aff] transition-all group-hover:w-full" />
              </Link>
              <Link href="/about" className="text-[#007aff] text-sm relative group">
                About
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
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-celton-dark/50 to-celton-black" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-celton-accent uppercase tracking-widest text-sm mb-4">
              About Celton
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-semibold text-celton-light mb-6">
              Redefining what's possible in silicon.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-celton-silver">
              We're not just building products. We're building the future of how semiconductors are learned, designed, and developed.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="text-4xl font-semibold text-celton-light mb-6">
                Intelligence isn't an add-on.
                <br />
                <span className="text-celton-silver">It's the foundation.</span>
              </motion.h2>
              <motion.p variants={fadeUp} className="text-lg text-celton-silver mb-6 leading-relaxed">
                The semiconductor industry stands at an inflection point. Design complexity is exploding.
                The talent gap is widening. Traditional tools and methods are reaching their limits.
              </motion.p>
              <motion.p variants={fadeUp} className="text-lg text-celton-silver leading-relaxed">
                Celton was founded with a singular vision: integrate artificial intelligence at every
                level of the semiconductor ecosystem — from how we educate the next generation of
                engineers, to how we design chips, to how we develop silicon solutions.
              </motion.p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="card-premium p-10"
            >
              <div className="space-y-8">
                <div>
                  <p className="text-celton-accent text-5xl font-semibold mb-2">3</p>
                  <p className="text-celton-silver">Intelligent platforms in development</p>
                </div>
                <div className="divider-elegant" />
                <div>
                  <p className="text-celton-accent text-5xl font-semibold mb-2">1</p>
                  <p className="text-celton-silver">Unified convergence of VLSI and AI</p>
                </div>
                <div className="divider-elegant" />
                <div>
                  <p className="text-celton-accent text-5xl font-semibold mb-2">∞</p>
                  <p className="text-celton-silver">Possibilities for the future of silicon</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Convergence Philosophy */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-celton-dark/30 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-celton-gold uppercase tracking-widest text-sm mb-4">
              Our Philosophy
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-semibold text-celton-light mb-8">
              The Celton Convergence
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-celton-silver mb-12 leading-relaxed">
              Three distinct platforms. Three critical challenges. One unified approach.
              The Celton Convergence represents our belief that learning, designing, and building
              semiconductors should be powered by the same intelligent foundation.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-8"
          >
            <motion.div variants={fadeUp} className="text-left">
              <p className="text-celton-accent text-sm uppercase tracking-wider mb-2">Cognorus</p>
              <p className="text-celton-light text-lg font-medium mb-2">Learn Intelligently</p>
              <p className="text-celton-silver text-sm">
                Democratizing semiconductor education through personalized, AI-driven learning experiences.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="text-left">
              <p className="text-celton-gold text-sm uppercase tracking-wider mb-2">Nexarus</p>
              <p className="text-celton-light text-lg font-medium mb-2">Design Intelligently</p>
              <p className="text-celton-silver text-sm">
                Accelerating chip design from concept to silicon through AI-assisted methodology.
              </p>
            </motion.div>
            <motion.div variants={fadeUp} className="text-left">
              <p className="text-celton-accent text-sm uppercase tracking-wider mb-2">Helorus</p>
              <p className="text-celton-light text-lg font-medium mb-2">Build Intelligently</p>
              <p className="text-celton-silver text-sm">
                Creating next-generation silicon solutions with AI-optimized performance metrics.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.h2 variants={fadeUp} className="text-4xl font-semibold text-celton-light mb-4">
              What drives us
            </motion.h2>
            <motion.p variants={fadeUp} className="text-celton-silver text-lg">
              Principles that guide everything we build.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Intelligence First',
                desc: "AI isn't a feature — it's the architecture. Every platform is built with intelligence at its core."
              },
              {
                title: 'Global Impact',
                desc: "From India to Silicon Valley, we're building platforms for engineers and innovators worldwide."
              },
              {
                title: 'Elegance in Complexity',
                desc: 'Semiconductor design is complex. Our job is to make it feel simple without losing depth.'
              },
              {
                title: 'Continuous Evolution',
                desc: 'Our platforms learn and improve. So do we. Iteration is built into our DNA.'
              }
            ].map((value, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.1 }}
                className="card-premium p-8"
              >
                <p className="text-celton-light text-lg font-medium mb-3">{value.title}</p>
                <p className="text-celton-silver text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
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
            <motion.h2 variants={fadeUp} className="text-4xl font-semibold text-celton-light mb-6">
              Join us on this journey.
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-celton-silver mb-10">
              Whether you're an engineer, a company, or an institution — there's a place for you in the Celton Convergence.
            </motion.p>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
              <Link href="/careers" className="btn-secondary">
                View Careers
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
