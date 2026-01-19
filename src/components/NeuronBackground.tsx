'use client'

import { useEffect, useRef } from 'react'

interface Neuron {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  pulsePhase: number
  pulseSpeed: number
}

interface Connection {
  from: number
  to: number
  strength: number
  pulsePosition: number
  pulseDirection: number
}

export function NeuronBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Create neurons
    const neuronCount = 40
    const neurons: Neuron[] = []
    const connections: Connection[] = []
    const connectionDistance = 200
    const maxConnections = 4

    for (let i = 0; i < neuronCount; i++) {
      neurons.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 2 + Math.random() * 2,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02
      })
    }

    // Animation loop
    let animationId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update neuron positions
      neurons.forEach((neuron) => {
        neuron.x += neuron.vx
        neuron.y += neuron.vy
        neuron.pulsePhase += neuron.pulseSpeed

        // Bounce off edges
        if (neuron.x < 0 || neuron.x > canvas.width) neuron.vx *= -1
        if (neuron.y < 0 || neuron.y > canvas.height) neuron.vy *= -1

        // Keep in bounds
        neuron.x = Math.max(0, Math.min(canvas.width, neuron.x))
        neuron.y = Math.max(0, Math.min(canvas.height, neuron.y))
      })

      // Build connections based on distance
      connections.length = 0
      for (let i = 0; i < neurons.length; i++) {
        let connectionCount = 0
        for (let j = i + 1; j < neurons.length && connectionCount < maxConnections; j++) {
          const dx = neurons[i].x - neurons[j].x
          const dy = neurons[i].y - neurons[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            connections.push({
              from: i,
              to: j,
              strength: 1 - distance / connectionDistance,
              pulsePosition: (Math.sin(neurons[i].pulsePhase) + 1) / 2,
              pulseDirection: Math.random() > 0.5 ? 1 : -1
            })
            connectionCount++
          }
        }
      }

      // Draw connections (synapses)
      connections.forEach((conn) => {
        const from = neurons[conn.from]
        const to = neurons[conn.to]

        // Main connection line
        const gradient = ctx.createLinearGradient(from.x, from.y, to.x, to.y)
        const alpha = conn.strength * 0.15
        gradient.addColorStop(0, `rgba(0, 122, 255, ${alpha})`)
        gradient.addColorStop(0.5, `rgba(147, 51, 234, ${alpha * 1.5})`)
        gradient.addColorStop(1, `rgba(0, 122, 255, ${alpha})`)

        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.strokeStyle = gradient
        ctx.lineWidth = conn.strength * 1.5
        ctx.stroke()

        // Pulse traveling along the connection
        const pulseX = from.x + (to.x - from.x) * conn.pulsePosition
        const pulseY = from.y + (to.y - from.y) * conn.pulsePosition

        const pulseGradient = ctx.createRadialGradient(pulseX, pulseY, 0, pulseX, pulseY, 8)
        pulseGradient.addColorStop(0, `rgba(0, 200, 255, ${conn.strength * 0.6})`)
        pulseGradient.addColorStop(1, 'rgba(0, 200, 255, 0)')

        ctx.beginPath()
        ctx.arc(pulseX, pulseY, 4, 0, Math.PI * 2)
        ctx.fillStyle = pulseGradient
        ctx.fill()
      })

      // Draw neurons (nodes)
      neurons.forEach((neuron) => {
        const pulse = (Math.sin(neuron.pulsePhase) + 1) / 2
        const glowRadius = neuron.radius + pulse * 8

        // Outer glow
        const glowGradient = ctx.createRadialGradient(
          neuron.x, neuron.y, 0,
          neuron.x, neuron.y, glowRadius
        )
        glowGradient.addColorStop(0, `rgba(0, 122, 255, ${0.3 + pulse * 0.3})`)
        glowGradient.addColorStop(0.5, `rgba(147, 51, 234, ${0.1 + pulse * 0.1})`)
        glowGradient.addColorStop(1, 'rgba(0, 122, 255, 0)')

        ctx.beginPath()
        ctx.arc(neuron.x, neuron.y, glowRadius, 0, Math.PI * 2)
        ctx.fillStyle = glowGradient
        ctx.fill()

        // Core
        ctx.beginPath()
        ctx.arc(neuron.x, neuron.y, neuron.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${0.6 + pulse * 0.4})`
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[1] opacity-60"
      style={{ pointerEvents: 'none' }}
    />
  )
}
