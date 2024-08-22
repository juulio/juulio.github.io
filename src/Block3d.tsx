import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Color } from 'three'

import fragmentShader from './shaders/f.glsl'
import vertexShader from './shaders/vertexShader.glsl'

export default function Block3d() {
  const mesh = useRef()

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0.0,
      },
      u_colorA: { value: new Color('#0FE486') },
      u_colorB: { value: new Color('#FEB3D9') },
    }),
    []
  )

  useFrame((state) => {
    const { clock } = state
    mesh.current.material.uniforms.uTime.value = clock.getElapsedTime()
  })

  return (
    <mesh ref={mesh} position={[0, 1, 0]}>
      <planeGeometry args={[7, 1, 30, 10]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={true}
      />
    </mesh>
  )
}
