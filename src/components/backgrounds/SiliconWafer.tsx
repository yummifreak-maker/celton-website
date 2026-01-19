'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Option 1: Silicon Wafer - Bird's eye view of a wafer with scanning effects
export default function SiliconWafer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2
      const y = (e.clientY / window.innerHeight - 0.5) * 2
      setMousePosition({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Wafer base - circular silicon disc */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          rotateX: mousePosition.y * 15,
          rotateY: mousePosition.x * 15,
        }}
      >
        {/* Main wafer disc */}
        <div
          className="relative w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, #1a1a2e 0%, #0a0a15 70%, #050508 100%)',
            boxShadow: '0 0 100px rgba(0,122,255,0.1), inset 0 0 60px rgba(0,122,255,0.05)',
          }}
        >
          {/* Wafer notch */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-4 bg-black rounded-t-full" />

          {/* Die grid pattern */}
          <DieGrid />

          {/* Scanning laser line */}
          <motion.div
            className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#007aff] to-transparent"
            style={{ boxShadow: '0 0 20px rgba(0,122,255,0.8), 0 0 40px rgba(0,122,255,0.4)' }}
            animate={{
              top: ['10%', '90%', '10%'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Circular scan effect */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-[#007aff]/30"
            animate={{
              width: ['0%', '100%'],
              height: ['0%', '100%'],
              opacity: [0.8, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />

          {/* Highlight certain dies */}
          <HighlightedDies />
        </div>
      </motion.div>

      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-[radial-gradient(circle,rgba(0,122,255,0.08)_0%,transparent_60%)]" />
    </div>
  )
}

function DieGrid() {
  const gridSize = 12
  const dies = []

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      // Calculate if die is within circular wafer
      const centerX = (col - gridSize / 2 + 0.5) / (gridSize / 2)
      const centerY = (row - gridSize / 2 + 0.5) / (gridSize / 2)
      const distFromCenter = Math.sqrt(centerX * centerX + centerY * centerY)

      if (distFromCenter < 0.85) {
        dies.push({ row, col, distFromCenter })
      }
    }
  }

  return (
    <div className="absolute inset-[8%] grid grid-cols-12 grid-rows-12 gap-[2px]">
      {dies.map(({ row, col, distFromCenter }, i) => (
        <motion.div
          key={`${row}-${col}`}
          className="rounded-sm"
          style={{
            gridRow: row + 1,
            gridColumn: col + 1,
            background: `linear-gradient(135deg, rgba(20,20,35,0.9) 0%, rgba(15,15,25,0.8) 100%)`,
            border: '1px solid rgba(0,122,255,0.1)',
          }}
          animate={{
            borderColor: [
              'rgba(0,122,255,0.1)',
              'rgba(0,122,255,0.2)',
              'rgba(0,122,255,0.1)',
            ],
          }}
          transition={{
            duration: 2,
            delay: i * 0.02,
            repeat: Infinity,
          }}
        >
          {/* Mini circuit pattern inside each die */}
          <div className="w-full h-full p-[2px]">
            <div className="w-full h-full relative">
              <div className="absolute inset-[15%] border border-[#007aff]/10 rounded-[1px]" />
              <div className="absolute top-1/2 left-0 right-0 h-px bg-[#007aff]/10" />
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#007aff]/10" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function HighlightedDies() {
  const highlights = [
    { top: '35%', left: '40%', delay: 0 },
    { top: '45%', left: '55%', delay: 1.5 },
    { top: '55%', left: '35%', delay: 3 },
    { top: '40%', left: '60%', delay: 4.5 },
  ]

  return (
    <>
      {highlights.map((h, i) => (
        <motion.div
          key={i}
          className="absolute w-[6%] h-[6%] rounded-sm"
          style={{
            top: h.top,
            left: h.left,
            boxShadow: '0 0 15px rgba(0,122,255,0.8), inset 0 0 10px rgba(0,122,255,0.3)',
            border: '1px solid rgba(0,122,255,0.6)',
          }}
          animate={{
            opacity: [0, 1, 1, 0],
            scale: [0.8, 1, 1, 0.8],
          }}
          transition={{
            duration: 2,
            delay: h.delay,
            repeat: Infinity,
            repeatDelay: 4,
          }}
        />
      ))}
    </>
  )
}
