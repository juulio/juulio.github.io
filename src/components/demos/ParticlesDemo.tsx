import { useRef, useEffect } from 'react'

export default function ParticlesDemo() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Placeholder: Simple particle animation
    let animationId: number

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
    }> = []

    const createParticles = () => {
      for (let i = 0; i < 50; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 1,
        })
      }
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.x += p.vx
        p.y += p.vy
        p.life -= 0.01

        if (
          p.x < 0 ||
          p.x > canvas.width ||
          p.y < 0 ||
          p.y > canvas.height ||
          p.life <= 0
        ) {
          particles.splice(i, 1)
        }

        ctx.fillStyle = `rgba(100, 200, 255, ${p.life})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, 2, 0, Math.PI * 2)
        ctx.fill()
      })

      if (Math.random() < 0.1) {
        createParticles()
      }

      animationId = requestAnimationFrame(animate)
    }

    createParticles()
    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
        backgroundColor: '#0a0e27',
      }}
    />
  )
}
