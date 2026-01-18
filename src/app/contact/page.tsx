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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log('Form submitted:', formData)
  }

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
              <Link href="/#convergence" className="text-celton-silver hover:text-celton-light transition-colors text-sm">
                The Convergence
              </Link>
              <Link href="/#cognorus" className="text-celton-silver hover:text-celton-light transition-colors text-sm">
                Cognorus
              </Link>
              <Link href="/#nexarus" className="text-celton-silver hover:text-celton-light transition-colors text-sm">
                Nexarus
              </Link>
              <Link href="/#helorus" className="text-celton-silver hover:text-celton-light transition-colors text-sm">
                Helorus
              </Link>
              <Link href="/about" className="text-celton-silver hover:text-celton-light transition-colors text-sm">
                About
              </Link>
            </div>
            <Link href="/contact" className="btn-secondary text-sm py-2 px-5 border-celton-light text-celton-light">
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-celton-dark/50 to-celton-black" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-celton-accent uppercase tracking-widest text-sm mb-4">
              Contact
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-6xl font-semibold text-celton-light mb-6">
              Let's build the future together.
            </motion.h1>
            <motion.p variants={fadeUp} className="text-xl text-celton-silver">
              Whether you're exploring partnership opportunities, interested in our platforms, or want to join our team.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 relative">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-celton-silver text-sm mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-celton-gray/50 border border-celton-silver/20 rounded-xl px-4 py-3
                               text-celton-light placeholder-celton-silver/50
                               focus:outline-none focus:border-celton-accent/50 transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-celton-silver text-sm mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-celton-gray/50 border border-celton-silver/20 rounded-xl px-4 py-3
                               text-celton-light placeholder-celton-silver/50
                               focus:outline-none focus:border-celton-accent/50 transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-celton-silver text-sm mb-2">Company / Institution</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-celton-gray/50 border border-celton-silver/20 rounded-xl px-4 py-3
                             text-celton-light placeholder-celton-silver/50
                             focus:outline-none focus:border-celton-accent/50 transition-colors"
                    placeholder="Where do you work or study?"
                  />
                </div>

                <div>
                  <label className="block text-celton-silver text-sm mb-2">I'm interested in</label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full bg-celton-gray/50 border border-celton-silver/20 rounded-xl px-4 py-3
                             text-celton-light
                             focus:outline-none focus:border-celton-accent/50 transition-colors"
                    required
                  >
                    <option value="" className="bg-celton-dark">Select an option</option>
                    <option value="cognorus" className="bg-celton-dark">Cognorus.ai - Learning Platform</option>
                    <option value="nexarus" className="bg-celton-dark">Nexarus.ai - Design Platform</option>
                    <option value="helorus" className="bg-celton-dark">Helorus.ai - Chip Development</option>
                    <option value="partnership" className="bg-celton-dark">Partnership Opportunities</option>
                    <option value="careers" className="bg-celton-dark">Career Opportunities</option>
                    <option value="other" className="bg-celton-dark">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-celton-silver text-sm mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full bg-celton-gray/50 border border-celton-silver/20 rounded-xl px-4 py-3
                             text-celton-light placeholder-celton-silver/50 resize-none
                             focus:outline-none focus:border-celton-accent/50 transition-colors"
                    placeholder="Tell us more about what you're looking for..."
                    required
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-8"
            >
              <motion.div variants={fadeUp} className="card-premium p-8">
                <p className="text-celton-accent text-sm uppercase tracking-wider mb-4">General Inquiries</p>
                <p className="text-celton-light text-lg mb-2">hello@celton.ai</p>
                <p className="text-celton-silver text-sm">For general questions about Celton and our platforms.</p>
              </motion.div>

              <motion.div variants={fadeUp} className="card-premium p-8">
                <p className="text-celton-gold text-sm uppercase tracking-wider mb-4">Partnerships</p>
                <p className="text-celton-light text-lg mb-2">partners@celton.ai</p>
                <p className="text-celton-silver text-sm">For companies and institutions interested in collaborating.</p>
              </motion.div>

              <motion.div variants={fadeUp} className="card-premium p-8">
                <p className="text-celton-accent text-sm uppercase tracking-wider mb-4">Careers</p>
                <p className="text-celton-light text-lg mb-2">careers@celton.ai</p>
                <p className="text-celton-silver text-sm">Join us in building the future of semiconductor intelligence.</p>
              </motion.div>

              <motion.div variants={fadeUp} className="pt-4">
                <p className="text-celton-silver text-sm mb-4">Connect with us</p>
                <div className="flex gap-4">
                  <a href="#" className="w-10 h-10 rounded-full bg-celton-gray/50 border border-celton-silver/20
                                        flex items-center justify-center text-celton-silver hover:text-celton-light
                                        hover:border-celton-silver/40 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-10 h-10 rounded-full bg-celton-gray/50 border border-celton-silver/20
                                        flex items-center justify-center text-celton-silver hover:text-celton-light
                                        hover:border-celton-silver/40 transition-all">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-celton-silver/10 mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
