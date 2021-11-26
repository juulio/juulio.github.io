precision mediump float;

varying vec2 vUv;
uniform float uTime;

void main() {
    vUv = uv;

    // vec3 transformed = position;
    // transformed.z += abs(sin( uTime));
    // gl_Position = projectionMatrix * modelViewMatrix * vec4( transformed, 1.0 );
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}