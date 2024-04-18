precision mediump float;

varying vec2 vUv;
uniform float uTime;
varying vec3 vPos;

void main() {
    vUv = uv;
    vPos = position;
    vec3 transformed = position;
    transformed.x += sin(position.x + uTime);
    transformed.y += sin(position.y + position.x + position.z + uTime);

    gl_Position = projectionMatrix * modelViewMatrix * vec4( transformed, 1.0 );
}