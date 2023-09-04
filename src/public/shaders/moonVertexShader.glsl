precision mediump float;

varying vec2 vUv;
uniform float uTime;
varying vec3 vPos;

void main() {
    vUv = uv;
    vPos = position;
    vec3 transformed = position;
    transformed.x += sin(position.x + uTime) / 5.0;
    transformed.y += sin(position.y + position.x + position.z + uTime) / 6.0;

    gl_Position = projectionMatrix * modelViewMatrix * vec4( transformed, 1.0 );
}