import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Color } from 'three'

import fragmentShader from './shaders/f.glsl?raw'
import vertexShader from './shaders/vertexShader.glsl?raw'

export default function Block3d() {
  const mesh = useRef()

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0.0,
      },
      u_colorA: { value: new Color('#00E426') },
      u_colorB: { value: new Color('#FEB3A9') },
    }),
    []
  )

  useFrame((state) => {
    const { clock } = state
    mesh.current.material.uniforms.uTime.value = clock.getElapsedTime()
  })

  return (
    <mesh ref={mesh} position={[0, 3, 0]}>
      <planeGeometry args={[22, 20, 30, 10]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
        transparent={true}
      />
    </mesh>
  )
}
