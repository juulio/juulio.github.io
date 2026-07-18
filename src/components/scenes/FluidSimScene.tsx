import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function FluidSimScene() {
  const meshRef = useRef(null)

  useFrame(({ clock }) => {
    if (meshRef.current) {
      // @ts-ignore
      meshRef.current.position.y = Math.sin(clock.elapsedTime) * 2
      // @ts-ignore
      meshRef.current.rotation.z += 0.003
    }
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 6]} />
      <meshPhongMaterial
        color={0x64c8ff}
        wireframe={true}
        emissive={0x3366ff}
        emissiveIntensity={0.3}
      />
    </mesh>
  )
}
