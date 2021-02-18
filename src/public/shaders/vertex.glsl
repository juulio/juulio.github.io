uniform float delta;
uniform vec2 uvScale;
varying vec2 vUv;

void main() {
    vUv = uvScale * uv;
    vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;
    gl_PointSize = 256.0;
}