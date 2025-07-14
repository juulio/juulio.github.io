#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUv;
varying float vZ;
uniform float uTime;

void main() {
  vUv = uv;
  
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  
  // Lava-like bubbling and flowing motion
  float bubbleEffect = sin(modelPosition.x * 4.0 + uTime * 2.0) * 
                       cos(modelPosition.y * 3.0 + uTime * 1.5) * 0.03;
  
  // Add flowing waves like lava streams
  modelPosition.z += sin(modelPosition.x * 2.0 + uTime * 1.0) * 0.04;
  modelPosition.z += cos(modelPosition.y * 3.0 + uTime * 1.5) * 0.03;
  
  // Add the bubbling effect
  modelPosition.z += bubbleEffect;
  
  // Add some random turbulence
  modelPosition.z += sin(modelPosition.x * 8.0 + modelPosition.y * 6.0 + uTime * 3.0) * 0.01;
  
  vZ = modelPosition.z;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}