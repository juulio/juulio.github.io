#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUv;
uniform float uTime;
uniform sampler2D uTexture;

void main() {
    float time = uTime / 3.0;

    vec2 uv = vUv;
    uv.x += sin(uv.y) * 0.5;
    uv = fract(uv + vec2(0.0, time));

    vec4 color = texture2D(uTexture, uv);
    gl_FragColor = color;

}
