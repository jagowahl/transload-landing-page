'use client'
import { useEffect, useRef } from 'react'

const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8']

interface Route {
  startX: number
  startY: number
  endX: number
  endY: number
  color: string
  progress: number
}

export default function WarehouseAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const routes: Route[] = []
    const numRoutes = 10

    for (let i = 0; i < numRoutes; i++) {
      routes.push({
        startX: Math.random() * canvas.width,
        startY: Math.random() * canvas.height,
        endX: Math.random() * canvas.width,
        endY: Math.random() * canvas.height,
        color: colors[Math.floor(Math.random() * colors.length)],
        progress: 0
      })
    }

    const drawWarehouse = () => {
      ctx.fillStyle = '#f0f0f0'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw grid
      ctx.strokeStyle = '#d0d0d0'
      ctx.lineWidth = 1
      for (let x = 0; x < canvas.width; x += 50) {
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)
        ctx.stroke()
      }
      for (let y = 0; y < canvas.height; y += 50) {
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)
        ctx.stroke()
      }

      // Draw shelves
      ctx.fillStyle = '#a0a0a0'
      for (let x = 50; x < canvas.width - 100; x += 150) {
        for (let y = 50; y < canvas.height - 100; y += 150) {
          ctx.fillRect(x, y, 100, 20)
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawWarehouse()

      routes.forEach((route) => {
        ctx.strokeStyle = route.color
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.moveTo(route.startX, route.startY)
        const x = route.startX + (route.endX - route.startX) * route.progress
        const y = route.startY + (route.endY - route.startY) * route.progress
        ctx.lineTo(x, y)
        ctx.stroke()

        route.progress += 0.005
        if (route.progress > 1) {
          route.startX = route.endX
          route.startY = route.endY
          route.endX = Math.random() * canvas.width
          route.endY = Math.random() * canvas.height
          route.progress = 0
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="w-full h-64 md:h-96 rounded-lg shadow-md" />
}

