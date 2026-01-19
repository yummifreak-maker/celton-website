'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

// Option 3: The Triad Orbits - Three product orbs orbiting a central core
export default function TriadOrbits() {
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

  const products = [
    { name: 'Cognorus', color: '#00d4ff', angle: 0, orbit: 180, desc: 'Learn' },       // Cyan - Learning
    { name: 'Nexarus', color: '#007aff', angle: 120, orbit: 220, desc: 'Design' },     // Blue - Design
    { name: 'Helorus', color: '#9333ea', angle: 240, orbit: 260, desc: 'Build' },      // Purple - Chips
  ]

  return (
    <div className="absolute inset-0 overflow-hidden" style={{ perspective: '1200px' }}>
      {/* Tilting container based on mouse */}
      <motion.div
        className="absolute inset-0"
        style={{
          transformStyle: 'preserve-3d',
          rotateX: mousePosition.y * 10,
          rotateY: mousePosition.x * 10,
        }}
      >
        {/* Central Core - Celton */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Core glow */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(0,122,255,0.3) 0%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Core orb */}
          <motion.div
            className="relative w-20 h-20 rounded-full"
            style={{
              background: 'radial-gradient(circle at 30% 30%, #2a2a4a, #0a0a1a)',
              boxShadow: '0 0 40px rgba(0,122,255,0.4), inset 0 0 20px rgba(0,122,255,0.2)',
              border: '1px solid rgba(0,122,255,0.3)',
            }}
            animate={{
              boxShadow: [
                '0 0 40px rgba(0,122,255,0.4), inset 0 0 20px rgba(0,122,255,0.2)',
                '0 0 60px rgba(0,122,255,0.6), inset 0 0 30px rgba(0,122,255,0.3)',
                '0 0 40px rgba(0,122,255,0.4), inset 0 0 20px rgba(0,122,255,0.2)',
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            {/* Inner circuit pattern */}
            <div className="absolute inset-3 rounded-full border border-[#007aff]/30" />
            <div className="absolute inset-6 rounded-full bg-[#007aff]/10" />
          </motion.div>
        </motion.div>

        {/* Orbital rings */}
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            className="absolute top-1/2 left-1/2 rounded-full border border-white/5"
            style={{
              width: product.orbit * 2,
              height: product.orbit * 2,
              marginLeft: -product.orbit,
              marginTop: -product.orbit,
              transformStyle: 'preserve-3d',
              transform: `rotateX(60deg) rotateZ(${i * 30}deg)`,
            }}
          />
        ))}

        {/* Orbiting Product Orbs */}
        {products.map((product, i) => (
          <OrbitingOrb
            key={product.name}
            product={product}
            index={i}
          />
        ))}

        {/* Energy connections between orbs and core */}
        <EnergyConnections />
      </motion.div>

      {/* Ambient particles */}
      <AmbientParticles />
    </div>
  )
}

function OrbitingOrb({
  product,
  index,
}: {
  product: { name: string; color: string; angle: number; orbit: number; desc: string }
  index: number
}) {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2"
      style={{
        transformStyle: 'preserve-3d',
      }}
      animate={{
        rotateZ: [product.angle, product.angle + 360],
      }}
      transition={{
        duration: 20 + index * 5,
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      {/* Orb positioned at orbit radius */}
      <motion.div
        className="absolute"
        style={{
          left: product.orbit,
          top: 0,
          transform: 'translate(-50%, -50%)',
        }}
      >
        {/* Orb glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full"
          style={{
            background: `radial-gradient(circle, ${product.color}30 0%, transparent 70%)`,
          }}
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
        />

        {/* Main orb */}
        <motion.div
          className="relative w-14 h-14 rounded-full flex items-center justify-center"
          style={{
            background: `radial-gradient(circle at 30% 30%, ${product.color}90, ${product.color}40)`,
            boxShadow: `0 0 30px ${product.color}60, inset 0 0 15px ${product.color}40`,
            border: `1px solid ${product.color}60`,
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 3, repeat: Infinity, delay: index * 0.3 }}
        >
          {/* Product initial */}
          <span className="text-white/80 font-bold text-lg">{product.name[0]}</span>
        </motion.div>

        {/* Product label */}
        <motion.div
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap"
          animate={{
            opacity: [0.5, 0.8, 0.5],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-[10px] tracking-wider" style={{ color: product.color }}>
            {product.desc.toUpperCase()}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

function EnergyConnections() {
  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      {/* Pulsing energy beams from center to each orb position */}
      {[0, 120, 240].map((angle, i) => (
        <motion.line
          key={angle}
          x1="50%"
          y1="50%"
          x2={`${50 + Math.cos((angle * Math.PI) / 180) * 15}%`}
          y2={`${50 + Math.sin((angle * Math.PI) / 180) * 15}%`}
          stroke={i === 0 ? '#00d4ff' : i === 1 ? '#007aff' : '#9333ea'}
          strokeWidth="1"
          strokeDasharray="4 4"
          animate={{
            opacity: [0.2, 0.5, 0.2],
            strokeDashoffset: [0, -16],
          }}
          transition={{
            opacity: { duration: 2, repeat: Infinity },
            strokeDashoffset: { duration: 1, repeat: Infinity, ease: 'linear' },
          }}
        />
      ))}
    </svg>
  )
}

function AmbientParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 1 + Math.random() * 2,
    duration: 3 + Math.random() * 4,
    delay: Math.random() * 3,
  }))

  return (
    <>
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#007aff]"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
          }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </>
  )
}
