precision mediump float;

varying vec2 vUv;
uniform float uTime;

void main() {
    vUv = uv;

    // vec3 transformed = position;
    // transformed.z += sin(position.y + position.x + position.z + uTime * 7.0);
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}