'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import dynamic from 'next/dynamic'
import Link from 'next/link'

// Dynamic imports for all background options
const SiliconWafer = dynamic(() => import('@/components/backgrounds/SiliconWafer'), { ssr: false })
const NeuralNetwork = dynamic(() => import('@/components/backgrounds/NeuralNetwork'), { ssr: false })
const TriadOrbits = dynamic(() => import('@/components/backgrounds/TriadOrbits'), { ssr: false })
const CircuitBoard = dynamic(() => import('@/components/backgrounds/CircuitBoard'), { ssr: false })

const backgrounds = [
  {
    id: 'wafer',
    name: 'Silicon Wafer',
    desc: 'Bird\'s-eye view of a silicon wafer with die patterns and scanning effects',
    component: SiliconWafer,
  },
  {
    id: 'neural',
    name: 'Neural Network',
    desc: 'Interconnected nodes with data pulses flowing - represents AI intelligence',
    component: NeuralNetwork,
  },
  {
    id: 'triad',
    name: 'The Triad Orbits',
    desc: 'Three product orbs (Cognorus, Nexarus, Helorus) orbiting a central core',
    component: TriadOrbits,
  },
  {
    id: 'circuit',
    name: 'Circuit Board',
    desc: 'Dynamic circuit board with glowing traces and data flow animations',
    component: CircuitBoard,
  },
]

export default function DemoBackgrounds() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ActiveComponent = backgrounds[activeIndex].component

  return (
    <main className="h-screen bg-black overflow-hidden relative">
      {/* Background animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>

      {/* Overlay gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />

      {/* Demo content overlay - simulating landing page content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-[#007aff] text-sm tracking-[4px] font-semibold mb-4 px-6 py-2 rounded-full border border-[#007aff]/20 bg-[#007aff]/5 backdrop-blur-sm inline-block">
            Introducing the Celton Triad™
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4">
            <span className="bg-gradient-to-b from-white via-white to-[#8b8b8d] bg-clip-text text-transparent">
              Intelligence.
            </span>
            <br />
            <span className="bg-gradient-to-b from-white via-[#c0c0c0] to-[#6b6b6d] bg-clip-text text-transparent">
              Engineered into silicon.
            </span>
          </h1>
          <p className="text-[#86868b] text-lg mb-8">
            Preview how each background looks with your landing page content
          </p>
        </motion.div>
      </div>

      {/* Navigation controls */}
      <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
        <div className="max-w-4xl mx-auto">
          {/* Option selector */}
          <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-4 border border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-white font-semibold">Background Options</h2>
              <Link
                href="/"
                className="text-sm text-[#007aff] hover:underline"
              >
                Back to Home
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {backgrounds.map((bg, index) => (
                <button
                  key={bg.id}
                  onClick={() => setActiveIndex(index)}
                  className={`p-3 rounded-xl text-left transition-all ${
                    activeIndex === index
                      ? 'bg-[#007aff]/20 border-[#007aff]/50 border'
                      : 'bg-white/5 border border-white/10 hover:bg-white/10'
                  }`}
                >
                  <p className={`font-medium text-sm mb-1 ${
                    activeIndex === index ? 'text-[#007aff]' : 'text-white'
                  }`}>
                    {index + 1}. {bg.name}
                  </p>
                  <p className="text-[#86868b] text-xs line-clamp-2">
                    {bg.desc}
                  </p>
                </button>
              ))}
            </div>

            {/* Current selection info */}
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
              <div>
                <p className="text-[#007aff] text-sm font-medium">
                  Currently viewing: {backgrounds[activeIndex].name}
                </p>
                <p className="text-[#86868b] text-xs">
                  Move your mouse to see interactive parallax effects
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setActiveIndex((prev) => (prev - 1 + backgrounds.length) % backgrounds.length)}
                  className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-sm transition-colors"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActiveIndex((prev) => (prev + 1) % backgrounds.length)}
                  className="px-4 py-2 rounded-lg bg-[#007aff] hover:bg-[#0051d5] text-white text-sm transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
