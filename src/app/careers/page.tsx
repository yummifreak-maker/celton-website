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

const openRoles = [
  {
    title: 'DeepTech Research Engineer',
    team: 'Core Engineering',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description: 'Push the boundaries of what silicon can do. You\'ll work on next-gen architectures that don\'t exist in textbooks yet.'
  },
  {
    title: 'Machine Learning Architect',
    team: 'AI & Intelligence',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description: 'Build the AI that builds chips. Design intelligent systems that accelerate semiconductor design from months to days.'
  },
  {
    title: 'UI/UX Designer',
    team: 'Product Design',
    location: 'Remote',
    type: 'Full-time',
    description: 'Make complexity feel simple. Transform dense technical workflows into experiences that engineers actually love using.'
  },
  {
    title: 'Experiential Learning Architect',
    team: 'Cognorus',
    location: 'Remote',
    type: 'Full-time',
    description: 'Reinvent how the world learns semiconductors. Design adaptive, AI-powered learning journeys that feel nothing like traditional education.'
  },
  {
    title: 'Growth & Marketing Lead',
    team: 'Marketing',
    location: 'Remote / Hybrid',
    type: 'Full-time',
    description: 'Tell the story of silicon\'s future. Build a brand that resonates with engineers, institutions, and enterprises worldwide.'
  }
]

export default function Careers() {
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
              <Link href="/about" className="text-[#f5f5f7] hover:text-[#007aff] transition-all text-sm relative group">
                About
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
              Careers
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-semibold text-celton-light mb-6">
              We don't just hire résumés.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-celton-silver leading-relaxed">
              Yes, we respect the world's top institutions. But what we really need? Street smarters.
              Builders who explore the unknown. People who can't stop asking "what if?"
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-3xl md:text-4xl font-semibold text-celton-light mb-6">
                Credentials open doors.
                <br />
                <span className="text-celton-silver">Curiosity builds worlds.</span>
              </h2>
              <p className="text-celton-silver text-lg leading-relaxed mb-6">
                We're looking for the ones who taught themselves Verilog at 2 AM.
                The designers who can't stop tweaking until it feels right.
                The marketers who understand that deep tech isn't boring — it's the future.
              </p>
              <p className="text-celton-silver text-lg leading-relaxed">
                If you've ever felt like you were made for something bigger than what traditional paths offer,
                you might be exactly who we're looking for.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-6">
              {[
                { label: 'DeepTech', desc: 'Explore architectures that don\'t exist yet' },
                { label: 'Machine Learning', desc: 'Build AI that accelerates silicon design' },
                { label: 'UI/UX', desc: 'Make the complex feel effortless' },
                { label: 'Experiential Learning', desc: 'Reinvent how the world learns' },
                { label: 'Marketing', desc: 'Tell the story of silicon\'s future' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                  <div className="w-2 h-2 rounded-full bg-celton-accent mt-2 flex-shrink-0" />
                  <div>
                    <p className="text-celton-light font-medium">{item.label}</p>
                    <p className="text-celton-silver text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-celton-dark/30 to-transparent" />
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl font-semibold text-celton-light mb-4">
              What we value
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
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
                className="card-premium p-8 text-center"
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
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
                className="group p-6 rounded-2xl bg-white/[0.03] border border-white/[0.05] hover:border-celton-accent/30 transition-all cursor-pointer"
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
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-semibold text-celton-light mb-6">
              Don't see your role?
            </motion.h2>
            <motion.p variants={fadeUp} className="text-xl text-celton-silver mb-10">
              We're always looking for exceptional people. If you believe you can contribute to the future of silicon, reach out.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link href="/contact" className="btn-primary">
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
