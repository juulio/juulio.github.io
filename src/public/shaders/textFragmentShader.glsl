#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUv;
uniform float uTime;
uniform sampler2D uTexture;

//
uniform vec3 color;
uniform float brightness;   // added uniform to control brightness
//

void main() {
    float time = uTime / 3.0;

    vec2 uv = vUv;
    uv.x += sin(uv.y) * 0.5;
    uv = fract(uv + vec2(0.0, time));

    // vec4 color = texture2D(uTexture, uv);
    vec4 color = texture2D(uTexture, uv).rgba;
    gl_FragColor = color;

    // gl_FragColor = vec4(tColor * brightness, a);  // scale brightness of rgb channels
}
