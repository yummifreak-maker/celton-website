'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useMemo } from 'react'

// Enhanced Neural Network - Dense & Dynamic version
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

  // Generate dense network of nodes
  const nodes = useMemo(() => {
    const allNodes: { id: string; x: number; y: number; layer: number; size: number; isPrimary: boolean }[] = []

    // Dense layer structure - more nodes per layer
    const layers = [
      { count: 5, x: 5 },
      { count: 8, x: 12 },
      { count: 10, x: 20 },
      { count: 12, x: 30 },
      { count: 14, x: 42 },  // Center dense
      { count: 14, x: 54 },  // Center dense
      { count: 12, x: 66 },
      { count: 10, x: 76 },
      { count: 8, x: 85 },
      { count: 5, x: 93 },
    ]

    layers.forEach((layer, layerIndex) => {
      const spacing = 85 / (layer.count + 1)
      for (let i = 0; i < layer.count; i++) {
        const isPrimary = (layerIndex === 4 || layerIndex === 5) && (i === Math.floor(layer.count / 2))
        allNodes.push({
          id: `${layerIndex}-${i}`,
          x: layer.x + (Math.random() - 0.5) * 3, // Add slight randomness
          y: 7 + spacing * (i + 1) + (Math.random() - 0.5) * 2,
          layer: layerIndex,
          size: isPrimary ? 14 : layerIndex >= 3 && layerIndex <= 6 ? 8 : 5,
          isPrimary,
        })
      }
    })

    // Add scattered ambient nodes for depth
    for (let i = 0; i < 25; i++) {
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

  // Generate dense connections
  const connections = useMemo(() => {
    const conns: { from: typeof nodes[0]; to: typeof nodes[0]; delay: number; speed: number }[] = []
    const networkNodes = nodes.filter(n => n.layer >= 0)

    for (let i = 0; i < networkNodes.length; i++) {
      const node = networkNodes[i]
      // Connect to nodes in next 1-2 layers
      const nextLayerNodes = networkNodes.filter(
        n => n.layer === node.layer + 1 || n.layer === node.layer + 2
      )

      nextLayerNodes.forEach((target) => {
        // Higher connection probability for denser network
        if (Math.random() > 0.5) {
          conns.push({
            from: node,
            to: target,
            delay: Math.random() * 2,
            speed: 0.8 + Math.random() * 0.6, // Faster speeds
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

      {/* Fast-moving data streams (additional visual layer) */}
      <DataStreams />
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
          ? 'rgba(0,122,255,0.4)'
          : 'radial-gradient(circle, rgba(0,122,255,0.9) 0%, rgba(0,122,255,0.5) 100%)',
        boxShadow: node.isPrimary
          ? '0 0 25px rgba(0,122,255,0.9), 0 0 50px rgba(0,122,255,0.5)'
          : isAmbient
          ? '0 0 6px rgba(0,122,255,0.4)'
          : '0 0 12px rgba(0,122,255,0.6)',
      }}
      animate={
        node.isPrimary
          ? {
              scale: [1, 1.3, 1],
              boxShadow: [
                '0 0 25px rgba(0,122,255,0.9), 0 0 50px rgba(0,122,255,0.5)',
                '0 0 40px rgba(0,122,255,1), 0 0 80px rgba(0,122,255,0.7)',
                '0 0 25px rgba(0,122,255,0.9), 0 0 50px rgba(0,122,255,0.5)',
              ],
            }
          : {
              scale: [1, 1.15, 1],
              opacity: isAmbient ? [0.3, 0.6, 0.3] : [0.7, 1, 0.7],
            }
      }
      transition={{
        duration: node.isPrimary ? 2 : 1.5 + Math.random(),
        repeat: Infinity,
        delay: Math.random() * 2,
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
        stroke="rgba(0,122,255,0.12)"
        strokeWidth="1"
      />
      {/* Fast animated pulse */}
      <motion.circle
        r="2.5"
        fill="#007aff"
        filter="url(#glow)"
        animate={{
          cx: [`${from.x}%`, `${to.x}%`],
          cy: [`${from.y}%`, `${to.y}%`],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: speed,
          delay: delay,
          repeat: Infinity,
          repeatDelay: 0.5 + Math.random(),
          ease: 'easeInOut',
        }}
      />
    </g>
  )
}

// Additional fast-moving data streams for "busy intelligence" feel
function DataStreams() {
  const streams = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      startX: Math.random() * 30,
      startY: 20 + Math.random() * 60,
      endX: 70 + Math.random() * 30,
      endY: 20 + Math.random() * 60,
      duration: 2 + Math.random() * 2,
      delay: Math.random() * 3,
    }))
  }, [])

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none">
      {streams.map((stream) => (
        <g key={stream.id}>
          {/* Stream path */}
          <motion.line
            x1={`${stream.startX}%`}
            y1={`${stream.startY}%`}
            x2={`${stream.endX}%`}
            y2={`${stream.endY}%`}
            stroke="rgba(0,122,255,0.1)"
            strokeWidth="1"
            strokeDasharray="8 8"
            animate={{
              strokeDashoffset: [0, -32],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
          {/* Fast-moving bright pulse */}
          <motion.circle
            r="3"
            fill="#00d4ff"
            style={{
              filter: 'drop-shadow(0 0 8px rgba(0,212,255,0.9))',
            }}
            animate={{
              cx: [`${stream.startX}%`, `${stream.endX}%`],
              cy: [`${stream.startY}%`, `${stream.endY}%`],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: stream.duration,
              delay: stream.delay,
              repeat: Infinity,
              repeatDelay: 1,
              ease: 'linear',
            }}
          />
        </g>
      ))}
    </svg>
  )
}
