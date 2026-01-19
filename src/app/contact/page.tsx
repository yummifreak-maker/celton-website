'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1
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
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)

    // Create mailto link and open it
    const subject = `Contact from ${formData.name} - ${formData.interest || 'General Inquiry'}`
    const body = `Name: ${formData.name}
Email: ${formData.email}
Company/Institution: ${formData.company || 'Not provided'}
Interest: ${formData.interest || 'Not specified'}

Message:
${formData.message}`

    window.location.href = `mailto:info@celtonsemi.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    setTimeout(() => {
      setSending(false)
      setSent(true)
    }, 1000)
  }

  return (
    <main className="h-screen bg-celton-black overflow-hidden flex flex-col">
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
              <Link href="/" className="text-[#f5f5f7] hover:text-[#007aff] transition-all text-sm relative group">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007aff] transition-all group-hover:w-full" />
              </Link>
              <Link href="/products" className="text-[#f5f5f7] hover:text-[#007aff] transition-all text-sm relative group">
                Innovations
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007aff] transition-all group-hover:w-full" />
              </Link>
              <Link href="/careers" className="text-[#f5f5f7] hover:text-[#007aff] transition-all text-sm relative group">
                Careers
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007aff] transition-all group-hover:w-full" />
              </Link>
              <Link href="/contact" className="text-[#007aff] text-sm relative group">
                Get in Touch
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#007aff]" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex-1 pt-[72px] flex flex-col">
        {/* Hero */}
        <section className="pt-16 pb-2 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-celton-dark/50 to-celton-black" />
          <div className="relative max-w-5xl mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
            >
              <motion.p variants={fadeUp} className="text-celton-accent uppercase tracking-widest text-sm mb-3">
                Get in Touch
              </motion.p>
              <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-semibold text-celton-light mb-4">
                Let's build the future together.
              </motion.h1>
              <motion.p variants={fadeUp} className="text-lg md:text-xl text-celton-silver mb-8">
                Explore partnerships, discover our platforms, or join our team.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="flex-1 py-4 relative">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-celton-silver text-sm mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-celton-gray/50 border border-celton-silver/20 rounded-lg px-4 py-3 text-base
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
                      className="w-full bg-celton-gray/50 border border-celton-silver/20 rounded-lg px-4 py-3 text-base
                               text-celton-light placeholder-celton-silver/50
                               focus:outline-none focus:border-celton-accent/50 transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-celton-silver text-sm mb-2">Company / Institution</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full bg-celton-gray/50 border border-celton-silver/20 rounded-lg px-4 py-3 text-base
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
                      className="w-full bg-celton-gray/50 border border-celton-silver/20 rounded-lg px-4 py-3 text-base
                               text-celton-light
                               focus:outline-none focus:border-celton-accent/50 transition-colors"
                      required
                    >
                      <option value="" className="bg-celton-dark">Select an option</option>
                      <option value="Cognorus.ai - Learning Platform" className="bg-celton-dark">Cognorus.ai - Learning Platform</option>
                      <option value="Nexarus.ai - Design Platform" className="bg-celton-dark">Nexarus.ai - Design Platform</option>
                      <option value="Helorus.ai - Chip Development" className="bg-celton-dark">Helorus.ai - Chip Development</option>
                      <option value="Partnership Opportunities" className="bg-celton-dark">Partnership Opportunities</option>
                      <option value="Career Opportunities" className="bg-celton-dark">Career Opportunities</option>
                      <option value="Attending Events" className="bg-celton-dark">Attending Events</option>
                      <option value="Other" className="bg-celton-dark">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-celton-silver text-sm mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={3}
                    className="w-full bg-celton-gray/50 border border-celton-silver/20 rounded-lg px-4 py-3 text-base
                             text-celton-light placeholder-celton-silver/50 resize-none
                             focus:outline-none focus:border-celton-accent/50 transition-colors"
                    placeholder="Tell us more about what you're looking for..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full py-3.5 text-base disabled:opacity-50"
                >
                  {sending ? 'Opening email...' : sent ? 'Email client opened!' : 'Send Message'}
                </button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Contact Info - Bottom */}
        <section className="py-5 border-t border-celton-silver/10">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col md:flex-row items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="text-celton-silver text-base">Get in touch:</span>
                <a
                  href="mailto:info@celtonsemi.com"
                  className="text-celton-accent text-base hover:underline"
                >
                  info@celtonsemi.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-celton-silver text-base">Connect with us</span>
                <a
                  href="https://in.linkedin.com/company/celton"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-celton-gray/50 border border-celton-silver/20
                            flex items-center justify-center text-celton-silver hover:text-celton-light
                            hover:border-celton-silver/40 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-4 border-t border-celton-silver/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-2">
              <p className="text-celton-silver text-xs">
                © 2026 Celton Semiconductors. All rights reserved.
              </p>
              <div className="flex gap-6">
                <Link href="/privacy" className="text-celton-silver hover:text-celton-light text-xs transition-colors">Privacy</Link>
                <Link href="/terms" className="text-celton-silver hover:text-celton-light text-xs transition-colors">Terms</Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
