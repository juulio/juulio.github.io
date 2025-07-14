#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUv;
varying float vZ;
uniform float uTime;

void main() {
  vUv = uv;
  
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  
  // Subtle wave animation
  modelPosition.z += sin(modelPosition.x * 2.0 + uTime * 1.0) * 0.05;
  modelPosition.z += cos(modelPosition.y * 3.0 + uTime * 1.5) * 0.03;
  
  vZ = modelPosition.z;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}