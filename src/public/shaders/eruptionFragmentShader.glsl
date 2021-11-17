#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUv;
uniform float uTime;
uniform sampler2D uTexture;

void main() {
    float time = uTime;
    
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);

}
