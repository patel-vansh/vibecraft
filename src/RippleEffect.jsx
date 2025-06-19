import { useEffect, useRef } from 'react'
import './RippleEffect.css'

export default function RippleEffect() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    resize()
    window.addEventListener('resize', resize)

    let ripples = []

    const addRipple = (x, y) => {
      const rect = container.getBoundingClientRect()
      ripples.push({ x: x - rect.left, y: y - rect.top, radius: 0, alpha: 1 })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ripples.forEach((ripple, index) => {
        ripple.radius += 2
        ripple.alpha -= 0.02

        if (ripple.alpha <= 0) {
          ripples.splice(index, 1)
          return
        }

        ctx.beginPath()
        ctx.arc(ripple.x, ripple.y, ripple.radius, 0, 2 * Math.PI)
        ctx.strokeStyle = `rgba(100, 100, 255, ${ripple.alpha})`
        ctx.lineWidth = 2
        ctx.stroke()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleMove = e => addRipple(e.clientX, e.clientY)

    container.addEventListener('mousemove', handleMove)

    return () => {
      container.removeEventListener('mousemove', handleMove)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <div className="ripple-container" ref={containerRef}>
      <canvas ref={canvasRef} className="ripple-canvas" />
      <div className="ripple-content">
        {/* Put your content here or wrap children via props */}
        <p style={{ padding: '2rem', textAlign: 'center' }}>
          Hover over this section to see ripple effect!
        </p>
      </div>
    </div>
  )
}
