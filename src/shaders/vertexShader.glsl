#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUv;
varying float vZ;
uniform float uTime;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  
  modelPosition.x += sin(modelPosition.x * 5.0 + uTime * 3.0) * 0.1;
  modelPosition.x += sin(modelPosition.z * 6.0 + uTime * 2.0) * 0.1;
  
  vZ = modelPosition.x;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projectedPosition = projectionMatrix * viewPosition;

  gl_Position = projectedPosition;
}