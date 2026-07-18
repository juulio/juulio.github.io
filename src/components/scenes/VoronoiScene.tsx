import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function VoronoiScene() {
  const meshRef = useRef(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // @ts-ignore
      meshRef.current.rotation.x += 0.001
      // @ts-ignore
      meshRef.current.rotation.y += 0.002
    }
  })

  return (
    <mesh ref={meshRef}>
      <torusGeometry args={[3, 1, 100, 100]} />
      <meshStandardMaterial
        color={0x64c8ff}
        wireframe={true}
        emissive={0x64c8ff}
        emissiveIntensity={0.5}
      />
    </mesh>
  )
}
