'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'

// Option 4: Circuit Board Flythrough - Dynamic circuit traces with glowing data paths
export default function CircuitBoard() {
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
    <div className="absolute inset-0 overflow-hidden" style={{ perspective: '1000px' }}>
      {/* 3D tilting board */}
      <motion.div
        className="absolute inset-[-20%] scale-150"
        style={{
          transformStyle: 'preserve-3d',
          rotateX: 60 + mousePosition.y * 10,
          rotateZ: -15 + mousePosition.x * 5,
          transformOrigin: 'center center',
        }}
      >
        {/* PCB base layer */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #0a0a12 0%, #050508 100%)',
          }}
        >
          {/* Grid pattern (like PCB substrate) */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,122,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,122,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px',
            }}
          />

          {/* Main circuit traces */}
          <CircuitTraces />

          {/* Components */}
          <CircuitComponents />

          {/* Data flow animations */}
          <DataFlows />

          {/* Vias (through-holes) */}
          <Vias />
        </div>
      </motion.div>

      {/* Fog/depth effect at edges */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,transparent_30%,black_100%)]" />

      {/* Scanning highlight effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, rgba(0,122,255,0.05) 50%, transparent 100%)',
          backgroundSize: '100% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '0% 200%'],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  )
}

function CircuitTraces() {
  // Generate horizontal and vertical traces
  const traces = useMemo(() => {
    const items = []

    // Horizontal traces
    for (let i = 0; i < 15; i++) {
      const y = 5 + i * 6.5
      const segments = Math.floor(Math.random() * 3) + 2
      let x = Math.random() * 20

      for (let j = 0; j < segments; j++) {
        const width = 15 + Math.random() * 30
        items.push({
          type: 'h',
          x,
          y,
          length: width,
          delay: Math.random() * 2,
        })
        x += width + 5 + Math.random() * 10
      }
    }

    // Vertical traces
    for (let i = 0; i < 20; i++) {
      const x = 5 + i * 5
      const y = Math.random() * 30
      const height = 20 + Math.random() * 40
      items.push({
        type: 'v',
        x,
        y,
        length: height,
        delay: Math.random() * 2,
      })
    }

    return items
  }, [])

  return (
    <>
      {traces.map((trace, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${trace.x}%`,
            top: `${trace.y}%`,
            width: trace.type === 'h' ? `${trace.length}%` : '2px',
            height: trace.type === 'v' ? `${trace.length}%` : '2px',
            background: 'linear-gradient(90deg, rgba(0,122,255,0.3), rgba(0,122,255,0.5), rgba(0,122,255,0.3))',
            boxShadow: '0 0 4px rgba(0,122,255,0.3)',
          }}
          animate={{
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 2,
            delay: trace.delay,
            repeat: Infinity,
          }}
        />
      ))}
    </>
  )
}

function CircuitComponents() {
  const components = [
    // Chips
    { type: 'chip', x: 20, y: 25, w: 12, h: 8 },
    { type: 'chip', x: 55, y: 40, w: 15, h: 10 },
    { type: 'chip', x: 35, y: 60, w: 10, h: 6 },
    { type: 'chip', x: 70, y: 20, w: 8, h: 8 },
    // Capacitors
    { type: 'cap', x: 15, y: 45, w: 3, h: 2 },
    { type: 'cap', x: 45, y: 30, w: 3, h: 2 },
    { type: 'cap', x: 75, y: 55, w: 3, h: 2 },
    { type: 'cap', x: 30, y: 75, w: 3, h: 2 },
    // Resistors
    { type: 'res', x: 60, y: 70, w: 4, h: 1.5 },
    { type: 'res', x: 25, y: 15, w: 4, h: 1.5 },
    { type: 'res', x: 80, y: 35, w: 4, h: 1.5 },
  ]

  return (
    <>
      {components.map((comp, i) => (
        <motion.div
          key={i}
          className="absolute rounded-sm"
          style={{
            left: `${comp.x}%`,
            top: `${comp.y}%`,
            width: `${comp.w}%`,
            height: `${comp.h}%`,
            background:
              comp.type === 'chip'
                ? 'linear-gradient(135deg, #1a1a2e 0%, #0f0f1e 100%)'
                : comp.type === 'cap'
                ? '#2a2a3a'
                : '#1f1f2f',
            border: comp.type === 'chip' ? '1px solid rgba(0,122,255,0.3)' : '1px solid rgba(255,255,255,0.1)',
            boxShadow: comp.type === 'chip' ? '0 0 15px rgba(0,122,255,0.2)' : 'none',
          }}
          animate={
            comp.type === 'chip'
              ? {
                  boxShadow: [
                    '0 0 15px rgba(0,122,255,0.2)',
                    '0 0 25px rgba(0,122,255,0.4)',
                    '0 0 15px rgba(0,122,255,0.2)',
                  ],
                }
              : {}
          }
          transition={{
            duration: 2,
            delay: i * 0.2,
            repeat: Infinity,
          }}
        >
          {/* Chip details */}
          {comp.type === 'chip' && (
            <>
              <div className="absolute inset-[15%] border border-[#007aff]/20 rounded-[1px]" />
              <div className="absolute top-1 left-1 w-1 h-1 rounded-full bg-[#007aff]/30" />
            </>
          )}
        </motion.div>
      ))}
    </>
  )
}

function DataFlows() {
  const flows = [
    { x1: 10, y1: 30, x2: 30, y2: 30, delay: 0 },
    { x1: 35, y1: 50, x2: 65, y2: 50, delay: 0.5 },
    { x1: 50, y1: 25, x2: 50, y2: 55, delay: 1 },
    { x1: 20, y1: 60, x2: 45, y2: 60, delay: 1.5 },
    { x1: 70, y1: 40, x2: 90, y2: 40, delay: 2 },
    { x1: 40, y1: 20, x2: 40, y2: 45, delay: 2.5 },
  ]

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      {flows.map((flow, i) => (
        <g key={i}>
          {/* Trace line */}
          <line
            x1={`${flow.x1}%`}
            y1={`${flow.y1}%`}
            x2={`${flow.x2}%`}
            y2={`${flow.y2}%`}
            stroke="rgba(0,122,255,0.3)"
            strokeWidth="2"
          />
          {/* Moving data pulse */}
          <motion.circle
            r="4"
            fill="#007aff"
            style={{
              filter: 'drop-shadow(0 0 6px rgba(0,122,255,1))',
            }}
            animate={{
              cx: [`${flow.x1}%`, `${flow.x2}%`],
              cy: [`${flow.y1}%`, `${flow.y2}%`],
            }}
            transition={{
              duration: 1.5,
              delay: flow.delay,
              repeat: Infinity,
              repeatDelay: 1,
              ease: 'easeInOut',
            }}
          />
        </g>
      ))}
    </svg>
  )
}

function Vias() {
  const vias = useMemo(() => {
    return Array.from({ length: 30 }, () => ({
      x: 5 + Math.random() * 90,
      y: 5 + Math.random() * 90,
      size: 4 + Math.random() * 4,
    }))
  }, [])

  return (
    <>
      {vias.map((via, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${via.x}%`,
            top: `${via.y}%`,
            width: via.size,
            height: via.size,
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, #007aff 0%, #0051d5 50%, transparent 70%)',
            boxShadow: '0 0 4px rgba(0,122,255,0.5)',
          }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            delay: i * 0.1,
            repeat: Infinity,
          }}
        />
      ))}
    </>
  )
}
