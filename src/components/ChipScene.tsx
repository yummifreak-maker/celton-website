'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// CSS-based 3D Chip Animation - more compatible approach
export default function ChipScene() {
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
    <div className="absolute inset-0 z-0 overflow-hidden" style={{ perspective: '1000px' }}>
      {/* 3D Rotating Chip */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          transformStyle: 'preserve-3d',
          rotateX: mousePosition.y * 10,
          rotateY: mousePosition.x * 15 + 15,
        }}
        animate={{
          rotateZ: [0, 360],
        }}
        transition={{
          rotateZ: {
            duration: 60,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {/* Main Chip Body */}
        <div
          className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Chip Package - Top Face */}
          <motion.div
            className="absolute inset-0 rounded-lg border border-[#007aff]/20"
            style={{
              background: 'linear-gradient(135deg, rgba(10,10,15,0.95) 0%, rgba(20,20,30,0.9) 100%)',
              boxShadow: '0 0 60px rgba(0,122,255,0.15), inset 0 0 30px rgba(0,122,255,0.05)',
              transform: 'translateZ(20px)',
            }}
            animate={{
              boxShadow: [
                '0 0 60px rgba(0,122,255,0.15), inset 0 0 30px rgba(0,122,255,0.05)',
                '0 0 80px rgba(0,122,255,0.25), inset 0 0 40px rgba(0,122,255,0.1)',
                '0 0 60px rgba(0,122,255,0.15), inset 0 0 30px rgba(0,122,255,0.05)',
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Silicon Die */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[65%] h-[65%] rounded"
              style={{
                background: 'linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 100%)',
                boxShadow: 'inset 0 0 20px rgba(0,122,255,0.1)',
              }}
            >
              {/* Circuit Grid Pattern */}
              <CircuitGrid />
            </div>

            {/* Corner Markers */}
            <div className="absolute top-3 left-3 w-3 h-3 rounded-full bg-[#007aff]/30" />
            <div className="absolute top-3 right-3 w-2 h-2 rounded-sm bg-white/10" />
            <div className="absolute bottom-3 left-3 w-2 h-2 rounded-sm bg-white/10" />
            <div className="absolute bottom-3 right-3 w-2 h-2 rounded-sm bg-white/10" />
          </motion.div>

          {/* Chip Pins - All Sides */}
          <ChipPins />

          {/* Glow Ring Under Chip */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0,122,255,0.15) 0%, transparent 70%)',
              transform: 'translateZ(-30px)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>

      {/* Floating Data Nodes */}
      <DataNodes />

      {/* Connection Lines */}
      <ConnectionLines />
    </div>
  )
}

// Circuit grid pattern on the die
function CircuitGrid() {
  return (
    <div className="absolute inset-2 overflow-hidden">
      {/* Horizontal Lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px bg-[#007aff]/30"
          style={{ top: `${(i + 1) * 11}%` }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scaleX: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 2,
            delay: i * 0.15,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      {/* Vertical Lines */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-[#007aff]/30"
          style={{ left: `${(i + 1) * 11}%` }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scaleY: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 2,
            delay: i * 0.15 + 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
      {/* Core Elements */}
      {Array.from({ length: 9 }).map((_, i) => (
        <motion.div
          key={`core-${i}`}
          className="absolute w-3 h-3 rounded-sm bg-[#007aff]/20"
          style={{
            top: `${Math.floor(i / 3) * 30 + 20}%`,
            left: `${(i % 3) * 30 + 20}%`,
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [0.9, 1.1, 0.9],
          }}
          transition={{
            duration: 1.5,
            delay: i * 0.2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

// Chip pins on all sides
function ChipPins() {
  const pinCount = 10

  return (
    <>
      {/* Top Pins */}
      <div className="absolute -top-4 left-[15%] right-[15%] flex justify-between">
        {Array.from({ length: pinCount }).map((_, i) => (
          <motion.div
            key={`top-${i}`}
            className="w-1.5 h-4 bg-gradient-to-b from-[#c0c0c0] to-[#808080] rounded-t-sm"
            style={{ boxShadow: '0 0 4px rgba(255,255,255,0.1)' }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, delay: i * 0.1, repeat: Infinity }}
          />
        ))}
      </div>
      {/* Bottom Pins */}
      <div className="absolute -bottom-4 left-[15%] right-[15%] flex justify-between">
        {Array.from({ length: pinCount }).map((_, i) => (
          <motion.div
            key={`bot-${i}`}
            className="w-1.5 h-4 bg-gradient-to-t from-[#c0c0c0] to-[#808080] rounded-b-sm"
            style={{ boxShadow: '0 0 4px rgba(255,255,255,0.1)' }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, delay: i * 0.1 + 0.5, repeat: Infinity }}
          />
        ))}
      </div>
      {/* Left Pins */}
      <div className="absolute -left-4 top-[15%] bottom-[15%] flex flex-col justify-between">
        {Array.from({ length: pinCount }).map((_, i) => (
          <motion.div
            key={`left-${i}`}
            className="w-4 h-1.5 bg-gradient-to-r from-[#c0c0c0] to-[#808080] rounded-l-sm"
            style={{ boxShadow: '0 0 4px rgba(255,255,255,0.1)' }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, delay: i * 0.1 + 1, repeat: Infinity }}
          />
        ))}
      </div>
      {/* Right Pins */}
      <div className="absolute -right-4 top-[15%] bottom-[15%] flex flex-col justify-between">
        {Array.from({ length: pinCount }).map((_, i) => (
          <motion.div
            key={`right-${i}`}
            className="w-4 h-1.5 bg-gradient-to-l from-[#c0c0c0] to-[#808080] rounded-r-sm"
            style={{ boxShadow: '0 0 4px rgba(255,255,255,0.1)' }}
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, delay: i * 0.1 + 1.5, repeat: Infinity }}
          />
        ))}
      </div>
    </>
  )
}

// Floating data nodes
function DataNodes() {
  const nodes = [
    { top: '20%', left: '10%', delay: 0, size: 4 },
    { top: '30%', left: '85%', delay: 1.5, size: 3 },
    { top: '70%', left: '15%', delay: 2, size: 3 },
    { top: '75%', left: '80%', delay: 0.5, size: 5 },
    { top: '15%', left: '70%', delay: 3, size: 3 },
    { top: '60%', left: '5%', delay: 2.5, size: 4 },
    { top: '85%', left: '50%', delay: 1, size: 3 },
    { top: '10%', left: '40%', delay: 3.5, size: 4 },
  ]

  return (
    <>
      {nodes.map((node, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#007aff]"
          style={{
            top: node.top,
            left: node.left,
            width: node.size,
            height: node.size,
            boxShadow: '0 0 10px rgba(0,122,255,0.8), 0 0 20px rgba(0,122,255,0.4)',
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 4 + i * 0.5,
            delay: node.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  )
}

// Connection lines
function ConnectionLines() {
  const lines = [
    { x1: '15%', y1: '30%', x2: '40%', y2: '45%', delay: 0 },
    { x1: '60%', y1: '55%', x2: '85%', y2: '40%', delay: 1 },
    { x1: '20%', y1: '70%', x2: '45%', y2: '55%', delay: 2 },
    { x1: '55%', y1: '45%', x2: '80%', y2: '70%', delay: 1.5 },
  ]

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      {lines.map((line, i) => (
        <motion.line
          key={i}
          x1={line.x1}
          y1={line.y1}
          x2={line.x2}
          y2={line.y2}
          stroke="#007aff"
          strokeWidth="1"
          strokeDasharray="4 4"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{
            opacity: [0, 0.3, 0],
            pathLength: [0, 1, 1],
          }}
          transition={{
            duration: 3,
            delay: line.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </svg>
  )
}
