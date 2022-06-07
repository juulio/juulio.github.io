#ifdef GL_ES
precision mediump float;
#endif

varying vec2 vUv;
varying vec3 vPos;
uniform float uTime;
uniform sampler2D uTexture;

void main() {
    float time = uTime / 3.0;

    vec2 uv = vUv;
    uv.x += sin(uv.y) * 0.3;
    uv = fract(uv + vec2(0.1, time));

    vec4 color = texture2D(uTexture, uv);
    vec3 texture = texture2D(uTexture, uv).rgb;
    gl_FragColor = color;

    // these two lines will add a shadow to the back side of the geometry
    // float shadow = clamp(vPos.z / 0.4, 0., 1.);
    // gl_FragColor = vec4(texture * shadow, 1.);
}
