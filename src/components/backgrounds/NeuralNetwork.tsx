'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'

// Neural Network - Balanced & Elegant version
export default function NeuralNetwork() {
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

  // Generate balanced network of nodes - fewer, more spread out
  const nodes = useMemo(() => {
    const allNodes: { id: string; x: number; y: number; layer: number; size: number; isPrimary: boolean }[] = []

    // Balanced layer structure - moderate nodes per layer
    const layers = [
      { count: 3, x: 10 },
      { count: 5, x: 25 },
      { count: 6, x: 42 },   // Center
      { count: 5, x: 60 },
      { count: 3, x: 85 },
    ]

    layers.forEach((layer, layerIndex) => {
      const spacing = 70 / (layer.count + 1)
      for (let i = 0; i < layer.count; i++) {
        const isPrimary = layerIndex === 2 && i === Math.floor(layer.count / 2)
        allNodes.push({
          id: `${layerIndex}-${i}`,
          x: layer.x,
          y: 15 + spacing * (i + 1),
          layer: layerIndex,
          size: isPrimary ? 12 : layerIndex === 2 ? 8 : 6,
          isPrimary,
        })
      }
    })

    // Add fewer ambient nodes
    for (let i = 0; i < 10; i++) {
      allNodes.push({
        id: `ambient-${i}`,
        x: Math.random() * 100,
        y: Math.random() * 100,
        layer: -1,
        size: 2 + Math.random() * 2,
        isPrimary: false,
      })
    }

    return allNodes
  }, [])

  // Generate selective connections - not too dense
  const connections = useMemo(() => {
    const conns: { from: typeof nodes[0]; to: typeof nodes[0]; delay: number; speed: number }[] = []
    const networkNodes = nodes.filter(n => n.layer >= 0)

    for (let i = 0; i < networkNodes.length; i++) {
      const node = networkNodes[i]
      // Connect to nodes in next layer only
      const nextLayerNodes = networkNodes.filter(n => n.layer === node.layer + 1)

      nextLayerNodes.forEach((target) => {
        // Lower connection probability - more selective
        if (Math.random() > 0.6) {
          conns.push({
            from: node,
            to: target,
            delay: Math.random() * 4,
            speed: 2.5 + Math.random() * 1.5, // Slower, more elegant
          })
        }
      })
    }

    return conns
  }, [nodes])

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Subtle parallax container */}
      <motion.div
        className="absolute inset-0"
        style={{
          x: mousePosition.x * 15,
          y: mousePosition.y * 15,
        }}
      >
        {/* Connection lines with fast data pulses */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            {/* Glow filter for pulses */}
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {connections.map((conn, i) => (
            <ConnectionLine key={i} from={conn.from} to={conn.to} delay={conn.delay} speed={conn.speed} />
          ))}
        </svg>

        {/* Nodes */}
        {nodes.map((node) => (
          <NetworkNode key={node.id} node={node} />
        ))}
      </motion.div>

      {/* Central intelligence glow */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,122,255,0.12) 0%, transparent 60%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Secondary glow spots */}
      <motion.div
        className="absolute top-[30%] left-[25%] w-[200px] h-[200px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0,122,255,0.08) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
      <motion.div
        className="absolute top-[60%] right-[20%] w-[250px] h-[250px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(147,51,234,0.06) 0%, transparent 70%)',
        }}
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 4, repeat: Infinity, delay: 2 }}
      />

    </div>
  )
}

function NetworkNode({ node }: { node: { id: string; x: number; y: number; layer: number; size: number; isPrimary: boolean } }) {
  const isAmbient = node.layer === -1

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${node.x}%`,
        top: `${node.y}%`,
        width: node.size,
        height: node.size,
        transform: 'translate(-50%, -50%)',
        background: node.isPrimary
          ? 'radial-gradient(circle, #007aff 0%, #0051d5 100%)'
          : isAmbient
          ? 'rgba(0,122,255,0.3)'
          : 'radial-gradient(circle, rgba(0,122,255,0.8) 0%, rgba(0,122,255,0.4) 100%)',
        boxShadow: node.isPrimary
          ? '0 0 20px rgba(0,122,255,0.7), 0 0 40px rgba(0,122,255,0.3)'
          : isAmbient
          ? '0 0 4px rgba(0,122,255,0.3)'
          : '0 0 8px rgba(0,122,255,0.4)',
      }}
      animate={
        node.isPrimary
          ? {
              scale: [1, 1.15, 1],
              boxShadow: [
                '0 0 20px rgba(0,122,255,0.7), 0 0 40px rgba(0,122,255,0.3)',
                '0 0 30px rgba(0,122,255,0.9), 0 0 60px rgba(0,122,255,0.5)',
                '0 0 20px rgba(0,122,255,0.7), 0 0 40px rgba(0,122,255,0.3)',
              ],
            }
          : {
              scale: [1, 1.1, 1],
              opacity: isAmbient ? [0.2, 0.4, 0.2] : [0.6, 0.9, 0.6],
            }
      }
      transition={{
        duration: node.isPrimary ? 4 : 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 3,
        ease: 'easeInOut',
      }}
    />
  )
}

function ConnectionLine({
  from,
  to,
  delay,
  speed,
}: {
  from: { x: number; y: number }
  to: { x: number; y: number }
  delay: number
  speed: number
}) {
  return (
    <g>
      {/* Static connection line */}
      <line
        x1={`${from.x}%`}
        y1={`${from.y}%`}
        x2={`${to.x}%`}
        y2={`${to.y}%`}
        stroke="rgba(0,122,255,0.08)"
        strokeWidth="1"
      />
      {/* Slow, elegant pulse */}
      <motion.circle
        r="2"
        fill="#007aff"
        filter="url(#glow)"
        animate={{
          cx: [`${from.x}%`, `${to.x}%`],
          cy: [`${from.y}%`, `${to.y}%`],
          opacity: [0, 0.8, 0.8, 0],
        }}
        transition={{
          duration: speed,
          delay: delay,
          repeat: Infinity,
          repeatDelay: 2 + Math.random() * 3,
          ease: 'easeInOut',
        }}
      />
    </g>
  )
}
