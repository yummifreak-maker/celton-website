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

export default function Terms() {
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
                width={280}
                height={84}
                className="h-16 w-auto"
              />
            </Link>
            <div className="hidden md:flex items-center gap-11">
              <Link href="/products" className="text-[#f5f5f7] hover:text-[#007aff] transition-all text-sm relative group">
                Innovations
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#007aff] transition-all group-hover:w-full" />
              </Link>
              <Link href="/about" className="text-[#f5f5f7] hover:text-[#007aff] transition-all text-sm relative group">
                About
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
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-semibold text-celton-light mb-4">
              Terms of Service
            </motion.h1>
            <motion.p variants={fadeUp} className="text-celton-silver">
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
            <motion.div variants={fadeUp} className="mb-12">
              <h2 className="text-2xl font-semibold text-celton-light mb-4">Agreement to Terms</h2>
              <p className="text-celton-silver leading-relaxed">
                By accessing or using the Celton Semiconductors website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-12">
              <h2 className="text-2xl font-semibold text-celton-light mb-4">Use of Services</h2>
              <p className="text-celton-silver leading-relaxed mb-4">
                You agree to use our services only for lawful purposes and in accordance with these Terms. You agree not to:
              </p>
              <ul className="space-y-3 text-celton-silver">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-celton-accent mt-2 flex-shrink-0" />
                  <span>Use the services in any way that violates applicable laws or regulations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-celton-accent mt-2 flex-shrink-0" />
                  <span>Attempt to gain unauthorized access to any part of the services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-celton-accent mt-2 flex-shrink-0" />
                  <span>Interfere with or disrupt the services or servers</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-celton-accent mt-2 flex-shrink-0" />
                  <span>Reproduce, duplicate, or copy any part of our services without permission</span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-12">
              <h2 className="text-2xl font-semibold text-celton-light mb-4">Intellectual Property</h2>
              <p className="text-celton-silver leading-relaxed">
                All content, features, and functionality of our services — including but not limited to text, graphics, logos, icons, images, software, and the design and arrangement thereof — are owned by Celton Semiconductors and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-12">
              <h2 className="text-2xl font-semibold text-celton-light mb-4">Our Platforms</h2>
              <p className="text-celton-silver leading-relaxed mb-4">
                Celton Semiconductors offers three distinct platforms under The Celton Triad:
              </p>
              <ul className="space-y-3 text-celton-silver">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-celton-accent mt-2 flex-shrink-0" />
                  <span><strong className="text-celton-light">Cognorus.ai:</strong> AI-powered semiconductor learning platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-celton-accent mt-2 flex-shrink-0" />
                  <span><strong className="text-celton-light">Nexarus.ai:</strong> Intelligent chip design platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-celton-accent mt-2 flex-shrink-0" />
                  <span><strong className="text-celton-light">Helorus.ai:</strong> Next-generation chip development solutions</span>
                </li>
              </ul>
              <p className="text-celton-silver leading-relaxed mt-4">
                Each platform may have additional terms specific to its services, which will be provided upon access.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-12">
              <h2 className="text-2xl font-semibold text-celton-light mb-4">Disclaimer of Warranties</h2>
              <p className="text-celton-silver leading-relaxed">
                Our services are provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not warrant that the services will be uninterrupted, error-free, or free of viruses or other harmful components.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-12">
              <h2 className="text-2xl font-semibold text-celton-light mb-4">Limitation of Liability</h2>
              <p className="text-celton-silver leading-relaxed">
                To the fullest extent permitted by law, Celton Semiconductors shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of our services.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-12">
              <h2 className="text-2xl font-semibold text-celton-light mb-4">Changes to Terms</h2>
              <p className="text-celton-silver leading-relaxed">
                We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes by posting the new terms on this page. Your continued use of the services after such modifications constitutes your acceptance of the updated terms.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="mb-12">
              <h2 className="text-2xl font-semibold text-celton-light mb-4">Contact Us</h2>
              <p className="text-celton-silver leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:legal@celton.ai" className="text-celton-accent hover:underline">legal@celton.ai</a>.
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
              <Link href="/privacy" className="text-celton-silver hover:text-celton-light text-sm transition-colors">Privacy</Link>
              <Link href="/terms" className="text-celton-light text-sm transition-colors">Terms</Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
