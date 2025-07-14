import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { ShaderMaterial } from 'three'

import fragmentShader from './shaders/f.glsl?raw'
import vertexShader from './shaders/vertexShader.glsl?raw'

export default function Block3d() {
  const shaderMaterialRef = useRef<ShaderMaterial>(null)
  // const mesh = useRef() as MutableRefObject<HTM?LDivElement>
  // const mesh = useRef<ShaderMaterial | undefined>()

  const uniforms = useMemo(
    () => ({
      uTime: {
        value: 0.0,
      },
    }),
    []
  )

  useFrame(({ clock }) => {
    if (shaderMaterialRef.current?.uniforms) {
      // console.log(shaderMaterialRef.current.uniforms)
      shaderMaterialRef.current.uniforms.uTime.value = clock.elapsedTime * 2
    }
  })

  return (
    <mesh position={[0, 3, 0]}>
      <planeGeometry args={[22, 20, 30, 10]} />
      <shaderMaterial
        ref={shaderMaterialRef}
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
        transparent={true}
      />
    </mesh>
  )
}
