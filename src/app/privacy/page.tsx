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

export default function Privacy() {
  return (
    <main className="min-h-screen bg-celton-black">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-[6%]">
          <div className="flex items-center justify-between h-[72px]">
            <Link href="/" className="flex items-center">
              <Image
                src="/celton-logo.png"
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
              <Link href="/contact" className="text-[#f5f5f7] hover:text-[#007aff] transition-all text-sm relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007aff] transition-all group-hover:w-full" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-12 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-celton-dark/50 to-celton-black" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.h1 variants={fadeUp} className="text-2xl md:text-3xl font-semibold text-celton-light mb-3">
              Privacy Policy
            </motion.h1>
            <motion.p variants={fadeUp} className="text-celton-silver text-xs">
              Last updated: January 2026
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 relative">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="prose prose-invert max-w-none"
          >
            <motion.div variants={fadeUp} className="mb-8">
              <h2 className="text-lg font-semibold text-celton-light mb-2">Overview</h2>
              <p className="text-celton-silver leading-relaxed text-xs">
                At Celton Semiconductors, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-8">
              <h2 className="text-lg font-semibold text-celton-light mb-2">Information We Collect</h2>
              <p className="text-celton-silver leading-relaxed mb-3 text-xs">
                We may collect information about you in a variety of ways, including:
              </p>
              <ul className="space-y-2 text-celton-silver text-xs">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-celton-accent mt-2 flex-shrink-0" />
                  <span><strong className="text-celton-light">Personal Data:</strong> Name, email address, phone number, and other contact information you provide when contacting us or signing up for our services.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-celton-accent mt-2 flex-shrink-0" />
                  <span><strong className="text-celton-light">Usage Data:</strong> Information about how you use our website, including pages visited, time spent, and interactions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-celton-accent mt-2 flex-shrink-0" />
                  <span><strong className="text-celton-light">Device Data:</strong> Information about your device, including IP address, browser type, and operating system.</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-8">
              <h2 className="text-lg font-semibold text-celton-light mb-2">How We Use Your Information</h2>
              <p className="text-celton-silver leading-relaxed mb-3 text-xs">
                We use the information we collect to:
              </p>
              <ul className="space-y-2 text-celton-silver text-xs">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-celton-accent mt-2 flex-shrink-0" />
                  <span>Provide, operate, and maintain our services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-celton-accent mt-2 flex-shrink-0" />
                  <span>Respond to your inquiries and provide customer support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-celton-accent mt-2 flex-shrink-0" />
                  <span>Send you updates, marketing communications, and other information</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-celton-accent mt-2 flex-shrink-0" />
                  <span>Improve and personalize your experience</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-celton-accent mt-2 flex-shrink-0" />
                  <span>Analyze usage patterns and optimize our services</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-8">
              <h2 className="text-lg font-semibold text-celton-light mb-2">Data Security</h2>
              <p className="text-celton-silver leading-relaxed text-xs">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-8">
              <h2 className="text-lg font-semibold text-celton-light mb-2">Your Rights</h2>
              <p className="text-celton-silver leading-relaxed mb-3 text-xs">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="space-y-2 text-celton-silver text-xs">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-celton-accent mt-2 flex-shrink-0" />
                  <span>The right to access your personal data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-celton-accent mt-2 flex-shrink-0" />
                  <span>The right to correct inaccurate data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-celton-accent mt-2 flex-shrink-0" />
                  <span>The right to request deletion of your data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-celton-accent mt-2 flex-shrink-0" />
                  <span>The right to opt out of marketing communications</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-8">
              <h2 className="text-lg font-semibold text-celton-light mb-2">Contact Us</h2>
              <p className="text-celton-silver leading-relaxed text-xs">
                If you have any questions about this Privacy Policy or our data practices, please contact us at{' '}
                <a href="mailto:info@celtonsemi.com" className="text-celton-accent hover:underline">info@celtonsemi.com</a>.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-celton-silver/10 mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-celton-silver text-sm">
              © 2026 Celton Semiconductors. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="text-celton-light text-sm transition-colors">Privacy</Link>
              <Link href="/terms" className="text-celton-silver hover:text-celton-light text-sm transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
