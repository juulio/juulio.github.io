import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { BufferGeometry, Points, PointsMaterial } from 'three'

interface Particle {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  life: number
}

export default function ParticlesScene() {
  const pointsRef = useRef<Points>(null)
  const particlesRef = useRef<Particle[]>([])
  const geometryRef = useRef<BufferGeometry>(null)

  const particleCount = 500
  const positions = useMemo(
    () => new Float32Array(particleCount * 3),
    [particleCount],
  )

  const createParticles = () => {
    const particles = particlesRef.current
    for (let i = particles.length; i < particleCount; i++) {
      particles.push({
        x: (Math.random() - 0.5) * 10,
        y: (Math.random() - 0.5) * 10,
        z: (Math.random() - 0.5) * 10,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        vz: (Math.random() - 0.5) * 0.2,
        life: 1,
      })
    }
  }

  useMemo(() => {
    createParticles()
  }, [])

  useFrame(() => {
    const particles = particlesRef.current
    let activeCount = 0

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i]
      p.x += p.vx
      p.y += p.vy
      p.z += p.vz
      p.life -= 0.005

      if (p.life <= 0) {
        p.life = 1
        p.x = (Math.random() - 0.5) * 10
        p.y = (Math.random() - 0.5) * 10
        p.z = (Math.random() - 0.5) * 10
      }

      positions[i * 3] = p.x
      positions[i * 3 + 1] = p.y
      positions[i * 3 + 2] = p.z
      activeCount++
    }

    if (geometryRef.current) {
      geometryRef.current.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color={0x64c8ff}
        sizeAttenuation={true}
        transparent={true}
      />
    </points>
  )
}
